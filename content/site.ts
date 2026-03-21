const DEFAULT_SITE_URL = "https://dlss5.lol";

export const SITE_NAME = "DLSS 5 Report";
export const SITE_PROJECT_NAME =
  process.env.NEXT_PUBLIC_PROJECT_NAME || "dlss5-lol";
export const SITE_URL =
  process.env.NEXT_PUBLIC_WEB_URL?.replace(/\/$/, "") || DEFAULT_SITE_URL;
export const SITE_DESCRIPTION =
  "An independent guide to the DLSS 5 release date, supported games, features, and DLSS 4.5 comparisons using official NVIDIA sources.";

export const SITE_KEYWORDS = [
  "DLSS 5",
  "NVIDIA DLSS 5",
  "DLSS 5 release date",
  "DLSS 5 supported games",
  "what is DLSS 5",
  "DLSS 5 neural rendering",
  "DLSS 5 partners",
  "DLSS 5 FAQ",
  "DLSS 5 vs DLSS 4.5",
  "DLSS 5 vs DLSS 4",
];

export type SourceLink = {
  title: string;
  href: string;
  publisher: string;
  publishedAt: string;
};

export type KeyFact = {
  label: string;
  value: string;
  note?: string;
};

export type Section = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  callout?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type CompareRow = {
  topic: string;
  dlss5: string;
  baseline: string;
};

export type GameSupportEntry = {
  title: string;
  signal: string;
  note: string;
};

export type PartnerEntry = {
  name: string;
  signal: string;
  note: string;
};

export type ArticlePage = {
  slug: string;
  href: string;
  navTitle: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  summary: string;
  updatedAt: string;
  keywords: string[];
  keyFacts: KeyFact[];
  sections: Section[];
  faq: FaqItem[];
  sources: SourceLink[];
  relatedSlugs: string[];
  compareRows?: CompareRow[];
  compareBaselineLabel?: string;
  games?: GameSupportEntry[];
  partners?: PartnerEntry[];
};

const DLSS5_PRESS_RELEASE: SourceLink = {
  title: "NVIDIA DLSS 5 Delivers AI-Powered Breakthrough in Visual Fidelity for Games",
  href: "https://nvidianews.nvidia.com/news/nvidia-dlss-5-delivers-ai-powered-breakthrough-in-visual-fidelity-for-games",
  publisher: "NVIDIA Newsroom",
  publishedAt: "2026-03-16",
};

const DLSS45_ANNOUNCEMENT: SourceLink = {
  title: "DLSS 4.5 and Path Tracing Coming To 007 First Light, CONTROL Resonant, Tides of Annihilation & More",
  href: "https://www.nvidia.com/en-us/geforce/news/dlss-4-5-rtx-path-tracing-game-announcements-gdc-2026/",
  publisher: "NVIDIA GeForce News",
  publishedAt: "2026-03-16",
};

const DLSS_TECH_PAGE: SourceLink = {
  title: "NVIDIA DLSS Technology",
  href: "https://www.nvidia.com/en-us/geforce/technologies/dlss/",
  publisher: "NVIDIA",
  publishedAt: "2026-03-21",
};

export const SITE_SOURCES = [
  DLSS5_PRESS_RELEASE,
  DLSS45_ANNOUNCEMENT,
  DLSS_TECH_PAGE,
];

const faqLibrary = {
  official: {
    question: "Is DLSS 5 officially announced?",
    answer:
      "Yes. NVIDIA announced DLSS 5 in an official press release on March 16, 2026, during GTC 2026.",
  },
  release: {
    question: "When is DLSS 5 coming out?",
    answer:
      "NVIDIA's official wording is that DLSS 5 will arrive in fall 2026. As of March 21, 2026, no exact public launch date has been announced.",
  },
  games: {
    question: "Which games support DLSS 5 right now?",
    answer:
      "NVIDIA has announced an initial list of games that will receive DLSS 5 support, including Starfield, Assassin's Creed Shadows, Hogwarts Legacy, Resident Evil Requiem, and more. That is an announced lineup, not proof that every title already ships with DLSS 5 today.",
  },
  hardware: {
    question: "Has NVIDIA confirmed DLSS 5 hardware requirements?",
    answer:
      "Not in the launch press release. The announcement focuses on the rendering model, partner support, and launch timing, so any exact compatibility claims should be treated as unconfirmed until NVIDIA publishes them directly.",
  },
  frameGen: {
    question: "Is DLSS 5 just another frame generation upgrade?",
    answer:
      "No. NVIDIA frames DLSS 5 as a real-time neural rendering model that changes how pixels are lit and shaded, not only how frames are generated or upscaled.",
  },
  vs45: {
    question: "How is DLSS 5 different from DLSS 4.5?",
    answer:
      "NVIDIA describes DLSS 4.5 as a major AI-assisted fidelity and performance baseline, while DLSS 5 is presented as the next step that moves beyond performance into photoreal lighting and materials.",
  },
  vs4: {
    question: "Should people compare DLSS 5 with DLSS 4 or DLSS 4.5?",
    answer:
      "For broad search intent, both matter. DLSS 4 is the generation label many users know, while DLSS 4.5 is the specific shipping baseline NVIDIA highlighted just before introducing DLSS 5.",
  },
  deterministic: {
    question: "Why does NVIDIA emphasize determinism in DLSS 5?",
    answer:
      "Because games need consistent, controllable results from frame to frame. NVIDIA contrasts DLSS 5 with offline video models that can look impressive but are harder to control in an interactive game engine.",
  },
  streamline: {
    question: "Will DLSS 5 require a brand-new integration path?",
    answer:
      "NVIDIA says DLSS 5 integrates through the same Streamline framework used by existing DLSS and NVIDIA Reflex technologies, which suggests continuity for partner studios.",
  },
  launch: {
    question: "Does an announced game list mean the feature is live today?",
    answer:
      "No. An announced support list means NVIDIA and its partners have publicly committed to support. It does not guarantee that every game update is already available to players.",
  },
} satisfies Record<string, FaqItem>;

