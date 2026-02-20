# OpenClaw Security Incidents — Angles for ZeroClaw Positioning

Documented security incidents, nightmare scenarios, and CVEs. Use these angles to position ZeroClaw as the secure alternative—without name-calling. Factual, citable, contrast-focused.

Last updated: **February 18, 2026**.

---

## Executive Summary

OpenClaw’s rapid growth coincided with severe security fallout: 135,000+ exposed instances, 900+ malicious skills (20% of ClawHub), one-click RCE, credential theft, and enterprise “shadow AI” risk. ZeroClaw was designed with secure-by-default architecture from day one—no skill marketplace, encrypted secrets, pairing, sandbox, deny-by-default bind.

---

## 1. Malicious Skills Epidemic

### Incident facts

- **~900 malicious skills** on ClawHub (≈20% of ecosystem) — Bitdefender, VirusTotal
- **341 confirmed malicious** (Koi Security) — majority deliver **Atomic Stealer (AMOS)** to macOS
- **335 skills** tied to **ClawHavoc campaign**: fake errors, base64-encoded commands, credential exfil
- **Typosquatting**: e.g. “aslaep123” vs “asleep123”
- **354 malicious packages** uploaded by single user “hightower6eu” in automated blitz
- **36% of ClawHub skills** have prompt injection vulnerabilities

### Attack patterns

| Campaign | Method | Payload |
|----------|--------|---------|
| **Credential exfil** | Target `~/.clawdbot/.env` | Plain-text API keys (OpenAI, Anthropic, AWS) |
| **Hidden backdoor** | Fake “Apple Software Update” during install | Encrypted tunnel to attacker infra |
| **AuthTool** | Dormant until specific prompt | Reverse shell on natural-language trigger |
| **ClawHavoc** | Social engineering, fake errors | Atomic Stealer; credentials, browser data, crypto wallets |

### ZeroClaw angle

**“No skill marketplace. No arbitrary installs.”** ZeroClaw extends via traits and factory registration. Each Provider, Channel, Tool, Peripheral is reviewed code. No ClawHub-equivalent; no one-click install of third-party code. Content: “ZeroClaw: extend by trait, not by install. Every integration is auditable.”

---

## 2. One-Click Remote Code Execution

### Incident facts

- **CVE-2026-25253** (CVSS 8.8): One-click RCE via auth token exfil from `gatewayUrl`
- Attacker sends malicious link; victim’s browser steals token → full agent control
- **Works even on localhost-only** configs (victim browser initiates connection)
- **CVE-2026-24763** (CVSS 8.8): Docker sandbox escape via PATH manipulation
- **CVE-2026-25157** (CVSS 7.8): SSH command injection in macOS app via malicious project path

### ZeroClaw angle

**“Pairing, deny-by-default bind, no gateway token exfil vector.”** ZeroClaw: pairing codes, `allow_public_bind = false` default, tunnel (Tailscale/Cloudflare/ngrok) for public exposure. No skills install flow = no equivalent RCE vector. Content: “Built to avoid one-click RCE: pairing, tunnel, no arbitrary code install.”

---

## 3. Exposed Instances

### Incident facts

- **135,000+ instances** exposed on public internet (SecurityScorecard STRIKE)
- **42,665–135,000** range across reports; number grew as scanning continued
- **93.4%** of exposed instances vulnerable to exploitation
- **15,000+** vulnerable to remote code execution
- **82 countries** affected
- **Root cause**: Default bind `0.0.0.0:18789` (all interfaces); no password or TLS by default

### ZeroClaw angle

**“Bind to localhost by default. Tunnel for public.”** ZeroClaw defaults: `allow_public_bind = false`; explicit opt-in for public bind. Docs: use tunnel (Tailscale, Cloudflare, ngrok) for WhatsApp webhook or external clients. Content: “ZeroClaw: localhost by default. Tunnel when you need public. No 135K exposed instances by default.”

---

## 4. Plaintext Credentials

### Incident facts

- API keys in **plaintext** in `~/.clawdbot` (or `~/.openclaw/credentials/`)
- **.bak files** preserve old credentials; harvestable by malicious skills
- **DataBridge (CVE-2026-1847)**: Command injection bypassed sandbox, accessed env vars with API keys
- **Moltbook Supabase leak** (Wiz): 1.5M API tokens, 35K emails, private messages exposed

### ZeroClaw angle

**“Encrypted secret store. No plaintext.”** ZeroClaw: encrypted secret store; no credentials in config or env by default. Content: “No plaintext API keys. ZeroClaw encrypts secrets at rest.”

---

## 5. Enterprise Shadow AI

### Incident facts

