# OpenClaw Pain Points — How ZeroClaw Addresses Them

Researched pain points, limitations, and complaints about OpenClaw. Use this to position ZeroClaw in comparisons, content, and developer outreach.

Last updated: **February 18, 2026**.

---

## Summary: OpenClaw vs ZeroClaw

| Dimension | OpenClaw | ZeroClaw |
|------------|----------|-----------|
| **Language** | TypeScript | Rust |
| **RAM** | >1GB | <5MB |
| **Startup (0.8GHz)** | >500s | <10ms |
| **Binary size** | ~28MB | ~3.4MB |
| **Hardware cost** | Mac Mini $599 | Any $10+ |
| **Codebase** | 430K+ lines | Lean, trait-driven |
| **Security model** | Opt-out, allowlist | Secure by default, pairing, sandbox |
| **Credentials** | Plaintext in ~/.clawdbot | Encrypted secret store |
| **Skills/marketplace** | ClawHub — 341/5705 malicious | No marketplace; traits, no arbitrary install |
| **Raspberry Pi** | Pi 4 4GB min, Pi 5 8GB recommended; Zero crashes | Pi Zero 2, Pi 4 1GB, Pi 5 — all viable |
| **Token/memory** | Reloads full memory every run; burns tokens | SQLite memory, hybrid merge, no redundant reloads |

---

## 1. Security Vulnerabilities

**OpenClaw pain points:**
- One-click remote code execution in skill installation
- 341 malicious skills out of 5,705 on ClawHub (Atomic Stealer malware, credential harvesters)
- 36% of ClawHub skills have prompt injection vulnerabilities
- API keys in plaintext in `~/.clawdbot`; `.bak` files preserve old credentials
- Opt-out security: allowlist of approved commands; documented bypasses
- Long-lived process with broad filesystem, shell, network access
- SSRF, missing auth, path traversal (6 vulnerabilities documented)
- 22% of enterprise deployments unauthorized; 350+ exposed instances

**ZeroClaw advantages:**
- No community marketplace for arbitrary code install — extend via traits, audit each addition
- Encrypted secret store; no plaintext credentials
- Pairing codes, sandbox, allowlists from day one
- Deny-by-default; explicit approval for dangerous operations
- Memory-safe Rust; no data races, no memory leaks
- Audit logging, resource limits, sandboxed tool execution

**Content angle:** “ZeroClaw: built secure from day one. No skill marketplace attack surface. Encrypted secrets, pairing, sandbox.”

---

## 2. Resource Requirements and Edge/IoT

**OpenClaw pain points:**
- >1GB RAM; Mac Mini or equivalent required for smooth use
- >500s startup on 0.8GHz edge hardware
- Pi Zero: crashes during install
- Pi Zero 2W: runs out of memory immediately
- Pi 3B+: technically works, painfully slow, minutes per response
- Pi 4: 4GB minimum, constant SD swapping; 8GB for real usability
- Pi 5 8GB: recommended “sweet spot”
- ~28MB binary (Node.js runtime adds more)

**ZeroClaw advantages:**
- <5MB RAM
- <10ms startup
- ~3.4MB single binary; no Node.js
- Pi Zero 2, Pi 4 1GB, Pi 5 — all viable
- Runs on $10 boards (RISC-V, ARM, x86)

**Content angle:** “OpenClaw needs a Mac Mini. ZeroClaw runs on a $10 board. <5MB RAM, <10ms cold start.”

---

## 3. Token Costs and Memory Behavior

**OpenClaw pain points:**
- Reloads accumulated memory on every run → token costs spiral
- Re-reads entire codebases repeatedly; no persistent architectural knowledge
- Burns hundreds of thousands of tokens on redundant file reads
- LLM integrations produce nonsensical/unreliable outputs in production (user reports)
- Discord bot integrations fail to give coherent responses

**ZeroClaw advantages:**
- SQLite + FTS5 memory; hybrid vector + keyword merge
- No Pinecone, no Elasticsearch; local, deterministic
- Memory is tool-mediated; agent recalls, saves, manages via tools
- 22+ providers; switch without changing architecture
- Predictable memory behavior; no redundant full reloads

**Content angle:** “ZeroClaw: SQLite memory, no token burn on every run. Built for production, not demos.”

---

## 4. Enterprise Deployment

