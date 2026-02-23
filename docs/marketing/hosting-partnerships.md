# Hosting Partnerships — 1-Click Deploy Content

Potential partnerships with hosting services for one-click deploy setups. Partnership angles, technical requirements, content ideas, and outreach copy.

Last updated: **February 18, 2026**.

---

## 1. Partner Categories

### Tier 1: VPS + App Marketplace

| Provider | 1-click / marketplace | Audience | Partnership type |
|----------|------------------------|----------|-------------------|
| **DigitalOcean** | App Platform, Droplet 1-click, Marketplace | Indies, startups, devs | Marketplace listing; Droplet image |
| **Linode (Akamai)** | Marketplace, StackScripts | Devs, homelab | Marketplace app; StackScript |
| **Vultr** | Marketplace, Startups | Edge, global | Marketplace listing |
| **Hetzner** | Marketplace (limited) | EU, cost-conscious | Image or install script |
| **OVH** | Marketplace | EU, enterprise | Listing or template |
| **UpCloud** | Marketplace | EU, perf-focused | Listing |
| **Racknerd / BuyVM** | Low-cost VPS | Budget, homelab | Install script, docs |

### Tier 2: PaaS / Developer Platforms

| Provider | 1-click / deploy | Audience | Partnership type |
|----------|-------------------|----------|-------------------|
| **Railway** | Deploy from GitHub; one-click templates | Devs, side projects | Template; blog post |
| **Render** | Blueprint; one-click services | Indies, startups | Blueprint; docs |
| **Fly.io** | Dockerfile deploy | Edge, global | Docs; example app |
| **Coolify** | Self-hosted PaaS; app store | Homelab, self-hosters | App template; one-click |
| **CapRover** | Self-hosted PaaS | Homelab | One-click app |
| **Dokku** | Self-hosted Heroku | Homelab | Buildpack or Docker |
| **Northflank** | Kubernetes PaaS | Enterprise | Helm chart |

### Tier 3: Docker & Container Registries

| Provider | Role | Partnership type |
|----------|------|-------------------|
| **Docker Hub** | Image host; official image | `zeroclaw/zeroclaw` official; verified |
| **GitHub Container Registry (ghcr.io)** | Already used | Docs; `docker pull` instructions |
| **Portainer** | Docker UI; app templates | App template for Portainer |
| **Yacht** | Lightweight Docker UI | Template |
| **Dockge** | Docker Compose UI | Compose template |

### Tier 4: Homelab & Self-Hosted

| Platform | Role | Partnership type |
|----------|------|-------------------|
| **TrueNAS** | App catalog (TrueCharts, etc.) | Chart or Docker Compose |
| **Unraid** | Community apps | Template |
| **Proxmox** | LXC/VMs; Turnkey templates | Turnkey template or script |
| **CasaOS** | Home server OS | App store listing |
| **Umbrel** | Node/home server | App if compatible |
| **Home Assistant** | Add-on or integration | Add-on; companion docs |

### Tier 5: Edge / IoT Hosting

| Provider | Role | Partnership type |
|----------|------|-------------------|
| **Balena** | Fleet, edge devices | balenaBlock or docs |
| **AWS IoT** | Edge, Lambda | Reference architecture |
| **Cloudflare Workers** | Edge (limited fit) | Not primary; gateway proxy possible |
| **Replit** | Browser-based dev | Template if supported |
| **Gitpod / Codespaces** | Dev environments | Quickstart in cloud IDE |

---

## 2. 1-Click Deploy Technical Requirements

### What ZeroClaw Provides Today

| Asset | Location | Notes |
|-------|----------|-------|
| **Bootstrap script** | `scripts/bootstrap.sh` | `curl ... | bash` or clone + run |
| **Dockerfile** | `Dockerfile` | Multi-stage; release uses distroless |
| **Docker Compose** | (create if needed) | For gateway + optional Ollama |
| **Config template** | `dev/config.template.toml` | Defaults for local/Ollama |

### What Partners Typically Need

| Requirement | ZeroClaw status | Action |
|--------------|-----------------|--------|
| **Docker image** | ✅ `ghcr.io/zeroclaw-labs/zeroclaw` | Publish to Docker Hub if partner requires |
| **docker-compose.yml** | Partial | Create partner-ready compose with env vars |
| **Environment variables** | API_KEY, PROVIDER, etc. | Document for platform UI |
| **Health check** | `/health` or similar | Verify gateway exposes this |
| **Persistent storage** | `~/.zeroclaw`, workspace | Volume mount; document path |
| **Port** | 3000 (gateway) | Document; allow override |
| **One-click config UI** | N/A | Partner builds; we provide schema |

