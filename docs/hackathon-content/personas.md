# Builder personas — ZeroClaw hackathon

**Personas** for hackathon builders: goals, pain points, messaging hooks, and suggested tracks. Use with [builder-segments.md](builder-segments.md) (where they hang out) and the main [use-cases-and-hackathon-plan](../use-cases-and-hackathon-plan.md).

Last updated: **February 18, 2026**.

---

## Persona summary table

| Persona | Goal | Pain point | Message hook | Suggested tracks |
|---------|------|------------|--------------|------------------|
| **Rust Ruth** | Ship a mergeable PR; extend a real codebase | Wants clear contracts and no “AI fluff” | “Trait-based; one PR; CONTRIBUTING.” | Channel, Tool, Provider, Peripheral, Security |
| **Maker Max** | Control hardware from phone; cheap setup | Heavy runtimes don’t fit RPi/budget | “$10 brain; Telegram to GPIO.” | Peripheral, Docs (RPi runbook), Wildcard |
| **AI Alex** | Try new runtime; RAG without another SaaS | Tired of lock-in and heavy stacks | “Swap provider; RAG in SQLite; no Pinecone.” | Channel, Tool, Skill Pack, Provider |
| **Legal Leigh** | Access to justice; forms and info, not advice | Needs audit, confidentiality, no vendor lock-in | “Self-hosted; RAG; audit trail; disclaimer.” | Skill Pack, Docs, Tool (forms) |
| **Crypto Sam** | Agentic payments; DePIN or x402 | Wants agents that pay/earn per call | “x402; agent pays for API; run on nodes.” | Tool (x402), Provider, Wildcard |
| **Student Sam** | First hackathon; learn in public | Doesn’t want to be blocked by Rust depth | “Docs track; playbooks; best first PR.” | Docs, Skill Pack, Wildcard |
| **Ops Jordan** | Runbook agent; observability; secure automation | Needs audit and least privilege | “Runbook runner; Observer; sandbox.” | Tool, Observability, Security, Docs |
| **OpenClaw Omar** | Move to smaller stack; keep workflows | Worried about rewrite and loss of identity | “Same identity; migrate in an afternoon.” | Docs (migration), Channel, Tool |

---

## Rust Ruth

- **Goal:** Ship a mergeable PR; extend a real Rust codebase; be judged on correctness and style.
- **Pain point:** Doesn’t want “AI hype” or vague scope; wants clear trait contracts and CONTRIBUTING.
- **Message hook:** “ZeroClaw is trait-based. Add a Channel, Tool, or Provider by implementing the trait and registering in the factory. Playbooks in the repo; CI and clippy from day one.”
- **Suggested tracks:** New Channel, New Tool, New Provider, New Peripheral, Security.
- **Where:** r/rust, Rust Discord, Rust forums (see [builder-segments](builder-segments.md)).

---

## Maker Max

- **Goal:** Control hardware from phone (Telegram/WhatsApp); run on Raspberry Pi or cheap board; minimal cost.
- **Pain point:** Most agent runtimes need Node/Python or lots of RAM; doesn’t fit RPi or budget.
- **Message hook:** “Run an AI assistant on $10 hardware. Single binary, <5MB RAM. Control GPIO or Arduino from Telegram. Build a new board integration or write the ‘ZeroClaw on RPi in 15 min’ runbook.”
- **Suggested tracks:** New Peripheral, Docs (runbook), Wildcard (e.g. “lab in a box”).
- **Where:** r/raspberry_pi, r/arduino, maker Discords (see [builder-segments](builder-segments.md)).

---

## AI Alex

- **Goal:** Try a different runtime; RAG and tools without another SaaS; swap models easily.
- **Pain point:** Lock-in and heavy stacks; wants “bring your own model” and optional local.
- **Message hook:** “ZeroClaw: 28+ providers, RAG in SQLite/Postgres (no Pinecone), tools and channels. Add a channel or tool in a weekend; same concepts you know, Rust and edge-ready.”
- **Suggested tracks:** New Channel, New Tool, New Provider, Skill Pack.
- **Where:** LangChain/LlamaIndex Discord, r/LocalLLaMA (see [builder-segments](builder-segments.md)).

---

## Legal Leigh

- **Goal:** Access to justice; legal info and form assistance; audit and confidentiality.
- **Pain point:** Needs self-hosted, no vendor lock-in, clear “no legal advice” and human review.
- **Message hook:** “Build a legal-aid skill pack or RAG assistant. ZeroClaw is self-hosted and auditable; we require disclaimers and attribution. Docs and Skill Pack tracks.”
- **Suggested tracks:** Skill Pack, Docs, Tool (form templates).
- **Where:** Legal tech and civic tech communities (see [builder-segments](builder-segments.md)).

---

## Crypto Sam

- **Goal:** Agentic payments; agents that pay for APIs or get paid per task; DePIN or x402.
- **Pain point:** Wants protocol-level payment, not just “add a payment API.”
- **Message hook:** “Add x402 so ZeroClaw pays for (or charges for) APIs. DePIN node brain, pay-per-drone-task, or HTTP 402 tool. Open protocol, Rust runtime.”
- **Suggested tracks:** Tool (x402), Provider (paid backend), Wildcard.
- **Where:** x402 Discord, DePIN servers, crypto Twitter (see [builder-segments](builder-segments.md)).

---

## Student Sam

- **Goal:** First hackathon; learn in public; low barrier to entry.
- **Pain point:** Worried about Rust depth or “nothing to contribute.”
- **Message hook:** “Docs track and clear playbooks — write a tutorial or runbook. We have office hours and a ‘best first PR’ prize. No need to be a Rust expert.”
- **Suggested tracks:** Docs, Skill Pack, Wildcard (small project).
- **Where:** Learn AI Together, university Discords, Dev.to (see [builder-segments](builder-segments.md)).

---

## Ops Jordan

- **Goal:** Runbook automation; observability; secure, auditable agent.
- **Pain point:** Needs least privilege, audit trail, and no secrets in logs.
- **Message hook:** “ZeroClaw is secure-by-default: pairing, allowlist, sandbox. Build a runbook runner (approved steps only), an Observer (e.g. Prometheus), or rate limits and audit logging.”
- **Suggested tracks:** Tool (runbook), Observability, Security, Docs (runbook).
- **Where:** SRE Slack/Discord, r/devops (see [builder-segments](builder-segments.md)).

---

## OpenClaw Omar

- **Goal:** Move to a smaller, faster stack; keep identity and workflows.
- **Pain point:** Worried about rewrite and losing config/memory.
- **Message hook:** “Same identity (OpenClaw format). Migrate config and memory in an afternoon (`zeroclaw migrate openclaw`). 99% less memory; Rust. We’d love a community migration runbook.”
- **Suggested tracks:** Docs (migration), Channel, Tool (anything they miss).
- **Where:** OpenClaw community, same as AI builders (see [builder-segments](builder-segments.md)).

---

## Using personas

- **Announcements:** Lead with the hook for 2–3 personas (e.g. “Makers: $10 brain. Rust devs: one PR. Students: docs track.”).
- **Track promos:** Map “this track is for you” to personas (e.g. Hardware track → Maker Max, Rust Ruth).
- **Office hours:** “Rust walkthrough for Ruth; hardware for Max; x402 for Sam.”
- **Judge alignment:** Assign judges who match personas (e.g. maker judge for Peripheral track).
