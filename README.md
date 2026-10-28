# SecureCode — Animated Product Demonstration

**Context-Aware AI Security Analyzer for Developer-Friendly Vulnerability Detection and Remediation**

---

## Overview

This project is a high-fidelity, interactive, and fully responsive cybersecurity product demonstration. It visually explains the modern AppSec problem, the developer alert fatigue bottleneck, the multi-stage scanning pipeline, contextual taint-flow attack paths, multi-factor risk scoring (91/100 Critical), plain-English AI explanations, side-by-side code remediation, verified re-scanning, continuous security governance dashboards, the 12-step architecture workflow, and the overarching project vision.

Built with pure **HTML5, CSS3, SVG, Canvas, and Vanilla JavaScript (ES6+)**, this application runs completely offline with zero external package dependencies.

---

## Quick Start / How to Run

### Method 1: Open Directly in Browser
You can open `index.html` directly in any modern web browser:
```bash
open /Users/sohampatil/Documents/animation/index.html
```

### Method 2: Local HTTP Server (Recommended)
You can serve the animation locally with Python or Node:
```bash
cd /Users/sohampatil/Documents/animation
python3 -m http.server 3000
```
Then navigate to: **`http://localhost:3000`** in your browser.

---

## Keyboard Controls & Shortcuts

| Key | Action |
| :--- | :--- |
| **`Spacebar`** | Toggle Auto-play / Pause |
| **`←` (Left Arrow)** | Jump to Previous Scene |
| **`→` (Right Arrow)** | Jump to Next Scene |
| **`1` – `9`, `0`** | Direct jump to Scenes 1 through 10 |
| **`F`** | Toggle Fullscreen Mode |
| **`M`** | Toggle Cyber Sound Effects (Procedural Web Audio API) |
| **`R`** | Restart Demo from Beginning |

---

## Demonstration Structure (13 Scenes)

1. **Act I — The Problem (The Hidden Vulnerability Crisis in One Codebase)**
   - Developer working in a unified microservice codebase (`enterprise/fintech-payment-service`).
   - **All 6 Files & Errors in One Codebase**:
     - `database.py:42` — Unsafe SQL query concatenation (`CWE-89 Critical`)
     - `config.js:18` — Hardcoded AWS cloud secret (`CWE-798 Critical`)
     - `app.js:89` — Stored Cross-Site Scripting / XSS (`CWE-79 High`)
     - `auth.js:64` — Remote Command Injection (`CWE-78 High`)
     - `login.py:88` — Insecure Pickle Deserialization (`CWE-502 Critical`)
     - `package.json:27` — Vulnerable Axios dependency (`CVE-2024-39338 Medium`)
   - **Judges Clarity Features**:
     - Interactive file tabs with severity indicator dots.
     - **View Mode Switcher**: Toggle between `[ 📄 Active File ]` and `[ 🗂️ All Errors in One Codebase ]`.
     - Clicking any file or flaw card dynamically displays the code, line numbers, and inline threat tag.
     - Automated playback cycles through files and expands the master unified codebase grid before the consequence cascade triggers (*Unauthorized Access* → *Data Breach* → *Financial Loss* → *System Compromise*).

2. **Act II — The Existing Challenge (The Triage Bottleneck)**
   - Developer overwhelmed by alert storm (SAST, DAST, SCA, Secrets) spinning up to 384+ unresolved alerts.
   - 5 core pain points: *Too Many Alerts*, *False Positives*, *Difficult Reports*, *Hard to Prioritize*, *Difficult to Understand*.

3. **Act III — Introducing SecureCode (The Paradigm Shift)**
   - Hero cybersecurity card with glowing shield logo.
   - Repository ingestion widget (`enterprise/fintech-payment-service`, 142 files).
   - Interactive `UPLOAD PROJECT` button & `Repository Uploaded ✓` confirmation.

4. **Act IV — Repository Analysis (Multidimensional Codeflow Pipeline)**
   - Multi-stage pipeline: *Source Code* → *Preprocessing* → *Static Analysis* → *Dependency Analysis* → *Secret Detection*.
   - Circular SVG progress ring reaching 100% with laser scanner sweeping across files.

