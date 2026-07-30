import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <span className="font-semibold">Run Your SEO</span>,
    },
    searchToggle: {
      enabled: false,
    },
    links: [
      {
        text: "Resources",
        url: "/blogs",
        items: [
          {
            text: "Blog",
            description: "SEO articles and guides.",
            url: "/blogs",
          },
          {
            text: "MCP",
            description: "Connect Run Your SEO to AI clients.",
            url: "/docs/mcp",
          },
          {
            text: "Skills",
            description: "Focused Run Your SEO workflows.",
            url: "/docs/skills",
          },
        ],
      },
      {
        text: "GitHub",
        url: "https://github.com/rogerthenomad/Run-Your-SEO",
        external: true,
      },
    ],
  };
}
