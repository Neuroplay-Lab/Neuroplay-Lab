// Research content. Publications and press come from the existing JSON files in the repo;
// topics and measures live here until they move into the CMS.
import rawPublications from "./publications.json";
import rawPress from "./pressArticles.json";

export type Publication = {
  id: string;
  title: string;
  url: string;
  author?: string[];
  journal?: string;
  volume?: string | number;
  number?: string | number;
  pages?: string | number;
  year?: number;
  abstract?: string;
  tags?: string[];
  hidden?: boolean;
  doi?: string; // optional: bare DOI, e.g. "10.1234/abcd"
  featured?: boolean; // optional: flag the 3-4 papers to read first
};

export type PressItem = {
  id: string; title: string; publisher: string; url: string; date: string; hidden?: boolean;
};

// Newest first, hidden papers removed (this also fixes the old filter bug)
export const allPublications: Publication[] = (rawPublications as unknown as Publication[])
  .filter((p) => !p.hidden)
  .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title));

const allPress = rawPress as unknown as PressItem[];

export type Link = { label: string; href: string };
export type Topic = {
  slug: string;
  title: string;
  short: string; // one-line summary for cards
  lead?: boolean;
  tone: string;
  image: { src: string; alt: string };
  intro: string[];
  findings?: { text: string; links?: Link[] }[];
  more?: { heading: string; body: string[] }[];
  videos?: { id: string; title: string }[];
  pressIds?: string[]; // ids from pressArticles.json
  match: (tags: string[]) => boolean;
  next: "consultancy" | "academic";
};

