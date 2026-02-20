# Build Personas — ZeroClaw Marketing

Every builder persona for ZeroClaw: goals, pain points, message hooks, channels, and suggested content. Use for announcements, track promos, content, and outreach.

Last updated: **February 18, 2026**.

---

## Persona Index

| Persona | Alias | Focus | Primary channels |
|---------|-------|-------|------------------|
| Rust Ruth | Rust dev | Trait-based PR; extend codebase | r/rust, Rust Discord |
| Maker Max | Maker / hardware | $10 hardware; Telegram → GPIO | r/raspberry_pi, r/arduino |
| AI Alex | AI/LLM builder | Swap providers; RAG; no lock-in | LangChain Discord, r/LocalLLaMA |
| Legal Leigh | Legal tech | Access to justice; audit; self-hosted | Legal tech Slack, civic tech |
| Crypto Sam | DePIN / x402 | Agentic payments; pay-per-API | x402 Discord, DePIN |
| Student Sam | Student / educator | First hackathon; docs track | Learn AI Together, university Discords |
| Ops Jordan | SRE / DevOps | Runbook agent; observability; secure | r/devops, SRE Slack |
| OpenClaw Omar | OpenClaw migrator | Move to smaller stack; keep identity | OpenClaw community |
| Enterprise Evan | Enterprise CTO / platform | Multi-tenant; RBAC; audit; compliance | r/devops, enterprise blogs |
| Health Hannah | Health tech builder | HIPAA; PHI; BAA; local models | Health tech Slack, HIPAA forums |
| Wearable Wade | Smart glasses / wearables | <5MB RAM; <10ms startup; battery | r/Android, wearables dev |
| Robotics Ray | Robotics / ROS | Robot brain; edge; sensors | r/robotics, Hackaday |
| Productivity Pete | Composio / SaaS builder | 1000+ OAuth apps; white-label | Developer communities |
| Privacy Paige | Privacy / Signal / self-host | No cloud; E2E; minimal footprint | r/selfhosted, Signal communities |

---

## 1. Rust Ruth

