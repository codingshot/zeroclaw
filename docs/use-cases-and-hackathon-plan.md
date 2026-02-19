# ZeroClaw Use Cases & Hackathon Plan

This document outlines **use cases** for ZeroClaw and a **hackathon plan** for building on the platform. The hackathon is designed as a **2-week** program (with an optional 48-hour variant) and includes:

- **How to plan** — decisions, timeline, checklist (start here if you are organizing)
- Use case outline by subsystem, scenario, and audience
- **Hardware use cases** — by mode (edge-native, host-mediated), board (RPi, ESP32, Nucleo, Arduino), and scenario
- **Content marketing cases** — story-led cases; suggested headlines; 4-week content calendar; objections and responses
- **Use cases by industry** — education, maker, startup, embedded, enterprise, research, legal/justice
- **Legal tech use cases** — law firms, legal aid, courts, compliance, contracts, correctional; RAG, audit, confidentiality; correctional subsection
- **More use cases (expanded)** — healthcare, government, nonprofits, media, real estate, education, logistics, field service, retail, energy/utilities
- **Idea board** — use case ideas, feature/integration ideas, hackathon/bounty ideas, content ideas; how to use it
- **Personas** — Maker, DevOps, embedded dev, architect, OpenClaw user, hackathon participant (goal + use case + content angle)
- **Hardware** — sample user flows (host-mediated, RPi, edge-native); concrete hackathon ideas (new board, RAG, runbook, safety)
- **Use cases per integration** — all 9 categories (Chat, AI Models, Productivity, Music, Smart Home, Tools, Media, Social, Platform) with use case + SaaS angle
- **SaaS use cases** — API-first assistant, white-label bot, managed “run your own,” edge device product, multi-tenant
- **One-click deployments** — VPS, local, and device (RPi/ESP32) with commands and summary table
- **IoT marketplace** — burner phones, drones, SBCs/MCUs, gateways, wearables; discovery, control, monetization, fleet; ZeroClaw advantages
- **OpenClaw comparison** — how OpenClaw works vs ZeroClaw advantages (runtime, memory, startup, deployment, migration, hardware, security)
- **x402 integration** — HTTP 402 payment protocol; agents as buyers/sellers; tool/provider/gateway options; hackathon idea
- **Crypto narratives** — DePIN, agentic payments, decentralized inference, wallet-as-identity, micropayments, censorship-resistant AI, token-incentivized agents
- **Hardware companies** — SBC/maker, MCU/embedded, drone, phone, gateway/hub, PC/server, semiconductor segments and ZeroClaw fit
- **Hardware devices** — concrete device types (RPi, ESP32, Nucleo, Arduino, Pico, burner phones, drones, gateways, NUC, VPS) with “works today” vs “future”; **robot-relevant devices** (companion PC, ground station, gateway, on-board, kiosk)
- **Robot use cases** — drones, rovers, arms, service robots; where ZeroClaw runs; local vs cloud models
- **Local models** — Ollama, LM Studio; when to use which; device/RAM fit (RPi 4/5, NUC, Jetson)
- **Current integrations summary** — registry by category (Chat, AI, Productivity, Music, Smart home, Tools, Media, Social, Platform); Available / Active / ComingSoon
- **More integrations to add** — suggested channels (Nostr, Bluesky, Teams, WebChat, SMS, ROS 2), tools (Notion, Linear, Home Assistant, Weather, x402, drone API), providers (Hugging Face, LM Studio), peripherals
- **Competitive snapshot** — ZeroClaw vs OpenClaw, NanoBot, PicoClaw (runtime, RAM, startup, hardware); why choose ZeroClaw
- **Taglines by audience** — makers, enterprises, crypto, hardware vendors, OpenClaw users, developers, global
- **Partnership checklist** — what hardware/SaaS partners need (arch, OS, install, config, security, docs)
- **What’s next** — narrative roadmap (edge-native MCU, WASM, more channels, x402, wallet/signing, offline, observability, managed)
- **Quick wins** — first 24h (clone, onboard, agent, Telegram, status) and first week (second channel, model, tool, deploy, hardware, share)
- **Glossary** — Channel, Provider, Peripheral, Tool, Gateway, host-mediated, edge-native, x402, DePIN, allowlist, pairing, trait
- Track definitions with stretch goals and team size
- Day-by-day schedule (14 days), milestones, and office hours
- Participant journey (week-by-week expectations)
- Organizer runbook (before / during / after)
- Expanded resources (suggested reading by week)
- Rules, judging criteria, submission template, and prizes
- **Hackathon extras** — FAQ for participants; common pitfalls; judge scoring sheet; copy templates (announcement, reminders, submission form, judge packet)
- **Potential sponsors and outreach** — sponsor categories (hardware, cloud, crypto, AI, dev tools, foundations, corporate); tiers (title, track, prize, community); outreach timeline and email template
- **Top AI communities to reach out to** — Discord (LMSYS, LangChain, LlamaIndex, Rust, etc.); Reddit (r/LocalLLaMA, r/selfhosted, r/raspberry_pi); Hugging Face, GitHub, Twitter/X, LinkedIn; outreach tips
- **Improved hackathon ideas** — copy-paste track prompts, judging angles per track, prize ideas (smallest binary, best first PR, community pick, most mergeable, best demo), themed mini-tracks, how to improve over time
- **Hackathon content kit** — [docs/hackathon-content/](hackathon-content/README.md): judges outreach, sponsors outreach, builder segments, personas (tailored messaging and channels)

Last updated: **February 18, 2026**.

---

## How to plan the hackathon

Use this as a **planning checklist** in order. The rest of the doc has the detailed schedule, tracks, and runbook.

### Step 1: Decide the basics

| Decision | Options | Suggestion |
|----------|---------|------------|
| **Length** | 2 weeks (full) or 48 hours (weekend) | 2 weeks if you want design + milestones; 48 h if you want a single sprint. |
| **Format** | Live only / async only / hybrid | Hybrid: kickoff + demo live; build async; office hours 2–3x per week. |
| **Audience** | Open public / community / internal | Start with community or internal to test; open public when you have capacity. |
| **Tracks** | All 9 or a subset | Start with 4–5 (e.g. New Channel, New Tool, New Provider, Docs/DX, Wildcard); add Hardware/Security if you have experts. |

### Step 2: Timeline (work backward from kickoff)

