<p align="center">
  <img src="https://img.shields.io/badge/version-0.0.1--beta.2-blue" alt="version" />
  <img src="https://img.shields.io/badge/status-beta-orange" alt="status" />
  <img src="https://img.shields.io/badge/vibes-immaculate-ff69b4" alt="vibes" />
</p>

<h1 align="center">ConMan</h1>
<h3 align="center">Your AI Dev Team. One Dashboard.</h3>
<p align="center"><em>"You describe it. We build it. No terminal required."</em></p>

---

## What is ConMan?

ConMan is an **AI coding command center** — a desktop app that lets you describe what you want built in plain English, and then coordinates a full team of AI agents to actually build it for you.

No terminal juggling. No copy-pasting between chat windows. No "wait, which session was that in?"

You get a beautiful dashboard where every project, every conversation, and every AI decision is organized, visible, and under your control. Think of it as a mission control for AI-assisted development.

**Available for macOS, Windows, and Linux.**

---

## The Problem

If you've used AI coding tools, you know the drill:

- You're stuck in a **single chat thread**, copying context back and forth
- You lose track of **which session** changed which files
- The AI **forgets everything** the moment you start a new conversation
- You're locked into **one tool** — can't easily switch between Claude, Codex, or Gemini
- You **babysit every step** — there's no way to say "just build the whole thing"
- There's **no visibility** into what the AI is actually doing under the hood
- You're paying **premium prices** for every token, even for tasks that don't need a flagship model

Sound familiar? Yeah, we were tired of it too.

---

## How ConMan Fixes It

### A Real Dashboard, Not Just a Chat Window

Every AI interaction lives in its own **thread**, organized by project. You can see all your sessions at a glance, track what's running, what's done, and what failed — without digging through terminal history.

**What you get:**
- **Live streaming output** — watch your AI agents think, code, and iterate in real time
- **Rich rendering** — markdown, syntax-highlighted code, and even diagrams render beautifully inline
- **Tool transparency** — see every file read, write, edit, and command the AI runs, with expandable diffs
- **Pipeline visualization** — a clear progress bar showing which stage your build is in
- **Cost tracking** — know exactly what each session costs, no surprises on your bill
- **One-click IDE launch** — jump to your project in VS Code or Cursor instantly

> **The old way:** Scroll through a terminal. Squint at logs. Wonder what happened.
> **The ConMan way:** Everything is organized, searchable, and beautiful.

---

### Use Any AI. Switch Anytime.

Most tools lock you into one AI provider. ConMan supports **four major coding CLIs** from one unified interface:

- **Claude Code** — by Anthropic
- **OpenAI Codex** — by OpenAI
- **Gemini CLI** — by Google
- **Wibey**

For each one, you can pick the **model**, set **permission levels** (full access, planning only, or read-only), and choose which **skills** to activate — all from dropdown menus. No config files, no flags to memorize.

Start a project with Claude, try a different approach with Gemini, run a sandboxed experiment with Codex. Mix and match freely across threads in the same project.

> **The old way:** Pick one tool and hope for the best.
> **The ConMan way:** Use the right AI for the right job, switch in two clicks.

---

### Your AI Remembers What You've Built

Here's a frustrating truth about AI coding tools: they have amnesia. Every new session starts from scratch. All that context from your last conversation? Gone.

ConMan has a **built-in memory system** that changes the game:

1. After a productive session, ConMan asks: *"Want to save this to memory?"*
2. The session gets summarized and stored locally on your machine
3. Next time you start a session in the same project, relevant knowledge is **automatically injected** into the conversation

Your AI knows about your architecture decisions, your coding style, that weird bug you fixed last Tuesday, and why you chose Tailwind over CSS modules. All without you repeating yourself.

The best part? **Everything stays local.** Your knowledge never leaves your machine. No cloud storage, no third-party services — just your memories, on your disk, in plain readable files you can edit anytime.

> **The old way:** Re-explain your entire project every. single. time.
> **The ConMan way:** Your AI actually learns from past sessions. Like a teammate would.

