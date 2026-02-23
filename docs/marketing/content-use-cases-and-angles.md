# Content Use Cases & Narrative Angles — ZeroClaw

Specific use case narratives and provocative positioning: surveillance, enterprise, IoT devices, Meta/glasses killer, automation/job-displacement angle. Use for content ideation and campaign hooks.

Last updated: **February 18, 2026**.

---

## 1. Surveillance Use Cases

### Context

- Video analytics, access control, perimeter monitoring, retail loss prevention
- Edge AI = process on-device; no cloud round-trip; lower latency, privacy
- ZeroClaw: <5MB RAM fits camera gateways, NVRs, smart doorbells

### Content Angles

| Angle | Hook | Content type | Channels |
|------|------|--------------|----------|
| **Edge video analytics** | "AI that watches, doesn't upload" | Technical blog, architecture | r/homesecurity, security forums |
| **Privacy-first surveillance** | "Footage stays on your Pi" | Comparison to cloud cams | Privacy, homelab |
| **Retail / loss prevention** | "POS + camera agent on one board" | Use case brief | Retail tech, SMB |
| **Access control** | "Door lock, face check, ZeroClaw on the edge" | Integration story | Physical security |
| **Perimeter / farm** | "LoRa sensors + Pi + ZeroClaw: fence monitor" | IoT + surveillance | Agri, rural security |

### Messaging (Careful)

- **Do:** "Process locally"; "no cloud required"; "footage on device"; "audit trail"
- **Don't:** Promise facial recognition; overstate accuracy; ignore compliance (GDPR, BIPA, etc.)
- **Compliance note:** Surveillance use cases carry legal risk; content should cite "check your jurisdiction" and avoid endorsing specific surveillance capabilities without legal review.

### Device Map

| Device | Role | Content angle |
|--------|------|---------------|
| Pi + camera module | DIY NVR, smart doorbell brain | "Raspberry Pi surveillance agent" |
| Jetson Nano + camera | Higher-throughput vision | "Edge vision + ZeroClaw" |
| Industrial Pi (DIN-rail) | Factory floor, perimeter | "Industrial surveillance gateway" |
| Gl.inet / router with USB cam | Travel, small-site | "Router as surveillance brain" |

### Surveillance Sub-Angles (Expand Further)

| Sub-angle | Use case | Hook |
|-----------|----------|------|
| **Construction site** | Progress, safety, equipment | "Site agent — local, no cloud cam" |
| **Parking / garage** | Occupancy, license (check jurisdiction) | "Parking agent — edge analytics" |
| **Wildlife / conservation** | Trail cam, species ID | "Conservation agent — runs on solar" |
| **Maritime / port** | Perimeter, vessel awareness | "Port agent — offline-capable" |
| **Critical infra** | Substation, pipeline perimeter | "Infra agent — air-gapped option" |

---

## 2. Enterprise Angles (Expanded)

### Beyond Ops: More Enterprise Use Cases

| Use case | Pain point | ZeroClaw angle | Content |
|----------|------------|----------------|---------|
| **Internal helpdesk** | Ticket triage, runbook lookup | Agent + memory; pairing per team | "Helpdesk agent on your infra" |
| **Compliance assistant** | Audit prep, policy lookup | RAG for policies; audit logs | "Compliance bot without SaaS" |
| **Incident response** | Runbook execution, escalation | Sandboxed tools; RBAC | "ZeroClaw for incident response" |
| **Contract / legal doc review** | NDA, vendor docs | RAG; human-in-the-loop; audit | "Legal doc assistant — info only" |
| **Board / exec briefing** | Summarize decks, metrics | Agent + data tools; confidential | "Exec briefing agent — on-prem" |
| **Multi-tenant SaaS** | Customer-specific agents | Trait-based tenant isolation | "Multi-tenant ZeroClaw" |
| **Air-gapped / classified** | No cloud; no internet | Local models; self-hosted | "ZeroClaw in air-gapped env" |

### Enterprise Content Flows

