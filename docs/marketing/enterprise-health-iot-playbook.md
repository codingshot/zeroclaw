# Enterprise, Health Tech, Legal, Smart Glasses, IoT — ZeroClaw Playbook

Positioning and content for developer communities: enterprise, health tech (HIPAA), legal, smart glasses, wearables, and IoT. Optimized for pain points and compliance.

Last updated: **February 18, 2026**.

---

## Audience Overview

| Segment | Key concerns | ZeroClaw hooks | Best channels |
|---------|--------------|----------------|---------------|
| **Enterprise** | Multi-user, RBAC, audit, security | Pairing, sandbox, audit logs, encrypted secrets | r/devops, r/sysadmin, SRE Slack, enterprise blogs |
| **Health tech** | HIPAA, PHI, BAA, local/cloud | Self-hosted, BAA-compatible providers, no PHI leakage | Health tech Slack, HL7/FHIR communities, HIPAA forums |
| **Legal** | Auditability, client data, compliance | Self-hosted, explicit errors, human-review flows | Legal tech Slack, civic tech, access-to-justice |
| **Smart glasses / wearables** | Low RAM, fast startup, battery | <5MB RAM, <10ms startup, single binary | r/Android, wearables dev, AR/VR forums |
| **IoT / edge** | Cost, resources, offline | $10 boards, <5MB RAM, local-first | r/raspberry_pi, r/esp32, Hackaday, IoT conferences |

---

## Enterprise

### Pain Points (OpenClaw)

- Single-user; no multi-tenant
- 22% unauthorized deployments; privileged access over-granted
- Plaintext credentials; skill supply chain (malicious skills)
- No built-in sandbox; broad filesystem/shell/network

### ZeroClaw Messaging

**Headline:** “Enterprise-ready AI agent runtime: pairing, sandbox, audit logs from day one.”

**Key points:**
- Pairing codes: explicit authorization per chat/room
- Sandbox: tool execution isolated; resource limits
- Allowlist: deny-by-default; no silent permission expansion
- Encrypted secret store: no plaintext API keys
- Audit logging: who did what, when
- Self-hosted: data stays on your infra
- Trait-based: add RBAC, multi-tenant via `SecurityPolicy`

**Content ideas:**
- “ZeroClaw for enterprise: security model and deployment checklist”
- “From OpenClaw to ZeroClaw: what changes for ops teams”
- “Multi-tenant AI agents: ZeroClaw + custom SecurityPolicy”
- Runbook: hardening, network segmentation, provider choice (BAA-eligible for PHI)

**Channels:** r/devops, r/sysadmin, r/sre, SRE/DevOps Slack, enterprise CTO newsletters, Gartner/Forrester-style “alternatives” content.

---

## Health Tech (HIPAA)

### Pain Points (OpenClaw)

- PHI must not hit cloud APIs without BAA
- Credential leakage; skill supply chain
- “Unpredictable” (Meta, others restricted use)
- Compliance = BAA + your own controls

### ZeroClaw Messaging

**Headline:** “Health tech AI agents: self-hosted, PHI-safe, auditable.”

**Key points:**
- Self-hosted: PHI stays on your servers
- Use HIPAA-eligible providers (e.g. Azure OpenAI with BAA) or local models (Llama)
- Encrypted storage; no plaintext secrets
- No arbitrary skill installs; extend via reviewed traits
- Audit logging for HIPAA technical safeguards
- Explicit errors; no silent data leakage
- Network segmentation: ZeroClaw isolated from EHR; documented pattern

**Content ideas:**
- “ZeroClaw + HIPAA: deployment checklist for health tech”
- “Self-hosted vs managed: when ZeroClaw fits health workloads”
- “PHI-safe AI: Azure OpenAI BAA + ZeroClaw on-prem”
- Case study: “Legal aid health info bot” (information only, human review)

**Channels:** Health tech Slack, HL7/FHIR communities, HIPAA forums, healthcare CTO groups, HIMSS-adjacent content.

---

## Legal Tech and Access to Justice

### Pain Points (OpenClaw)

