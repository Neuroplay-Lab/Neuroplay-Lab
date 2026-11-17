// News & press content. Coverage comes from the existing pressArticles.json;
// the rest lives here until it moves into the CMS.
import rawPress from "./pressArticles.json";
import { site } from "./site";

export type PressItem = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  date: string;
  tags?: string[];
  hidden?: boolean;
};

const yearOf = (d: string) => Number(d.match(/(19|20)\d{2}/)?.[0] ?? 0);
const stamp = (d: string) => {
  const t = Date.parse(d);
  return Number.isNaN(t) ? Date.UTC(yearOf(d), 0, 1) : t;
};

/** All visible coverage, newest first */
export const allCoverage: PressItem[] = (rawPress as unknown as PressItem[])
  .filter((p) => !p.hidden)
  .sort((a, b) => stamp(b.date) - stamp(a.date));
export const coverageYear = (p: PressItem) => yearOf(p.date);

/** N1: up to eight items tagged "featured", newest first */
export const featuredCoverage = allCoverage.filter((p) => p.tags?.includes("featured")).slice(0, 8);

// ---- Press kit (N2). DRAFT copy: the Lab should approve every line. ----
export const pressKit = {
  description50:
    "The Neuroplay Lab is a psychology research group at the University of Plymouth, led by Dr Gray Atherton and Dr Liam Cross. It studies play, games and neurodiversity, especially how board games and gaming communities support belonging, identity and social connection for autistic and other neurodivergent people, and co-produces games.",
  description150:
    "The Neuroplay Lab is a psychology research group at the University of Plymouth, led by Dr Gray Atherton and Dr Liam Cross. It studies play, games and neurodiversity, principally how board games and gaming communities support belonging, identity and social connection for autistic and other neurodivergent people. The Lab has published more than twenty peer-reviewed papers, released an open dataset of more than 1,500 board gamers and developed a qualitative research method that uses the game Dixit. It also advises game publishers, having worked with Asmodee on Dixit Access+, an accessible edition of Dixit, and is co-producing tabletop games of its own, starting with NeuroGenesis. Current projects also include work with Boardovea and the French Institute of Disability Research. Atherton and Cross co-organise Rolling Well, a conference on gaming for health and wellbeing. Their work has been widely covered by Newsweek, Forbes, the New York Times Magazine and Scientific American.",
  stats: [
    { figure: "20+", label: "peer-reviewed publications on tabletop gaming for social good" },
    { figure: "1,500+", label: "board gamers in the Lab's open dataset" },
    { figure: "100+", label: "press items, including Newsweek, Forbes, the New York Times Magazine and Scientific American" },
    { figure: "Asmodee", label: "collaboration on Dixit Access+, an accessible edition of Dixit" },
  ],
  // Pronouns are deliberately avoided; add them if the researchers prefer.
  bios: [
    {
      name: "Dr Gray Atherton",
      text: "Dr Gray Atherton is a psychologist at the University of Plymouth. Atherton's research examines how neurodivergent people experience the social world, with a focus on gaming as a space for connection, skill building and wellbeing, including through the Rolling Well initiative. Atherton also studies anthropomorphism and embodied social processing. Atherton holds a BSc in Child Development from Vanderbilt University and an MEd in Counselling Psychology and a PhD in Educational Psychology and Individual Differences from the University of Houston, and received a U.S. Department of Education FEEAR Fellowship that supported research at Sunway University, Malaysia.",
    },
    {
      name: "Dr Liam Cross",
      text: "Dr Liam Cross is a psychologist at the University of Plymouth. Cross's research uses games as a context for understanding social behaviour, drawing on large behavioural datasets to inform designers and practitioners, with a particular interest in coordinated movement, communication and shared attention, and in how game content shapes attitudes and social perception. Cross holds a BSc in Psychology from Lancaster University and a PhD in Psychology from Leeds Beckett University, on how coordinated rhythmic movement affects relationships and group dynamics, and has worked at Lancaster University, Sunway University and Central European University.",
    },
  ],
  // Add headshots as { name, src: "/press-kit/gray-atherton.jpg", alt }. The section stays hidden while empty.
  headshots: [] as { name: string; src: string; alt: string }[],
  logos: [
    { name: "Horizontal, colour", file: "neuroplay-lab-logo-horizontal-colour.png", on: "bg-paper" },
    { name: "Stacked, colour", file: "neuroplay-lab-logo-stacked-colour.png", on: "bg-paper" },
    { name: "With tagline, colour", file: "neuroplay-lab-logo-tagline-colour.png", on: "bg-paper" },
    { name: "Horizontal, black and white", file: "neuroplay-lab-logo-horizontal-black-white.png", on: "bg-ink" },
    { name: "Brain mark", file: "neuroplay-lab-brain-mark.png", on: "bg-sky" },
  ],
};

export const pressMailto = `mailto:${site.email}?subject=${encodeURIComponent("[Press enquiry]")}`;

// ---- Talks and videos (N3). Venue and date are shown only when known. ----
export type Talk = { id: string; title: string; venue?: string; date?: string };
export const talkGroups: { heading: string; talks: Talk[] }[] = [
  {
    heading: "Board games",
    talks: [
      { id: "uJHCDN_oXZw", title: "Autism and Board Games" },
      { id: "sETDcjN08b8", title: "Mandi Hutchinson's interview of Drs Liam Cross and Gray Atherton" },
      { id: "P3Fpc2mpE0s", title: "Board Gaming on the Spectrum" },
      { id: "pGyHYireQCs", title: "Asmodee Research: Boardgames as an education and care practice", venue: "SPIEL 2022, Educators' Day", date: "2022" },
    ],
  },
  {
    heading: "Autism",
    talks: [
      { id: "V-wcTCVh-oc", title: "Pet Ownership and Autism" },
      { id: "_9ctfGPeEIY", title: "How Age, and Age of Diagnosis, Affect Quality of Life" },
      { id: "sD20xIDp-Jc", title: "Gender and Autism" },
    ],
  },
  {
    heading: "Synchrony",
    talks: [
      { id: "9sTUw5QLarU", title: "How Moving Together Binds Us Together, Dr Liam Cross" },
      { id: "KOLQowzoHBA", title: "An open access virtual reality drumming application for fostering pro-sociality, Liam Cross" },
    ],
  },
  {
    heading: "Anthropomorphism",
    talks: [
      { id: "h7Q9r5cMdy4", title: "Anthropomorphism and Autism" },
      { id: "4vCBwvieryw", title: "Anthropomorphism and Autism (second talk)" },
    ],
  },
];

// ---- Rolling Well (N4) ----
export const rollingWell = {
  site: "https://rollingwell.org.uk",
  what: "Rolling Well is a conference on gaming for health and wellbeing. It brings together researchers, practitioners and community organisers to explore tabletop role-playing games in wellbeing-focused contexts. Gray Atherton and Liam Cross co-organise it.",
  editions: [
    { year: 2026, dates: "29–30 July 2026", venue: "The Amelia Scott, Tunbridge Wells", href: "https://rollingwell.org.uk", note: "Programme and speakers on the Rolling Well site" },
  ],
  // When the next dates are announced, fill this in: { dates: "...", venue: "...", href: "..." }
  next: null as null | { dates: string; venue: string; href: string },
  // Add photographs from the Lab as { src: "/rolling-well/2026-01.jpg", alt: "..." }. Hidden while empty.
  photos: [] as { src: string; alt: string }[],
};
