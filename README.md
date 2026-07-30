# Run Your SEO

> All in one SEO and AI visibility platform, built and run by [Capture That Media](https://www.capturethatmedia.com)

Run Your SEO is the SEO platform Capture That Media runs for its own clients. Keyword research, rank tracking, competitor insight, backlinks, site audits, and AI visibility in one place, plus an MCP server so your AI agents can work the same data you do.

Built and maintained by Roger Wong Won and the Capture That Media team in San Antonio, Texas.

- Marketing site: [seo.capturethatmedia.com](https://seo.capturethatmedia.com)
- Application: [seo-app.capturethatmedia.com](https://seo-app.capturethatmedia.com)
- Production deploy runbook: [`docs/DEPLOY_SEO_CAPTURETHATMEDIA.md`](./docs/DEPLOY_SEO_CAPTURETHATMEDIA.md)

## Why it exists

Semrush and Ahrefs are expensive and bloated, and they still treat AI search as a bolt on. Run Your SEO is the opposite: focused workflows, no seat tax, and you bring your own DataForSEO key so you pay only for the data you actually pull.

- Best in class MCP server and agent skills.
- Focused workflows instead of a sprawling suite nobody finishes learning.
- No subscription. Bring your own DataForSEO API key.
- Full control of the code and the data.

## What it does

- Keyword research
- Rank tracking
- Competitor insight
- Backlinks
- Site audits
- AI visibility

## MCP and agent skills

Run Your SEO exposes an MCP server, so agents like Claude Code, OpenClaw, and Hermes can use your SEO data directly. Agent skills are reusable workflows that walk an agent through SEO tasks over that MCP.

Setup lives in [`web/content/docs/mcp.md`](./web/content/docs/mcp.md) and [`web/content/docs/skills/setup.md`](./web/content/docs/skills/setup.md).

## Running it

Two paths:

- **Docker** for a single machine. See [`docs/SELF_HOSTING_DOCKER.md`](./docs/SELF_HOSTING_DOCKER.md).
- **Cloudflare** for team access over the internet, works on the free plan. See [`docs/SELF_HOSTING_CLOUDFLARE.md`](./docs/SELF_HOSTING_CLOUDFLARE.md).

Either path needs a DataForSEO API key for search data. See [`docs/DATAFORSEO_API_KEY.md`](./docs/DATAFORSEO_API_KEY.md).

Local development: [`docs/LOCAL_DEVELOPMENT.md`](./docs/LOCAL_DEVELOPMENT.md).

> **Going live.** The marketing route and app hostname are wired for
> seo.capturethatmedia.com and seo-app.capturethatmedia.com. The one
> prerequisite is that `capturethatmedia.com` is a zone in the deploying
> Cloudflare account. See
> [`docs/DEPLOY_SEO_CAPTURETHATMEDIA.md`](./docs/DEPLOY_SEO_CAPTURETHATMEDIA.md).

## About Capture That Media

Capture That Media is San Antonio's AI visibility marketing agency, founded in 2020 by Roger Wong Won. We help businesses show up everywhere their customers actually search: Google, answer engines, and AI assistants. Run Your SEO is the platform behind that work.

- Website: [capturethatmedia.com](https://www.capturethatmedia.com)
- Phone: (210) 934-1975

## Credits and license

Run Your SEO builds on [OpenSEO](https://github.com/every-app/open-seo), the open source SEO platform created by Ben Senescu and its contributors, used under the MIT license. That upstream project is a genuinely good piece of work and this platform would not exist without it.

The MIT license requires keeping the original copyright notice, and we do. See [`LICENSE`](./LICENSE) and [`NOTICE.md`](./NOTICE.md). Capture That Media is not affiliated with or endorsed by the upstream project or its hosted service.
