# Integrations — Marketing, Content, and Developer Video Playbook

Per-integration marketing angles, content outlines, and developer video scripts. Use for landing copy, blog posts, tutorials, and YouTube.

Last updated: **February 18, 2026**.

---

## How to Use This Doc

| Column | Purpose |
|--------|---------|
| **Marketing angle** | One-line pitch, audience, emotional hook |
| **Content angle** | Blog post, tweet, Reddit post theme |
| **Video outline** | Structure for a 5–15 min dev video |
| **Script outline** | Beats and talking points (expand into full script) |

---

## Chat Channels

### Telegram

| | |
|---|-----|
| **Marketing angle** | “Your AI agent in your pocket. Talk from Telegram — no app, no signup. Pair once, chat from anywhere.” Target: makers, remote teams, privacy-conscious users. |
| **Content angle** | “Add a Telegram bot in 5 minutes”; “Control your robot from Telegram”; “AI assistant without leaving the chat app.” |
| **Video outline** | **Title:** ZeroClaw + Telegram: AI Bot in 15 Minutes. **1)** Intro: what ZeroClaw is (10s). **2)** Prereqs: API key, BotFather token (30s). **3)** `zeroclaw onboard` + Telegram config (2m). **4)** Pairing flow: message bot → pairing code → authorized (1m). **5)** Chat: ask a question, show response (1m). **6)** Optional: model switch via `/model` (30s). **7)** Outro: link to docs, GitHub. |
| **Script outline** | Hook: “Run an AI assistant from Telegram without leaving the app.” Step 1: BotFather → token. Step 2: `zeroclaw onboard`, add token, set allowlist. Step 3: Message bot, run pairing command, chat. Demo: “What’s the capital of France?” Show latency. Tease: “Same agent works on Discord, Slack, CLI.” CTA: Star repo, try on RPi. |

### Discord

| | |
|---|-----|
| **Marketing angle** | “AI bot for your Discord server. Allowlist per channel. In-chat model switch. Same lightweight runtime as Telegram.” Target: dev communities, gaming, open-source projects. |
| **Content angle** | “Add ZeroClaw to your Discord server”; “Dev community AI assistant”; “Discord bot without Node.js.” |
| **Video outline** | **Title:** ZeroClaw Discord Bot — Lightweight AI for Servers. **1)** Create Discord app, bot token (1m). **2)** Enable MESSAGE CONTENT intent (30s). **3)** Config: `[channels_config.discord]`, allowlist (1m). **4)** `zeroclaw daemon`, invite bot (1m). **5)** Demo: ask in channel, show reply (1m). **6)** `/models` to switch provider (30s). |
| **Script outline** | Hook: “Most Discord AI bots are heavy. ZeroClaw is 3.4MB.” Setup: Discord Developer Portal → app → bot → copy token. Config: `allowed_users` = your ID or `*` for testing. Run daemon, invite, pair. Demo: “Summarize the last 5 messages.” CTA: Add to your server. |

### Slack

| | |
|---|-----|
| **Marketing angle** | “Enterprise AI in Slack. Allowlist by user. Self-hosted, your data. No SaaS lock-in.” Target: SRE, DevOps, internal tools teams. |
| **Content angle** | “Internal AI assistant for engineering”; “Slack bot that runs on your VPS”; “Runbook agent in Slack.” |
| **Video outline** | **Title:** ZeroClaw + Slack — Self-Hosted Team AI. **1)** Slack app, Bot Token Scopes (1m). **2)** Config: `[channels_config.slack]` (1m). **3)** Daemon, install to workspace (1m). **4)** Demo: @mention bot, get response (1m). **5)** Use case: “Run a status check” (30s). |
| **Script outline** | Hook: “Internal AI assistant without sending data to OpenAI’s Slack app.” Why self-host: control, compliance. Setup: api.slack.com → Create App → OAuth. Config: token, allowlist. Demo: “What’s our deployment status?” (tool: shell or custom). CTA: Try for your team. |

### WhatsApp