| Flow | Step 1 | Step 2 | Step 3 |
|------|--------|--------|--------|
| **Security-first** | "No plaintext credentials" | "Pairing vs skills" | "SOC 2 checklist" |
| **Cost** | "No per-seat SaaS" | "Run on existing Pi/VPS" | "TCO comparison" |
| **Control** | "Your data, your infra" | "Air-gapped possible" | "No vendor lock-in" |

### Channels

- r/devops, r/sysadmin, r/sre
- Gartner/Forrester "alternatives" style content
- Enterprise CTO newsletters
- SRE/DevOps conferences, webinars

---

## 3. IoT-Specific Devices & Use Cases

### Device → Use Case Matrix

| Device category | Example devices | Use case | Content hook |
|-----------------|-----------------|----------|--------------|
| **Environmental sensors** | BME680, SHT30, PM2.5 | Air quality, weather, agri | "Sensor hub agent"; "farm monitor" |
| **Industrial protocols** | Modbus, OPC-UA gateway | Factory, SCADA | "Industrial Pi + ZeroClaw" |
| **LoRa / long-range** | RAK WisGate, Pi + LoRa HAT | Agri, smart city, fleet | "LoRa gateway brain" |
| **Cellular IoT** | Particle Boron, Robustel | Remote sites, fleet | "Cellular edge agent" |
| **Smart lighting** | Shelly, Hue bridge, MQTT | Home/office automation | "Lighting agent — local" |
| **Energy / solar** | Solar inverter, Modbus | Solar monitoring, grid | "Solar + ZeroClaw agent" |
| **Water / irrigation** | Flow sensors, valves | Agri, building | "Irrigation agent" |
| **Vending / kiosk** | Touchscreen, Pi, payment | Retail, self-service | "Kiosk AI — no cloud" |
| **Vehicle / OBD-II** | Pi + OBD adapter | Fleet, diagnostics | "In-vehicle agent" |
| **Smart meter** | Pulse counter, Modbus | Utility, submetering | "Meter agent — edge" |

### IoT Content Angles

- **"ZeroClaw is the brain for your sensor network"** — aggregate, reason, act
- **"One Pi, many protocols"** — Modbus, MQTT, LoRa, HTTP
- **"From sensor to action in <10ms"** — latency story
- **"Offline-first IoT"** — no cloud dependency

### IoT Sub-Verticals (Expand Further)

| Sub-vertical | Use case | Hook |
|--------------|----------|------|
| **Smart building** | HVAC, lighting, occupancy | "Building brain — one Pi per floor" |
| **Precision ag** | Soil, irrigation, weather | "Farm agent — sensor to valve" |
| **Smart city** | Streetlights, parking, waste | "City agent — edge, auditable" |
| **Retail IoT** | Beacons, inventory, foot traffic | "Store agent — local analytics" |
| **Industrial IoT (IIoT)** | Predictive maintenance, OEE | "Machine agent — Modbus to action" |
| **Energy management** | Demand response, submetering | "Energy agent — grid-aware" |
| **Water/wastewater** | Flow, pressure, quality | "Water agent — compliance on device" |

---

## 4. Meta Glasses Killer / X Glasses Killer Angle

### Narrative

- Meta Ray-Ban, X (Twitter) glasses, Humane Pin, Rabbit — all push "AI in your pocket or on your face"
- Common pain: heavy runtimes, cloud dependency, privacy concerns, lock-in
- **ZeroClaw angle:** "The runtime that fits in glasses — open, local, yours"

### Positioning

| Competitor / product | Their weakness | ZeroClaw contrast |
|----------------------|----------------|--------------------|
| **Meta Ray-Ban** | Meta cloud; privacy concerns; closed | Self-hosted; no Meta; open |
| **X Glasses** (if/when) | X cloud; platform lock-in | Run on your Pi; your data |
| **Humane Pin** | Cloud-first; subscription | Edge-first; one-time |
| **Rabbit** | Cloud LAM; closed | Local agent; extensible |
| **Apple Vision Pro** | Heavy; expensive; walled garden | Light runtime; any hardware |

### Content Hooks

- **"The glasses runtime Meta doesn't want you to have"** — open, local, <5MB
- **"Build your own AI glasses — ZeroClaw + ESP32 + display"** — maker angle
- **"ZeroClaw: the anti-Meta AI runtime"** — privacy, ownership
- **"When glasses go open source"** — community-built wearables
- **"X glasses need X's cloud. ZeroClaw glasses need a Pi."** — decentralization

