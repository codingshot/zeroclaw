# Builder segments — ZeroClaw hackathon

**Tailored messaging and channels** for different segments of potential hackathon builders. Use this to choose where to post and how to phrase announcements. Personas (goals, pain points, hooks) are in [personas.md](personas.md).

Last updated: **February 18, 2026**.

---

## Segment overview

| Segment | Who | Best tracks | Where they hang out | Message hook |
|---------|-----|-------------|---------------------|--------------|
| **Rust developers** | Systems and application Rust devs | Channel, Tool, Provider, Peripheral, Security | r/rust, Rust Discord, Rust forums, RustBridge | “Extend a Rust codebase; trait-based; one PR.” |
| **Makers / hardware** | Hobbyists, RPi/Arduino tinkerers | Peripheral, Docs (RPi runbook), Wildcard | r/raspberry_pi, r/arduino, maker Discords, Hackaday | “AI on $10 hardware; control from Telegram.” |
| **AI / LLM builders** | Devs building with LangChain, LlamaIndex, local LLMs | Channel, Tool, Provider, Skill Pack | LangChain/LlamaIndex Discord, r/LocalLLaMA, Hugging Face | “Lean runtime; swap providers; RAG without SaaS.” |
| **Legal tech / access to justice** | Legal aid, law tech, civic tech | Skill Pack, Docs, Tool (forms) | Legal tech Slack/Discord, civic tech, nonprofits | “Legal info and forms; RAG; audit; self-hosted.” |
| **Crypto / DePIN / x402** | Agentic payments, DePIN, web3 devs | Tool (x402), Provider, Wildcard | Crypto Twitter/X, Discord (x402, Coinbase CDP), DePIN servers | “Agent pays for APIs; x402; run on nodes.” |
| **Students / educators** | CS students, bootcamps, teachers | Docs, Skill Pack, Tool, Wildcard | University Discords, Learn AI Together, Dev.to | “First hackathon; clear playbooks; docs track.” |
| **SRE / platform / DevOps** | Ops, SRE, internal tools | Tool, Observability, Security, Docs (runbooks) | SRE Slack/Discord, r/devops, internal comms | “Runbook agent; observability; secure by default.” |
| **OpenClaw users** | Existing OpenClaw adopters | Docs (migration), Channel, Tool | OpenClaw community, same channels as AI builders | “Same identity; 99% less memory; migrate in an afternoon.” |

---

## Rust developers

**Channels:** r/rust (show-and-tell or events), Rust Discord (#events or #show-and-tell), Rust users forum, RustBridge / under-represented groups.

**Message:**  
“Build on ZeroClaw — 2-week hackathon. ZeroClaw is a Rust agent runtime (trait-based: Channel, Tool, Provider, Peripheral). Add a new channel, tool, or provider in a weekend; clear playbooks and CONTRIBUTING. Tracks: New Channel, New Tool, New Provider, New Peripheral, Security, Docs. [link]”

**Don’t:** Over-sell “AI”; emphasize codebase, traits, and mergeable PRs.

---

## Makers / hardware

**Channels:** r/raspberry_pi, r/arduino, r/esp32, maker Discords, Hackaday, YouTube (maker channels).

**Message:**  
“Run an AI assistant on your Raspberry Pi or Arduino host — 2-week hackathon. ZeroClaw: single binary, <5MB RAM, control from Telegram. Build a new board integration, a GPIO tool, or a ‘ZeroClaw on RPi in 15 min’ runbook. Hardware track + docs track. [link]”

**Don’t:** Assume they know Rust; point to “docs track” and “runbook” as low-code options.

---

## AI / LLM builders

**Channels:** LangChain Discord, LlamaIndex Discord, r/LocalLLaMA, Hugging Face forums, Perplexity/LMSYS Discord.

**Message:**  
“Hackathon: extend a lean agent runtime. ZeroClaw — 28+ providers, RAG (SQLite/Postgres, no Pinecone), Telegram/Discord/Slack. Add a channel, a tool (e.g. Notion/Airtable), or a skill pack. Same concepts as the stacks you use, but Rust and edge-ready. [link]”

**Don’t:** Imply they must switch stacks; position as “try another runtime” or “add an integration.”

---

## Legal tech / access to justice

**Channels:** Legal tech Slack/Discord, civic tech communities, nonprofit tech (NTEN, etc.), university law/tech clinics.

**Message:**  
“Hackathon track: legal tech and access to justice. Build a skill pack or RAG assistant for legal aid docs, forms, or know-your-rights — self-hosted, auditable, no lock-in. ZeroClaw runs on-prem; we need clear disclaimers and attribution. Docs and Skill Pack tracks. [link]”

**Don’t:** Promise “legal advice”; stress information only, human review, and compliance.

---

## Crypto / DePIN / x402

**Channels:** x402 Discord (Coinbase CDP), DePIN servers, crypto Twitter/X, “agentic payments” or “AI + crypto” Discords.

**Message:**  
“Build on ZeroClaw — hackathon with agentic payments track. ZeroClaw runs on edge and VPS; add x402 so agents pay for (or charge for) APIs. DePIN node ‘brain,’ pay-per-drone-task, or HTTP 402 tool. Rust, open source. [link]”

**Don’t:** Promise token or chain endorsement; keep it protocol and runtime.

---

## Students / educators

**Channels:** Learn AI Together, university CS/AI Discords, Dev.to, Hashnode, “first hackathon” or “learn in public” communities.

**Message:**  
“First hackathon? ZeroClaw hackathon has a Docs track and clear playbooks — no need to be a Rust expert. Write a tutorial (e.g. ‘ZeroClaw in 15 min’), a runbook, or a small skill pack. We have office hours and a ‘best first PR’ prize. [link]”

**Don’t:** Assume deep systems knowledge; highlight docs, skills, and support.

---

## SRE / platform / DevOps

**Channels:** SRE Slack/Discord, r/devops, internal company channels, runbook and incident-management communities.

**Message:**  
“Hackathon: runbook agent, observability, or security hardening. ZeroClaw is self-hosted, secure-by-default (pairing, allowlist, sandbox). Build a tool that runs approved runbook steps, an Observer (e.g. Prometheus), or rate limits and audit logging. [link]”

**Don’t:** Oversell “AI”; stress automation, audit, and ops use cases.

---

## OpenClaw users

**Channels:** OpenClaw Discord/community, same channels where OpenClaw is discussed (Reddit, Twitter, etc.).

**Message:**  
“ZeroClaw hackathon — same identity and channel ideas as OpenClaw, but Rust and <5MB RAM. Migrate in an afternoon (`zeroclaw migrate openclaw`). We’d love a migration runbook or doc from the community. Docs track + any other track. [link]”

**Don’t:** Bad-mouth OpenClaw; focus on “smaller, faster, hardware-friendly” and migration path.

---

## Using this doc

- **Announcement:** Pick 2–3 segments for the first wave; tailor one paragraph per channel.
- **Track-specific promos:** e.g. “Hardware track” → makers + Rust; “x402 track” → crypto + AI builders.
- **Office hours:** Call out segments in reminders (“Makers: join hardware office hours”; “Rust devs: trait walkthrough on Wednesday”).