- **22%** of enterprise customers had **unauthorized** OpenClaw deployments (Token Security)
- **>50%** granted privileged access
- **63%** of orgs with AI-related breaches lacked AI governance (IBM)
- Shadow AI added **~$670K** to breach costs (IBM)
- Employees install via single-line command; no approval, no SOC visibility
- Bitdefender: OpenClaw seen in business environments on managed endpoints

### ZeroClaw angle

**“Discoverable, auditable, deny-by-default.”** ZeroClaw: pairing, allowlists, audit logging, sandbox. No skill marketplace = smaller supply-chain footprint. Content: “Enterprise-ready: pairing, audit logs, no shadow installs. Govern what runs.”

---

## 6. Vulnerability Cluster (Early 2026)

### CVEs (from public advisories)

| CVE | Severity | Issue |
|-----|----------|-------|
| CVE-2026-25253 | 8.8 | One-click RCE via token exfil |
| CVE-2026-24763 | 8.8 | Docker sandbox escape |
| CVE-2026-25157 | 7.8 | SSH command injection (macOS) |
| CVE-2026-26323 | — | Command injection in maintainer scripts |
| CVE-2026-26327 | — | Insecure mDNS/DNS-SD credential interception |
| CVE-2026-26317 | — | Metadata validation → privilege escalation |
| CVE-2026-26329 | — | Token handling → replay attacks |
| CVE-2026-1847 | — | DataBridge: sandbox bypass, env var access |

### Additional vectors

- **SSRF, missing auth, path traversal** (6 vulns, Endor Labs)
- **Opt-out security**: allowlist of approved commands; documented bypasses
- **Long-lived process** with broad filesystem, shell, network access

### ZeroClaw angle

**“Secure by default. Sandbox, allowlist, fail-fast.”** ZeroClaw: sandboxed tool execution, allowlists, resource limits, memory-safe Rust. Content: “Designed to avoid the vulnerability cluster: sandbox, allowlist, no broad trust.”

---

## 7. Content Angles (Copy-Ready)

### Headlines

- “OpenClaw: 135K Exposed Instances, 900 Malicious Skills. ZeroClaw: No Marketplace, Localhost by Default.”
- “One-Click RCE, Plaintext Credentials, Shadow AI: Why We Built ZeroClaw Secure First.”
- “ClawHub’s 20% Malicious Skills. ZeroClaw: Extend by Trait, Not by Install.”
- “From 135K Exposed to Zero: How ZeroClaw’s Defaults Avoid the OpenClaw Security Trap.”

### One-Liners

- “OpenClaw’s skill marketplace led to 900+ malicious packages. ZeroClaw has no marketplace—extend via reviewed traits.”
- “135,000+ OpenClaw instances exposed. ZeroClaw binds to localhost by default.”
- “Plaintext API keys in ~/.clawdbot. ZeroClaw uses an encrypted secret store.”
- “One-click RCE via malicious link. ZeroClaw: pairing, tunnel, no arbitrary code install.”

### Blog / Video Angles

1. **“The OpenClaw Security Wake-Up Call”** — Timeline of incidents; what went wrong; how ZeroClaw’s design avoids each.
2. **“Secure AI Agents: Defaults That Don’t Bite”** — Bind, secrets, sandbox, no marketplace. Position as architecture lesson.
3. **“Enterprise Shadow AI: Discover, Govern, Replace”** — How to inventory; policy; ZeroClaw as governed option.
4. **“From CVE to Design: Why ZeroClaw Has No Skill Marketplace”** — Trade-off: extensibility vs supply-chain risk.

---

## 8. Do / Don’t

**Do:**

- Cite specific numbers (135K, 900, 341, CVEs) with sources
- Frame as “what we learned” and “how ZeroClaw is designed”
- Lead with user/enterprise safety, not competitor bashing
- Link to OpenClaw’s own advisories and responses

**Don’t:**

- Use fear-mongering or sensational language
- Claim ZeroClaw is “unhackable” or “100% secure”
- Attack OpenClaw maintainers personally
- Ignore that OpenClaw has since added VirusTotal scanning and patches

---

## Sources

- Bitdefender: OpenClaw exploitation in enterprise; ClawHavoc, AuthTool campaigns
- Koi Security: 341 malicious ClawHub skills
- SecurityScorecard STRIKE: 135K+ exposed instances
- Snyk, GitLab Advisory: CVE-2026-25253
- CyberDesserts: OpenClaw security risks (Feb 2026)
- The Hacker News: One-click RCE, Moltbook Supabase exposure
- VirusTotal: 3,016+ skills analysed, hundreds malicious
- IBM: AI breach cost, governance gap
- Palo Alto Unit 42: “Lethal trifecta” (data + untrusted content + external comms)
