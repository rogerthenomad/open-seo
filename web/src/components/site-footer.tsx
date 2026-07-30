import { Link } from "@tanstack/react-router";
import { featureGroups } from "@/lib/feature-pages";

const featureLinks = featureGroups.flatMap((group) =>
  group.pages.map((page) => ({
    label: page.eyebrow,
    href: `/features/${page.slug}`,
  })),
);

export function SiteFooter({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900"
      >
        <img src="/brand/ctm-logo-mark.png" alt="" className="h-5 w-auto" />
        <span>Run Your SEO</span>
      </Link>

      <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
        <div>
          <p className="font-semibold text-neutral-900">Features</p>
          <div className="mt-2 flex flex-col gap-1.5">
            {featureLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <Link to="/features">All features</Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-neutral-900">AI agents</p>
          <div className="mt-2 flex flex-col gap-1.5">
            <Link to="/features/mcp">Run Your SEO MCP</Link>
            <Link to="/google-search-console-mcp">
              Google Search Console MCP
            </Link>
          </div>
        </div>

        <div>
          <p className="font-semibold text-neutral-900">Resources</p>
          <div className="mt-2 flex flex-col gap-1.5">
            <Link to="/blogs">Blog</Link>
            <a href="/docs">Docs</a>
            <a href="/docs/skills">Skills</a>
          </div>
        </div>

        <div>
          <p className="font-semibold text-neutral-900">Company</p>
          <div className="mt-2 flex flex-col gap-1.5">
            <Link to="/pricing">Pricing</Link>
            <a
              href="https://www.capturethatmedia.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Capture That Media
            </a>
            <a
              href="https://www.capturethatmedia.com/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
            <a href="tel:+12109341975">(210) 934-1975</a>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms-and-conditions">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
