# Crypto Community Outreach DMs — x402 & Agentic Payments

DM templates for recruiting contributors to integrate x402, agentic payments, and smart account wallets into ZeroClaw. Tailored for Circle Alliance, Base Batches, x402 Discord, DePIN, Superteam, Solana ecosystem, and wallet builders.

Last updated: **February 18, 2026**.

---

## Key Links (use in all DMs)

| Resource | URL |
|----------|-----|
| **Repo** | https://github.com/zeroclaw-labs/zeroclaw |
| **Landing** | https://zeroclaw.dev |
| **Quick start** | https://github.com/zeroclaw-labs/zeroclaw#quick-start |
| **x402 outline** | https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md |
| **Compare vs OpenClaw** | https://zeroclaw.dev/compare/zeroclaw-vs-openclaw.html |

---

## Why ZeroClaw vs OpenClaw (use sparingly, stay factual)

- **Scale:** OpenClaw needs >1GB RAM, >500s startup; ZeroClaw runs on <5MB RAM, <10ms startup, $10 hardware.
- **Security:** OpenClaw: 341 malicious skills, plaintext creds in ~/.clawdbot, no sandbox; ZeroClaw: no marketplace attack surface, encrypted secrets, pairing, sandbox from day one.
- **Agentic payments:** OpenClaw wasn’t built for crypto or agentic payments; no x402 path. ZeroClaw is trait-driven, runs on edge, and designed for x402/agentic wallet integration.
- **Edge/DePIN:** OpenClaw crashes on Pi Zero, needs Pi 5 8GB; ZeroClaw runs on Pi Zero 2, Pi 4 1GB, $10 boards.

---

## 1. Circle Alliance Partner Program

**Audience:** Partners and builders in USDC ecosystem; stablecoin, payments, financial inclusion.

**Channel:** Circle Alliance Discord, partner intros, Circle events.

### DM A — Partnership lead

> Hey — we’re building ZeroClaw, a Rust agent runtime that runs on $10 hardware with <5MB RAM. We’re integrating x402 so agents can pay for APIs (and each other) in USDC. No bank accounts, no API keys — payment is the auth.
>
> We’d love to connect with Alliance partners who want agents that pay/earn per call. ZeroClaw is secure-by-default (no OpenClaw-style malicious-skill attack surface), runs on edge, and fits USDC use cases like micropayments, DePIN nodes, and agent-to-agent commerce.
>
> Repo: https://github.com/zeroclaw-labs/zeroclaw  
> x402 outline: https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md  
>
> Would you be open to a quick chat? We’re looking for contributors to ship the x402 tool and gateway.

### DM B — Technical contributor

> Hi — ZeroClaw is a Rust agent runtime (<5MB RAM, runs on Pi Zero). We’re adding x402 support so agents pay for APIs in USDC — HTTP 402, facilitator, PAYMENT-SIGNATURE. Brian Armstrong’s “AI agents can’t get bank accounts but can get crypto wallets” angle fits us well.
>
> We need contributors to build: (1) x402 HTTP tool (handle 402, pay, retry), (2) Gateway 402 (charge per webhook/task). Everything is trait-based; clean integration points.
>
> Unlike OpenClaw (TypeScript, >1GB RAM, no crypto path, 341 malicious skills), ZeroClaw is built for edge + agentic payments from the ground up.
>
> https://github.com/zeroclaw-labs/zeroclaw  
> https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md

---

## 2. Base Batches / Agentic Wallets / x402 Builders

**Audience:** Coinbase CDP, x402 Discord, Agentic Wallets, Base ecosystem devs.

**Channel:** x402 Discord, Coinbase CDP Discord, Base builder channels.

### DM A — x402 protocol dev

> Hey — we’re shipping x402 into ZeroClaw (Rust agent runtime, <5MB RAM, runs on $10 boards). Looking for contributors to build the HTTP 402 tool and gateway so agents pay for APIs and each other.
>
> Use cases: DePIN node brain (pay per task), drone dispatcher pays per mission, sensor network pay-per-read, inference marketplace. All agent-to-agent, no central billing.
>
> ZeroClaw is the runtime side; we plug into Coinbase CDP facilitator, Agentic Wallets, Base. OpenClaw has no x402 path and wasn’t built for this — we are.
>
> Spec: https://x402.org  
> Our outline: https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md  
> Repo: https://github.com/zeroclaw-labs/zeroclaw

### DM B — Agentic Wallets / Base builder

> Hi — building an agent runtime that speaks x402? ZeroClaw is Rust, <5MB RAM, runs on Pi/edge. We’re integrating x402 so agents pay for APIs (and each other) via facilitator + USDC.
>
> Need help implementing: (1) x402 tool (client that handles 402, pays, retries), (2) Gateway 402 (charge per request). Trait-driven, easy to extend.
>
> OpenClaw: TypeScript, >1GB RAM, no agentic payment path, security issues (malicious skills, plaintext creds). ZeroClaw: built for edge + payments, secure by default.
>
> https://github.com/zeroclaw-labs/zeroclaw  
> x402 outline: https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md