### Minimal Docker Compose (Template for Partners)

```yaml
# Partner-ready minimal compose
# Env: ZEROCLAW_API_KEY, ZEROCLAW_PROVIDER (openrouter, openai, ollama, etc.)
services:
  zeroclaw:
    image: ghcr.io/zeroclaw-labs/zeroclaw:latest
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - PROVIDER=${ZEROCLAW_PROVIDER:-openrouter}
      - ZEROCLAW_MODEL=${ZEROCLAW_MODEL:-anthropic/claude-sonnet-4-20250514}
    volumes:
      - zeroclaw-data:/zeroclaw-data
    # API key via secret or env
volumes:
  zeroclaw-data:
```

---

## 3. Content for Partnerships

### Blog Post Ideas (Co-authored or Solo)

| Title | Partner | Angle |
|-------|---------|-------|
| "Deploy ZeroClaw on DigitalOcean in 1 Click" | DigitalOcean | Marketplace listing; step-by-step |
| "Run ZeroClaw on Railway — From Zero to Chat in 5 Minutes" | Railway | PaaS deploy; GitHub template |
| "ZeroClaw + Coolify: Self-Hosted AI Agent in Your Homelab" | Coolify | Homelab; one-click app |
| "Deploy ZeroClaw on a $5 VPS (Hetzner, Vultr, Linode)" | Generic | Cost angle; script works anywhere |
| "ZeroClaw on Fly.io: Edge AI Agent, Global Deployment" | Fly.io | Edge; regions |
| "Add ZeroClaw to Your Portainer Stack" | Portainer | Docker UI; compose template |
| "ZeroClaw in Docker: Production Setup" | Docker | Official-ish; best practices |

### Landing Page Content (Partner Section)

| Section | Copy |
|---------|------|
| **Hero** | "Deploy ZeroClaw in one click on [Partner]. No Mac Mini. No cloud lock-in. Your AI agent in minutes." |
| **Steps** | 1. Click Deploy. 2. Add API key. 3. Pair your Telegram/Discord. 4. Chat. |
| **Specs** | 3.4MB binary. &lt;5MB RAM. &lt;10ms startup. Runs on the smallest [Partner] instance. |
| **CTA** | "Deploy now on [Partner]" — links to partner 1-click URL |

### Video Script Ideas (Partner-Specific)

| Video | Partner | Duration | Beats |
|-------|---------|----------|-------|
| "ZeroClaw on DigitalOcean — 1-Click Deploy" | DigitalOcean | 5–8 min | Marketplace → Create → Add key → Pair → Chat |
| "Deploy ZeroClaw on Railway (Free Tier)" | Railway | 6–8 min | GitHub → New project → ZeroClaw template → Deploy → Chat |
| "ZeroClaw + Coolify: Homelab AI in 5 Min" | Coolify | 6–8 min | Coolify app store → Deploy → Config → Chat |
| "Run ZeroClaw on a $5 Hetzner VPS" | Hetzner | 8–10 min | Create CX11 → SSH → bootstrap → onboard → systemd |
| "ZeroClaw in Portainer — Docker One-Click" | Portainer | 5–7 min | Portainer → Stack → paste compose → Deploy |

### Partner Doc Page (Template)

Each partner gets a doc page: `docs/deploy/[partner].md`

**Structure:**
- Prerequisites (partner account, API key)
- One-click option (if available): link + screenshot
- Manual option: step-by-step
- Config: env vars, config.toml
- Post-deploy: pairing, channels
- Troubleshooting: common partner-specific issues
- Link to partner’s docs, our network-deployment.md

---

## 4. Outreach Templates

### Email: Marketplace / 1-Click Partner (DigitalOcean, Linode, Vultr)

