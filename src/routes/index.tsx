import { createFileRoute } from "@tanstack/react-router";
const SENTIVIO_LOGO = "/sentivio-logo.png";
const INTELLIGO_LOGO = "/intelligo-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sentivio - AI Powered Data Intelligence" },
      {
        name: "description",
        content:
          "Turn millions of data points into strategic decisions with Sentivio by Intelligo ID. Unify global data streams with proprietary LLMs.",
      },
      { property: "og:title", content: "Sentivio - AI Powered Data Intelligence" },
      {
        property: "og:description",
        content:
          "Turn millions of data points into strategic decisions with Sentivio by Intelligo ID.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ExecutiveSummarySection />
        <IntelligencePipelineSection />
        <ModulesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const navLinks = ["Features", "Solutions", "Industries", "Resources", "Pricing"];

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="flex items-center gap-2 text-lg font-bold text-foreground">
          <img src={SENTIVIO_LOGO} alt="Logo Sentivio" className="logo-glow h-8 w-8" />
          <span className="font-display text-xl tracking-tight">Sentivio</span>
          <span className="ml-1 text-xs font-normal text-muted-foreground">by Intelligo ID</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Book Demo
          </a>
          <a
            href="#"
            className="rounded-lg bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/90"
          >
            Start Free Trial
          </a>
        </div>

        <button className="material-symbols text-foreground md:hidden">menu</button>
      </div>
    </header>
  );
}

function HeroSection() {
  const highlights = [
    { icon: "bar_chart", title: "Automated Data Analysis" },
    { icon: "auto_awesome", title: "AI-Driven Insights" },
    { icon: "layers", title: "Multi-Source Integration" },
    { icon: "bolt", title: "Faster, Sharper Decisions" },
  ];

  return (
    <section className="bg-hero-navy relative overflow-hidden px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
      <div className="dot-grid pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[620px] opacity-60" />
      <div className="dot-grid pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[620px] opacity-60" />

      <div className="relative mx-auto max-w-7xl">
        {/* Brand lockup */}
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          <img src={SENTIVIO_LOGO} alt="Sentivio" className="logo-glow h-24 w-24 sm:h-32 sm:w-32" />
          <div className="hidden h-28 w-px bg-border sm:block" />
          <div className="text-center sm:text-left">
            <div className="font-display text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl">
              Sentivio
            </div>
            <span className="pill-orange mt-3 inline-flex items-center rounded-full px-4 py-1 font-display text-lg font-extrabold italic text-white">
              AI-Powered
            </span>
            <div className="mt-2 font-display text-lg font-semibold text-foreground/90">
              Data Intelligence Platform
            </div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <h1 className="mx-auto max-w-4xl font-display text-display-lg-mobile font-extrabold tracking-tight text-foreground lg:text-display-lg">
            Turn Millions of Data Points Into{" "}
            <span className="text-gradient">Strategic Decisions</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-body-md text-muted-foreground lg:text-body-lg">
            Unify your global data streams with Sentivio by Intelligo ID. Our proprietary LLMs
            analyze, synthesize, and predict market shifts before they happen.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="pill-orange inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-container px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-container-high"
            >
              <span className="material-symbols text-accent">play_circle</span>
              Book Demo
            </a>
          </div>
        </div>

        {/* Highlights strip */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-y-8 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-center gap-3 px-4 text-center ${
                i > 0 ? "lg:border-l lg:border-border/60" : ""
              } ${i % 2 === 1 ? "border-l border-border/60 lg:border-l" : ""}`}
            >
              <div className="icon-tile flex h-14 w-14 items-center justify-center rounded-xl text-accent">
                <span className="material-symbols text-[28px]">{item.icon}</span>
              </div>
              <div className="text-sm font-medium text-foreground">{item.title}</div>
            </div>
          ))}
        </div>

        <DashboardPreview />
      </div>
    </section>
  );
}

function DashboardPreview() {
  const bars = [28, 40, 46, 58, 66, 84];

  return (
    <div className="relative mx-auto mt-20 max-w-5xl">
      <div className="pointer-events-none absolute inset-x-10 -bottom-6 h-24 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative rounded-2xl border border-white/10 bg-surface-container-low p-3 shadow-2xl shadow-black/40">
        <div className="flex overflow-hidden rounded-xl border border-white/5 bg-background">
          {/* Sidebar */}
          <aside className="hidden w-44 shrink-0 flex-col gap-4 border-r border-white/5 bg-surface-container-low p-5 sm:flex">
            <img src={SENTIVIO_LOGO} alt="" className="logo-glow h-7 w-7" loading="lazy" />
            <div className="mt-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="h-1.5 w-20 rounded bg-accent/50" />
            </div>
            {[16, 20, 14, 18].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-muted" />
                <span className="h-1.5 rounded bg-muted" style={{ width: `${w * 4}px` }} />
              </div>
            ))}
          </aside>

          {/* Main */}
          <div className="flex-1 p-5">
            <div className="text-sm font-semibold text-foreground">Data Intelligence</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-white/5 bg-surface-container p-4 md:col-span-2">
                <svg viewBox="0 0 300 110" className="h-32 w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#00c2ff" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#00c2ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 95 C30 90 40 60 70 62 S110 88 135 70 S175 40 200 58 S245 70 265 35 L300 20 L300 110 L0 110 Z"
                    fill="url(#area)"
                  />
                  <path
                    d="M0 95 C30 90 40 60 70 62 S110 88 135 70 S175 40 200 58 S245 70 265 35 L300 20"
                    fill="none"
                    stroke="#00c2ff"
                    strokeWidth="2.5"
                  />
                  <circle cx="300" cy="20" r="4" fill="#7bd0ff" />
                </svg>
              </div>
              <div className="flex items-center justify-center rounded-lg border border-white/5 bg-surface-container p-4">
                <svg viewBox="0 0 42 42" className="h-24 w-24 -rotate-90">
                  <circle cx="21" cy="21" r="15.9" fill="none" stroke="#273647" strokeWidth="6" />
                  <circle
                    cx="21"
                    cy="21"
                    r="15.9"
                    fill="none"
                    stroke="#00c2ff"
                    strokeWidth="6"
                    strokeDasharray="68 32"
                  />
                </svg>
              </div>
              <div className="flex h-28 items-end gap-2 rounded-lg border border-white/5 bg-surface-container p-4">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-sky-700 to-accent"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <div className="flex flex-col justify-center gap-2.5 rounded-lg border border-white/5 bg-surface-container p-4 md:col-span-2">
                {[90, 70, 82, 55].map((w, i) => (
                  <span key={i} className="h-1.5 rounded bg-muted" style={{ width: `${w}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating insight card */}
      <div className="glass-panel-strong glow-cyan relative mx-auto mt-6 flex max-w-xs items-center gap-3 rounded-xl px-5 py-4 md:absolute md:-right-10 md:bottom-16 md:mt-0">
        <span className="material-symbols text-3xl text-secondary">auto_awesome</span>
        <span className="text-sm font-semibold leading-snug text-foreground">
          Turn raw data into meaningful insights with AI
        </span>
      </div>
    </div>
  );
}

