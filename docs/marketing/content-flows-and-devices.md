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
| 4 | "Micropayments on a Raspberry Pi" — demo | Conviction | Video, conference |
| 5 | "DePIN node brain: ZeroClaw + x402" — reference | Advocacy | DePIN docs, ecosystem |

**Trigger:** x402 news, Coinbase/Base dev, DePIN hardware discussion.

---

### Flow H: IoT / Sensor Networks (Industrial, Agri, Smart Home)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "AI agent for your sensor network — LoRa, Modbus, GPIO" | Awareness | r/homeautomation, Hackaday, IoT forums |
| 2 | "ZeroClaw on industrial Pi / gateway" — edge + protocol | Interest | IIoT blogs, industrial Discords |
| 3 | "Pi as LoRa gateway + ZeroClaw" — setup | Trial | Docs, agri/weather communities |
| 4 | "Factory floor agent: OPC-UA, local, no cloud" | Conviction | Industrial case study |
| 5 | "I built an [agri/smart home/industrial] agent" — UGC | Advocacy | Showcase, IoT hackathon |

**Trigger:** Smart home upgrade, industrial automation, agri tech, LoRa/sensor discussion.

---

### Flow I: NAS / Homelab (Self-Hosted Enthusiast)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "Run ZeroClaw in your Synology/QNAP" — Docker | Awareness | r/homelab, r/selfhosted |
| 2 | "AI agent + NAS: data stays local" | Interest | Blog, NAS communities |
| 3 | "ZeroClaw on NAS — one-click container" | Trial | Docs, container registry |
| 4 | "Homelab AI: no cloud, full control" | Conviction | r/homelab showcase |
| 5 | "My homelab agent stack" — diagram, post | Advocacy | UGC, newsletter |

**Trigger:** NAS purchase, homelab upgrade, "self-hosted AI" search.

---

### Flow J: Education (Student Sam, Maker Max in lab)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "AI in every lab station — one Pi, one binary" | Awareness | r/Teachers, EdTech Slack |
| 2 | "Tutoring bot that never leaves campus" — FERPA angle | Interest | Campus IT, EdTech blogs |
| 3 | "ZeroClaw in the maker space" — 15-min setup | Trial | Docs, lab guides |
| 4 | "STEM robot brain for $10" — Pi Zero 2 | Conviction | Maker educators, ISTE |
| 5 | "We run ZeroClaw in our lab" — case study | Advocacy | EdTech conference, newsletter |

**Trigger:** Campus AI policy, lab budget, "AI for students" search.

---

### Flow K: Government / Civic (Civic Tech)

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "City hall bot — transparent, auditable" | Awareness | Code for America, civic tech |
| 2 | "Gov AI without the cloud" — air-gapped possible | Interest | Gov CIO, 18F-style |
| 3 | "311 triage agent — local, governed" setup | Trial | Docs, civic tech playbook |
| 4 | "Voter info bot — what we can and can't say" | Conviction | Election tech, trust |
| 5 | "We deployed ZeroClaw for [department]" — reference | Advocacy | Gov tech conference |

**Trigger:** Civic tech hackathon, gov digital initiative, "AI for government" search.

---

### Flow L: Logistics / Supply Chain

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "Dock agent — status before the cloud" | Awareness | Supply chain tech, logistics |
| 2 | "One Pi per warehouse — inventory brain" | Interest | 3PL, warehouse forums |
| 3 | "Cold chain agent — proof on device" — setup | Trial | Docs, compliance |
| 4 | "Fleet agent — cellular edge" demo | Conviction | Fleet management |
| 5 | "ZeroClaw in our logistics stack" — case study | Advocacy | Supply chain conference |

**Trigger:** Warehouse automation, fleet tech, cold chain compliance.

---

### Flow M: Hospitality / Multi-Property

| Step | Content | Goal | Channel |
|------|---------|------|---------|
| 1 | "Hotel bot — your data, your lobby" | Awareness | Hotel tech, OTAs |
| 2 | "One Pi per property — no per-seat SaaS" | Interest | Property managers |
| 3 | "Open house bot — set up in 15 min" | Trial | Real estate + event |
| 4 | "Room agent — lights, temp, local" demo | Conviction | Smart home + hospitality |
| 5 | "ZeroClaw at every property" — multi-site | Advocacy | Hospitality IT conference |

