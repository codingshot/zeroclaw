# AI DevRel Strategy — ZeroClaw

Developer Relations strategy: goals, channels, YouTube scripts, tutorial pipeline, and content playbook. Use for DevRel planning, video production, and tutorial ideation.

Last updated: **February 18, 2026**.

---

## 1. DevRel Strategy Overview

### Goals

| Goal | Metric | Tactics |
|------|--------|---------|
| **Awareness** | Views, subs, search rank | YouTube tutorials, shorts; SEO titles; "AI on Pi" long-tail |
| **Adoption** | Installs, stars, forks | One-click bootstrap; 15-min tutorial; clear CTA |
| **Community** | Discord/Telegram members; PRs | Office hours; hackathon; contributor spotlight |
| **Trust** | Retention, NPS, case studies | Honest comparisons; security transparency; failure posts |
| **Ecosystem** | Integrations, projects, ecosystem page | "Add your project"; integration docs; partner collabs |

### Channels

| Channel | Role | Content type |
|---------|------|--------------|
| **YouTube** | Primary long-form; tutorials, demos | 5–15 min tutorials; 60–90s shorts; comparison videos |
| **X/Twitter** | Quick tips, announcements, engagement | Spec flex; threads; polls; replies |
| **Reddit** | Organic, community-driven | Tutorial cross-posts; helpful answers; no spam |
| **Discord/Telegram** | Community, support | Office hours; announcements; Q&A |
| **Blog** | Deep dives, SEO | Architecture; comparisons; case studies |
| **Hacker News** | Launch; Show HN; discussions | Careful timing; substantive posts |
| **GitHub** | Code, docs, issues | README; CONTRIBUTING; good first issue |

### Cadence (Suggested)

- **YouTube:** 1 tutorial/month; 2–4 shorts/month
- **Blog:** 1–2 posts/month
- **X:** 3–5 posts/week
- **Office hours:** 1–2/month (live or async)

---

## 2. YouTube Strategy

### Series & Formats

| Series | Duration | Frequency | Purpose |
|--------|----------|------------|---------|
| **ZeroClaw in 15** | 12–18 min | Monthly | Full tutorial; one topic end-to-end |
| **ZeroClaw Shorts** | 60–90s | Weekly | Hook; spec flex; one trick |
| **ZeroClaw vs X** | 8–12 min | Quarterly | Comparison; benchmark; migration |
| **ZeroClaw Architecture** | 15–20 min | Quarterly | Deep dive; Rust, traits, design |
| **Build with ZeroClaw** | 10–15 min | Bi-monthly | Project build; robot, bot, integration |

### Title & Thumbnail Best Practices

| Element | Do | Don't |
|---------|-----|-------|
| **Title** | "ZeroClaw on Raspberry Pi in 15 Minutes" (specific, benefit) | Vague: "AI Agent Tutorial" |
| **Title** | "3.4MB vs 28MB: ZeroClaw vs OpenClaw" (numbers, contrast) | Generic: "Comparison" |
| **Thumbnail** | Face or hands + hardware; big text (3.4MB, $10) | Cluttered; tiny text |
| **Thumbnail** | Pi, terminal, or Telegram screenshot | Stock AI imagery |
| **Hook** | First 5s: "Run an AI assistant on a $10 board" | Slow intro |

---

## 3. YouTube Scripts (Full Outlines)

### Script 1: "ZeroClaw on Raspberry Pi in 15 Minutes"

**Duration:** 12–15 min | **Audience:** Makers, Pi users, self-hosted

**OPEN (0:00–0:30)**
- [On camera or screen] "What if you could run an AI assistant on a Raspberry Pi — no Mac Mini, no cloud, just a $15 board? Today we're setting up ZeroClaw on a Pi in 15 minutes."
- Show Pi on screen. "This is a Pi 4 with 1GB RAM. That's right — 1GB. Most AI agents need 4 or 8. ZeroClaw? Under 5 megabytes."

**PREREQS (0:30–1:30)**
- "You'll need: a Pi with Raspberry Pi OS, an API key from OpenAI or Anthropic — or we'll use Ollama for fully local — and about 15 minutes."
- "Links in the description. Let's go."

**INSTALL (1:30–4:00)**
- SSH into Pi: `ssh pi@raspberrypi`
- One-liner install: `curl -sSL https://... | sh` or `cargo install zeroclaw`
- Show binary: `ls -lh $(which zeroclaw)` — "3.4 megabytes. That's it."
- `zeroclaw status` — show RAM, startup time