### Channels

- r/Android, r/wearables, AR/VR Discord
- Privacy communities, open hardware
- Maker / DIY glasses projects (hackaday, etc.)

### Caveat

- ZeroClaw doesn't yet run on glasses hardware; this is **positioning and narrative**, not product claim.
- Content: "The runtime that *could* fit" / "When we get there" / "Architecture for glasses"

---

## 5. "ZeroClaw Taking Jobs" / Automation Disruption Angle

### Context

- AI agents automate tasks; automation displaces some roles
- Provocative framing: "ZeroClaw is so lightweight it runs everywhere — and that means automation everywhere"
- Use for: thought leadership, debate, earned media; **handle carefully**

### Narrative Angles (Provocative)

| Angle | Hook | Risk | Use when |
|-------|------|------|----------|
| **"Automation at the edge"** | "AI agents on $10 hardware = automation for everyone" | Low | Safe; democratization |
| **"Replacing the tier-1 helpdesk"** | "ZeroClaw + RAG: first-line support, automated" | Medium | Enterprise, ops |
| **"The $10 desk that does your job"** | "Pi + ZeroClaw = automated workflow" | High | Clickbait; controversy |
| **"Agents in the factory"** | "ZeroClaw on the shop floor: fewer supervisors" | Medium | Industrial; IIoT |
| **"From Mac Mini to Pi: automation got cheaper"** | "When automation cost $600, only some could afford it. Now $10." | Low | Cost democratization |
| **"The runtime that scales to millions of edge nodes"** | "One Mac Mini = one OpenClaw. One Pi = one ZeroClaw. Scale = cheap." | Low | Scale narrative |

### Content Types

- **Thought leadership:** "The edge AI shift: what happens when automation runs on $10 hardware"
- **Comparison:** "OpenClaw automated the rich. ZeroClaw automates everyone."
- **Provocative (use sparingly):** "ZeroClaw: the runtime that makes AI assistants cheap enough to replace [X]"
- **Positive reframe:** "ZeroClaw empowers makers, not replaces them" — builders, not displacers

### Messaging Guardrails

- **Do:** Lead with empowerment (makers, SMBs, individuals); "automation for the rest of us"
- **Don't:** Glorify job loss; target specific professions; promise "replace X jobs"
- **Reframe:** "Augment" over "replace"; "democratize" over "displace"
- **Legal/social:** Job displacement is sensitive; get review before aggressive campaigns

---

## 6. Education / EdTech

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Tutoring assistant** | Cost, privacy, FERPA | Self-hosted; student data local | "Tutoring bot that never leaves campus" |
| **Lab / maker space** | Shared Pi, low budget | <5MB fits lab Pis; pairing per station | "AI in every lab station" |
| **Coding bootcamp** | Per-seat SaaS cost | One Pi per cohort; local | "Bootcamp AI without the bill" |
| **Accessibility support** | Real-time, low latency | <10ms; fits assistive devices | "Accessible AI at the edge" |
| **STEM / robotics** | Robot brain on student hardware | Pi Zero 2, Arduino; GPIO tools | "Your robot's brain costs $10" |

**Channels:** r/Teachers, EdTech Slack, maker educators, ISTE, Campus IT.

---

## 7. Government / Civic

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Citizen Q&A** | FAQs, forms, info lookup | RAG for ordinances, policies; audit | "City hall bot — transparent, auditable" |
| **Internal knowledge** | Policy, runbooks, compliance | Self-hosted; air-gapped possible | "Gov AI without the cloud" |
| **311 / service requests** | Triage, routing | Agent + tools; human review | "311 triage agent — local, governed" |
| **Election / voting info** | Trust, no bias claims | Info only; no advice; audit trail | "Voter info bot — what we can and can't say" |
| **Emergency comms** | Offline, low infra | Edge; works when cloud doesn't | "Crisis comms agent — runs on a battery" |

**Channels:** Civic tech, Code for America, gov CIO forums, 18F-style communities.