| | |
|---|-----|
| **Marketing angle** | “AI on WhatsApp. Meta Cloud API. Webhook + tunnel. Reach 2B users where they already chat.” Target: businesses, support, global outreach. |
| **Content angle** | “WhatsApp AI bot in production”; “ZeroClaw + ngrok for WhatsApp webhook”; “Support bot without custom app.” |
| **Video outline** | **Title:** ZeroClaw WhatsApp Bot — Webhook Setup. **1)** Meta Developer, WhatsApp Business API (2m). **2)** Webhook URL, verify token (1m). **3)** Tunnel (ngrok/Cloudflare) for local dev (1m). **4)** Config: `[channels_config.whatsapp]`, `allowed_numbers` (1m). **5)** Demo: send message, get reply (1m). |
| **Script outline** | Hook: “2 billion users on WhatsApp. Add AI without building an app.” Prereq: Meta Business account. Webhook: needs public HTTPS. Tunnel: ngrok or Cloudflare. Config: verify token, webhook secret. Demo: “Hey” → “Hi! I’m your ZeroClaw assistant.” CTA: Scale with ZeroClaw on VPS. |

### Signal

| | |
|---|-----|
| **Marketing angle** | “Privacy-first AI. Signal + ZeroClaw. E2E where possible. Self-hosted, no trace.” Target: privacy advocates, journalists, secure comms. |
| **Content angle** | “AI on Signal”; “Privacy-preserving agent”; “signal-cli bridge for ZeroClaw.” |
| **Video outline** | **Title:** ZeroClaw + Signal — Privacy-First AI. **1)** signal-cli setup, link device (2m). **2)** HTTP bridge for ZeroClaw (1m). **3)** Config: `[channels_config.signal]`, `allowed_from` (1m). **4)** Demo: DM agent (1m). |
| **Script outline** | Hook: “Signal users care about privacy. ZeroClaw + Signal = self-hosted, no cloud.” signal-cli: install, register. Bridge: HTTP endpoint. Config: phone numbers allowlist. Demo: “What’s 2+2?” CTA: Privacy-first AI. |

### Matrix

| | |
|---|-----|
| **Marketing angle** | “Decentralized AI. Matrix + ZeroClaw. E2EE rooms. Federated, open protocol.” Target: Matrix users, decentralization advocates, self-hosting. |
| **Content angle** | “AI bot in Matrix with E2EE”; “ZeroClaw Matrix setup”; “Decentralized assistant.” |
| **Video outline** | **Title:** ZeroClaw on Matrix — E2EE AI Bot. **1)** Matrix account, access token (1m). **2)** Create room, invite bot (30s). **3)** Config: home server, token, room_id, device_id (2m). **4)** E2EE: key sharing, trust (1m). **5)** Demo: encrypted room, ask question (1m). |
| **Script outline** | Hook: “Matrix users want E2EE. ZeroClaw supports it.” Docs: matrix-e2ee-guide.md. Setup: token, room, device_id. Common pitfall: key sharing. Demo: encrypted room. CTA: Federated AI. |

### Webhooks

| | |
|---|-----|
| **Marketing angle** | “HTTP endpoint for your AI. Webhook = API. Integrate with anything. Pairing, no public bind by default.” Target: developers, API-first products, automation. |
| **Content angle** | “ZeroClaw as an API”; “Webhook-powered AI”; “Add AI to your pipeline.” |
| **Video outline** | **Title:** ZeroClaw Webhook — AI as HTTP API. **1)** Gateway mode: `zeroclaw gateway` (30s). **2)** Endpoint: POST /webhook, JSON body (1m). **3)** Pairing: token in header (30s). **4)** Demo: curl request, JSON response (1m). **5)** Use case: CI/CD, Zapier, custom app (30s). |
| **Script outline** | Hook: “Expose your AI as an HTTP endpoint.” Gateway: bind, tunnel. Payload: `{"message": "..."}`. Pairing: `X-Zeroclaw-Token`. Demo: curl. Use case: “Trigger from GitHub Action.” CTA: Build on it. |

### iMessage (macOS)