export const topics: Topic[] = [
  {
    slug: "board-games-and-neurodivergence",
    title: "Board games and neurodivergence",
    short:
      "How board games and gaming communities support belonging, identity and social connection for autistic and other neurodivergent people.",
    lead: true,
    tone: "bg-green",
    image: { src: "/research-topic-banners/board-game.webp", alt: "A group of people playing a board game" },
    intro: [
      "Games are one of the core social building blocks of early development. As well as improving skills like planning and inhibition control, they teach cooperation and joint attention and help us sharpen theory of mind skills such as strategising and bluffing.",
      "Our work focuses on how tabletop role-playing games and board games improve social skills, and how this can benefit autistic and otherwise neurodivergent people. We are also interested in exploring why it is that certain people are drawn to the hobby in the first place; and how environments can be designed to be more inclusive, accessible, and meaningful for diverse communities.",
      "We study the board gaming community directly, including an open dataset of more than 1,500 board gamers, and have developed a qualitative research method that uses the game Dixit.",
    ],
    // TODO (client): add 3-5 plain-language key findings for this topic, each with a link to the paper.
    // findings: [{ text: "...", links: [{ label: "...", href: "..." }] }],
    videos: [
      { id: "P3Fpc2mpE0s", title: "Board Gaming on the Spectrum - Liam Cross, Edge Hill University, UK" },
      { id: "pGyHYireQCs", title: "EDUCATORS' DAY - Asmodee Research: Boardgames as an education and care practice | SPIEL 2022" },
      { id: "uJHCDN_oXZw", title: "Full presentation: Autism and board games, presentation by Drs Liam Cross and Gray Atherton" },
      { id: "sETDcjN08b8", title: "Full Mandi Hutchinson's interview of Drs Liam Cross and Gray Atherton about autism and board games" },
    ],
    match: (t) => t.includes("gamification"),
    next: "consultancy",
  },
  {
    slug: "synchrony-and-social-cognition",
    title: "Synchrony and social cognition",
    short: "How moving in time with other people changes how we see ourselves and each other.",
    tone: "bg-sky",
    image: { src: "/research-topic-banners/synchrony-banner.webp", alt: "3 people in a field moving in synchrony" },
    intro: [
      "People regularly move in time with one another. We sing, dance and even walk in time with those around us. A great deal of work shows that moving together has pro-social consequences, such as increasing liking, rapport and cooperation. It also has a darker side: coordination can make people more likely to comply with the destructive requests of the people they coordinate with. Our work explores how, why and when coordination has the social consequences it does.",
      "Through quantitative and mixed-methods studies, this research suggests that coordination leads people to see themselves and their co-actors as members of a common group. Their sense of self is temporarily diluted as a shared identity becomes more prominent, which leads to a range of pro-group consequences.",
    ],
    findings: [
      {
        text: "Strict in-phase synchrony isn't required. Other forms of coordination, and even imagined coordination, can also have pro-social effects.",
        links: [
          { label: "Coordination study", href: "https://www.frontiersin.org/articles/10.3389/fpsyg.2016.01983/full" },
          { label: "Imagined coordination", href: "https://www.frontiersin.org/articles/10.3389/fpsyg.2017.01798/full" },
        ],
      },
      {
        text: "Incidental coordination, which isn't intentional, doesn't lead to the same effects.",
        links: [{ label: "Read the paper", href: "https://www.nature.com/articles/s41598-020-79796-9" }],
      },
      {
        text: "The pro-social effects last outside the lab, for at least 24 hours.",
        links: [{ label: "Read the paper", href: "https://www.sciencedirect.com/science/article/pii/S0001691819303968" }],
      },
      {
        text: "Greater pro-sociality is seen towards people who take part in the coordination, not observers, and not when co-actors already share a group.",
        links: [
          { label: "Observers", href: "https://www.tandfonline.com/doi/full/10.1080/00224545.2019.1623161" },
          { label: "Common group members", href: "https://link.springer.com/article/10.1007/s12144-019-00283-0" },
        ],
      },
      {
        text: "After coordinating, people are more likely to view their identities in social ways.",
        links: [{ label: "Read the paper", href: "https://www.degruyter.com/document/doi/10.1515/psych-2020-0110/html" }],
      },
      {
        text: "Actual and imagined coordination can both reduce prejudice towards disenfranchised groups.",
        links: [
          { label: "Actual", href: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0216585" },
          { label: "Imagined", href: "https://link.springer.com/article/10.1007/s12646-020-00568-6" },
        ],
      },
    ],
    videos: [
      { id: "9sTUw5QLarU", title: "How Moving Together Binds Us Together - Dr. Liam Cross" },
      { id: "KOLQowzoHBA", title: "An open access virtual reality application for fostering pro-sociality - Dr. Liam Cross" },
    ],
    match: (t) => t.includes("synchrony") || t.includes("social"),
    next: "academic",
  },
  {
    slug: "autism-and-wellbeing",
    title: "Autism and wellbeing",
    short: "How quality of life can be improved for autistic people, from later-in-life diagnosis to human-animal contact.",
    tone: "bg-pink",
    image: { src: "/research-topic-banners/autism-wellbeing.webp", alt: "A couple with linked arms and holding hands" },
    intro: [
      "Much of our research aims to improve social outcomes for autistic people of all ages. Some of this work looks at how quality of life can be improved, particularly for people diagnosed later in life. Other work, following our finding that autistic people are interested in the non-human, explores how human-animal contact can benefit autistic people.",
    ],
    more: [
      {
        heading: "Current projects",
        body: [
          "We are exploring hobbies that may be particularly engaging for autistic people, including board gaming and role-playing games.",
          "We are also exploring autistic people's special interests, and how these can be used to include autistic people in the community and improve the connection between autistic and non-autistic people.",
        ],
      },
    ],
    videos: [
      { id: "V-wcTCVh-oc", title: "Pet Ownership and Autism" },
      { id: "_9ctfGPeEIY", title: "How Age - and Age of Diagnosis - Affect Quality of Life" },
      { id: "sD20xIDp-Jc", title: "Gender and Autism" },
    ],
    match: (t) => t.includes("autism") && t.includes("wellbeing"),
    next: "academic",
  },
  {
    slug: "anthropomorphism",
    title: "Anthropomorphism and theory of mind",
    short: "Why autistic people often connect well with anthropomorphic characters, and what that means for theory of mind.",
    tone: "bg-lavender",
    image: { src: "/research-topic-banners/anthropomorphism.webp", alt: "A dog wearing a smart business suit" },
    intro: [
      "Anthropomorphism, or seeing the non-human as human, is one of our most natural social inclinations. By making the non-human human, we can better predict and understand behaviour. It is essentially an extension of theory of mind. Because of this link, many researchers proposed that autistic people might anthropomorphise less than non-autistic people. A great deal of work now shows this is not the case.",
      "Our work started with a qualitative study of how autistic adolescents approached a theory of mind task, and a review that found a clear link between autism and anthropomorphism. We then developed anthropomorphic versions of popular theory of mind tasks, including a cartoon version of the Reading the Mind in the Eyes task and an animal version of the Faux Pas task.",
    ],
    findings: [
      {
        text: "Autistic people anthropomorphise as much as, or even more than, non-autistic people.",
        links: [{ label: "Our review", href: "https://www.frontiersin.org/articles/10.3389/fpsyg.2018.00528/full" }],
      },
      {
        text: "Autistic children and adults perform better on anthropomorphic versions of theory of mind tasks than on the standard versions.",
        links: [
          { label: "Children", href: "https://link.springer.com/article/10.1007/s10803-019-04179-7" },
          { label: "Adults", href: "https://onlinelibrary.wiley.com/doi/full/10.1002/aur.2782" },
        ],
      },
      {
        text: "People with higher levels of autistic traits also perform better on the anthropomorphic versions.",
        links: [{ label: "Read the paper", href: "https://journals.sagepub.com/doi/10.1177/0033294120988135" }],
      },
      {
        text: "In some cases autistic people outperform their neurotypical counterparts.",
        links: [{ label: "Read the paper", href: "https://onlinelibrary.wiley.com/doi/full/10.1002/aur.2782" }],
      },
    ],
    match: (t) => (t.includes("autism") && t.includes("anthropomorphism")) || t.includes("theory of mind"),
    next: "academic",
  },
];

export const publicationsFor = (t: Topic) => allPublications.filter((p) => t.match(p.tags ?? []));
export const pressFor = (t: Topic) =>
  (t.pressIds ?? []).map((id) => allPress.find((p) => p.id === id)).filter((p): p is PressItem => !!p && !p.hidden);

// ---- Measures & Code (R4) ----
export type Measure = {
  name: string;
  kind: "Instruments" | "Software and code" | "Datasets";
  description?: string;
  href?: string;
  linkLabel?: string;
  licence?: string;
};

export const defaultLicence = "Free for non-profit research. Cite the relevant paper.";

// Links with no href show "Link coming soon". Check every href before launch.
export const measures: Measure[] = [
  { name: "Animal Faux Pas Test", kind: "Instruments", description: "An animal version of the Faux Pas theory of mind task.", href: "https://osf.io/ct2b6/" },
  { name: "Animal Filtered KDEF", kind: "Instruments", href: "https://osf.io/jpfqr/" },
  { name: "Cartoon Reading the Mind in the Eyes", kind: "Instruments", description: "A cartoon version of the Reading the Mind in the Eyes task." },
  { name: "Implicit Association Test", kind: "Instruments" },
  { name: "Tapping Paradigm", kind: "Instruments" },
  { name: "Preference Overlap Test", kind: "Instruments" },
  { name: "Automatic Imitation Task", kind: "Instruments" },
  {
    name: "Joystick coordination task",
    kind: "Instruments",
    description: "Developed by Dr Andrew Wilson, not by the Neuroplay Lab.",
    href: "https://cognitioninaction.wordpress.com/about-the-lab/andrew-wilson/",
    linkLabel: "Contact Dr Andrew Wilson",
    licence: "Contact the author for permission.",
  },
  {
    name: "GrooVR VR drumming application",
    kind: "Software and code",
    description: "An open access virtual reality drumming application for fostering pro-sociality.",
    href: "https://drive.google.com/drive/folders/1ub3A-7d8ujwjKQdPjouQsD5sbf-l86vi?usp=share_link",
    linkLabel: "Download",
  },
  { name: "GrooVR source files", kind: "Software and code", description: "Source code for the GrooVR application.", href: "https://github.com/Neuroplay-Lab/VR-Drumming", linkLabel: "View on GitHub" },
  { name: "Open dataset of more than 1,500 board gamers", kind: "Datasets" },
];

export const linkLabelFor = (m: Measure) => {
  if (m.linkLabel) return m.linkLabel;
  if (m.href?.includes("osf.io")) return "View on OSF";
  if (m.href?.includes("github.com")) return "View on GitHub";
  return "Open";
};