function ExecutiveSummarySection() {
  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <span className="font-label text-xs uppercase tracking-widest text-muted-foreground">
          Executive Summary
        </span>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Platform selector card */}
          <div className="glass-panel rounded-xl p-6 lg:col-span-3">
            <div className="flex gap-3">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-muted px-3 py-2 text-sm font-medium text-foreground">
                <span className="material-symbols text-base">music_note</span>
                TikTok
              </button>
              <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/50">
                <span className="material-symbols text-base">business_center</span>
                LinkedIn
              </button>
            </div>
          </div>

          {/* Real-time analysis */}
          <div className="glass-panel rounded-xl p-6 lg:col-span-6">
            <div className="flex items-center gap-3">
              <span className="pulse-point h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-foreground">
                Real-time Sentivio analysis
              </span>
            </div>
          </div>

          {/* Metric cards */}
          <div className="glass-panel rounded-xl p-6 lg:col-span-3">
            <div className="text-sm font-medium text-muted-foreground">Sentiment Lift</div>
            <div className="mt-1 font-display text-headline-lg font-bold text-secondary">+32%</div>
          </div>

          <div className="glass-panel rounded-xl p-6 lg:col-span-3">
            <div className="text-sm font-medium text-muted-foreground">Mentions</div>
            <div className="mt-1 font-display text-headline-lg font-bold text-foreground">1.2M</div>
          </div>

          <div className="glass-panel rounded-xl p-6 lg:col-span-3">
            <div className="text-sm font-medium text-muted-foreground">Risk</div>
            <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-tertiary-container px-3 py-1 font-display text-headline-lg font-bold text-tertiary">
              Low
            </div>
          </div>

          {/* AI Insight Engine */}
          <div className="glass-panel glow-cyan rounded-xl p-6 lg:col-span-6">
            <div className="flex items-center gap-2">
              <span className="material-symbols text-accent">auto_awesome</span>
              <span className="font-label text-xs uppercase tracking-widest text-accent">
                AI Insight Engine
              </span>
            </div>
            <p className="mt-4 text-body-md text-foreground">
              "Emerging trend detected in EMEA regional finance. Consumer sentiment shifting toward
              decentralized assets..."
            </p>
          </div>

          {/* Bottom metric row */}
          <div className="glass-panel rounded-xl p-6 text-center lg:col-span-4">
            <div className="font-display text-headline-xl font-bold text-foreground">100M+</div>
            <div className="mt-1 text-sm text-muted-foreground">Data Points Processed</div>
          </div>
          <div className="glass-panel rounded-xl p-6 text-center lg:col-span-4">
            <div className="font-display text-headline-xl font-bold text-foreground">95%</div>
            <div className="mt-1 text-sm text-muted-foreground">AI Model Accuracy</div>
          </div>
          <div className="glass-panel rounded-xl p-6 text-center lg:col-span-4">
            <div className="font-display text-headline-xl font-bold text-foreground">5 Min</div>
            <div className="mt-1 text-sm text-muted-foreground">Auto Report Generation</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntelligencePipelineSection() {
  const steps = [
    {
      icon: "keyboard",
      number: "1",
      title: "Input",
      description: "Input your brand keywords, hashtags, and tracking parameters.",
    },
    {
      icon: "cloud_download",
      number: "2",
      title: "Ingestion",
      description: "Real-time data ingestion from millions of global sources.",
    },
    {
      icon: "auto_awesome",
      number: "3",
      title: "Enrichment",
      description: "Proprietary AI enrichment process for deep sentiment and context.",
    },
    {
      icon: "magic_button",
      number: "4",
      title: "Generation",
      description: "Generate your custom executive report with one click.",
    },
    {
      icon: "verified",
      number: "5",
      title: "Ready",
      description: "Your strategic intelligence report is ready for the boardroom.",
    },
  ];

  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="font-label text-xs uppercase tracking-widest text-muted-foreground">
            Intelligence Pipeline
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-headline-xl">
            From raw data to board-ready insights with{" "}
            <span className="text-secondary">Sentivio by Intelligo ID</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-xl border border-border bg-surface-container p-6 transition-all hover:border-accent/30 hover:bg-surface-container-high"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground">
                <span className="material-symbols text-2xl">{step.icon}</span>
              </div>
              <div className="mt-4 font-label text-xs uppercase tracking-widest text-muted-foreground">
                {step.number}. {step.title}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModulesSection() {
  const modules = [
    {
      icon: "podcasts",
      title: "Social Listening",
      description: "Track brand mentions across 50+ platforms.",
    },
    {
      icon: "monitoring",
      title: "Brand Monitoring",
      description: "Continuous health checks for your identity and reputation across global news.",
    },
    {
      icon: "query_stats",
      title: "Trend Forecasting",
      description: "Predict shifts using historical patterns.",
    },
    {
      icon: "security",
      title: "Crisis Detection",
      description: "Immediate alerts when negative sentiment spikes.",
    },
    {
      icon: "public",
      title: "Geopolitical Intel",
      description: "Monitor localized risks across regions.",
    },
    {
      icon: "groups",
      title: "Stakeholder Analysis",
      description: "Identify key opinion leaders and influencers driving your industry.",
    },
  ];

  return (
    <section className="relative px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="font-label text-xs uppercase tracking-widest text-muted-foreground">
            An AI Analyst For Your Entire Organization
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground lg:text-headline-xl">
            A modular intelligence ecosystem built by Intelligo ID for{" "}
            <span className="text-gradient">high-performance teams</span>.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-xl border border-border bg-surface-container p-6 transition-all hover:border-accent/30 hover:bg-surface-container-high"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                <span className="material-symbols text-2xl">{module.icon}</span>
              </div>
              <h3 className="mt-5 font-display text-headline-lg font-bold text-foreground">
                {module.title}
              </h3>
              <p className="mt-2 text-body-md text-muted-foreground">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-container p-10 text-center lg:p-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-foreground lg:text-headline-xl">
              Sentivio by Intelligo ID
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-body-md text-muted-foreground">
              The world's most advanced AI intelligence platform for enterprise decision-making.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary/90"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-container-low px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-surface-container-high"
              >
                Book Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Resources"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Blog"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers"],
    },
    {
      title: "Legal",
      links: ["Privacy", "Terms"],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface-container-low px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <a href="/" className="flex items-center gap-2 text-xl font-bold text-foreground">
              <img
                src={SENTIVIO_LOGO}
                alt="Logo Sentivio"
                className="logo-glow h-8 w-8"
                loading="lazy"
              />
              <span className="font-display">Sentivio by Intelligo ID</span>
            </a>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The world's most advanced AI intelligence platform for enterprise decision-making.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="font-label text-xs uppercase tracking-widest text-foreground">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 Sentivio by Intelligo ID. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>Powered by</span>
            <span className="inline-flex items-center rounded-md bg-white px-2.5 py-1.5">
              <img src={INTELLIGO_LOGO} alt="Intelligo ID" className="h-9 w-auto" loading="lazy" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