---

## 8. Media / Content Creation

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Social scheduling** | SaaS lock-in, data | Self-hosted; your content, your infra | "Schedule from your Pi — no SaaS" |
| **Clip / highlight agent** | Video processing, local | Edge; process on NAS or Pi | "Clip bot — runs where your footage lives" |
| **Newsroom assistant** | Fact check, source lookup | RAG; cite sources; human review | "Newsroom RAG — no hallucinations as policy" |
| **Podcast production** | Transcript, show notes | Local Whisper + agent; privacy | "Podcast agent — no upload, no leak" |
| **Community moderation** | Scale, consistency | Agent triage; human escalation | "Mod bot — auditable, local" |

**Channels:** r/podcasting, creator economy Discord, journalism tech, MCNs.

---

## 9. Logistics / Supply Chain

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Warehouse status** | Real-time, edge | Pi at dock; sensor + agent | "Dock agent — status before the cloud" |
| **Shipment tracking** | API fatigue, offline | Local cache; agent reconciles | "Tracking agent — works when APIs don't" |
| **Inventory triage** | Reorder, discrepancy | Agent + tools; audit for compliance | "Inventory brain — one Pi per warehouse" |
| **Fleet dispatch** | Cellular, remote | ZeroClaw on rugged/vehicle Pi | "Fleet agent — cellular edge" |
| **Cold chain** | Temp, compliance | Sensor + agent; local audit | "Cold chain agent — proof on device" |

**Channels:** Supply chain tech, logistics forums, 3PL, fleet management.

---

## 10. Hospitality / Tourism

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Front desk Q&A** | FAQs, local info | RAG for property; pairing per property | "Hotel bot — your data, your lobby" |
| **Room controls** | Smart home, local | Agent + MQTT/Hue; no cloud hub | "Room agent — lights, temp, local" |
| **Concierge triage** | Requests, routing | Agent suggests; human confirms | "Concierge agent — augment, not replace" |
| **Event / venue** | Ephemeral, low infra | Pi + battery; pop-up AI | "Event agent — set up in 15 min" |
| **Multi-property** | Per-property cost | One Pi per property; no per-seat | "ZeroClaw at every property" |

**Channels:** Hotel tech, OTAs, event tech, hospitality IT.

---

## 11. Research / Academic

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Lit review assistant** | PDFs, citations, IRB | RAG; local; no data leaves lab | "Lit review agent — IRB-friendly" |
| **Lab notebook** | Structured logging | Agent + tools; audit trail | "Lab agent — reproduce your workflow" |
| **Field research** | Offline, rugged | Edge; battery; cellular fallback | "Field agent — no connectivity required" |
| **Grant writing** | Reuse, compliance | RAG for past grants; human writes | "Grant assistant — info only" |
| **Code / data wrangling** | Reproducibility | Sandboxed tools; deterministic | "Research agent — cite your run" |

**Channels:** r/labrats, academic computing, reproducibility, ORCID/ROR.

---

## 12. Accessibility

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Voice-first assistive** | Latency, privacy | <10ms; local; no cloud dependency | "Assistive AI — fast, private" |
| **Screen reader augmentation** | Context, summarization | Agent + tools; local models | "See agent — summarize, don't surveil" |
| **Environmental awareness** | Wearable, low power | <5MB fits hearing aids, glasses | "Hear agent — fits in the device" |
| **Communication aid** | AAC, real-time | Edge; no upload of sensitive comms | "Comms agent — stays on device" |

**Channels:** Accessibility tech, AT conferences, disability advocacy, A11y Slack.

---

## 13. Crisis / Disaster Response

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Emergency triage** | Offline, low infra | Edge; LoRa; battery; mesh | "Crisis agent — when the grid is down" |
| **Resource coordination** | Fragmented comms | Agent aggregates; human decides | "Coordination agent — local, auditable" |
| **Volunteer matching** | Scale, trust | Agent suggests; human confirms | "Volunteer agent — no central point of failure" |
| **Shelter / evacuation info** | Real-time, local | RAG for shelters; offline cache | "Shelter agent — runs on a hotspot" |