5. **Act V — Vulnerability Detection (Code-Aware Anchors & Multi-Finding Inspection)**
   - **Showcases 3 Core Security Vulnerabilities**:
     1. `database.py:42` — Critical • CWE-89: SQL Injection (Direct concatenation into database cursor)
     2. `config.js:18` — Critical • CWE-798: Hardcoded Cloud API Secret (AWS credentials committed to config)
     3. `app.js:89` — High • CWE-79: Stored Cross-Site Scripting (Unsanitized user bio directly injected into DOM)
   - **Multi-Anchor View Switcher**:
     - `[ Single Anchor ]`: Deep-dive inspector showing exact line number gutters, targeted pulse rings, and line pin telemetry.
     - `[ All 3 Anchors ]`: Simultaneous stacked display showing all 3 critical security findings side-by-side with code snippets.
   - **Top 3 Pinned Tabs**: Quick toggle between `database.py:42 (SQLi)`, `config.js:18 (Secret)`, and `app.js:89 (XSS)`.
   - **Automated Sequential Demonstration**: During playback, automatically cycles through all 3 anchors (`t=1.5s`, `t=4.4s`, `t=7.2s`) with dynamic SVG laser tether repositioning and alert chimes.
   - **All 27 Security Findings Enumerated**: 5 Critical, 9 High, 10 Medium, 3 Low with severity filter tabs and interactive inspection across all 27 findings.

6. **Act VI — Context-Aware Analysis (Data-Flow Taint Analysis)**
   - Deep dive into SQL Injection data path:
     *User Input* (`req.query['id']`) → *Request Parameter* → *Application Function* → *SQL Query Concatenation* → *Database Sink*.
   - Explains why context differentiates genuine exploitability from dumb pattern matching.

7. **Act VII — Contextual Risk Assessment (Dynamic Multi-Vector Convergence Engine)**
   - **6 Dynamic Evaluation Vectors**: Base CVSS Severity (9.8/10), Exploitability (95%), Unauthenticated User Input (90%), Critical Data Sensitivity (94%), Public Edge Exposure (88%), and Code Context / No WAF (85%).
   - **Dynamic SVG Convergence Tether**: Energy beam network projects from vector rows directly converging into the central score dial.
   - **Interactive Recalculate Button**: `[ ⚡ Re-run Convergence ]` button allows instant re-triggering of the entire simulation.
   - **Sequential Vector Charging**: Numerical values count up from 0 to target ratings with procedural audio feedback.
   - **Radial SVG Progress Meter Gauge**: SVG circle gauge arcs around the perimeter from 0% to 91% in sync with the dial count-up (`0` to `91 / 100`).
   - **Impact Climax**: Triggers animated radial shockwave expansion (`#dialShockwave`), glowing crimson aura, and slams in the `CRITICAL RISK` verdict badge with alert chime.

8. **Act VIII — AI-Powered Explanation (All Identified Codebase Vulnerabilities)**
   - **Comprehensive Coverage of All 6 Codebase Errors**:
     1. `database.py:42` — SQL Injection (`CWE-89 Critical`)
     2. `config.js:18` — Hardcoded Cloud API Secret (`CWE-798 Critical`)
     3. `app.js:89` — Stored Cross-Site Scripting (`CWE-79 High`)
     4. `auth.js:64` — Remote Command Injection (`CWE-78 Critical`)
     5. `login.py:88` — Insecure Object Deserialization (`CWE-502 Critical`)
     6. `package.json:27` — Vulnerable Dependency Axios (`CVE-2024-39338 Medium`)
   - **Navigation & View Switchers**:
     - **6 Top Tabs**: Clickable navigation bar with file icons, paths, and severity pills to inspect any error.
     - **View Toggles**: Switch between `[ 🤖 Copilot Inspector ]` (deep-dive conversational breakdown) and `[ 🗂️ All 6 Errors Codebase Grid ]` (simultaneous side-by-side matrix).
   - **5 Structured AI Explainer Cards per Vulnerability**:
     - *Why is this dangerous?* (attack mechanics and payload examples).
     - *Potential Impact* (exfiltration, RCE, session hijacking, cloud takeover).
     - *Affected Code & Exact Target Line* (pinpointed file, function, and modification line).
     - *Attack Context & Reachability* (endpoint visibility, authentication status).
     - *Remediation Strategy* (framework-native code guidance and secure APIs).
   - **Automated Playback**: Cycles through core codebase errors sequentially during playback with typewriter audio and status telemetry.

