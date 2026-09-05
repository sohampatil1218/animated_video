# CyberDefense Innovations Showcase — Dual Problem Statement Hub

A cinematic, interactive, and responsive cybersecurity product demonstration platform built for hackathons and innovation presentations. It features a centralized **Starting Problem Statement (PS) Selection Portal** and two complete, continuous animated product demonstrations.

---

## Demonstrations Included

### 1. Starting Selection Portal (`index.html`)
The main entry point allowing presenters and judges to select which Problem Statement demonstration to launch:
- **PS 1: ScamShield 2.0** (*Multi-Channel Scam Intelligence & Coordinated Detection — 17 Acts*)
- **PS 2: SecureCode** (*Context-Aware AI Security Analyzer — 13 Acts*)
- Supports direct deep-linking via `#ps1` and `#ps2`.
- Features persistent top HUD `[ 🔀 Switch PS ]` controls to jump between presentations anytime without reloading.

---

### 2. Problem Statement 1: ScamShield 2.0 (`scamshield.html`)
**“ScamShield 2.0: Multi-Channel Scam Intelligence and Coordinated Scam Detection System”**
- **17 Continuous Acts** (~2:45 min runtime):
  1. *The Digital Scam Problem*: Citizen receiving isolated lures across 7 channels (SMS, Email, WhatsApp, Cloned Website, Vishing Call, QR Code, UPI Payment Request).
  2. *The Hidden Connection*: Common entities secretly shared across channels (Phone `+91 98765 43210`, Domain `suspicious-bank-auth.com`, UPI `fakebank@ybl`, Email `support@fakebank-alert.com`, Org `FakeBank Support`).
  3. *The Existing Challenge*: Siloed detection tools (SMS Scanner, Domain Blacklist, Caller ID, UPI Gateway) failing to detect coordinated threats.
  4. *Introducing ScamShield 2.0*: Centralized fraud intelligence platform with live multi-input submission portal (SMS, Email, URL, Phone, UPI, Screenshot).
  5. *Multi-Channel Analysis Pipeline*: 7-stage neural pipeline (*Content Input &rarr; NLP &rarr; Entity Extraction &rarr; Indicator &rarr; Relationship Graph &rarr; Pattern &rarr; Risk*).
  6. *AI/ML Scam Pattern Detection*: 8 social-engineering psychological levers analyzed (*Urgency, Fear, Impersonation, Reward, Suspension, Coercion, Credential Request, Suspicious Syntax*).
  7. *Entity Extraction & Structuring*: Normalizes unstructured citizen reports into structured threat intelligence schema.
  8. *Relationship / Graph Analysis (Hero Scene)*: Dynamic interactive SVG network graph. Central Node: `CAMPAIGN #SCM-2048`, radiating entity nodes, animated relational tethers, and incoming community user connections.
  9. *Coordinated Scam Detection*: Merges 4 distinct citizen incident reports (User A: Delhi, User B: Mumbai, User C: Bengaluru, User D: Hyderabad) into unified syndicate Campaign #SCM-2048.
  10. *Risk Assessment Engine*: Multi-factor convergent weights calculating **Score 92 / 100 &bull; Critical Risk**.
  11. *Explainable Warning*: Non-technical, plain-English breakdown of 5 specific reasons why the interaction is dangerous.
  12. *Preventive Guidance & Interception*: 5 critical citizen directives and real-time shield interceptions (*URL Intercepted, Credentials Blocked, Payment Siphoning Stopped*).
  13. *User Reporting*: 1-click citizen reporting form with live global threat graph node updates.
  14. *Scam Intelligence Dashboard*: SOC command center with real-time metrics (14,892 reports), live fraud feed, and national threat heatmap.
  15. *Historical Intelligence*: Unmasks repeat syndicate offenders by linking current attack to past campaigns (March 2024).
  16. *Complete Workflow*: 12-stage unified system architecture pipeline.
  17. *Project Vision & Finale*: Dynamic typography (*“Don't Analyze the Message Alone. Understand the Network Behind the Scam.”*) and core mission: *Detect. Connect. Explain. Protect.*

---

### 3. Problem Statement 2: SecureCode (`securecode.html`)
**“SecureCode: Context-Aware AI Security Analyzer for Developer-Friendly Vulnerability Detection and Remediation”**
- **13 Continuous Acts** (~2:15 min runtime):
  1. *The Problem (All 6 Errors in One Codebase)*: `database.py:42 SQLi`, `config.js:18 Secret`, `app.js:89 XSS`, `auth.js:64 RCE`, `login.py:88 Pickle`, `package.json:27 Axios CVE`.
  2. *Existing Challenge*: Developer alert fatigue with 384 unresolved findings.
  3. *Introducing SecureCode*: Centralized repository scanning interface with upload simulation.
  4. *Repository Analysis*: 5-stage AST and taint analysis pipeline with radial progress.
  5. *Vulnerability Detection*: Anchored code inspector with severity filters and 3 highlighted critical flaws.
  6. *Context-Aware Analysis*: End-to-end data-flow taint trace from unauthenticated parameter to database.
  7. *Contextual Risk Assessment*: Multi-vector convergence shockwave (Risk Score: 91/100 Critical).
  8. *AI-Powered Explanation*: Interactive Copilot covering all 6 codebase flaws with 5 structured cards.
  9. *AI Remediation*: Line gutters (41–43, etc.), target vs replacement diffs, branch patch generator, and All 6 Fixes Matrix Grid.
  10. *Re-Scan Verification*: Two-stage verification on re-uploaded patched codebase.
  11. *Security Dashboard*: Executive scorecard, before/after metrics, and 27-finding audit table.
  12. *Complete Architecture Workflow*: 12 interconnected pipeline cards.
  13. *Project Vision*: 4 core DevSecOps pillars (*Detect Earlier, Understand Better, Fix Faster, Build More Secure*).

---

## Quick Start / How to Run

### Method 1: Local HTTP Server (Recommended)
```bash
cd /Users/sohampatil/Documents/animation
python3 -m http.server 3000
```
Then open:
- **`http://localhost:3000`** &rarr; Starting PS Selection Portal
- **`http://localhost:3000/scamshield.html`** &rarr; Direct to PS 1: ScamShield 2.0
- **`http://localhost:3000/securecode.html`** &rarr; Direct to PS 2: SecureCode

### Method 2: Direct File Open
You can open `index.html` directly in any web browser:
```bash
open /Users/sohampatil/Documents/animation/index.html
```

---

## Keyboard Controls & Shortcuts

| Key | Action |
| :--- | :--- |
| **`Spacebar`** | Toggle Auto-play / Pause |
| **`←` (Left Arrow)** | Step to Previous Scene |
| **`→` (Right Arrow)** | Step to Next Scene |
| **`1` – `9`, `0`** | Direct jump to Scenes |
| **`F`** | Toggle Fullscreen Mode |
| **`M`** | Toggle Procedural Cyber Sound SFX |
| **`R`** | Replay Presentation from Beginning |

---

## Technical Highlights
- **100% Offline & Zero External Dependencies**: Runs entirely on native browser technologies with no npm packages, CDNs, or remote API calls.
- **Procedural Web Audio API Synthesizer**: Generates all clicks, typing blips, alert chimes, radar sweeps, and campaign chords in real-time.
- **Dual-Presentation Hub Architecture**: Allows instant switching between PS 1 and PS 2 with complete state isolation and deep-link routing.
