// Only list people who currently work with DeveloperStudio.
// Bios and team base (UK or PK) are placeholders until confirmed.
export type Member = {
  name: string;
  role: string;
  base: "UK team" | "PK team" | "[UK or PK team]";
  bio: string;
  photo: string | null;
  linkedin: string | null;
};

export const team: Member[] = [
  {
    name: "Haseeb Ahmad",
    role: "Founder",
    base: "[UK or PK team]",
    bio: "Haseeb founded DeveloperStudio and leads strategy and client work. [Add a two-line bio]",
    photo: "/images/team/haseeb-founder.png",
    linkedin: null,
  },
  {
    name: "Abida Siddiqui",
    role: "Co-Founder and CMO, Paid Ads",
    base: "[UK or PK team]",
    bio: "Abida leads marketing and paid advertising across Google and Meta. [Add a two-line bio]",
    photo: "/images/team/abida-siddiqui-cmo.webp",
    linkedin: null,
  },
  {
    name: "Abdul Sattar",
    role: "Full Stack Web Developer",
    base: "[UK or PK team]",
    bio: "Abdul builds the websites and web apps, from page templates to calculators and integrations. [Add a two-line bio]",
    photo: "/images/team/abdul-sattar-full-stack-web-developer.jpeg",
    linkedin: null,
  },
  {
    name: "Amna",
    role: "Business Developer",
    base: "[UK or PK team]",
    bio: "Amna looks after new enquiries and makes sure every project starts with a clear plan. [Add a two-line bio]",
    photo: "/images/team/amna-business-developer.jpeg",
    linkedin: null,
  },
  {
    name: "Abdullah",
    role: "Lead Designer",
    base: "[UK or PK team]",
    bio: "Abdullah designs the websites and brand assets. [Add a photo and a two-line bio, or remove if no longer on the team]",
    photo: null,
    linkedin: null,
  },
];