| | |
|---|-----|
| **Marketing angle** | “AI in iMessage. AppleScript bridge. Native macOS. No third-party app.” Target: Mac users, Apple ecosystem. |
| **Content angle** | “iMessage AI on Mac”; “Native Mac assistant”; “AppleScript + ZeroClaw.” |
| **Video outline** | **Title:** ZeroClaw iMessage — AI in Your Mac Messages. **1)** macOS only, Full Disk Access (30s). **2)** Config: `[channels_config.imessage]` (1m). **3)** Demo: send iMessage to self, get reply (1m). |
| **Script outline** | Hook: “iMessage on Mac — now with AI.” Prereq: Full Disk Access. Config: enable imessage. Demo: “Text yourself, AI replies.” CTA: Mac-native. |

### DingTalk / QQ (China)

| | |
|---|-----|
| **Marketing angle** | “AI for Chinese workspaces. DingTalk, QQ. Same runtime, local or overseas deployment.” Target: China market, global teams with China offices. |
| **Content angle** | “ZeroClaw 钉钉/QQ 集成”; “Chinese workspace AI”; “DingTalk Stream Mode.” |
| **Video outline** | **Title:** ZeroClaw + DingTalk — 中国企业微信AI. **1)** DingTalk developer, app credentials (1m). **2)** Stream mode config (1m). **3)** Demo: 发消息，收回复 (1m). |
| **Script outline** | Hook: “钉钉/QQ 用户：ZeroClaw 支持。” 配置：Stream Mode，凭证。演示：中文对话。CTA: 中国企业。 |

---

## AI Providers

### OpenRouter

| | |
|---|-----|
| **Marketing angle** | “200+ models, one API key. Switch Claude, GPT, Llama without changing code. Cost routing, fallbacks.” Target: cost-conscious devs, multi-model products. |
| **Content angle** | “One key for 200 models”; “OpenRouter + ZeroClaw cost routing”; “Model routing with hint.” |
| **Video outline** | **Title:** ZeroClaw + OpenRouter — 200 Models, 1 Key. **1)** openrouter.ai/keys (30s). **2)** `zeroclaw onboard --provider openrouter` (30s). **3)** `/model anthropic/claude-3.5-sonnet` in chat (30s). **4)** `[[model_routes]]` for hint-based routing (1m). **5)** Demo: switch model, compare outputs (1m). |
| **Script outline** | Hook: “One API key, 200 models.” OpenRouter: unified API. Onboard: provider openrouter. In-chat: `/model` to switch. Config: `model_routes` for `hint:reasoning` → Opus. Demo: routing. CTA: Cost-optimize. |

### Ollama (local)

| | |
|---|-----|
| **Marketing angle** | “AI entirely on your machine. Ollama + ZeroClaw. No API cost. Works offline. Perfect for RPi, homelab.” Target: privacy, offline, homelab, RPi. |
| **Content angle** | “100% local AI with ZeroClaw”; “Ollama on Raspberry Pi”; “No cloud, no API key.” |
| **Video outline** | **Title:** ZeroClaw + Ollama — Fully Local AI. **1)** Install Ollama, pull Llama (1m). **2)** Config: `default_provider = "ollama"` (30s). **3)** Demo: no internet, chat works (1m). **4)** RPi: smaller model (llama3.2:3b) (30s). |
| **Script outline** | Hook: “Zero cloud. Zero API cost.” Ollama: local inference. Config: ollama provider. Demo: disconnect wifi, still works. RPi: 3B model fits. CTA: Homelab AI. |

### Anthropic / OpenAI / Google / DeepSeek / xAI / etc.

| | |
|---|-----|
| **Marketing angle** | “Bring your own key. ZeroClaw works with Claude, GPT, Gemini, DeepSeek, Grok. Swap in one line.” Target: teams with existing API contracts. |
| **Content angle** | “Multi-provider ZeroClaw”; “Claude today, GPT tomorrow”; “Provider-agnostic agent.” |
| **Video outline** | **Title:** ZeroClaw — Swap AI Providers in Seconds. **1)** Show config: `default_provider = "anthropic"` (15s). **2)** Change to `openai`, restart (15s). **3)** Same agent, different model (30s). **4)** In-chat `/models` to list, `/model X` to switch (30s). |
| **Script outline** | Hook: “Not locked to one AI.” Config: one line. Restart or in-chat switch. Demo: Anthropic → OpenAI → same conversation flow. CTA: Your key, your choice. |

---

## Productivity: Composio (1000+ OAuth Apps)