**OpenClaw pain points:**
- Single-user architecture; no multi-user management
- No permission isolation
- Commingled session records with sensitive data (DB credentials, API keys)
- 22% unauthorized enterprise deployments; over half granted privileged access
- Cisco: 9 vulnerabilities in skills (prompt injection, silent data exfiltration)
- Meta and others restricted/banned employee use: “unpredictable,” privacy breach risk
- No built-in sandboxing

**ZeroClaw advantages:**
- Trait-based; add RBAC, multi-tenant via custom SecurityPolicy
- Pairing, allowlists, sandbox from core
- Encrypted secrets; audit logging
- Fail-fast, explicit errors; no silent permission broadening
- Self-hosted; data stays on your infra

**Content angle:** “Enterprise-ready by design: pairing, sandbox, audit logs, encrypted secrets. No surprise privileged access.”

---

## 5. Healthcare and Regulated Industries

**OpenClaw pain points:**
- HIPAA requires BAA + your own controls; OpenClaw wasn’t designed for PHI
- Credential leakage risk (plaintext)
- Skill ecosystem = supply chain risk (malicious skills)
- Tech companies restricting use over security concerns

**ZeroClaw advantages:**
- Self-hosted; PHI never leaves your infra
- Use HIPAA-eligible providers (Azure OpenAI with BAA) or local models
- No arbitrary skill installs; audit every integration
- Encrypted storage, audit logging, least privilege
- Deterministic, reproducible; no hidden behavior

**Content angle:** “Health tech and regulated workloads: self-hosted, auditable, no marketplace supply chain risk.”

---

## 6. IoT, Smart Glasses, Wearables

**OpenClaw pain points:**
- Too heavy for embedded: >1GB RAM, >500s startup
- Pi Zero / small SBCs: not viable
- No clear path for smart glasses, wearables, or ultra-low-resource devices

**ZeroClaw advantages:**
- <5MB RAM, <10ms startup fits wearables and edge
- Peripheral trait for hardware (GPIO, sensors, boards)
- Single binary; no runtime bloat
- STM32, RPi, Arduino host support; see hardware docs

**Content angle:** “AI on smart glasses, wearables, $10 boards. ZeroClaw: the runtime that fits.”

---

## 7. Legal Tech and Access to Justice

**OpenClaw pain points:**
- Security and credential risks for sensitive client data
- Unpredictable behavior; legal aid needs auditability
- Skill supply chain = compliance risk

**ZeroClaw advantages:**
- Self-hosted, auditable
- Explicit errors; no silent fallbacks
- Skill packs as documented, reviewed code — not arbitrary installs
- CONTRIBUTING and docs support “information only, human review” framing

**Content angle:** “Legal tech, access to justice: self-hosted, auditable, no lock-in. Build RAG for legal docs; human review built in.”

---

## Content and Landing Cross-Links

- **Comparison pages:** `landing/compare/zeroclaw-vs-openclaw.html` (and vs NanoBot, PicoClaw)
- **Benchmark:** `landing/index.html#benchmark`
- **Docs:** `docs/security/`, `docs/hardware/`, `docs/operations-runbook.md`
- **Hackathon:** `docs/hackathon-content/builder-segments.md` (legal tech, makers)

---

## Cross-Links

- **Security incidents:** [openclaw-security-incidents.md](openclaw-security-incidents.md) — nightmare scenarios, CVEs, content angles
- **Viral map:** [openclaw-viral-map.md](openclaw-viral-map.md) — OpenClaw playbook → ZeroClaw mapping
- **Viral playbook:** [openclaw-viral-playbook.md](openclaw-viral-playbook.md) — full tactics and lessons

## Sources (for citations)

- ZDNET: “OpenClaw is a security nightmare”
- Infosecurity Magazine: “Six New OpenClaw Vulnerabilities”
- OpenClaw Radar: “Real-World Insights on Using OpenClaw with LLMs”
- Snyk: ClawHub malicious skills, Atomic Stealer
- Byterover: “5 Common Problems OpenClaw Users Hit After Setup”
- LikeClaw: “OpenClaw Security Issues 2026”
- OpenClaw Pulse: “OpenClaw on Raspberry Pi”
- The Biggish: “22% enterprise deployments unauthorized”
- WIRED: “Meta and Tech Firms Restrict OpenClaw”
