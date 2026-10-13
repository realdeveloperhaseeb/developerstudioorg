import { CountUpOnView } from "./CountUpOnView";

// Turns a figure such as "818", "~$12.71", "£5.45", "9.3%" or "17 days" into a count-up,
// keeping its prefix and suffix. Anything that is not a plain number is shown as written.
export function StatValue({ value }: { value: string }) {
  const m = value.match(/^([^\d]*?)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return <>{value}</>;
  const [, prefix, num, suffix] = m;
  const n = Number(num.replace(/,/g, ""));
  if (!Number.isFinite(n)) return <>{value}</>;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return <CountUpOnView value={n} decimals={decimals} prefix={prefix} suffix={suffix} />;
}
