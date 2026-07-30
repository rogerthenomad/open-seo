import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing-page";
import { buildPageSeo } from "@/lib/seo";

const homeTitle = "Run Your SEO - SEO and AI Visibility Platform";
const homeDescription =
  "Run Your SEO by Capture That Media. Keyword research, backlinks, rank tracking, site audits, and AI visibility, billed by the data you use instead of a $100 plus monthly subscription. Works with your AI agents over MCP.";

export const Route = createFileRoute("/_marketing/")({
  head: () => {
    const seo = buildPageSeo({
      title: homeTitle,
      description: homeDescription,
      path: "/",
      imageAlt: "Run Your SEO keyword research dashboard preview",
    });

    return {
      ...seo,
      links: [
        ...(seo.links ?? []),
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
        },
      ],
    };
  },
  component: LandingPage,
});