**Trigger:** Hotel tech purchase, property management, event tech.

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

#### SBCs / General-purpose edge

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **Raspberry Pi 6** | TBD | Future | "First to run ZeroClaw on Pi 6" — launch tie-in |
| **Orange Pi 5, 5 Plus** | 4–32GB | Alternative Pi; ARM | "Orange Pi + ZeroClaw"; multi-board |
| **Radxa Rock 5, CM4** | varies | RPi-compatible, ARM | "ZeroClaw on Radxa"; maker alternative |
| **Rock Pi 4, 5** | 4–8GB | RK3399/RK3588 | "Rock Pi AI"; China/maker markets |
| **Odroid N2+, M1, H4** | 2–4GB | Amlogic, Samsung | "Odroid edge AI"; compact SBC |
| **Banana Pi M5, M2 Pro** | 2–8GB | Allwinner, Amlogic | "Banana Pi agent"; budget Pi alternative |
| **Le Potato (Libre Computer)** | 1–2GB | Amlogic S905X; $35 | "Cheapest ARM SBC"; $10 board challenge |
| **Nvidia Jetson Nano** | 2GB | Edge AI classic; CUDA | "Jetson + ZeroClaw" — robotics, vision |
| **Nvidia Jetson Orin Nano** | 8GB | Newer Jetson; ARM | "Jetson Orin edge agent"; robotics |
| **BeagleBone AI-64, Black** | 512MB–2GB | Industrial, TI Sitara | "BeagleBone AI" — industrial, embedded |
| **RISC-V SBC** | varies | SiFive, StarFive, VisionFive | "ZeroClaw on RISC-V"; open ISA angle |
| **Mac Mini** | 8GB+ | Contrast only | "OpenClaw needed this. We don't." |

#### IoT MCUs / Microcontrollers (host or peripheral)

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **ESP32-S3, ESP32-C3, ESP32-C6** | 512KB–8MB | Espressif; WiFi/Bluetooth | "ESP32 family + ZeroClaw"; sensor hub |
| **ESP8266** | 80KB | Legacy; WiFi only | "Smallest WiFi host?" — stretch goal |
| **RP2040 (Pico)** | 264KB | RPi Foundation; no WiFi | Host-mediated; "Pico + ZeroClaw bridge" |
| **Arduino Portenta** | 8MB | Industrial; M7 core | "Portenta edge AI"; industrial IoT |
| **Arduino Nano 33 BLE** | 1MB | BLE; constrained | Wearable peripheral; sensor node |
| **nRF52/nRF91** | varies | Nordic; BLE, LTE-M | "Cellular IoT agent"; DePIN, fleet |
| **STM32WB** | MCU | ST; BLE, Zigbee | "STM32 wireless peripheral" |
| **Particle Argon/Boron** | varies | Cellular IoT; Particle OS | "Particle + ZeroClaw"; fleet, remote |
| **SAMD51** | 256KB | Arduino M4; no WiFi | Host-mediated peripheral |
| **Teensy 4.x** | 1MB | Fast MCU; no WiFi | Host-mediated; maker projects |

#### IoT gateways / industrial

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **Industrial Pi (Kunbus, etc.)** | 2–8GB | DIN-rail; IIoT | "ZeroClaw on the factory floor"; OPC-UA, Modbus |
| **Up Squared** | 4–8GB | x86; industrial | "x86 edge gateway AI"; industrial |
| **Onion Omega2** | 128MB | MIPS; WiFi; tiny | "Omega2 AI?" — extreme edge |
| **Gl.inet travel routers** | 128–256MB | OpenWrt; portable | "Router as AI gateway"; travel, mesh |
| **NanoPi R2S, R4S** | 256MB–4GB | Router SBCs; OpenWrt | "ZeroClaw on a router"; homelab |
| **Synology NAS (DS220+, etc.)** | 2GB+ | ARM/x86; Docker | "ZeroClaw in your NAS"; homelab |
| **QNAP NAS** | varies | Docker, container | "Self-hosted AI in NAS"; data local |
| **Home Assistant Yellow** | 512MB | HA; Pi-based | "HA + ZeroClaw"; smart home agent |
| **UniPi Neuron** | varies | Industrial; Modbus | "Industrial automation AI" |

