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

3. **Act III — Introducing SecureCode (The Paradigm Shift & 4 Coordinated Surfaces)**
   - Hero cybersecurity card with glowing shield logo.
   - Repository ingestion widget (`enterprise/fintech-payment-service`, 142 files).
   - Interactive `UPLOAD PROJECT & INITIATE SCAN` button & `Repository Uploaded ✓` confirmation.
   - **4 Coordinated Product Surfaces Explorer (Section 27 & 40 of Document Specification)**:
     - **Surface 1: Web Dashboard & Governance Portal**: Repositories, commit revisions (`rev #a7f9c2`), policy settings, team RBAC, and audit log.
     - **Surface 2: Focused Browser IDE**: File tree, code editor tabs, Problems/Security panel, jump to finding line, and live patch review.
     - **Surface 3: VS Code Extension**: Command Palette actions (`SecureCode: Scan Workspace`), local quick scan vs cloud scan, inline diagnostics squigglies, and status bar indicator (`SecureCode: ⚠️ BLOCK`).
     - **Surface 4: CI/CD & PR Gates**: GitHub/GitLab PR checks, signed webhooks, automated policy gate `🚫 BLOCK` on unmitigated critical flaws &rarr; `✅ PASS` after fix.

4. **Act IV — Repository Analysis (Multidimensional Codeflow Pipeline & Scan Lifecycle)**
   - **6-Stage Scan Status Lifecycle (Section 32.1)**:
     `CREATED` &rarr; `QUEUED` &rarr; `RUNNING` &rarr; `NORMALIZING` &rarr; `POLICY_EVAL` &rarr; `COMPLETED`.
   - Multi-stage pipeline: *Source Code* &rarr; *Preprocessing* &rarr; *SAST (AST/Taint)* &rarr; *SCA (Dependencies)* &rarr; *Secrets & IaC*.
   - Circular SVG progress ring reaching 100% with laser scanner sweeping across files.
   - **Isolated Sandbox Execution Guarantees (Section 10.2 & 16)**:
     Containerized worker execution, read-only container mounts, strict CPU/memory quotas & timeouts, zero code execution on web servers, path traversal & zip-slip protection, and automatic secret redaction.

5. **Act V — Vulnerability Detection (Code-Aware Anchors & Normalized Finding Schema)**
   - **Showcases 3 Core Security Vulnerabilities**:
     1. `database.py:42` — Critical • CWE-89: SQL Injection (Direct concatenation into database cursor)
     2. `config.js:18` — Critical • CWE-798: Hardcoded Cloud API Secret (AWS credentials committed to config)
     3. `app.js:89` — High • CWE-79: Stored Cross-Site Scripting (Unsanitized user bio directly injected into DOM)
   - **Multi-Anchor View Switcher**:
     - `[ Single Anchor ]`: Deep-dive inspector showing exact line number gutters, targeted pulse rings, and line pin telemetry.
     - `[ All 3 Anchors ]`: Simultaneous stacked display showing all 3 critical security findings side-by-side with code snippets.
   - **Normalized Finding Schema Inspector (Section 12.2)**: Displays standardized schema attributes: `finding_id`, `rule_id`, `severity`, `confidence`, `file_path`, `lines`, `fingerprint`, and `status`.
   - **All 27 Security Findings Enumerated**: 5 Critical, 9 High, 10 Medium, 3 Low with severity filter tabs and interactive inspection across all 27 findings.

6. **Act VI — Context-Aware Analysis (Data-Flow Taint Analysis)**
   - Deep dive into SQL Injection data path:
     *User Input* (`req.query['id']`) → *Request Parameter* → *Application Function* → *SQL Query Concatenation* → *Database Sink*.
   - Explains why context differentiates genuine exploitability from dumb pattern matching.

7. **Act VII — Contextual Risk Assessment & Policy Gate (BLOCK)**
   - **6 Dynamic Evaluation Vectors**: Base CVSS Severity (9.8/10), Exploitability (95%), Unauthenticated User Input (90%), Critical Data Sensitivity (94%), Public Edge Exposure (88%), and Code Context / No WAF (85%).
   - **Dynamic SVG Convergence Tether**: Energy beam network projects from vector rows directly converging into the central score dial.
   - **Impact Climax**: Triggers animated radial shockwave expansion (`#dialShockwave`), glowing crimson aura, and slams in the `CRITICAL RISK (91 / 100)` verdict badge.
   - **Policy Gate Decision (Section 9.2 & 28.4)**: `🚫 POLICY DECISION: BLOCK` &mdash; unauthenticated SQL injection in `database.py:42` triggers zero-critical tolerance policy, halting production deployment and PR merge until verified patch or approved exception.