| | |
|---|-----|
| **Marketing angle** | “Gmail, Notion, GitHub, Slack — 1000+ apps. One OAuth flow. Agent acts inside your tools.” Target: productivity nerds, power users, SaaS builders. |
| **Content angle** | “ZeroClaw + Composio — AI in your stack”; “Connect Gmail, Notion in 5 min”; “OAuth integrations without coding.” |
| **Video outline** | **Title:** ZeroClaw + Composio — 1000+ App Integrations. **1)** Composio: sign up, get API key (1m). **2)** Config: enable Composio tool, entity_id (1m). **3)** OAuth: connect Gmail (1m). **4)** Demo: “Check my last 3 emails” (1m). **5)** Tease: Notion, Linear, GitHub (30s). |
| **Script outline** | Hook: “1000+ apps. One agent.” Composio: OAuth aggregator. Config: composio feature, key. Connect: Gmail OAuth flow. Demo: “Summarize my inbox.” Tease: Notion, GitHub. CTA: Add your stack. |

---

## Tools & Automation

### Shell

| | |
|---|-----|
| **Marketing angle** | “Agent runs commands. Sandboxed. Allowlist. Runbooks as conversation.” Target: SRE, DevOps, automation. |
| **Content angle** | “AI that runs your runbooks”; “Shell tool + sandbox”; “Secure command execution.” |
| **Video outline** | **Title:** ZeroClaw Shell Tool — AI Runbooks. **1)** Shell tool: built-in (15s). **2)** Sandbox: native vs Docker (30s). **3)** Allowlist: what commands are allowed (30s). **4)** Demo: “Run `df -h`” (30s). **5)** Caution: security, allowlist best practices (30s). |
| **Script outline** | Hook: “AI that runs commands — safely.” Sandbox: isolate. Allowlist: deny by default. Demo: simple command. Caution: no `rm -rf`. CTA: Runbook agent. |

### File System

| | |
|---|-----|
| **Marketing angle** | “Read and write files. Scoped paths. Agent as file assistant.” Target: document automation, code assistants. |
| **Content angle** | “AI file assistant”; “Scoped file access”; “Document processing with ZeroClaw.” |
| **Video outline** | **Title:** ZeroClaw File Tool — AI File Assistant. **1)** File read/write tools (15s). **2)** Workspace scoping (30s). **3)** Demo: “Read ~/notes/idea.md and summarize” (1m). |
| **Script outline** | Hook: “Agent that reads and writes files.” Scope: workspace. Demo: read, summarize, write. CTA: Document AI. |

### Browser

| | |
|---|-----|
| **Marketing angle** | “Agent controls Chrome. Fill forms, click, navigate. Computer-use without heavy frameworks.” Target: automation, RPA, testing. |
| **Content angle** | “AI browser automation”; “ZeroClaw computer use”; “Headless browser control.” |
| **Video outline** | **Title:** ZeroClaw Browser Tool — AI Web Automation. **1)** Browser tool: Chrome/Chromium (30s). **2)** Demo: “Go to example.com, get the title” (1m). **3)** Advanced: form fill, click (1m). |
| **Script outline** | Hook: “AI that browses the web.” Chrome: headless. Demo: navigate, extract. Advanced: form fill. CTA: Web automation. |

### Cron / Schedule

| | |
|---|-----|
| **Marketing angle** | “Scheduled AI tasks. Cron in workspace. Daily digest, alerts, recurring checks.” Target: power users, ops. |
| **Content angle** | “AI cron jobs”; “Daily AI digest”; “Scheduled agent tasks.” |
| **Video outline** | **Title:** ZeroClaw Cron — Scheduled AI Tasks. **1)** Cron tools: add, list, run (30s). **2)** Workspace: `~/.zeroclaw/workspace/cron/` (30s). **3)** Demo: add daily “summarize news” task (1m). |
| **Script outline** | Hook: “AI on a schedule.” Cron: workspace dir. Add: cron_add tool. Demo: daily task. CTA: Automate. |

### Memory (store / recall / forget)