**Channels:** Humanitarian tech, Red Cross, FEMA-adjacent, CERT.

---

## 14. Developer Experience / DX

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Docs / API lookup** | Context switching | Agent + RAG; local codebase | "Docs agent — no Slack ping" |
| **PR review assistant** | Feedback, style | Agent suggests; human approves | "PR agent — your rules, your repo" |
| **Incident triage** | Runbook, escalation | Sandboxed; audit; RBAC | "Incident agent — ops in a box" |
| **Local dev companion** | No cloud, fast | <10ms; local models; offline | "Dev agent — works on a plane" |
| **Onboarding buddy** | Codebase tour, FAQs | RAG for repo; pairing per team | "Onboarding agent — no vendor" |

**Channels:** r/programming, DevRel, DX conferences, internal tools.

---

## 15. Real Estate / Property

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Listing Q&A** | FAQs, availability | RAG for listings; human for offers | "Listing agent — info, not advice" |
| **Property management** | Work orders, tenants | Agent triage; audit for disputes | "PM agent — one Pi per building" |
| **Open house** | Ephemeral, low cost | Pi + battery; "ask me anything" | "Open house bot — 4 hours, $10" |
| **Due diligence** | Document review | RAG; cite sources; human signs | "DD agent — audit trail included" |

**Channels:** PropTech, real estate tech, property managers.

---

## 16. Food / Restaurants

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Order triage** | Voice, POS, kitchen | Agent + tools; local; no cloud order leak | "Kitchen agent — order in, action out" |
| **Inventory / prep** | Waste, ordering | Agent suggests; human confirms | "Prep agent — one Pi, one location" |
| **Staff schedule** | Coverage, fairness | Agent proposes; manager approves | "Schedule agent — local, private" |
| **Allergy / dietary** | Compliance, liability | RAG for menu; "info only" | "Allergy agent — double-check, never advise" |

**Channels:** Restaurant tech, POS vendors, food service, NRA show.

---

## 17. Fitness / Sports

| Use case | Pain point | ZeroClaw angle | Content hook |
|----------|------------|----------------|--------------|
| **Workout companion** | Wearable, low power | <5MB fits band/watch | "Workout agent — on your wrist" |
| **Recovery logging** | Structured, private | Local; no upload to brand cloud | "Recovery agent — your data, your device" |
| **Team coordination** | Schedules, availability | Agent + tools; pairing per team | "Team agent — local, no SaaS" |
| **Ref / umpire assist** | Rules, replay (if applicable) | Info only; human makes call | "Ref agent — lookup, not judge" |

**Channels:** Fitness tech, wearable dev, sports tech, team management.

---

## 18. Robots Talking to Each Other (Multi-Agent / Robot-to-Robot)

### Narrative

- Multiple ZeroClaw agents, each on its own device/robot, communicating via channels (Telegram group, HTTP, MQTT)
- Each robot has its own brain; they coordinate, hand off tasks, or simply "chat"
- Contrast: heavy runtimes need cloud or big hardware for multi-agent; ZeroClaw = each robot gets a $10 brain

### Use Cases

| Use case | Setup | Hook |
|----------|-------|------|
| **Robot handoff** | Rover tells base "I'm low on battery"; base dispatches second rover | "Robots that coordinate — no cloud" |
| **Swarm coordination** | Multiple Pis/robots; MQTT or shared channel; consensus or leader election | "Swarm brain — one ZeroClaw per bot" |
| **Robot debate** | Two agents in a Telegram group; argue about something absurd | "We gave two robots a group chat" (meme) |
| **Fleet coordination** | Warehouse bots, delivery bots; agent per bot, shared state | "Fleet that talks — edge, local" |
| **Human-in-the-loop handoff** | Robot A can't complete; asks Robot B or human | "Robot says: I need help" |

### Content Angles

- **Technical:** "Multi-agent ZeroClaw: Telegram group, MQTT, or HTTP — your pick"
- **Viral:** "Pov: your robots have a group chat" — two Pis "talking" in a demo
- **Maker:** "Build a robot duo — each gets a Pi, each runs ZeroClaw, they coordinate"
- **Enterprise:** "Fleet of agents — each device, each agent, each audited"