### DM C — Hackathon / bounty hunter

> Hey — ZeroClaw hackathon track: x402 integration. Add the HTTP 402 tool or gateway, get agents paying each other. Rust, trait-based, clear scope.
>
> We run on $10 hardware, <5MB RAM. OpenClaw needs a Mac Mini and has no crypto path. We’re built for agentic payments from day one.
>
> Repo: https://github.com/zeroclaw-labs/zeroclaw  
> Outline: https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md  
> Down to contribute?

---

## 3. DePIN / Node Operators

**Audience:** DePIN builders, node operators, edge compute.

**Channel:** DePIN Discords, Fleek, Render, node communities.

### DM A — DePIN node builder

> Hey — ZeroClaw runs on $10 boards with <5MB RAM. We’re adding x402 so your node can charge per task: requester pays, node earns, no API keys or invoices. “DePIN node brain” — agent on device, pay-per-task.
>
> OpenClaw can’t do this: >1GB RAM, crashes on Pi Zero, no x402. ZeroClaw fits edge + micropayments. Looking for contributors to ship the x402 tool and gateway.
>
> https://github.com/zeroclaw-labs/zeroclaw  
> https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md

### DM B — Edge / infra focused

> Hi — edge agent runtime here. ZeroClaw: Rust, 3.4MB binary, <10ms startup, <5MB RAM. We’re integrating x402 so agents pay for APIs and each other. Perfect for DePIN: node earns when it works.
>
> Need contributors for x402 client tool and 402 gateway. Trait-driven, well-documented. OpenClaw is the opposite: heavy, insecure, no agentic payment path.
>
> Repo: https://github.com/zeroclaw-labs/zeroclaw

---

## 4. Smart Account / Wallet Developers

**Audience:** ERC-4337, Account Abstraction, smart account, wallet-as-signer devs.

**Channel:** AA Discord, wallet builder Discords, Stackup, Biconomy, Safe.

### DM A — Smart account dev

> Hey — we’re integrating x402 into ZeroClaw (Rust agent runtime, edge). Agents will pay for APIs via facilitator; we need wallet/signer integration for the buyer side. Smart accounts, delegated signers, or Agentic Wallets — all in scope.
>
> ZeroClaw is trait-based: add a wallet adapter, plug into facilitator, done. Runs on $10 hardware. OpenClaw has no path to agentic payments and wasn’t built for crypto.
>
> Looking for contributors who know AA or agentic wallet flows. Repo: https://github.com/zeroclaw-labs/zeroclaw — outline: https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md

### DM B — Wallet-as-allowlist / identity

> Hi — ZeroClaw supports allowlists, pairing, and gateway auth. We’re exploring wallet-derived identity (signed payload, wallet as allowlist entry) for crypto-native deployments. x402 integration is in progress.
>
> If you’ve built smart accounts or agentic wallets, we’d love your input. ZeroClaw: Rust, secure-by-default, no OpenClaw-style security issues. Trait-driven so wallet logic plugs in cleanly.
>
> https://github.com/zeroclaw-labs/zeroclaw

---

## 5. Superteam (Solana Talent Layer)

**Audience:** Superteam members — bounty hunters, Instagrant applicants, full-time Solana builders. Regional hubs: India, Vietnam, Turkey, Germany, Mexico, UK, UAE, Israel, Nigeria.

**Channel:** Superteam Discord, Superteam Earn bounties, regional hub channels, collaborate page (superteam.fun/collaborate).

### DM A — Bounty / Instagrant seeker

> Hey — ZeroClaw is a Rust agent runtime (<5MB RAM, runs on $10 boards). We’re integrating x402 so agents pay for APIs and each other. Looking for contributors for the x402 tool and gateway — fits Superteam bounty scope (~$1,500 USDC).
>
> Use cases: DePIN node brain, drone pay-per-mission, sensor pay-per-read. OpenClaw can’t do this — no crypto path, >1GB RAM, insecure. ZeroClaw is built for agentic payments.
>
> Repo: https://github.com/zeroclaw-labs/zeroclaw  
> x402 outline: https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md  
> Open to posting as a bounty or Instagrant — DM if you want to build.

### DM B — Regional hub lead (India, Vietnam, etc.)

> Hi — ZeroClaw is adding x402 for agent-to-agent payments. We’d love Superteam [region] builders to contribute: x402 HTTP tool, Gateway 402, or wallet integration. Rust, trait-based, clear scope.
>
> ZeroClaw runs on edge ($10 boards); fits DePIN, micropayments, agentic commerce. OpenClaw wasn’t built for this. Looking for contributors — happy to discuss bounty/Instagrant format for your hub.
>
> https://github.com/zeroclaw-labs/zeroclaw

### DM C — Full-time Solana builder

> Hey — building on Solana? ZeroClaw is integrating x402 so agents pay for APIs (and each other) via facilitator. We need the tool and gateway — Rust, well-documented. Fits agentic payments, DePIN, micropayments.
>
> OpenClaw: no crypto path, insecure, doesn’t scale. ZeroClaw: built for edge + payments. Repo: https://github.com/zeroclaw-labs/zeroclaw — outline: https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md