9. **Act IX — AI Remediation (All 6 Codebase Fixes & Verified Patches)**
   - **All 6 Codebase Fixes Supported**: Provides complete remediation diffs across every vulnerability in the codebase:
     1. `database.py:42` (SQLi): Parameterized `%s` binding on branch `fix/database-sqli-line-42`
     2. `config.js:18` (Cloud Secret): `process.env.AWS_SECRET_KEY` migration on branch `fix/config-secret-vault-line-18`
     3. `app.js:89` (Stored XSS): `textContent` DOM binding on branch `fix/app-xss-sanitize-line-89`
     4. `auth.js:64` (Command Injection): `execFile()` parameterized args array on branch `fix/auth-rce-execfile-line-64`
     5. `login.py:88` (Pickle Deserialization): Signed PyJWT tokens on branch `fix/login-deserial-jwt-line-88`
     6. `package.json:27` (Outdated Axios): Bump dependency to `^1.7.4` on branch `fix/package-axios-upgrade-line-27`
   - **Dual Interactive Modes**:
     - `[ 🔍 Single Diff Inspector ]`: Side-by-side split code viewer with dynamic gutters, target line callouts, exact scope, and individual branch commit action.
     - `[ 🗂️ All 6 Fixes Codebase Matrix ]`: Executive matrix grid displaying micro-diff comparisons for all 6 vulnerabilities simultaneously, with batch `[ APPLY ALL 6 VERIFIED PATCHES ]` capability.
   - **Automated Cycling Sequence**: Automatically demonstrates applying patches and transitions smoothly across files during presentation playback.

10. **Act X — Re-Scan & Verification (Re-Upload Patched Code & Verify)**
    - **Step 1: Upload Patched Project**: The developer uploads the modified repository containing the changes applied at `database.py:42`.
      - Interactive/animated `UPLOAD PATCHED PROJECT` button.
      - Confirmation: `Patched Repository Uploaded (Changes at Line 42 Received) ✓`.
    - **Step 2: Run Verification Re-Scan**: SecureCode activates the re-scan on the newly uploaded codebase:
      - `database.py:42 — SQL Injection → RESOLVED ✓ (Line 42 fix verified)`
      - `config.js:18 — Hardcoded Secret → RESOLVED ✓ (Secret migrated to vault)`
      - `app.js:89 — Cross-Site Scripting → STILL PRESENT ⚠️ (Line 89 still awaiting sanitizer)`
    - Proves SecureCode verifies fixes on real uploaded code rather than blindly closing tickets.

11. **Act XI — Security Dashboard (Continuous Posture Governance)**
    - Executive telemetry scorecard: Total Vulnerabilities (23, down from 27), Critical (2, down from 5), High (8, down from 9), Medium (10), Low (3), Risk Score dropped from 91 to 24 (Grade: EXCELLENT).
    - Comparative Before & After metrics with "Security Posture Improved" badge.
    - **Complete 27-Finding Vulnerability Register Table**: Filterable audit log with status pills for all 27 findings (4 Resolved, 23 Monitored), location coordinates, and CWE classifications.

12. **Act XII — Complete SecureCode Architecture Workflow**
    - 12 interconnected stages in a unified visual matrix:
      *Upload* → *Analyze* → *Detect* → *Context* → *Risk* → *Prioritize* → *AI Explain* → *Remediate* → *Fix* → *Re-Scan* → *Verify* → *Dashboard*.

13. **Finale — Project Vision (Build More Secure Software)**
    - 4 guiding pillars: *Detect Earlier*, *Understand Better*, *Fix Faster*, *Build More Secure*.
    - Brand grand finale title card with Replay controls.

---

## Technical Highlights
- **Zero External Dependencies**: All UI components, syntax highlights, SVG diagrams, and animations run locally.
- **Web Audio API Synth**: Procedural audio generator for typing clicks, scanner sweeps, alert chimes, and resolution chords (no external `.mp3` or `.wav` files).
- **Interactive Scrubber & Pill Navigation**: Direct timeline scrubbing and scene jumping at any moment.
- **Speed Multiplier**: Built-in 1x, 1.5x, and 2x playback speed selectors.