- Client data sensitivity
- Auditability for legal workflows
- Skill supply chain; compliance risk

### ZeroClaw Messaging

**Headline:** “Legal tech AI: self-hosted, auditable, human-in-the-loop by design.”

**Key points:**
- Self-hosted: client data on your infra
- Audit logs: every action traceable
- Skill packs: documented, reviewed; not arbitrary marketplace installs
- “Information only, human review” — explicit in docs and CONTRIBUTING
- RAG for legal docs, forms, know-your-rights; no “legal advice” claims
- Encrypted secrets; pairing and allowlists

**Content ideas:**
- “ZeroClaw for legal aid: RAG, forms, and audit trails”
- “Access to justice track: build a legal info assistant”
- Hackathon: legal tech skill pack track (see hackathon-content)
- “Self-hosted legal AI: compliance checklist”

**Channels:** Legal tech Slack, civic tech, NTEN, law school tech clinics, bar association tech groups.

---

## Smart Glasses and Wearables

### Pain Points (OpenClaw)

- >1GB RAM; >500s startup — not viable for wearables
- No path for glasses, watches, low-power devices

### ZeroClaw Messaging

**Headline:** “AI agent runtime for smart glasses and wearables: <5MB RAM, <10ms startup.”

**Key points:**
- <5MB RAM: fits wearable and edge SoCs
- <10ms cold start: instant wake
- Single 3.4MB binary: no Node.js/Python runtime
- Peripheral trait: connect sensors, buttons, displays
- Local-first: works offline; sync when connected
- RISC-V, ARM, x86: portable

**Content ideas:**
- “ZeroClaw on a smart glasses prototype: RAM and startup benchmarks”
- “Wearable AI: from Mac Mini to glasses”
- Demo: Telegram → wearable response in <100ms

**Channels:** r/Android, r/WearOS, wearables dev Discords, AR/VR forums, CES/MWC adjacent content.

---

## IoT and Edge Devices

### Pain Points (OpenClaw)

- Pi Zero/2: crash or OOM
- Pi 3B+: minutes per response
- Pi 4: 4GB min, 8GB for usability
- Mac Mini or equivalent for “real” use

### ZeroClaw Messaging

**Headline:** “IoT AI agents: run on $10 boards with <5MB RAM.”

**Key points:**
- Pi Zero 2, Pi 4 1GB, Pi 5: all viable
- <5MB RAM, <10ms startup, 3.4MB binary
- Peripheral trait: GPIO, sensors, motors as tools
- Single binary; no runtime install
- 22+ providers; local or cloud
- Docs: `docs/hardware/`, `docs/adding-boards-and-tools.md`

**Content ideas:**
- “ZeroClaw on Raspberry Pi: 15-min setup”
- “IoT agent brain: GPIO, sensors, Telegram control”
- “From OpenClaw to ZeroClaw: what changes for Pi users”
- Benchmark: Pi 4 1GB vs Pi 5; Zero 2 vs 4

**Channels:** r/raspberry_pi, r/arduino, r/esp32, r/iot, Hackaday, maker Discords, IoT conferences.

---

## Content Calendar (Suggestions)

| Month | Enterprise | Health | Legal | Wearables | IoT |
|-------|------------|--------|-------|-----------|-----|
| 1 | Security model blog | HIPAA checklist | Legal aid skill pack | — | Pi 15-min tutorial |
| 2 | Multi-tenant pattern | BAA + ZeroClaw | — | Glasses benchmark | GPIO demo video |
| 3 | Runbook hardening | Case study | Hackathon track | — | Pi Day content |
| 4 | — | — | — | Wearable demo | Board support expansion |

---

## Cross-Links

- **Security:** `docs/security/`, `docs/sandboxing.md`, `docs/resource-limits.md`
- **Hardware:** `docs/hardware/`, `docs/hardware-peripherals-design.md`
- **Hackathon:** `docs/hackathon-content/` (legal, makers, hardware)
- **Comparisons:** `landing/compare/`, `docs/marketing/openclaw-pain-points.md`
