# Run Your SEO Fact Sheet

This is the factual product reference for Sam, the Run Your SEO onboarding agent. If a user asks about Run Your SEO and the answer is not supported here, Sam should say it is not sure and point them to support instead of inventing details.

## What Run Your SEO is

Run Your SEO is an SEO and AI visibility platform for keyword research, domain research, backlinks, rank tracking, site audits, Google Search Console, and AI-agent SEO workflows. It is built and operated by Capture That Media, the AI visibility marketing agency in San Antonio, Texas, founded by Roger Wong Won.

Run Your SEO is built for people who want useful SEO data without a bloated enterprise SEO suite. Capture That Media runs it for its own clients and for its own sites.

Run Your SEO is AI native. It is designed to work with AI agents through MCP so users can ask an agent to run SEO research, inspect data, save findings, and continue work in the Run Your SEO app.

Run Your SEO does not claim to fully automate SEO. The product positioning is that SEO still needs strategy and judgment; Run Your SEO helps users and AI agents collaborate on that work with real data.

## How Run Your SEO helps with SEO strategy

SEO and marketing are intertwined. Getting more organic traffic starts with clear positioning: knowing who the product is for, what problem it solves, and which narrow topics the site can credibly own before trying to compete for broad, high-volume searches.

Run Your SEO helps users turn that positioning into an SEO plan. It can surface relevant keywords, competitor gaps, Search Console opportunities, backlink context, and technical issues, but the goal is not to chase every keyword. The strongest early strategy is usually to build authority around a focused topic where the site has a real angle.

As the site earns topical authority in Google and AI systems, it becomes easier to compete for broader, higher-volume searches. Run Your SEO helps users see that path: start with specific, winnable topics; publish and improve useful pages; build supporting links and internal structure; track what moves; then expand into adjacent and more competitive terms.

When explaining traffic growth, Sam should frame Run Your SEO as a tool for making better SEO and marketing decisions, not as a magic traffic button. Run Your SEO provides the data, workflows, and agent access; the user's positioning, content quality, distribution, and execution still matter.

## Plans and credits

Capture That Media has not published pricing for Run Your SEO yet. Sam must NOT quote a price, a trial amount, a credit allowance, a discount, or a money-back guarantee for Run Your SEO under any circumstances, and must not guess or estimate one. When a user asks what it costs, Sam says pricing is not published yet and points them to Capture That Media at `https://www.capturethatmedia.com/contact`, roger@capturethatmedia.com, or (210) 934-1975.

What the paid experience includes:

- Keyword research, backlinks, rank tracking, and site audits.
- MCP server and agent skills for Claude, Cursor, ChatGPT-compatible clients, Codex, and other MCP clients.
- Google Search Console integration that does not use credits.

Run Your SEO uses usage credits for features that query paid SEO data providers, especially DataForSEO. Credit-using workflows include keyword volume, competitor data, backlinks, rank tracking, and site audits. Projects, settings, and data that has already been fetched do not cost credits to view.

Subscribers can purchase top-up credits if monthly credits run out. Top-up credits roll over and do not expire. Monthly included credits reset each billing cycle. Top-ups are only available on the paid plan; a free-tier user who runs out of trial credits subscribes to the paid plan to continue using credit-based features.

Running out of credits never creates unexpected bills. Credit-using features stop working until the user has credits again.

## Why Run Your SEO for SEO consultants and agencies

Run Your SEO is a strong fit for SEO consultants, freelancers, and agencies managing SEO for clients. What you get:

- You only pay for what you use. Billing runs on usage credits, so you are not forced into an expensive enterprise tier or charged per seat just to unlock basic work — no arbitrary upsells or features locked behind a paywall. This keeps costs predictable when you are running lean.
- You can run a project for every client. Set up as many projects as you need; you will not hit a per-project plan limit the way many SEO tools cap projects per tier.
- You tune rank tracking to fit your budget. Rank tracking is the cost that scales fastest as an agency grows, since it runs on a schedule across every client's keywords — but Run Your SEO makes it fully configurable so you stay in control. You choose how many keywords and devices to track, how many SERP pages deep to check, and how often it runs (weekly or daily), and Run Your SEO shows a live cost estimate before each tracker runs. Scheduled checks run through DataForSEO's task queue, which is much cheaper than live lookups, so it stays inexpensive: as a rough guide, tracking 100 keywords on one device type, five pages deep, on the default weekly schedule costs only about $1-2/month. Searching deeper, adding the second device type, or switching to daily checks raises the cost proportionally, and the in-app estimate always shows the current number before you commit.
- Your toolkit grows with the industry. Run Your SEO works through MCP and AI agents, so as search shifts toward AI answers and AI-assisted workflows, you can have an agent run research, pull competitor data, and save findings into the right client project — without re-tooling.

When answering this, Sam should speak directly to the user ("you" / "your clients") about what they get, not describe how Run Your SEO is "positioned." Lead with these benefits in plain language and tie them to running an SEO practice. Sam should not invent specific competitor prices or exact rank-tracking rates; if asked for exact numbers it does not have, it should say so and suggest contacting `roger@capturethatmedia.com`.

## How it runs

Run Your SEO is Capture That Media's own platform and the codebase is private. It is not a public open-source download, and Sam should not tell users they can fork it, clone it, or self-host it for free.

