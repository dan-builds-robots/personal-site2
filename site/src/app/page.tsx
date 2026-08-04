import Image from "next/image";
import { Reveal } from "./_components/Reveal";
import { SorceStats } from "./_components/SorceStats";
import { TikTokReveal } from "./_components/TikTokReveal";

const socials = [
  {
    label: "twitter",
    href: "https://x.com/therealdajayi",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className="h-3.5 w-3.5"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/dan-ajayi/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className="h-3.5 w-3.5"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5S0 4.881 0 3.5C0 2.12 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v13H.22zM8.73 8H13v1.81c.62-.97 2.14-1.81 3.9-1.81 4.18 0 5.1 2.75 5.1 6.32V21h-4.56v-5.43c0-1.3-.02-2.98-1.81-2.98-1.82 0-2.1 1.42-2.1 2.89V21H8.73z" />
      </svg>
    ),
  },
  {
    label: "github",
    href: "https://github.com/dan-builds-robots",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        className="h-3.5 w-3.5"
      >
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.48 11.48 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12.5C24 5.87 18.63.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "email",
    href: "mailto:me@dajayi.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
        className="h-3.5 w-3.5"
      >
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
        <path d="M22 6L12 13 2 6" />
      </svg>
    ),
  },
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
    href: "https://www.linkedin.com/posts/dan-ajayi_i-participated-in-hackmit-with-my-teammates-activity-7254189978929311744-Cgfz",
    role: "HackMIT team",
    pitch:
      "Parses your inbox for internship and job decisions. Won the HackMIT Interaction Prize — plus a North Face jacket and AirPods.",
    tag: "HackMIT · 2024",
    hoverImage: "/offerwatch-team.jpeg",
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
    name: "smart-room",
    href: "https://www.tiktok.com/t/ZTkuyUN93/",
    role: "MIT class build",
    pitch:
      "Whole-room automation: lights, appliances, and scenes controlled from an app over a local server. Built with friends on campus.",
    tag: "MIT · 2022",
    tiktokId: "7096345363115773227",
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
    <main className="mx-auto max-w-6xl px-6 py-20 sm:py-28 md:px-10">
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
          CTO &amp; co-founder @{" "}
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
              className="group inline-flex items-center font-mono text-[0.82rem] text-muted underline-offset-[5px] transition-colors duration-200 hover:text-foreground hover:underline"
            >
              <span
                aria-hidden
                className="inline-flex w-0 items-center overflow-hidden opacity-0 transition-all duration-300 group-hover:mr-2 group-hover:w-3.5 group-hover:text-accent group-hover:opacity-100"
              >
                {s.icon}
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
        <Reveal>
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
              application for you. Went viral on TikTok (1.1M views),
              approaching a million users, and Y Combinator let us in after we
              applied past the deadline.
            </p>
            <SorceStats />
            <div className="mt-6 border-t border-rule pt-5">
              <TikTokReveal
                videoId="7440646805701856554"
                label="watch the viral tiktok (1.1M)"
              />
            </div>
          </article>
        </Section>
        </Reveal>

        {/* Shipped — bento */}
        <Reveal>
        <Section title="Shipped before">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:[grid-auto-flow:dense]">
            {shipped.map((s, i) => {
              const span = bentoSpan(i);
              const isFeature = i === 0;
              const hoverImage =
                "hoverImage" in s ? (s as { hoverImage: string }).hoverImage : undefined;
              const tiktokId =
                "tiktokId" in s ? (s as { tiktokId: string }).tiktokId : undefined;
              return (
                <article
                  key={s.name}
                  className={`group relative flex flex-col overflow-hidden border border-rule p-5 transition-colors duration-300 hover:bg-foreground/[0.025] sm:p-6 ${span} ${
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
                  {hoverImage && (
                    <>
                      <div className="pointer-events-none absolute inset-0 z-[1] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <Image
                          src={hoverImage}
                          alt=""
                          fill
                          sizes="(min-width: 640px) 22rem, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <div
                        className="pointer-events-none absolute inset-0 z-[2] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(10,11,19,0.92) 0%, rgba(10,11,19,0.5) 32%, rgba(10,11,19,0.5) 62%, rgba(10,11,19,0.94) 100%)",
                        }}
                      />
                    </>
                  )}
                  <div className="pointer-events-none relative z-10 flex flex-1 flex-col">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <span
                        className={`inline-flex items-baseline gap-1.5 font-mono font-medium tracking-[-0.01em] transition-colors duration-200 group-hover:text-accent ${
                          isFeature ? "text-2xl sm:text-[1.75rem]" : "text-lg"
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
                    {tiktokId && (
                      <div className="mt-4">
                        <TikTokReveal
                          videoId={tiktokId}
                          label="watch the build"
                        />
                      </div>
                    )}
                    <span className="mt-auto pt-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted">
                      {s.tag}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>
        </Reveal>

        {/* Experience */}
        <Reveal>
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
        </Reveal>

        {/* Education — MIT + how I got in */}
        <Reveal>
          <Section title="Education">
            <div className="space-y-4">
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
                    Course 6-3{" "}
                    <span className="text-muted">
                      (B.S. Computer Science &amp; Computer Engineering)
                    </span>
                  </div>
                  <div className="mt-3 font-mono text-[0.74rem] text-muted">
                    <span className="uppercase tracking-[0.2em] text-foreground/60">
                      favorite classes —{" "}
                    </span>
                    6.5840{" "}
                    <span className="text-foreground/50">
                      (Distributed Systems)
                    </span>
                    , 6.191{" "}
                    <span className="text-foreground/50">
                      (Computation Structures)
                    </span>
                  </div>
                </div>
                <span className="ml-auto font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
                  2021 — 2025
                </span>
              </div>

              <div className="flex flex-col gap-4 border border-rule p-6 transition-colors duration-300 hover:bg-foreground/[0.02] sm:p-7">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-[0.64rem] uppercase tracking-[0.22em] text-muted">
                    ↑ how I got in
                  </span>
                </div>
                <p className="max-w-2xl text-[0.98rem] leading-[1.6] text-foreground/85">
                  I wrote a rap for my MIT application.{" "}
                  <span className="text-foreground">Admissions loved it.</span>{" "}
                  5,200+ organic streams on Spotify since.
                </p>
                <iframe
                  title="Spotify player — the MIT application rap"
                  src="https://open.spotify.com/embed/track/4WaBawcuGJewl1LA5a6Y5w?utm_source=generator"
                  width="100%"
                  height={152}
                  frameBorder={0}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  className="rounded-xl"
                />
              </div>
            </div>
          </Section>
        </Reveal>

        <Reveal>
          <p className="text-[0.95rem] leading-[1.6] text-foreground/60">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.26em] text-muted">
              Off-hours —{" "}
            </span>
            piano, weightlifting, an overactive Spotify account, movies.
          </p>
        </Reveal>

        <Reveal>
          <a
            href="https://github.com/dan-builds-robots"
            target="_blank"
            rel="noreferrer"
            className="group block border-t border-rule pt-6 opacity-60 transition-opacity duration-300 hover:opacity-100"
            aria-label="Daniel Ajayi's GitHub contribution activity"
          >
            <div className="mb-3 flex items-baseline justify-between font-mono text-[0.62rem] uppercase tracking-[0.26em] text-muted">
              <span>— shipping daily</span>
              <span className="transition-colors group-hover:text-accent">
                github ↗
              </span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://ghchart.rshah.org/b48660/dan-builds-robots"
              alt="GitHub contribution chart for dan-builds-robots, past year"
              className="h-auto w-full"
              loading="lazy"
            />
          </a>
        </Reveal>

        <Reveal>
          <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8 text-xs text-muted">
            <span className="font-mono uppercase tracking-[0.22em]">
              Daniel Ajayi · 2026
            </span>
            <a
              href="mailto:me@dajayi.com"
              className="font-mono uppercase tracking-[0.22em] underline-offset-[5px] transition-colors hover:text-accent hover:underline"
            >
              me@dajayi.com
            </a>
          </footer>
        </Reveal>
      </div>
    </main>
  );
}

function bentoSpan(i: number): string {
  // sm: 2-col grid.  lg: 4-col grid with dense auto-flow for a denser bento.
  // Ossy (0) = feature centerpiece (2 cols × 2 rows on lg).
  // smart-room (4) + Clinical (7) = full-width wide tiles on lg.
  if (i === 0) return "sm:col-span-2 sm:min-h-[14rem] lg:col-span-2 lg:row-span-2 lg:min-h-[22rem]";
  if (i === 4) return "sm:col-span-2 lg:col-span-4";
  if (i === 7) return "sm:col-span-2 lg:col-span-4";
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
