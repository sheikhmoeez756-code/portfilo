const en = {
  meta: {
    title: "Abdul Moeez Hassan — React, Next.js & E-Commerce Developer",
    description:
      "Abdul Moeez Hassan builds tested React and Next.js e-commerce interfaces with TypeScript, Tailwind CSS, REST API integration, and reliable CI workflows.",
    ogTitle: "Abdul Moeez Hassan — React & Next.js Developer",
    ogDescription:
      "Production React and Next.js interfaces in TypeScript — unit and end-to-end tested, running in CI before every deploy. Public source you can audit.",
  },

  nav: {
    logo: "moeez",
    work: "Work",
    approach: "Approach",
    about: "About",
    experience: "Experience",
    contact: "Contact",
    hire: "Let’s talk",
    menu: "Menu",
    close: "Close",
    searchHint: "Search",
  },

  hero: {
    badge: "Available for new projects",
    greeting: "Abdul Moeez Hassan",
    lineOne: "I build front ends",
    lineTwoPrefix: "that are",
    rotating: ["tested.", "typed.", "fast.", "accessible.", "shipped."],
    description:
      "Production React and Next.js interfaces for e-commerce and SaaS — TypeScript, Tailwind CSS, REST APIs, and tests running in CI before anything deploys.",
    primaryCta: "See my work",
    secondaryCta: "Hire me on Upwork",
    scroll: "Scroll",
    location: "Lahore, PK · Remote",
    stats: [
      { value: 8, suffix: "", label: "Playwright e2e specs" },
      { value: 2, suffix: "+", label: "Years shipping" },
      { value: 3, suffix: "", label: "Live projects" },
      { value: 100, suffix: "%", label: "Public source" },
    ],
  },

  marquee: { label: "The stack I build, test and ship with" },

  approach: {
    label: "How I work",
    title: "Claims are cheap.",
    titleAccent: "Here’s the code.",
    subtitle: "Every practice below links to a file you can read.",
    cards: {
      tested: {
        title: "Tested, not just deployed",
        body: "Unit tests on business logic with Vitest; end-to-end flows with Playwright across desktop and mobile. Leafora ships eight e2e specs covering cart, filters, wishlist, product detail and SEO.",
        cta: "Read the e2e suite",
      },
      ci: {
        title: "CI before every deploy",
        body: "Lint, type-checking and the unit suite run on every push and pull request. E2E runs against a real production build, with Playwright reports uploaded as artifacts.",
        cta: "Read the CI workflow",
      },
      typed: {
        title: "Typed end to end",
        body: "TypeScript across components, state and data — not annotations bolted on afterwards. tsc --noEmit is a CI gate, so type errors fail the pipeline instead of reaching production.",
        cta: "Browse the source",
      },
      open: {
        title: "Public and auditable",
        body: "Every project here is open source with a documented README, real commit history and the tests that back it. Judge how I work before we ever get on a call.",
        cta: "View my GitHub",
      },
    },
    terminal: {
      title: "ci.yml — leafora",
      lines: [
        { cmd: "npm run lint", out: "✓ 0 problems" },
        { cmd: "tsc --noEmit", out: "✓ no type errors" },
        { cmd: "vitest run", out: "✓ all unit tests passed" },
        { cmd: "playwright test", out: "✓ 8 specs · desktop + mobile" },
      ],
      done: "Ready to deploy",
    },
  },

  work: {
    label: "Selected work",
    title: "Featured",
    titleAccent: "projects",
    subtitle: "Each one has a live demo and source you can read.",
    live: "Live demo",
    source: "Source",
    more: "More on GitHub",
    projects: {
      leafora: {
        title: "Leafora",
        kind: "Plant shop e-commerce",
        body: "A complete storefront flow: onboarding, shop, product detail, cart and mock checkout. Search and filters live in the query string, so every view is shareable — and the care guide is derived from the catalogue, so it can’t drift out of sync.",
        features: [
          "Cart & wishlist persisted to localStorage and synced across tabs",
          "Vitest unit tests + 8 Playwright e2e specs, run in CI on every push",
          "Static prerendering for every product page, reduced-motion aware",
        ],
        imageAlt: "Leafora plant shop — product grid with category filters and promo banner",
      },
      kara: {
        title: "Kara",
        kind: "Luxury car platform",
        body: "A luxury car marketplace on the Next.js App Router, centred on a real-time 3D configurator — orbit the model, change the paint, and watch the reflections update live in the browser.",
        features: [
          "React Three Fiber configurator — Draco glTF, orbit controls, live paint swap",
          "Framer Motion + Lenis motion design, 3D canvas client-guarded for SSR",
          "Fully typed, styled with Tailwind CSS, deployed on Vercel",
        ],
        imageAlt: "Kara luxury car platform homepage with a blue sports car hero",
      },
      weather: {
        title: "Weather",
        kind: "Installable PWA",
        body: "A clean, animated weather app with live forecasts, air quality and a 7-day outlook — installable as a PWA and built on the Open-Meteo API with full offline support.",
        features: [
          "City search, geolocation & saved-city chips",
          "AQI, UV index, sun arc & animated backgrounds",
          "Installable PWA with offline fallback",
        ],
        imageAlt: "Weather app showing current conditions, air quality and hourly forecast",
      },
    },
  },

  skills: {
    label: "Expertise",
    title: "Skills &",
    titleAccent: "technologies",
    groups: {
      frontend: "Frontend",
      backend: "Backend",
      testing: "Testing & quality",
      tools: "Tools & platforms",
      concepts: "Concepts",
    },
  },

  about: {
    label: "About",
    title: "A product-focused developer who ships work that",
    titleAccent: "holds up after hand-off.",
    paragraphs: [
      "I’m Abdul Moeez Hassan, a developer in Lahore, Pakistan, with two years building production web interfaces in React, Next.js, TypeScript and Tailwind CSS. I work from product requirements through implementation, API integration, testing and deployment — and I’m comfortable extending code I didn’t write.",
      "What I care about is work that survives after hand-off: typed components, tests that catch regressions before they ship, and a pipeline that runs lint, type-checks and the full suite on every push.",
    ],
    facts: {
      location: { label: "Based in", value: "Lahore, Pakistan" },
      timezone: { label: "Local time", value: "" },
      languages: { label: "Languages", value: "English, Urdu, Hindi" },
      availability: { label: "Availability", value: "Remote, worldwide" },
    },
  },

  experience: {
    label: "Career",
    title: "Experience &",
    titleAccent: "education",
    jobs: [
      {
        period: "Jan 2024 — Present",
        role: "Web Developer",
        company: "Aptech Learning",
        intro: "Front-end development on in-house and client projects, from design hand-off through to deployment.",
        points: [
          "Build responsive, mobile-first interfaces with React, Next.js, TypeScript and Tailwind CSS",
          "Maintain and extend existing sites — fixing bugs, improving load speed, adding features to code I didn’t write",
          "Integrate REST APIs with proper loading, empty and error states",
          "Git and GitHub for version control, with work reviewed before release",
        ],
      },
    ],
    education: [
      { period: "2020 — 2023", title: "Computer Science", place: "Punjab College of Commerce" },
      { period: "Issued Jan 2023", title: "ACCP — Aptech Certified Computer Professional", place: "Aptech Learning" },
    ],
    completed: "Completed",
  },

  contact: {
    label: "Contact",
    title: "Have a project in mind?",
    titleAccent: "Let’s build it.",
    subtitle: "Tell me what you’re building.",
    copyEmail: "Copy email",
    copied: "Copied!",
    phone: "+92 313 0607607",
    form: {
      name: "Your name",
      email: "Your email",
      subject: "Subject",
      message: "Tell me about your project…",
      submit: "Send message",
      sending: "Sending…",
      success: "Message sent — I’ll get back to you soon.",
      error: "Something went wrong. Please email me directly.",
      invalidEmail: "Please enter a valid email address.",
      required: "This field is required.",
    },
  },

  footer: {
    ctaLead: "Let’s work",
    ctaAccent: "together",
    owner: "Abdul Moeez Hassan",
    city: "Lahore",
    built: "Designed & built by me — Next.js, Tailwind & Motion.",
    backToTop: "Back to top",
  },

  theme: { toggle: "Toggle theme", light: "Light", dark: "Dark" },

  palette: {
    placeholder: "Type a command or search…",
    empty: "No results found.",
    navigation: "Navigation",
    actions: "Actions",
    links: "Links",
    copyEmail: "Copy email address",
    toggleTheme: "Toggle light / dark",
    open: "Open command menu",
  },

  notFound: {
    code: "404",
    title: "This page wandered off.",
    body: "The link may be broken, or the page may have moved.",
    cta: "Back home",
  },
} as const;

export default en;
