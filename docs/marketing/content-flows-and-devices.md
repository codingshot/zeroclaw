# Content Flows & Device Matrix — ZeroClaw

Multi-step content journeys and a device-by-device content matrix. Use to plan sequences that move users through awareness → interest → trial → advocacy.

Last updated: **February 18, 2026**.

---

## 1. Content Flows (High-Level)

Each flow is a sequence of content pieces; each piece has a goal and suggested channel.

### Flow A: Maker / Pi User (Maker Max)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "AI on a $10 board?" — hook image or 60s clip | Awareness | X, r/raspberry_pi, r/arduino |
| 2 | "ZeroClaw vs running Python on Pi" — comparison table | Interest | Blog, Reddit, HN |
| 3 | "15-min setup" tutorial + one-click bootstrap | Trial | Docs, landing, YouTube |
| 4 | "Telegram → blink LED" demo video | Conviction | YouTube, X, maker Discords |
| 5 | "I ran ZeroClaw on [device]" — UGC prompt, showcase | Advocacy | Reddit, newsletter, ecosystem page |

**Trigger:** Pi Day, new Pi release, "can't run OpenClaw on my Pi" frustration post.

---

### Flow B: OpenClaw Migrator (OpenClaw Omar)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "OpenClaw needs a Mac Mini. ZeroClaw needs a Pi Zero." — one-liner | Awareness | X, Reddit reply |
| 2 | Comparison page + benchmark chart (RAM, startup, binary) | Interest | Landing, SEO, r/selfhosted |
| 3 | "From OpenClaw to ZeroClaw: migration checklist" | Trial | Blog, docs |
| 4 | "Pairing codes vs OpenClaw skills" — security angle | Conviction | Blog, r/selfhosted |
| 5 | "I switched: here's what changed" — migration story | Advocacy | Reddit, HN, newsletter |

**Trigger:** OpenClaw security headline, Mac Mini sold out, "OpenClaw too heavy" post.

---

### Flow C: Enterprise / Ops (Enterprise Evan, Ops Jordan)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "Lightweight AI agent for runbooks — pairing, sandbox, audit" | Awareness | r/devops, r/sysadmin, LinkedIn |
| 2 | "ZeroClaw enterprise security model" blog | Interest | Blog, r/devops |
| 3 | "Deployment checklist: RBAC, secrets, network segmentation" | Trial | Docs, runbook |
| 4 | "HIPAA / SOC 2 considerations" (if health/regulated) | Conviction | Vertical playbook, whitepaper |
| 5 | Case study: "How [org] runs ZeroClaw for ops" | Advocacy | Blog, conference, reference |

**Trigger:** AI ops discussion, runbook automation, compliance questions.

---

### Flow D: Health Tech (Health Hannah)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "AI for medical devices: <5MB RAM, PHI on-device" | Awareness | Health tech Slack, HIMSS-adjacent |
| 2 | "HIPAA checklist for self-hosted AI agents" | Interest | Blog, HIPAA forums |
| 3 | "ZeroClaw + BAA provider (Azure, etc.)" setup | Trial | Docs, vertical playbook |
| 4 | Case study: screening assistant, patient info bot (info only) | Conviction | Med device conferences |
| 5 | "Medical device AI without the cloud" — reference | Advocacy | Health tech, HL7/FHIR |

**Trigger:** HIPAA question, medical device AI discussion, PHI-on-device need.

---

### Flow E: Wearables / Smart Glasses (Wearable Wade)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "Fitting an AI agent in <5MB — smart glasses, wearables" | Awareness | AR/VR Discord, r/Android |
| 2 | "ZeroClaw on wearables: peripheral trait, sensors" | Interest | Blog, hardware docs |
| 3 | "Add your board" — peripheral development guide | Trial | Docs, Hackaday |
| 4 | Demo: Telegram ↔ wearable prototype | Conviction | Video, maker events |
| 5 | "First AI on [obscure wearable]" — explorer angle | Advocacy | UGC, newsletter |

**Trigger:** Wearable AI discussion, AR glasses launch, "too heavy for device" post.

---

### Flow F: Rust Dev / Builder (Rust Ruth, AI Alex)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "Trait-based agent runtime in Rust — Provider, Channel, Tool" | Awareness | r/rust, Rust forums |
| 2 | "Why Rust for agents" — architecture blog | Interest | Blog, HN |
| 3 | "Add a Provider in a weekend" — contributor guide | Trial | Docs, contributing |
| 4 | "28+ providers, no Pinecone — memory in SQLite" | Conviction | Blog, comparison |
| 5 | "I added [Provider/Channel/Tool]" — PR spotlight | Advocacy | Newsletter, repo, Rust Weekly |