**ONBOARD (4:00–6:00)**
- `zeroclaw onboard`
- Add provider (OpenAI or Ollama)
- Add channel (Telegram)
- Show config file briefly — "One file. No YAML hell."

**PAIRING (6:00–8:00)**
- "Security by default. You have to pair before you can chat."
- Open Telegram, message bot
- Run pairing command, get code
- Authorize, send first message
- "We're live."

**DEMO (8:00–10:00)**
- Ask a few questions — show latency
- Optional: "Blink an LED" if GPIO tool configured
- "Same agent works on Discord, Slack, CLI. One config."

**BENCHMARK (10:00–11:30)**
- `zeroclaw status` — RAM under 5MB, startup under 10ms
- "Compare that to OpenClaw: 1GB RAM, 500 seconds startup. We're 99% smaller."
- Show comparison chart if available

**OUTRO (11:30–12:30)**
- "Repo in description. Star it. Try it on your Pi. If you get stuck, Discord link below."
- "Next video: we'll add a custom tool — GPIO, weather, whatever you want. Subscribe so you don't miss it."
- CTA: Star, Discord, next video

---

### Script 2: "ZeroClaw vs OpenClaw — Honest Comparison"

**Duration:** 10–12 min | **Audience:** Evaluators, OpenClaw users, r/selfhosted

**OPEN (0:00–0:45)**
- "OpenClaw went viral. Then it hit 1GB RAM, 500-second startup, and a few hundred malicious skills. Is there a lighter alternative? Let's compare ZeroClaw and OpenClaw — honestly."
- Hook: "Spoiler: one runs on a Pi Zero. One needs a Mac Mini."

**COMPARISON TABLE (0:45–3:00)**
- Side-by-side: RAM, startup, binary size, hardware cost
- "ZeroClaw: 3.4MB binary, under 5MB RAM, under 10ms cold start. OpenClaw: 28MB, over 1GB, over 500 seconds on edge hardware."
- "Hardware: OpenClaw wants a Mac Mini — 600 bucks. ZeroClaw runs on a Pi Zero 2 — 15 bucks."
- Show both running if possible — split screen or sequential

**SECURITY (3:00–5:00)**
- "135,000 OpenClaw instances exposed. 900 malicious skills. Plaintext API keys. We built differently."
- "ZeroClaw: localhost by default, pairing required, encrypted secrets, no skill marketplace. Extend by trait, not by install."
- "We're not here to trash OpenClaw. But if security matters, the architecture is different."

**MIGRATION (5:00–7:00)**
- "Thinking about switching? Your channels — Telegram, Discord, Slack — work the same. Config is different but the concepts map."
- "Migration checklist in the description. Roughly: export your channels, API keys, run zeroclaw onboard, pair again."
- Link to migration doc

**DEMO (7:00–9:00)**
- Quick ZeroClaw demo: start, pair, chat
- "Same experience. Different footprint."

**VERDICT (9:00–10:30)**
- "Use OpenClaw if you're already invested and it works. Use ZeroClaw if you want to run on a Pi, care about security, or just prefer a smaller binary."
- "Both are open source. Try both. Decide."

**OUTRO (10:30–11:00)**
- CTA: Repo, comparison page, Discord

---

### Script 3: "Add a Custom Tool to ZeroClaw (Rust)"

**Duration:** 12–15 min | **Audience:** Rust devs, contributors, makers

**OPEN (0:00–0:30)**
- "ZeroClaw is trait-driven. Add a Provider, Channel, Tool, or Peripheral by implementing a trait. Today we're adding a custom tool — a weather lookup — in about 50 lines of Rust."
- "You don't have to touch the core. Just implement the trait and register."

**TOOL TRAIT (0:30–2:00)**
- Show `Tool` trait: `name`, `description`, `parameters`, `execute`
- "That's it. No plugin system. No DSL. Just Rust."
- Open `src/tools/` in editor

**IMPLEMENT (2:00–7:00)**
- Create `weather.rs` or similar
- Implement `name`, `description` — "Human-readable. The agent uses this."
- Implement `parameters` — JSON schema; temp, city, etc.
- Implement `execute` — async, fetch API or return mock
- "Validate input. Return ToolResult. No panics."
- Register in factory/mod.rs

**BUILD & TEST (7:00–9:00)**
- `cargo build`
- Add to config
- Restart daemon, ask agent to use tool
- Demo: "What's the weather in Tokyo?" — agent calls tool, returns result

**NEXT STEPS (9:00–10:00)**
- "Same pattern for GPIO, file read, shell — just different execute logic."
- "Peripherals are tools for hardware. Check the hardware docs."
- Link to CONTRIBUTING, tool examples

