// Central content for the shell. Move to Sanity once the CMS is connected.

export const site = {
  name: "Neuroplay Lab",
  url: "https://www.neuroplaylab.com",
  description:
    "Psychologists at the University of Plymouth studying how board games help neurodivergent people connect.",
  email: "neuroplaylab@outlook.com", // TODO: confirm this is the public address
  // Links with an empty href are not rendered. Add real URLs when supplied.
  socials: [
    { label: "LinkedIn", href: "" },
    { label: "Instagram", href: "" },
    { label: "X", href: "" },
    { label: "Facebook", href: "" },
  ],
};

export const nav = [
  { href: "/research", label: "Research" },
  { href: "/games", label: "Games" },
  { href: "/team", label: "Team" },
  { href: "/news", label: "News & press" },
];
export const ctaLink = { href: "/work-with-us", label: "Work with us" };
export const pressKit = { href: "/news/press-kit", label: "Press kit" };

export const proof = [
  { text: "20+ peer-reviewed papers on tabletop gaming for social good", tone: "bg-green" },
  { text: "An open dataset of more than 1,500 board gamers", tone: "bg-pink" },
  {
    text: "Covered by Newsweek, Forbes, the New York Times Magazine and Scientific American",
    tone: "bg-sky",
  },
  { text: "Co-designed Dixit Access+ with Asmodee", tone: "bg-lavender" },
];

export const routes = [
  {
    href: "/research",
    title: "Research",
    text: "Peer-reviewed studies, open data and measures on board games and neurodivergence.",
    tone: "bg-sky",
  },
  {
    href: "/games",
    title: "Games",
    text: "Tabletop games we make or helped make accessible, including NeuroGenesis and Dixit Access+.",
    tone: "bg-pink",
  },
  {
    href: "/work-with-us",
    title: "Work with us",
    text: "Psychological design consultancy for game publishers and studios.",
    tone: "bg-green",
    primary: true,
  },
  {
    href: "/news",
    title: "News & press",
    text: "Coverage, talks, the press kit and the Rolling Well conference.",
    tone: "bg-lavender",
  },
];

// TODO: replace with a Sanity query returning the newest publication, press or news item.
export const latest = [
  {
    kind: "Conference",
    date: "29–30 July 2026",
    title: "Rolling Well 2026 brought researchers and practitioners together at The Amelia Scott",
    href: "/news/rolling-well",
  },
];

export const services = [
  {
    title: "Design review against the literature",
    text: "We read your game's design alongside the psychological research and tell you where it holds up and where it doesn't.",
  },
  {
    title: "Language that matches the science",
    text: "We help you name mechanics and components so the terms you use mean what the research means by them.",
  },
  {
    title: "Defensible marketing and packaging",
    text: "We check the claims on your box and in your marketing against the evidence before they go to print.",
  },
  {
    title: "Player research",
    text: "We run studies with the people you're designing for and report what they tell us.",
  },
  {
    title: "Written feedback on prototypes",
    text: "We give iterative written feedback as your prototype develops, round by round.",
  },
];

export const currentWork = [
  { client: "Boardovea", text: "Exploring mindfulness in a puzzle game." },
  {
    client: "FIRAH (French Institute of Disability Research)",
    text: "Writing a white paper on the benefits of games for autistic children.",
  },
];
