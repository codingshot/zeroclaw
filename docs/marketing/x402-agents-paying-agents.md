# ZeroClaw Agents Paying Each Other — x402 Outline

How ZeroClaw agents pay one another using the x402 (HTTP 402 Payment Required) protocol. Agent-to-agent micropayments without bank accounts or API keys.

Last updated: **February 18, 2026**.

---

## 1. x402 Quick Recap

- **Protocol:** HTTP 402 + payment instructions in headers; client pays (e.g. USDC via facilitator); retries with `PAYMENT-SIGNATURE`
- **No accounts:** No API keys, KYC, or subscriptions — payment is the auth
- **Micropayments:** Down to ~$0.001 per call; instant settlement on Base/Solana/etc.
- **AI-native:** Agents autonomously discover, negotiate, and pay for services
- **Spec:** [x402.org](https://x402.org/) / [Coinbase CDP](https://docs.cdp.coinbase.com/x402/welcome)

---

## 2. Agent → Agent Flow (ZeroClaw to ZeroClaw)

### Overview

| Role | ZeroClaw instance | x402 surface |
|------|-------------------|--------------|
| **Buyer (payer)** | Agent A on Pi/board | x402 Tool (HTTP client that handles 402, pays, retries) |
| **Seller (payee)** | Agent B on Pi/board | Gateway 402 or tool that returns 402 until paid |

**Flow:**
1. Agent A needs a service from Agent B (e.g. "run sensor read", "execute drone mission")
2. Agent A's tool calls Agent B's HTTP endpoint
3. Agent B responds with 402 + payment instructions (amount, facilitator, chain)
4. Agent A's x402 tool pays via facilitator (USDC, etc.)
5. Agent A retries with PAYMENT-SIGNATURE header
6. Agent B verifies payment; returns 200 + result
7. Agent A gets result; continues its task

### Technical Components

| Component | Buyer (Agent A) | Seller (Agent B) |
|-----------|-----------------|------------------|
| **ZeroClaw** | Runtime with x402-enabled tool | Runtime with 402-capable gateway or tool |
| **Wallet** | Agentic wallet or delegated signer; holds USDC | Receives payment to configured address |
| **Facilitator** | Calls facilitator to sign/submit payment | Receives settlement from facilitator |
| **Endpoint** | Tool does HTTP GET/POST to B's URL | Gateway or tool exposes paid endpoint |

---

## 3. Use Cases: Agents Paying Agents

### 3.1 Drone Fleet — Dispatcher Pays Per Mission

| Agent | Role | Pays/Charges |
|-------|------|--------------|
| **Fleet dispatcher** (Pi at HQ) | Receives mission request; needs to execute on drone | Pays per mission |
| **Drone agent** (Pi on drone or ground station) | Executes mission; exposes paid API | Charges per mission |

**Flow:** Dispatcher's ZeroClaw calls `POST /mission` on drone agent → 402 → pays → retries → drone agent runs mission, returns result.

**Hook:** "One ZeroClaw pays another. No API key. No invoice."

---

### 3.2 Sensor Network — Consumer Pays Per Read

| Agent | Role | Pays/Charges |
|-------|------|--------------|
| **Aggregator agent** (Pi, gateway) | Needs sensor data from many nodes | Pays per read |
| **Sensor node agent** (Pi/ESP32 gateway) | Exposes sensor API | Charges per read (e.g. $0.01) |

**Flow:** Aggregator calls `GET /sensor/temperature` on node → 402 → micropayment → node returns value.

**Hook:** "Pay per sensor read. No subscription. No dashboard."

---

### 3.3 DePIN Node — Operator Gets Paid Per Task

| Agent | Role | Pays/Charges |
|-------|------|--------------|
| **Requester** (any ZeroClaw) | Needs compute, storage, or attestation from node | Pays per task |
| **Node agent** (ZeroClaw on DePIN hardware) | Runs task; exposes paid API | Charges per task |

**Flow:** Requester calls node's task endpoint → 402 → node gets paid → task runs → result returned.

**Hook:** "DePIN node brain: ZeroClaw that earns when it works."

---

### 3.4 Robot Handoff — Robot A Pays Robot B

| Agent | Role | Pays/Charges |
|-------|------|--------------|
| **Robot A** (low battery, needs help) | Requests Robot B to take over task | Pays for handoff |
| **Robot B** (available) | Accepts task; exposes paid "take over" endpoint | Charges for handoff |

**Flow:** Robot A calls Robot B's handoff API → 402 → pays → Robot B completes task.

**Hook:** "Robots that pay each other. No central coordinator."

---

### 3.5 Inference Marketplace — Agent Pays for LLM

| Agent | Role | Pays/Charges |
|-------|------|--------------|
| **Edge agent** (ZeroClaw on Pi) | Needs inference; local model not enough | Pays per request |
| **Inference seller** (ZeroClaw + LLM behind 402) | Serves inference; charges per token or request | Charges per call |

**Flow:** Edge agent's provider (or tool) calls inference API → 402 → pays → inference returned. Seller can be another ZeroClaw instance with a paid provider.

**Hook:** "Agent pays for inference. No API key. No monthly bill."

---

### 3.6 Tool Marketplace — Agent Pays for Tool Access

| Agent | Role | Pays/Charges |
|-------|------|--------------|
| **Consumer agent** | Needs specialized tool (e.g. custom data, premium API) | Pays per call |
| **Tool seller** (ZeroClaw with 402 gateway) | Exposes tool behind 402 | Charges per call |

**Flow:** Consumer's x402 tool calls seller's tool endpoint → 402 → pays → result.

**Hook:** "Tools as a service. Agent pays. Agent gets."

---

## 4. Technical Implementation Outline

### Buyer Side (Agent A)

| Piece | Description |
|-------|-------------|
| **x402 Tool** | `HttpRequestX402Tool` or extended `HttpRequestTool`; on 402 response, reads payment headers, calls facilitator, retries with PAYMENT-SIGNATURE |
| **Wallet / signer** | Agentic wallet or delegated key; holds USDC (or other); signs payment proof |
| **Config** | Facilitator URL, wallet/signer, default chain (e.g. Base) |
| **Tool schema** | URL, method, body; optional max amount; agent decides when to call |

### Seller Side (Agent B)

| Piece | Description |
|-------|-------------|
| **Gateway 402** | Middleware on `/webhook` or `/task` that returns 402 until valid PAYMENT-SIGNATURE; forwards to agent on success |
| **Or: Tool behind 402** | Tool that does work; HTTP wrapper returns 402 until paid |
| **Payment address** | Wallet address to receive payments; facilitator settles to it |
| **Pricing** | Per-request amount (or dynamic based on params); included in 402 headers |

### Facilitator

- Third-party (e.g. Coinbase CDP facilitator); verifies payment, settles on-chain
- Buyer and seller both interact with facilitator (or compatible implementation)
- ZeroClaw does not run facilitator; uses public or configured facilitator URL

---

## 5. Content Angles & Hooks

| Angle | Hook |
|-------|------|
| **Agent-to-agent economy** | "ZeroClaw agents pay each other. No bank. No API key." |
| **Edge micropayments** | "Run on a Pi. Pay another Pi. $0.001 per call." |
| **Decentralized coordination** | "Robots that pay each other — no central billing." |
| **DePIN ready** | "Node earns when it works. ZeroClaw + x402." |
| **Protocol-first** | "x402 is the HTTP of payments. ZeroClaw speaks it." |

---

## 6. Scenarios: Who Pays Whom

| Scenario | Payer agent | Payee agent | What's paid for |
|----------|-------------|-------------|-----------------|
| Drone mission | Dispatcher | Drone operator | One mission |
| Sensor read | Aggregator | Sensor node | One read |
| Inference | Edge agent | Inference provider | One request |
| Tool access | Consumer | Tool seller | One tool call |
| Robot handoff | Robot A | Robot B | Handoff task |
| Data fetch | Any | Data API | One query |
| Webhook delivery | Requester | Gateway operator | One webhook |

---

## 7. Multi-Agent Chains

**Agent A → Agent B → Agent C:** A pays B for a task; B pays C for a sub-task (e.g. inference). Each hop: 402 → pay → retry. ZeroClaw on both sides.

**Marketplace:** Multiple seller agents; buyer agent discovers (or is routed to) seller; pays; gets result. No central marketplace required — just HTTP + 402.

**Swarm:** N robots; each can pay any other for help. Consensus or leader election can use payment as "vote" or "bid."

---

## 8. Constraints & Caveats

- **Facilitator dependency:** Requires a facilitator (e.g. Coinbase CDP) or self-hosted compat; not fully trustless
- **Wallet funding:** Buyer agent needs funded wallet; operational concern
- **Latency:** Payment adds round-trip (facilitator, chain); may not suit ultra-low-latency use cases
- **Not yet built:** x402 tool and Gateway 402 are planned; not shipping today. This outline is for positioning and hackathon.

---

## 9. Cross-Links

- [use-cases-and-hackathon-plan.md](../use-cases-and-hackathon-plan.md) — Section 1.14 x402 integration
- [influencer-and-narrative-angles.md](influencer-and-narrative-angles.md) — Brian Armstrong / x402 angle
- [content-flows-and-devices.md](content-flows-and-devices.md) — Flow G (Crypto / x402)
- [build-personas.md](build-personas.md) — Crypto Sam
- x402 spec: [x402.org](https://x402.org/), [Coinbase CDP](https://docs.cdp.coinbase.com/x402/welcome)