```
Subject: ZeroClaw — 1-Click App for [Partner] Marketplace

Hi [Name],

We're ZeroClaw Labs — we build an open-source, Rust-based AI agent runtime that runs on minimal hardware (under 5MB RAM, single 3.4MB binary). It supports Telegram, Discord, Slack, 28+ LLM providers, and runs on Raspberry Pi or any VPS.

We'd like to add ZeroClaw to the [Partner] Marketplace / App Platform so users can deploy with one click. We have:
- Docker image (ghcr.io/zeroclaw-labs/zeroclaw)
- Docker Compose for gateway mode
- Bootstrap script for non-Docker installs
- Documentation for env vars and config

What's your process for adding new apps? We're happy to meet marketplace requirements (security review, docs, etc.) and can provide a partner-specific doc page.

ZeroClaw: https://github.com/zeroclaw-labs/zeroclaw
Docker: ghcr.io/zeroclaw-labs/zeroclaw

Best,
[Your name]
```

### Email: PaaS / Template Partner (Railway, Render, Coolify)

```
Subject: ZeroClaw Template / Blueprint for [Partner]

Hi [Name],

ZeroClaw is an open-source AI agent runtime (Rust, 3.4MB binary, <5MB RAM) that runs on anything from a Pi to a VPS. Users deploy it for Telegram bots, Discord assistants, and self-hosted AI.

We'd like to create a one-click deploy template for [Partner] so your users can spin up ZeroClaw in a few clicks. We have a Dockerfile and can provide a template/blueprint that wires API key and config via env vars.

Would you be open to featuring ZeroClaw in your template gallery or app store? We can co-author a short blog post or doc for your audience.

Repo: https://github.com/zeroclaw-labs/zeroclaw

Best,
[Your name]
```

### Email: Homelab / Community Partner (Coolify, Portainer, TrueNAS)

```
Subject: ZeroClaw — App Template for [Platform]

Hi [Name],

We build ZeroClaw — a lightweight, self-hosted AI agent runtime (Rust, single binary, <5MB RAM). It fits homelab use cases: Telegram/Discord bots, runbook automation, local AI with Ollama.

We'd like to add a one-click app template for [Platform] so your community can deploy ZeroClaw easily. We have Docker Compose and can adapt to your template format.

In return we'd link to [Platform] from our deploy docs and mention the integration in our newsletter/community.

Interested? We can submit a PR or follow your submission process.

Best,
[Your name]
```

---

## 5. Co-Marketing Content Ideas

| Format | Partner | Content |
|--------|---------|---------|
| **Blog swap** | DigitalOcean | We write "Deploy ZeroClaw on DO"; they publish or link |
| **Webinar** | Railway, Render | "From Zero to AI Agent in 15 Min" — live deploy |
| **Template gallery** | Coolify, Portainer | Submit template; they feature |
| **Case study** | Any | "How [user] runs ZeroClaw on [Partner]" |
| **Social** | Any | Joint post: "Deploy ZeroClaw on [Partner] in 1 click" |
| **Hackathon** | DigitalOcean, others | Sponsor credits; "Deploy your hackathon project on [Partner]" |

---

## 6. Checklist: Before Partner Outreach

- [ ] Docker image published and documented (`ghcr.io`, optionally Docker Hub)
- [ ] `docker-compose.yml` partner-ready (env vars, volume, port)
- [ ] Env var schema documented (API_KEY, PROVIDER, MODEL, etc.)
- [ ] Health/readiness endpoint (if partner requires)
- [ ] Docs page template for `docs/deploy/[partner].md`
- [ ] One-pager (PDF or Notion) for partner internal review

---

## 7. Priority Order (Suggested)

| Priority | Partner | Rationale |
|----------|---------|-----------|
| 1 | **Coolify** | Homelab; self-hosters; strong fit; community-driven |
| 2 | **Railway** | Dev audience; easy deploy; free tier |
| 3 | **DigitalOcean** | Large audience; Marketplace; credibility |
| 4 | **Hetzner** | EU; cost-conscious; `curl | bash` works today |
| 5 | **Portainer** | Docker users; template-based |
| 6 | **Render** | Indies; Blueprint |
| 7 | **Fly.io** | Edge; global |
| 8 | **Linode / Vultr** | Marketplace; similar to DO |

---

## 8. Cross-Links

- [one-click-bootstrap.md](../one-click-bootstrap.md) — bootstrap script
- [network-deployment.md](../network-deployment.md) — deployment, tunnel, gateway
- [use-cases-and-hackathon-plan.md](../use-cases-and-hackathon-plan.md) — 1.11 One-Click Deployments
- [ai-devrel-strategy.md](ai-devrel-strategy.md) — video scripts, tutorials
- [hackathon-content/sponsors-outreach.md](../hackathon-content/sponsors-outreach.md) — sponsor outreach