| | |
|---|-----|
| **Marketing angle** | “Agent remembers. SQLite, no Pinecone. Hybrid search. Recall across sessions.” Target: long-context use cases, personalized assistants. |
| **Content angle** | “ZeroClaw memory — no Pinecone”; “SQLite vector + FTS5”; “Persistent agent memory.” |
| **Video outline** | **Title:** ZeroClaw Memory — How It Works. **1)** Memory tools: store, recall, forget (30s). **2)** Backend: SQLite, vector + keyword (30s). **3)** Demo: store fact, new session, recall (1m). **4)** Compare: no token burn on reload (30s). |
| **Script outline** | Hook: “Memory without Pinecone.” SQLite: local. Tools: store, recall, forget. Demo: persist across restarts. Advantage vs OpenClaw: no full reload. CTA: Persistent agent. |

### Git

| | |
|---|-----|
| **Marketing angle** | “Agent that understands your repo. Status, diff, commit. Code assistant with Git.” Target: developers. |
| **Content angle** | “AI + Git operations”; “ZeroClaw code assistant”; “Git tool for agents.” |
| **Video outline** | **Title:** ZeroClaw Git Tool — AI Code Assistant. **1)** Git tool: status, diff, operations (30s). **2)** Demo: “What changed in the last commit?” (1m). **3)** Scoping: workspace repo (30s). |
| **Script outline** | Hook: “AI that knows your Git.” Tool: status, diff. Demo: “Summarize changes.” Scope: workspace. CTA: Dev assistant. |

### HTTP Request

| | |
|---|-----|
| **Marketing angle** | “Agent calls APIs. GET, POST. Add any REST API as a capability.” Target: integration builders. |
| **Content angle** | “AI that calls APIs”; “REST integration”; “HTTP tool for agents.” |
| **Video outline** | **Title:** ZeroClaw HTTP Tool — API Integration. **1)** HttpRequest tool (15s). **2)** Demo: “GET https://api.example.com/status” (30s). **3)** Use case: webhook, custom API (30s). |
| **Script outline** | Hook: “Agent that calls your APIs.” Tool: HTTP. Demo: GET, parse. Use case: internal API. CTA: Integrate. |

### Screenshot / Pushover

| | |
|---|-----|
| **Marketing angle** | “Screenshot tool: capture screen. Pushover: push notifications. Alerting, monitoring.” Target: ops, alerting. |
| **Content angle** | “AI screenshot tool”; “Push notifications from agent”; “Monitoring with ZeroClaw.” |
| **Video outline** | **Title:** ZeroClaw Screenshot + Pushover — Visual Alerts. **1)** Screenshot: capture (15s). **2)** Pushover: notify phone (30s). **3)** Demo: “Take screenshot and push to me” (30s). |
| **Script outline** | Hook: “AI that sees your screen and alerts you.” Screenshot: capture. Pushover: push. Demo: screenshot + notify. CTA: Monitoring. |

---

## Hardware Peripherals

### Raspberry Pi GPIO

| | |
|---|-----|
| **Marketing angle** | “Control hardware from chat. GPIO on RPi. Lights, motors, sensors. Natural language → hardware.” Target: makers, IoT, robotics. |
| **Content angle** | “ZeroClaw on Raspberry Pi — GPIO control”; “AI + hardware”; “Chat to blink an LED.” |
| **Video outline** | **Title:** ZeroClaw + Raspberry Pi GPIO — AI Controls Hardware. **1)** RPi setup, build with hardware feature (1m). **2)** Peripheral: `zeroclaw peripheral add rpi_gpio ...` (1m). **3)** Demo: Telegram “turn on LED” (1m). **4)** Show: GPIO as tools (30s). |
| **Script outline** | Hook: “Talk to your hardware.” RPi: build, peripheral add. GPIO: pins as tools. Demo: Telegram → LED. CTA: Maker AI. |

### Nucleo / Arduino

| | |
|---|-----|
| **Marketing angle** | “MCU from your laptop. Nucleo, Arduino over USB. Flash, read, control. Host-mediated hardware.” Target: embedded devs, makers. |
| **Content angle** | “ZeroClaw + Nucleo”; “Arduino from AI”; “USB serial to MCU.” |
| **Video outline** | **Title:** ZeroClaw + Nucleo — AI Talks to MCU. **1)** Board setup, firmware (1m). **2)** `zeroclaw peripheral add nucleo /dev/ttyUSB0` (30s). **3)** Demo: read sensor, send command (1m). |
| **Script outline** | Hook: “AI and microcontrollers.” Nucleo: USB serial. Peripheral: add, path. Demo: read/write. CTA: Embedded AI. |