---

### A Full AI Dev Team, Not Just One Bot

When you want to build something from scratch, ConMan doesn't just hand you a chat box. It spins up an **entire coordinated team of AI agents**:

1. **You describe what you want** — in plain English
2. **ConMan asks smart questions** — to fill in the gaps (audience? scale? tech preferences?)
3. **You approve the plan** — review it, tweak it, then hit go
4. **The team gets to work** — fully autonomous from here:
   - A **Project Manager** discovers your stack and writes a technical plan
   - A **Task Distributor** organizes work into parallel batches
   - **Multiple Developers** build features simultaneously
   - A **Reviewer** catches bugs, performance issues, and auto-fixes what's safe
   - A **Writer** creates a summary of everything that was built and how to run it

Each agent uses the **right-sized model** for its job — powerful reasoning models for planning, fast coding models for implementation, lightweight models for documentation. Your wallet stays happy.

> **The old way:** One AI doing everything sequentially while you wait. And wait. And wait.
> **The ConMan way:** A team of specialists working in parallel. You approve the plan and grab coffee.

---

### Skills That Make Your AI Smarter

ConMan auto-discovers **skills** — reusable instruction sets that teach your AI specialized behaviors. Think of them as superpowers you can toggle on per session.

- Browse and search all available skills from the settings panel
- Edit skills with a live preview, or open them in your editor
- Skills are scoped — some are global, some are project-specific
- Works across all supported CLIs

Have a skill for "always use our company's API patterns"? Or "follow this testing convention"? Just toggle it on and your AI gets the memo.

> **The old way:** Paste the same instructions at the top of every conversation.
> **The ConMan way:** Toggle a skill and it's injected automatically.

---

### Built-In Dev Server Management

Done coding? See it live without leaving the dashboard.

ConMan detects your project's dev server, starts it for you, and shows a **live URL right in the thread header**. Click to open, copy the link, or stop it — all inline.

It handles multiple projects with their own dev servers, automatically runs dependency installs when needed, and even detects your local network IP for remote access.

> **The old way:** Switch to terminal. Run `npm install`. Run `npm run dev`. Copy the URL. Open browser.
> **The ConMan way:** One click. It's running. Here's the link.

---

### A Composer That Respects Your Time

The input bar isn't just a text box — it's a control panel:

- **Pick your project** — or create a new one with a folder picker
- **Choose your CLI and model** — right from the dropdown
- **Attach files** — drag and drop, paste images, or browse
- **Activate skills** — type `/` for autocomplete suggestions
- **Toggle memory** — control what context gets injected
- **Follow up** — send additional instructions in the same thread without starting over
- **Abort** — changed your mind? Cancel a running agent mid-stream

Everything you need to configure a session, visible at a glance, no command flags to remember.

> **The old way:** Remember 12 CLI flags and type them perfectly every time.
> **The ConMan way:** Dropdowns, toggles, and autocomplete. Done.

---

### A Desktop App That Feels Native

ConMan isn't a janky web app in an Electron shell. It's a proper desktop citizen:

- **One-click install** — download, open, done. No Node.js, no terminal, no config files
- **Setup wizard** — walks you through CLI detection and configuration in under a minute
- **System tray** — always accessible, never in the way
- **Auto-updates** — new versions arrive automatically (with stable and beta channels)
- **Runs locally** — your code and data stay on your machine. Period.
- **Available for macOS, Windows, and Linux**

---

## Cost Comparison

AI coding isn't free, but ConMan makes it dramatically cheaper than the "one giant session" approach:

| Approach | Problem | ConMan's Answer |
|----------|---------|----------------|
| One model does everything | You pay flagship prices for trivial tasks | **Smart model routing** — powerful models for planning, fast models for coding, cheap models for docs |
| Long chat threads | Context window balloons, costs skyrocket | **Each agent starts lean** — reads only what it needs from disk, not your entire chat history |
| Sequential execution | One thing at a time, slower = more tokens | **Parallel execution** — independent tasks run simultaneously |
| Re-explaining context | You re-type your stack, your patterns, your preferences | **Memory injection** — past knowledge flows in automatically, no wasted tokens |