**Trigger:** "agent runtime in Rust" search, provider comparison, Pinecone cost discussion.

---

### Flow G: Crypto / x402 / DePIN (Crypto Sam)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "Agent payments at the edge — x402 + ZeroClaw" | Awareness | X, crypto dev Discord |
| 2 | "What if your agent paid for its own tools?" | Interest | Blog, DePIN communities |
| 3 | "ZeroClaw on $10 board + x402" — setup | Trial | Docs, tutorial |
| 4 | " micropayments on a Raspberry Pi" — demo | Conviction | Video, conference |
| 5 | "DePIN node brain: ZeroClaw + x402" — reference | Advocacy | DePIN docs, ecosystem |

**Trigger:** x402 news, Coinbase/Base dev, DePIN hardware discussion.

---

## 2. Content Flow Templates (Reusable)

### Short-loop (3 steps)

1. **Hook** — one image, one line, one spec (e.g. "3.4MB. <10ms. Pi Zero.")
2. **Proof** — benchmark or demo link
3. **CTA** — "Try it" or "Add your board"

**Use for:** X, Reddit, quick wins.

### Long-loop (5 steps)

1. **Awareness** — emotional or surprising hook
2. **Interest** — comparison, specs, pain relief
3. **Trial** — tutorial, one-click
4. **Conviction** — security, compliance, or demo
5. **Advocacy** — UGC, showcase, "I built"

**Use for:** Blog series, campaign, persona-specific journeys.

### Seasonal / Event loops

- **Pi Day:** Hook (Pi) → Comparison (Pi vs Mac Mini) → Tutorial (Pi 15 min) → UGC (Pi project)
- **New board launch:** Hook (device) → Benchmark (device) → Guide (device) → Showcase (device)
- **OpenClaw incident:** Hook (security) → Contrast (ZeroClaw) → Migration → Advocacy

---

## 3. Device Matrix

### Tier 1: Current / Viable (Documented, tested, primary content)

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **Raspberry Pi Zero 2** | 512MB | Sweet spot for "cheapest" | "AI on $15 hardware"; sellout narrative; Pi Day |
| **Raspberry Pi 4 (1GB–8GB)** | 1–8GB | 1GB viable; 4GB+ comfortable | "From 1GB to 8GB — all work"; migration from OpenClaw |
| **Raspberry Pi 5** | 4–8GB | Best performance | "ZeroClaw on Pi 5" — benchmark, video, tutorial |
| **Generic Linux SBC ($10+)** | varies | ARM, RISC-V, x86 | "$10 board challenge"; democratization |
| **VPS / cloud** | any | Standard deployment | "Same binary, anywhere"; self-hosted, runbooks |

**Content flows:** Flow A (Maker), Flow B (OpenClaw migrator). Primary: Pi 15-min, benchmark charts, comparison pages.

---

### Tier 2: Supported / In Design (Hardware docs exist)

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **STM32 Nucleo-F401RE** | MCU | Host-mediated; ZeroClaw on host, STM32 as peripheral | "Hardware-aware AI: ZeroClaw + STM32"; dev/debug workflow |
| **Arduino Uno R4 WiFi** | MCU | WiFi-enabled; edge-native potential | "Uno R4 + ZeroClaw" — Arduino maker audience |
| **ESP32** | varies | WiFi; edge-native in design | "ESP32 as agent host"; IoT, sensor projects |
| **Raspberry Pi (headless)** | as above | No display, SSH/Telegram | "Headless Pi: AI from your phone" |

**Content flows:** Flow E (Wearable Wade), robotics, IoT. Tutorial: Nucleo setup, Arduino setup, ESP32 datasheet.

---

