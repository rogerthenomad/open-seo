---
title: "Cloudflare Self-Hosting"
description: "Deploy Run Your SEO to your own Cloudflare account for internet-facing, multi-device, or team use."
---

Host Run Your SEO on Cloudflare for internet-facing self-hosting across multiple devices or with your team. It works on Cloudflare's free plan.

## 1) Deploy from GitHub

> The one click Deploy to Cloudflare button only works for public repositories, and this repository is private. Use the manual deploy steps below.

Click the deploy button. There are lots of fields on the deploy form, but you only need to do the below steps.

1. Connect your Git provider (GitHub/GitLab).
2. Leave the resource naming fields as default unless you have a reason to change them.
3. Click `Create and Deploy`.
4. Wait 1-2 minutes for deployment to finish.

If deploy fails with `Cannot provision a KV Namespace with the title "run-your-seo" because it already exists`, use the [manual deploy with Wrangler guide on GitHub](https://github.com/rogerthenomad/Run-Your-SEO/blob/main/docs/SELF_HOSTING_CLOUDFLARE_MANUAL.md) instead.

## 2) Configure authentication and secrets

In the Cloudflare dashboard:

1. Go to `Compute` -> `Workers & Pages` -> your Run Your SEO Worker.
2. Open `Settings`.
3. In `Domains & Routes`, enable `Cloudflare Access` for the `workers.dev` route.
4. Save the values shown by Cloudflare Access.
5. In `Variables & Secrets`, add:
   - `POLICY_AUD` (from Access setup)
   - `TEAM_DOMAIN` (domain from `JWKS_URL`, for example `https://your-team.cloudflareaccess.com`)
   - `DATAFORSEO_API_KEY` (see [DataForSEO API key setup](/docs/self-hosting#dataforseo-api-key-setup))

## 3) Optional: add an R2 lifecycle rule

DataForSEO API responses are cached in R2 under the `dataforseo-cache/` prefix. This step is optional, but recommended to automatically clean up expired cache objects:

```bash
npx wrangler r2 bucket lifecycle add run-your-seo dataforseo-cache-expiry dataforseo-cache/ --expire-days 7
```

If you changed the R2 bucket name during deploy, replace `run-your-seo` with your bucket name.

Without a lifecycle rule, cached objects under `dataforseo-cache/` will accumulate indefinitely and increase storage costs over time.

## 4) Validate setup

1. Open your Worker URL again.
2. Sign in with Cloudflare Access.
3. Run Your SEO should load after login.

If login fails, re-check the three secrets and Access toggle.

## Connect the MCP server through Cloudflare Access

Use the same Cloudflare Access application that protects your Run Your SEO Worker. Managed OAuth is required for MCP clients and is not enabled by default.

1. Open Cloudflare Zero Trust.
2. Go to `Access controls` -> `Applications`.
3. Find your Run Your SEO application, then select `Edit`.
4. Go to `Additional settings` -> `OAuth`.
5. Turn on `Managed OAuth`.
6. In `Managed OAuth settings`, allow the redirect URIs your MCP clients use:
   - Allow `localhost` / loopback clients for CLI and desktop agents (Codex CLI, Claude Code) that register `http://localhost:PORT/callback`.
   - Add HTTPS redirect URIs for web connectors (a path may end in `/*`).
   - Without this, clients can't finish [Dynamic Client Registration](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/managed-oauth/) and log in but expose no tools.
7. Save.

MCP clients should connect to:

```text
https://YOUR_WORKER_HOSTNAME/mcp
```

## Give teammates access to Run Your SEO

1. Open Cloudflare Zero Trust.
2. Go to Access -> Applications.
3. Open your Run Your SEO application.
4. Edit the `Allow` policy.
5. Add teammate emails (or your company email domain / group).
6. Save.

After saving, teammates can open your Run Your SEO URL and sign in through Cloudflare Access. Run Your SEO will use a shared workspace for everyone allowed by the policy.

## Advanced guides on GitHub

- [Manual deploy with Wrangler](https://github.com/rogerthenomad/Run-Your-SEO/blob/main/docs/SELF_HOSTING_CLOUDFLARE_MANUAL.md): create the Cloudflare resources yourself and deploy with the CLI.
- [Operations](https://github.com/rogerthenomad/Run-Your-SEO/blob/main/docs/SELF_HOSTING_CLOUDFLARE_OPERATIONS.md): update to the latest Run Your SEO version and manage telemetry.