#### Wearables / portable

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **Smart glasses** | low | Ray-Ban Meta, etc. | "The runtime that fits in glasses"; <5MB story |
| **Smartwatch** | very low | WearOS, PineTime, etc. | "Edge AI for wearables" — future fit |
| **PineTime** | 64KB | Open watch; nRF52 | "PineTime + ZeroClaw" — stretch |
| **ESP32 watch kits** | 4–8MB | DIY smartwatch | "DIY wearable AI"; maker wearable |
| **Humane Pin / similar** | varies | Wearable AI devices | "Pin-style device: ZeroClaw fits" |

#### Smart home / consumer IoT

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **Amazon Echo (hack)** | varies | Custom firmware | "Echo alternative"; voice-first (if supported) |
| **Home Assistant Green** | 1GB | HA dedicated | "Smart home agent"; local, private |
| **Shelly, Sonoff (ESP-based)** | 4MB | Flash hack; Tasmota | "Shelly as sensor; Pi runs agent" |
| **Robustel R3110** | 256MB | Cellular industrial gateway | "Cellular edge AI"; remote sites |
| **RAK WisGate** | varies | LoRaWAN gateway | "LoRa gateway + ZeroClaw"; sensor networks |

#### Robotics / drones / vehicles

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **Jetson Nano/Orin** | 2–8GB | See SBCs | Robotics brain; vision, control |
| **Pixhawk / Cube (Companion)** | MCU | Drone FC; companion computer | "Drone brain: Pi + ZeroClaw" |
| **Duckiebot** | varies | Edu robot; Pi-based | "Duckiebot AI"; robotics edu |
| **Open source rover (Pi)** | as Pi | Mars-style; Pi | "Rover agent"; STEM, maker |
| **Kiosk / POS** | 2–4GB | x86/ARM; retail | "Retail kiosk AI"; local, no cloud |
| **Car PC / RPi in vehicle** | as Pi | Automotive; OBD-II | "In-car AI assistant"; diagnostics |

#### Medical / health IoT

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **Handheld medical devices** | low | Screening, point-of-care | "Medical device AI without the cloud"; HIPAA |
| **Wearable health monitor** | low | Continuous vitals | "Vitals on-device"; PHI local |
| **Smart pill dispenser** | MCU–SBC | Medication reminder | "Compliance assistant"; HIPAA considerations |

#### Agri / energy / environmental IoT

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **FarmBot controller** | varies | Agri automation; Pi | "FarmBot AI"; precision ag |
| **Solar monitor / inverter** | varies | Energy; Modbus | "Solar + ZeroClaw"; energy agent |
| **Weather station (Pi)** | as Pi | Sensors, LoRa | "Weather agent"; environmental |
| **LoRa sensor node (host)** | varies | Pi as LoRa gateway | "Sensor network brain"; agri, smart city |

#### Niche / experimental

| Device | RAM | Notes | Content angle |
|--------|-----|-------|---------------|
| **Flipper Zero** | 1MB | Hacker multi-tool | "Flipper + ZeroClaw?" — curiosity |
| **PocketBeagle** | 512MB | Tiny BeagleBone | "Pocket AI"; ultra-portable |
| **Milk-V Duo** | 64MB | RISC-V; $9 | "Cheapest RISC-V agent?" |
| **LicheeRV** | 64MB | RISC-V; DDR2 | "RISC-V edge"; open hardware |
| **Verga (ESP32-C6)** | 8MB | Matter/Thread gateway | "Matter gateway AI"; smart home |
| **M5Stack** | 4–8MB | ESP32; modular | "M5Stack agent"; maker kits |

