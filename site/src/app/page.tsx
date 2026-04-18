import Image from "next/image";

const socials = [
  { label: "Twitter", href: "https://x.com/therealdajayi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dan-ajayi/" },
  { label: "GitHub", href: "https://github.com/dan-builds-robots" },
  { label: "Email", href: "mailto:dan@sorce.jobs" },
];

const sorceStats = [
  { value: "~1M", label: "users" },
  { value: "1M+", label: "applications" },
  { value: "1K+", label: "hires" },
];

const shipped = [
  {
    name: "Ossy",
    href: "https://ossy.ai",
    role: (
      <>
        co-founded with{" "}
        <a
          href="https://www.linkedin.com/in/joshua-bello-411264174"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-rule underline-offset-[3px] hover:text-foreground hover:decoration-accent"
        >
          Joshua Bello
        </a>
      </>
    ),
    pitch: (
      <>
        Real-time lecture transcription with an AI that explains what was just
        said and answers questions on the material. Launched, went viral, and{" "}
        <a
          href="https://x.com/therealdajayi/status/1983257988434698620"
          target="_blank"
          rel="noreferrer"
          className="text-foreground underline decoration-accent decoration-2 underline-offset-[5px] hover:text-accent"
        >
          Drew Houston wrote the first check
        </a>
        .
      </>
    ),
    tag: "2024",
  },
  {
    name: "offer-watch",
    href: "https://github.com/dan-builds-robots/offer-watch",
    role: "solo build",
    pitch: "Parses your inbox for internship and job decisions.",
    tag: "HackMIT Interaction Prize · 2024",
  },
  {
    name: "RoboTokens",
    href: "https://youtu.be/0Ux1HxexzYc",
    role: "HackHarvard",
    pitch:
      "Platform that converts crypto tokens into battling robots with programmable strategies.",
    tag: "2022",
  },
  {
    name: "RateMyProtectors",
    href: "https://github.com/dan-builds-robots",
    role: "HackMIT finalist",
    pitch:
      "Cross-platform app built in React Native — top 10 of 147 submissions.",
    tag: "2021",
  },
  {
    name: "Curious George",
    href: "https://chrome.google.com/webstore/detail/curious-george/jiciecmmhfbcefjjmbbbkcjbjlomoemh",
    role: "stupid and I love it",
    pitch:
      "Chrome extension that replaces every image on the web with Curious George.",
    tag: "2021",
  },
  {
    name: "Teddy the Depression Fighter",
    href: "https://thesunpapers.com/2020/09/21/williamstown-senior-creates-app-to-help-users-fight-depression/",
    role: "high-school project",
    pitch:
      "A mental-health app with a crisis-line button and a built-in screening exam.",
    tag: "Williamstown Sun · 2020",
  },
  {
    name: "Clinical Notes Simplifier",
    href: "https://github.com/dan-builds-robots/clinical-notes-chrome-extension",
    role: "MIT EECS research",
    pitch:
      "Chrome extension that uses ML to rewrite patient clinical notes in plain English.",
    tag: "2022",
  },
];