const pickFaq = (...keys: (keyof typeof faqLibrary)[]) =>
  keys.map((key) => faqLibrary[key]);

export const supportedGames: GameSupportEntry[] = [
  {
    title: "AION 2",
    signal: "Named in NVIDIA's launch list",
    note: "Listed by NVIDIA on March 16, 2026 as part of the first announced DLSS 5 wave.",
  },
  {
    title: "Assassin's Creed Shadows",
    signal: "Launch list plus partner quote",
    note: "Ubisoft leadership referenced Assassin's Creed Shadows directly in the DLSS 5 reveal materials.",
  },
  {
    title: "Black State",
    signal: "Named in NVIDIA's launch list",
    note: "Publicly listed by NVIDIA as a game that will receive DLSS 5 support.",
  },
  {
    title: "CINDER CITY",
    signal: "Named in NVIDIA's launch list",
    note: "Included in NVIDIA's first announced DLSS 5 lineup.",
  },
  {
    title: "Delta Force",
    signal: "Named in NVIDIA's launch list",
    note: "Appears in NVIDIA's official list of announced DLSS 5 games.",
  },
  {
    title: "Hogwarts Legacy",
    signal: "Named in NVIDIA's launch list",
    note: "Included by NVIDIA in the initial DLSS 5 support announcement.",
  },
  {
    title: "Justice",
    signal: "Named in NVIDIA's launch list",
    note: "NVIDIA lists Justice among the first titles coming to DLSS 5.",
  },
  {
    title: "NARAKA: BLADEPOINT",
    signal: "Named in NVIDIA's launch list",
    note: "Officially named in NVIDIA's March 16, 2026 release.",
  },
  {
    title: "NTE: Neverness to Everness",
    signal: "Named in NVIDIA's launch list",
    note: "Included in NVIDIA's launch-day support list for DLSS 5.",
  },
  {
    title: "Phantom Blade Zero",
    signal: "Named in NVIDIA's launch list",
    note: "Publicly listed by NVIDIA as an announced DLSS 5 title.",
  },
  {
    title: "Resident Evil Requiem",
    signal: "Launch list plus partner quote",
    note: "CAPCOM was named as a DLSS 5 partner and Resident Evil Requiem appears in NVIDIA's first game list.",
  },
  {
    title: "Sea of Remnants",
    signal: "Named in NVIDIA's launch list",
    note: "Listed by NVIDIA as part of the first set of games slated for DLSS 5.",
  },
  {
    title: "Starfield",
    signal: "Launch list plus partner quote",
    note: "Bethesda said it is excited to bring DLSS 5 to Starfield and future Bethesda titles.",
  },
  {
    title: "The Elder Scrolls IV: Oblivion Remastered",
    signal: "Named in NVIDIA's launch list",
    note: "Included in NVIDIA's official lineup of announced DLSS 5 titles.",
  },
  {
    title: "Where Winds Meet",
    signal: "Named in NVIDIA's launch list",
    note: "Publicly named by NVIDIA in the first DLSS 5 game rollout.",
  },
];