| When | Action |
|------|--------|
| **4–6 weeks before** | Lock dates; reserve room/stream if live; recruit 1–2 judges per track (or a pooled panel). |
| **3 weeks before** | Announce (blog, Discord, GitHub Discussions); open registration or “interested” form; create hackathon channel/category. |
| **2 weeks before** | Send “getting ready” email: link to [use-cases-and-hackathon-plan](use-cases-and-hackathon-plan.md), README, CONTRIBUTING; suggest cloning and `./bootstrap.sh` in advance. |
| **1 week before** | Publish kickoff time/link; pin key links in channel; share submission form or PR template; confirm judges and criteria. |
| **Day 0 (kickoff)** | Run kickoff; post pitch form; share recording within 24 h if async. |
| **During** | Follow the [Two-Week Schedule](#23-two-week-schedule) and [Organizer Runbook](#211-organizer-runbook). |
| **After** | Thank everyone; merge/triage PRs; announce winners; publish highlights. |

### Step 3: What you need to have ready

- **One place for participants:** Discord server, Matrix space, or GitHub Discussions category (with pinned links).
- **Kickoff:** Slides or a short doc covering: what ZeroClaw is, architecture/traits, “where to build” (section 3), track list, and Q&A.
- **Pitch / submission:** Simple form or GitHub issue template with: name/handle, track, one-line idea (pitch); later: PR/submission link, demo link.
- **Judging:** Packet for judges (links to PRs, track, 1–2 sentence description, demo link); scoring form or rubric based on [2.6 Judging Criteria](#26-judging-criteria-per-track).
- **Prizes (optional):** Certificates, mention in release notes, “Best in Track” / “Overall” / “Community choice” / “Leanest”; no budget required.

### Step 4: Run it

- **Week 1:** Kickoff → pitch deadline → design + office hours → first-commit milestone.
- **Week 2:** Build + office hours → PR/submission + demo plan → polish → soft deadline → judging → demo day + awards.

Details: [2.3 Two-Week Schedule](#23-two-week-schedule), [2.10 Participant journey](#210-participant-journey-week-by-week), [2.11 Organizer runbook](#211-organizer-runbook).

---

## 1. Use Case Outline

ZeroClaw is a trait-driven, Rust-first autonomous agent runtime. Use cases fall into categories aligned with its extension points and deployment modes.

### 1.1 By Subsystem (Extension Points)

| Subsystem | Trait / Contract | Use Cases |
|-----------|------------------|-----------|
| **Providers** | `Provider` | Multi-model orchestration; local (Ollama/LM Studio) vs cloud (OpenRouter, Anthropic, OpenAI); custom/on-prem endpoints; cost routing; fallback chains; subscription auth (OpenAI Codex, Claude). |
| **Channels** | `Channel` | Chat from CLI, Telegram, Discord, Slack, Mattermost, Matrix (E2EE), Signal, WhatsApp, Email, IRC, Lark, DingTalk, QQ, iMessage, Webhook; allowlist-based access; in-chat model switching; media replies (Telegram). |
| **Memory** | `Memory` | Persistent context (SQLite/Postgres/Markdown/Lucid/none); hybrid vector + keyword search; RAG over workspace; auto-save; snapshot/hydrate; response cache; no external vector DB required. |
| **Tools** | `Tool` | Shell, file read/write, memory store/recall/forget, cron/schedule, git, pushover, browser, http_request, screenshot/image_info, Composio (OAuth apps), delegate, hardware tools; workspace-scoped; sandboxed (native/Docker). |
| **Observability** | `Observer` | Noop, Log, Multi; pluggable metrics/tracing (Prometheus, OTel). |
| **Runtime** | `RuntimeAdapter` | Native execution; Docker sandbox for tool runs; future WASM/edge. |
| **Security** | `SecurityPolicy` | Gateway pairing; sandbox; allowlists; rate limits; filesystem scoping; encrypted secrets; deny-by-default. |
| **Identity** | `IdentityConfig` | OpenClaw (markdown); AIEOS v1.1 (JSON); portable personas. |
| **Tunnel** | `Tunnel` | None, Cloudflare, Tailscale, ngrok, custom — safe exposure for webhook/WhatsApp. |
| **Peripherals** | `Peripheral` | STM32 Nucleo, Arduino Uno Q, RPi GPIO; host-mediated (USB/serial) or edge-native (ESP32/RPi); hardware tools (GPIO read/write, memory map, flash). |
| **Skills** | Loader | TOML manifests + SKILL.md; community skill packs. |
| **Integrations** | Registry | 70+ integrations across 9 categories; plugin system. |

### 1.2 By Scenario / Deployment

| Scenario | Use Case | ZeroClaw Features |
|----------|----------|-------------------|
| **Personal assistant (local)** | CLI/Telegram bot that runs commands, reads files, remembers context | `agent`, `daemon`, channels (CLI/Telegram), memory (SQLite), tools (shell, file, memory), workspace-only. |
| **Team bot (Slack/Discord/Mattermost)** | Team chat bot with allowlisted users, model switching | Channels (Slack/Discord/Mattermost), allowlists, `/models` `/model`, daemon. |
| **Low-cost edge deployment** | Run on Raspberry Pi / $10 hardware, &lt;5MB RAM | Single binary, release profile, no Node/Python runtime; RPi docs, network deployment. |
| **Secure webhook API** | External systems send prompts via HTTP | Gateway, pairing, tunnel (Tailscale/Cloudflare/ngrok), `/webhook`, deny public bind by default. |
| **WhatsApp Business bot** | Customer-facing WhatsApp with HTTPS webhook | WhatsApp channel, tunnel, Meta Cloud API setup. |
| **Matrix E2EE** | Encrypted room assistant | Matrix channel, E2EE guide, device/key sharing. |
| **Scheduled / autonomous tasks** | Cron, heartbeat, supervised autonomy | `cron` commands, `[heartbeat]`, autonomy level, allowed_commands. |
| **Multi-provider / cost control** | Route by model or cost; local + cloud fallback | Provider factory, RouterProvider, custom endpoints, Ollama + OpenRouter. |
| **RAG over workspace** | Agent recalls and stores facts from project | Memory (SQLite/Postgres), embedding_provider, vector_weight, keyword_weight, memory tools. |
| **Browser / computer use** | Agent drives browser or computer-use sidecar | Browser tools, allowed_domains, agent_browser / rust_native / computer_use. |
| **OAuth app integrations** | 1000+ apps via Composio | Composio tool, opt-in, entity_id. |
| **Hardware control (host-mediated)** | “Flash Nucleo”, “read GPIO” from Telegram | Peripherals (Nucleo, Arduino Uno Q), serial/USB, hardware tools, `zeroclaw peripheral`. |
| **Hardware control (edge-native)** | ESP32/RPi: “Turn on LED” via WhatsApp on-device | Edge-native mode (hardware-peripherals-design); RAG over datasheets; local or cloud LLM. |
| **Identity portability** | Same persona across runs; AIEOS ecosystem | Identity (OpenClaw markdown or AIEOS JSON). |
| **Migration from OpenClaw** | Move config/memory from OpenClaw | `zeroclaw migrate openclaw`. |
| **Python fallback for tool calling** | GLM/Zhipu etc. with consistent tool use | `zeroclaw-tools` (LangGraph), Discord bot. |
| **Service / production run** | Run as OS service | `zeroclaw service install/start/stop/status`. |

### 1.3 By Audience

| Audience | Use Cases |
|----------|-----------|
| **Individuals** | CLI/Telegram/Discord assistant; local Ollama; RPi at home; secure webhook for personal automation. |
| **Teams** | Slack/Discord/Mattermost bot; allowlists; shared memory (Postgres); scheduled reports. |
| **Developers** | Custom provider/channel/tool; new peripheral; skills; observability adapter. |
| **Hardware / IoT** | Host-mediated (Nucleo, Arduino, RPi GPIO); edge-native (ESP32, RPi); datasheet RAG. |
| **Enterprises** | On-prem/custom endpoints; tunnel + pairing; audit logging; Docker runtime; strict allowlists. |

### 1.4 Use Case Ideas for Hackathon Teams

Concrete directions teams can take (expand or combine as needed):

- **Chat everywhere:** New channel for Bluesky, Threads, Microsoft Teams, Keybase, or a custom chat API with allowlist and health check.
- **Integrate anything:** New tool wrapping a popular API (Notion, Airtable, Google Calendar, Linear, GitHub Projects) with strict schema and workspace-safe defaults.
- **Model flexibility:** New provider or router (e.g. cost-based routing, A/B by model, fallback chain) with clear error handling and provider reference update.
- **Edge and hardware:** New peripheral or hardware tool for a board (e.g. ESP32-CAM, Pico W, new HAT); or a “getting started on RPi/ESP32” runbook with reproducible steps.
- **Smarter agent:** Skill pack for a vertical (devops, writing, research, support) with TOML + SKILL.md and install path.
- **See what’s happening:** Observer (e.g. Prometheus/OTel) or runtime adapter improvement with non-sensitive metrics and docs.
- **Safer by default:** Security improvement (pairing UX, rate limits, audit logging, sandbox hardening) with threat note and rollback path.
- **Learn and share:** Tutorial or runbook (e.g. “ZeroClaw in 15 min”, “Custom provider”, “Matrix E2EE”, “RPi from scratch”) with links in SUMMARY/README.
- **Build on the API:** Client app (CLI wrapper, web dashboard, mobile client, CI plugin) that uses gateway/CLI and is reproducible.

### 1.5 Hardware Use Cases (Outline)

Hardware use cases follow the two modes in [hardware-peripherals-design.md](hardware-peripherals-design.md): **edge-native** (ZeroClaw on device) and **host-mediated** (ZeroClaw on host, hardware over USB/serial).

#### By mode

| Mode | Who | What | Example |
|------|-----|------|---------|
| **Edge-native** | Maker, field deployer | ZeroClaw runs on ESP32/RPi; user talks to device via WhatsApp/Telegram; natural language → GPIO/I2C/SPI on-device | “Turn on LED on pin 13” from WhatsApp; RAG over board datasheets; optional local or cloud LLM. |
| **Host-mediated** | Developer, lab | ZeroClaw on Mac/Linux; USB/serial/J-Link to Nucleo, Arduino, etc.; introspect, flash, read/write from chat or CLI | “Flash this firmware to the Nucleo”; “What memory addresses are readable?”; “Read GPIO 5.” |
| **RPi as host (native GPIO)** | Hobbyist, prototype | ZeroClaw on Pi; GPIO via rppal/sysfs; no separate MCU firmware | “Blink LED on BCM 17”; relay/sensor control from Telegram. |
| **Host + serial peripheral** | Dev, testing | Host runs ZeroClaw; MCU runs minimal firmware; JSON over serial | STM32/Arduino as I/O dongle; ZeroClaw sends commands, gets readings. |

#### By board / platform

| Board / platform | Typical use case | ZeroClaw role |
|-------------------|------------------|---------------|
| **Raspberry Pi** | Home lab, edge gateway, GPIO/sensor hub | Daemon on Pi; channels (Telegram/Discord); native GPIO peripheral or host for USB serial; [network-deployment](network-deployment.md). |
| **ESP32** | Standalone IoT; WiFi-enabled sensor/actuator | Edge-native: ZeroClaw on ESP32; natural language over WhatsApp/Telegram → local peripherals; datasheet RAG. |
| **STM32 Nucleo-F401RE** | Prototyping, education, USB-connected dev | Host-mediated: `zeroclaw peripheral`; hardware discover/introspect; flash; GPIO/ADC/memory tools; [nucleo-setup](nucleo-setup.md). |
| **Arduino Uno R4 WiFi / Uno Q** | WiFi Arduino with bridge app | Host or bridge: serial or WiFi bridge; GPIO read/write tools; [arduino-uno-q-setup](arduino-uno-q-setup.md). |
| **Other MCUs / HATs** | New hardware support | New `Peripheral` impl + config; optional datasheet RAG; flash/introspect if supported. |

#### By scenario (hardware-focused)

| Scenario | Use case | Features |
|----------|----------|----------|
| **Remote control** | Control lights, relays, or actuators from chat (Telegram/WhatsApp) | Channel + peripheral (RPi GPIO or edge-native); allowlist. |
| **Dev / debug** | Inspect or flash connected hardware from CLI or chat | `zeroclaw hardware discover/introspect`; peripheral flash tools; host-mediated. |
| **Prototyping** | “I want to blink an LED / read a sensor” without writing firmware first | Natural language → peripheral tools; optional RAG (datasheets) for correct pins/registers. |
| **Education** | Teach IoT or embedded with a single agent (chat + hardware) | Low-cost (RPi/ESP32); one binary; channels + peripherals; reproducible runbooks. |
| **Production edge** | Deploy a small agent on-site for local control or monitoring | Edge-native or RPi; secure-by-default; tunnel optional; &lt;5MB RAM. |
| **Hackathon / extension** | New board, new tool, or RAG over datasheets | New `Peripheral`; new hardware tool; or datasheet indexing for LLM context. |

#### Sample user flows (hardware)

**Flow A — Host-mediated (Nucleo from Telegram)**  
1. Dev plugs STM32 Nucleo into Mac via USB.  
2. Runs `zeroclaw daemon` (or `zeroclaw channel start`) on host with Telegram configured; optional `zeroclaw peripheral add nucleo-f401re /dev/ttyACM0`.  
3. In Telegram: “What hardware is connected?” → bot uses hardware discover/introspect; replies with board id and capabilities.  
4. “Read GPIO 5” or “Flash the firmware from ./target/…” → agent uses peripheral tools; replies with result or success.  
5. All without opening a serial terminal or IDE on the host.

**Flow B — RPi as host (GPIO from Telegram)**  
1. Operator installs ZeroClaw on Raspberry Pi (build or install binary); runs `zeroclaw onboard` with Telegram bot token and allowlist.  
2. Starts `zeroclaw daemon`; gateway binds 127.0.0.1 (no public port).  
3. In Telegram: “Turn on the LED on BCM 17” → agent uses RPi GPIO peripheral tool; LED turns on; bot confirms.  
4. Optional: cron or heartbeat for periodic checks; same agent, same config.

**Flow C — Edge-native (ESP32, future)**  
1. ZeroClaw runs on ESP32; device has WiFi and connects to messaging (e.g. WhatsApp) or local gateway.  
2. User: “Turn on LED on pin 13” → on-device agent (or cloud LLM) gets board docs via RAG; generates/selects safe GPIO command; executes locally.  
3. Result returned to user; optimized path persisted for next time.  
4. No host PC required; device is standalone.

#### Hardware hackathon ideas (concrete prompts)

- **New board:** “Implement a `Peripheral` for Raspberry Pi Pico W (or ESP32-CAM, or board X); document in hardware-peripherals style; add at least one tool (e.g. GPIO read/write).”  
- **Datasheet RAG:** “Add a small RAG pipeline that indexes a board’s datasheet (or register map) and injects relevant snippets into the agent context when a hardware tool is invoked.”  
- **Flash from chat:** “Extend peripheral tooling so that ‘flash firmware to &lt;board&gt;’ works from Telegram/Discord with a safe path allowlist and confirmation.”  
- **Runbook:** “Write a step-by-step runbook: ‘ZeroClaw on Raspberry Pi: from SD card to first Telegram command’ (or ESP32, or Nucleo) with copy-paste commands and expected output.”  
- **Safety layer:** “Design or implement a small safety layer for hardware tools: rate limit, pin/register allowlist, or confirmation step for destructive actions.”

#### Hardware + content marketing

- **Blog / tutorial:** “Control your Raspberry Pi from Telegram with ZeroClaw” (setup, GPIO, allowlist).
- **Case study:** “From zero to LED in 10 minutes: ZeroClaw on Nucleo” (host-mediated, introspect, flash).
- **Comparison:** “Edge-native vs host-mediated: when to run ZeroClaw on the device vs on your laptop.”

### 1.6 Content Marketing Cases

Narrative, story-led use cases for **blog posts, case studies, social, and landing pages**. Each is a short “hero” scenario: who, what they do, and why ZeroClaw fits.

| Case | Hook | Who it’s for | What they do | Why ZeroClaw |
|------|------|--------------|--------------|--------------|
| **$10 brain** | “Run an AI assistant on hardware that costs less than a sandwich.” | Makers, students, cost-conscious teams | Deploy a chat-capable agent on RPi or $10 boards; &lt;5MB RAM, single binary, no Node/Python. | Lean runtime; no heavy stack; reproducible benchmarks vs OpenClaw/NanoBot. |
| **Chat from anywhere** | “Your assistant lives in Telegram (or Discord, Slack, WhatsApp)—you don’t.” | Individuals, remote teams | One agent, many channels; allowlist; in-chat model switch; same memory and tools everywhere. | Trait-driven channels; deny-by-default; one codebase, many surfaces. |
| **Flash my board from my phone** | “I asked the bot to flash the Nucleo. It did.” | Embedded devs, educators | Send “flash firmware to Nucleo” or “read GPIO 5” via Telegram; ZeroClaw on host, USB to board. | Host-mediated peripheral; hardware discover/introspect; secure, no exposed ports by default. |
| **No lock-in, no bloat** | “Swap the model, the channel, or the memory—without rewriting the app.” | Architects, platform teams | Change provider (OpenRouter, local Ollama, custom); add a channel; switch memory backend. | Trait + factory; config-driven; documented extension points. |
| **Secure by default** | “We needed a webhook API that doesn’t open the front door.” | Ops, security-conscious shops | Expose agent via webhook; pairing required; tunnel only (Tailscale/Cloudflare); workspace-scoped tools. | Gateway pairing; no public bind without tunnel; sandbox, allowlists, no secrets in logs. |
| **RAG without the SaaS** | “Our agent remembers the project—no Pinecone, no Elasticsearch.” | Dev teams, knowledge workers | Recall and store facts from the workspace; hybrid vector + keyword in SQLite or Postgres. | Built-in memory; optional embeddings; no external vector DB. |
| **One assistant, every chat app** | “Same brain in Slack, Discord, and WhatsApp.” | Teams using multiple tools | Single agent; multiple channels; shared memory and identity; one deploy. | Multi-channel daemon; consistent allowlist and model switching. |
| **From prototype to production** | “We started on a Pi in the lab; we shipped the same binary on the edge.” | IoT, edge deployers | Prototype with CLI/Telegram; move to RPi or ESP32; same binary, same config discipline. | Portable binary; RPi/network deployment docs; optional edge-native path. |
| **OpenClaw refugees** | “We moved in an afternoon.” | Teams already on OpenClaw | Migrate config and memory; keep workflows; get smaller binary and Rust stack. | `zeroclaw migrate openclaw`; compatible identity and channel concepts. |
| **Build the next integration** | “We added our channel in a weekend.” | Devs, hackathon participants | Implement `Channel` (or `Tool`, `Provider`, `Peripheral`); register in factory; document. | Clear playbooks (7.1–7.4); trait-first; CI and CONTRIBUTING aligned. |

**Content formats that work:** Short “how we did it” posts (e.g. “ZeroClaw on RPi in 15 min”); 1-page case studies (problem → solution → ZeroClaw differentiator); comparison tables (memory footprint, startup time, cost); “extension points” one-pager for developers; video walkthrough (setup → first message → first hardware command).

#### Suggested headlines and angles

| Angle | Example headline |
|-------|------------------|
| **Cost** | “Run an AI assistant on $10 hardware” / “99% less memory than OpenClaw” |
| **Speed** | “Cold start in &lt;10 ms” / “From zero to first reply in under a minute” |
| **Portability** | “One binary, ARM and x86 and RISC-V” / “Same agent in Telegram and Slack” |
| **Security** | “Webhook API that refuses to bind 0.0.0.0” / “Pairing-first gateway” |
| **Extensibility** | “Add a new channel in a weekend” / “Swap the model without changing code” |
| **Hardware** | “Flash your Nucleo from Telegram” / “Turn on an LED from WhatsApp” |
| **Migration** | “We left OpenClaw in an afternoon” |

#### Content calendar (example, 4 weeks)

| Week | Goal | Asset |
|------|------|--------|
| 1 | Awareness | Short comparison post (ZeroClaw vs alternatives: footprint, cost, startup); 1–2 social posts with benchmark snippet. |
| 2 | Education | Tutorial: “ZeroClaw on Raspberry Pi in 15 min”; or “Your first custom provider in 10 min.” |
| 3 | Proof | 1-page case study (persona + problem + solution + ZeroClaw); or user/testimonial quote. |
| 4 | Conversion | “Extension points” one-pager for devs; hackathon or “build a channel” CTA; link to CONTRIBUTING and playbooks. |

#### Objections and how to answer (content / sales)

| Objection | Response |
|-----------|----------|
| “We already use OpenClaw / another agent.” | “ZeroClaw is leaner (e.g. &lt;5MB RAM, single binary, no Node/Python). We have a migration path: `zeroclaw migrate openclaw` and compatible concepts.” |
| “We need enterprise support.” | “ZeroClaw is open source with clear extension points and runbooks. You can run on-prem, custom endpoints, and strict allowlists; no vendor lock-in.” |
| “Rust is hard for our team.” | “You can start with config and channels only. Adding a new integration follows a single playbook (e.g. 7.2 for channels); we document the trait and factory.” |
| “We need a managed service.” | “Today ZeroClaw is self-hosted. You get full control and no SaaS dependency; we document deployment (e.g. RPi, network-deployment) and service install.” |
| “What about hardware?” | “We support host-mediated (Nucleo, Arduino, USB/serial) and edge-native (ESP32, RPi) with docs and RAG over datasheets. Hackathon track for new boards.” |

### 1.7 Use Cases by Industry / Vertical

| Vertical | Typical need | ZeroClaw fit |
|----------|--------------|--------------|
| **Education** | Low-cost, reproducible labs; one stack for “chat + code + hardware” | Single binary; RPi/ESP32 docs; host-mediated peripherals; no per-seat SaaS. |
| **Maker / hobbyist** | Control devices from phone; minimal setup; cheap hardware | Channels (Telegram/WhatsApp); RPi/Arduino; allowlist; &lt;5MB RAM. |
| **Startup / small team** | One assistant, many apps; no lock-in; fast iteration | Multi-channel; trait swap (provider/channel/memory); CONTRIBUTING and playbooks. |
| **Embedded / IoT** | Prototype and ship; debug from chat; datasheet-aware agent | Host-mediated + edge-native; hardware discover/flash; optional RAG (datasheets). |
| **Enterprise / platform** | On-prem, audit, control over model and data | Custom endpoints; tunnel + pairing; workspace scoping; Docker runtime; no secrets in logs. |
| **Research / lab** | Reproducible agent; pluggable memory and tools | Config-driven; open traits; SQLite/Postgres memory; optional observability. |
| **Legal / justice** | Legal info, forms, research, compliance, and access to justice in firms, courts, and custody | See [1.24 Legal tech use cases](#124-legal-tech-use-cases). Secure deploy; allowlist; audit; RAG over legal corpus; local or filtered provider. |

### 1.8 Personas (Summary)

| Persona | Goal | Primary use case | Content angle |
|----------|------|-------------------|---------------|
| **Maker** | Control stuff from chat on a budget | RPi/ESP32 + Telegram; GPIO or sensors | “$10 brain”; “LED from WhatsApp.” |
| **DevOps / platform** | One bot, many channels; secure webhook | Multi-channel daemon; gateway + tunnel | “Same brain, every app”; “Secure by default.” |
| **Embedded dev** | Flash/debug without leaving the couch | Host-mediated Nucleo/Arduino from Telegram | “Flash my board from my phone.” |
| **Architect** | No vendor lock-in; swap pieces easily | Custom provider/channel/memory | “No lock-in, no bloat”; “Extension points.” |
| **OpenClaw user** | Move without rewrites | Migrate config and memory | “We moved in an afternoon.” |
| **Hackathon participant** | Ship an integration in days | New channel, tool, or peripheral | “Build the next integration”; playbooks 7.1–7.4. |

### 1.9 Use Cases per Integration (by Category)

ZeroClaw exposes **70+ integrations** in 9 categories (`zeroclaw integrations info <name>`). Below: representative integrations per category with a **use case** and a **SaaS angle** (how it can power a product or managed offering).

| Category | Representative integrations | Use case | SaaS angle |
|----------|-----------------------------|----------|------------|
| **Chat** | Telegram, Discord, Slack, Webhooks, WhatsApp, Signal, iMessage, Matrix, Mattermost, Lark, DingTalk, QQ | One agent reachable from the channels your users already use; allowlist per channel; in-chat model switch. | White-label “AI in your Slack/Telegram”; per-workspace bot; webhook API as a product. |
| **AI Models** | OpenRouter, Anthropic, OpenAI, Google, DeepSeek, xAI, Mistral, Ollama, Perplexity, Venice, Vercel AI, Cloudflare AI, Moonshot, Zhipu, Qwen, NVIDIA | Swap or route models by cost, region, or capability; local (Ollama) vs cloud; custom endpoints. | Multi-model API layer; cost routing; “bring your own key” or managed keys. |
| **Productivity** | Composio (1000+ OAuth apps: Gmail, Notion, GitHub, Slack, etc.), Calendar, Linear, Jira | Agent that acts inside productivity tools (email, docs, tickets) via OAuth; workspace-scoped. | “AI assistant for your stack”; per-app enablement; audit trail. |
| **Music & Audio** | (Sonos, Shazam — coming soon) | Voice or chat to control playback, recognize songs; future: multi-room, playlists. | “Voice jukebox”; smart speaker agent; music discovery bot. |
| **Smart Home** | (Home Assistant, Philips Hue, 8Sleep — coming soon) | Natural language to lights, thermostats, scenes; local or cloud hub. | “Smart home concierge”; white-label home automation agent. |
| **Tools & Automation** | Browser, Shell, File System, Git, Cron, HTTP, Screenshot, Pushover | Agent that runs commands, reads/writes files, hits APIs, schedules tasks; sandboxed (native/Docker). | “Automation API”; runbooks-as-a-service; secure script execution. |
| **Media & Creative** | (Spotify, YouTube — coming soon) | Generate or control media from chat; thumbnails, summaries, uploads. | “Creative assistant”; content pipeline automation. |
| **Social** | (Nostr, Bluesky — coming soon) | Agent on social protocols; DMs, posts, moderation. | “Social AI”; community bot; decentralized assistant. |
| **Platform** | macOS, Linux, Windows, iOS, Android | Run where your users are; CLI + channels on desktop; chat clients on mobile. | “Same agent, every device”; cross-platform support. |

**SaaS takeaway:** Combine Chat + AI Models + Productivity (or Tools) to offer “AI assistant in your Slack/Telegram with your apps and your model choice,” deployable on **VPS, local, or device** (see 1.11).

### 1.10 SaaS Use Cases

ZeroClaw as the **engine behind a product** — self-hosted or managed.

| SaaS scenario | What you offer | ZeroClaw role | Deployment |
|---------------|----------------|---------------|------------|
| **API-first assistant** | Customers call your API with prompts; you return replies. | Gateway (`/webhook`) + pairing; tunnel for public URL; one binary per tenant or shared daemon. | VPS per tenant or multi-tenant VPS. |
| **White-label “AI in Slack/Telegram”** | Each customer gets a bot in their workspace; allowlist = their team. | Multi-channel daemon; config per tenant (channel tokens, allowlist); same codebase. | VPS or Kubernetes; one process per tenant or shared with tenant id in context. |
| **Managed “run your own”** | You ship a one-click image or script; customer runs ZeroClaw on their VPS/device. | One-click deploy (bootstrap + onboard); docs for VPS, local, device. | Customer’s VPS, RPi, or laptop; you provide image/script + optional dashboard. |
| **Internal platform** | Engineering gets one agent (Slack + CLI + webhook); security and compliance control. | Single deploy; allowlists; tunnel + pairing; workspace-only tools; optional observability. | Internal VPS or local; no public SaaS. |
| **Edge / device product** | Appliance or device that “talks” to users via WhatsApp/Telegram and controls local hardware. | ZeroClaw on device (RPi/ESP32); channels + peripherals; minimal footprint. | Device (RPi, ESP32, etc.); see 1.11 device. |
| **Multi-tenant by config** | One daemon, many workspaces or identities; billing by usage. | Config-driven; separate config (or workspace) per tenant; gateway can route by header/token. | VPS; scale by process or by config. |

**Common building blocks:** Gateway + pairing + tunnel (for public API); channels (Chat) for “where users are”; providers (AI Models) for “which model”; tools (Productivity, Tools & Automation) for “what the agent can do”; one-click deploy (VPS/local/device) for “how they run it.”

### 1.11 One-Click Deployments: VPS, Local, Device

Fastest path to a running ZeroClaw on each target. See [one-click-bootstrap.md](one-click-bootstrap.md) and [network-deployment.md](network-deployment.md) for full detail.

#### VPS (cloud VM: AWS, GCP, Hetzner, DigitalOcean, etc.)

| Step | Command or action |
|------|--------------------|
| **1. One-click install** | `curl -fsSL https://raw.githubusercontent.com/zeroclaw-labs/zeroclaw/main/scripts/bootstrap.sh \| bash` (or clone + `./bootstrap.sh`). |
| **2. Optional: system deps + Rust** | `./bootstrap.sh --install-system-deps --install-rust` on a minimal image. |
| **3. Onboard** | `zeroclaw onboard --api-key "sk-..." --provider openrouter` (or `--interactive`). |
| **4. Run daemon** | `zeroclaw daemon --host 127.0.0.1 --port 3000`. Use a process manager (systemd, Docker) for production. |
| **5. Public URL (if needed)** | Enable a tunnel (Tailscale, Cloudflare, ngrok) so WhatsApp webhook or external clients can reach the gateway; keep `allow_public_bind = false` and bind to 127.0.0.1. |
| **6. Service (optional)** | `zeroclaw service install` then `zeroclaw service start` for a user-level service. |

**Use case:** SaaS backend, team bot, webhook API. **SaaS:** One VPS per customer or one multi-tenant daemon; same binary, config per tenant.

#### Local (laptop, workstation)

| Step | Command or action |
|------|--------------------|
| **1. Clone + bootstrap** | `git clone https://github.com/zeroclaw-labs/zeroclaw.git && cd zeroclaw && ./bootstrap.sh`. |
| **2. Onboard** | `zeroclaw onboard --interactive` or `zeroclaw onboard --api-key "sk-..." --provider openrouter`. |
| **3. Chat** | `zeroclaw agent` (CLI) or `zeroclaw daemon` + Telegram/Discord (polling; no port forward). |
| **4. Hardware (optional)** | Connect Nucleo/Arduino via USB; `zeroclaw peripheral add <board> <path>`; use from agent or Telegram. |

**Use case:** Daily driver, dev, host-mediated hardware. **SaaS:** Not applicable; local is for single user or dev.

#### Device (Raspberry Pi, ESP32, or other edge board)

| Step | Command or action |
|------|--------------------|
| **1. RPi: build or copy binary** | On Pi or cross-compile: `cargo build --release --features hardware`; or copy `target/release/zeroclaw` from a build host. |
| **2. Install / run** | Same as VPS: bootstrap or copy binary; `zeroclaw onboard`; `zeroclaw daemon`. Config: Telegram/Discord (polling, no inbound port); optional `[peripherals]` for GPIO or USB serial. |
| **3. ESP32 / edge-native** | ZeroClaw on device (future); today: RPi as host with USB serial to MCU, or RPi GPIO. See [hardware-peripherals-design.md](hardware-peripherals-design.md) and [network-deployment.md](network-deployment.md). |
| **4. One-click for device** | Use the same `bootstrap.sh` on the device if it has Git and Rust; or provide a pre-built binary + minimal install script that only installs the binary and runs onboard. |

**Use case:** Home lab, edge gateway, IoT appliance, “$10 brain.” **SaaS:** Managed device product (you ship image or script; customer runs on their RPi/device).

#### Summary table

| Target | One-click / install | Onboard | Expose publicly? | Typical use |
|--------|---------------------|----------|-------------------|-------------|
| **VPS** | `curl … \| bash` or clone + `./bootstrap.sh` | `zeroclaw onboard --api-key … --provider …` | Tunnel (Tailscale/Cloudflare/ngrok) | SaaS, team bot, webhook API |
| **Local** | Clone + `./bootstrap.sh` | `zeroclaw onboard --interactive` | No (polling channels only) | Dev, CLI, host-mediated hardware |
| **Device (RPi)** | Build/copy binary or `./bootstrap.sh` on device | Same as VPS | Optional tunnel; or polling only | Edge, GPIO, serial peripherals |

### 1.12 IoT Marketplace Outline (Burner Phones, Drones, Edge Devices)

A **marketplace** model where IoT and edge devices are discoverable, controllable, and optionally monetizable — with ZeroClaw as the agent layer on or in front of devices.

#### Device classes in the marketplace

| Class | Examples | Role in marketplace | ZeroClaw fit |
|-------|----------|---------------------|--------------|
| **Burner / throwaway phones** | Low-cost Android, prepaid SIM | Disposable comms node; SMS/voice/WhatsApp relay; temporary identity. | Agent on device or on gateway; WhatsApp/Signal channel; allowlist; minimal footprint (&lt;5MB). |
| **Drones** | Consumer / prosumer UAVs | Telemetry, waypoints, capture; fleet dispatch; pay-per-flight or per-task. | Agent as mission planner or relay; channel (Telegram/webhook) for commands; optional tool for flight API; edge or gateway. |
| **Single-board / MCU** | RPi, ESP32, Arduino, Pico | Sensors, actuators, GPIO; “thing” that can be queried or commanded. | Peripheral + channel; host-mediated or edge-native; natural language → hardware. |
| **Gateways / hubs** | RPi, NUC, small VPS | Aggregator for many devices; one agent, many peripherals or child nodes. | Daemon on gateway; channels for user; tools/peripherals for local devices; tunnel for remote access. |
| **Wearables / field devices** | Rugged phone, handheld | Offgrid or mobile; sync when online; SMS/WhatsApp as fallback. | Lightweight binary; polling channels (no inbound port); offline queue (future). |

#### Marketplace functions

- **Discovery:** Registry or catalog of devices (by type, location, capability); ZeroClaw instances can advertise or be discovered via a directory API.
- **Control:** User or another agent sends commands via channel (Telegram, webhook); ZeroClaw on device or gateway executes (tools, peripherals).
- **Monetization:** Device or API can charge per use (e.g. x402 for paid APIs); see [1.14 x402 integration](#114-x402-integration).
- **Fleet:** Many devices under one operator; same config pattern; optional central dashboard or CLI that talks to many agents (gateway per device or gateway as proxy).

#### Advantages for ZeroClaw in an IoT marketplace

- **Lean runtime:** Fits on burner phones, RPi, and embedded targets; no Node/Python.
- **One binary:** Same artifact for VPS, local, device; simple OTA or image update.
- **Channels = control plane:** Telegram/WhatsApp/webhook as universal “remote control” without custom apps.
- **Peripherals = device surface:** GPIO, serial, flash as first-class; extensible to new boards.
- **Secure by default:** Pairing, allowlist, no public bind without tunnel; suitable for untrusted networks.

### 1.13 How OpenClaw Does Things vs ZeroClaw Advantages

Summary of **how OpenClaw operates** and where **ZeroClaw gains advantages** (for positioning, migration, and content).

| Dimension | OpenClaw | ZeroClaw advantage |
|-----------|----------|--------------------|
| **Runtime** | Node.js / TypeScript; dist bundle (~28MB); requires Node process. | Single Rust binary (~3.4MB); no runtime; static linking. |
| **Memory** | &gt;1GB RAM typical (Node + app); heavy for edge. | &lt;5MB RAM (measured); viable on $10 hardware and burner phones. |
| **Startup** | Cold start &gt;500s on 0.8GHz-equivalent; slow for cron/restart. | &lt;10ms cold start; fast for edge and serverless-style restarts. |
| **Deployment** | Often Mac Mini or beefy server; cost-sensitive. | Runs on RPi, ESP32 (future), low-end VPS; “99% less memory, 98% cheaper than Mac mini.” |
| **Identity** | Markdown files (IDENTITY.md, SOUL.md, etc.). | Same OpenClaw format supported; plus AIEOS v1.1 JSON; portable. |
| **Channels / providers** | Similar concepts (chat, model backends). | Trait-driven; many channels and providers; in-chat model switch; deny-by-default allowlists. |
| **Migration** | — | `zeroclaw migrate openclaw` for config and memory; minimal rewrite. |
| **Hardware** | Not first-class. | Peripherals (Nucleo, Arduino, RPi GPIO); host-mediated and edge-native; hardware discover/flash. |
| **Security** | Varies by deployment. | Pairing, tunnel, workspace scoping, sandbox (native/Docker), no secrets in logs. |
| **Ecosystem** | Community, plugins. | Trait + factory; clear playbooks (channel, tool, provider, peripheral); hackathon-friendly. |

**Takeaway:** OpenClaw users get a familiar identity and channel model with a much smaller, faster, hardware-friendly stack and a documented migration path.

### 1.14 x402 Integration

**x402** is an open payment standard over HTTP: servers respond with `402 Payment Required` and payment instructions; clients pay (e.g. stablecoins via a facilitator) and retry with a `PAYMENT-SIGNATURE` header; no accounts or sessions required. It targets **API monetization**, **micropayments**, and **AI agents paying for API access**.

#### Why x402 fits ZeroClaw

- **Agents as buyers:** ZeroClaw (or a tool) calls paid APIs; on 402, it obtains payment instructions, submits payment, and retries with authorization — enabling “agent pays for its own API use.”
- **Agents as sellers:** Gateway or a tool can require 402 for access (e.g. paid webhook, paid inference); ZeroClaw becomes a paywalled service.
- **Marketplace / IoT:** Devices or APIs in an IoT marketplace can charge per request via x402; ZeroClaw on device or gateway can pay or collect.

#### Integration options

| Option | Description | ZeroClaw surface |
|--------|-------------|-------------------|
| **Tool: x402 client** | Tool that performs HTTP request; on 402, reads payment instructions, calls facilitator (or delegated wallet), retries with PAYMENT-SIGNATURE. | New `Tool` (e.g. `HttpRequestX402Tool`) or extend `HttpRequestTool` with 402 handling; config: facilitator URL, wallet/signer. |
| **Provider behind 402** | LLM provider that requires payment per request; ZeroClaw as client sends payment and then request. | Provider wrapper or custom provider that uses x402 client for auth; or tool that “pays then calls” and returns result. |
| **Gateway 402** | Gateway endpoint that returns 402 until payment; external clients pay then get webhook access. | Gateway middleware or alternate route that checks payment and then forwards to existing `/webhook`. |
| **Marketplace / IoT** | Devices or agents pay for APIs (e.g. weather, map) or get paid for their API (e.g. drone task); settlement via x402. | Same tool or provider layer; devices run ZeroClaw with x402-enabled tool or provider. |

#### Reference and hackathon

- **Spec:** [x402.org](https://docs.x402.org/) — HTTP 402, facilitator, client/server flow; Apache-2.0.
- **Hackathon idea:** “x402 tool or provider: ZeroClaw pays for (or charges for) an API using the x402 protocol; demonstrate with a paid LLM or paid webhook.”

### 1.15 Crypto Narratives

Positioning ZeroClaw within **crypto-native narratives** (for content, partnerships, and ecosystem messaging). No endorsement of any token or chain — narrative framing only.

| Narrative | Story | ZeroClaw angle |
|-----------|--------|----------------|
| **DePIN (Decentralized Physical Infrastructure)** | Reward operators who run hardware (sensors, nodes, hotspots); proof of work or attestation on-device. | Agent on device (RPi, ESP32, gateway) that controls hardware and can report status or attest; lean binary fits resource-constrained nodes; channels for remote control. |
| **Agentic payments** | AI agents hold and spend funds; pay-per-call APIs; no human in the loop for micropayments. | x402 integration: agent pays for APIs; gateway or tool can charge 402; “agent that pays for its own inference or tools.” |
| **Decentralized inference** | Run LLMs on distributed hardware; pay miners/operators per request. | ZeroClaw as client: custom provider that calls decentralized inference API (and optionally pays via x402 or on-chain); same trait, different backend. |
| **Wallet as identity** | No accounts; sign-in and allowlist by wallet or signed message. | Allowlist could include wallet-derived IDs; pairing or webhook auth could accept signed payloads; future channel or gateway extension. |
| **Micropayments and streaming money** | Pay per request, per minute, or per task; stablecoins or native. | x402 and IoT marketplace: devices charge per use; agents pay per tool call or API; fits “pay-per-drone-task” or “pay-per-sensor-read.” |
| **Censorship-resistant AI** | Run and control the stack yourself; no single point of failure. | Self-hosted; swap provider and channel; no vendor lock-in; works on your hardware (VPS, RPi, device); tunnel and pairing for access control. |
| **Token-incentivized agents** | Agents earn or spend tokens for tasks; marketplace for AI labor. | ZeroClaw as execution layer: agent receives tasks via channel/webhook; completes via tools/peripherals; settlement (e.g. x402 or off-chain) for payment. |

**Messaging:** “Lean agent runtime for edge and IoT that fits DePIN nodes, pays for APIs with x402, and runs on your hardware — no lock-in.”

### 1.16 Hardware Companies (Vendor / Segment Outline)

How ZeroClaw could fit **different hardware vendor segments** (positioning and partnership angles; no implied endorsement).

| Segment | Example vendors / ecosystems | What they sell | ZeroClaw fit |
|---------|-----------------------------|-----------------|--------------|
| **SBC / maker** | Raspberry Pi Foundation, Pine64, Rockchip-based boards, Banana Pi, Odroid | Single-board computers for hobby and light server; ARM, often Linux. | Primary target: daemon on SBC; GPIO and USB peripherals; Telegram/Discord control; “$10 brain” story; one binary, multiple boards. |
| **MCU / embedded** | STMicro (Nucleo, Discovery), Espressif (ESP32, ESP8266), Arduino, Raspberry Pi Pico, Nordic, NXP | Microcontrollers; sensors, actuators, wearables, gateways. | Host-mediated (USB/serial) today; edge-native (ZeroClaw on MCU) future; peripherals and RAG over datasheets; education and prototyping. |
| **Drone / UAV** | DJI, Parrot, Holy Stone, Autel, open-flight stacks (PX4, ArduPilot) | Consumer/prosumer drones; SDKs and APIs for waypoints, telemetry, capture. | Agent on ground station or companion computer (RPi on drone); channel for commands; tool that calls drone API; fleet and pay-per-task narrative. |
| **Phone / consumer** | Android OEMs, feature phones, rugged phones (e.g. Cat, Sonim) | Smartphones, burners, field devices. | ZeroClaw on device (if Linux/Android allows) or on gateway; WhatsApp/Signal channel; minimal RAM for low-end or burner use case. |
| **Gateway / hub** | Amazon Echo-style hubs, Home Assistant hardware, industrial gateways (Siemens, Moxa, etc.) | Aggregators for sensors and actuators; local or cloud. | ZeroClaw as “brain” of hub: one process, many peripherals; channels for user; tools for local devices; fits open-source and white-label. |
| **PC / server** | Intel NUC, Mini PC brands, cloud VMs (AWS, GCP, Hetzner, DO) | Small servers, edge servers, VPS. | Standard deployment: VPS and local; one-click bootstrap; service install; tunnel for webhook; multi-tenant or single-tenant. |
| **Semiconductor / silicon** | Qualcomm, MediaTek, Amlogic, Allwinner | SoCs in phones, set-tops, SBCs, cameras. | ZeroClaw as reference software for “AI on edge” demos: single binary, multiple arches (ARM, x86, RISC-V); lean footprint for cost-sensitive SoCs. |

**Takeaway:** ZeroClaw is vendor-agnostic; narrative works for SBC makers (run on our board), MCU vendors (control our chips from chat), drone companies (mission control via Telegram), and gateway/hub makers (agent in the hub).

### 1.17 Hardware Devices (Where ZeroClaw Could Run or Integrate)

Concrete **device types** (not exhaustive) where ZeroClaw could run natively or sit in front of as gateway. “Works” = plausible today (binary + docs); “future” = needs port or firmware work.

| Device type | Examples (generic or product class) | ZeroClaw today | Notes |
|-------------|-------------------------------------|----------------|-------|
| **Raspberry Pi** | Pi 3/4/5, Zero 2 W, Compute Module | **Works** — primary target | Native GPIO peripheral; USB serial to MCUs; daemon + channels; [network-deployment](network-deployment.md). |
| **Other Linux SBCs** | Orange Pi, Rock Pi, Banana Pi, Odroid, Pine64 RockPro64 | **Works** — same binary if arch supported (ARM, x86) | Copy binary or build; same config pattern; GPIO if kernel/rppal compatible. |
| **ESP32** | ESP32-S3, ESP32-C3, ESP32-CAM, dev kits | **Future** — edge-native; today as serial peripheral | RAG + natural language on device; today: host talks to ESP32 via serial with bridge firmware. |
| **STM32 Nucleo** | Nucleo-F401RE, other Nucleo boards | **Works** — host-mediated | USB to host; `zeroclaw peripheral`; discover, introspect, flash; [nucleo-setup](nucleo-setup.md). |
| **Arduino** | Uno R4 WiFi, Uno R3, Mega, Nano | **Works** — host-mediated (serial) or bridge (Uno Q) | Serial or WiFi bridge; GPIO tools; [arduino-uno-q-setup](arduino-uno-q-setup.md). |
| **Raspberry Pi Pico** | Pico, Pico W | **Future** — as peripheral or micro agent | Today: host-mediated if firmware exposes serial; future: tiny agent on Pico W (WiFi). |
| **Low-end / burner phones** | Android Go, prepaid Android, feature phones with KaiOS | **Plausible** — if Linux userland or Termux | Minimal RAM; WhatsApp/Signal channel; single binary; no heavy runtime. |
| **Drones with companion PC** | RPi or similar mounted on UAV; DJI/ArduPilot with companion | **Works** — agent on companion | Channel for commands; tool for flight API; telemetry and mission logic. |
| **Home gateways** | OpenWrt-capable routers, Home Assistant Yellow, custom hub | **Plausible** — if arch and storage allow | Same binary; gateway role; peripherals for local Zigbee/Z-Wave if exposed. |
| **NUC / Mini PC** | Intel NUC, AMD Mini, Beelink, Minisforum | **Works** — like VPS or local | Daemon; multi-channel; optional peripherals via USB; edge server narrative. |
| **VPS / cloud VM** | Any x86/ARM cloud instance | **Works** — standard | One-click bootstrap; tunnel; webhook; SaaS backend. |
| **Rugged handhelds** | Handheld Android for field work, inventory, logistics | **Plausible** — same as phone | Offline queue (future); sync when online; WhatsApp or webhook when connected. |

**Narrative:** “One runtime, many devices — from Raspberry Pi to Nucleo to (future) ESP32 and burner phones; same config, same channels, same agent.”

#### Robot-relevant devices (expanded)

| Device class | Examples | ZeroClaw role | Notes |
|--------------|----------|---------------|-------|
| **Companion computer (on robot)** | RPi 4/5 or Jetson Nano on drone, rover, or arm | Agent runs on companion; channel (Telegram/webhook) for commands; tool calls robot API (flight, drive, gripper). | Same as “drones with companion PC”; works today. |
| **Ground station / mission control** | Laptop or NUC running ZeroClaw | Operator sends “fly to waypoint X” via Telegram; ZeroClaw calls drone/robot API via tool; no ZeroClaw on robot. | Cloud or local LLM; robot is API endpoint. |
| **Edge gateway (robot fleet)** | One RPi or NUC per site; multiple robots behind it | ZeroClaw on gateway; tools for each robot type; one channel for operator; optional x402 per task. | Fleet dispatch use case. |
| **On-board (future)** | Jetson Orin Nano, Qualcomm RB5, etc. | ZeroClaw + local model on robot; natural language to motion/actuators; RAG over robot docs. | Needs port and local provider; future. |
| **Kiosk / HRI** | Tablet or touchscreen on service robot | ZeroClaw behind kiosk; web or webhook “channel”; user talks to agent that drives robot or answers FAQ. | Channel = kiosk UI; robot controlled via tool. |

### 1.18 Robot use cases

Use cases for **robots** (drones, rovers, arms, service robots) with ZeroClaw as the agent layer. See also [1.12 IoT marketplace](use-cases-and-hackathon-plan.md#112-iot-marketplace-outline-burner-phones-drones-edge-devices) and [1.16 Hardware companies](use-cases-and-hackathon-plan.md#116-hardware-companies-vendor--segment-outline).

| Robot type | Use case | Where ZeroClaw runs | Local vs cloud model | Notes |
|------------|----------|---------------------|----------------------|-------|
| **Consumer / prosumer drone** | “Fly to waypoint X”; “Return home”; “Start recording.” | Companion PC on drone (RPi/Jetson) or ground station (laptop). | Cloud (Telegram → host → API) or local on companion (Ollama + tool); local saves latency and works offline. | Tool wraps drone SDK (DJI, PX4, ArduPilot); channel = Telegram or webhook. |
| **Rover / UGV** | “Drive to coordinates”; “Stop”; “Report battery.” | Companion PC on rover or gateway. | Same: cloud for simple, local (Ollama) for low latency or offline. | Tool for drive/status API; optional RAG over manual. |
| **Robot arm / gripper** | “Pick object at X”; “Move to home.” | Host (laptop) or companion PC; arm connected via serial/ROS/socket. | Often local (Ollama) for real-time; cloud for planning only. | Tool or peripheral for arm API; safety limits in tool. |
| **Service / delivery robot** | “Go to room 3”; “Announce arrival.” | On-board (Jetson, etc.) or gateway; kiosk/tablet for HRI. | Local preferred for responsiveness; cloud for complex Q&A. | Channel = kiosk or Telegram for operator; tool for navigation/announce. |
| **Fleet (many robots)** | Dispatch “Mission 1 to robot A”; pay per task (x402). | One ZeroClaw per site (gateway) or per robot (companion). | Mix: gateway can use cloud; each robot can use local for execution. | x402 for “pay per mission”; allowlist for operators. |

**Local models on robots:** Use small models (e.g. Ollama with `llama3.2:1b`, `phi3`, `qwen2.5:0.5b`) on companion PCs with 2–4GB RAM; reserve larger models for ground station or cloud. See [1.19 Local models](#119-local-models-ollama-lm-studio-and-device-fit).

### 1.19 Local models (Ollama, LM Studio, and device fit)

When to use **local providers** (Ollama, LM Studio) and which model sizes fit which devices. ZeroClaw’s lean runtime (&lt;5MB) leaves most RAM for the model.

| Provider | What it is | Typical host | Use when |
|----------|------------|--------------|----------|
| **Ollama** | Local inference server; pull models with `ollama pull <model>`. | Same machine as ZeroClaw or another machine on LAN (`api_url`). | Default for “no API key”; RPi 4/5, NUC, laptop; good for robots and edge. |
| **LM Studio** | Local server with model loading UI; OpenAI-compatible local endpoint. | Same machine; often dev laptop. | Quick local testing; same binary can point to `lmstudio` provider. |

| Device / RAM | Suggested model size | Example models (Ollama) | Notes |
|---------------|---------------------|-------------------------|-------|
| **RPi 4 (4GB)** | Tiny / small (0.5B–1B params) | `qwen2.5:0.5b`, `phi3:mini`, `llama3.2:1b` | ZeroClaw ~5MB; leave 1.5–2GB for model; rest for OS. |
| **RPi 5 (8GB)** | Small / medium (1B–3B) | `llama3.2:3b`, `phi3`, `qwen2.5:3b` | Can run 3B comfortably with Ollama. |
| **NUC / laptop (16GB+)** | Medium / large (7B–8B) | `llama3.2`, `mistral`, `qwen2.5:7b` | Full chat and tool use; good for ground station or dev. |
| **Jetson (4–8GB)** | Tiny / small | Same as RPi 4/5 | GPU can run small models with Ollama or vendor stack; ZeroClaw as client. |
| **No local inference** | — | Use cloud provider (OpenRouter, Anthropic, etc.) | ZeroClaw on device; LLM in cloud; good when device has no RAM for model. |

**Config:** `default_provider = "ollama"`, `default_model = "llama3.2:1b"` (or your choice). For Ollama on another host: set `api_url` in provider config. No API key needed for local Ollama unless you use Ollama Cloud.

### 1.20 Current integrations summary (from registry)

ZeroClaw’s integration registry (`zeroclaw integrations info <name>`) lists **70+ integrations** in 9 categories. Status: **Available** (implemented, not configured), **Active** (configured), **ComingSoon** (planned).

#### Chat (14)

| Integration | Status | Notes |
|-------------|--------|------|
| Telegram, Discord, Slack, Webhooks, WhatsApp, Signal, iMessage, Matrix, DingTalk, QQ Official, Email | Available / Active | Implemented; activate via config. |
| Microsoft Teams, Nostr, WebChat, Nextcloud Talk, Zalo | ComingSoon | Planned. |

#### AI models (28+)

| Integration | Status | Notes |
|-------------|--------|------|
| OpenRouter, Anthropic, OpenAI, Google, DeepSeek, xAI, Mistral, Ollama, Perplexity, Venice, Vercel AI, Cloudflare AI, Moonshot, Synthetic, OpenCode Zen, Z.AI, GLM, MiniMax, Qwen, Amazon Bedrock, Qianfan, Groq, Together AI, Fireworks AI, Cohere, Copilot, NVIDIA | Available / Active | Implemented; many aliases. |
| Hugging Face, LM Studio | ComingSoon (LM Studio has provider in code) | LM Studio provider exists; check `zeroclaw providers`. |

#### Productivity (9)

| Integration | Status | Notes |
|-------------|--------|------|
| GitHub, Notion, Apple Notes, Apple Reminders, Obsidian, Things 3, Bear Notes, Trello, Linear | ComingSoon | Composio can cover some via OAuth. |

#### Music & audio (3)

| Integration | Status | Notes |
|-------------|--------|------|
| Spotify, Sonos, Shazam | ComingSoon | |

#### Smart home (3)

| Integration | Status | Notes |
|-------------|--------|------|
| Home Assistant, Philips Hue, 8Sleep | ComingSoon | |

#### Tools & automation (10+)

| Integration | Status | Notes |
|-------------|--------|------|
| Shell, File System | Active | Core tools. |
| Browser, Cron | Available | Implemented. |
| Voice, Gmail, 1Password, Weather, Canvas | ComingSoon | |
| Composio | Available (opt-in) | 1000+ OAuth apps. |

#### Media & creative (4)

| Integration | Status | Notes |
|-------------|--------|------|
| Image Gen, GIF Search, Screen Capture, Camera | ComingSoon | Screenshot tool exists. |

#### Social (2)

| Integration | Status | Notes |
|-------------|--------|------|
| Email | Available / Active | Channel. |
| Twitter/X | ComingSoon | |

#### Platform (5)

| Integration | Status | Notes |
|-------------|--------|------|
| macOS, Linux | Active on that OS | |
| Windows, iOS, Android | Available | Chat via other channels. |

### 1.21 More integrations to add (outline)

Suggested **new integrations** (channels, tools, providers) for hackathon or roadmap. Align with [playbooks](use-cases-and-hackathon-plan.md#3-quick-reference-where-to-build) and registry categories.

#### Channels (trait: Channel)

| Integration | Category | Rationale |
|-------------|----------|-----------|
| **Nostr** | Chat | Decentralized DMs; allowlist by pubkey; ComingSoon in registry. |
| **Bluesky** | Chat | AT Protocol; same “chat to agent” pattern. |
| **Microsoft Teams** | Chat | Enterprise; ComingSoon. |
| **WebChat** | Chat | Browser UI; no app install; ComingSoon. |
| **Nextcloud Talk** | Chat | Self-hosted; sovereignty. |
| **SMS (Twilio / gateway)** | Chat | Field and low-tech; no smartphone required. |
| **ROS 2 / robot topic** | Custom | Robot as “channel”: subscribe to command topic; publish responses. |

#### Tools (trait: Tool)

| Integration | Category | Rationale |
|-------------|----------|-----------|
| **Notion** | Productivity | Read/write pages; schema strict; many teams use it. |
| **Linear / Jira** | Productivity | Issues and projects; runbook and triage. |
| **Calendar (Google, Outlook)** | Productivity | Schedule and reminders. |
| **Home Assistant** | Smart home | Call HA services; ComingSoon; tool for lights/locks. |
| **Weather** | Tools | Forecasts; ComingSoon. |
| **x402 HTTP client** | Tools / payments | Pay 402 then retry; agentic payments. |
| **Drone API (DJI, PX4, etc.)** | Tools / robotics | One tool per SDK; waypoints, takeoff, land. |
| **Runbook runner** | Tools | Execute only approved steps from repo; audit log. |

#### Providers (trait: Provider)

| Integration | Rationale |
|-------------|-----------|
| **Hugging Face Inference** | Many models; serverless or dedicated; ComingSoon. |
| **LM Studio** | Local; OpenAI-compatible; already in provider list; ensure in registry. |
| **More local (llama.cpp server, etc.)** | OpenAI-compatible local endpoints; `custom:http://...`. |
| **x402-paid provider** | Provider that pays per request via x402 then calls LLM. |

#### Peripherals / hardware

| Integration | Rationale |
|-------------|-----------|
| **Raspberry Pi Pico W** | Peripheral or future micro agent; WiFi. |
| **ESP32 (edge-native)** | ZeroClaw on device; future. |
| **Jetson (as host)** | Same binary; GPU for local model; robot companion. |
| **Home Assistant (as peripheral?)** | Or tool that calls HA; bridge to smart home. |

**How to add:** Implement the trait; register in factory (see section 3); add to integration registry in `src/integrations/registry.rs`; update reference docs (providers-reference, channels-reference) and optionally `zeroclaw integrations`.

### 1.22 Competitive Snapshot (Agent Runtimes)

High-level comparison for **positioning and content** (benchmarks are from project docs; verify locally).

| Dimension | OpenClaw | NanoBot | PicoClaw | ZeroClaw |
|-----------|----------|---------|----------|----------|
| **Language** | TypeScript | Python | Go | Rust |
| **Runtime** | Node.js | Python | Static binary | Static binary |
| **RAM (typical)** | &gt;1GB | &gt;100MB | &lt;10MB | **&lt;5MB** |
| **Cold start (0.8GHz equiv.)** | &gt;500s | &gt;30s | &lt;1s | **&lt;10ms** |
| **Binary / dist size** | ~28MB | N/A (scripts) | ~8MB | **~3.4MB** |
| **Hardware target** | Mac Mini / server | Linux SBC ~$50 | Linux board $10 | **$10+ (RPi, VPS, device)** |
| **Identity** | Markdown | — | — | OpenClaw + AIEOS |
| **Hardware / peripherals** | — | — | — | **First-class (Nucleo, Arduino, RPi GPIO)** |
| **Migration from OpenClaw** | — | — | — | **`zeroclaw migrate openclaw`** |

**Why choose ZeroClaw:** Smallest footprint; fastest cold start; no runtime dependency; hardware and migration story; trait-driven and hackathon-friendly; secure-by-default (pairing, tunnel, allowlists).

### 1.23 Taglines and Messaging by Audience

Short **one-liners and taglines** for different audiences (for web, slides, and social).

| Audience | Primary tagline | Supporting line |
|----------|-----------------|------------------|
| **Makers / hobbyists** | “Your $10 board has a brain.” | Run an AI assistant on Raspberry Pi or Arduino host; control from Telegram; no cloud required. |
| **Enterprises / platform** | “One agent, every channel. Your hardware, your model.” | Self-hosted; swap provider and channel; tunnel and pairing; workspace-scoped tools. |
| **Crypto / DePIN** | “Lean agent runtime for edge and DePIN.” | Fits on nodes and devices; x402 for agentic payments; no lock-in. |
| **Hardware vendors** | “ZeroClaw runs on our board.” | One binary, multiple arches; GPIO and peripherals; same config everywhere. |
| **OpenClaw users** | “Same identity. 99% less memory.” | Migrate in an afternoon; keep your workflows; Rust stack, smaller binary. |
| **Developers / contributors** | “Add a channel in a weekend.” | Trait + factory; clear playbooks; hackathon tracks for channel, tool, provider, peripheral. |
| **Global / multilingual** | “One runtime, many devices, many languages.” | Docs in EN/ZH/JA/RU; channels and identity portable; deploy anywhere. |

**Universal:** “Zero overhead. Zero compromise. Deploy anywhere. Swap anything.”

### 1.24 Partnership / Integration Checklist

What a **hardware vendor, SaaS, or ecosystem partner** typically needs to recommend or integrate ZeroClaw (use as a conversation guide or one-pager).

| Item | Status / note |
|------|----------------|
| **Supported architectures** | ARM (aarch64, armv7), x86_64, RISC-V (where Rust tier-1/tier-2); one binary per arch. |
| **OS** | Linux (primary), macOS, Windows (WSL2 recommended). |
| **Minimal resources** | &lt;5MB RAM; no Node/Python; single binary ~3.4MB. |
| **One-click install** | `curl … \| bash` or clone + `./bootstrap.sh`; optional `--install-system-deps --install-rust`. |
| **Config** | `~/.zeroclaw/config.toml`; `zeroclaw onboard` for guided setup; no hardcoded secrets. |
| **Channels** | Telegram, Discord, Slack, WhatsApp, Matrix, Webhook, etc.; allowlist by default. |
| **Providers** | 28+ built-in; custom OpenAI/Anthropic-compatible endpoints; swap via config. |
| **Hardware** | Peripherals (Nucleo, Arduino, RPi GPIO); host-mediated and (future) edge-native; docs for new boards. |
| **Security** | Pairing for gateway; tunnel (Tailscale, Cloudflare, ngrok); workspace-only tools; no public bind by default. |
| **Docs** | README, docs hub, commands/config/providers/channels reference, hardware-peripherals-design, one-click-bootstrap, network-deployment. |
| **License** | MIT. |
| **Support** | Community (GitHub Discussions, issue tracker); CONTRIBUTING and playbooks for integrations. |

**Partner pitch:** “ZeroClaw is an open-source, Rust-based agent runtime that runs on your hardware with minimal footprint, supports your preferred channels and models, and can control peripherals — we can document or preload it on our devices.”

### 1.25 What’s Next (Narrative Roadmap)

Forward-looking **narrative** for content and community (not a committed roadmap; “could” and “future” only).

| Direction | Narrative |
|-----------|-----------|
| **Edge-native on MCU** | ZeroClaw could run directly on ESP32 or similar WiFi MCUs; natural language to GPIO/I2C/SPI on-device; RAG over datasheets; local or cloud LLM. |
| **WASM runtime** | Tool execution could support a WASM runtime for sandboxed, portable user logic alongside native and Docker. |
| **More channels** | Nostr, Bluesky, WebChat, Nextcloud Talk, Microsoft Teams, Zalo — community and hackathon can add via Channel trait. |
| **x402 in core** | First-class tool or provider support for HTTP 402 payments so agents pay for (or charge for) APIs without custom code. |
| **Wallet / signing** | Allowlist or gateway auth could accept wallet-derived identity or signed payloads for crypto-native deployments. |
| **Offline / sync** | Queue messages when offline; sync when online; useful for field devices and burners. |
| **Observability** | Prometheus/OTel observers; non-sensitive metrics and traces for operators. |
| **Managed / hosted** | Community or commercial “ZeroClaw as a service” (hosted daemon, one-click tenant); not in-tree today. |

**Messaging:** “We’re building toward edge-native, more channels, and agentic payments — today you get a lean, swappable runtime that already runs on VPS, local, and device.”

### 1.26 Quick Wins (First 24 Hours and First Week)

**First 24 hours** — minimal path to “it works”:

| Step | Action |
|------|--------|
| 1 | Clone repo; run `./bootstrap.sh` (or `curl … \| bash`). |
| 2 | `zeroclaw onboard --api-key "sk-..." --provider openrouter` (or `--interactive`). |
| 3 | `zeroclaw agent -m "Hello, ZeroClaw!"` — get a reply in the terminal. |
| 4 | Add Telegram (or Discord): create bot, get token; add to config; `zeroclaw channel bind-telegram <your_id>`; start `zeroclaw daemon`; message the bot. |
| 5 | Optional: `zeroclaw status` and `zeroclaw doctor` to confirm. |

**First week** — go deeper:

| Goal | Action |
|------|--------|
| **Use from one more place** | Enable a second channel (e.g. Discord or webhook) or use CLI and Telegram in parallel. |
| **Change the model** | Switch provider/model in config or use `/model` in Telegram/Discord; try local Ollama if available. |
| **Add a tool** | Use built-in tools (shell, file, memory) from a prompt; or read playbook 7.3 and add a small custom tool. |
| **Run on another target** | Deploy same binary on a VPS or RPi; same onboard + daemon; optional tunnel for webhook. |
| **Hardware (if you have it)** | Connect Nucleo or Arduino; `zeroclaw peripheral add …`; ask the agent to read GPIO or flash. |
| **Share or document** | Write a short “how I did it” or contribute a doc fix; link from SUMMARY if new. |

**Narrative:** “From zero to first message in under an hour; from first message to multi-channel or hardware in a week.”

### 1.27 Glossary (Terms Used in This Doc)

| Term | Meaning |
|------|---------|
| **Channel** | Trait for where the agent receives and sends messages (Telegram, Discord, Slack, webhook, etc.). |
| **Provider** | Trait for LLM/API backend (OpenRouter, Anthropic, Ollama, custom endpoint). |
| **Peripheral** | Trait for hardware attached to the agent (Nucleo, Arduino, RPi GPIO); exposes tools (e.g. GPIO read/write). |
| **Tool** | Capability the agent can invoke (shell, file, memory, HTTP, cron, hardware tools). |
| **Gateway** | HTTP server (pairing + webhook); default bind 127.0.0.1; tunnel for public URL. |
| **Host-mediated** | ZeroClaw runs on host (Mac/Linux); hardware connected via USB/serial. |
| **Edge-native** | ZeroClaw runs on the device (e.g. ESP32, RPi); hardware is local. |
| **x402** | Open HTTP payment standard (402 Payment Required); clients pay then retry; used for API monetization and agentic payments. |
| **DePIN** | Decentralized Physical Infrastructure; reward for running hardware (nodes, sensors). |
| **Allowlist** | Deny-by-default list of who can send messages to the agent (e.g. Telegram user IDs). |
| **Pairing** | One-time code exchange for gateway; clients get bearer token to call `/webhook`. |
| **Trait** | Rust interface; ZeroClaw extends by implementing traits (Provider, Channel, Tool, Peripheral) and registering in factories. |

### 1.28 Legal tech use cases

Outline of **legal tech use cases** across firms, legal aid, courts, compliance, and correctional settings — and how an agent runtime like ZeroClaw could fit. Not legal advice; deployment depends on policy, procurement, and regulation.

#### Legal tech use cases by setting

| Setting | Use case | ZeroClaw fit |
|---------|----------|--------------|
| **Law firms (small / mid)** | Internal Q&A on firm docs, matter summaries, first-pass research; one assistant per team or practice area. | RAG over matter/corpus; Slack or webhook channel; allowlist (attorneys/staff); on-prem or private cloud provider. |
| **Legal aid / pro bono** | Triage intake, form assistance, “where to get help” info; multilingual; low-cost deploy. | RAG over know-your-rights and form libraries; web or SMS-style channel; local or low-cost provider; workspace-only tools. |
| **Courts / judiciary** | Internal research aid, form/rule lookup, drafting assistance for clerks; no public-facing advice. | Air-gap or filtered provider; single channel (internal webhook or kiosk); full audit; no external web tools. |
| **Compliance / in-house** | Policy Q&A, contract clause lookup, checklist assistance; audit trail for reviews. | RAG over policies and templates; Slack/Teams; allowlist; observability and retention. |
| **Contracts / CLM** | Drafting assistance, clause suggestions, redline summaries; integrate with doc store (tool). | Tool to read/write in approved repo; RAG over clause library; provider (local or approved cloud). |
| **Correctional (prisons)** | Access to legal info and form assistance in custody; kiosk or approved device; audit and no open internet. | See [Correctional settings](#correctional-settings) below. |

#### Cross-cutting legal tech needs

- **RAG over legal corpus:** Statutes, case law, forms, firm docs — ZeroClaw memory (SQLite/Postgres) + embedding; optional custom EmbeddingProvider for legal models.
- **No legal advice:** Product design must frame output as information only; human review where required. ZeroClaw does not enforce this; it is policy and UX.
- **Confidentiality and privilege:** On-prem or private cloud; no logging of sensitive content; allowlist and pairing so only authorized users reach the agent.
- **Audit and retention:** Observability and logs for who asked what and when; retention per jurisdiction; no API keys or secrets in logs.

#### Correctional settings

- **Access to justice:** Legal information, procedures, form prep (appeals, grievances, family law), connection to legal aid.
- **Controlled delivery:** Kiosks, restricted terminals, or approved tablets; single approved channel; strict allowlist.
- **Audit and compliance:** Full logging; no unapproved external access; facility and jurisdiction rules (e.g. data retention).
- **ZeroClaw fit:** Legal info Q&A (RAG + local/filtered provider); form assistance (tools scoped to approved templates); controlled channel; audit trail; air-gap or whitelisted endpoints only. Single binary and no heavy runtime simplify security review.

**Disclaimer:** Use in any legal or correctional setting depends on facility/organization policy, contracts, and applicable law. This section is a use-case and design outline only.

### 1.29 More use cases (expanded)

Additional **use case ideas** beyond the main verticals — for content, hackathon prompts, and product exploration.

| Domain | Use case | ZeroClaw angle |
|--------|----------|----------------|
| **Healthcare (non-diagnostic)** | Scheduling, FAQ, form guidance, internal policy lookup; HIPAA-aware deploy (on-prem, audit, no logs of PHI). | Local or private provider; allowlist; workspace-only; observability without sensitive content. |
| **Government / civic** | Citizen FAQ, form assistance, internal staff research; accessibility and multilingual. | Secure deploy; RAG over public docs; channel (web, SMS gateway); compliance and retention. |
| **Nonprofits** | Donor Q&A, volunteer coordination, grant-writing assistance; low cost. | Multi-channel; RAG over org docs; local or cheap provider; optional Composio for calendar/email. |
| **Media / newsroom** | Research assistant, fact-check aid, draft summaries; no public posting without human review. | RAG over archives; Slack or internal channel; tools scoped to approved sources. |
| **Real estate** | Listing Q&A, doc checklist, contract clause lookup; integrate with CRM (tool). | Tool for CRM/listing API; RAG over templates; Slack or webhook. |
| **Education (K–12 / higher ed)** | Tutor-style Q&A, assignment feedback (no grading), course material search; FERPA considerations. | On-prem or approved cloud; allowlist (students/instructors); RAG over course corpus. |
| **Logistics / supply chain** | Status Q&A, exception triage, runbook lookup; integrate with TMS/WMS (tool). | Webhook or Slack; tool for logistics API; RAG over runbooks; audit for compliance. |
| **Field service** | Technician assistant: manuals, parts lookup, ticket update; offline-capable (future). | Light binary; channel (Slack or mobile web); RAG over manuals; optional peripheral for barcode/scan. |
| **Retail / e-commerce** | Internal: catalog Q&A, policy lookup, refund logic; no customer-facing advice without review. | Allowlist; RAG over catalog and policies; tool for order system if approved. |
| **Energy / utilities** | Outage triage, procedure lookup, internal reporting; secure and auditable. | On-prem; audit trail; RAG over procedures; optional integration with SCADA/ticketing (tool). |

### 1.30 Idea board

Running **idea board** for use cases, features, hackathon prompts, and content. Use for prioritization, hackathon bounties, or “what to build next.”

#### Use case ideas

- **Per-language legal aid bot:** One agent, RAG over jurisdiction-specific legal aid docs; WhatsApp or web for intake; multilingual.
- **Court clerk assistant:** Internal only; RAG over rules and forms; draft orders and notices; full audit; air-gap option.
- **DePIN node “brain”:** Agent on each node that reports status, runs diagnostics, and accepts commands via secure channel; x402 for pay-per-task.
- **Drone fleet dispatcher:** One agent per fleet or region; Telegram/webhook for “mission request”; tool calls drone API; optional x402 per mission.
- **Burner-phone relay:** ZeroClaw on cheap Android or gateway; WhatsApp in, commands out; minimal footprint; disposable identity.
- **Classroom lab in a box:** RPi + ZeroClaw + one peripheral (e.g. Arduino); students chat to control hardware; one image for entire lab.
- **Grant-writing co-pilot:** RAG over past grants and guidelines; file tool for drafts; Slack or web; nonprofit vertical.
- **Incident runbook agent:** RAG over runbooks; Slack/Teams; tool to trigger approved scripts or tickets; audit for post-incident.

#### Feature / integration ideas

- **x402 tool:** HTTP client that handles 402, pays via facilitator, retries with PAYMENT-SIGNATURE.
- **Wallet-as-allowlist:** Allowlist entries derived from signed message or wallet; gateway accepts signed payload.
- **Offline queue:** Queue messages when channel is unreachable; sync when back online; for field and burners.
- **Legal corpus skill:** Skill pack (TOML + SKILL.md) + RAG over public legal corpus; form templates as tools.
- **Voice in / voice out:** Channel that accepts voice (STT) and returns TTS; for kiosks and accessibility.
- **Multi-tenant dashboard:** Read-only UI for “my agents” (by config or API); no code in core, separate repo.

#### Hackathon / bounty ideas

- **“Legal aid in a weekend”:** Skill pack + RAG over one jurisdiction’s legal aid docs; one channel (e.g. web or Telegram); disclaimer and attribution.
- **“Pay-per-drone-task”:** Integrate one drone API (e.g. DJI or PX4) as a tool; optional x402 so requester pays per mission.
- **“402 in 48h”:** Implement x402 client tool or provider wrapper; demo with a paid API.
- **“Nostr channel”:** New Channel for Nostr DMs; allowlist by pubkey; E2EE if protocol supports.
- **“Runbook runner”:** Tool that executes only approved runbook steps (e.g. from a repo); audit log; for SRE/ops.

#### Content ideas

- **“ZeroClaw in 15 min” (video):** Clone, onboard, first Telegram message, first hardware command.
- **“Legal tech without the lock-in”:** Blog post: legal use cases, RAG, audit, and why open runtime matters.
- **“From zero to DePIN node”:** Tutorial: deploy ZeroClaw on a VPS or RPi; channel for control; optional x402.
- **Comparison table (updated):** ZeroClaw vs OpenClaw vs NanoBot vs PicoClaw; link to reproducible benchmark commands.

#### More use case ideas (expanded)

- **SMB helpdesk bot:** Internal Slack/Teams bot; RAG over internal KB and runbooks; allowlist = support team; audit for compliance.
- **Local government FAQ:** RAG over public ordinances and FAQs; web or SMS channel; multilingual; accessibility.
- **Research synthesis agent:** RAG over papers (PDFs in workspace); cite sources; no web; for labs and systematic review.
- **Contract redline summarizer:** Tool that reads doc, returns summary of changes; workspace-only; for legal/compliance (no advice).
- **Fleet status dashboard (read-only):** Tool that calls a status API (ships, drones, vehicles); agent answers “where is X?”; optional x402 per query.

#### More hackathon / bounty ideas (expanded)

- **“Bluesky channel”:** New Channel for Bluesky DMs or posts; allowlist by handle; document in channels-reference.
- **“Best first issue” bounty:** Curate 3–5 labeled “good first issue” or “hackathon”; prize for first merged PR from each.
- **“Multilingual runbook”:** Same runbook (e.g. ZeroClaw on RPi) in EN + one of ZH/JA/RU; linked from SUMMARY; parity with main doc.
- **“Observability in a weekend”:** Prometheus or OTel Observer; non-sensitive metrics only; doc for operators.
- **“Security hardening”:** One concrete improvement (rate limit, audit log, or pairing UX); threat note and rollback in PR.

**How to use the idea board:** Pick an idea for a hackathon track, bounty, or roadmap; move to “in progress” in your own tracker; when built, add a short “done” note or link to PR/doc here (or in a separate backlog). Use the [hackathon content kit](hackathon-content/README.md) for judges, sponsors, and builder-segment outreach.

---

## 2. Hackathon Plan: “Build on ZeroClaw”

### 2.1 Goals

- **Discover** new use cases and extensions built on ZeroClaw.
- **Grow** the ecosystem: providers, channels, tools, peripherals, skills, docs.
- **Showcase** lean, secure, trait-driven design and low-cost deployment.

### 2.2 Tracks

| Track | Description | Example Projects | Judging Focus |
|-------|-------------|------------------|----------------|
| **New Channel** | Implement a `Channel` for a messaging/platform API not yet supported | Bluesky, Threads, Teams, Keybase, custom chat API | Correct trait impl, auth/allowlist, tests, docs. |
| **New Tool** | Implement a `Tool` that adds a safe, useful capability | Notion, Airtable, calendar, database, API wrapper | Schema, validation, security, ToolResult. |
| **New Provider** | Add or wrap a `Provider` (or custom endpoint pattern) | New API, router/fallback logic, cost-aware routing | Factory registration, error paths, provider reference update. |
| **New Peripheral / Hardware** | Implement `Peripheral` or hardware tooling for a board/sensor | New MCU, sensor board, RPi HAT | Protocol, safety, docs (e.g. hardware-peripherals-design). |
| **Skill Pack** | Publish a skill (TOML + SKILL.md) that combines prompts and tools | Domain-specific assistant (e.g. legal, devops, writing) | Usability, docs, install path. |
| **Observability / Runtime** | New `Observer` or `RuntimeAdapter` | Prometheus, OTel, or a new sandbox runtime | Contract adherence, non-sensitive data, docs. |
| **Security / Hardening** | Improvements to pairing, sandbox, allowlists, or audit | Frictionless pairing, rate limits, audit logging | Threat model, rollback, tests. |
| **Docs / DX** | Tutorials, runbooks, or multi-language docs for a use case | “ZeroClaw on RPi”, “Matrix E2EE”, “Custom provider in 10 min” | Clarity, links, parity with SUMMARY/README). |
| **Wildcard** | Any other build on ZeroClaw (e.g. gateway client, dashboard, automation) | Web dashboard, mobile client, CI integration | Creativity, reuse of traits/API, reproducibility. |

**Suggested team size:** 1–4 per submission. Solo works for docs, skills, or small tools; 2–3 often better for channels, providers, or peripherals.

**Stretch goals by track:** New Channel — in-chat `/model` switch; media/attachments; E2EE if applicable. New Tool — rate limiting; retries; workspace scoping. New Provider — model catalog refresh; streaming parity. New Peripheral — datasheet/RAG hook; flash/introspect commands. Skill Pack — multi-skill bundle; install from URL. Observability/Runtime — dashboards; alerting hints. Security — operator docs; migration path. Docs/DX — second language (ZH/JA/RU) or short video. Wildcard — multi-platform or reusable library.

### 2.3 Two-Week Schedule

The hackathon runs over **14 days** with synchronous kickoff/milestone/demo events and async build time. Adjust to your timezone and audience.

#### Week 1: Orientation and First Milestone

| Day | Focus | Activities | Deliverables (by end of day) |
|-----|--------|-------------|------------------------------|
| **Mon (Day 1)** | **Kickoff** | Live or recorded: ZeroClaw intro (architecture, traits, repo map, extension points). Track overview and Q&A. Share CONTRIBUTING, playbooks, docs. | — |
| **Tue (Day 2)** | **Setup & ideation** | Clone repo, run `./bootstrap.sh` or `zeroclaw onboard`, run `zeroclaw agent` and one channel. Pick track and draft 1–2 sentence project pitch. | Pitch: track + one-line idea (form or channel). |
| **Wed (Day 3)** | **Design** | Office hours (1–2 h): Rust/trait/CI. Optional: “Where to build” walkthrough. Finalize approach (trait, files, config). | Short design note: what you’re building and where it plugs in. |
| **Thu (Day 4)** | **Build starts** | Async build. Optional mid-week office hours. | — |
| **Fri (Day 5)** | **Week 1 milestone** | Check-in: branch + first meaningful commit (skeleton, new module, or doc outline). Optional standup or async update. | Branch + first commit; or design doc for docs/skills. |

#### Week 2: Build, Integration, Demo

| Day | Focus | Activities | Deliverables (by end of day) |
|-----|--------|-------------|------------------------------|
| **Mon (Day 8)** | **Build** | Office hours. Focus: tests, error paths, security (allowlists, no secrets in logs). | — |
| **Tue (Day 9)** | **Build** | Async build. Optional: “How to write a good PR” session. | — |
| **Wed (Day 10)** | **Integration** | PRs opened (or submission form). CI running; fix blocking issues. Demo script or 2–3 min video outline. | PR or submission link; demo plan. |
| **Thu (Day 11)** | **Polish** | Last full build day. Office hours for CI/docs/merge readiness. | PR reviewable; demo recording or live slot. |
| **Fri (Day 12)** | **Soft deadline** | All submissions in. Judging packet to judges (links, track, description). | Final PR + demo link. |
| **Sat (Day 13)** | **Buffer / judging** | Optional buffer for late submissions. Judges review asynchronously. | — |
| **Sun (Day 14)** | **Demo & awards** | Live or async: short demos (e.g. 5 min per team), judging recap, awards (Best in Track, Overall, Community, Leanest). | Winners announced; highlights in release notes or blog. |

**Office hours:** Week 1: Kickoff (Day 1); office hours (Day 3); optional (Day 4). Week 2: office hours (Day 8); “Good PR” (Day 9); polish (Day 11). Use video call or Discord/Matrix voice; keep a shared thread for async Q&A.

### 2.4 Milestones and Deliverables (Summary)

| Milestone | When | What |
|-----------|------|------|
| **Pitch** | End of Day 2 | Track + one-line project idea (form or channel). |
| **Design** | End of Day 3 | Short note: what you’re building, where it plugs in (trait, files, config). |
| **First commit** | End of Day 5 | Branch + first meaningful commit or doc outline. |
| **PR / submission** | End of Day 10 | PR opened (or submission form); CI running; demo plan. |
| **Final submission** | End of Day 12 | PR reviewable + demo link (video or live slot). |
| **Demo** | Day 14 | 5 min demo; judging; awards. |

### 2.5 Rules & Constraints

- **Build on ZeroClaw:** Submissions must extend or use ZeroClaw (new trait impl, skill, docs, or app that calls gateway/CLI).
- **Open source:** Code (and docs) under a license acceptable to the project (e.g. MIT).
- **Compliance:** Follow CONTRIBUTING.md, AGENTS.md/CLAUDE.md (naming, security, no sensitive data in repo).
- **Scope:** One primary track per submission; small, mergeable PRs preferred (per project policy).

### 2.6 Judging Criteria (Per Track)

| Criterion | Weight | Notes |
|-----------|--------|--------|
| **Functionality** | High | Does it work as claimed? Correct trait/contract? |
| **Quality** | High | Tests, error handling, no unnecessary deps (KISS/YAGNI). |
| **Security & safety** | High | Allowlists, scoping, no secret leakage; fail-fast where appropriate. |
| **Documentation** | Medium | README or reference update; install/run steps. |
| **Originality / impact** | Medium | New use case or notable improvement. |

### 2.7 Prizes / Recognition (Example)

- **Best in Track** (per track): Certificate + mention in release notes / blog.
- **Overall Best:** Best across all tracks.
- **Community choice:** Voting by participants.
- **Smallest / leanest:** Binary size or resource footprint (where applicable).

### 2.8 Resources for Participants

- **Code:** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw); CONTRIBUTING.md, AGENTS.md, CLAUDE.md.
- **Docs:** docs/README.md, docs/SUMMARY.md; commands-reference, config-reference, providers-reference, channels-reference; hardware-peripherals-design; one-click-bootstrap.
- **Playbooks:** Adding a Provider (7.1), Channel (7.2), Tool (7.3), Peripheral (7.4) in AGENTS.md/CLAUDE.md.
- **Validation:** `cargo fmt --check`, `cargo clippy --all-targets -- -D warnings`, `cargo test`; optional `./dev/ci.sh all`.
- **Support:** GitHub Discussions / issue labels; optional Discord or Matrix for live help.

### 2.9 Submission Template

- **Track:** (e.g. New Channel, New Tool).
- **Title:** Short name of the project.
- **Repo / PR:** Link to fork + PR or submission repo.
- **Description:** What it does and how it uses ZeroClaw.
- **Setup:** How to build/run (and any non-default config).
- **Demo:** Link to short video or live demo slot.

### 2.10 Participant Journey (Week-by-Week)

**Week 1 — Get oriented and ship something small**

- **Goal:** Run ZeroClaw locally, choose a track, and have a branch with one meaningful commit (or a design doc for docs/skills).
- **Mon:** Attend or watch kickoff; skim README, CONTRIBUTING, and the playbook for your track (e.g. “Adding a Channel”).
- **Tue:** Finish setup (`./bootstrap.sh`, `zeroclaw onboard`, `zeroclaw agent`); submit pitch (track + one-line idea).
- **Wed:** Join office hours with concrete questions; write a short design note (what you’re building, where it plugs in).
- **Thu–Fri:** Implement skeleton or first slice (trait impl stub, new tool module, or doc outline); open branch and push first commit by Friday EOD.

**Week 2 — Build, integrate, and demo**

- **Goal:** PR open and CI green; demo (video or live) ready; submission form or PR link submitted.
- **Mon–Tue:** Core implementation; tests and error paths; office hours for security/CI questions.
- **Wed:** Open PR (or submit via form); fix blocking CI issues; write demo plan or record a 2–3 min draft.
- **Thu:** Polish (docs, reference updates, merge readiness); finalize demo (recording or book live slot).
- **Fri:** Soft deadline — all submissions in; judges receive packet.
- **Sat:** Buffer for late submissions; judges review async.
- **Sun:** Demos and awards; winners and highlights shared.

### 2.11 Organizer Runbook

**Before the hackathon**

- **Announce:** Dates, tracks, schedule, link to this doc and repo; registration form or channel (e.g. Discord/Matrix).
- **Prepare:** Kickoff deck or recording (architecture, traits, “where to build”); submission form or GitHub template; judging packet template (track, link, description, demo link).
- **Recruit judges:** 1–2 per track (or pooled); align on criteria (see 2.6) and deadline for scores.
- **Channels:** Create hackathon category/channel; pin key links (CONTRIBUTING, playbooks, use-cases-and-hackathon-plan); set office-hours calendar.

**During the hackathon**

- **Day 1:** Run kickoff; share recording and slides if async; post pitch form/link.
- **Day 2:** Remind pitch deadline; share “where to build” and playbooks again.
- **Day 3 & 8, 9, 11:** Run office hours; log common Q&A in a thread or doc.
- **Day 5:** Send reminder for “first commit” milestone; optional standup or async check-in.
- **Day 10:** Remind PR/submission and demo plan deadline; offer CI/PR help.
- **Day 12:** Close submissions; send judging packet to judges; confirm demo order (Day 14).
- **Day 14:** Run demo session; collect judge scores; announce winners; publish highlights (release notes or blog).

**After the hackathon**

- Thank participants and judges; merge or triage PRs; update docs/SUMMARY if new docs were added; archive hackathon channel or tag.

**Metrics to track (optional)**  
- **Hackathon:** Registrations, pitches submitted, first-commit count, PRs opened, demos given, winners by track; post-event: PRs merged within 30 days.  
- **Content:** Views/clicks on tutorial or case study; time-to-first-run (e.g. “15 min” post); share of traffic from comparison or “extension points” page.  
- **Community:** New contributors (first PR); repeat contributors; issues labeled “good first issue” or “hackathon” that get closed.

### 2.12 Expanded Resources (Suggested Reading by Week)

**Week 1**

- **Everyone:** README (quick start, architecture table); CONTRIBUTING (setup, hooks); [docs/README.md](README.md) (hub and decision tree).
- **By track:** Playbooks in AGENTS.md/CLAUDE.md (7.1 Provider, 7.2 Channel, 7.3 Tool, 7.4 Peripheral, 7.6 Docs); [commands-reference.md](commands-reference.md); [config-reference.md](config-reference.md); [hardware-peripherals-design.md](hardware-peripherals-design.md) for hardware.

**Week 2**

- **Everyone:** [pr-workflow.md](pr-workflow.md) (PR expectations); [reviewer-playbook.md](reviewer-playbook.md) (what reviewers look for); validation commands in CONTRIBUTING.
- **By track:** Reference doc for your surface (providers-reference, channels-reference); [troubleshooting.md](troubleshooting.md); [operations-runbook.md](operations-runbook.md) if deploying.

### 2.13 Optional: 48-Hour Compressed Variant

If you run a single-weekend hackathon instead of two weeks, compress as follows:

| Phase | Duration | Activities |
|-------|----------|------------|
| **Kickoff** | 1 h | Intro (architecture, traits, repo map); track overview; Q&A. |
| **Setup** | 1–2 h | Clone, `./bootstrap.sh` or `zeroclaw onboard`; run agent + one channel. |
| **Build** | ~40 h | Development; office hours for Rust/trait/CI. |
| **Integration** | 2–4 h | PRs opened; demos prepared. |
| **Demo & judging** | 2–3 h | Short demos; judging; awards. |

Keep the same rules, judging criteria, and submission template; shorten deliverables to “PR + demo by end of build window.”

### 2.14 FAQ for Participants

| Question | Answer |
|----------|--------|
| **Do I need to know Rust?** | Helpful for channels, tools, providers, peripherals. For docs or skills you can contribute with minimal Rust. Playbooks and “where to build” point to the right files. |
| **Can I submit something I started before the hackathon?** | Allowed if you extend or integrate it with ZeroClaw during the event (e.g. new trait impl, or app that uses gateway/CLI). Pre-existing work should be disclosed in the submission. |
| **What if my PR isn’t merged by demo day?** | Submissions are judged on PR (or fork) + demo. Merge is not required for judging; merge happens during or after the event per maintainer capacity. |
| **Can I submit to more than one track?** | One primary track per submission. If your project spans two areas (e.g. channel + docs), pick the main one and mention the other in the description. |
| **Is hardware required for the hardware track?** | For “new peripheral” you need access to the board or a clear plan (e.g. protocol + stub). For “runbook” or “RAG” you can document or design without physical hardware. |
| **What if I miss a milestone (pitch, first commit, PR)?** | Soft deadlines; we use them to unblock help (office hours, CI). Submit by the final deadline with a working demo; mention any delays in the submission. |

### 2.15 Common Pitfalls and How to Avoid Them

| Pitfall | How to avoid |
|---------|----------------|
| **Scope too big** | Pick one clear deliverable (e.g. one channel, one tool, one doc). Stretch goals are optional. |
| **Skipping design note** | Spend 30 min on “what I’m building and where it plugs in” (trait, files, config). Saves rework and helps office hours. |
| **Ignoring CI** | Run `cargo fmt`, `cargo clippy`, `cargo test` early; fix before opening PR. Use pre-push hook (CONTRIBUTING). |
| **No tests** | Add at least one test (e.g. factory wiring, error path, or schema validation). Judges and reviewers expect it. |
| **Secrets in repo** | Never commit API keys or tokens. Use env vars or `zeroclaw onboard`; check `git diff --cached` before push. |
| **Wrong trait or factory** | Read the playbook for your track (7.1–7.4) and an existing impl (e.g. one channel, one tool) before coding. |
| **Demo too long** | Rehearse a 5 min demo: problem → what you built → quick live/video proof. Leave time for Q&A. |

### 2.16 Judge Scoring Sheet (Example)

Per submission, judges can use a simple form. Scores are illustrative (e.g. 1–5 or pass/fail per criterion).

| Criterion | Score (1–5) | Notes |
|-----------|-------------|--------|
| **Functionality** | | Does it work? Correct trait/contract? |
| **Quality** | | Tests, error handling, no unnecessary deps? |
| **Security & safety** | | Allowlists, scoping, no secret leakage? |
| **Documentation** | | README or reference update; install/run clear? |
| **Originality / impact** | | New use case or notable improvement? |
| **Overall** | | Best in track? Overall candidate? |

Optional: one-line “judge’s pick” or “would merge” yes/no. Send packet (links + descriptions + demo) to judges by Day 12; collect scores by Day 13 EOD so you can announce on Day 14.

### 2.17 Copy Templates (Announcement, Reminder, Submission)

**Announcement (short)**  
“We’re running a 2-week hackathon: Build on ZeroClaw. Tracks: New Channel, New Tool, New Provider, New Peripheral, Skill Pack, Observability, Security, Docs/DX, Wildcard. Pitch by [date], PR + demo by [date]. Details: [link to use-cases-and-hackathon-plan]. Register: [form or channel].”

**Pitch reminder (Day 2)**  
“Pitch deadline today: tell us your track and one-line idea. Form: [link]. Need inspiration? See use case ideas and ‘where to build’ in the hackathon doc.”

**First-commit reminder (Day 5)**  
“Week 1 milestone: get a branch and one meaningful commit (or a design doc for docs/skills) by EOD. Stuck? Join office hours [time/link] or ask in [channel].”

**PR / submission reminder (Day 10)**  
“Open your PR (or submit via form) and share your demo plan today. CI must be green; we can help with clippy/test in office hours [time].”

**Submission form fields (minimal)**  
- Name or handle  
- Track  
- Project title  
- One-line description  
- PR or repo link  
- Demo link (video or “live on Day 14”)  
- Optional: setup notes, dependencies

**Judge packet (one block per submission)**  
- **Track:**  
- **Title:**  
- **Description:** (1–2 sentences)  
- **PR/link:**  
- **Demo link:**  

### 2.18 Potential Sponsors and Sponsor Outreach

Outline of **sponsor categories**, what sponsors get, and how to reach out. Adjust tiers and ask to your event size and budget.

#### Potential sponsor categories

| Category | Who | Why they might sponsor | Example ask |
|----------|-----|-------------------------|-------------|
| **Hardware / SBC** | Raspberry Pi Foundation, Pine64, Arduino, STMicro, Espressif, Adafruit | ZeroClaw runs on their boards; hackathon drives adoption and “run on our hardware” story. | Prize (boards, kits); track sponsorship (e.g. “New Peripheral”); swag; credits for participants. |
| **Cloud / VPS** | AWS, GCP, Hetzner, DigitalOcean, Fly.io, Oxide | Participants deploy on their infra; edge and small-instance use case. | Credits for hackathon participants; prize (e.g. $X in credits); “deploy ZeroClaw on [provider]” tutorial. |
| **Crypto / payments** | Coinbase (x402), Polygon, Base, other L2s / facilitators | Agentic payments, x402, DePIN narrative; hackathon can include x402 or wallet track. | Prize pool (stablecoin or credits); x402 or “agentic payments” track sponsorship; judge or mentor. |
| **AI / model providers** | OpenRouter, Anthropic, OpenAI, Groq, Ollama, local-model vendors | ZeroClaw uses their APIs; hackathon projects demo their models. | API credits for participants; “best use of [provider]” prize; judge; mention in announcement. |
| **Dev tools / infra** | GitHub, GitLab, Cursor, VS Code, Rust Foundation | Open source, Rust, and developer experience; hackathon PRs and visibility. | Swag; small prize; “best PR” or “best docs” award; social amplification. |
| **Foundations / nonprofits** | Rust Foundation, Linux Foundation, IEEE, academic or research orgs | Education, open source, and reproducible research; ZeroClaw as teaching or research platform. | Grant or in-kind; co-branded announcement; judge or mentor. |
| **Corporate / enterprise** | Companies building on agents, IoT, or edge | Talent pipeline, ecosystem, and “built with ZeroClaw” case studies. | Track or prize sponsorship; judge; recruiting or case-study follow-up. |

#### What sponsors get (example tiers)

| Tier | Name | What they get |
|------|------|----------------|
| **Title** | “Presented by [Sponsor]” or “[Sponsor] ZeroClaw Hackathon” | Logo on all materials; opening/closing mention; optional short talk or judge slot; link in README or event page. |
| **Track** | “[Sponsor] Hardware Track” or “[Sponsor] x402 Track” | Track named after sponsor; logo on track description; judge from sponsor (optional); prize for track winner (e.g. boards, credits). |
| **Prize** | “Prize sponsor” | Logo in “Prizes” section; sponsor names the prize (e.g. “Best use of Ollama”); no ongoing commitment. |
| **Community** | “Community sponsor” | Logo on event page or Discord; thank-you in kickoff and wrap-up; swag or credits if in-kind. |

#### Sponsor outreach

**Timeline:** Start 4–6 weeks before kickoff; confirm title/track sponsors by 3 weeks before; prize/community sponsors can join up to 1 week before.

**Who to contact:** Developer relations, open-source program office (OSPO), ecosystem or community lead, or hackathon/event contact if public. Use LinkedIn, Twitter/X, or email; prefer warm intro if available.

**Outreach sequence:**

| Step | When | Action |
|------|------|--------|
| 1 | 4–6 weeks before | Short email: event summary, dates, audience, what you’re asking (tier, prize, credits); link to hackathon doc and repo. |
| 2 | 2–3 weeks before | Follow-up if no reply; offer a 15 min call to answer questions; share draft sponsor deck or one-pager if you have it. |
| 3 | 1–2 weeks before | Final ask: “We’re locking the sponsor list by [date]; can we include you as [tier]?” Confirm logo, link, and any prize/credit details. |
| 4 | Post-event | Thank sponsors in wrap-up and release notes; share winner highlights; offer to provide participant count or submission stats. |

**Email template (first touch):**

```
Subject: ZeroClaw Hackathon — [Sponsor] sponsorship opportunity

Hi [Name],

We’re running a 2-week “Build on ZeroClaw” hackathon [dates]. ZeroClaw is an open-source, Rust-based agent runtime that runs on $10 hardware and supports Telegram, Discord, 28+ LLM providers, and hardware peripherals (Raspberry Pi, Arduino, Nucleo).

We’re looking for [title / track / prize / community] sponsors. In return we offer [logo placement, track naming, judge slot, etc.]. We have [N] registrants so far and expect projects across channels, tools, providers, hardware, and x402/agentic payments.

Event details: [link to use-cases-and-hackathon-plan or event page]
Repo: https://github.com/zeroclaw-labs/zeroclaw

Would you be open to [specific ask]? Happy to jump on a short call if useful.

Best,
[Your name]
```

**One-pager for sponsors (suggested contents):** Event name and dates; what ZeroClaw is (1 paragraph); who participates (developers, makers, students); tracks and prizes; sponsor tiers and benefits; contact and link to full doc.

#### What not to promise

- Don’t promise specific participant numbers unless you have a track record.
- Don’t commit to placing sponsor content inside the ZeroClaw codebase or docs unless maintainers agree.
- Keep sponsor messaging neutral (no implied endorsement of a token or product beyond “sponsor of this event”).

### 2.19 Top AI communities to reach out to

Communities where **hackathon announcements, ZeroClaw demos, and contributor outreach** can get traction. Verify links and rules before posting; many prefer “no spam” and value genuine participation.

#### Discord

| Community | Focus | Why reach out | How |
|------------|--------|----------------|----------------|
| **LMSYS** | LLM research, Chatbot Arena, model comparison | Agent runtimes and evaluation; “run on edge” and lean footprint. | Share hackathon or “ZeroClaw vs heavy runtimes” benchmark in relevant channel; follow server rules. |
| **LangChain** | LLM apps, chains, prompt engineering | ZeroClaw as alternative/supplement; tools and RAG; zeroclaw-tools (LangGraph) fits. | Dev/announcements channel; position as “lean runtime + your stack” or hackathon for tool/channel. |
| **LlamaIndex** | RAG, data indexing, retrieval | Memory and RAG use cases; legal, docs, knowledge bases. | RAG and use-case channels; “ZeroClaw RAG without external vector DB” angle. |
| **Perplexity AI** | Search and conversational AI | Discovery and research use cases; agents that cite. | Per community rules; share use cases or tutorials, not pure promo. |
| **DigitalOcean** | Cloud, dev, AI office hours | Hackathon credits; “deploy ZeroClaw on Droplet” tutorial; developer audience. | AI or community channels; sponsor ask (credits) + content. |
| **Learn AI Together** | Learning, Towards AI partnership | Onboarding new contributors; hackathon for first-time builders. | Share hackathon + “beginner-friendly tracks” (docs, skills). |
| **Rust / Rustlang** | Rust language and ecosystem | ZeroClaw is Rust; systems and embedded audience. | `#show-and-tell` or events; “Rust agent runtime on $10 hardware” + hackathon link. |
| **OpenClaw** (if public) | OpenClaw users | Migration and “same identity, smaller stack” story; hackathon for migration docs. | Announce hackathon; “OpenClaw → ZeroClaw” track or doc bounty. |

#### Reddit

| Subreddit | Focus | Post type |
|-----------|--------|-----------|
| **r/LocalLLaMA** | Local models, Ollama, edge inference | “Agent runtime that runs with Ollama on RPi” + hackathon; benchmark. |
| **r/selfhosted** | Self-hosted apps and infra | ZeroClaw as self-hosted agent; one-click deploy; no SaaS. |
| **r/raspberry_pi** | RPi projects | “AI assistant on Pi” tutorial or hackathon hardware track. |
| **r/rust** | Rust projects | Show-and-tell; “Rust agent runtime” + hackathon. |
| **r/artificial**, **r/MachineLearning** | General AI / ML | Use “Ask” or “Discussion” for benchmarks and hackathon; follow sub rules (no low-effort promo). |

#### Other platforms

| Platform | Where | How |
|----------|--------|-----|
| **Hugging Face** | Forums, model/dataset pages | Discuss “agent runtime for edge”; link to repo; hackathon for HF-compatible tool or dataset. |
| **GitHub Discussions** | zeroclaw-labs/zeroclaw | Pin hackathon announcement; “Ideas” category for track suggestions. |
| **Twitter / X** | #AI, #Rust, #BuildInPublic, #Hackathon | Short thread: what ZeroClaw is, hackathon dates, tracks, link; tag sponsors or partners if agreed. |
| **LinkedIn** | AI, open source, dev groups | Professional audience; “Lean agent runtime hackathon” + sponsor/partner mention. |
| **Dev.to / Hashnode** | Dev blogs | “How we run an AI hackathon” or “ZeroClaw in 15 min” post with hackathon CTA. |

#### Outreach tips

- **Add value first:** Share a tutorial, benchmark, or use case before asking people to join or sponsor.
- **One clear CTA:** “Join the hackathon,” “Try the 15-min setup,” or “Contribute a channel” — not all at once.
- **Respect rules:** No DMs or mass outreach where forbidden; use official “promo” or “events” channels when they exist.
- **Recurring:** Build presence (e.g. weekly office hours, or “project of the week”) so hackathon isn’t a one-off drop.

### 2.20 Improved hackathon ideas (refined prompts and angles)

Tighter **hackathon prompts**, judging angles, and variations so tracks stay clear and submissions are easier to score.

#### Track prompts (copy-paste ready)

| Track | Prompt (short) | Success = |
|-------|------------------|-----------|
| **New Channel** | “Implement a Channel for [Bluesky / Nostr / Teams / Keybase]. Register in the factory; add allowlist and health check; document in channels-reference. Demo: send a message and get a reply.” | Mergeable PR; `zeroclaw channel start` works; doc updated. |
| **New Tool** | “Add a Tool that [calls Notion API / reads Airtable / triggers a calendar event]. Strict JSON schema; validate inputs; return ToolResult. No secrets in logs.” | Tool in default_tools or full_tools; tests; reference in docs. |
| **New Provider** | “Add a Provider for [API X] or a RouterProvider that [fallback / cost-routes]. Register in factory; handle errors; update providers-reference.” | `zeroclaw agent --provider <id>` works; catalog or doc updated. |
| **New Peripheral** | “Implement Peripheral for [Pico W / ESP32-CAM / board X]. At least one tool (e.g. GPIO); document in hardware-peripherals style; optional flash/introspect.” | Board in config; tool works; doc or PR description. |
| **Skill Pack** | “Publish a skill: TOML + SKILL.md for [legal aid / devops / grant-writing]. Install path clear; one concrete task the skill improves.” | `zeroclaw skills install` works; README and one demo. |
| **x402** | “Implement a tool or provider that pays for (or charges for) an API using HTTP 402. Demo with one paid endpoint.” | 402 flow works; no hardcoded keys; short doc. |
| **Docs / DX** | “Write a tutorial or runbook: [ZeroClaw on RPi in 15 min / Matrix E2EE / Custom provider in 10 min]. Linked from SUMMARY; commands tested.” | Doc in repo; link in SUMMARY; reproducible. |

#### Judging angles (what to emphasize)

- **Channel:** Correct trait; auth and allowlist; no open relay; tests for connect/send.
- **Tool:** Schema strict; errors handled; no escape from workspace; ToolResult shape.
- **Provider:** Factory and config; error paths; no secret leakage; provider reference updated.
- **Peripheral:** Safe protocol; doc for board; flash or introspect if claimed.
- **Skill:** Usable without code change; install path; one clear use case.
- **x402:** Protocol respected; facilitator or wallet flow; demo with real or test endpoint.
- **Docs:** Reproducible; links valid; fits docs governance (SUMMARY, no duplicate nav).

#### Prize ideas (beyond “Best in track”)

- **Smallest binary / lowest RAM:** Measure with `ls -lh` and `time -l`; certificate or small credit.
- **Best first PR:** For first-time contributors; merge + thank-you highlight.
- **Community pick:** Participants vote (e.g. 1 vote per team); shortlist of 3–5.
- **Most mergeable:** PR that needs fewest follow-up changes; judge or maintainer vote.
- **Best demo video:** Clear problem → solution → 2 min; shareable on social or blog.

#### Themed mini-tracks (optional)

- **“Legal tech”:** Skill pack or RAG + one channel for legal aid / forms; disclaimer required.
- **“Agentic payments”:** x402 tool or provider; demo pay-per-call or pay-per-task.
- **“Edge in 48h”:** Deploy ZeroClaw on RPi or VPS; document steps; optional hardware (GPIO/serial).
- **“Migration”:** Doc or script that makes OpenClaw → ZeroClaw easier; or a “migration runbook” PR.

#### Improving the hackathon over time

- **Post-event survey:** What worked (tracks, schedule, office hours); what to add or drop.
- **Publish winners and links:** Blog or release notes with project names, links, and 1–2 sentence description.
- **Maintain idea board:** Move “done” ideas to a “Shipped” list with PR/doc link; refresh [1.26 Idea board](#126-idea-board) with new ideas from submissions.
- **Reuse copy:** Save announcement, reminders, and judge packet as templates for the next event; iterate on clarity and length.

### 2.21 Hackathon content kit (folder)

All **outreach and segment content** lives in **[docs/hackathon-content/](hackathon-content/README.md)**:

| Doc | For | Contents |
|-----|-----|----------|
| [judges-outreach.md](hackathon-content/judges-outreach.md) | Judges | What judges do; who to recruit; timeline; email templates (recruit + onboarding). |
| [sponsors-outreach.md](hackathon-content/sponsors-outreach.md) | Sponsors | One-pager; first-touch and prize/community email templates; tiers at a glance; what not to promise. |
| [builder-segments.md](hackathon-content/builder-segments.md) | Builders (by segment) | Rust, makers, AI/LLM, legal tech, crypto, students, SRE, OpenClaw; where they hang out; message hook per segment. |
| [personas.md](hackathon-content/personas.md) | Personas | Rust Ruth, Maker Max, AI Alex, Legal Leigh, Crypto Sam, Student Sam, Ops Jordan, OpenClaw Omar; goals, pain points, hooks, suggested tracks. |

Use the folder when recruiting judges and sponsors, and when tailoring announcements and track promos to different builder segments.

---

## 3. Quick Reference: Where to Build

| I want to… | Location / Action |
|------------|-------------------|
| Add a **Provider** | `src/providers/` + factory in `src/providers/mod.rs`; docs/providers-reference.md. |
| Add a **Channel** | `src/channels/` + factory; docs/channels-reference.md. |
| Add a **Tool** | `src/tools/` + registration in `default_tools` / `full_tools`; validate inputs, return ToolResult. |
| Add a **Memory** backend | `src/memory/` + `Memory` trait; config/schema. |
| Add a **Peripheral** | `src/peripherals/` + `Peripheral` trait; config for board; docs/hardware-peripherals-design.md. |
| Add an **Observer** | `src/observability/`; keep non-sensitive. |
| Add a **Skill** | `~/.zeroclaw/workspace/skills/<name>/` with TOML + SKILL.md. |
| Improve **docs** | docs/ per docs-inventory and SUMMARY.md; update reference docs if behavior changes. |

---

## 4. Related Docs

- [README.md](../README.md) — overview, quick start, architecture table.
- [docs/README.md](README.md) — docs hub and decision tree.
- [docs/SUMMARY.md](SUMMARY.md) — full TOC.
- [CONTRIBUTING.md](../CONTRIBUTING.md) — setup, hooks, PR expectations.
- [AGENTS.md](../AGENTS.md) / [CLAUDE.md](../CLAUDE.md) — playbooks (provider, channel, tool, peripheral, security, docs).
- [docs/hardware-peripherals-design.md](hardware-peripherals-design.md) — vision and modes for hardware.
- [docs/network-deployment.md](network-deployment.md) — RPi and local network deployment.