### Viral Hooks

- "Two robots. One conversation. Zero cloud."
- "We put two ZeroClaw agents in a Telegram group. You won't believe what happened."
- "Robot-to-robot: when your bots need to talk, give them ZeroClaw."
- "Pov: your robots are texting each other"
- "Each robot gets a brain. They figure out the rest."

### Channels

- r/robotics, r/raspberry_pi, r/arduino
- Hackaday, maker YouTube
- Swarm robotics, multi-agent systems communities

### Implementation Note

- Today: two ZeroClaw instances in same Telegram group = they see each other's messages; can reply, coordinate
- Future: dedicated agent-to-agent protocol (HTTP, MQTT) for structured handoffs
- Demo: minimal setup = 2 Pis + 1 Telegram group; each Pi runs ZeroClaw; "robot A" and "robot B" chat

---

## 19. Narrative Angles (Generic)

Use these as meta-frames for any use case:

| Angle | Hook | When to use |
|-------|------|-------------|
| **Democratization** | "AI for the rest of us" | Cost, access, SMB, education |
| **Privacy-first** | "Your data never leaves" | Health, legal, government, personal |
| **Edge-first** | "When the cloud can't reach" | Offline, crisis, rural, industrial |
| **Audit-everything** | "Every action, logged" | Enterprise, regulated, legal, compliance |
| **Augment-not-replace** | "Human in the loop" | Jobs, trust, liability, sensitive domains |
| **Open over locked** | "Extend by code, not by install" | Security, customization, vendor lock-in |
| **Scale = cheap** | "One Pi per X" | Multi-site, fleet, property, warehouse |
| **Battery included** | "Runs where power is scarce" | Crisis, field, wearables, remote |

---

## 20. Cross-Reference: Use Case → Content Doc

| Use case | Primary doc | Secondary |
|----------|-------------|-----------|
| Surveillance | This doc | enterprise-health-iot-playbook, content-flows-and-devices |
| Enterprise (expanded) | This doc, enterprise-health-iot-playbook | developer-content |
| IoT devices | content-flows-and-devices (device matrix) | This doc (IoT matrix) |
| Meta/glasses killer | This doc, influencer-and-narrative-angles | enterprise-health-iot-playbook (wearables) |
| Job displacement | This doc | influencer-and-narrative-angles (device sellout) |
| Education | This doc | build-personas (Student Sam), content-flows-and-devices |
| Government / civic | This doc | enterprise-health-iot-playbook (legal) |
| Media / content | This doc | viral-tactics, integrations-content-playbook |
| Logistics | This doc | content-flows-and-devices (IoT, fleet) |
| Hospitality | This doc | content-flows-and-devices (kiosk, event) |
| Research | This doc | enterprise-health-iot-playbook (compliance) |
| Accessibility | This doc | enterprise-health-iot-playbook (wearables) |
| Crisis response | This doc | content-flows-and-devices (LoRa, cellular) |
| Developer DX | This doc | developer-content |
| Real estate | This doc | content-flows-and-devices |
| Food / restaurants | This doc | content-flows-and-devices (kiosk) |
| Fitness / sports | This doc | enterprise-health-iot-playbook (wearables) |
| Robots talking to each other | This doc | robotics-angle |
| Sensitive data (health, legal, financial, HR) | sensitive-data-use-cases | enterprise-health-iot-playbook |

---

## Expansion Prompts

1. **"Expand surveillance use case [X] into full content flow"** — Use Section 1 + content-flows-and-devices.
2. **"Add enterprise use case for [vertical]"** — Use Section 2 structure.
3. **"Map [new IoT device] to use case and content angle"** — Use Section 3 matrix.
4. **"Draft Meta/glasses killer blog outline"** — Use Section 4 positioning.
5. **"Create provocative but responsible 'automation' campaign"** — Use Section 5 with guardrails.
6. **"Add use case for [education/gov/media/logistics/etc.]"** — Use Sections 6–17 structure.
7. **"Apply narrative angle [X] to [use case]"** — Use Section 19 meta-frames.
8. **"Robots talking demo: two Pis in a Telegram group"** — Use Section 18 (Robots Talking).
