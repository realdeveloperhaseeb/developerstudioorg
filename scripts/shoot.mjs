// Captures desktop and mobile full-page screenshots of the project sites
// using Chrome's DevTools protocol. No npm packages needed (Node 22+).
// Usage: node scripts/shoot.mjs <outDir>
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, mkdtempSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const outDir = process.argv[2] ?? "scripts/shots-raw";
mkdirSync(outDir, { recursive: true });

// Override with SHOOT_SITES="slug=url,slug=url" to capture other pages.
const SITES = process.env.SHOOT_SITES
  ? process.env.SHOOT_SITES.split(",").map((pair) => pair.split("="))
  : [
  ["formula-drive", "https://formula-drive.vercel.app/"],
  ["apex-roofing", "https://roofing-services.vercel.app/"],
  ["adorned-by-ifra", "https://adorned-by-ifra.vercel.app/"],
  ["nat-berman", "https://nat-ui-improved.vercel.app/"],
  ["stayright", "https://stayright-two.vercel.app/"],
];
const VIEWS = [
  ["desktop", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false }],
  ["mobile", { width: 390, height: 844, deviceScaleFactor: Number(process.env.SHOOT_DPR) || 2, mobile: !process.env.NO_MOBILE_EMULATION }],
];
const MAX_H = { desktop: Number(process.env.SHOOT_MAX_H) || 6000, mobile: Number(process.env.SHOOT_MAX_H) || 7000 };

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const port = 9333;
const profile = mkdtempSync(join(tmpdir(), "shoot-"));
const chrome = spawn(CHROME, [
  "--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${profile}`,
  "--hide-scrollbars", "--no-first-run", "--no-default-browser-check", "about:blank",
], { stdio: "ignore" });

async function getWsUrl() {
  for (let i = 0; i < 50; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      const page = list.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(300);
  }
  throw new Error("Chrome did not start");
}

const ws = new WebSocket(await getWsUrl());
await new Promise((r) => ws.addEventListener("open", r, { once: true }));
let id = 0;
const pending = new Map();
const listeners = [];
ws.addEventListener("message", (e) => {
  const msg = JSON.parse(e.data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
  } else if (msg.method) listeners.forEach((l) => l(msg));
});
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const n = ++id;
    pending.set(n, { resolve, reject });
    ws.send(JSON.stringify({ id: n, method, params }));
  });
const waitFor = (method, timeout = 30000) =>
  new Promise((resolve) => {
    const t = setTimeout(resolve, timeout);
    listeners.push((m) => { if (m.method === method) { clearTimeout(t); resolve(m); } });
  });
const withTimeout = (p, ms, label) =>
  Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error(`timeout: ${label}`)), ms))]);
const evaluate = async (expression) =>
  (await withTimeout(send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true }), 60000, "evaluate")).result.value;
// Optional filter: node scripts/shoot.mjs outDir slug:view,slug:view
const only = process.argv[3] ? process.argv[3].split(",") : null;

await send("Page.enable");
if (!process.env.SHOOT_MOTION) await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
await send("Runtime.enable");

for (const [slug, url] of SITES) {
  for (const [view, metrics] of VIEWS) {
    if (only && !only.includes(`${slug}:${view}`)) continue;
    try {
    await send("Emulation.setDeviceMetricsOverride", metrics);
    await send("Emulation.setUserAgentOverride", {
      userAgent: metrics.mobile
        ? "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1"
        : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36",
    });
    const loaded = waitFor("Page.loadEventFired");
    await send("Page.navigate", { url });
    await loaded;
    await sleep(metrics.mobile ? 7000 : 2500);
    if (metrics.mobile) await evaluate(`(async () => {
      scrollTo(0, 400); await new Promise(r => setTimeout(r, 800));
      scrollTo(0, 0); await new Promise(r => setTimeout(r, 2500));
    })()`);
    // Mobile captures are one screen, so skip the scroll pass: it leaves sticky headers
    // in their scrolled state. Desktop scrolls so lazy content renders in the tall capture.
    if (!metrics.mobile) await evaluate(`(async () => {
      const step = innerHeight * 0.6;
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        scrollTo(0, y); await new Promise(r => setTimeout(r, 180));
      }
      scrollTo(0, 0); await new Promise(r => setTimeout(r, 1200));
    })()`);
    // Hide cookie banners and chat widgets that would cover the capture.
    await evaluate(`document.querySelectorAll('[class*="cookie" i],[id*="cookie" i],[class*="consent" i]').forEach(el => { if (getComputedStyle(el).position === 'fixed') el.style.display = 'none'; })`);
    // SHOOT_EVAL: run a script on the page first (for example, to fill and submit a form).
    if (process.env.SHOOT_EVAL) console.log("eval:", await evaluate(process.env.SHOOT_EVAL));
    // SHOOT_SCROLL_Y: capture one screen at that scroll position instead of the full page.
    if (process.env.SHOOT_SCROLL_Y) {
      await evaluate(`(async () => { scrollTo(0, ${Number(process.env.SHOOT_SCROLL_Y)}); await new Promise(r => setTimeout(r, 2500)); })()`);
      const shot = await send("Page.captureScreenshot", { format: "png" });
      writeFileSync(join(outDir, `${slug}-${view}.png`), Buffer.from(shot.data, "base64"));
      console.log(`saved ${slug}-${view} at scroll ${process.env.SHOOT_SCROLL_Y}`);
      continue;
    }
    const fullH = await evaluate("document.documentElement.scrollHeight");
    // Desktop: tall capture for the scroll-on-hover mockup. Mobile: one phone screen,
    // because tall mobile captures stretch fixed headers and 100vh sections.
    const tall = view === "desktop" || !!process.env.SHOOT_MOBILE_TALL;
    const h = tall ? Math.min(fullH, MAX_H[view]) : metrics.height;
    const shot = await withTimeout(send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: tall,
      clip: { x: 0, y: 0, width: metrics.width, height: h, scale: 1 },
    }), 90000, "capture");
    const file = join(outDir, `${slug}-${view}.png`);
    writeFileSync(file, Buffer.from(shot.data, "base64"));
    console.log(`saved ${file} (${metrics.width}x${h}, page ${fullH})`);
    } catch (err) {
      console.log(`failed ${slug}-${view}: ${err.message}`);
    }
  }
}

ws.close();
chrome.kill();
