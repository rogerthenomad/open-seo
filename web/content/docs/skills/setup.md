---
title: "Set up Run Your SEO Agent Skills"
description: "Add Run Your SEO skill files to your AI agent after connecting Run Your SEO MCP."
---

Run Your SEO Agent Skills are separate files from Run Your SEO MCP.

First, [set up Run Your SEO MCP](/docs/mcp). MCP gives your agent access to Run Your SEO data.

Then add the Run Your SEO `SKILL.md` files you want your agent to use. Each skill gives your agent one SEO workflow.

## Choose an installation option

Pick the option that matches how you want to install the files.

### Option 1: Install and choose interactively

Use this if you want the installer to show the available skills and agents.

```bash
npx skills add rogerthenomad/Run-Your-SEO
```

### Option 2: Install all Run Your SEO skills

Use this if you want every Run Your SEO skill.

```bash
npx skills add rogerthenomad/Run-Your-SEO --skill '*'
```

### Option 3: Install all skills for Claude Code only

Use this if the skills should be available in Claude Code only.

```bash
npx skills add rogerthenomad/Run-Your-SEO --skill '*' --agent claude-code
```

### Option 4: Install all skills for OpenAI Codex only

Use this if the skills should be available in Codex only.

```bash
npx skills add rogerthenomad/Run-Your-SEO --skill '*' --agent codex
```

### Option 5: Copy the skill files manually

Use this if you prefer to copy files into your agent's skills folder.

```bash
git clone https://github.com/rogerthenomad/Run-Your-SEO.git

# Codex
mkdir -p ~/.codex/skills
cp -R run-your-seo/.agents/skills/* ~/.codex/skills/

# Claude Code
mkdir -p ~/.claude/skills
cp -R run-your-seo/.agents/skills/* ~/.claude/skills/
```

You can also review the source skills on GitHub:

- [Run Your SEO Agent Skills on GitHub](https://github.com/rogerthenomad/Run-Your-SEO/tree/main/.agents/skills)

Each skill page also links to its source `SKILL.md`.

## Run a skill

After the skill files are available to your agent, run the matching slash command:

- `/seo-project-setup`
- `/seo-coach`
- `/keyword-research`
- `/keyword-clustering`
- `/competitive-landscape`
- `/competitor-analysis`
- `/link-prospecting`

## Next step

Start with [SEO Project Setup](/docs/skills/seo-project-setup) if this is a new SEO project, or [SEO Coach](/docs/skills/seo-coach) if you are not sure which workflow to run first.
