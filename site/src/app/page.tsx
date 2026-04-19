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
          className="pointer-events-auto relative z-10 underline decoration-rule underline-offset-[3px] transition-colors hover:text-foreground hover:decoration-accent"
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
          className="pointer-events-auto relative z-10 text-foreground underline decoration-accent decoration-2 underline-offset-[5px] transition-colors hover:text-accent"
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
    what: "Software engineering intern · returning class",
    when: "2024",
    logo: "/logos/citadel.jpeg",
  },
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
      {/* Hero — centered oversized scene */}
      <section className="flex min-h-[78vh] flex-col items-center justify-center text-center">
        <p
          className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-muted opacity-0 [animation:rise_0.7s_ease-out_0ms_forwards]"
        >
          San Francisco / 2026
        </p>

        <div
          className="group relative mt-8 h-40 w-40 overflow-hidden rounded-full opacity-0 ring-1 ring-rule transition-all duration-500 [animation:rise_0.8s_ease-out_120ms_forwards] hover:ring-2 hover:ring-accent/50 sm:h-48 sm:w-48"
        >
          <Image
            src="/baby.png"
            alt="Daniel as a baby in a playpen, mid-bite on a chicken leg, staring directly at the camera"
            fill
            sizes="(min-width: 640px) 12rem, 10rem"
            style={{ objectPosition: "50% 28%" }}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            priority
          />
        </div>

        <h1
          className="mt-10 text-[clamp(3rem,14vw,10rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em] opacity-0 [animation:rise_0.9s_ease-out_260ms_forwards]"
        >
          Daniel Ajayi
        </h1>

        <p
          className="mt-8 max-w-xl text-[1.08rem] leading-[1.55] text-foreground/85 opacity-0 [animation:rise_0.7s_ease-out_440ms_forwards]"
        >
          CTO &amp; co-founder at{" "}
          <a
            href="https://sorce.jobs"
            className="text-foreground underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent"
          >
            Sorce
          </a>{" "}
          <span className="text-muted">(YC F25)</span>. MIT EECS &rsquo;25. I
          build AI agents that apply to jobs so humans don&rsquo;t have to.
        </p>

        <nav
          className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm opacity-0 [animation:rise_0.7s_ease-out_580ms_forwards]"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center text-muted underline-offset-[5px] transition-colors duration-200 hover:text-foreground hover:underline"
            >
              <span
                aria-hidden
                className="inline-block w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:mr-1.5 group-hover:w-3 group-hover:opacity-100"
              >
                →
              </span>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="mt-14 flex flex-col items-center gap-2 opacity-0 [animation:rise_0.7s_ease-out_720ms_forwards]">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.3em] text-muted">
            scroll for work
          </span>
          <span
            aria-hidden
            className="text-muted [animation:bounce-soft_1.8s_ease-in-out_1500ms_infinite]"
          >
            ↓
          </span>
        </div>
      </section>

      <div className="mt-24 space-y-24">
        {/* Now */}
        <Section title="Now">
          <article className="border border-rule bg-foreground/[0.015] p-6 transition-colors duration-300 hover:bg-foreground/[0.035] sm:p-8">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <a
                href="https://sorce.jobs"
                target="_blank"
                rel="noreferrer"
                className="group text-4xl font-semibold tracking-[-0.04em] transition-colors duration-200 hover:text-accent sm:text-5xl"
              >
                Sorce{" "}
                <span
                  aria-hidden
                  className="inline-block text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-accent"
                >
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
            <p className="mt-5 text-[1.02rem] leading-[1.6] text-foreground/85">
              Tinder for jobs. Swipe right and our AI agent writes the
              application for you. Going viral on TikTok, approaching a
              million users, and Y Combinator let us in after we applied past
              the deadline.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-4 border-t border-rule pt-6">
              {sorceStats.map((s) => (
                <div key={s.label} className="group">
                  <div className="text-2xl font-semibold tracking-[-0.03em] transition-colors duration-200 group-hover:text-accent sm:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted transition-colors duration-200 group-hover:text-foreground/80">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Section>

        {/* Shipped — bento */}
        <Section title="Shipped before">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {shipped.map((s, i) => {
              const span = bentoSpan(i);
              const isFeature = i === 0;
              return (
                <article
                  key={s.name}
                  className={`group relative flex flex-col border border-rule p-5 transition-colors duration-300 hover:bg-foreground/[0.025] sm:p-6 ${span} ${
                    isFeature ? "sm:p-7" : ""
                  }`}
                >
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="absolute inset-0 z-0"
                  />
                  <div className="pointer-events-none relative z-10 flex flex-1 flex-col">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span
                        className={`inline-flex items-baseline gap-1.5 font-semibold tracking-[-0.025em] transition-colors duration-200 group-hover:text-accent ${
                          isFeature ? "text-3xl sm:text-4xl" : "text-xl"
                        }`}
                      >
                        {s.name}
                        <span
                          aria-hidden
                          className="inline-block -translate-x-1 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-accent group-hover:opacity-100"
                        >
                          ↗
                        </span>
                      </span>
                      <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                        {s.role}
                      </span>
                    </div>
                    <p
                      className={`mt-3 leading-[1.55] text-foreground/75 transition-colors duration-200 group-hover:text-foreground/90 ${
                        isFeature ? "text-[1rem]" : "text-[0.9rem]"
                      }`}
                    >
                      {s.pitch}
                    </p>
                    <span className="mt-auto pt-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                      {s.tag}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          <ul className="divide-y divide-rule border-y border-rule">
            {experience.map((e) => (
              <li
                key={`${e.where}-${e.when}`}
                className="group grid items-center gap-4 py-5 transition-colors duration-300 hover:bg-foreground/[0.02] sm:grid-cols-[3rem_1fr_auto] sm:gap-6"
              >
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-sm bg-foreground/5 ring-1 ring-rule transition-colors duration-300 group-hover:ring-accent/30">
                  <Image
                    src={e.logo}
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div>
                  <div className="text-[1.05rem] font-semibold tracking-[-0.02em]">
                    {e.where}
                  </div>
                  <div className="mt-0.5 text-[0.9rem] text-foreground/75">
                    {e.what}
                  </div>
                </div>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted sm:text-right">
                  {e.when}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Education */}
        <Section title="Education">
          <div className="group flex flex-wrap items-center gap-6 border border-rule p-6 transition-colors duration-300 hover:bg-foreground/[0.025] sm:p-8">
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-sm bg-foreground/5 ring-1 ring-rule transition-colors duration-300 group-hover:ring-accent/30">
              <Image
                src="/logos/mit.png"
                alt="MIT seal"
                width={64}
                height={64}
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-semibold tracking-[-0.025em]">
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

        <p className="text-[0.95rem] leading-[1.6] text-foreground/60">
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.26em] text-muted">
            Off-hours —{" "}
          </span>
          piano, weightlifting, an overactive Spotify account, movies.
        </p>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8 text-xs text-muted">
          <span className="font-mono uppercase tracking-[0.22em]">
            Daniel Ajayi · 2026
          </span>
          <a
            href="mailto:dan@sorce.jobs"
            className="font-mono uppercase tracking-[0.22em] underline-offset-[5px] transition-colors hover:text-accent hover:underline"
          >
            dan@sorce.jobs
          </a>
        </footer>
      </div>
    </main>
  );
}

function bentoSpan(i: number): string {
  // Ossy (0) and Clinical (6) span full width; others are half-width pairs
  if (i === 0) return "sm:col-span-2 sm:min-h-[14rem]";
  if (i === 6) return "sm:col-span-2";
  return "";
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-8 font-mono text-[0.7rem] uppercase tracking-[0.26em] text-muted">
        — {title}
      </h2>
      {children}
    </section>
  );
}