8. **Act VIII — AI-Powered Explanation (All Identified Codebase Vulnerabilities)**
   - Comprehensive coverage across all 6 codebase errors (`database.py:42 SQLi`, `config.js:18 Secret`, `app.js:89 XSS`, `auth.js:64 RCE`, `login.py:88 Deserialization`, `package.json:27 Axios CVE`).
   - 5 structured breakdown cards per flaw (*Why is this dangerous?*, *Potential Impact*, *Affected Code*, *Attack Context*, *Remediation Strategy*).
   - **AI Trust & Governance Notice (Section 12.4 & 16)**: AI candidate fixes are advisory and require human developer review; deterministic scanner findings remain 100% available offline if cloud AI is unreachable.

9. **Act IX — AI Remediation (All 6 Codebase Fixes & Verified Patches)**
   - Verified patch diffs with line gutters, target highlights, and branch patch generators across all 6 errors.
   - Dual modes: `[ 🔍 Single Diff Inspector ]` and `[ 🗂️ All 6 Fixes Codebase Matrix ]` with batch apply button.

10. **Act X — Re-Scan & Verification (Re-Upload Patched Code & Policy PASS)**
    - Re-uploads patched project files and executes re-scan.
    - Proves `database.py:42` taint path severed (100% parameterized query verified).
    - **Policy Gate Transition (Section 9.2 & 28.4)**: `✅ POLICY DECISION: PASS` &mdash; zero blocking flaws detected on revision `#b3f81e`, unlocking CI/CD gate for production release.

11. **Act XI — Security Dashboard & Policy Governance**
    - Executive telemetry scorecard: Total Vulnerabilities (23, down from 27), Risk Score dropped from 91 to 24 (Grade: EXCELLENT).
    - Comparative Before & After metrics.
    - **Policy Engine & Governance Deck (Section 9.2, 14, 35)**:
      - *Configured Policy Rules*: Critical [BLOCK], High [BLOCK], Medium [REVIEW], Low [MONITOR].
      - *Exception Management*: Active time-bounded exception for `SEC-05 (Internal SSRF)` with 28-day expiry and SecOps lead approval.
      - *Team RBAC Permissions*: Granular role permissions across Developer, Repo Admin, and Org Admin.
    - Complete 27-Finding Vulnerability Register Table with search filters.

12. **Act XII — Complete Architecture Workflow & 8 Backend Services**
    - **8 Backend Core Services Topology (Section 32)**:
      1. *Identity Service*: Authentication, session tokens, and RBAC checks.
      2. *Repository Service*: Repository metadata and immutable revision snapshots.
      3. *Scan Orchestrator*: Request lifecycle and asynchronous worker queue.
      4. *Sandboxed Workers*: Isolated container execution with strict quotas.
      5. *Scanner Adapters*: SAST, SCA, Secret, and IaC tool normalization.
      6. *Policy Engine*: Evaluation of PASS / REVIEW / BLOCK decision rules.
      7. *Notification & CI*: PR checks, webhooks, and VS Code live sync.
      8. *Audit Service*: Append-only tamper-resistant compliance audit trail.
    - **4 Developer Workflows (Section 28)**:
      - *Workflow A (Web)*: Repository creation, scan history, policy thresholds.
      - *Workflow B (VS Code)*: Local quick scan, inline squigglies, Problems panel.
      - *Workflow C (Browser IDE)*: Zero-setup cloud editor, jump to line, patch diffs.
      - *Workflow D (CI / PR Gate)*: Automated PR check enforcement and merge blocking.

13. **Finale — Project Vision & Final Product Definition (Build More Secure Software)**
    - **Product Definition (Section 40)**: One connected developer-security platform coordinating Web, Browser IDE, VS Code, and Backend Scanning into a single developer experience.
    - 4 guiding pillars: *Detect Earlier*, *Understand Better*, *Fix Faster*, *Build More Secure*.
    - Brand grand finale title card with Replay controls.

---

## Technical Highlights
- **Zero External Dependencies**: All UI components, syntax highlights, SVG diagrams, and animations run locally.
- **Web Audio API Synth**: Procedural audio generator for typing clicks, scanner sweeps, alert chimes, and resolution chords (no external `.mp3` or `.wav` files).
- **Interactive Scrubber & Pill Navigation**: Direct timeline scrubbing and scene jumping at any moment.
- **Speed Multiplier**: Built-in 1x, 1.5x, and 2x playback speed selectors.