export const confirmedPartners: PartnerEntry[] = [
  {
    name: "Bethesda",
    signal: "Named partner plus direct executive quote",
    note: "Bethesda said DLSS 5 is the next major step in graphics and pointed to Starfield as an announced target.",
  },
  {
    name: "CAPCOM",
    signal: "Named partner plus direct executive quote",
    note: "CAPCOM positioned DLSS 5 as a fidelity upgrade that supports its cinematic visual goals.",
  },
  {
    name: "Hotta Studio",
    signal: "Named launch partner",
    note: "Hotta Studio appears in NVIDIA's official list of supported publishers and developers.",
  },
  {
    name: "NetEase",
    signal: "Named launch partner",
    note: "NetEase was publicly listed by NVIDIA among the first DLSS 5 publishing and development partners.",
  },
  {
    name: "NCSOFT",
    signal: "Named launch partner",
    note: "NCSOFT was identified by NVIDIA as part of the DLSS 5 support ecosystem.",
  },
  {
    name: "S-GAME",
    signal: "Named launch partner",
    note: "S-GAME was explicitly included in NVIDIA's launch-day partner lineup.",
  },
  {
    name: "Tencent",
    signal: "Named launch partner",
    note: "Tencent was listed as part of the initial DLSS 5 support group.",
  },
  {
    name: "Ubisoft",
    signal: "Named partner plus direct executive quote",
    note: "Ubisoft's Vantage Studios leadership tied DLSS 5 to the visual ambition of Assassin's Creed Shadows.",
  },
  {
    name: "Warner Bros. Games",
    signal: "Named launch partner",
    note: "Warner Bros. Games appears in NVIDIA's launch list of studios and publishers supporting DLSS 5.",
  },
];

const compareRowsVs45: CompareRow[] = [
  {
    topic: "Core positioning",
    dlss5: "A real-time neural rendering model aimed at photoreal lighting and materials.",
    baseline:
      "An AI-assisted fidelity and performance baseline that NVIDIA highlighted at CES and GDC 2026.",
  },
  {
    topic: "Primary user-facing shift",
    dlss5: "Moves the conversation from faster rendering toward more cinematic image formation.",
    baseline:
      "Still centered on improving frame generation and image quality inside the established DLSS stack.",
  },
  {
    topic: "Pipeline inputs",
    dlss5: "Uses game color plus motion vectors to infuse scenes with new lighting and material detail.",
    baseline:
      "Uses AI across existing DLSS stages, including transformer-based Super Resolution and Dynamic Multi Frame Generation.",
  },
  {
    topic: "NVIDIA's headline claim",
    dlss5: "Bridges rendering and reality by adding photoreal lighting and materials in real time.",
    baseline:
      "Uses AI to draw 23 out of every 24 pixels on screen, according to NVIDIA's March 2026 messaging.",
  },
  {
    topic: "Developer integration",
    dlss5: "Uses the same Streamline integration path according to NVIDIA.",
    baseline:
      "Already ships across announced games using NVIDIA's existing DLSS deployment flow.",
  },
  {
    topic: "Availability status",
    dlss5: "Announced on March 16, 2026 and scheduled for fall 2026.",
    baseline:
      "Already appears in public game announcements and rollout messaging as of March 2026.",
  },
];

const compareRowsVs4: CompareRow[] = [
  {
    topic: "What users usually mean",
    dlss5: "The newest announced stage of NVIDIA's DLSS roadmap.",
    baseline:
      "A broader generation label that many users associate with Multi Frame Generation and current RTX-era DLSS features.",
  },
  {
    topic: "Marketing emphasis",
    dlss5: "Visual realism, photoreal materials, and neural rendering.",
    baseline:
      "Performance uplift, frame generation, and broad DLSS feature packaging.",
  },
  {
    topic: "Specific baseline to compare against",
    dlss5: "Best compared against DLSS 4.5 when discussing what changed immediately before the reveal.",
    baseline:
      "DLSS 4 is still useful as a search term, but DLSS 4.5 is the more precise current baseline in NVIDIA's 2026 messaging.",
  },
  {
    topic: "Rendering ambition",
    dlss5: "Presents itself as a new way to synthesize final image qualities in real time.",
    baseline:
      "Focuses on enhancing and accelerating the conventional DLSS rendering path.",
  },
  {
    topic: "Availability signal",
    dlss5: "Officially announced, not yet broadly live for consumers as of March 21, 2026.",
    baseline:
      "Already embedded in shipping or announced game updates under the DLSS 4 and DLSS 4.5 umbrella.",
  },
  {
    topic: "Search intent fit",
    dlss5: "Best for people asking what is new now.",
    baseline:
      "Best for people comparing generations, current RTX features, and the shipping stack they can use sooner.",
  },
];

export const SITE_LAST_UPDATED = "2026-03-21";

export const homeStats: KeyFact[] = [
  {
    label: "Announced games",
    value: "15+",
    note: "NVIDIA published an initial list of at least 15 games and said more are coming.",
  },
  {
    label: "Named partners",
    value: "9",
    note: "Bethesda, CAPCOM, Ubisoft, Warner Bros. Games, and five more were named in the launch release.",
  },
  {
    label: "Target launch window",
    value: "Fall 2026",
    note: "That is NVIDIA's current public wording for availability.",
  },
  {
    label: "Existing DLSS footprint",
    value: "750+ games",
    note: "NVIDIA says DLSS has already been integrated into more than 750 games.",
  },
];