**Estimated costs per project:**

| Project Size | Estimated Cost |
|-------------|---------------|
| Simple (1–5 features) | $0.50 – $1.50 |
| Medium (6–15 features) | $1.50 – $4.00 |
| Large (16–30 features) | $4.00 – $8.00 |
| Ambitious (30+ features) | $8.00 – $15.00+ |

---

## Works With Your Favorite AI Clients Too

ConMan also exposes an **MCP server**, so you can use it from any MCP-compatible AI client — Claude.ai, ChatGPT, Gemini, Cursor, and more.

Tell your AI *"I want to build a task management app"* and ConMan handles the rest: requirements gathering, plan approval, pipeline execution, and live progress tracking — all through the tool interface your AI already knows how to use.

The dashboard shows everything that's happening, whether you triggered it from the app or from an external client.

---

## Getting Started

### Option 1: Desktop App (Recommended)

Download the latest release from **[conman.live](https://conman.live)** or the **[GitHub Releases](https://github.com/fuck-eer/conman-releases/releases)** page.

Open it. Follow the setup wizard. Start building.

### Option 2: From Source

```bash
git clone https://github.com/fuck-eer/conman-mcp.git
cd conman-mcp
npm install
npm run electron:dev   # Starts everything — backend + dashboard
```

### Prerequisites

- At least one supported CLI installed: **[Claude Code](https://docs.anthropic.com/en/docs/claude-code)**, **[OpenAI Codex](https://openai.com/index/codex/)**, **[Gemini CLI](https://github.com/google-gemini/gemini-cli)**, or **Wibey**
- The desktop app bundles everything else — no Node.js required

### Connecting an MCP Client

```json
{
  "mcpServers": {
    "conman": {
      "url": "http://localhost:3333/mcp",
      "transport": "streamable-http"
    }
  }
}
```

---

## FAQ

**Do I need to know how to code?**
Nope. That's literally the point. Describe what you want, approve the plan, watch it get built.

**Which AI tools does it support?**
Claude Code, OpenAI Codex, Gemini CLI, and Wibey for direct use. Plus any MCP-compatible client (Claude.ai, ChatGPT, Gemini, Cursor) for pipeline access.

**How much does it cost?**
ConMan itself is free. You pay for the AI API usage through your existing subscriptions. ConMan just makes that usage dramatically more efficient.

**Can I use it with existing projects?**
Absolutely. Point it at any directory and the AI will discover your stack, conventions, and patterns before making changes.

**Is my code safe?**
ConMan runs 100% locally. Your code never leaves your machine. The memory system is local. The only external calls are to the AI APIs you choose to use.

**Can I switch between different AIs?**
Yes — mix and match across threads in the same project. Use Claude for architecture, Gemini for prototyping, Codex for sandboxed experiments. Your call.

**What's the memory feature?**
Think of it as giving your AI a long-term memory. It summarizes past sessions, stores them locally, and automatically surfaces relevant context in future conversations. Totally optional, totally private, totally editable.

**What if something goes wrong?**
All work is saved to disk as it happens. You can abort running agents from the dashboard, inspect intermediate results, and pick up where things left off.

---

## Roadmap

We're just getting started. Here's what's coming:

- **Single-shot mode** — for quick tasks that don't need the full pipeline
- **Per-agent cost breakdown** — see exactly where your tokens went
- **Task-level progress** — granular visibility into individual build steps
- **Pipeline recovery** — auto-resume from agent failures
- **Nested threads** — parent/child conversation hierarchies

---

## Some Notes

We are very very early in this project. Expect bugs.

We are not accepting contributions yet.

### If you REALLY want to contribute still.... read this first

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or PR.

Need support? Join the [Discord](https://discord.gg/conman).

---

## License

MIT — do whatever you want, just don't blame us if your AI builds a dating app for cats.

---

<p align="center">
  <strong>ConMan</strong> — because the best code is the code you didn't have to write.
</p>