**OUTRO (10:00–10:30)**
- CTA: PR your tool, Discord for questions

---

### Script 4: "ZeroClaw in 60 Seconds" (Short)

**Duration:** 60–75s | **Format:** Vertical or square | **Platform:** YouTube Shorts, TikTok, Reels

**BEAT 1 (0:00–0:10)**  
- [Fast] "AI on a $10 board. 60 seconds."  
- Show Pi

**BEAT 2 (0:10–0:25)**  
- `curl ... | sh` or `cargo install zeroclaw`  
- `zeroclaw onboard` — rapid cuts  
- "One command. One config."

**BEAT 3 (0:25–0:45)**  
- Telegram: message bot, pair, chat  
- "Pair. Chat. Done."  
- Show response in under 5 seconds

**BEAT 4 (0:45–0:60)**  
- `zeroclaw status` — 3.4MB, &lt;5MB RAM  
- "3.4 megabyte binary. No Node. No Python. Just Rust."  
- "Link in bio. Star the repo."

---

### Script 5: "ZeroClaw Architecture: Why Rust?"

**Duration:** 15–18 min | **Audience:** Rust devs, architects, technical evaluators

**OPEN (0:00–0:45)**
- "Why did we build ZeroClaw in Rust? And what does the architecture look like? This is a deep dive for the curious."
- "TL;DR: traits, no runtime, memory-safe, single binary."

**TRAIT MODEL (0:45–4:00)**
- "Provider, Channel, Tool, Peripheral — four traits. Everything plugs in."
- Diagram or code: how agent loop calls provider, channel, tools
- "No plugin DSL. No dynamic loading. Compile-time composition."
- "Add a provider? Implement the trait. Register. Done."

**MEMORY (4:00–6:00)**
- "SQLite + FTS5. No Pinecone. No Elasticsearch."
- "Hybrid merge: vector + keyword. Deterministic. Local."
- "OpenClaw reloads everything every run. We don't."

**SECURITY (6:00–8:00)**
- "Pairing, allowlists, sandbox. Deny by default."
- "Encrypted secret store. No plaintext keys."
- "Sandboxed tool execution. Resource limits."

**WHY RUST (8:00–11:00)**
- "Memory safety. No data races. No GC pause."
- "Single binary. No Node, no Python. Cross-compile to ARM, RISC-V."
- "Predictable performance. &lt;10ms startup isn't luck — it's no JIT, no interpreter."

**TRADE-OFFS (11:00–13:00)**
- "Harder to contribute? Rust has a learning curve. But traits are clear."
- "Slower iteration? Compile time. But runtime is fast."
- "Ecosystem? We're not npm. Fewer packages, less supply-chain risk."

**OUTRO (13:00–14:00)**
- "Repo link. CONTRIBUTING. Come build with us."

---

## 4. Tutorial Ideas (Pipeline)

### Tier 1: Essential (Ship First)

| # | Title | Duration | Audience | Status |
|---|-------|----------|----------|--------|
| 1 | ZeroClaw on Raspberry Pi in 15 Minutes | 12–15 min | Makers, Pi | Script ready |
| 2 | Add Telegram Bot to ZeroClaw | 8–10 min | Makers | See integrations playbook |
| 3 | ZeroClaw + Ollama (Fully Local) | 8–10 min | Privacy, homelab | Outline ready |
| 4 | ZeroClaw vs OpenClaw — Comparison | 10–12 min | Evaluators | Script ready |

### Tier 2: Channels & Integrations

| # | Title | Duration | Audience |
|---|-------|----------|----------|
| 5 | Add Discord Bot | 8–10 min | Dev communities |
| 6 | Add Slack Bot (Enterprise) | 8–10 min | Ops, SRE |
| 7 | WhatsApp Webhook Setup | 10–12 min | Business, global |
| 8 | ZeroClaw as HTTP API (Webhook) | 6–8 min | API-first devs |
| 9 | Matrix + E2EE | 8–10 min | Decentralization |

### Tier 3: Advanced

| # | Title | Duration | Audience |
|---|-------|----------|----------|
| 10 | Add a Custom Tool (Rust) | 12–15 min | Rust devs |
| 11 | Add a New Provider | 10–12 min | Rust devs |
| 12 | Add a Peripheral (GPIO) | 12–15 min | Makers, hardware |
| 13 | ZeroClaw Architecture Deep Dive | 15–18 min | Architects |
| 14 | Multi-Provider Routing (OpenRouter) | 8–10 min | Cost-conscious |
| 15 | ZeroClaw in Docker | 6–8 min | Homelab, VPS |
| 15b | ZeroClaw 1-Click on [DigitalOcean / Railway / Coolify] | 5–8 min | Per-partner; see [hosting-partnerships.md](hosting-partnerships.md) |