---

## Coming Soon (Content Prep)

### Home Assistant / Smart Home

| | |
|---|-----|
| **Marketing angle** | “Smart home concierge. Lights, thermostats, scenes from chat. Local or cloud hub.” Target: smart home enthusiasts. |
| **Content angle** | “ZeroClaw + Home Assistant (coming soon)”; “Voice to lights”; “Smart home AI.” |
| **Video outline** | Placeholder: “When Home Assistant lands: demo lights, thermostat, scene from Telegram.” |
| **Script outline** | Tease: “Home Assistant integration coming. Preview: natural language → lights.” |

### Spotify / Sonos / Music

| | |
|---|-----|
| **Marketing angle** | “Music from chat. Control playback, playlists. Smart speaker agent.” Target: music lovers, smart home. |
| **Content angle** | “AI jukebox”; “Voice to music”; “ZeroClaw + Spotify (coming).” |
| **Video outline** | Placeholder: “Music integrations coming: Spotify, Sonos.” |
| **Script outline** | Tease: “Play music from Telegram. Coming soon.” |

### Nostr / Social

| | |
|---|-----|
| **Marketing angle** | “Decentralized AI. Nostr DMs. No platform lock-in.” Target: Nostr users, decentralization. |
| **Content angle** | “AI on Nostr”; “Decentralized assistant”; “NIP-04 DMs.” |
| **Video outline** | Placeholder: “Nostr channel: DMs with your agent.” |
| **Script outline** | Tease: “Nostr support coming. DMs with your AI.” |

---

## Cross-Integration Videos (Combos)

### “ZeroClaw in 15 Minutes — Telegram + OpenRouter + Memory”

| | |
|---|-----|
| **Marketing angle** | Full starter flow. Target: net-new users. |
| **Video outline** | **1)** Clone, bootstrap (1m). **2)** Onboard: OpenRouter key, Telegram token (2m). **3)** Pair, chat (1m). **4)** Store a fact, recall in new message (1m). **5)** Outro: what’s next (30s). |
| **Script outline** | Hook: “From zero to AI in Telegram in 15 minutes.” Step 1: bootstrap. Step 2: onboard. Step 3: pair + chat. Step 4: memory demo. CTA: Star, try on RPi. |

### “ZeroClaw on Raspberry Pi — Telegram + Ollama + GPIO”

| | |
|---|-----|
| **Marketing angle** | Edge AI + hardware. Target: makers, IoT. |
| **Video outline** | **1)** RPi setup, build (2m). **2)** Ollama + small model (1m). **3)** Telegram (30s). **4)** GPIO peripheral, demo LED (2m). |
| **Script outline** | Hook: “AI on a $35 board. Local. No cloud.” RPi: build. Ollama: 3B model. Telegram: chat. GPIO: blink. CTA: Build your own. |

### “Enterprise ZeroClaw — Slack + Anthropic + Shell + Audit”

| | |
|---|-----|
| **Marketing angle** | Internal platform. Target: enterprise, SRE. |
| **Video outline** | **1)** Slack setup (1m). **2)** Anthropic key (30s). **3)** Shell allowlist (30s). **4)** Audit logging (30s). **5)** Demo: @mention, run command (1m). |
| **Script outline** | Hook: “Internal AI platform. Secure.” Slack: workspace. Provider: Anthropic. Shell: allowlist. Audit: logs. Demo: status check. CTA: Internal platform. |

---

## Cross-Links

- **Registry:** `zeroclaw integrations info <name>`
- **Providers:** [docs/providers-reference.md](../providers-reference.md)
- **Channels:** [docs/channels-reference.md](../channels-reference.md)
- **Hardware:** [docs/hardware/](../hardware/README.md), [docs/adding-boards-and-tools.md](../adding-boards-and-tools.md)
- **Use cases:** [docs/use-cases-and-hackathon-plan.md](../use-cases-and-hackathon-plan.md)
- **Marketing:** [developer-content.md](developer-content.md), [reddit-outreach.md](reddit-outreach.md)