const experience = [
  {
    where: "Citadel Securities",
    what: "Software engineering intern",
    when: "2023",
    logo: "/logos/citadel.jpeg",
  },
  {
    where: "NVIDIA",
    what: "ASIC design intern",
    when: "2022",
    logo: "/logos/nvidia.png",
  },
  {
    where: "MIT EECS",
    what: "Student researcher",
    when: "2022",
    logo: "/logos/eecs.png",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 sm:py-28 md:px-10">
      {/* Hero */}
      <section className="flex flex-col-reverse gap-10 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex-1">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.26em] text-muted">
            San Francisco / 2026
          </p>
          <h1 className="mt-5 text-[clamp(3.5rem,11vw,7.5rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
            Daniel Ajayi
          </h1>
          <p className="mt-6 max-w-xl text-[1.08rem] leading-[1.55] text-foreground/85">
            CTO &amp; co-founder at{" "}
            <a
              href="https://sorce.jobs"
              className="text-foreground underline decoration-accent decoration-2 underline-offset-[6px] hover:text-accent"
            >
              Sorce
            </a>{" "}
            <span className="text-muted">(YC F25)</span>. MIT EECS &rsquo;25.
            I build AI agents that apply to jobs so humans don&rsquo;t have to.
          </p>
        </div>

        <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-sm ring-1 ring-rule sm:h-52 sm:w-52">
          <Image
            src="/baby.jpg"
            alt="Daniel as a baby in a playpen, mid-bite on a chicken leg, staring directly at the camera"
            fill
            sizes="(min-width: 640px) 13rem, 11rem"
            style={{ objectPosition: "50% 28%" }}
            className="object-cover"
            priority
          />
        </div>
      </section>

      <nav className="mt-12 flex flex-wrap gap-x-7 gap-y-2 text-sm">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-[5px] hover:text-foreground hover:underline"
          >
            {s.label}
          </a>
        ))}
      </nav>

      {/* Now */}
      <Section title="Now">
        <article className="border border-rule bg-foreground/[0.015] p-6 sm:p-8">
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <a
              href="https://sorce.jobs"
              target="_blank"
              rel="noreferrer"
              className="text-4xl font-semibold tracking-[-0.04em] hover:text-accent sm:text-5xl"
            >
              Sorce{" "}
              <span aria-hidden className="text-muted">
                ↗
              </span>
            </a>
            <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted">
              CTO · co-founder
            </span>
            <span className="border border-rule px-2.5 py-1 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted">
              YC F25
            </span>
          </div>
          <p className="mt-5 max-w-2xl text-[1.02rem] leading-[1.6] text-foreground/85">
            Tinder for jobs. Swipe right and our AI agent writes the
            application for you. Going viral on TikTok, approaching a million
            users, and Y Combinator let us in after we applied past the
            deadline.
          </p>
          <div className="mt-7 grid grid-cols-3 gap-4 border-t border-rule pt-6">
            {sorceStats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </article>
      </Section>

      {/* Shipped */}
      <Section title="Shipped before">
        <ul className="divide-y divide-rule border-y border-rule">
          {shipped.map((s) => (
            <li key={s.name} className="py-6">
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-xl font-semibold tracking-[-0.025em] group-hover:text-accent sm:text-2xl">
                    {s.name}
                  </span>
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-muted">
                    {s.role}
                  </span>
                </div>
                <div className="mt-2 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                  <p className="max-w-2xl text-[0.95rem] leading-[1.55] text-foreground/75">
                    {s.pitch}
                  </p>
                  <span className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-muted sm:text-right">
                    {s.tag}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        <ul className="divide-y divide-rule border-y border-rule">
          {experience.map((e) => (
            <li
              key={e.where}
              className="grid items-center gap-4 py-5 sm:grid-cols-[3rem_14rem_1fr_auto] sm:gap-6"
            >
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-sm bg-foreground/5 ring-1 ring-rule">
                {e.logo ? (
                  <Image
                    src={e.logo}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                ) : (
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted">
                    {initials(e.where)}
                  </span>
                )}
              </div>
              <span className="text-[1.05rem] font-semibold tracking-[-0.02em]">
                {e.where}
              </span>
              <span className="text-[0.95rem] text-foreground/75">
                {e.what}
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted sm:text-right">
                {e.when}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="flex flex-wrap items-center gap-6 border border-rule p-6 sm:p-8">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm bg-foreground/5 ring-1 ring-rule">
            <Image
              src="/logos/mit.png"
              alt="MIT seal"
              width={64}
              height={64}
              className="h-14 w-14 object-contain"
            />
          </div>
          <div>
            <div className="text-2xl font-semibold tracking-[-0.025em]">
              Massachusetts Institute of Technology
            </div>
            <div className="mt-1 text-foreground/75">
              B.S. Electrical Engineering &amp; Computer Science
            </div>
          </div>
          <span className="ml-auto font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
            2021 — 2025
          </span>
        </div>
      </Section>

      <footer className="mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8 text-xs text-muted">
        <span className="font-mono uppercase tracking-[0.22em]">
          Daniel Ajayi · {new Date().getFullYear()}
        </span>
        <a
          href="mailto:dan@sorce.jobs"
          className="font-mono uppercase tracking-[0.22em] underline-offset-[5px] hover:text-accent hover:underline"
        >
          dan@sorce.jobs
        </a>
      </footer>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-24">
      <h2 className="mb-10 font-mono text-[0.7rem] uppercase tracking-[0.26em] text-muted">
        — {title}
      </h2>
      {children}
    </section>
  );
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 3)
    .join("");
}
