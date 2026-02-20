# OpenClaw Viral Playbook → ZeroClaw Map

Copy of OpenClaw’s viral playbook, tactic by tactic, mapped to ZeroClaw implementation. Use as a quick reference for “what OpenClaw did → what ZeroClaw does.”

Last updated: **February 18, 2026**.

---

## Quick Map (One Table)

| # | OpenClaw Tactic | What They Did | ZeroClaw Mapping |
|---|-----------------|---------------|------------------|
| 1 | Category wedge | Always-on, not another bot; self-hosted agent in Telegram/Slack/Discord | Same: “Always-on on $10 hardware. <5MB RAM, <10ms startup.” |
| 2 | Launch hype | Weekend build → chat; GitHub README = homepage; meme-sized concept | “ZeroClaw on RPi in 15 min”; one-click bootstrap; README-first; 60s demo |
| 3 | Onboarding as security | Pairing codes; controlled expansion; security = shareability | Pairing, allowlists, sandbox; “Secure by default. Pair once, share safely.” |
| 4 | Public demo bot | Discord demo; “try to hack it”; creator controlled high-risk | Public Telegram/Discord demo; “break it” invite; show sandbox, allowlist |
| 5 | Rebrand as launch | Moltbot → OpenClaw; evolution graphic; 100K badge | Milestones (1K stars, 10 providers); “99% less RAM” chart |
| 6 | GitHub as leaderboard | Stars = ad units; “18× faster than Kubernetes” | Benchmark chart: 3.4MB vs 28MB; RAM, startup, binary size |
| 7 | Ecosystem = distribution | MoltHub, skills, Twitch/Google Chat plugins | Ecosystem page, “Add your project”; Provider/Channel/Tool content; hackathon |
| 8 | Security as trust | “34 improvements”; roadmap; trust work = marketing | Lead with security; “Built secure from day one”; contrast without name-calling |

---

## Detailed Map (Copy → Map)

### 1. Category Wedge: Always-On, Not Another Bot

| | OpenClaw | ZeroClaw |
|---|----------|----------|
| **Copy** | Persistent self-hosted agent 24/7 on own hardware (VPS, RPi, Mac Mini). Integrated into Telegram, Slack, Discord, WhatsApp. Product lives where users are. | Same mental model. |
| **Map** | Emphasize: “Run your AI agent 24/7 on $10 hardware. ZeroClaw: <5MB RAM, <10ms startup, single binary. Same always-on promise — 99% smaller footprint.” |
| **Asset** | — | Landing hero, benchmark table, “Deploy anywhere” tagline |

---

### 2. Launch Hype: Weekend Build Shipped Into Chat

| | OpenClaw | ZeroClaw |
|---|----------|----------|
| **Copy** | Claude + claw pun; persistent agent in chats. GitHub README = canonical asset. “Ad” = runnable thing. | GitHub-first; bootstrap = one command. |
| **Map** | “ZeroClaw on RPi in 15 min” tutorial. One-click bootstrap. README = homepage. Demo video: Telegram → GPIO or `zeroclaw status` in under 60s. |
| **Asset** | — | Tutorial doc, bootstrap.sh, 60s YouTube clip |

---

### 3. Onboarding as Security Feature: Pairing Codes

| | OpenClaw | ZeroClaw |
|---|----------|----------|
| **Copy** | Pairing codes; explicit authorize; security = shareability unlock. | ZeroClaw has pairing, allowlists, sandbox from day one. |
| **Map** | “Secure by default. Pair once, share safely.” Contrast: no plaintext credentials, no skill marketplace RCE. Use [openclaw-security-incidents.md](openclaw-security-incidents.md) angles. |
| **Asset** | — | Pairing flow in onboarding; security section on landing |

---

### 4. Public Demo Bot: Curiosity → Conversion

| | OpenClaw | ZeroClaw |
|---|----------|----------|
| **Copy** | Public Discord “Friends of the Crustacean.” Creator controlled high-risk; everyone could interact. “Hack the bot” = engagement. | Same mechanic. |
| **Map** | Run public Telegram or Discord demo. Invite “try to break it.” Show sandbox, allowlist, secure defaults. Low-risk interaction, high trust. |
| **Asset** | — | Demo bot; “break it” challenge post |

---

### 5. Rebrand Drama as Launch Calendar

| | OpenClaw | ZeroClaw |
|---|----------|----------|
| **Copy** | Trademark dispute → Moltbot → OpenClaw. Evolution graphic, 100K stars badge, “Ultimate Form” meme. Rebrand = release + metric. | Use milestones, not rebrand drama. |
| **Map** | Milestones as releases: 1K stars, 10 providers, 20 channels. Shareable asset: “ZeroClaw vs OpenClaw: 99% less RAM” chart. Create calendar moments. |
| **Asset** | — | Benchmark infographic; milestone posts |

---

### 6. GitHub Star Velocity as Public Leaderboard

| | OpenClaw | ZeroClaw |
|---|----------|----------|
| **Copy** | Stars = ad units. Star-history chart, “18× faster than K8s.” More stars → visibility → forks → discourse. | Same dynamic. |
| **Map** | Benchmark charts: RAM, startup, binary size. “ZeroClaw: 3.4MB vs OpenClaw 28MB” — one image = instant significance. Repo as scoreboard. |
| **Asset** | — | Benchmark PNG; comparison table; star milestone graphic |

---

### 7. Ecosystem = Distribution

| | OpenClaw | ZeroClaw |
|---|----------|----------|
| **Copy** | MoltHub, skills, Twitch/Google Chat. Every skill = feature + content. Extensibility + discovery = pull. | Ecosystem page; trait-based extensions. |
| **Map** | Ecosystem page, “Add your project” PR. Each Provider, Channel, Tool = content. Hackathon tracks = builder-led growth. No skill marketplace (security angle). |
| **Asset** | — | ecosystem.html; hackathon tracks; integration content |

---

### 8. Security Incidents as Trust Moments

| | OpenClaw | ZeroClaw |
|---|----------|----------|
| **Copy** | Security crises → “34 improvements,” roadmap, public artefact. Trust work = marketing. | Lead with security from start. |
| **Map** | “Built secure from day one: pairing, sandbox, allowlist, encrypted secrets.” Use [openclaw-security-incidents.md](openclaw-security-incidents.md) for contrast. Pair headlines with concrete mitigations. |
| **Asset** | — | Security section; comparison page; security-incidents doc |

---

## Implementation Checklist

| Tactic | ZeroClaw Action | Status |
|--------|-----------------|--------|
| 1. Category wedge | Landing copy, hero, benchmark | ✅ |
| 2. Launch hype | 15-min tutorial, bootstrap, 60s demo video | Partial |
| 3. Pairing as security | Onboarding flow, landing security section | ✅ |
| 4. Public demo bot | Telegram/Discord demo; “break it” post | Pending |
| 5. Milestone releases | 1K stars, 10 providers; shareable chart | Pending |
| 6. Benchmark assets | 3.4MB vs 28MB infographic, comparison table | ✅ |
| 7. Ecosystem | ecosystem.html, “Add your project” | ✅ |
| 8. Security contrast | openclaw-security-incidents.md, comparison page | ✅ |

---

## Cross-Links

- [openclaw-viral-playbook.md](openclaw-viral-playbook.md) — full narrative and lessons
- [openclaw-security-incidents.md](openclaw-security-incidents.md) — security angles and nightmare incidents
- [openclaw-pain-points.md](openclaw-pain-points.md) — pain points vs ZeroClaw advantages