| | |
|---|-----|
| **Goal** | Ship a mergeable PR; extend a real Rust codebase; be judged on correctness and style |
| **Pain point** | Doesn’t want “AI hype” or vague scope; wants clear trait contracts and CONTRIBUTING |
| **Message hook** | “ZeroClaw is trait-based. Add a Channel, Tool, or Provider by implementing the trait and registering in the factory. Playbooks in the repo; CI and clippy from day one.” |
| **Best tracks** | New Channel, New Tool, New Provider, New Peripheral, Security |
| **Where** | r/rust (show-and-tell, events), Rust Discord (#events, #show-and-tell), Rust forums, RustBridge |
| **Don’t** | Over-sell “AI”; emphasize codebase, traits, mergeable PRs |
| **Content angle** | “Built a trait-based AI agent runtime in Rust”; architecture deep-dive |

---

## 2. Maker Max

| | |
|---|-----|
| **Goal** | Control hardware from phone (Telegram/WhatsApp); run on Raspberry Pi or cheap board; minimal cost |
| **Pain point** | Most agent runtimes need Node/Python or lots of RAM; doesn’t fit RPi or budget |
| **Message hook** | “Run an AI assistant on $10 hardware. Single binary, <5MB RAM. Control GPIO or Arduino from Telegram. Build a new board integration or write the ‘ZeroClaw on RPi in 15 min’ runbook.” |
| **Best tracks** | New Peripheral, Docs (RPi runbook), Wildcard |
| **Where** | r/raspberry_pi, r/arduino, r/esp32, maker Discords, Hackaday, YouTube (maker channels) |
| **Don’t** | Assume they know Rust; point to docs track and runbook as low-code options |
| **Content angle** | “AI on $10 hardware”; “Telegram to blink an LED”; Pi Day content |

---

## 3. AI Alex

| | |
|---|-----|
| **Goal** | Try a different runtime; RAG and tools without another SaaS; swap models easily |
| **Pain point** | Lock-in and heavy stacks; wants “bring your own model” and optional local |
| **Message hook** | “ZeroClaw: 28+ providers, RAG in SQLite/Postgres (no Pinecone), tools and channels. Add a channel or tool in a weekend; same concepts you know, Rust and edge-ready.” |
| **Best tracks** | New Channel, New Tool, New Provider, Skill Pack |
| **Where** | LangChain/LlamaIndex Discord, r/LocalLLaMA, Hugging Face forums |
| **Don’t** | Imply they must switch stacks; position as “try another runtime” or “add an integration” |
| **Content angle** | “Swap providers in seconds”; “RAG without Pinecone”; “200 models, one key” |

---

## 4. Legal Leigh

| | |
|---|-----|
| **Goal** | Access to justice; legal info and form assistance; audit and confidentiality |
| **Pain point** | Needs self-hosted, no vendor lock-in, clear “no legal advice” and human review |
| **Message hook** | “Build a legal-aid skill pack or RAG assistant. ZeroClaw is self-hosted and auditable; we require disclaimers and attribution. Docs and Skill Pack tracks.” |
| **Best tracks** | Skill Pack, Docs, Tool (form templates) |
| **Where** | Legal tech Slack/Discord, civic tech, nonprofit tech (NTEN), university law/tech clinics |
| **Don’t** | Promise “legal advice”; stress information only, human review, compliance |
| **Content angle** | “Legal tech AI: auditable, human-in-the-loop”; RAG for legal docs |

---

## 5. Crypto Sam

| | |
|---|-----|
| **Goal** | Agentic payments; agents that pay for APIs or get paid per task; DePIN or x402 |
| **Pain point** | Wants protocol-level payment, not just “add a payment API” |
| **Message hook** | “Add x402 so ZeroClaw pays for (or charges for) APIs. DePIN node brain, pay-per-drone-task, or HTTP 402 tool. Open protocol, Rust runtime.” |
| **Best tracks** | Tool (x402), Provider (paid backend), Wildcard |
| **Where** | x402 Discord (Coinbase CDP), DePIN servers, crypto Twitter/X |
| **Don’t** | Promise token or chain endorsement; keep it protocol and runtime |
| **Content angle** | “Agent pays for APIs”; “x402 integration”; DePIN node brain |

---

## 6. Student Sam

| | |
|---|-----|
| **Goal** | First hackathon; learn in public; low barrier to entry |
| **Pain point** | Worried about Rust depth or “nothing to contribute” |
| **Message hook** | “Docs track and clear playbooks — write a tutorial or runbook. We have office hours and a ‘best first PR’ prize. No need to be a Rust expert.” |
| **Best tracks** | Docs, Skill Pack, Wildcard (small project) |
| **Where** | Learn AI Together, university Discords, Dev.to, Hashnode |
| **Don’t** | Assume deep systems knowledge; highlight docs, skills, support |
| **Content angle** | “First hackathon”; “ZeroClaw in 15 min”; “best first PR” |

---

## 7. Ops Jordan

| | |
|---|-----|
| **Goal** | Runbook automation; observability; secure, auditable agent |
| **Pain point** | Needs least privilege, audit trail, no secrets in logs |
| **Message hook** | “ZeroClaw is secure-by-default: pairing, allowlist, sandbox. Build a runbook runner (approved steps only), an Observer (e.g. Prometheus), or rate limits and audit logging.” |
| **Best tracks** | Tool (runbook), Observability, Security, Docs (runbook) |
| **Where** | SRE Slack/Discord, r/devops, internal company channels |
| **Don’t** | Oversell “AI”; stress automation, audit, ops use cases |
| **Content angle** | “Runbook agent”; “secure by default”; “audit logging” |

---

## 8. OpenClaw Omar

| | |
|---|-----|
| **Goal** | Move to a smaller, faster stack; keep identity and workflows |
| **Pain point** | Worried about rewrite and losing config/memory |
| **Message hook** | “Same identity (OpenClaw format). Migrate config and memory in an afternoon (`zeroclaw migrate openclaw`). 99% less memory; Rust. We’d love a community migration runbook.” |
| **Best tracks** | Docs (migration), Channel, Tool (anything they miss) |
| **Where** | OpenClaw community, same channels as AI builders |
| **Don’t** | Bad-mouth OpenClaw; focus on “smaller, faster, hardware-friendly” and migration path |
| **Content angle** | “From OpenClaw to ZeroClaw”; migration runbook; “99% less RAM” |

---

## 9. Enterprise Evan

| | |
|---|-----|
| **Goal** | Deploy AI agent for internal platform; multi-user, RBAC, audit, compliance |
| **Pain point** | Needs multi-tenant, permission isolation, no unauthorized deployments |
| **Message hook** | “Enterprise-ready from day one: pairing, sandbox, audit logs, encrypted secrets. Trait-based: add RBAC, multi-tenant via SecurityPolicy. No plaintext credentials.” |
| **Best tracks** | Security, Observability, Docs (runbook), Tool (approved runbook) |
| **Where** | r/devops, r/sysadmin, SRE Slack, enterprise CTO newsletters |
| **Don’t** | Promise “enterprise support” without clarifying self-hosted model |
| **Content angle** | “Enterprise security model”; “multi-tenant pattern”; SOC 2 / RBAC |

---

## 10. Health Hannah

| | |
|---|-----|
| **Goal** | Build AI for health tech; HIPAA-compliant; PHI stays on-prem |
| **Pain point** | PHI must not hit non-BAA APIs; credential leakage; skill supply chain risk |
| **Message hook** | “Health tech AI: self-hosted, PHI-safe, auditable. Use BAA-eligible providers (Azure OpenAI) or local Llama. No skill marketplace; encrypted secrets; audit logs.” |
| **Best tracks** | Skill Pack, Docs (HIPAA checklist), Tool (with human review) |
| **Where** | Health tech Slack, HL7/FHIR communities, HIPAA forums |
| **Don’t** | Promise HIPAA compliance; provide checklist, user implements |
| **Content angle** | “HIPAA-safe AI”; “PHI on your infra”; BAA + ZeroClaw |

---

## 11. Wearable Wade

| | |
|---|-----|
| **Goal** | Build AI for smart glasses, wearables, low-power devices |
| **Pain point** | Most runtimes too heavy; need <5MB RAM, <10ms startup, battery-efficient |
| **Message hook** | “AI runtime for smart glasses and wearables: <5MB RAM, <10ms startup. Single binary, no Node.js. Peripheral trait for sensors, buttons.” |
| **Best tracks** | New Peripheral, Docs (wearable setup), Wildcard |
| **Where** | r/Android, r/WearOS, wearables dev Discords, AR/VR forums |
| **Don’t** | Over-promise device support; focus on fit (RAM, startup) |
| **Content angle** | “AI on smart glasses”; “wearable runtime”; <5MB story |

---

## 12. Robotics Ray

| | |
|---|-----|
| **Goal** | AI as robot brain; control from Telegram; GPIO, sensors, motors |
| **Pain point** | Needs edge fit; robotics runtimes often heavy or cloud-dependent |
| **Message hook** | “Run an AI agent as the brain of your robot. ZeroClaw: <5MB RAM, <10ms startup, control from Telegram. Add GPIO tools for motors and sensors. Rust, open source.” |
| **Best tracks** | New Peripheral, Tool (GPIO, serial), Docs (robot runbook) |
| **Where** | r/robotics, r/raspberry_pi, Hackaday, robotics Discord |
| **Don’t** | Promise ROS integration unless built; focus on “brain” + hardware |
| **Content angle** | “Robot brain”; “Telegram to robot”; edge AI for robotics |

---

## 13. Productivity Pete

| | |
|---|-----|
| **Goal** | White-label “AI in Slack/Telegram”; 1000+ app integrations via OAuth |
| **Pain point** | Wants Composio/Gmail/Notion without building each integration |
| **Message hook** | “Gmail, Notion, GitHub, Slack — 1000+ apps via Composio. One OAuth flow. Agent acts inside your tools. Self-hosted, your keys.” |
| **Best tracks** | Tool (Composio action), Channel, Skill Pack |
| **Where** | Developer communities, productivity tool forums |
| **Don’t** | Oversell Composio coverage; clarify opt-in, entity_id |
| **Content angle** | “1000+ app integrations”; “AI in your stack”; OAuth demo |

---

## 14. Privacy Paige

| | |
|---|-----|
| **Goal** | Self-hosted, no cloud; E2E where possible; minimal footprint |
| **Pain point** | Doesn’t trust SaaS; wants Signal, Matrix, or fully local |
| **Message hook** | “Privacy-first AI. Signal + ZeroClaw. E2E where possible. Self-hosted, no trace. <5MB RAM, single binary. No telemetry.” |
| **Best tracks** | Channel (Signal, Matrix), Docs, Security |
| **Where** | r/selfhosted, r/homelab, Signal communities, Matrix forums |
| **Don’t** | Claim “100% private”; be precise (self-hosted, no telemetry) |
| **Content angle** | “Self-hosted AI”; “No cloud”; “Privacy-first agent” |

---

## Persona → Content Mapping

| Persona | Blog idea | Video idea | Reddit angle |
|---------|-----------|------------|--------------|
| Rust Ruth | “Trait-based agent runtime” | Architecture walkthrough | r/rust show-and-tell |
| Maker Max | “ZeroClaw on RPi in 15 min” | Telegram → GPIO demo | r/raspberry_pi project |
| AI Alex | “Swap providers in seconds” | OpenRouter + routing demo | r/LocalLLaMA |
| Legal Leigh | “Legal tech RAG” | Skill pack + disclaimer | Legal tech channels |
| Crypto Sam | “x402 integration” | Pay-per-API demo | x402 Discord |
| Student Sam | “First hackathon guide” | 15-min tutorial | Learn AI Together |
| Ops Jordan | “Runbook agent” | Shell + allowlist demo | r/devops |
| OpenClaw Omar | “Migration runbook” | migrate openclaw walkthrough | OpenClaw community |
| Enterprise Evan | “Security model” | Pairing + audit demo | r/devops |
| Health Hannah | “HIPAA checklist” | BAA + ZeroClaw | Health tech |
| Wearable Wade | “AI on smart glasses” | <5MB benchmark | r/Android |
| Robotics Ray | “Robot brain” | Telegram → servo | r/robotics |
| Productivity Pete | “Composio + ZeroClaw” | Gmail connect demo | Dev communities |
| Privacy Paige | “Self-hosted AI” | Signal + ZeroClaw | r/selfhosted |

---

## Announement Hooks (Pick 2–3)

- **Makers:** “$10 brain. Telegram to GPIO.”
- **Rust devs:** “Trait-based. One PR.”
- **Students:** “Docs track. Best first PR.”
- **AI builders:** “Swap providers. RAG in SQLite.”
- **Ops:** “Runbook agent. Secure by default.”
- **OpenClaw users:** “Migrate in an afternoon. 99% less RAM.”

---

## Viral strategies by persona

See [viral-strategies-by-persona.md](viral-strategies-by-persona.md) for viral tactics tailored to each persona: best ideas, formats, channels, appeal strategy, do/don't.

---

## Cross-Links

- **Hackathon personas (source):** [hackathon-content/personas.md](../hackathon-content/personas.md)
- **Builder segments (channels):** [hackathon-content/builder-segments.md](../hackathon-content/builder-segments.md)
- **Enterprise/health/IoT:** [enterprise-health-iot-playbook.md](enterprise-health-iot-playbook.md)
- **Developer content:** [developer-content.md](developer-content.md)
- **Integrations:** [integrations-content-playbook.md](integrations-content-playbook.md)
