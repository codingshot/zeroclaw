# Robotics Angle — ZeroClaw

Positioning, channels, and storytelling for robotics and edge AI. ZeroClaw as the “brain” for robots and maker projects.

Last updated: **February 18, 2026**.

---

## Positioning

**One-liner:** “ZeroClaw is a Rust AI agent runtime that runs on $10 boards with <5MB RAM — the brain for robots, Pi projects, and edge devices.”

**Story angles:**
- **Edge brain:** Agent runtime that fits on microcontrollers and SBCs; control robots via Telegram/Discord.
- **No cloud lock-in:** Self-hosted, local-first; robotics without sending data to SaaS.
- **Hardware-native:** Peripheral trait for GPIO, sensors, motors; add tools for specific boards.
- **Memory-safe:** Rust guarantees; no segfaults in production robots.

---

## Target Channels

| Channel | Type | Best content |
|---------|------|--------------|
| r/robotics | Subreddit | “AI agent controlling my robot via Telegram” |
| r/raspberry_pi | Subreddit | “ZeroClaw on Pi: <5MB RAM, single binary” |
| r/arduino | Subreddit | “Arduino host + ZeroClaw brain” |
| r/esp32 | Subreddit | ESP32-based projects |
| r/selfhosted | Subreddit | Self-hosted AI, no cloud |
| r/homeautomation | Subreddit | Smart home + AI agent |
| Hackaday | Blog/comments | Project write-ups, “ZeroClaw-powered robot” |
| Robotics Discord/Slack | Communities | Dev support, showcase |
| YouTube (maker channels) | Video | “ZeroClaw robot brain in 15 min” |
| ROS / robotics forums | Forums | Integrations, “agent as ROS node” (future) |

---

## Messaging Hooks

**For robotics enthusiasts:**
> “Run an AI agent as the brain of your robot. ZeroClaw: <5MB RAM, <10ms startup, control from Telegram. Add GPIO tools for your motors and sensors. Rust, open source, self-hosted.”

**For makers / Pi users:**
> “AI on your Raspberry Pi without Node.js or Python runtime. Single 3.4MB binary. Control your project from Telegram or Discord.”

**For DIY robot builders:**
> “Your robot doesn’t need a Mac Mini. ZeroClaw runs on $10 boards. Add a Peripheral for your board; expose GPIO, sensors, or motors as tools.”

---

## Content Ideas

- **Tutorial:** “ZeroClaw + Raspberry Pi: robot brain in 15 minutes.”
- **Demo video:** Telegram → robot movement; show latency, setup.
- **Comparison:** “ZeroClaw vs running a Python agent on RPi” (RAM, startup, binary).
- **Project showcase:** “Building a Telegram-controlled rover with ZeroClaw” (Hackaday-style write-up).
- **Integration pitch:** “Add ZeroClaw as a node in your robotics stack” (future ROS/ROS2 bridge).

---

## Do / Don’t

**Do:**
- Emphasize specs (RAM, startup, binary size).
- Show real hardware (Pi, Arduino, ESP32).
- Link to docs and reproducible benchmarks.
- Invite “add your project” to ecosystem.

**Don’t:**
- Over-sell “AI” — focus on runtime, reliability, edge fit.
- Promise robotics-specific features not yet built.
- Ignore existing ROS/robotics communities — respect their norms.