**Content flows:** Positioning, "what if," future narratives. Use for thought leadership, don't over-promise.

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
| **Orange Pi / Radxa / Rock Pi** | "Not just Raspberry Pi" | Multi-board benchmarks | Board-specific bugs |
| **Jetson Nano/Orin** | Robotics, vision | "Jetson + ZeroClaw" | CUDA requirement for vision |
| **ESP32-S3/C3/C6** | IoT sensor hub | M5Stack, Verga tie-in | Claim direct run (host-mediated first) |
| **NAS (Synology/QNAP)** | "AI in your NAS"; homelab | Docker, self-hosted | NAS-specific setup claims |
| **Industrial Pi / gateway** | "AI on the factory floor" | OPC-UA, Modbus | Safety-critical claims |
| **LoRa gateway** | Sensor network brain | Agri, smart city | LoRa protocol support |
| **RISC-V (Milk-V, LicheeRV)** | "Open ISA edge AI" | $9 board challenge | Performance claims |
| **Gl.inet / NanoPi router** | "Router as AI gateway" | Travel, homelab | Router resource limits |

---

## 5. Content Flow × Device Matrix

Pick a flow and a device to generate a concrete sequence.

| Flow | Best devices | Lead content |
|------|--------------|--------------|
| Maker (A) | Pi Zero 2, Pi 4, Pi 5, $10 board, M5Stack | 15-min tutorial, GPIO demo |
| OpenClaw (B) | Pi 4, Pi 5, VPS | Comparison, migration |
| Enterprise (C) | VPS, Pi (headless), industrial gateway | Security model, checklist |
| Health (D) | Pi, handheld (future), wearables (future) | HIPAA checklist, BAA setup |
| Wearables (E) | Smart glasses (future), ESP32, Arduino Nano 33 BLE | Peripheral guide, <5MB story |
| Rust (F) | Any | Architecture, trait system |
| Crypto (G) | Pi, $10 board | x402 + edge |
| IoT (H) | Industrial Pi, LoRa gateway, ESP32, Shelly/sensors | Sensor network, Modbus, LoRa |
| Homelab (I) | Synology, QNAP, NanoPi, Gl.inet | NAS Docker, router gateway |
| Education (J) | Pi, Pi Zero 2, lab stations | Lab AI, tutoring, STEM |
| Government (K) | Pi, VPS, air-gapped | Civic, 311, voter info |
| Logistics (L) | Pi, cellular gateway, rugged | Warehouse, fleet, cold chain |
| Hospitality (M) | Pi, per-property | Hotel, open house, room control |

---

## 6. Expansion Prompts

Use these to generate more content from this doc:

1. **"Create a 5-step content flow for [persona] targeting [device]"** — Use Flow A–I + Device Matrix.
2. **"What content do we need for [new device] launch?"** — Use Tier 2/3 device rows.
3. **"Draft the first 3 pieces of Flow [X] with specific copy"** — Use flow tables.
4. **"Add a new device to the matrix with content angles"** — Follow tier structure; add to appropriate tier and category.
5. **"Map [seasonal event] to a content flow"** — Use Seasonal loops + Device Matrix.
6. **"Add more IoT devices for [category]"** — Use IoT subsections (MCUs, gateways, agri, smart home); expand with similar devices.
7. **"Create a device comparison: [Device A] vs [Device B] for ZeroClaw"** — Use Tier 1–3 specs + content angles.

---

## Cross-Links

- [content-use-cases-and-angles.md](content-use-cases-and-angles.md) — surveillance, enterprise, IoT use cases; Meta/glasses killer; automation angle
- [content-strategy.md](content-strategy.md) — pillars, cadence, SEO
- [build-personas.md](build-personas.md) — persona definitions
- [viral-strategies-by-persona.md](viral-strategies-by-persona.md) — viral tactics per persona
- [raspberry-pi-outreach.md](raspberry-pi-outreach.md) — Pi communities, sellout events
- [enterprise-health-iot-playbook.md](enterprise-health-iot-playbook.md) — vertical playbooks
- [robotics-angle.md](robotics-angle.md) — robotics positioning
- [../hardware/README.md](../hardware/README.md) — hardware docs, datasheets
- [../hardware-peripherals-design.md](../hardware-peripherals-design.md) — peripheral architecture