### Tier 3: Potential / Aspirational (Not yet supported; positioning only)

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **Smart glasses** | low | Ray-Ban, etc.; need tiny runtime | "The runtime that fits in glasses"; <5MB RAM story |
| **Smartwatch** | very low | WearOS, etc.; constrained | "Edge AI for wearables" — future fit |
| **Handheld medical devices** | low | Screening, point-of-care | "Medical device AI without the cloud"; HIPAA |
| **RISC-V SBC** | varies | SiFive, etc.; open ISA | "ZeroClaw on RISC-V"; open hardware angle |
| **Orange Pi, Radxa, Rock Pi** | varies | Alternative SBCs | "Not just Raspberry Pi"; multi-board support |
| **Mac Mini** | 8GB+ | Contrast only — we don't need it | "OpenClaw needed this. We don't." |
| **Raspberry Pi 6** | TBD | Future | "First to run ZeroClaw on Pi 6" — launch tie-in |
| **Nvidia Jetson Nano** | 2GB | Edge AI classic | "Jetson + ZeroClaw" — robotics, vision |
| **BeagleBone** | 512MB | Long-standing SBC | "BeagleBone AI" — industrial, embedded |
| **Odroid, Banana Pi** | varies | Niche SBCs | "ZeroClaw on [X]" — explorer, UGC |

**Content flows:** Positioning, "what if," future narratives. Use for thought leadership, not承诺.

---

### Tier 4: Contrast / Competitor Devices

| Device | Role | Content angle |
|--------|------|---------------|
| **Mac Mini** | OpenClaw default; $599, sold out | "ZeroClaw doesn't need a Mac Mini"; cost democratization |
| **High-end GPU server** | Cloud inference; expensive | "Run locally; no GPU required for orchestration" |
| **Pinecone / Elasticsearch** | Memory backends | "SQLite. No Pinecone. No Elasticsearch." |

---

## 4. Content by Device (Quick Reference)

| Device | Primary content | Secondary | Avoid |
|--------|-----------------|-----------|-------|
| **Pi Zero 2** | "$10 AI"; Pi Day; sellout | Smallest footprint leaderboard | Over-claim if untested |
| **Pi 4** | 15-min tutorial; migration | Benchmark vs Pi 5 | "Needs 4GB" (1GB works) |
| **Pi 5** | Benchmark; performance | New Pi launch tie-in | Over-promise vs Pi 4 |
| **STM32** | "Hardware-aware AI"; Nucleo setup | Host-mediated workflow | Claim edge-native (host-only today) |
| **ESP32** | IoT, sensors; future edge-native | Datasheet, peripheral | Claim full support if in progress |
| **Arduino Uno R4** | Maker, WiFi | Uno + ZeroClaw | Over-state if early |
| **Smart glasses** | "<5MB fits"; positioning | Wearables playbook | Claim support until ready |
| **Medical devices** | HIPAA, PHI on-device | Vertical playbook | FDA, medical advice |
| **Generic $10 board** | Democratization; challenge | UGC, explorer | Fabricate specs |

---

## 5. Content Flow × Device Matrix

Pick a flow and a device to generate a concrete sequence.

| Flow | Best devices | Lead content |
|------|--------------|--------------|
| Maker (A) | Pi Zero 2, Pi 4, Pi 5, $10 board | 15-min tutorial, GPIO demo |
| OpenClaw (B) | Pi 4, Pi 5, VPS | Comparison, migration |
| Enterprise (C) | VPS, Pi (headless) | Security model, checklist |
| Health (D) | Pi, handheld (future), wearables (future) | HIPAA checklist, BAA setup |
| Wearables (E) | Smart glasses (future), ESP32, Arduino | Peripheral guide, <5MB story |
| Rust (F) | Any | Architecture, trait system |
| Crypto (G) | Pi, $10 board | x402 + edge |

---

## 6. Expansion Prompts

Use these to generate more content from this doc:

1. **"Create a 5-step content flow for [persona] targeting [device]"** — Use Flow A–G + Device Matrix.
2. **"What content do we need for [new device] launch?"** — Use Tier 2/3 device rows.
3. **"Draft the first 3 pieces of Flow [X] with specific copy"** — Use flow tables.
4. **"Add a new device to the matrix with content angles"** — Follow tier structure.
5. **"Map [seasonal event] to a content flow"** — Use Seasonal loops + Device Matrix.

---

## Cross-Links

- [content-strategy.md](content-strategy.md) — pillars, cadence, SEO
- [build-personas.md](build-personas.md) — persona definitions
- [viral-strategies-by-persona.md](viral-strategies-by-persona.md) — viral tactics per persona
- [raspberry-pi-outreach.md](raspberry-pi-outreach.md) — Pi communities, sellout events
- [enterprise-health-iot-playbook.md](enterprise-health-iot-playbook.md) — vertical playbooks
- [robotics-angle.md](robotics-angle.md) — robotics positioning
- [../hardware/README.md](../hardware/README.md) — hardware docs, datasheets
- [../hardware-peripherals-design.md](../hardware-peripherals-design.md) — peripheral architecture