---

## 6. Solana Ecosystem (Builders Club, Colosseum, Foundation)

**Audience:** Solana Builders Club, Colosseum hackathon/accelerator teams, Solana Foundation developer program participants.

**Channel:** Solana Builders Club Telegram, Colosseum Discord, Solana developer Discord, builder events.

### DM A — Colosseum hackathon team

> Hey — building for Colosseum? ZeroClaw is a Rust agent runtime that runs on $10 hardware. We’re adding x402 so agents pay for APIs — fits Solana + AI use cases: DePIN nodes, agentic commerce, micropayments.
>
> OpenClaw has no crypto path and doesn’t scale. ZeroClaw: <5MB RAM, secure, trait-driven. Need contributors for x402 tool and gateway. Could fit as a hackathon project or post-hackathon integration.
>
> Repo: https://github.com/zeroclaw-labs/zeroclaw  
> x402: https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md

### DM B — Solana Builders Club / Foundation dev

> Hi — ZeroClaw is a Rust agent runtime for edge + agentic payments. We’re integrating x402 (HTTP 402, facilitator, USDC). Looking for Solana builders who want to add: (1) x402 tool, (2) Gateway 402, or (3) Solana wallet integration.
>
> Use cases: DePIN node brain, pay-per-task, agent-to-agent commerce. OpenClaw can’t do this. We’re built for it. https://github.com/zeroclaw-labs/zeroclaw

### DM C — Solana ecosystem partnership

> Hey — ZeroClaw runs on $10 boards with <5MB RAM. We’re shipping x402 so agents pay for APIs and each other. Would love to connect with Solana ecosystem projects (Jupiter, Phantom, Raydium, etc.) interested in agentic payments or DePIN. We need contributors to build the integration. https://zeroclaw.dev

---

## 7. General Crypto / Agentic Payments Community

**Audience:** Crypto Twitter, “AI + crypto” Discords, agentic payment enthusiasts.

**Channel:** DMs, reply threads, community servers.

### DM A — Concise (Twitter/Discord)

> ZeroClaw: Rust agent runtime, <5MB RAM, runs on $10 boards. Adding x402 so agents pay for APIs and each other. Need contributors. OpenClaw: no crypto path, insecure, doesn’t scale. We’re built for agentic payments. https://github.com/zeroclaw-labs/zeroclaw

### DM B — Narrative

> Hey — Brian Armstrong’s “AI agents can’t get bank accounts but can get crypto wallets” — we’re building the runtime for that. ZeroClaw: Rust, edge, x402 integration. Agents pay for APIs, pay each other, no API keys. OpenClaw wasn’t built for this and has major security/scale issues. Looking for x402 and wallet contributors. Repo + outline in bio / below.

### DM C — Technical deep-dive hook

> ZeroClaw + x402: agent calls API → 402 → pays via facilitator → retries with PAYMENT-SIGNATURE → result. All on $10 hardware, <5MB RAM. OpenClaw can’t do this. We need the tool and gateway — trait-based, clear scope. https://github.com/zeroclaw-labs/zeroclaw/blob/main/docs/marketing/x402-agents-paying-agents.md

---

## Persona Summary

| Persona | Best DM set | Tone |
|---------|-------------|------|
| **Circle Alliance / partnership** | Section 1 | Professional, ecosystem, USDC |
| **x402 protocol dev** | Section 2A | Technical, spec, use cases |
| **Agentic Wallets / Base** | Section 2B, 2C | Integration, hackathon |
| **DePIN node builder** | Section 3 | Edge, earn-per-task |
| **Smart account / wallet dev** | Section 4 | Wallet adapter, AA, signer |
| **Superteam (bounty/Instagrant)** | Section 5 | Bounty scope, regional hubs |
| **Solana ecosystem** | Section 6 | Colosseum, Builders Club, Foundation |
| **General crypto** | Section 7 | Short, punchy, narrative |

---

## Do / Don’t

- **Do:** Link repo and x402 outline; mention use cases; stay factual on OpenClaw contrast.
- **Don’t:** Claim Coinbase/Circle endorsement; oversell token or chain; spam; use aggressive or personal attacks.
- **Do:** Tailor length to channel (Discord vs Twitter DMs).
- **Don’t:** Send identical copy to every community; adapt tone per persona.

---

## Cross-Links

- [x402-agents-paying-agents.md](x402-agents-paying-agents.md) — technical outline, flows, use cases
- [influencer-and-narrative-angles.md](influencer-and-narrative-angles.md) — Brian Armstrong / x402 angle
- [build-personas.md](build-personas.md) — Crypto Sam
- [openclaw-pain-points.md](openclaw-pain-points.md) — OpenClaw vs ZeroClaw (full)
- [hackathon-content/builder-segments.md](../hackathon-content/builder-segments.md) — crypto/DePIN segment