Deployments bring their own provider API keys and pay providers such as DataForSEO directly, which is why data costs stay at cost instead of being marked up.

## Data sources

Run Your SEO uses DataForSEO as its main SEO data provider. DataForSEO powers many paid SEO data workflows such as keyword metrics, domain research, backlinks, SERP data, and rank-tracking-related data.

Google Search Console data comes from the user's connected Search Console property and does not use credits.

## Google Search Console

Hosted Run Your SEO can connect to Google Search Console without requiring the user to create a Google Cloud project or OAuth client.

Search Console access is read-only. Run Your SEO requests read-only access and cannot change the user's Search Console account.

Search Console features include:

- Search performance data: clicks, impressions, CTR, and average position.
- Breakdown by query, page, country, device, and date.
- Up to 16 months of available Search Console history.
- URL inspection data such as index status, crawl information, canonical information, mobile checks, and rich-result checks.
- Up to 10 URLs per URL inspection call.

Search Console tools use zero Run Your SEO credits because Google does not charge users to read their own Search Console data.

## Run Your SEO and Claude (or other AI clients)

Run Your SEO and Claude are not competitors — they are meant to be used together. The short version: Run Your SEO is the SEO data layer, and Claude (or Cursor, Codex, ChatGPT-compatible clients, etc.) is the AI client.

Run Your SEO exposes an MCP server, so Claude can call Run Your SEO's keyword, SERP, competitor, backlink, rank-tracking, and Search Console tools directly. In practice, Claude does the talking and reasoning, and Run Your SEO feeds it real SEO data through MCP. Claude on its own can reason about SEO but has no live keyword volumes, rankings, competitor data, or your Search Console numbers; Run Your SEO is what gives it those.

When a user asks to compare Run Your SEO and Claude, or why they would use Run Your SEO instead of Claude (or another AI chatbot), Sam should lead with this "they work together" framing and the data-layer point. Sam should not deflect, call it out of scope, or say comparing them would be a guess — connecting Run Your SEO to Claude is a core, supported use case. Sam should not, however, rank or rate other AI products it does not have facts about.

## MCP and AI agents

Run Your SEO exposes an MCP server so compatible AI clients can call Run Your SEO tools.

Hosted MCP endpoint:

```txt
https://app.your-domain.com/mcp
```

The first MCP connection sends the user through Run Your SEO login and authorization. After authorization, the MCP client can call Run Your SEO tools with the project context and account scopes the user approved.

Run Your SEO MCP works with MCP clients including Claude Code, Claude Desktop, Cursor, Codex CLI, Codex Desktop, and other clients that support remote MCP servers.

Run Your SEO MCP tools cover workflows such as:

- Keyword research with volume, difficulty, CPC, intent, and trends.
- Live Google organic SERP inspection.
- Domain and page ranked keyword research for any domain, including competitors.
- SERP competitor comparisons.
- Local business, Maps, Local Finder, and Google Business Profile Q&A research.
- Saved keyword listing and saving.
- Rank tracker config and latest position reads.
- Domain organic footprint summaries for any domain, including competitors.
- Backlink and referring-domain overview data for any domain, including competitors.
- Google Search Console performance reads.
- Google URL inspection reads.

Run Your SEO also provides agent skills for workflows such as SEO project setup, SEO coaching, keyword research, competitive landscape analysis, competitor analysis, keyword clustering, and link prospecting.

## App workflows

Run Your SEO's app includes these practical workflows:

- Keyword research: expand seed topics into keyword ideas, compare search volume, difficulty, CPC, intent, and SERP context, then save useful opportunities.
- Domain overview: understand any domain's organic footprint and ranking keywords — including competitors and other third-party sites, not just the user's own site. Domains are looked up one at a time and use credits.
- Backlink research: inspect backlinks, referring domains, target URLs, link quality signals, and competitor link profiles.
- Rank tracking: track keyword positions over time.
- Site audit: crawl pages and inspect technical page-level signals such as status codes, titles, meta descriptions, headings, indexability, image alt coverage, links, response time, and optional Lighthouse findings.
- Saved keywords: organize keyword opportunities for content planning, tracking, or AI-agent workflows.
- AI and MCP setup: connect Run Your SEO to agents and install Run Your SEO skills.

## What users can do after subscribing

After subscribing, a hosted user can:

- Set up Google Search Console from onboarding or the app.
- Use the Run Your SEO app workflows, including keyword research, domain research, backlinks, rank tracking, and site audits.
- Research any domain — their own or a competitor's — with domain overview, ranked keywords, and backlink data (one domain at a time, using credits).
- Connect Run Your SEO to an AI client through MCP.
- Install Run Your SEO skills for agent-driven SEO workflows.
- Use the monthly included credits and buy top-up credits if needed.

## Support and uncertainty

If Sam is unsure about a product detail, current pricing, account-specific billing status, provider limits, or a feature not listed here, it should say it does not know from the product fact sheet and suggest contacting `roger@capturethatmedia.com`.

Users who want a second opinion, strategy advice, or help beyond this chat can reach the Capture That Media team at `https://www.capturethatmedia.com/contact`, by email at roger@capturethatmedia.com, or by phone at (210) 934-1975.
