# Deploying Run Your SEO (free first, domain later)

The plan Roger picked: launch on Cloudflare's free workers.dev addresses with
no DNS changes at all, prove it out, then attach the real subdomains when
ready. Everything runs on the Cloudflare free plan.

Target names, already wired through the code and docs:

- **seo.capturethatmedia.com** for the marketing site (route sits commented in
  `web/wrangler.jsonc` until the zone exists).
- **seo-app.capturethatmedia.com** for the application. Both are single level
  subdomains on purpose: universal SSL covers `*.capturethatmedia.com` but not
  deeper levels.

## Phase 1: free deploy today (no DNS, $0)

Create a free Cloudflare account if there is not one, then:

```sh
npx wrangler login
```

**Application** (from the repo root):

```sh
npx wrangler secret put DATAFORSEO_API_KEY   # base64 of login:password
pnpm deploy
```

`pnpm deploy` applies remote D1 migrations, builds, and deploys. The output
prints the app's free URL, `run-your-seo.<your-subdomain>.workers.dev`. Set
the auth mode before sharing it beyond the team: `local_noauth` is for
localhost only; use `cloudflare_access` (private) or `hosted` (public
signups) per [`SELF_HOSTING_CLOUDFLARE.md`](./SELF_HOSTING_CLOUDFLARE.md).

**Marketing site**:

```sh
cd web && pnpm install && SITE_URL=https://seo.capturethatmedia.com pnpm run deploy
```

Serves at `run-your-seo-landing.<your-subdomain>.workers.dev`. The sitemap
and canonical tags intentionally carry the final domain, so hold off
submitting the sitemap to Search Console until Phase 2.

Until Phase 2, the marketing site's sign in buttons point at the future
`seo-app.capturethatmedia.com` hostname. During the free phase, share the
app's workers.dev URL directly.

## Phase 2: attach the real subdomains (still $0)

1. In the Cloudflare dashboard, add `capturethatmedia.com` as a zone (free
   plan). It imports the existing DNS records; the main site keeps running on
   its current host. Switch nameservers at the registrar.
2. Marketing: uncomment the `routes` block in `web/wrangler.jsonc` and
   redeploy. The site goes live at https://seo.capturethatmedia.com.
3. App: Workers & Pages, `run-your-seo` worker, Settings, Domains and Routes,
   add custom domain `seo-app.capturethatmedia.com`.
4. Submit https://seo.capturethatmedia.com/sitemap.xml in Google Search
   Console.

## Later, at scale: hosted prod via Alchemy

When it is time for Postgres and the full hosted stack: copy
`.env.production.example` to `.env.production` (it already carries
`APP_DOMAIN=seo-app.capturethatmedia.com`), fill the secrets, and run
`pnpm deploy:postgres`. Details in
[`PREVIEW_DEPLOYMENTS.md`](./PREVIEW_DEPLOYMENTS.md).

## After going live

- Set the GitHub repo About: description
  `Run Your SEO. SEO and AI visibility platform by Capture That Media.` and
  website `https://seo.capturethatmedia.com`.
- Re-record the product demo from the live app and replace
  `web/public/demo-poster.webp`.
