import { createFileRoute } from "@tanstack/react-router";

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
          <span className="material-symbols text-secondary">auto_awesome</span>
          <span className="font-display">Sentivio</span>
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
  return (
    <section className="relative overflow-hidden bg-background px-6 pb-24 pt-20 lg:px-8">
      {/* Ambient glow behind the hero */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-1.5 font-label text-xs uppercase tracking-widest text-foreground">
          <span className="material-symbols text-sm text-secondary">auto_awesome</span>
          AI Powered Data Intelligence
        </span>

        <h1 className="mx-auto mt-8 max-w-4xl font-display text-display-lg-mobile font-extrabold tracking-tight text-foreground lg:text-display-lg">
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
            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-secondary/90"
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
    </section>
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
              <span className="text-sm font-medium text-foreground">Real-time Sentivio analysis</span>
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
          <h2 className="mt-4 font-display text-headline-xl font-bold text-foreground">
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
          <h2 className="mt-4 font-display text-headline-xl font-bold text-foreground">
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
            <h2 className="font-display text-headline-xl font-bold text-foreground">
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
              <span className="material-symbols text-secondary">auto_awesome</span>
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
          <p className="text-sm text-muted-foreground">Powered by Intelligo ID</p>
        </div>
      </div>
    </footer>
  );
}
