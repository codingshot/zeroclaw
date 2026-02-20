# Reddit Outreach Strategy — ZeroClaw

Subreddit list, posting rules, templates, and account hygiene. Stay valuable and avoid bans.

Last updated: **February 18, 2026**.

---

## Subreddit Tiers

### Tier 1 — Best fit, highest priority

| Subreddit | Approx size | Post type | Best days | Notes |
|-----------|-------------|-----------|-----------|-------|
| r/raspberry_pi | 1M+ | Show-and-tell, how-to | Tue–Thu | “I ran AI on my Pi” — specs, link |
| r/selfhosted | 500K+ | Project, tool share | Tue, Thu | Self-hosted AI angle |
| r/rust | 400K+ | Show-and-tell, blog | Wed, Fri | Emphasize traits, Rust |
| r/homelab | 1M+ | Lightweight services | Mon, Wed | Edge, low-resource |
| r/arduino | 1M+ | Project, integration | Tue, Thu | Pi/board as host |

### Tier 2 — Adjacent / maker

| Subreddit | Notes |
|-----------|-------|
| r/raspberry_pi_projects | Project builds only |
| r/esp32 | ESP32 + companion Pi |
| r/homeautomation | Smart home AI |
| r/robotics | Robot brain, Telegram control |
| r/3Dprinting | Makers, “AI for projects” |
| r/RetroPie | Pi hobbyists |
| r/linux | Minimal binary, SBC |
| r/sysadmin | Ops, runbooks |
| r/devops | Lightweight agents |

### Tier 3 — Niche / use with care

| Subreddit | Notes |
|-----------|------|
| r/LocalLLaMA | Local AI; be helpful, not promotional |
| r/MachineLearning | Research-heavy; link only if directly relevant |
| r/programming | General dev; high scrutiny |
| r/hackernews | If cross-posting from HN |

---

## Posting Rules (Critical)

1. **Read sub rules first.** Many ban self-promo, require karma, or limit link posts.
2. **Contribute before promoting.** Comment helpfully 5–10x before posting your own content.
3. **Title ≠ ad.** “I ran an AI assistant on my Raspberry Pi with <5MB RAM” > “Check out ZeroClaw!!”
4. **Link in comments or body, not as sole purpose.** Add value: specs, how you did it, what you learned.
5. **No copy-paste across subs.** Customize per community; duplicate posts get flagged.
6. **Respond to comments.** Reply within 2–4 hours; engagement boosts visibility.
7. **Flair correctly.** Use “Project,” “Show and Tell,” “Tutorial” where available.

---

## Post Templates

### Show-and-tell (r/raspberry_pi, r/selfhosted)

**Title:** I ran an AI assistant on my Raspberry Pi — 3.4MB binary, &lt;5MB RAM

**Body:**
> Wanted to try running an AI agent locally on my Pi without Node or Python. Found ZeroClaw — Rust-based, single binary. Cold start under 10ms, uses less than 5MB RAM. Connects to Telegram so I can chat with it from my phone. Setup took about 15 minutes.  
>  
> [Link to tutorial / repo]  
>  
> Open source, runs on Pi 4, Zero 2, and similar boards. Curious if others have tried similar setups.

### Tool share (r/selfhosted, r/homelab)

**Title:** Self-hosted AI agent runtime — no cloud, no Pinecone, SQLite for memory

**Body:**
> Looking for a lightweight, self-hosted AI agent runtime. ZeroClaw fits: single binary (~3.4MB), uses SQLite for memory (no Pinecone/Elasticsearch), 22+ providers. Runs on a Pi or small VPS.  
>  
> [Link]  
>  
> Not affiliated — just found it useful for a home lab setup.

### Rust angle (r/rust)

**Title:** Built a trait-based AI agent runtime in Rust — &lt;10ms startup, &lt;5MB RAM

**Body:**
> Open-sourced an AI agent runtime in Rust. Trait-based: Provider, Channel, Tool, Peripheral. Targets edge: &lt;10ms cold start, ~3.4MB binary. Ships with 28+ providers, Telegram/Discord/Slack.  
>  
> [Link to repo]  
>  
> Would love feedback from the Rust community on the architecture.

---

## Account Hygiene

| Do | Don’t |
|----|-------|
| Use an account with some history (not brand new) | Create accounts just to post ZeroClaw |
| Spread posts across 1–2 weeks | Post to 5 subs in one day |
| Comment on others’ posts in same subs | Only post, never comment |
| Use 10:1 rule (9 helpful, 1 promotional) | Post only your links |
| Verify email, build karma slowly | Buy karma or use bots |

---

## Tracking

| Metric | How |
|--------|-----|
| Upvotes / comments | Manual or Reddit analytics |
| Clicks to landing | UTM: `?utm_source=reddit&utm_medium=post&utm_campaign=r_raspberry_pi` |
| GitHub stars from Reddit | Ask in onboarding or survey (optional) |
| Bans / removals | Log sub + reason; avoid repeat mistakes |

---

## Quick Reference

- **Best posts:** Show-and-tell with specs, personal story, link in body.
- **Worst posts:** “Check out my project,” link-only, duplicate across subs.
- **When in doubt:** Answer someone’s question with a helpful suggestion; link only if directly relevant.
