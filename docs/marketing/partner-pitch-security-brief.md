# Partner Pitch: ZeroClaw Security Brief

One-pager for pitching partners: OpenClaw security risks (incidents), why ZeroClaw is more secure, and content angles. Use for partner calls, email intros, and marketing content planning.

Last updated: **February 18, 2026**.

---

## OpenClaw Security Incidents (Summary)

| Category | Facts | Source |
|----------|-------|--------|
| **Malicious skills** | 900+ malicious on ClawHub (~20%); 341 confirmed (Atomic Stealer, credential harvesters); 335 in ClawHavoc campaign; 36% prompt injection vulns | Bitdefender, Koi Security, VirusTotal |
| **One-click RCE** | CVE-2026-25253 (CVSS 8.8) — token exfil from gateway; CVE-2026-24763 Docker sandbox escape; CVE-2026-25157 SSH injection | Snyk, GitLab Advisory |
| **Exposed instances** | 135,000+ on public internet; 93.4% exploitable; 15,000+ RCE-vulnerable; default bind 0.0.0.0 | SecurityScorecard STRIKE |
| **Plaintext creds** | API keys in ~/.clawdbot; .bak files harvestable; DataBridge CVE-2026-1847 bypassed sandbox for env vars; Moltbook 1.5M tokens exposed | Wiz, advisories |
| **Enterprise shadow AI** | 22% unauthorized deployments; >50% privileged access; shadow AI +$670K breach cost; no IT visibility | Token Security, IBM |
| **Vulnerability cluster** | 6+ CVEs (SSRF, path traversal, mDNS credential interception, token replay); opt-out security; broad trust | Endor Labs, advisories |
| **Financial loss** | $16M crypto scam (rebrand hijack); $500k+ ClawHub stolen crypto; Moltbook 1.5M tokens; Bitget key resets; shadow AI +$670K breach cost | ClawdHost, aInvest, Wiz, IBM |

---

## Why ZeroClaw Is More Secure

| Risk | OpenClaw | ZeroClaw |
|------|----------|----------|
| **Skill marketplace** | ClawHub: 900+ malicious, one-click install | No marketplace; extend via traits; each addition audited |
| **Bind** | Default 0.0.0.0:18789 | Localhost by default; tunnel for public |
| **Credentials** | Plaintext in ~/.clawdbot | Encrypted secret store |
| **RCE vector** | One-click via malicious link; token exfil | Pairing; deny-by-default bind; no arbitrary code install |
| **Sandbox** | Opt-out; documented bypasses | Sandboxed tool execution; allowlists from day one |
| **Enterprise** | Shadow AI; no visibility | Pairing, audit logs, discoverable |
| **Memory safety** | TypeScript | Rust — no segfaults, no data races |

---

## Elevator Pitch (30 sec)

> "OpenClaw had 135,000 exposed instances, 900 malicious skills, and one-click RCE. ZeroClaw was built secure from day one: no skill marketplace, encrypted secrets, localhost by default, pairing, sandbox. We run on $10 hardware with &lt;5MB RAM. Partners get a runtime that doesn't become a liability."

---

## Partner Pitch One-Liners

- **For enterprise:** "22% of enterprises had unauthorized AI. ZeroClaw: pairing, audit logs, no shadow installs."
- **For security-conscious:** "No plaintext API keys. No one-click RCE. No 135K exposed instances. ZeroClaw: secure by default."
- **For IoT/edge:** "OpenClaw needs a Mac Mini. ZeroClaw runs on $10 boards. Same agent use case, 99% less surface area."
- **For compliance:** "Encrypted secrets, audit trail, self-hosted. ZeroClaw fits HIPAA and regulated workflows."
- **For crypto/trading:** "$16M scam, $500k+ stolen, Bitget key resets. ZeroClaw: no skill marketplace, no arbitrary installs."

---

## Content Ideas (Security-Focused)

### Blog / long-form

| Title | Angle |
|-------|-------|
| "The OpenClaw Security Wake-Up Call" | Timeline of 135K exposed, 900 malicious, CVEs; what went wrong; how ZeroClaw avoids each |
| "Secure AI Agents: Defaults That Don't Bite" | Bind, secrets, sandbox, no marketplace — architecture lesson |
| "Enterprise Shadow AI: Discover, Govern, Replace" | 22% unauthorized; how to inventory; ZeroClaw as governed option |
| "From CVE to Design: Why ZeroClaw Has No Skill Marketplace" | Supply-chain risk vs extensibility; trait-based trade-off |
| "135K Exposed to Zero: How ZeroClaw's Defaults Avoid the OpenClaw Trap" | Contrast piece; localhost, tunnel, pairing |
| "ClawHub's 20% Malicious: Extend by Trait, Not by Install" | No marketplace angle |

### One-pagers / fact sheets

| Format | Use |
|--------|-----|
| "OpenClaw Security Incidents — One-Pager" | Partner handout; incidents + ZeroClaw contrast |
| "ZeroClaw Security Model" | Architecture: pairing, sandbox, secrets, bind |
| "Enterprise Checklist: ZeroClaw vs OpenClaw" | Side-by-side for evaluators |

### Video / demo

| Format | Angle |
|--------|-------|
| "Break the bot" public demo | Try to break sandbox; trust signal |
| "ZeroClaw security model in 5 min" | Pairing, allowlist, encrypted secrets walkthrough |
| "Why we built ZeroClaw secure first" | Narrative; incidents as motivation |

### Social / short-form

| Format | Hook |
|--------|------|
| X thread | "10 ways ZeroClaw avoids the OpenClaw security trap" |
| LinkedIn | "22% of enterprises had unauthorized AI. Here's what we built instead." |
| Reddit (r/devops, r/selfhosted) | "Switching from OpenClaw — security comparison" |

---

## Headlines (Copy-Ready)

- "OpenClaw: 135K Exposed, 900 Malicious Skills. ZeroClaw: No Marketplace, Localhost by Default."
- "One-Click RCE, Plaintext Credentials, Shadow AI: Why We Built ZeroClaw Secure First."
- "ClawHub's 20% Malicious. ZeroClaw: Extend by Trait, Not by Install."
- "From 135K Exposed to Zero: How ZeroClaw's Defaults Avoid the OpenClaw Security Trap."

---

## Partner Conversation Flow

1. **Hook:** "Have you seen the OpenClaw security headlines? 135K exposed, 900 malicious skills."
2. **Contrast:** "We built ZeroClaw secure from day one: no marketplace, encrypted secrets, localhost by default."
3. **Proof:** "We run on $10 hardware, &lt;5MB RAM. Same agent use cases — edge, IoT, enterprise — without the attack surface."
4. **Ask:** "Would a security one-pager or technical deep-dive be useful for your evaluation?"

---

## Do / Don't

- **Do:** Cite numbers (135K, 900, 341, CVEs); frame as user/enterprise safety; link to sources.
- **Don't:** Fear-monger; claim "unhackable"; attack OpenClaw maintainers; ignore their patches.

---

## Cross-Links

- [openclaw-security-incidents.md](openclaw-security-incidents.md) — full incident detail, sources
- [openclaw-pain-points.md](openclaw-pain-points.md) — pain points, ZeroClaw advantages
- [enterprise-health-iot-playbook.md](enterprise-health-iot-playbook.md) — enterprise messaging
- [landing/compare/zeroclaw-vs-openclaw.html](../../landing/compare/zeroclaw-vs-openclaw.html) — public comparison page
