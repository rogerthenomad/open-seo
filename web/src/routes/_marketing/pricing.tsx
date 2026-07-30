import { createFileRoute } from "@tanstack/react-router";
import { buildPageSeo } from "@/lib/seo";

const CONTACT_URL = "https://www.capturethatmedia.com/contact";
const PHONE = "(210) 934-1975";
const PHONE_HREF = "tel:+12109341975";

export const Route = createFileRoute("/_marketing/pricing")({
  head: () =>
    buildPageSeo({
      title: "Pricing",
      description:
        "Run Your SEO pricing is usage based at heart: you pay for the search data you actually pull, not for seats. Talk to Capture That Media to get set up.",
      path: "/pricing",
      titleSuffix: "Run Your SEO",
    }),
  component: Pricing,
});

const INCLUDED = [
  {
    title: "Keyword research",
    detail: "Ideas, volume, difficulty, intent, and live SERPs.",
  },
  {
    title: "Rank tracking",
    detail: "Scheduled position checks you size to your budget.",
  },
  {
    title: "Competitor insight",
    detail: "Domain overviews, competitor keywords, and gaps.",
  },
  {
    title: "Backlinks",
    detail: "Profiles, referring domains, and link quality.",
  },
  {
    title: "Site audits",
    detail: "Technical crawls that surface real issues.",
  },
  {
    title: "AI visibility",
    detail: "Mentions and citations across AI assistants.",
  },
  {
    title: "MCP and agent skills",
    detail: "Your AI agent works on the same data you do.",
  },
  {
    title: "Google Search Console",
    detail: "Connected reporting that never uses credits.",
  },
];

function Pricing() {
  return (
    <article className="mx-auto max-w-4xl text-neutral-900">
      <header className="border-b border-[#eedbec] pb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#711c90]">
          Pricing
        </p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-neutral-950 md:text-6xl">
          Pay for data, not for seats
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
          Run Your SEO is usage based at heart. Costs follow the search data
          you actually pull, so a lean setup stays lean and a heavy research
          month costs what it should. No per seat tax, no enterprise tier you
          have to grow into.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-neutral-950">
          Everything in the platform
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {INCLUDED.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[#eedbec] bg-white p-5"
            >
              <p className="font-semibold text-neutral-900">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-[#eedbec] bg-gradient-to-b from-[#fdf3fc] to-[#fbe9f9] p-8 md:p-10">
        <h2 className="text-2xl font-semibold text-neutral-950">
          Getting started
        </h2>
        <p className="mt-3 max-w-2xl leading-relaxed text-neutral-700">
          Published plans are being finalized. Right now the Capture That
          Media team sets every account up personally, sized to how much SEO
          data you plan to use, and walks you through the platform. It takes
          one short conversation.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#711c90] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#5d1777]"
          >
            Talk to the team
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-[#eedbec] bg-white px-6 text-sm font-semibold text-neutral-900 transition-colors hover:border-[#711c90]"
          >
            Call {PHONE}
          </a>
        </div>
        <p className="mt-4 text-sm text-neutral-500">
          Capture That Media, 12015 Radium St, San Antonio, TX 78216.
        </p>
      </section>
    </article>
  );
}