export const homeTimeline = [
  {
    date: "2018",
    title: "DLSS debuts",
    detail: "NVIDIA introduced DLSS as an AI-assisted performance feature.",
  },
  {
    date: "CES 2026",
    title: "DLSS 4.5 arrives",
    detail: "NVIDIA said DLSS 4.5 could draw 23 of every 24 pixels on screen.",
  },
  {
    date: "March 16, 2026",
    title: "DLSS 5 is unveiled",
    detail: "NVIDIA announced DLSS 5 at GTC 2026 and reframed DLSS around neural rendering.",
  },
  {
    date: "Fall 2026",
    title: "Target rollout window",
    detail: "NVIDIA says DLSS 5 will arrive in games in fall 2026.",
  },
];

export const articlePages: ArticlePage[] = [
  {
    slug: "what-is-dlss-5",
    href: "/what-is-dlss-5",
    navTitle: "What Is DLSS 5",
    title: "What Is DLSS 5?",
    metaTitle: "What Is DLSS 5? NVIDIA's Official Answer",
    description:
      "What DLSS 5 is, how NVIDIA describes neural rendering, and why the company treats it as more than another DLSS performance upgrade.",
    eyebrow: "Foundation",
    summary:
      "DLSS 5 is NVIDIA's newly announced neural rendering system for games. The company says it adds more photoreal lighting and materials in real time while staying deterministic and controllable.",
    updatedAt: SITE_LAST_UPDATED,
    keywords: ["what is DLSS 5", "DLSS 5 explained", "NVIDIA DLSS 5 neural rendering"],
    keyFacts: [
      { label: "Official status", value: "Announced March 16, 2026" },
      { label: "Core claim", value: "Real-time neural rendering" },
      { label: "Visual goal", value: "Photoreal lighting and materials" },
      { label: "Target output", value: "Up to 4K real-time" },
    ],
    sections: [
      {
        title: "What NVIDIA says DLSS 5 actually is",
        paragraphs: [
          "The shortest answer is that DLSS 5 is NVIDIA's new real-time neural rendering system for games. In the March 16, 2026 announcement, NVIDIA describes it as a step beyond DLSS as mainly a performance feature and toward DLSS as part of final image creation.",
          "That framing changes what users should focus on. The headline claim is not just a higher frame rate or cleaner upscale. It is that lighting, materials, skin, fabric, and other hard-to-render details can look more realistic in real time through a scene-aware neural model.",
        ],
        bullets: [
          "Officially unveiled at GTC 2026 on March 16, 2026.",
          "Described by NVIDIA as its biggest graphics breakthrough since real-time ray tracing in 2018.",
          "Introduced as a neural rendering model, not only a scaling or frame insertion feature.",
        ],
      },
      {
        title: "How DLSS 5 is supposed to work",
        paragraphs: [
          "The company says DLSS 5 takes a game's color information and motion vectors as input, then uses a neural model to infuse the scene with more realistic lighting and materials.",
          "NVIDIA also emphasizes that the result remains anchored to the underlying 3D scene and artistic intent. That is the company's answer to the obvious question: how is this different from unconstrained video generation?",
        ],
        callout:
          "The official launch message focuses on deterministic output and frame-to-frame consistency, which is crucial for real interactive games.",
      },
      {
        title: "Why DLSS 5 matters for players and studios",
        paragraphs: [
          "For players, the pitch is straightforward: games should look more cinematic without waiting for offline rendering workflows. For developers, the pitch is just as important: the system keeps artist controls for intensity, color grading, and masking instead of asking studios to surrender control to a black-box generator.",
          "NVIDIA says DLSS 5 also uses the same Streamline integration framework already used for DLSS and Reflex. If that holds in shipped games, the upgrade path for partner studios should be more practical than a full rendering rewrite.",
        ],
      },
    ],
    faq: pickFaq("official", "frameGen", "deterministic", "streamline"),
    sources: [DLSS5_PRESS_RELEASE, DLSS_TECH_PAGE],
    relatedSlugs: ["dlss-5-features", "dlss-5-neural-rendering", "dlss-5-vs-dlss-4-5"],
  },
  {
    slug: "dlss-5-release-date",
    href: "/dlss-5-release-date",
    navTitle: "Release Date",
    title: "DLSS 5 Release Date",
    metaTitle: "DLSS 5 Release Date: When Is It Coming Out?",
    description:
      "DLSS 5 was announced on March 16, 2026, and NVIDIA says it is coming in fall 2026. Here is what is confirmed and what is not.",
    eyebrow: "Timing",
    summary:
      "DLSS 5 does not have an exact launch day yet. NVIDIA announced it on March 16, 2026, and the current public rollout window is fall 2026.",
    updatedAt: SITE_LAST_UPDATED,
    keywords: ["DLSS 5 release date", "when is DLSS 5 coming out", "DLSS 5 launch date"],
    keyFacts: [
      { label: "Announcement date", value: "March 16, 2026" },
      { label: "Launch window", value: "Fall 2026" },
      { label: "Event", value: "GTC 2026" },
      { label: "Current status", value: "Announced, not broadly released" },
    ],
    sections: [
      {
        title: "When is DLSS 5 coming out?",
        paragraphs: [
          "The only exact public date tied to DLSS 5 right now is March 16, 2026, the day NVIDIA unveiled it during GTC 2026.",
          "For release timing, NVIDIA's current wording is still broad: DLSS 5 is coming in fall 2026. Any site claiming a precise shipping day is going beyond the official public statement.",
        ],
      },
      {
        title: "What NVIDIA has confirmed before launch",
        paragraphs: [
          "Even without an exact release day, NVIDIA has already named nine partners and an initial lineup of announced games. That is a stronger signal than a vague teaser, but it is still not the same thing as live public availability.",
          "The best interpretation today is that DLSS 5 has crossed from rumor to official roadmap, while final game-by-game updates remain ahead of players.",
        ],
        bullets: [
          "DLSS 5 reveal date: March 16, 2026.",
          "Public launch window: fall 2026.",
          "Initial ecosystem: publishers, developers, and a named first wave of games.",
        ],
      },
      {
        title: "What still has no exact date",
        paragraphs: [
          "NVIDIA has not yet published a complete rollout calendar, a final hardware support matrix, or a definitive list of which launch games will enable DLSS 5 on day one.",
          "That means the safest editorial posture is to distinguish between what is announced, what is scheduled, and what is already in players' hands.",
        ],
      },
    ],
    faq: pickFaq("release", "launch", "hardware"),
    sources: [DLSS5_PRESS_RELEASE],
    relatedSlugs: ["what-is-dlss-5", "dlss-5-supported-games", "dlss-5-faq"],
  },
  {
    slug: "dlss-5-features",
    href: "/dlss-5-features",
    navTitle: "Features",
    title: "DLSS 5 Features",
    metaTitle: "DLSS 5 Features: What NVIDIA Announced",
    description:
      "DLSS 5 features include neural rendering, photoreal lighting and materials, masking controls, real-time 4K output, and Streamline integration.",
    eyebrow: "Features",
    summary:
      "The main DLSS 5 features NVIDIA emphasizes are photoreal lighting, richer material detail, artist controls, and frame-to-frame consistency inside a real-time pipeline.",
    updatedAt: SITE_LAST_UPDATED,
    keywords: ["DLSS 5 features", "DLSS 5 lighting", "DLSS 5 materials"],
    keyFacts: [
      { label: "Feature focus", value: "Lighting + materials" },
      { label: "Control model", value: "Masking, grading, intensity" },
      { label: "Integration", value: "Streamline" },
      { label: "Consistency", value: "Frame-to-frame grounded output" },
    ],
    sections: [
      {
        title: "What are the main DLSS 5 features?",
        paragraphs: [
          "The headline features are photoreal lighting and material response. NVIDIA specifically calls out hard rendering problems such as skin, hair, fabric, and other surfaces where believable light behavior makes a huge difference.",
          "This is why DLSS 5 feels like a different category of announcement from past DLSS upgrades. The company is selling a final-image improvement story, not only a faster rendering story.",
        ],
      },
      {
        title: "Why developer controls matter",
        paragraphs: [
          "NVIDIA says DLSS 5 gives developers controls for intensity, masking, and color grading. That is an important implementation detail because studios need selective control over where the effect appears and how strongly it is applied.",
          "A technology like this only works commercially if artists can preserve a game's style rather than flatten it into one neural rendering look.",
        ],
      },
      {
        title: "Which DLSS 5 features players may see first",
        paragraphs: [
          "DLSS 5 is also described as using the same Streamline framework as current DLSS integrations. That suggests developers should be able to experiment inside a familiar deployment path.",
          "In practice, the real-world feature set players see first will depend on which games ship early, which controls developers expose, and how conservative each studio is about visual tuning.",
        ],
      },
    ],
    faq: pickFaq("frameGen", "streamline", "deterministic"),
    sources: [DLSS5_PRESS_RELEASE, DLSS_TECH_PAGE],
    relatedSlugs: ["what-is-dlss-5", "dlss-5-neural-rendering", "dlss-5-vs-dlss-4"],
  },
  {
    slug: "dlss-5-neural-rendering",
    href: "/dlss-5-neural-rendering",
    navTitle: "Neural Rendering",
    title: "DLSS 5 Neural Rendering",
    metaTitle: "DLSS 5 Neural Rendering: How It Works",
    description:
      "DLSS 5 neural rendering uses color data and motion vectors to create more photoreal lighting and materials, according to NVIDIA.",
    eyebrow: "Technology",
    summary:
      "NVIDIA says DLSS 5 neural rendering takes color data and motion vectors from the game, understands scene context, and produces more photoreal lighting and material detail in real time.",
    updatedAt: SITE_LAST_UPDATED,
    keywords: ["DLSS 5 neural rendering", "DLSS 5 color vectors", "DLSS 5 real-time AI rendering"],
    keyFacts: [
      { label: "Inputs", value: "Color + motion vectors" },
      { label: "Output promise", value: "Scene-grounded photoreal detail" },
      { label: "Model behavior", value: "Semantic scene understanding" },
      { label: "Performance target", value: "Real-time up to 4K" },
    ],
    sections: [
      {
        title: "How does DLSS 5 neural rendering work?",
        paragraphs: [
          "NVIDIA says DLSS 5 starts with each frame's color data and motion vectors, then uses a neural model to improve how light and materials appear in the image.",
          "That makes DLSS 5 look less like a post-process filter and more like a learned rendering stage that operates on top of game-engine information.",
        ],
      },
      {
        title: "Why NVIDIA keeps emphasizing scene semantics",
        paragraphs: [
          "The launch materials say the model learns scene semantics such as characters, hair, fabric, translucent skin, and lighting conditions. That language is meant to explain why the output should look more physically convincing than simple rule-based heuristics.",
          "NVIDIA also says the model can infer these relationships from a single frame, which is a notable claim because it suggests the system can keep up with interactive workloads instead of relying on heavy temporal analysis alone.",
        ],
      },
      {
        title: "How DLSS 5 differs from offline generative video",
        paragraphs: [
          "NVIDIA directly contrasts DLSS 5 with offline video AI models. The point is not that video models look bad, but that games need deterministic, controllable, frame-stable output in real time.",
          "That distinction is useful when evaluating DLSS 5 hype. The company's argument is that a game-ready neural renderer needs a different trust model than a cinematic generator.",
        ],
        callout:
          "If DLSS 5 works as advertised, the real win is not only prettier pixels. It is higher realism without losing studio control or gameplay stability.",
      },
    ],
    faq: pickFaq("deterministic", "frameGen", "streamline"),
    sources: [DLSS5_PRESS_RELEASE],
    relatedSlugs: ["what-is-dlss-5", "dlss-5-features", "dlss-5-vs-dlss-4-5"],
  },
  {
    slug: "dlss-5-supported-games",
    href: "/dlss-5-supported-games",
    navTitle: "Supported Games",
    title: "DLSS 5 Supported Games",
    metaTitle: "DLSS 5 Supported Games: Official List So Far",
    description:
      "See the DLSS 5 games NVIDIA has publicly named so far, including Starfield, Assassin's Creed Shadows, Hogwarts Legacy, and more.",
    eyebrow: "Games",
    summary:
      "As of March 21, 2026, NVIDIA has publicly named more than 15 DLSS 5 games, including Starfield, Assassin's Creed Shadows, Hogwarts Legacy, and Resident Evil Requiem.",
    updatedAt: SITE_LAST_UPDATED,
    keywords: ["DLSS 5 supported games", "games with DLSS 5", "DLSS 5 game list"],
    keyFacts: [
      { label: "Current public list", value: "15+ games" },
      { label: "Strongest confirmation", value: "Starfield, Resident Evil Requiem, Assassin's Creed Shadows" },
      { label: "Official source", value: "NVIDIA press release" },
      { label: "Status label", value: "Announced support, not guaranteed live today" },
    ],
    sections: [
      {
        title: "Which games support DLSS 5 right now?",
        paragraphs: [
          "For this site, confirmed means NVIDIA has publicly named the game in its official launch materials. That is a higher bar than rumor, but it still does not mean every update is already available to players.",
          "A few titles carry even stronger confirmation because partner executives referenced them directly, including Starfield, Resident Evil Requiem, and Assassin's Creed Shadows.",
        ],
      },
      {
        title: "How to read the current DLSS 5 games list",
        paragraphs: [
          "This is an announcement-phase list. It is best read as a roadmap snapshot of NVIDIA's first wave, not a final compatibility database.",
          "The most responsible way to track these games is to separate named launch-list titles from later shipping confirmations once actual patches go live.",
        ],
        bullets: [
          "Named by NVIDIA: strongest public signal available today.",
          "Quoted by partners: even stronger confidence for the referenced title.",
          "Live in consumer builds: still requires later per-game verification.",
        ],
      },
    ],
    faq: pickFaq("games", "launch", "release"),
    sources: [DLSS5_PRESS_RELEASE],
    relatedSlugs: ["dlss-5-confirmed-partners", "dlss-5-release-date", "dlss-5-faq"],
    games: supportedGames,
  },
  {
    slug: "dlss-5-confirmed-partners",
    href: "/dlss-5-confirmed-partners",
    navTitle: "Confirmed Partners",
    title: "DLSS 5 Confirmed Partners",
    metaTitle: "DLSS 5 Partners: Official Studio List",
    description:
      "NVIDIA has publicly named DLSS 5 partners including Bethesda, CAPCOM, Ubisoft, Tencent, and Warner Bros. Games.",
    eyebrow: "Ecosystem",
    summary:
      "NVIDIA announced DLSS 5 with an initial partner list that spans major publishers and studios, signaling that the rollout is intended to extend across the existing game ecosystem.",
    updatedAt: SITE_LAST_UPDATED,
    keywords: ["DLSS 5 partners", "Bethesda DLSS 5", "CAPCOM DLSS 5", "Ubisoft DLSS 5"],
    keyFacts: [
      { label: "Named organizations", value: "9" },
      { label: "Direct quotes", value: "Bethesda, CAPCOM, Ubisoft" },
      { label: "Partner spread", value: "Western + Asian studios" },
      { label: "Integration story", value: "Built around Streamline continuity" },
    ],
    sections: [
      {
        title: "Which companies are confirmed DLSS 5 partners?",
        paragraphs: [
          "DLSS 5 is not being introduced as a speculative lab project. NVIDIA attached the reveal to a concrete set of partners across major publishers and regional studios, which makes the launch feel materially closer to a real ecosystem rollout.",
          "That breadth matters for SEO intent too. Many users searching DLSS 5 are really asking whether the technology has real studio support yet. On that question, the answer is yes.",
        ],
      },
      {
        title: "Which DLSS 5 partner signals are strongest?",
        paragraphs: [
          "Bethesda, CAPCOM, and Ubisoft provided the strongest public support because NVIDIA published executive quotes tied to the launch. The remaining named partners are still meaningful because they appear in the official partner list even without extra commentary.",
          "This should be treated as a commitment signal, not a guarantee of simultaneous launch timing across all partners.",
        ],
      },
    ],
    faq: pickFaq("official", "streamline", "launch"),
    sources: [DLSS5_PRESS_RELEASE],
    relatedSlugs: ["dlss-5-supported-games", "what-is-dlss-5", "dlss-5-release-date"],
    partners: confirmedPartners,
  },
  {
    slug: "dlss-5-vs-dlss-4-5",
    href: "/dlss-5-vs-dlss-4-5",
    navTitle: "DLSS 5 vs 4.5",
    title: "DLSS 5 vs DLSS 4.5",
    metaTitle: "DLSS 5 vs DLSS 4.5: Biggest Differences",
    description:
      "Compare DLSS 5 vs DLSS 4.5 across rendering goals, launch status, developer integration, and NVIDIA's 2026 messaging.",
    eyebrow: "Comparison",
    summary:
      "DLSS 4.5 is NVIDIA's current shipping-era baseline, while DLSS 5 is the next announced step focused on neural rendering, photoreal lighting, and material realism.",
    updatedAt: SITE_LAST_UPDATED,
    keywords: ["DLSS 5 vs DLSS 4.5", "DLSS 4.5 comparison", "DLSS 5 upgrade"],
    keyFacts: [
      { label: "Best current baseline", value: "DLSS 4.5" },
      { label: "4.5 headline", value: "23 of 24 pixels AI-drawn" },
      { label: "5 headline", value: "Photoreal neural rendering" },
      { label: "Shared bridge", value: "Streamline integration" },
    ],
    sections: [
      {
        title: "DLSS 5 vs DLSS 4.5: what changes?",
        paragraphs: [
          "For people tracking what changed in 2026, DLSS 4.5 is the right baseline. It is the version NVIDIA talked about immediately before unveiling DLSS 5, and it helps separate normal incremental DLSS progress from the larger shift claimed for DLSS 5.",
          "In simple terms, DLSS 4.5 sounds like the most advanced form of the existing stack, while DLSS 5 sounds like the beginning of a new rendering stage.",
        ],
      },
      {
        title: "What stays the same between DLSS 4.5 and DLSS 5",
        paragraphs: [
          "NVIDIA still ties DLSS 5 to the same integration framework and still talks about real-time constraints, which implies continuity in how developers adopt it.",
          "That continuity is important. DLSS 5 only matters commercially if it extends the DLSS ecosystem instead of breaking it into a separate experimental branch.",
        ],
      },
    ],
    faq: pickFaq("vs45", "frameGen", "streamline"),
    sources: [DLSS5_PRESS_RELEASE, DLSS45_ANNOUNCEMENT],
    relatedSlugs: ["dlss-5-vs-dlss-4", "dlss-5-features", "what-is-dlss-5"],
    compareRows: compareRowsVs45,
    compareBaselineLabel: "DLSS 4.5",
  },
  {
    slug: "dlss-5-vs-dlss-4",
    href: "/dlss-5-vs-dlss-4",
    navTitle: "DLSS 5 vs 4",
    title: "DLSS 5 vs DLSS 4",
    metaTitle: "DLSS 5 vs DLSS 4: Main Differences",
    description:
      "DLSS 5 vs DLSS 4 is the broad generation comparison. This page explains the current shipping stack, the upcoming DLSS 5 shift, and where DLSS 4.5 fits.",
    eyebrow: "Comparison",
    summary:
      "DLSS 4 is the current shipping generation, while DLSS 5 is the announced next step in NVIDIA's roadmap. In practice, most technical comparisons are really DLSS 5 vs DLSS 4.5.",
    updatedAt: SITE_LAST_UPDATED,
    keywords: ["DLSS 5 vs DLSS 4", "DLSS 4 vs DLSS 5", "NVIDIA DLSS generation comparison"],
    keyFacts: [
      { label: "Searcher intent", value: "Broad generation comparison" },
      { label: "Precise baseline", value: "DLSS 4.5 sits inside the DLSS 4 era" },
      { label: "DLSS 5 status", value: "Announced, upcoming" },
      { label: "DLSS 4 status", value: "Shipping generation" },
    ],
    sections: [
      {
        title: "DLSS 5 vs DLSS 4: what do people mean?",
        paragraphs: [
          "Many users do not search for point releases. They search for the big number they remember. That makes DLSS 5 vs DLSS 4 a valid and useful comparison page even though DLSS 4.5 is the tighter technical baseline.",
          "This page should answer the broad question first, then explain where the more precise DLSS 4.5 comparison fits in.",
        ],
      },
      {
        title: "The practical takeaway",
        paragraphs: [
          "If you want the current, shipping-era feature stack, the DLSS 4 family is still the relevant reference. If you want to understand the next visual leap NVIDIA is promising, DLSS 5 is the page to watch.",
          "That means users comparing the two are often comparing present tense versus near future, not two products that are equally available today.",
        ],
      },
    ],
    faq: pickFaq("vs4", "vs45", "release"),
    sources: [DLSS5_PRESS_RELEASE, DLSS45_ANNOUNCEMENT, DLSS_TECH_PAGE],
    relatedSlugs: ["dlss-5-vs-dlss-4-5", "dlss-5-release-date", "dlss-5-features"],
    compareRows: compareRowsVs4,
    compareBaselineLabel: "DLSS 4",
  },
  {
    slug: "dlss-5-faq",
    href: "/dlss-5-faq",
    navTitle: "FAQ",
    title: "DLSS 5 FAQ",
    metaTitle: "DLSS 5 FAQ: Release Date, Games, Support",
    description:
      "Answers to common DLSS 5 questions about the release date, supported games, hardware uncertainty, and DLSS 4.5 comparisons.",
    eyebrow: "FAQ",
    summary:
      "This DLSS 5 FAQ answers the most common questions about launch timing, supported games, hardware uncertainty, and what NVIDIA has officially confirmed so far.",
    updatedAt: SITE_LAST_UPDATED,
    keywords: ["DLSS 5 FAQ", "is DLSS 5 real", "DLSS 5 release date FAQ"],
    keyFacts: [
      { label: "Officially announced", value: "Yes" },
      { label: "Current window", value: "Fall 2026" },
      { label: "Announced games", value: "15+ so far" },
      { label: "Unconfirmed area", value: "Full hardware matrix" },
    ],
    sections: [
      {
        title: "What this DLSS 5 FAQ covers",
        paragraphs: [
          "These answers stay inside NVIDIA's current public statements. If NVIDIA publishes new compatibility details, launch schedules, or shipped game confirmations, this page should be updated with those exact dates and titles.",
          "Until then, the FAQ separates official facts from reasonable inference so the site can rank without drifting into rumor content.",
        ],
      },
    ],
    faq: pickFaq(
      "official",
      "release",
      "games",
      "hardware",
      "frameGen",
      "vs45",
      "vs4",
      "streamline"
    ),
    sources: [DLSS5_PRESS_RELEASE, DLSS45_ANNOUNCEMENT, DLSS_TECH_PAGE],
    relatedSlugs: ["what-is-dlss-5", "dlss-5-release-date", "dlss-5-supported-games"],
  },
];

export const primaryNavigation = [
  { href: "/", label: "Overview" },
  { href: "/what-is-dlss-5", label: "What Is DLSS 5" },
  { href: "/dlss-5-release-date", label: "Release Date" },
  { href: "/dlss-5-features", label: "Features" },
  { href: "/dlss-5-supported-games", label: "Games" },
  { href: "/dlss-5-faq", label: "FAQ" },
];

export const homeFaq = articlePages.find((page) => page.slug === "dlss-5-faq")!.faq;

export function getArticlePage(slug: string) {
  return articlePages.find((page) => page.slug === slug);
}

export function getRelatedPages(page: ArticlePage) {
  return page.relatedSlugs
    .map((slug) => getArticlePage(slug))
    .filter((item): item is ArticlePage => Boolean(item));
}