### Tier 4: Projects & Use Cases

| # | Title | Duration | Audience |
|---|-------|----------|----------|
| 16 | Build a Telegram-Controlled Robot | 15–18 min | Makers, robotics |
| 17 | ZeroClaw on Pi Zero 2 (Cheapest Setup) | 10–12 min | Budget makers |
| 18 | Self-Hosted Helpdesk Bot | 12–15 min | Ops, SMB |
| 19 | RAG for Legal Docs (Info Only) | 12–15 min | Legal tech |
| 20 | ZeroClaw + Home Assistant | 10–12 min | Smart home |
| 21 | Robots Talking to Each Other (Multi-Agent) | 12–15 min | Robotics |

### Tier 5: Shorts & Quick Wins

| # | Title | Duration | Platform |
|---|-------|----------|----------|
| 22 | ZeroClaw in 60 Seconds | 60–75s | Shorts, TikTok |
| 23 | 3.4MB vs 28MB — Size Flex | 30–45s | Shorts |
| 24 | Boot in 10ms — Startup Demo | 45–60s | Shorts |
| 25 | Telegram → Blink LED | 60–90s | Shorts |
| 26 | zeroclaw status Explained | 45–60s | Shorts |

---

## 5. Tutorial Structure (Template)

Use this structure for any new tutorial video:

| Section | Duration | Content |
|---------|----------|---------|
| **Hook** | 0:00–0:30 | What we're building; why it matters; one surprising fact |
| **Prereqs** | 0:30–1:00 | What viewer needs; links |
| **Step 1** | 1:00–3:00 | First concrete action |
| **Step 2** | 3:00–5:00 | Second action |
| **Step 3** | 5:00–7:00 | Third action |
| **Demo** | 7:00–9:00 | Show it working |
| **Gotchas** | 9:00–10:00 | Common mistakes, how to fix |
| **Next** | 10:00–10:30 | What to try next; link |
| **Outro** | 10:30–11:00 | CTA: star, Discord, subscribe |

---

## 6. Creator Collaboration Playbook

### Outreach

| Creator type | Pitch | Offer |
|--------------|-------|-------|
| **Maker YouTuber** | "Build something with ZeroClaw; we'll feature it" | Dev board, one-pager, early access |
| **Rust educator** | "Traits in practice: ZeroClaw as case study" | Code walkthrough, collab video |
| **Homelab** | "Run ZeroClaw in your stack; show your setup" | Feature in newsletter, ecosystem |
| **Pi educator** | "AI on Pi Day — ZeroClaw tutorial" | Co-promo, Pi-specific content |
| **OpenClaw creator** | "Honest comparison; we'll link your content" | Respectful; no attack |

### Collab Video Structure

1. Creator's angle (their audience, their style)
2. ZeroClaw segment (5–10 min): install, demo, one hook
3. Creator builds something (robot, bot, integration)
4. Mutual CTA: their channel, our repo

---

## 7. SEO & Discoverability

### Target Keywords (YouTube & Blog)

- "AI on Raspberry Pi"
- "ZeroClaw tutorial"
- "OpenClaw alternative"
- "Lightweight AI agent"
- "Self-hosted AI agent"
- "Rust AI runtime"
- "AI agent Raspberry Pi"
- "Telegram AI bot"
- "Run AI on Pi Zero"

### Description Template (YouTube)

```
ZeroClaw: Run an AI assistant on a Raspberry Pi in 15 minutes. 3.4MB binary, <5MB RAM, <10ms startup. No Node.js, no Python. Just Rust.

In this video: [specific what we cover]

Links:
- Repo: https://github.com/zeroclaw-labs/zeroclaw
- Docs: https://...
- Discord: https://...

Chapters:
0:00 Intro
1:00 Prereqs
2:00 Install
...
```

---

## 8. Cross-Links

- [hosting-partnerships.md](hosting-partnerships.md) — 1-click deploy partners, partner-specific video ideas
- [developer-content.md](developer-content.md) — blog outlines, Reddit templates
- [integrations-content-playbook.md](integrations-content-playbook.md) — per-integration video outlines
- [content-flows-and-devices.md](content-flows-and-devices.md) — persona flows, device matrix
- [viral-tactics.md](viral-tactics.md) — viral ideas, hooks
- [viral-opportunities-expanded.md](viral-opportunities-expanded.md) — more content ideas
