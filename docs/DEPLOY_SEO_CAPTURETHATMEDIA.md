# Deploying to seo.capturethatmedia.com

This is the production runbook for Capture That Media's deployment. Everything
in the repo is already wired for these hostnames:

- **seo.capturethatmedia.com** serves the marketing site (the `web/` worker,
  route baked into `web/wrangler.jsonc`).
- **seo-app.capturethatmedia.com** serves the application (sign in, dashboard,
  MCP endpoint). Both are single level subdomains on purpose: Cloudflare
  universal SSL covers `*.capturethatmedia.com` but not deeper levels.

## One time prerequisite: the zone

`capturethatmedia.com` must be a zone in the Cloudflare account you deploy
from. If DNS currently lives elsewhere, add the site in the Cloudflare
dashboard, let it import the existing records (the main site keeps working
wherever it is hosted), and switch the nameservers at the registrar. Custom
domain routes attach automatically once the zone is active; no manual DNS
records are needed for the two subdomains.

## Phase 1: marketing site (two commands)

```sh
npx wrangler login
cd web && pnpm install && SITE_URL=https://seo.capturethatmedia.com pnpm run deploy
```

`pnpm run deploy` builds the site, regenerates `sitemap.xml`, and deploys the
worker with the `seo.capturethatmedia.com` custom domain. Verify at
https://seo.capturethatmedia.com and confirm
https://seo.capturethatmedia.com/sitemap.xml renders.

## Phase 2: the application

The straightforward first deployment runs on D1 through wrangler, the same
path as the Cloudflare self host guide
([`SELF_HOSTING_CLOUDFLARE.md`](./SELF_HOSTING_CLOUDFLARE.md)):

1. Set secrets: `npx wrangler secret put DATAFORSEO_API_KEY` (base64 of
   `login:password`), plus the auth mode you want. For a private team
   deployment use `AUTH_MODE=cloudflare_access` with `TEAM_DOMAIN` and
   `POLICY_AUD` per the self host guide. For public signups use
   `AUTH_MODE=hosted` with `BETTER_AUTH_URL=https://seo-app.capturethatmedia.com`
   and `BETTER_AUTH_SECRET`.
2. Deploy: `pnpm deploy` (runs remote D1 migrations, builds, deploys).
3. Attach the domain: Workers & Pages, select the `run-your-seo` worker,
   Settings, Domains and Routes, add custom domain
   `seo-app.capturethatmedia.com`.

## Phase 3 (later, at scale): hosted prod via Alchemy

When it is time for Postgres and the full hosted stack, use the Alchemy path:
copy `.env.production.example` to `.env.production` (it already carries
`APP_DOMAIN=seo-app.capturethatmedia.com`), fill the secrets, and run
`pnpm deploy:postgres`. Details in
[`PREVIEW_DEPLOYMENTS.md`](./PREVIEW_DEPLOYMENTS.md).

## After the first deploy

- Set the GitHub repo About: description
  `Run Your SEO. SEO and AI visibility platform by Capture That Media.` and
  website `https://seo.capturethatmedia.com`.
- Re-record the product demo from the live app and replace
  `web/public/demo-poster.webp`.
- Submit https://seo.capturethatmedia.com/sitemap.xml in Google Search Console.
