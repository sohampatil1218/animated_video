/**
 * SECURECODE PRODUCT DEMONSTRATION ENGINE
 * Context-Aware AI Security Analyzer
 * Vanilla JavaScript / State Machine / Web Audio Synthesizer / Interactive Scrubber
 */

(function () {
  'use strict';

  // --- SCENE CONFIGURATION & METADATA ---
  const SCENES = [
    {
      id: 1,
      badge: 'SCENE 1 / 13',
      title: 'The Problem — Hidden Vulnerabilities',
      duration: 11500,
    },
    {
      id: 2,
      badge: 'SCENE 2 / 13',
      title: 'The Existing Challenge — Triage Fatigue',
      duration: 9500,
    },
    {
      id: 3,
      badge: 'SCENE 3 / 13',
      title: 'Introducing SecureCode — Context-Aware AI',
      duration: 8500,
    },
    {
      id: 4,
      badge: 'SCENE 4 / 13',
      title: 'Repository Analysis — Multidimensional Pipeline',
      duration: 11000,
    },
    {
      id: 5,
      badge: 'SCENE 5 / 13',
      title: 'Vulnerability Detection — Code-Aware Anchors',
      duration: 10000,
    },
    {
      id: 6,
      badge: 'SCENE 6 / 13',
      title: 'Context-Aware Analysis — Attack Path Tracing',
      duration: 11000,
    },
    {
      id: 7,
      badge: 'SCENE 7 / 13',
      title: 'Contextual Risk Assessment — Real-World Scoring',
      duration: 10000,
    },
    {
      id: 8,
      badge: 'SCENE 8 / 13',
      title: 'AI-Powered Explanation — Developer Copilot',
      duration: 13000,
    },
    {
      id: 9,
      badge: 'SCENE 9 / 13',
      title: 'AI Remediation — Verified Secure Patches',
      duration: 13000,
    },
    {
      id: 10,
      badge: 'SCENE 10 / 13',
      title: 'Re-Scan & Verification — Re-Upload & Prove Fix',
      duration: 11500,
    },
    {
      id: 11,
      badge: 'SCENE 11 / 13',
      title: 'Security Dashboard — Posture Governance',
      duration: 10500,
    },
    {
      id: 12,
      badge: 'SCENE 12 / 13',
      title: 'Complete Workflow — End-to-End Architecture',
      duration: 11000,
    },
    {
      id: 13,
      badge: 'FINALE / 13',
      title: 'Project Vision — Build More Secure Software',
      duration: 12000,
    }
  ];

  // Calculate cumulative scene start offsets and total duration
  let totalDemoDuration = 0;
  const sceneOffsets = [];
  SCENES.forEach((scene) => {
    sceneOffsets.push(totalDemoDuration);
    totalDemoDuration += scene.duration;
  });

  // --- STATE MANAGEMENT ---
  const state = {
    currentIndex: 0,
    isPlaying: true,
    speed: 1,
    audioEnabled: false,
    sceneStartTime: 0,
    sceneElapsed: 0,
    timerId: null,
    animationFrameId: null,
    audioCtx: null
  };

  // --- DOM CACHE ---
  let dom = {};

  function cacheDom() {
    dom = {
      viewport: document.getElementById('stageViewport'),
      scenes: document.querySelectorAll('.scene') || [],
      sceneBadge: document.getElementById('sceneBadge'),
      sceneTitleDisplay: document.getElementById('sceneTitleDisplay'),
      playPauseBtn: document.getElementById('playPauseBtn'),
      playIcon: document.getElementById('playIcon'),
      pauseIcon: document.getElementById('pauseIcon'),
      prevBtn: document.getElementById('prevSceneBtn'),
      nextBtn: document.getElementById('nextSceneBtn'),
      currentTimeDisplay: document.getElementById('currentTimeDisplay'),
      totalTimeDisplay: document.getElementById('totalTimeDisplay'),
      scrubberTrack: document.getElementById('timelineScrubberTrack'),
      scrubberFill: document.getElementById('scrubberProgressFill'),
      scrubberThumb: document.getElementById('scrubberThumb'),
      scenePills: document.querySelectorAll('.scene-pill') || [],
      audioToggleBtn: document.getElementById('audioToggleBtn'),
      audioOnIcon: document.getElementById('audioOnIcon'),
      audioOffIcon: document.getElementById('audioOffIcon'),
      audioLabel: document.getElementById('audioLabel'),
      speedBtns: document.querySelectorAll('.speed-btn') || [],
      fullscreenBtn: document.getElementById('fullscreenBtn'),
      restartBtn: document.getElementById('restartDemoBtn'),
    };
  }

  // --- PROCEDURAL WEB AUDIO CYBER SYNTHESIZER ---
  function initAudio() {
    if (!state.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        state.audioCtx = new AudioCtx();
      }
    }
    if (state.audioCtx && state.audioCtx.state === 'suspended') {
      state.audioCtx.resume();
    }
  }

  function playSynthBlip(freq = 600, duration = 0.08, type = 'sine', gainVal = 0.08) {
    if (!state.audioEnabled || !state.audioCtx) return;
    try {
      const now = state.audioCtx.currentTime;
      const osc = state.audioCtx.createOscillator();
      const gain = state.audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.5, now + duration);

      gain.gain.setValueAtTime(gainVal, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(state.audioCtx.destination);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      // Audio failed silently
    }
  }

  function playAlertChime() {
    if (!state.audioEnabled || !state.audioCtx) return;
    try {
      const now = state.audioCtx.currentTime;
      const freqs = [350, 440, 520];
      freqs.forEach((f, i) => {
        const osc = state.audioCtx.createOscillator();
        const gain = state.audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(f, now + i * 0.08);

        gain.gain.setValueAtTime(0.05, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);

        osc.connect(gain);
        gain.connect(state.audioCtx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.25);
      });
    } catch (e) {}
  }

  function playSuccessChord() {
    if (!state.audioEnabled || !state.audioCtx) return;
    try {
      const now = state.audioCtx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = state.audioCtx.createOscillator();
        const gain = state.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);

        gain.gain.setValueAtTime(0.07, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.07 + 0.5);

        osc.connect(gain);
        gain.connect(state.audioCtx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.5);
      });
    } catch (e) {}
  }

  function playRadarSweep() {
    if (!state.audioEnabled || !state.audioCtx) return;
    try {
      const now = state.audioCtx.currentTime;
      const osc = state.audioCtx.createOscillator();
      const gain = state.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(200, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.35);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(state.audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  // --- TIME FORMATTER ---
  function formatTime(ms) {
    const totalSec = Math.floor(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // --- SCENE NAVIGATION & TRANSITIONS ---
  function goToScene(index, preservePlayState = true) {
    if (index < 0) index = 0;
    if (index >= SCENES.length) index = 0; // loop to start

    // Clean up current active scene animations if any
    cleanUpScene(state.currentIndex);

    state.currentIndex = index;
    state.sceneElapsed = 0;
    state.sceneStartTime = performance.now();

    // Update active class on scenes
    dom.scenes.forEach((s, idx) => {
      s.classList.toggle('active', idx === index);
    });

    // Update Top Navigation Header
    const currentScene = SCENES[index];
    dom.sceneBadge.textContent = currentScene.badge;
    dom.sceneTitleDisplay.textContent = currentScene.title;

    // Update Scene Pills
    dom.scenePills.forEach((pill, idx) => {
      pill.classList.toggle('active', idx === index);
      if (idx === index && typeof pill.scrollIntoView === 'function') {
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });

    // Sound effect on transition
    playSynthBlip(540, 0.08, 'sine', 0.05);

    // Trigger scene-specific dynamic animation scripts
    triggerSceneScript(index);

    if (preservePlayState && state.isPlaying) {
      scheduleNextScene();
    }
  }

  function nextScene() {
    goToScene(state.currentIndex + 1);
  }

  function prevScene() {
    goToScene(state.currentIndex - 1);
  }

  // --- PLAYBACK ENGINE ---
  function scheduleNextScene() {
    clearTimeout(state.timerId);
    if (!state.isPlaying) return;

    const scene = SCENES[state.currentIndex];
    const remainingMs = Math.max(100, (scene.duration - state.sceneElapsed) / state.speed);

    state.timerId = setTimeout(() => {
      if (state.currentIndex < SCENES.length - 1) {
        goToScene(state.currentIndex + 1);
      } else {
        // Loop restart
        goToScene(0);
      }
    }, remainingMs);
  }

  function togglePlay() {
    state.isPlaying = !state.isPlaying;
    updatePlayPauseUI();

    if (state.isPlaying) {
      state.sceneStartTime = performance.now();
      scheduleNextScene();
      playSynthBlip(800, 0.08);
    } else {
      clearTimeout(state.timerId);
      playSynthBlip(400, 0.08);
    }
  }

  function updatePlayPauseUI() {
    if (state.isPlaying) {
      dom.playIcon.classList.add('hidden');
      dom.pauseIcon.classList.remove('hidden');
    } else {
      dom.playIcon.classList.remove('hidden');
      dom.pauseIcon.classList.add('hidden');
    }
  }

  // --- CONTINUOUS TIMELINE TICKER (REQUEST ANIMATION FRAME) ---
  function tick(timestamp) {
    if (state.isPlaying) {
      state.sceneElapsed += (16.666 * state.speed);
      const scene = SCENES[state.currentIndex];
      if (state.sceneElapsed > scene.duration) {
        state.sceneElapsed = scene.duration;
      }
    }

    // Calculate global progress
    const currentSceneGlobalOffset = sceneOffsets[state.currentIndex];
    const currentGlobalElapsed = currentSceneGlobalOffset + state.sceneElapsed;
    const progressPercent = Math.min(100, (currentGlobalElapsed / totalDemoDuration) * 100);

    // Update Scrubber Fill & Thumb
    dom.scrubberFill.style.width = `${progressPercent}%`;
    dom.scrubberThumb.style.left = `${progressPercent}%`;

    // Update Time Readout
    dom.currentTimeDisplay.textContent = formatTime(currentGlobalElapsed);

    state.animationFrameId = requestAnimationFrame(tick);
  }

  // --- SCENE-SPECIFIC BEHAVIORS & MICRO-ANIMATIONS ---
  let sceneTimers = [];

  function clearSceneTimers() {
    sceneTimers.forEach(t => {
      clearTimeout(t);
      clearInterval(t);
    });
    sceneTimers = [];
  }

  function cleanUpScene(index) {
    clearSceneTimers();
  }

  function triggerSceneScript(index) {
    clearSceneTimers();

    switch (index) {
      case 0: // SCENE 1: THE PROBLEM
        setupScene1();
        break;
      case 1: // SCENE 2: THE EXISTING CHALLENGE
        setupScene2();
        break;
      case 2: // SCENE 3: INTRODUCING SECURECODE
        setupScene3();
        break;
      case 3: // SCENE 4: REPOSITORY ANALYSIS
        setupScene4();
        break;
      case 4: // SCENE 5: VULNERABILITY DETECTION
        setupScene5();
        break;
      case 5: // SCENE 6: CONTEXT-AWARE ANALYSIS
        setupScene6();
        break;
      case 6: // SCENE 7: CONTEXTUAL RISK ASSESSMENT
        setupScene7();
        break;
      case 7: // SCENE 8: AI-POWERED EXPLANATION
        setupScene8();
        break;
      case 8: // SCENE 9: AI REMEDIATION
        setupScene9();
        break;
      case 9: // SCENE 10: RE-SCAN & VERIFICATION
        setupScene10();
        break;
      case 10: // SCENE 11: SECURITY DASHBOARD
        setupScene11();
        break;
      case 11: // SCENE 12: COMPLETE WORKFLOW
        setupScene12();
        break;
      case 12: // SCENE 13: PROJECT VISION
        setupScene13();
        break;
    }
  }

  // --- SCENE 1 MULTI-FILE CODEBASE DATA ---
  const SCENE1_CODEBASE = {
    'database.py': {
      gutter: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
      flawLine: 42,
      flawType: 'Unsafe SQL query concatenation',
      cwe: 'CWE-89 (Critical)',
      lang: 'Python 3.12',
      pos: 'Ln 42, Col 18',
      flawIndex: 0,
      codeHtml: `
        <div class="code-line"><span class="c-keyword">def</span> <span class="c-func">getUserAccountData</span>(request):</div>
        <div class="code-line indent-1">user_id = request.args.<span class="c-func">get</span>(<span class="c-str">'id'</span>)</div>
        <div class="code-line indent-1"><span class="c-comment"># Fetch user profile and banking records</span></div>
        <div class="code-line indent-1 code-flaw-line flaw-sqli" id="s1-sqli-line">
          raw_query = <span class="c-str">"SELECT * FROM users WHERE user_id = '"</span> + user_id + <span class="c-str">"'"</span>
          <div class="inline-squiggle squiggle-danger"></div>
          <div class="inline-threat-badge fade-in-badge" id="s1-badge-1">
            <span class="threat-icon">⚠️</span>
            <span id="s1-badge-text">Unsafe SQL query concatenation</span>
          </div>
        </div>
        <div class="code-line indent-1">cursor = db.<span class="c-func">cursor</span>()</div>
        <div class="code-line indent-1">cursor.<span class="c-func">execute</span>(raw_query)</div>
        <div class="code-line indent-1"><span class="c-keyword">return</span> cursor.<span class="c-func">fetchall</span>()</div>
      `
    },
    'config.js': {
      gutter: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      flawLine: 18,
      flawType: 'Hardcoded Cloud API Secret (AWS)',
      cwe: 'CWE-798 (Critical)',
      lang: 'JavaScript ES2022',
      pos: 'Ln 18, Col 7',
      flawIndex: 1,
      codeHtml: `
        <div class="code-line">module.<span class="c-keyword">exports</span> = {</div>
        <div class="code-line indent-1">NODE_ENV: process.env.NODE_ENV || <span class="c-str">'production'</span>,</div>
        <div class="code-line indent-1">AWS_REGION: <span class="c-str">'us-east-1'</span>,</div>
        <div class="code-line indent-1"><span class="c-comment">// Production S3 storage credentials</span></div>
        <div class="code-line indent-1 code-flaw-line flaw-secret">
          <span class="c-keyword">const</span> AWS_SECRET_KEY = <span class="c-str">"AKIAIOSFODNN7EXAMPLE_SECRET_PROD"</span>;
          <div class="inline-squiggle squiggle-danger"></div>
          <div class="inline-threat-badge fade-in-badge" id="s1-badge-1">
            <span class="threat-icon">⚠️</span>
            <span id="s1-badge-text">Hardcoded Cloud API Secret</span>
          </div>
        </div>
        <div class="code-line indent-1">S3_BUCKET: <span class="c-str">'production-financial-vault'</span>,</div>
        <div class="code-line indent-1">ENABLE_DEBUG_LOGGING: <span class="c-keyword">true</span></div>
        <div class="code-line">};</div>
      `
    },
    'app.js': {
      gutter: [85, 86, 87, 88, 89, 90, 91, 92, 93, 94],
      flawLine: 89,
      flawType: 'Unsanitized User Input (Stored XSS)',
      cwe: 'CWE-79 (High)',
      lang: 'Node.js 20',
      pos: 'Ln 89, Col 5',
      flawIndex: 2,
      codeHtml: `
        <div class="code-line">router.<span class="c-func">get</span>(<span class="c-str">'/profile/:id'</span>, <span class="c-keyword">async</span> (req, res) => {</div>
        <div class="code-line indent-1"><span class="c-keyword">const</span> userData = <span class="c-keyword">await</span> db.<span class="c-func">findUser</span>(req.params.id);</div>
        <div class="code-line indent-1"><span class="c-comment">// Render user bio directly into client HTML DOM</span></div>
        <div class="code-line indent-1 code-flaw-line flaw-xss">
          profileDiv.innerHTML = <span class="c-str">"&lt;div class='user-bio'&gt;"</span> + userData.bio + <span class="c-str">"&lt;/div&gt;"</span>;
          <div class="inline-squiggle squiggle-danger"></div>
          <div class="inline-threat-badge fade-in-badge" id="s1-badge-1">
            <span class="threat-icon">⚠️</span>
            <span id="s1-badge-text">Unsanitized User Input (XSS)</span>
          </div>
        </div>
        <div class="code-line indent-1">container.<span class="c-func">appendChild</span>(profileDiv);</div>
        <div class="code-line indent-1">res.<span class="c-func">send</span>({ status: <span class="c-str">'success'</span> });</div>
        <div class="code-line">});</div>
      `
    },
    'auth.js': {
      gutter: [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
      flawLine: 64,
      flawType: 'Remote Command Injection in Diagnostic Subshell',
      cwe: 'CWE-78 (High)',
      lang: 'Node.js 20',
      pos: 'Ln 64, Col 5',
      flawIndex: 3,
      codeHtml: `
        <div class="code-line">router.<span class="c-func">post</span>(<span class="c-str">'/diagnostics/ping'</span>, authMiddleware, (req, res) => {</div>
        <div class="code-line indent-1"><span class="c-keyword">const</span> host = req.body.host;</div>
        <div class="code-line indent-1"><span class="c-comment">// Unsanitized host parameter executed in system subshell</span></div>
        <div class="code-line indent-1 code-flaw-line flaw-cmd">
          <span class="c-func">exec</span>(<span class="c-str">"ping -c 4 "</span> + host, (err, stdout, stderr) => {
          <div class="inline-squiggle squiggle-danger"></div>
          <div class="inline-threat-badge fade-in-badge" id="s1-badge-1">
            <span class="threat-icon">⚠️</span>
            <span id="s1-badge-text">Remote Command Injection</span>
          </div>
        </div>
        <div class="code-line indent-1">  <span class="c-keyword">if</span> (err) <span class="c-keyword">return</span> res.<span class="c-func">status</span>(500).<span class="c-func">json</span>({ error: err.message });</div>
        <div class="code-line indent-1">  res.<span class="c-func">json</span>({ output: stdout });</div>
        <div class="code-line indent-1">});</div>
        <div class="code-line">});</div>
      `
    },
    'login.py': {
      gutter: [84, 85, 86, 87, 88, 89, 90, 91, 92, 93],
      flawLine: 88,
      flawType: 'Insecure Deserialization via Pickle (RCE)',
      cwe: 'CWE-502 (Critical)',
      lang: 'Python 3.12',
      pos: 'Ln 88, Col 16',
      flawIndex: 4,
      codeHtml: `
        <div class="code-line"><span class="c-keyword">def</span> <span class="c-func">handleUserSession</span>(request):</div>
        <div class="code-line indent-1">session_token = request.cookies.<span class="c-func">get</span>(<span class="c-str">'auth_session'</span>)</div>
        <div class="code-line indent-1"><span class="c-comment"># Unsafe deserialization of client-supplied pickle object</span></div>
        <div class="code-line indent-1 code-flaw-line flaw-deserial">
          user_session = pickle.<span class="c-func">loads</span>(base64.<span class="c-func">b64decode</span>(session_token))
          <div class="inline-squiggle squiggle-danger"></div>
          <div class="inline-threat-badge fade-in-badge" id="s1-badge-1">
            <span class="threat-icon">⚠️</span>
            <span id="s1-badge-text">Insecure Deserialization (RCE)</span>
          </div>
        </div>
        <div class="code-line indent-1"><span class="c-keyword">if</span> user_session.is_authenticated:</div>
        <div class="code-line indent-2"><span class="c-keyword">return</span> <span class="c-func">grantAccess</span>(user_session)</div>
        <div class="code-line indent-1"><span class="c-keyword">return</span> <span class="c-func">redirect</span>(<span class="c-str">'/login'</span>)</div>
      `
    },
    'package.json': {
      gutter: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
      flawLine: 27,
      flawType: 'Vulnerable Dependency: Axios SSRF (CVE-2024-39338)',
      cwe: 'CVE-2024-39338 (Medium)',
      lang: 'JSON Manifest',
      pos: 'Ln 27, Col 15',
      flawIndex: 5,
      codeHtml: `
        <div class="code-line">  <span class="c-str">"dependencies"</span>: {</div>
        <div class="code-line indent-1"><span class="c-str">"express"</span>: <span class="c-str">"^4.18.2"</span>,</div>
        <div class="code-line indent-1 code-flaw-line flaw-dep">
          <span class="c-str">"axios"</span>: <span class="c-str">"^0.21.1"</span>,
          <div class="inline-squiggle squiggle-danger"></div>
          <div class="inline-threat-badge fade-in-badge" id="s1-badge-1">
            <span class="threat-icon">⚠️</span>
            <span id="s1-badge-text">Vulnerable Dependency: axios</span>
          </div>
        </div>
        <div class="code-line indent-1"><span class="c-str">"jsonwebtoken"</span>: <span class="c-str">"^8.5.1"</span>,</div>
        <div class="code-line indent-1 code-flaw-line flaw-dep">
          <span class="c-str">"lodash"</span>: <span class="c-str">"4.17.15"</span>,
          <div class="inline-squiggle squiggle-danger"></div>
        </div>
        <div class="code-line indent-1"><span class="c-str">"pg"</span>: <span class="c-str">"^8.11.3"</span></div>
        <div class="code-line">  }</div>
      `
    }
  };

  function displayScene1File(fileName) {
    const data = SCENE1_CODEBASE[fileName] || SCENE1_CODEBASE['database.py'];
    
    // Switch view to Single File
    const singleView = document.getElementById('scene1SingleFileView');
    const unifiedView = document.getElementById('scene1UnifiedCodebaseView');
    const btnSingle = document.getElementById('btnSingleFile');
    const btnUnified = document.getElementById('btnUnifiedCodebase');
    if (singleView) singleView.classList.remove('hidden');
    if (unifiedView) unifiedView.classList.add('hidden');
    if (btnSingle) btnSingle.classList.add('active');
    if (btnUnified) btnUnified.classList.remove('active');

    // Update active tab in #scene1Tabs
    const tabs = document.querySelectorAll('#scene1Tabs .tab');
    tabs.forEach(t => t.classList.toggle('active', t.dataset.file === fileName));

    // Update Code Gutter
    const gutterEl = document.getElementById('scene1CodeGutter');
    if (gutterEl && data.gutter) {
      gutterEl.innerHTML = data.gutter.map(num => {
        return num === data.flawLine 
          ? `<span class="gutter-alert">${num}</span>`
          : `<span>${num}</span>`;
      }).join('');
    }

    // Update Code Content
    const contentEl = document.getElementById('scene1CodeContent');
    if (contentEl) contentEl.innerHTML = data.codeHtml;

    // Update Status Bar
    const statusLang = document.getElementById('scene1StatusLang');
    const statusPos = document.getElementById('scene1StatusPos');
    if (statusLang) statusLang.textContent = data.lang;
    if (statusPos) statusPos.textContent = data.pos;

    // Highlight Flaw Card
    const flawCards = document.querySelectorAll('#scene-1 .flaw-card');
    flawCards.forEach((c, idx) => c.classList.toggle('active-flaw', idx === data.flawIndex));

    playSynthBlip(560, 0.04);
  }

  function displayScene1UnifiedCodebase() {
    const singleView = document.getElementById('scene1SingleFileView');
    const unifiedView = document.getElementById('scene1UnifiedCodebaseView');
    const btnSingle = document.getElementById('btnSingleFile');
    const btnUnified = document.getElementById('btnUnifiedCodebase');
    if (singleView) singleView.classList.add('hidden');
    if (unifiedView) unifiedView.classList.remove('hidden');
    if (btnSingle) btnSingle.classList.remove('active');
    if (btnUnified) btnUnified.classList.add('active');

    const statusPos = document.getElementById('scene1StatusPos');
    if (statusPos) statusPos.textContent = 'Unified Codebase (6 Files)';

    playSuccessChord();
  }

  // --- SCENE 1 IMPLEMENTATION ---
  function setupScene1() {
    const cascadeItems = document.querySelectorAll('#scene-1 .cascade-item');
    cascadeItems.forEach(i => i.classList.remove('active-cascade'));

    // Start with database.py active in single file view
    displayScene1File('database.py');

    const badge = document.getElementById('s1-badge-1');
    if (badge) badge.style.opacity = '0';

    // Step 1: Reveal inline flaw badge in database.py
    sceneTimers.push(setTimeout(() => {
      const b = document.getElementById('s1-badge-1');
      if (b) {
        b.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        b.style.opacity = '1';
        b.style.transform = 'translateY(-50%) scale(1.05)';
        playAlertChime();
      }
    }, 1200 / state.speed));

    // Step 2: Showcase config.js flaw (Line 18: Hardcoded Secret)
    sceneTimers.push(setTimeout(() => {
      displayScene1File('config.js');
      playAlertChime();
    }, 2800 / state.speed));

    // Step 3: Showcase app.js flaw (Line 89: Stored XSS)
    sceneTimers.push(setTimeout(() => {
      displayScene1File('app.js');
      playAlertChime();
    }, 4500 / state.speed));

    // Step 4: Reveal the Unified Codebase View (All 6 Files & Errors in One Codebase!)
    sceneTimers.push(setTimeout(() => {
      displayScene1UnifiedCodebase();
    }, 6200 / state.speed));

    // Step 5: Consequence Cascade Sequence
    cascadeItems.forEach((item, idx) => {
      sceneTimers.push(setTimeout(() => {
        item.classList.add('active-cascade');
        playSynthBlip(300 + idx * 70, 0.08, 'sawtooth');
      }, (8200 + idx * 700) / state.speed));
    });
  }

  // --- SCENE 2 IMPLEMENTATION ---
  function setupScene2() {
    const counterEl = document.getElementById('alertCounter');
    const painPillars = document.querySelectorAll('.pain-pillar-card');
    
    // Animate alert counter up to 384
    let currentCount = 0;
    const targetCount = 384;
    const interval = 20 / state.speed;
    const step = 8;

    const counterTimer = setInterval(() => {
      currentCount += step;
      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(counterTimer);
        playAlertChime();
      }
      if (counterEl) counterEl.textContent = currentCount;
    }, interval);

    // Stagger pain pillars entrance
    painPillars.forEach((p, idx) => {
      p.style.opacity = '0';
      p.style.transform = 'translateY(16px)';
      sceneTimers.push(setTimeout(() => {
        p.style.transition = 'all 0.4s ease';
        p.style.opacity = '1';
        p.style.transform = 'translateY(0)';
        playSynthBlip(400 + idx * 60, 0.05);
      }, (2500 + idx * 600) / state.speed));
    });
  }

  // --- SCENE 3 IMPLEMENTATION ---
  const SURFACES_DATA = {
    web: {
      badge: 'WEB PLATFORM • REPOSITORY & GOVERNANCE PORTAL',
      tag: 'Central Management',
      col1: [
        '<strong>Repository Overview:</strong> Immutable commit snapshots (<code>rev #a7f9c2</code>), policy settings, scan history, and findings register.',
        '<strong>Policy Configuration:</strong> Configurable rules with automatic <code>PASS</code> / <code>REVIEW</code> / <code>BLOCK</code> gate enforcement.'
      ],
      col2: [
        '<strong>Team Governance & RBAC:</strong> Granular permissions across Developers, Repository Admins, and Organization Admins.',
        '<strong>Tamper-Resistant Audit Trail:</strong> Append-only log of scans, exceptions, member invites, and policy modifications.'
      ]
    },
    ide: {
      badge: 'BROWSER IDE • IN-CLOUD CODE EDITOR & DIAGNOSTICS',
      tag: 'Zero Setup',
      col1: [
        '<strong>Live File Tree:</strong> Full exploration of <code>enterprise/fintech-payment-service</code> with syntax highlighting and line gutters.',
        '<strong>Security Problems Panel:</strong> Bottom panel displaying active findings, CWE tags, and severity indicators.'
      ],
      col2: [
        '<strong>Direct Jump-to-Line:</strong> Clicking any finding instantly focuses the editor on the exact line (e.g. Line 42).',
        '<strong>Live Patch Review:</strong> Inspect side-by-side candidate fix diffs and trigger immediate in-editor rescans.'
      ]
    },
    vscode: {
      badge: 'VS CODE EXTENSION • IN-EDITOR SECURITY INTELLIGENCE',
      tag: 'Developer Workflow',
      col1: [
        '<strong>Command Palette Integration:</strong> <code>SecureCode: Scan Workspace</code>, <code>SecureCode: Explain Finding</code>, and <code>SecureCode: Propose Fix</code>.',
        '<strong>Local & Cloud Modes:</strong> Fast local pre-commit scan vs full containerized cloud deep scan.'
      ],
      col2: [
        '<strong>Inline Red Squigglies:</strong> Native VS Code diagnostics directly on vulnerable code with lightbulb quick-fixes.',
        '<strong>Status Bar Indicator:</strong> Real-time gate posture: <code>SecureCode: ⚠️ BLOCK (Policy Failed)</code>.'
      ]
    },
    cicd: {
      badge: 'CI/CD & PR GATES • AUTOMATED PULL REQUEST ENFORCEMENT',
      tag: 'Release Protection',
      col1: [
        '<strong>Signed Webhook Ingestion:</strong> Automatically triggers sandboxed scan workers on branch push or pull request open.',
        '<strong>GitHub/GitLab PR Checks:</strong> Posts clear inline review comments and status checks on PR #142.'
      ],
      col2: [
        '<strong>Automated Merge Block:</strong> Rejects pull requests violating security policy: <code>🚫 BLOCK: 1 Critical SQLi</code>.',
        '<strong>Instant Pass Upon Patch:</strong> Automatically re-evaluates the fixed commit and grants green <code>✅ PASS</code> status.'
      ]
    }
  };

  function renderSurfacePreview(surfaceKey) {
    const data = SURFACES_DATA[surfaceKey] || SURFACES_DATA.web;
    const container = document.getElementById('surfacePreviewContent');
    const tabs = document.querySelectorAll('#scene3SurfacesTabs .surface-tab');

    tabs.forEach(tab => {
      if (tab.dataset.surface === surfaceKey) tab.classList.add('active');
      else tab.classList.remove('active');
    });

    if (container) {
      container.innerHTML = `
        <div class="surface-preview-panel">
          <div class="surface-preview-head">
            <span class="sp-badge">${data.badge}</span>
            <span class="sp-tag">${data.tag}</span>
          </div>
          <div class="surface-preview-body">
            <div class="sp-col">
              ${data.col1.map(item => `<div class="sp-feat-item">${item}</div>`).join('')}
            </div>
            <div class="sp-col">
              ${data.col2.map(item => `<div class="sp-feat-item">${item}</div>`).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  function setupScene3() {
    const uploadBtn = document.getElementById('uploadProjectBtn');
    const confirmedBadge = document.getElementById('uploadConfirmedBadge');
    const statusBadge = document.getElementById('uploadStatusBadge');

    if (uploadBtn) uploadBtn.classList.remove('hidden');
    if (confirmedBadge) confirmedBadge.classList.add('hidden');
    if (statusBadge) {
      statusBadge.innerHTML = '<span class="status-dot"></span><span class="status-txt">Ready for Analysis</span>';
    }

    renderSurfacePreview('web');

    // Auto click simulation after 2.0s
    sceneTimers.push(setTimeout(() => {
      if (uploadBtn) {
        uploadBtn.style.transform = 'scale(0.95)';
        playSynthBlip(880, 0.15);
      }
    }, 2000 / state.speed));

    sceneTimers.push(setTimeout(() => {
      if (uploadBtn) uploadBtn.classList.add('hidden');
      if (confirmedBadge) {
        confirmedBadge.classList.remove('hidden');
        playSuccessChord();
      }
      if (statusBadge) {
        statusBadge.innerHTML = '<span class="status-dot" style="background:#10b981;box-shadow:0 0 8px #10b981;"></span><span class="status-txt" style="color:#10b981;">Repository Uploaded ✓</span>';
      }
    }, 2700 / state.speed));

    // Cycle through the other 3 surfaces during demonstration
    sceneTimers.push(setTimeout(() => {
      renderSurfacePreview('ide');
      playSynthBlip(620, 0.05);
    }, 4500 / state.speed));

    sceneTimers.push(setTimeout(() => {
      renderSurfacePreview('vscode');
      playSynthBlip(660, 0.05);
    }, 6500 / state.speed));

    sceneTimers.push(setTimeout(() => {
      renderSurfacePreview('cicd');
      playSynthBlip(700, 0.05);
    }, 8500 / state.speed));
  }

  // --- SCENE 4 IMPLEMENTATION ---
  function setupScene4() {
    const pipeNodes = document.querySelectorAll('#scene-4 .pipe-node');
    const fileRows = document.querySelectorAll('#scene-4 .scan-file-row');
    const circle = document.getElementById('pipelineProgressCircle');
    const percentTxt = document.getElementById('scanPercentText');
    const tickers = document.querySelectorAll('.ticker-step');
    const lcSteps = document.querySelectorAll('#scanLifecycleSteps .lc-step');

    // Reset pipeline elements
    pipeNodes.forEach(n => n.classList.remove('active-node'));
    tickers.forEach(t => t.classList.remove('active'));
    lcSteps.forEach((s, idx) => {
      s.classList.remove('active', 'done');
      if (idx === 0) s.classList.add('active');
    });
    if (circle) circle.style.strokeDashoffset = '427';
    if (percentTxt) percentTxt.textContent = '0%';

    // Progress counter animation from 0% to 100%
    const totalDuration = 9500 / state.speed;
    const startProgressTime = performance.now();

    function updateScanProgress() {
      const elapsed = performance.now() - startProgressTime;
      const progress = Math.min(1, elapsed / totalDuration);
      const pct = Math.round(progress * 100);

      if (circle) {
        const offset = 427 - (427 * progress);
        circle.style.strokeDashoffset = offset;
      }
      if (percentTxt) percentTxt.textContent = `${pct}%`;

      // 6-Stage Scan Status Lifecycle (Section 32.1)
      if (lcSteps.length >= 6) {
        if (pct < 18) {
          lcSteps[0].classList.add('active');
        } else if (pct < 38) {
          lcSteps[0].classList.remove('active'); lcSteps[0].classList.add('done');
          lcSteps[1].classList.add('active');
        } else if (pct < 62) {
          lcSteps[1].classList.remove('active'); lcSteps[1].classList.add('done');
          lcSteps[2].classList.add('active');
        } else if (pct < 80) {
          lcSteps[2].classList.remove('active'); lcSteps[2].classList.add('done');
          lcSteps[3].classList.add('active');
        } else if (pct < 95) {
          lcSteps[3].classList.remove('active'); lcSteps[3].classList.add('done');
          lcSteps[4].classList.add('active');
        } else {
          lcSteps[4].classList.remove('active'); lcSteps[4].classList.add('done');
          lcSteps[5].classList.add('done');
        }
      }

      // Illuminate pipeline nodes
      if (pct >= 10 && pipeNodes[0]) pipeNodes[0].classList.add('active-node');
      if (pct >= 30 && pipeNodes[1]) pipeNodes[1].classList.add('active-node');
      if (pct >= 55 && pipeNodes[2]) pipeNodes[2].classList.add('active-node');
      if (pct >= 75 && pipeNodes[3]) pipeNodes[3].classList.add('active-node');
      if (pct >= 90 && pipeNodes[4]) pipeNodes[4].classList.add('active-node');

      // Tickers
      if (pct >= 10 && tickers[0]) tickers[0].classList.add('active');
      if (pct >= 35 && tickers[1]) tickers[1].classList.add('active');
      if (pct >= 60 && tickers[2]) tickers[2].classList.add('active');
      if (pct >= 85 && tickers[3]) tickers[3].classList.add('active');

      if (progress < 1 && state.currentIndex === 3) {
        requestAnimationFrame(updateScanProgress);
      } else if (progress >= 1 && state.currentIndex === 3) {
        playSuccessChord();
      }
    }

    requestAnimationFrame(updateScanProgress);
    playRadarSweep();
  }

  // Dynamic Code Focus View for Scene 5
  function updateCodeFocusView(fileName, lineNum, cwe, title, findingId) {
    const pinnedBadge = document.getElementById('focusPinnedBadge');
    const anchorText = document.getElementById('focusAnchorText');
    const codeGutter = document.getElementById('focusCodeGutter');
    const codeContent = document.getElementById('focusCodeContent');
    const laserTether = document.getElementById('laserTether');

    // Update pinned badge text
    if (pinnedBadge) {
      if (fileName === 'database.py' && lineNum === 42) {
        pinnedBadge.textContent = 'ANCHOR 1/3: database.py:42 PINNED';
      } else if (fileName === 'config.js' && lineNum === 18) {
        pinnedBadge.textContent = 'ANCHOR 2/3: config.js:18 PINNED';
      } else if (fileName === 'app.js' && lineNum === 89) {
        pinnedBadge.textContent = 'ANCHOR 3/3: app.js:89 PINNED';
      } else {
        pinnedBadge.textContent = `EXACT LINE ${lineNum} PINNED`;
      }
    }

    // Update dynamic anchor telemetry footer
    if (anchorText) {
      let indexBadge = '';
      if (fileName === 'database.py' && lineNum === 42) indexBadge = 'Anchor 1 of 3: ';
      else if (fileName === 'config.js' && lineNum === 18) indexBadge = 'Anchor 2 of 3: ';
      else if (fileName === 'app.js' && lineNum === 89) indexBadge = 'Anchor 3 of 3: ';
      anchorText.innerHTML = `${indexBadge}<code>${fileName}:${lineNum}</code> &bull; ${cwe} &bull; ${title}`;
    }

    // Reposition SVG laser tether dynamically
    if (laserTether) {
      let y1 = 35;
      if (fileName === 'database.py' && lineNum === 42) y1 = 16;
      else if (fileName === 'config.js' && lineNum === 18) y1 = 28;
      else if (fileName === 'auth.js' && lineNum === 64) y1 = 38;
      else if (fileName === 'login.py' && lineNum === 88) y1 = 46;
      else if (fileName === 'app.js' && lineNum === 89) y1 = 52;
      else {
        const activeItem = document.querySelector('#scene-5 .vuln-item.active-finding');
        const scrollBox = document.getElementById('findingItemsScroll');
        if (activeItem && scrollBox) {
          const relY = (activeItem.offsetTop - scrollBox.scrollTop) / Math.max(1, scrollBox.clientHeight);
          y1 = Math.max(10, Math.min(88, Math.round(relY * 100)));
        }
      }
      laserTether.setAttribute('d', `M 0 ${y1} C 50 ${y1}, 50 48, 100 48`);
    }

    // Update Active Tab in Scene 5 Tabs
    const tabs = document.querySelectorAll('#scene5FocusTabs .tab');
    tabs.forEach(tab => {
      const tFile = tab.dataset.file;
      const tLine = parseInt(tab.dataset.line || '0', 10);
      if (tFile === fileName && tLine === lineNum) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update Active Card in Multi-Anchor Stack
    const multiCards = document.querySelectorAll('#scene-5 .multi-anchor-card');
    multiCards.forEach(card => {
      const cFile = card.dataset.file;
      const cLine = parseInt(card.dataset.line || '0', 10);
      if (cFile === fileName && cLine === lineNum) {
        card.classList.add('active-card');
      } else {
        card.classList.remove('active-card');
      }
    });

    // Update Left Findings List Selection & Auto-scroll
    const vulnList = document.querySelectorAll('#scene-5 .vuln-item');
    vulnList.forEach(item => {
      const iFile = item.dataset.file;
      const iLine = parseInt(item.dataset.line || '0', 10);
      if ((findingId && item.id === findingId) || (iFile === fileName && iLine === lineNum)) {
        item.classList.add('active-finding');
        const scrollBox = document.getElementById('findingItemsScroll');
        if (scrollBox) {
          const relTop = item.offsetTop - scrollBox.offsetTop;
          scrollBox.scrollTo({ top: Math.max(0, relTop - 40), behavior: 'smooth' });
        }
      } else {
        item.classList.remove('active-finding');
      }
    });

    // Update Code Gutter
    if (codeGutter) {
      const start = Math.max(1, lineNum - 3);
      let gutterHtml = '';
      for (let i = start; i <= start + 6; i++) {
        if (i === lineNum) {
          gutterHtml += `<span class="gutter-alert">${i}</span>`;
        } else {
          gutterHtml += `<span>${i}</span>`;
        }
      }
      codeGutter.innerHTML = gutterHtml;
    }

    // Update Code Content
    if (codeContent) {
      if (fileName === 'database.py' && lineNum === 42) {
        codeContent.innerHTML = `
          <div class="code-line">user_id = request.args.<span class="c-func">get</span>(<span class="c-str">'id'</span>)</div>
          <div class="code-line"><span class="c-comment"># Query without parameterized binding</span></div>
          <div class="code-line code-target-highlighted" id="targetCodeLine42">
            <span class="c-keyword">raw_query</span> = <span class="c-str">"SELECT * FROM users WHERE user_id = '"</span> + user_id + <span class="c-str">"'"</span>
            <div class="pulse-laser-ring"></div>
          </div>
          <div class="code-line">cursor = db.<span class="c-func">cursor</span>()</div>
          <div class="code-line">cursor.<span class="c-func">execute</span>(raw_query)</div>
          <div class="code-line"><span class="c-keyword">return</span> cursor.<span class="c-func">fetchall</span>()</div>
        `;
      } else if (fileName === 'config.js' && lineNum === 18) {
        codeContent.innerHTML = `
          <div class="code-line"><span class="c-comment">// AWS Production Infrastructure Credentials</span></div>
          <div class="code-line">const AWS_REGION = <span class="c-str">"us-east-1"</span>;</div>
          <div class="code-line code-target-highlighted" id="targetCodeLine18">
            <span class="c-keyword">const</span> AWS_SECRET_KEY = <span class="c-str">"AKIAIOSFODNN7EXAMPLE_SECRET_PROD"</span>;
            <div class="pulse-laser-ring"></div>
          </div>
          <div class="code-line">const S3_BUCKET = <span class="c-str">"production-financial-vault"</span>;</div>
          <div class="code-line">module.exports = { AWS_SECRET_KEY, S3_BUCKET };</div>
        `;
      } else if (fileName === 'app.js' && lineNum === 89) {
        codeContent.innerHTML = `
          <div class="code-line">userProfile.<span class="c-func">loadDetails</span>(userData);</div>
          <div class="code-line"><span class="c-comment">// Direct unsanitized HTML injection into DOM</span></div>
          <div class="code-line code-target-highlighted" id="targetCodeLine89">
            profileDiv.innerHTML = <span class="c-str">"&lt;div class='bio'&gt;"</span> + userData.bio + <span class="c-str">"&lt;/div&gt;"</span>;
            <div class="pulse-laser-ring"></div>
          </div>
          <div class="code-line">container.<span class="c-func">appendChild</span>(profileDiv);</div>
        `;
      } else if (fileName === 'auth.js' && lineNum === 64) {
        codeContent.innerHTML = `
          <div class="code-line">router.<span class="c-func">post</span>(<span class="c-str">'/diagnostics'</span>, (req, res) => {</div>
          <div class="code-line"><span class="c-comment">// Unsanitized user parameter executed in subshell</span></div>
          <div class="code-line code-target-highlighted" id="targetCodeLine64">
            <span class="c-func">exec</span>(<span class="c-str">"ping -c 4 "</span> + req.body.host, (err, stdout) => {
            <div class="pulse-laser-ring"></div>
          </div>
          <div class="code-line">  <span class="c-keyword">if</span> (err) <span class="c-keyword">return</span> res.<span class="c-func">status</span>(500).<span class="c-func">send</span>(err);</div>
          <div class="code-line">  res.<span class="c-func">json</span>({ output: stdout });</div>
          <div class="code-line">});</div>
        `;
      } else if (fileName === 'login.py' && lineNum === 88) {
        codeContent.innerHTML = `
          <div class="code-line">session_token = request.cookies.<span class="c-func">get</span>(<span class="c-str">'auth_sess'</span>)</div>
          <div class="code-line"><span class="c-comment">// Unsafe deserialization of client-supplied object</span></div>
          <div class="code-line code-target-highlighted" id="targetCodeLine88">
            user_session = pickle.<span class="c-func">loads</span>(base64.<span class="c-func">b64decode</span>(session_token))
            <div class="pulse-laser-ring"></div>
          </div>
          <div class="code-line"><span class="c-keyword">if</span> user_session.is_authenticated:</div>
          <div class="code-line">    <span class="c-keyword">return</span> user_session.profile</div>
        `;
      } else {
        codeContent.innerHTML = `
          <div class="code-line"><span class="c-comment">// Target File: ${fileName} &bull; CWE: ${cwe}</span></div>
          <div class="code-line"><span class="c-keyword">function</span> <span class="c-func">executeServiceLogic</span>(req, context) {</div>
          <div class="code-line code-target-highlighted" id="targetCodeLineGeneric">
            <span class="c-comment">/* Line ${lineNum} */</span> <span class="c-func">handleSecurityPayload</span>(req.data, context);
            <div class="pulse-laser-ring"></div>
          </div>
          <div class="code-line">  <span class="c-keyword">return</span> { status: <span class="c-str">"taint_sink_detected"</span> };</div>
          <div class="code-line">}</div>
        `;
      }
    }
  }

  // --- SCENE 5 IMPLEMENTATION ---
  function setupScene5() {
    const vulnItems = document.querySelectorAll('#scene-5 .vuln-item');

    // Reset items active state & display
    vulnItems.forEach(item => {
      item.classList.remove('active-finding');
      item.style.display = 'flex';
      item.style.opacity = '0';
      item.style.transform = 'translateX(-12px)';
    });
    if (vulnItems[0]) vulnItems[0].classList.add('active-finding');

    // Reset filter buttons active state to 'all'
    const filterBtns = document.querySelectorAll('#scene-5 .vuln-filter-btn');
    filterBtns.forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('#scene-5 .vuln-filter-btn[data-filter="all"]');
    if (allBtn) allBtn.classList.add('active');

    // Reset view toggle buttons to Single Anchor mode
    const btnSingle = document.getElementById('btnFocusSingle');
    const btnMulti = document.getElementById('btnFocusMulti');
    const singleContainer = document.getElementById('focusSingleContainer');
    const multiContainer = document.getElementById('focusMultiContainer');
    if (btnSingle) btnSingle.classList.add('active');
    if (btnMulti) btnMulti.classList.remove('active');
    if (singleContainer) singleContainer.classList.remove('hidden');
    if (multiContainer) multiContainer.classList.add('hidden');

    // Smooth cascade reveal of findings (first 1.4s)
    vulnItems.forEach((item, idx) => {
      const delay = Math.min(1400, 80 + idx * 45);
      sceneTimers.push(setTimeout(() => {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateX(0)';
        if (idx < 8) playSynthBlip(480 + idx * 35, 0.04);
      }, delay / state.speed));
    });

    // Sequence through Top 3 Security Findings automatically during playback:
    // 1. Security Finding 1: database.py:42 (SQL Injection - Critical)
    sceneTimers.push(setTimeout(() => {
      updateCodeFocusView('database.py', 42, 'CWE-89', 'SQL Injection', 'v-find-1');
      playAlertChime();
    }, 1500 / state.speed));

    // 2. Security Finding 2: config.js:18 (Hardcoded Cloud API Secret - Critical)
    sceneTimers.push(setTimeout(() => {
      updateCodeFocusView('config.js', 18, 'CWE-798', 'Hardcoded Cloud API Secret', 'v-find-2');
      playAlertChime();
    }, 4400 / state.speed));

    // 3. Security Finding 3: app.js:89 (Stored Cross-Site Scripting - High)
    sceneTimers.push(setTimeout(() => {
      updateCodeFocusView('app.js', 89, 'CWE-79', 'Stored Cross-Site Scripting (XSS)', 'v-find-6');
      playAlertChime();
    }, 7200 / state.speed));
  }

  // --- SCENE 6 IMPLEMENTATION ---
  function setupScene6() {
    const nodes = document.querySelectorAll('#scene-6 .path-node');
    nodes.forEach(n => {
      n.style.opacity = '0.3';
      n.style.transform = 'scale(0.96)';
    });

    // Light up taint chain sequentially
    nodes.forEach((node, idx) => {
      sceneTimers.push(setTimeout(() => {
        node.style.transition = 'all 0.4s ease';
        node.style.opacity = '1';
        node.style.transform = 'scale(1.02)';
        playSynthBlip(350 + idx * 100, 0.08, 'sawtooth');
      }, (800 + idx * 1100) / state.speed));
    });

    sceneTimers.push(setTimeout(() => {
      playAlertChime();
    }, 6200 / state.speed));
  }

  // --- SCENE 7 IMPLEMENTATION: CONTEXTUAL RISK ASSESSMENT ---
  function setupScene7() {
    const vectorRows = document.querySelectorAll('#scene-7 .vector-row');
    const scoreNum = document.getElementById('riskScoreNumber');
    const dialGauge = document.getElementById('riskDialGauge');
    const dialGlow = document.getElementById('dialGlowEffect');
    const dialShockwave = document.getElementById('dialShockwave');
    const verdictBadge = document.getElementById('riskVerdictBadge');
    const bullet1 = document.getElementById('riskBullet1');
    const bullet2 = document.getElementById('riskBullet2');
    const convBeams = document.querySelectorAll('#scene-7 .conv-beam');

    // Circumference for r=66 is 2 * Math.PI * 66 = ~414.69 -> 415
    const GAUGE_CIRCUMFERENCE = 415;

    // Reset score and gauge
    if (scoreNum) scoreNum.textContent = '0';
    if (dialGauge) {
      dialGauge.style.transition = 'none';
      dialGauge.style.strokeDashoffset = GAUGE_CIRCUMFERENCE;
    }
    if (dialGlow) dialGlow.style.opacity = '0.2';
    if (dialShockwave) dialShockwave.style.animation = 'none';
    if (verdictBadge) {
      verdictBadge.style.transition = 'none';
      verdictBadge.style.opacity = '0';
      verdictBadge.style.transform = 'scale(0.7)';
    }
    if (bullet1) {
      bullet1.style.transition = 'none';
      bullet1.style.opacity = '0';
      bullet1.style.transform = 'translateY(10px)';
    }
    if (bullet2) {
      bullet2.style.transition = 'none';
      bullet2.style.opacity = '0';
      bullet2.style.transform = 'translateY(10px)';
    }

    // Reset vector rows and fills
    vectorRows.forEach(row => {
      row.classList.remove('active-vec');
      const fill = row.querySelector('.v-bar-fill');
      const val = row.querySelector('.v-val');
      if (fill) {
        fill.style.transition = 'none';
        fill.style.width = '0%';
      }
      if (val) val.textContent = '0%';
    });

    convBeams.forEach(beam => beam.classList.remove('active-beam'));

    // 1. Sequential Vector Charging & Numeric Count-up (0.2s to 1.8s)
    vectorRows.forEach((row, idx) => {
      const fill = row.querySelector('.v-bar-fill');
      const val = row.querySelector('.v-val');
      const targetPct = parseInt(fill ? fill.dataset.target || '90' : '90', 10);
      const targetValStr = val ? val.dataset.val || '90' : '90';
      const suffix = val ? val.dataset.suffix || '%' : '%';
      const targetValNum = parseFloat(targetValStr);

      const delay = (200 + idx * 260) / state.speed;

      sceneTimers.push(setTimeout(() => {
        row.classList.add('active-vec');
        if (convBeams[idx]) convBeams[idx].classList.add('active-beam');

        if (fill) {
          fill.style.transition = 'width 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
          fill.style.width = targetPct + '%';
        }

        // Animate individual vector numerical count-up
        let curVal = 0;
        const steps = 14;
        const stepInc = targetValNum / steps;
        const valTimer = setInterval(() => {
          curVal += stepInc;
          if (curVal >= targetValNum) {
            curVal = targetValNum;
            clearInterval(valTimer);
          }
          if (val) {
            val.textContent = (suffix.includes('/ 10') ? curVal.toFixed(1) : Math.round(curVal)) + suffix;
          }
        }, 30 / state.speed);
        sceneTimers.push(valTimer);

        playSynthBlip(380 + idx * 60, 0.05);
      }, delay));
    });

    // 2. Score Dial Count-Up & Radial Gauge Fill (starts at 1.1s, finishes at 3.1s)
    const targetScore = 91;
    let currentScore = 0;
    const dialStartTime = 1100 / state.speed;

    sceneTimers.push(setTimeout(() => {
      if (dialGauge) {
        dialGauge.style.transition = `stroke-dashoffset ${2000 / state.speed}ms cubic-bezier(0.16, 1, 0.3, 1)`;
        const targetOffset = GAUGE_CIRCUMFERENCE * (1 - targetScore / 100);
        dialGauge.style.strokeDashoffset = targetOffset;
      }

      const countInterval = 25 / state.speed;
      const totalSteps = (2000 / state.speed) / countInterval;
      const increment = targetScore / totalSteps;

      const scoreTimer = setInterval(() => {
        currentScore += increment;
        if (currentScore >= targetScore) {
          currentScore = targetScore;
          clearInterval(scoreTimer);

          // 3. Impact climax when reaching 91
          if (dialShockwave) {
            dialShockwave.style.animation = 'dialShockwavePulse 0.8s ease-out forwards';
          }
          if (dialGlow) dialGlow.style.opacity = '0.9';

          if (verdictBadge) {
            verdictBadge.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            verdictBadge.style.opacity = '1';
            verdictBadge.style.transform = 'scale(1)';
          }

          playAlertChime();
        }
        if (scoreNum) scoreNum.textContent = Math.round(currentScore);
      }, countInterval);
      sceneTimers.push(scoreTimer);
    }, dialStartTime));

    // 4. Staggered Entrance of Action Bullets (3.4s and 4.0s)
    sceneTimers.push(setTimeout(() => {
      if (bullet1) {
        bullet1.style.transition = 'all 0.4s ease';
        bullet1.style.opacity = '1';
        bullet1.style.transform = 'translateY(0)';
        playSynthBlip(620, 0.04);
      }
    }, 3400 / state.speed));

    sceneTimers.push(setTimeout(() => {
      if (bullet2) {
        bullet2.style.transition = 'all 0.4s ease';
        bullet2.style.opacity = '1';
        bullet2.style.transform = 'translateY(0)';
        playSynthBlip(700, 0.04);
      }
    }, 4000 / state.speed));
  }

  // --- SCENE 8 DATA & IMPLEMENTATION: ALL CODEBASE VULNERABILITIES ---
  const CODEBASE_ERRORS = [
    {
      id: 'db-sqli',
      file: 'database.py',
      line: 42,
      cwe: 'CWE-89',
      severity: 'CRITICAL',
      severityClass: 'crit',
      name: 'SQL Injection',
      icon: '🐍',
      badgeText: 'Error 1/6: database.py:42 • Critical SQLi',
      lead: '“The application directly inserts user-controlled input into an SQL query without parameterized binding. An attacker may manipulate this input to modify query logic and access unauthorized database information.”',
      why: 'Because input is concatenated directly, special characters like \' OR 1=1 -- rewrite the query logic, completely bypassing authentication checks.',
      impact: 'Full database exfiltration (passwords, customer PII, financial records) or table deletion via injected DROP TABLE statements.',
      affectedCode: '<strong>File:</strong> <code>database.py</code> &bull; <strong>Line to Modify:</strong> <span class="badge-line-num">Line 42</span><br><span class="sub-note">Inside <code>getUserAccountData()</code>: Direct concatenation must be replaced with parameterized placeholders.</span>',
      context: 'Route is mounted on public unauthenticated endpoint <code>GET /api/v1/user/account</code>. Direct reach into database cursor without WAF.',
      fix: 'Use parameterized queries: <code>cursor.execute("SELECT * FROM users WHERE user_id = %s", (user_id,))</code>'
    },
    {
      id: 'cfg-secret',
      file: 'config.js',
      line: 18,
      cwe: 'CWE-798',
      severity: 'CRITICAL',
      severityClass: 'crit',
      name: 'Hardcoded Cloud API Secret',
      icon: '⚙️',
      badgeText: 'Error 2/6: config.js:18 • Critical Secret',
      lead: '“Production AWS infrastructure credentials (AWS_SECRET_KEY) are hardcoded in plain-text inside the public configuration file and committed to source control.”',
      why: 'Committed credentials are baked into version control history. Anyone with repository read access or access to leaked commit logs can immediately seize administrative control.',
      impact: 'Total AWS cloud environment takeover, unauthorized S3 bucket access to financial vaults, and massive unauthorized compute expenditure.',
      affectedCode: '<strong>File:</strong> <code>config.js</code> &bull; <strong>Line to Modify:</strong> <span class="badge-line-num">Line 18</span><br><span class="sub-note">Inside configuration exports: Plaintext AWS secret key committed to repository history.</span>',
      context: 'Exposed in public repository config. Keys possess administrative privileges across production S3 financial vaults and EC2 infrastructure.',
      fix: 'Migrate secret out of code into environment variables (<code>process.env.AWS_SECRET_KEY</code>) or a secure secrets manager (AWS Secrets Manager).'
    },
    {
      id: 'app-xss',
      file: 'app.js',
      line: 89,
      cwe: 'CWE-79',
      severity: 'HIGH',
      severityClass: 'high',
      name: 'Stored Cross-Site Scripting (XSS)',
      icon: '📜',
      badgeText: 'Error 3/6: app.js:89 • High Stored XSS',
      lead: '“User profile data is inserted directly into the DOM using innerHTML without HTML entity escaping or sanitization, executing attacker-supplied JavaScript in victim browsers.”',
      why: 'Direct assignment to innerHTML causes the browser to parse strings as HTML markup. Untrusted inputs containing &lt;script&gt; or &lt;img onerror=&gt; execute immediately.',
      impact: 'Client-side session hijacking via stolen authentication tokens/cookies, keystroke logging, credential harvesting, and DOM defacement.',
      affectedCode: '<strong>File:</strong> <code>app.js</code> &bull; <strong>Line to Modify:</strong> <span class="badge-line-num">Line 89</span><br><span class="sub-note">Inside <code>userProfile.loadDetails()</code>: Direct assignment of unescaped user.bio into DOM container.</span>',
      context: 'Stored in persistent database from profile bio field. Rendered dynamically to all visiting users without Content Security Policy (CSP).',
      fix: 'Use safe DOM assignment (<code>profileDiv.textContent = userData.bio</code>), or sanitize rich markup with <code>DOMPurify.sanitize(userData.bio)</code>.'
    },
    {
      id: 'auth-rce',
      file: 'auth.js',
      line: 64,
      cwe: 'CWE-78',
      severity: 'CRITICAL',
      severityClass: 'crit',
      name: 'Remote Command Injection',
      icon: '🛡️',
      badgeText: 'Error 4/6: auth.js:64 • Critical Command Inj',
      lead: '“The diagnostics API passes untrusted user input directly to a system shell execution function (exec) without input sanitization or argument escaping.”',
      why: 'Shell metacharacters like ; & | allow an attacker to terminate the intended ping command and execute arbitrary operating system binaries.',
      impact: 'Full remote code execution on the host server/container, unauthorized file access (/etc/passwd), and establishment of a persistent reverse root shell.',
      affectedCode: '<strong>File:</strong> <code>auth.js</code> &bull; <strong>Line to Modify:</strong> <span class="badge-line-num">Line 64</span><br><span class="sub-note">Inside <code>router.post(\'/diagnostics\')</code>: Unsanitized req.body.host executed in subshell.</span>',
      context: 'Exposed REST endpoint accessible to authenticated users with missing privilege validation. Executes with web server privileges.',
      fix: 'Avoid shell execution. Use <code>child_process.execFile()</code> or <code>spawn()</code> with an explicit arguments array and strict IP regex validation.'
    },
    {
      id: 'login-deserial',
      file: 'login.py',
      line: 88,
      cwe: 'CWE-502',
      severity: 'CRITICAL',
      severityClass: 'crit',
      name: 'Insecure Object Deserialization',
      icon: '🔐',
      badgeText: 'Error 5/6: login.py:88 • Critical Deserialization',
      lead: '“Client-supplied session cookie auth_sess is unpickled using Python’s pickle module without signature verification or integrity controls.”',
      why: 'Python pickle allows arbitrary object instantiation upon unpickling via __reduce__. A crafted pickle payload will execute arbitrary code during loads().',
      impact: 'Immediate unauthenticated Remote Code Execution (RCE) with the privileges of the web application daemon.',
      affectedCode: '<strong>File:</strong> <code>login.py</code> &bull; <strong>Line to Modify:</strong> <span class="badge-line-num">Line 88</span><br><span class="sub-note">Inside session token handler: Direct unpickling of base64-decoded client cookie.</span>',
      context: 'Client-supplied HTTP cookie. No HMAC cryptographic signature check is performed prior to deserialization.',
      fix: 'Never deserialize untrusted client data with pickle. Use JSON with cryptographically signed tokens (e.g. PyJWT or itsdangerous).'
    },
    {
      id: 'pkg-axios',
      file: 'package.json',
      line: 27,
      cwe: 'CVE-2024-39338',
      severity: 'MEDIUM',
      severityClass: 'med',
      name: 'Vulnerable Dependency: axios',
      icon: '📦',
      badgeText: 'Error 6/6: package.json:27 • Outdated Dependency',
      lead: '“The project references outdated version axios@0.21.1 which contains known Server-Side Request Forgery (SSRF) and Regular Expression Denial of Service vulnerabilities.”',
      why: 'Older versions fail to properly sanitize absolute URLs and protocol-relative URLs during redirects, enabling SSRF into internal networks.',
      impact: 'Attacker can force the server to issue requests to internal cloud metadata endpoints (169.254.169.254) and cause denial-of-service via ReDoS.',
      affectedCode: '<strong>File:</strong> <code>package.json</code> &bull; <strong>Line to Modify:</strong> <span class="badge-line-num">Line 27</span><br><span class="sub-note">Inside package dependencies: Direct reference to vulnerable axios ^0.21.1.</span>',
      context: 'Direct dependency used by core HTTP client modules for outbound upstream microservice communications.',
      fix: 'Upgrade axios to version ^1.7.4 or later and integrate <code>npm audit</code> check in the continuous integration (CI) pipeline.'
    }
  ];

  let scene8CurrentErrorIdx = 0;
  let scene8TypewriterTimer = null;

  function renderScene8Error(idx, withTypewriter = true) {
    if (idx < 0 || idx >= CODEBASE_ERRORS.length) idx = 0;
    scene8CurrentErrorIdx = idx;
    const err = CODEBASE_ERRORS[idx];

    // 1. Update Tabs Active State
    const tabs = document.querySelectorAll('#scene8ErrorTabs .scene8-tab');
    tabs.forEach((tab, i) => {
      if (i === idx) {
        tab.classList.add('active');
        if (typeof tab.scrollIntoView === 'function') {
          tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      } else {
        tab.classList.remove('active');
      }
    });

    // 2. Update Header Flaw Badge
    const badge = document.getElementById('scene8ActiveFlawBadge');
    if (badge) badge.textContent = err.badgeText;

    // 3. Update AI Speech Bubble with Typewriter
    const textLead = document.getElementById('aiExplanationText');
    if (textLead) {
      if (scene8TypewriterTimer) clearInterval(scene8TypewriterTimer);
      if (withTypewriter) {
        textLead.textContent = '';
        let charIdx = 0;
        const fullText = err.lead;
        scene8TypewriterTimer = setInterval(() => {
          charIdx += 3;
          if (charIdx > fullText.length) {
            charIdx = fullText.length;
            clearInterval(scene8TypewriterTimer);
          }
          textLead.textContent = fullText.substring(0, charIdx);
          if (charIdx % 9 === 0) playSynthBlip(750, 0.02, 'sine', 0.02);
        }, 15 / state.speed);
        sceneTimers.push(scene8TypewriterTimer);
      } else {
        textLead.textContent = err.lead;
      }
    }

    // 4. Update Structured Breakdown Cards
    const whyText = document.getElementById('aiWhyText');
    const impactText = document.getElementById('aiImpactText');
    const affectedText = document.getElementById('aiAffectedText');
    const contextText = document.getElementById('aiContextText');
    const fixText = document.getElementById('aiFixText');

    if (whyText) whyText.textContent = err.why;
    if (impactText) impactText.textContent = err.impact;
    if (affectedText) affectedText.innerHTML = err.affectedCode;
    if (contextText) contextText.innerHTML = err.context;
    if (fixText) fixText.innerHTML = err.fix;

    // 5. Update Grid Cards Active State
    const gridCards = document.querySelectorAll('#scene8GridCards .error-grid-card');
    gridCards.forEach((card, i) => {
      if (i === idx) card.classList.add('active-card');
      else card.classList.remove('active-card');
    });
  }

  function initScene8Grid() {
    const container = document.getElementById('scene8GridCards');
    if (!container || container.children.length > 0) return;

    let html = '';
    CODEBASE_ERRORS.forEach((err, idx) => {
      html += `
        <div class="error-grid-card border-${err.severityClass} ${idx === 0 ? 'active-card' : ''}" data-err="${idx}">
          <div class="eg-top">
            <span class="eg-file">${err.icon} ${err.file}:${err.line}</span>
            <span class="eg-badge ${err.severityClass}">${err.severity}</span>
          </div>
          <div class="eg-name">${err.name} (${err.cwe})</div>
          <div class="eg-desc">${err.impact.substring(0, 85)}...</div>
          <div class="eg-action">Inspect with Copilot ➔</div>
        </div>
      `;
    });
    container.innerHTML = html;

    // Attach click listeners to grid cards
    const cards = container.querySelectorAll('.error-grid-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        initAudio();
        const errIdx = parseInt(card.dataset.err || '0', 10);
        renderScene8Error(errIdx, false);
        playSynthBlip(600, 0.05);

        // Switch to single view
        const singleBtn = document.getElementById('btnScene8Single');
        if (singleBtn) singleBtn.click();
      });
    });
  }

  function setupScene8() {
    initScene8Grid();

    // Reset view to single copilot inspector
    const btnSingle = document.getElementById('btnScene8Single');
    const btnGrid = document.getElementById('btnScene8Grid');
    const singleView = document.getElementById('scene8SingleView');
    const gridView = document.getElementById('scene8GridView');

    if (btnSingle) btnSingle.classList.add('active');
    if (btnGrid) btnGrid.classList.remove('active');
    if (singleView) singleView.classList.remove('hidden');
    if (gridView) gridView.classList.add('hidden');

    // Render Error 0 (database.py:42 SQLi)
    renderScene8Error(0, true);

    // Automated demonstration cycles through errors in the codebase:
    // Error 1 (config.js:18 - Hardcoded Secret) at 4.2s
    sceneTimers.push(setTimeout(() => {
      renderScene8Error(1, true);
      playAlertChime();
    }, 4200 / state.speed));

    // Error 2 (app.js:89 - Stored XSS) at 8.4s
    sceneTimers.push(setTimeout(() => {
      renderScene8Error(2, true);
      playAlertChime();
    }, 8400 / state.speed));
  }

  // --- SCENE 9 DATA & IMPLEMENTATION: ALL CODEBASE REMEDIATIONS ---
  const CODEBASE_FIXES = [
    {
      id: 'db-sqli',
      file: 'database.py',
      line: 42,
      scope: '(Scope: Lines 41–43)',
      cwe: 'CWE-89',
      severity: 'CRITICAL',
      severityClass: 'crit',
      name: 'SQL Injection',
      icon: '🐍',
      targetLineText: 'EXACT LINE TO MODIFY: LINE 42',
      targetAction: 'Replace string concatenation at Line 42 with parameterized <code>%s</code>',
      recommendation: '“Use parameterized queries or prepared statements at <strong>Line 42</strong> instead of directly concatenating user input into SQL queries.”',
      vulnFileLabel: 'database.py:41-43',
      vulnGutter: [41, 42, 43],
      vulnLines: [
        { code: '<span class="diff-sign">-</span> <span class="c-comment"># Dangerous direct string concatenation</span>', isTarget: false },
        { code: '<span class="diff-sign">-</span> raw_query = <span class="c-str">"SELECT * FROM users WHERE user_id = \'"</span> + user_id + <span class="c-str">"\'"</span><span class="line-focus-tag">Line 42 ⚠️ TARGET TO FIX</span>', isTarget: true },
        { code: '<span class="diff-sign">-</span> cursor.<span class="c-func">execute</span>(raw_query)', isTarget: false }
      ],
      transformTag: 'Line 42',
      secureFileLabel: 'database.py:41-43',
      secureGutter: [41, 42, 43],
      secureLines: [
        { code: '<span class="diff-sign">+</span> <span class="c-comment"># Safe parameterized query with placeholder</span>', isSecure: false },
        { code: '<span class="diff-sign">+</span> secure_query = <span class="c-str">"SELECT * FROM users WHERE user_id = %s"</span><span class="line-focus-tag-secure">Line 42 ✓ SECURE REPLACEMENT</span>', isSecure: true },
        { code: '<span class="diff-sign">+</span> cursor.<span class="c-func">execute</span>(secure_query, (user_id,))', isSecure: false }
      ],
      branch: 'fix/database-sqli-line-42',
      btnText: 'APPLY RECOMMENDED FIX (database.py:42)',
      microVuln: '- raw_query = "SELECT * FROM users WHERE user_id = \'" + id + "\'',
      microSec: '+ secure_query = "SELECT * FROM users WHERE user_id = %s"'
    },
    {
      id: 'cfg-secret',
      file: 'config.js',
      line: 18,
      scope: '(Scope: Lines 17–19)',
      cwe: 'CWE-798',
      severity: 'CRITICAL',
      severityClass: 'crit',
      name: 'Hardcoded Cloud API Secret',
      icon: '⚙️',
      targetLineText: 'EXACT LINE TO MODIFY: LINE 18',
      targetAction: 'Replace committed secret with <code>process.env.AWS_SECRET_KEY</code>',
      recommendation: '“Extract plaintext cloud credentials from <strong>Line 18</strong> into environment variables or an enterprise secrets vault manager.”',
      vulnFileLabel: 'config.js:17-19',
      vulnGutter: [17, 18, 19],
      vulnLines: [
        { code: '<span class="diff-sign">-</span> <span class="c-comment">// AWS Cloud Production Credentials committed to repo</span>', isTarget: false },
        { code: '<span class="diff-sign">-</span> <span class="c-keyword">const</span> AWS_SECRET_KEY = <span class="c-str">"AKIA_PROD_SECRET_KEY_99214_COMMITTED"</span>;<span class="line-focus-tag">Line 18 ⚠️ TARGET TO FIX</span>', isTarget: true },
        { code: '<span class="diff-sign">-</span> <span class="c-keyword">const</span> S3_BUCKET = <span class="c-str">"financial-vault-prod"</span>;', isTarget: false }
      ],
      transformTag: 'Line 18',
      secureFileLabel: 'config.js:17-19',
      secureGutter: [17, 18, 19],
      secureLines: [
        { code: '<span class="diff-sign">+</span> <span class="c-comment">// Read cloud credentials from secure environment variable</span>', isSecure: false },
        { code: '<span class="diff-sign">+</span> <span class="c-keyword">const</span> AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;<span class="line-focus-tag-secure">Line 18 ✓ SECURE REPLACEMENT</span>', isSecure: true },
        { code: '<span class="diff-sign">+</span> <span class="c-keyword">if</span> (!AWS_SECRET_KEY) <span class="c-keyword">throw new</span> Error(<span class="c-str">"Missing AWS_SECRET_KEY"</span>);', isSecure: false }
      ],
      branch: 'fix/config-secret-vault-line-18',
      btnText: 'APPLY RECOMMENDED FIX (config.js:18)',
      microVuln: '- const AWS_SECRET_KEY = "AKIA_PROD_SECRET_KEY_99214_COMMITTED";',
      microSec: '+ const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;'
    },
    {
      id: 'app-xss',
      file: 'app.js',
      line: 89,
      scope: '(Scope: Lines 88–90)',
      cwe: 'CWE-79',
      severity: 'HIGH',
      severityClass: 'high',
      name: 'Stored Cross-Site Scripting (XSS)',
      icon: '📜',
      targetLineText: 'EXACT LINE TO MODIFY: LINE 89',
      targetAction: 'Replace innerHTML assignment with <code>textContent</code> or DOMPurify',
      recommendation: '“Eliminate raw HTML injection at <strong>Line 89</strong> by binding untrusted text safely with textContent or DOMPurify.”',
      vulnFileLabel: 'app.js:88-90',
      vulnGutter: [88, 89, 90],
      vulnLines: [
        { code: '<span class="diff-sign">-</span> <span class="c-comment">// Direct unescaped innerHTML insertion</span>', isTarget: false },
        { code: '<span class="diff-sign">-</span> profileDiv.innerHTML = <span class="c-str">"&lt;p&gt;"</span> + userData.bio + <span class="c-str">"&lt;/p&gt;"</span>;<span class="line-focus-tag">Line 89 ⚠️ TARGET TO FIX</span>', isTarget: true },
        { code: '<span class="diff-sign">-</span> document.body.<span class="c-func">appendChild</span>(profileDiv);', isTarget: false }
      ],
      transformTag: 'Line 89',
      secureFileLabel: 'app.js:88-90',
      secureGutter: [88, 89, 90],
      secureLines: [
        { code: '<span class="diff-sign">+</span> <span class="c-comment">// Safe text binding prevents DOM script injection</span>', isSecure: false },
        { code: '<span class="diff-sign">+</span> profileDiv.textContent = userData.bio;<span class="line-focus-tag-secure">Line 89 ✓ SECURE REPLACEMENT</span>', isSecure: true },
        { code: '<span class="diff-sign">+</span> document.body.<span class="c-func">appendChild</span>(profileDiv);', isSecure: false }
      ],
      branch: 'fix/app-xss-sanitize-line-89',
      btnText: 'APPLY RECOMMENDED FIX (app.js:89)',
      microVuln: '- profileDiv.innerHTML = "<p>" + userData.bio + "</p>";',
      microSec: '+ profileDiv.textContent = userData.bio;'
    },
    {
      id: 'auth-rce',
      file: 'auth.js',
      line: 64,
      scope: '(Scope: Lines 63–65)',
      cwe: 'CWE-78',
      severity: 'CRITICAL',
      severityClass: 'crit',
      name: 'Remote Command Injection',
      icon: '🛡️',
      targetLineText: 'EXACT LINE TO MODIFY: LINE 64',
      targetAction: 'Replace shell exec() with <code>execFile()</code> and parameterized arguments array',
      recommendation: '“Prevent command subshell execution at <strong>Line 64</strong> by utilizing child_process.execFile with validated arguments array.”',
      vulnFileLabel: 'auth.js:63-65',
      vulnGutter: [63, 64, 65],
      vulnLines: [
        { code: '<span class="diff-sign">-</span> <span class="c-comment">// Executing arbitrary host command via shell</span>', isTarget: false },
        { code: '<span class="diff-sign">-</span> <span class="c-func">exec</span>(<span class="c-str">"ping -c 4 "</span> + req.body.host, (err, stdout) =&gt; {<span class="line-focus-tag">Line 64 ⚠️ TARGET TO FIX</span>', isTarget: true },
        { code: '<span class="diff-sign">-</span>   <span class="c-keyword">return</span> res.<span class="c-func">send</span>(stdout); });', isTarget: false }
      ],
      transformTag: 'Line 64',
      secureFileLabel: 'auth.js:63-65',
      secureGutter: [63, 64, 65],
      secureLines: [
        { code: '<span class="diff-sign">+</span> <span class="c-comment">// Child process execution without shell invocation</span>', isSecure: false },
        { code: '<span class="diff-sign">+</span> <span class="c-func">execFile</span>(<span class="c-str">"/bin/ping"</span>, [<span class="c-str">"-c"</span>, <span class="c-str">"4"</span>, sanitizeHost(req.body.host)], (err, out) =&gt; {<span class="line-focus-tag-secure">Line 64 ✓ SECURE REPLACEMENT</span>', isSecure: true },
        { code: '<span class="diff-sign">+</span>   <span class="c-keyword">return</span> res.<span class="c-func">send</span>(out); });', isSecure: false }
      ],
      branch: 'fix/auth-rce-execfile-line-64',
      btnText: 'APPLY RECOMMENDED FIX (auth.js:64)',
      microVuln: '- exec("ping -c 4 " + req.body.host, callback);',
      microSec: '+ execFile("/bin/ping", ["-c", "4", host], callback);'
    },
    {
      id: 'login-deserial',
      file: 'login.py',
      line: 88,
      scope: '(Scope: Lines 87–89)',
      cwe: 'CWE-502',
      severity: 'CRITICAL',
      severityClass: 'crit',
      name: 'Insecure Object Deserialization',
      icon: '🔐',
      targetLineText: 'EXACT LINE TO MODIFY: LINE 88',
      targetAction: 'Replace pickle.loads() with cryptographically signed JWT decode',
      recommendation: '“Cease using Python pickle for user sessions at <strong>Line 88</strong>; decode HMAC-signed JSON Web Tokens instead.”',
      vulnFileLabel: 'login.py:87-89',
      vulnGutter: [87, 88, 89],
      vulnLines: [
        { code: '<span class="diff-sign">-</span> <span class="c-comment"># Dangerous unpickling of client session token</span>', isTarget: false },
        { code: '<span class="diff-sign">-</span> user_session = pickle.<span class="c-func">loads</span>(base64.<span class="c-func">b64decode</span>(raw_cookie))<span class="line-focus-tag">Line 88 ⚠️ TARGET TO FIX</span>', isTarget: true },
        { code: '<span class="diff-sign">-</span> <span class="c-keyword">return</span> render_template(<span class="c-str">\'dashboard.html\'</span>, user=user_session)', isTarget: false }
      ],
      transformTag: 'Line 88',
      secureFileLabel: 'login.py:87-89',
      secureGutter: [87, 88, 89],
      secureLines: [
        { code: '<span class="diff-sign">+</span> <span class="c-comment"># Safe cryptographically verified JWT decode</span>', isSecure: false },
        { code: '<span class="diff-sign">+</span> user_session = jwt.<span class="c-func">decode</span>(raw_cookie, JWT_SECRET, algorithms=[<span class="c-str">"HS256"</span>])<span class="line-focus-tag-secure">Line 88 ✓ SECURE REPLACEMENT</span>', isSecure: true },
        { code: '<span class="diff-sign">+</span> <span class="c-keyword">return</span> render_template(<span class="c-str">\'dashboard.html\'</span>, user=user_session)', isSecure: false }
      ],
      branch: 'fix/login-deserial-jwt-line-88',
      btnText: 'APPLY RECOMMENDED FIX (login.py:88)',
      microVuln: '- user_session = pickle.loads(base64.b64decode(raw_cookie))',
      microSec: '+ user_session = jwt.decode(raw_cookie, JWT_SECRET, alg="HS256")'
    },
    {
      id: 'pkg-axios',
      file: 'package.json',
      line: 27,
      scope: '(Scope: Lines 26–28)',
      cwe: 'CVE-2024-39338',
      severity: 'MEDIUM',
      severityClass: 'med',
      name: 'Vulnerable Dependency: axios',
      icon: '📦',
      targetLineText: 'EXACT LINE TO MODIFY: LINE 27',
      targetAction: 'Upgrade axios dependency from <code>^0.21.1</code> to patched <code>^1.7.4</code>',
      recommendation: '“Bump axios to version <strong>^1.7.4</strong> at <strong>Line 27</strong> to eliminate SSRF and ReDoS CVE vulnerabilities.”',
      vulnFileLabel: 'package.json:26-28',
      vulnGutter: [26, 27, 28],
      vulnLines: [
        { code: '<span class="diff-sign">-</span>   <span class="c-str">"dependencies"</span>: {', isTarget: false },
        { code: '<span class="diff-sign">-</span>     <span class="c-str">"axios"</span>: <span class="c-str">"^0.21.1"</span>,<span class="line-focus-tag">Line 27 ⚠️ TARGET TO FIX</span>', isTarget: true },
        { code: '<span class="diff-sign">-</span>     <span class="c-str">"express"</span>: <span class="c-str">"^4.18.2"</span>', isTarget: false }
      ],
      transformTag: 'Line 27',
      secureFileLabel: 'package.json:26-28',
      secureGutter: [26, 27, 28],
      secureLines: [
        { code: '<span class="diff-sign">+</span>   <span class="c-str">"dependencies"</span>: {', isSecure: false },
        { code: '<span class="diff-sign">+</span>     <span class="c-str">"axios"</span>: <span class="c-str">"^1.7.4"</span>,<span class="line-focus-tag-secure">Line 27 ✓ SECURE REPLACEMENT</span>', isSecure: true },
        { code: '<span class="diff-sign">+</span>     <span class="c-str">"express"</span>: <span class="c-str">"^4.18.2"</span>', isSecure: false }
      ],
      branch: 'fix/package-axios-upgrade-line-27',
      btnText: 'APPLY RECOMMENDED FIX (package.json:27)',
      microVuln: '- "axios": "^0.21.1"',
      microSec: '+ "axios": "^1.7.4"'
    }
  ];

  let scene9CurrentFixIdx = 0;
  const scene9PatchedSet = new Set();

  function renderScene9Fix(idx) {
    if (idx < 0 || idx >= CODEBASE_FIXES.length) idx = 0;
    scene9CurrentFixIdx = idx;
    const fix = CODEBASE_FIXES[idx];

    // 1. Update Navigation Tabs
    const tabs = document.querySelectorAll('#scene9FixTabs .scene9-tab');
    tabs.forEach((tab, i) => {
      if (i === idx) tab.classList.add('active');
      else tab.classList.remove('active');
    });

    // 2. Update Target Callout Banner
    const targetFile = document.getElementById('scene9TargetFile');
    const targetLineText = document.getElementById('scene9TargetLineText');
    const targetScope = document.getElementById('scene9TargetScope');
    const targetAction = document.getElementById('scene9TargetAction');
    const recText = document.getElementById('scene9RecommendationText');

    if (targetFile) targetFile.textContent = fix.file;
    if (targetLineText) targetLineText.textContent = fix.targetLineText;
    if (targetScope) targetScope.textContent = fix.scope;
    if (targetAction) targetAction.innerHTML = fix.targetAction;
    if (recText) recText.innerHTML = `<strong>Recommended Remediation:</strong> ${fix.recommendation}`;

    // 3. Update Vulnerable Code Box
    const vulnFile = document.getElementById('scene9VulnFileLabel');
    const vulnGutter = document.getElementById('scene9VulnGutter');
    const vulnLines = document.getElementById('scene9VulnLines');

    if (vulnFile) vulnFile.textContent = fix.vulnFileLabel;
    if (vulnGutter) {
      vulnGutter.innerHTML = fix.vulnGutter.map(n => 
        `<span class="gutter-num ${n === fix.line ? 'gutter-target-line' : ''}">${n}</span>`
      ).join('');
    }
    if (vulnLines) {
      vulnLines.innerHTML = fix.vulnLines.map(l => 
        `<div class="diff-line diff-del ${l.isTarget ? 'diff-highlight-target' : ''}">${l.code}</div>`
      ).join('');
    }

    // 4. Update Transformation Tag
    const transTag = document.getElementById('scene9TransformTag');
    if (transTag) transTag.textContent = fix.transformTag;

    // 5. Update Secure Code Box
    const secFile = document.getElementById('scene9SecureFileLabel');
    const secGutter = document.getElementById('scene9SecureGutter');
    const secLines = document.getElementById('scene9SecureLines');

    if (secFile) secFile.textContent = fix.secureFileLabel;
    if (secGutter) {
      secGutter.innerHTML = fix.secureGutter.map(n => 
        `<span class="gutter-num ${n === fix.line ? 'gutter-target-line-secure' : ''}">${n}</span>`
      ).join('');
    }
    if (secLines) {
      secLines.innerHTML = fix.secureLines.map(l => 
        `<div class="diff-line diff-add ${l.isSecure ? 'diff-highlight-secure' : ''}">${l.code}</div>`
      ).join('');
    }

    // 6. Update Button & Badge States for this Fix
    const applyBtn = document.getElementById('applyFixBtn');
    const applyBtnText = document.getElementById('applyFixBtnText');
    const fixBadge = document.getElementById('fixAppliedBadge');
    const branchText = document.getElementById('fixAppliedBranchText');

    if (applyBtnText) applyBtnText.textContent = fix.btnText;
    if (branchText) branchText.innerHTML = `Patch Applied to Branch: <code>${fix.branch}</code> ✓`;

    if (scene9PatchedSet.has(idx)) {
      if (applyBtn) applyBtn.classList.add('hidden');
      if (fixBadge) fixBadge.classList.remove('hidden');
    } else {
      if (applyBtn) {
        applyBtn.classList.remove('hidden');
        applyBtn.style.transform = 'scale(1)';
      }
      if (fixBadge) fixBadge.classList.add('hidden');
    }

    // 7. Highlight Matrix Card if present
    const matrixCards = document.querySelectorAll('#scene9FixMatrix .fix-matrix-card');
    matrixCards.forEach((card, i) => {
      if (i === idx) card.classList.add('active-card');
      else card.classList.remove('active-card');
    });
  }

  function initScene9Grid() {
    const container = document.getElementById('scene9FixMatrix');
    if (!container || container.children.length > 0) return;

    let html = '';
    CODEBASE_FIXES.forEach((fix, idx) => {
      html += `
        <div class="fix-matrix-card border-${fix.severityClass} ${idx === 0 ? 'active-card' : ''}" data-fix="${idx}">
          <div class="matrix-card-top">
            <span class="matrix-card-file">${fix.icon} ${fix.file}:${fix.line}</span>
            <span class="tab-pill ${fix.severityClass}">${fix.severity}</span>
          </div>
          <div class="matrix-card-name">${fix.name} (${fix.cwe})</div>
          <div class="matrix-micro-diff">
            <div class="micro-vuln">${fix.microVuln}</div>
            <div class="micro-sec">${fix.microSec}</div>
          </div>
          <div class="matrix-patch-action">
            <span class="patch-branch-tag">Branch: ${fix.branch}</span> &bull; Inspect Diff ➔
          </div>
        </div>
      `;
    });
    container.innerHTML = html;

    const cards = container.querySelectorAll('.fix-matrix-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        initAudio();
        const fixIdx = parseInt(card.dataset.fix || '0', 10);
        renderScene9Fix(fixIdx);
        playSynthBlip(600, 0.05);

        // Switch to single diff view
        const singleBtn = document.getElementById('btnScene9Single');
        if (singleBtn) singleBtn.click();
      });
    });
  }

  function setupScene9() {
    initScene9Grid();

    // Reset view to single diff inspector
    const btnSingle = document.getElementById('btnScene9Single');
    const btnGrid = document.getElementById('btnScene9Grid');
    const singleView = document.getElementById('scene9SingleView');
    const gridView = document.getElementById('scene9GridView');
    const allFixesBadge = document.getElementById('allFixesAppliedBadge');
    const btnApplyAll = document.getElementById('btnApplyAllFixes');

    if (btnSingle) btnSingle.classList.add('active');
    if (btnGrid) btnGrid.classList.remove('active');
    if (singleView) singleView.classList.remove('hidden');
    if (gridView) gridView.classList.add('hidden');
    if (allFixesBadge) allFixesBadge.classList.add('hidden');
    if (btnApplyAll) btnApplyAll.classList.remove('hidden');

    scene9PatchedSet.clear();

    // Load Fix 0 (database.py:42 SQLi)
    renderScene9Fix(0);

    // Automated demonstration sequence across codebase fixes:
    // Step 1: At 3.0s, apply Fix 0 (database.py:42)
    sceneTimers.push(setTimeout(() => {
      const applyBtn = document.getElementById('applyFixBtn');
      if (applyBtn) applyBtn.style.transform = 'scale(0.96)';
      playSynthBlip(880, 0.1);
    }, 3000 / state.speed));

    sceneTimers.push(setTimeout(() => {
      scene9PatchedSet.add(0);
      const applyBtn = document.getElementById('applyFixBtn');
      const fixBadge = document.getElementById('fixAppliedBadge');
      if (applyBtn) applyBtn.classList.add('hidden');
      if (fixBadge) fixBadge.classList.remove('hidden');
      playSuccessChord();
    }, 3500 / state.speed));

    // Step 2: At 5.8s, switch to Fix 1 (config.js:18 - Hardcoded Secret)
    sceneTimers.push(setTimeout(() => {
      renderScene9Fix(1);
      playAlertChime();
    }, 5800 / state.speed));

    // Step 3: At 7.5s, simulate applying Fix 1
    sceneTimers.push(setTimeout(() => {
      scene9PatchedSet.add(1);
      const applyBtn = document.getElementById('applyFixBtn');
      const fixBadge = document.getElementById('fixAppliedBadge');
      if (applyBtn) applyBtn.classList.add('hidden');
      if (fixBadge) fixBadge.classList.remove('hidden');
      playSuccessChord();
    }, 7500 / state.speed));

    // Step 4: At 9.2s, switch to Fix 2 (app.js:89 - Stored XSS)
    sceneTimers.push(setTimeout(() => {
      renderScene9Fix(2);
      playAlertChime();
    }, 9200 / state.speed));

    // Step 5: At 11.2s, simulate applying Fix 2
    sceneTimers.push(setTimeout(() => {
      scene9PatchedSet.add(2);
      const applyBtn = document.getElementById('applyFixBtn');
      const fixBadge = document.getElementById('fixAppliedBadge');
      if (applyBtn) applyBtn.classList.add('hidden');
      if (fixBadge) fixBadge.classList.remove('hidden');
      playSuccessChord();
    }, 11200 / state.speed));
  }

  // --- SCENE 10 IMPLEMENTATION ---
  function setupScene10() {
    const uploadBtn = document.getElementById('uploadPatchedProjectBtn');
    const confirmedBadge = document.getElementById('rescanConfirmedBadge');
    const uploadStatus = document.getElementById('rescanUploadStatus');
    const rescanBtn = document.getElementById('rescanProjectBtn');
    const rescanMsg = document.getElementById('rescanStatusMsg');
    const verifCards = document.querySelectorAll('#scene-10 .verif-card');

    // Reset initial state for Scene 10
    if (uploadBtn) {
      uploadBtn.classList.remove('hidden');
      uploadBtn.style.transform = 'scale(1)';
    }
    if (confirmedBadge) confirmedBadge.classList.add('hidden');
    if (uploadStatus) {
      uploadStatus.innerHTML = '<span class="status-dot"></span><span class="status-txt">Patched Code Ready for Upload</span>';
    }
    if (rescanBtn) {
      rescanBtn.disabled = true;
      rescanBtn.classList.add('disabled-btn');
    }
    if (rescanMsg) rescanMsg.textContent = 'Waiting for project upload...';

    verifCards.forEach(c => {
      c.style.opacity = '0.3';
      c.style.transform = 'scale(0.97)';
    });

    // Step 1: Automated Simulation of Uploading Patched Project (Changes at Line 42)
    sceneTimers.push(setTimeout(() => {
      if (uploadBtn) {
        uploadBtn.style.transform = 'scale(0.95)';
        playSynthBlip(840, 0.12);
      }
    }, 1800 / state.speed));

    sceneTimers.push(setTimeout(() => {
      if (uploadBtn) uploadBtn.classList.add('hidden');
      if (confirmedBadge) confirmedBadge.classList.remove('hidden');
      if (uploadStatus) {
        uploadStatus.innerHTML = '<span class="status-dot" style="background:#10b981;box-shadow:0 0 8px #10b981;"></span><span class="status-txt" style="color:#10b981;">Patched Code Uploaded (Line 42 Patch Detected) ✓</span>';
      }
      playSuccessChord();

      // Enable Re-Scan button
      if (rescanBtn) {
        rescanBtn.disabled = false;
        rescanBtn.classList.remove('disabled-btn');
      }
      if (rescanMsg) rescanMsg.textContent = 'Project uploaded! Ready to verify Line 42 patch...';
    }, 2500 / state.speed));

    // Step 2: Automated Trigger of Verification Re-Scan
    sceneTimers.push(setTimeout(() => {
      if (rescanBtn) {
        rescanBtn.style.transform = 'scale(0.95)';
      }
      playRadarSweep();
      if (rescanMsg) rescanMsg.textContent = 'Re-analyzing AST and taint-flow on uploaded codebase...';
    }, 4000 / state.speed));

    // Reveal Verified Resolutions sequentially
    sceneTimers.push(setTimeout(() => {
      if (verifCards[0]) {
        verifCards[0].style.transition = 'all 0.4s ease';
        verifCards[0].style.opacity = '1';
        verifCards[0].style.transform = 'scale(1)';
        playSuccessChord();
      }
    }, 5600 / state.speed));

    sceneTimers.push(setTimeout(() => {
      if (verifCards[1]) {
        verifCards[1].style.transition = 'all 0.4s ease';
        verifCards[1].style.opacity = '1';
        verifCards[1].style.transform = 'scale(1)';
        playSuccessChord();
      }
    }, 7200 / state.speed));

    sceneTimers.push(setTimeout(() => {
      if (verifCards[2]) {
        verifCards[2].style.transition = 'all 0.4s ease';
        verifCards[2].style.opacity = '1';
        verifCards[2].style.transform = 'scale(1)';
        playSynthBlip(440, 0.15, 'sawtooth');
      }
      if (rescanMsg) rescanMsg.textContent = 'Verification Complete ✓ (Line 42 fix confirmed, 1 pending)';
    }, 8800 / state.speed));
  }

  // --- SCENE 11 IMPLEMENTATION ---
  function setupScene11() {
    // Reset to Register view by default
    const btnReg = document.getElementById('btnScene11Register');
    const btnPol = document.getElementById('btnScene11Policy');
    const btnSpl = document.getElementById('btnScene11Split');
    const vReg = document.getElementById('scene11ViewRegister');
    const vPol = document.getElementById('scene11ViewPolicy');
    const vSpl = document.getElementById('scene11ViewSplit');

    if (btnReg && btnPol && btnSpl && vReg && vPol && vSpl) {
      btnReg.classList.add('active');
      btnPol.classList.remove('active');
      btnSpl.classList.remove('active');
      vReg.classList.remove('hidden');
      vPol.classList.add('hidden');
      vSpl.classList.add('hidden');
    }

    const kpiCards = document.querySelectorAll('#scene-11 .kpi-card');
    kpiCards.forEach((card, idx) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(12px)';
      sceneTimers.push(setTimeout(() => {
        card.style.transition = 'all 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        playSynthBlip(600 + idx * 80, 0.05);
      }, (400 + idx * 200) / state.speed));
    });

    const compGrid = document.querySelector('#scene-11 .comparison-grid');
    if (compGrid) {
      compGrid.style.opacity = '0';
      compGrid.style.transform = 'translateY(10px)';
      sceneTimers.push(setTimeout(() => {
        compGrid.style.transition = 'all 0.4s ease';
        compGrid.style.opacity = '1';
        compGrid.style.transform = 'translateY(0)';
        playSynthBlip(800, 0.04);
      }, 1200 / state.speed));
    }

    const auditPanel = document.querySelector('#scene-11 .findings-audit-table-panel');
    if (auditPanel) {
      auditPanel.style.opacity = '0';
      auditPanel.style.transform = 'translateY(12px)';
      sceneTimers.push(setTimeout(() => {
        auditPanel.style.transition = 'all 0.4s ease';
        auditPanel.style.opacity = '1';
        auditPanel.style.transform = 'translateY(0)';
      }, 1600 / state.speed));
    }

    // Highlight the 4 resolved findings
    const resolvedRows = document.querySelectorAll('#scene-11 .row-resolved');
    resolvedRows.forEach((row, idx) => {
      sceneTimers.push(setTimeout(() => {
        row.style.transition = 'background 0.4s ease';
        row.style.background = 'rgba(16, 185, 129, 0.22)';
        setTimeout(() => {
          row.style.background = 'rgba(16, 185, 129, 0.06)';
        }, 800);
      }, (2000 + idx * 250) / state.speed));
    });

    // Auto-reveal Policy view around 5.5s during presentation
    sceneTimers.push(setTimeout(() => {
      if (state.isPlaying && state.currentScene === 11) {
        if (btnReg && btnPol && vReg && vPol) {
          btnReg.classList.remove('active');
          btnPol.classList.add('active');
          vReg.classList.add('hidden');
          vPol.classList.remove('hidden');
          playSynthBlip(760, 0.04);
        }
      }
    }, 5500 / state.speed));

    sceneTimers.push(setTimeout(() => {
      playSuccessChord();
    }, 3500 / state.speed));
  }

  // --- SCENE 12 IMPLEMENTATION ---
  function setupScene12() {
    const wfSteps = document.querySelectorAll('#scene-12 .wf-step-box');
    wfSteps.forEach(s => s.classList.remove('active-wf'));

    // Propagate light beam through all 12 stages in sequence
    wfSteps.forEach((step, idx) => {
      sceneTimers.push(setTimeout(() => {
        wfSteps.forEach(s => s.classList.remove('active-wf'));
        step.classList.add('active-wf');
        playSynthBlip(300 + idx * 60, 0.04);
      }, (600 + idx * 650) / state.speed));
    });

    sceneTimers.push(setTimeout(() => {
      wfSteps.forEach(s => s.classList.add('active-wf'));
      playSuccessChord();
    }, 9000 / state.speed));
  }

  // --- SCENE 13 IMPLEMENTATION ---
  function setupScene13() {
    const visionCards = document.querySelectorAll('#scene-13 .vision-card');
    visionCards.forEach((card, idx) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(18px)';
      sceneTimers.push(setTimeout(() => {
        card.style.transition = 'all 0.4s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        playSynthBlip(400 + idx * 120, 0.08);
      }, (600 + idx * 800) / state.speed));
    });

    sceneTimers.push(setTimeout(() => {
      playSuccessChord();
    }, 4500 / state.speed));
  }

  // --- USER INTERACTION LISTENERS ---
  function initListeners() {
    // Play / Pause Button
    dom.playPauseBtn.addEventListener('click', togglePlay);

    // Prev / Next Scene
    dom.prevBtn.addEventListener('click', prevScene);
    dom.nextBtn.addEventListener('click', nextScene);

    // Scene Selector Pills
    dom.scenePills.forEach((pill) => {
      pill.addEventListener('click', () => {
        const targetSceneNum = parseInt(pill.dataset.targetScene, 10);
        goToScene(targetSceneNum - 1);
      });
    });

    // Timeline Scrubber Clicking / Scrubbing
    dom.scrubberTrack.addEventListener('click', (e) => {
      const rect = dom.scrubberTrack.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const ratio = Math.max(0, Math.min(1, clickX / rect.width));
      const targetTimeMs = ratio * totalDemoDuration;

      // Find which scene this time corresponds to
      let accum = 0;
      let targetSceneIdx = 0;
      for (let i = 0; i < SCENES.length; i++) {
        if (targetTimeMs >= accum && targetTimeMs < accum + SCENES[i].duration) {
          targetSceneIdx = i;
          state.sceneElapsed = targetTimeMs - accum;
          break;
        }
        accum += SCENES[i].duration;
      }

      goToScene(targetSceneIdx);
    });

    // Speed Selector Buttons
    dom.speedBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        dom.speedBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.speed = parseFloat(btn.dataset.speed);
        playSynthBlip(700, 0.05);

        // Reschedule next scene with new speed
        if (state.isPlaying) {
          scheduleNextScene();
        }
      });
    });

    // Audio SFX Toggle
    dom.audioToggleBtn.addEventListener('click', () => {
      initAudio();
      state.audioEnabled = !state.audioEnabled;

      if (state.audioEnabled) {
        dom.audioOnIcon.classList.remove('hidden');
        dom.audioOffIcon.classList.add('hidden');
        dom.audioLabel.textContent = 'Sound: ON';
        dom.audioToggleBtn.classList.add('active');
        playSuccessChord();
      } else {
        dom.audioOnIcon.classList.add('hidden');
        dom.audioOffIcon.classList.remove('hidden');
        dom.audioLabel.textContent = 'Sound: OFF';
        dom.audioToggleBtn.classList.remove('active');
      }
    });

    // Fullscreen Toggle
    dom.fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // Replay Demo Button in Finale
    if (dom.restartBtn) {
      dom.restartBtn.addEventListener('click', () => {
        goToScene(0);
        if (!state.isPlaying) togglePlay();
      });
    }

    // Interactive Code Tabs in Scene 1
    const scene1Tabs = document.querySelectorAll('#scene1Tabs .tab');
    scene1Tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        initAudio();
        const file = tab.dataset.file || 'database.py';
        displayScene1File(file);
      });
    });

    // Scene 1 View Mode Buttons (Active File vs Unified Codebase)
    const btnSingle = document.getElementById('btnSingleFile');
    const btnUnified = document.getElementById('btnUnifiedCodebase');
    if (btnSingle) {
      btnSingle.addEventListener('click', () => {
        initAudio();
        const activeTab = document.querySelector('#scene1Tabs .tab.active');
        const file = activeTab ? activeTab.dataset.file : 'database.py';
        displayScene1File(file);
      });
    }
    if (btnUnified) {
      btnUnified.addEventListener('click', () => {
        initAudio();
        displayScene1UnifiedCodebase();
      });
    }

    // Unified Codebase Cards Click (Drill down to inspect in Single File view)
    const unifiedCards = document.querySelectorAll('#scene1UnifiedCodebaseView .unified-file-card');
    unifiedCards.forEach(card => {
      card.addEventListener('click', () => {
        initAudio();
        const file = card.dataset.file || 'database.py';
        displayScene1File(file);
      });
    });

    // Scene 1 Flaw Cards Click (Syncs directly with editor)
    const s1FlawCards = document.querySelectorAll('#scene1FlawCards .flaw-card');
    s1FlawCards.forEach(card => {
      card.addEventListener('click', () => {
        initAudio();
        const file = card.dataset.file || 'database.py';
        displayScene1File(file);
      });
    });

    // Interactive Upload Project Button in Scene 3
    const uploadBtn = document.getElementById('uploadProjectBtn');
    if (uploadBtn) {
      uploadBtn.addEventListener('click', () => {
        initAudio();
        uploadBtn.classList.add('hidden');
        const s3Badge = document.getElementById('uploadConfirmedBadge');
        if (s3Badge) s3Badge.classList.remove('hidden');
        const s3Status = document.getElementById('uploadStatusBadge');
        if (s3Status) {
          s3Status.innerHTML = '<span class="status-dot" style="background:#10b981;box-shadow:0 0 8px #10b981;"></span><span class="status-txt" style="color:#10b981;">Repository Uploaded ✓</span>';
        }
        playSuccessChord();
      });
    }

    // Scene 3 Surfaces Tabs Click (Section 27 & 40)
    const surfaceTabs = document.querySelectorAll('#scene3SurfacesTabs .surface-tab');
    surfaceTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        initAudio();
        const surfaceKey = tab.dataset.surface;
        renderSurfacePreview(surfaceKey);
        playSynthBlip(640, 0.05);
      });
    });

    // Interactive Apply Fix Button in Scene 9
    const applyFixBtn = document.getElementById('applyFixBtn');
    if (applyFixBtn) {
      applyFixBtn.addEventListener('click', () => {
        initAudio();
        scene9PatchedSet.add(scene9CurrentFixIdx);
        applyFixBtn.classList.add('hidden');
        const fixBadge = document.getElementById('fixAppliedBadge');
        if (fixBadge) fixBadge.classList.remove('hidden');
        playSuccessChord();
      });
    }

    // Interactive Apply All 6 Fixes Button in Scene 9
    const btnApplyAllFixes = document.getElementById('btnApplyAllFixes');
    if (btnApplyAllFixes) {
      btnApplyAllFixes.addEventListener('click', () => {
        initAudio();
        for (let i = 0; i < CODEBASE_FIXES.length; i++) {
          scene9PatchedSet.add(i);
        }
        btnApplyAllFixes.classList.add('hidden');
        const allBadge = document.getElementById('allFixesAppliedBadge');
        if (allBadge) allBadge.classList.remove('hidden');
        renderScene9Fix(scene9CurrentFixIdx);
        playSuccessChord();
      });
    }

    // Interactive Upload Patched Project Button in Scene 10
    const uploadPatchedBtn = document.getElementById('uploadPatchedProjectBtn');
    if (uploadPatchedBtn) {
      uploadPatchedBtn.addEventListener('click', () => {
        initAudio();
        uploadPatchedBtn.classList.add('hidden');
        const s10Badge = document.getElementById('rescanConfirmedBadge');
        if (s10Badge) s10Badge.classList.remove('hidden');
        const s10Status = document.getElementById('rescanUploadStatus');
        if (s10Status) {
          s10Status.innerHTML = '<span class="status-dot" style="background:#10b981;box-shadow:0 0 8px #10b981;"></span><span class="status-txt" style="color:#10b981;">Patched Code Uploaded (Line 42 Patch Detected) ✓</span>';
        }
        playSuccessChord();

        const s10Btn = document.getElementById('rescanProjectBtn');
        if (s10Btn) {
          s10Btn.disabled = false;
          s10Btn.classList.remove('disabled-btn');
        }
        const s10Msg = document.getElementById('rescanStatusMsg');
        if (s10Msg) s10Msg.textContent = 'Project uploaded! Click RE-SCAN to verify Line 42 patch...';
      });
    }

    // Interactive Re-Scan Button in Scene 10
    const rescanBtn = document.getElementById('rescanProjectBtn');
    if (rescanBtn) {
      rescanBtn.addEventListener('click', () => {
        initAudio();
        playRadarSweep();
        const activeMsg = document.getElementById('rescanStatusMsg');
        if (activeMsg) activeMsg.textContent = 'Re-analyzing AST and taint-flow on uploaded codebase...';
        const cards = document.querySelectorAll('#scene-10 .verif-card');

        setTimeout(() => {
          if (cards[0]) {
            cards[0].style.opacity = '1';
            cards[0].style.transform = 'scale(1)';
            playSuccessChord();
          }
        }, 1200);

        setTimeout(() => {
          if (cards[1]) {
            cards[1].style.opacity = '1';
            cards[1].style.transform = 'scale(1)';
            playSuccessChord();
          }
        }, 2400);

        setTimeout(() => {
          if (cards[2]) {
            cards[2].style.opacity = '1';
            cards[2].style.transform = 'scale(1)';
            playSynthBlip(440, 0.15, 'sawtooth');
          }
          if (activeMsg) activeMsg.textContent = 'Verification Complete ✓ (Line 42 fix confirmed, 1 pending)';
        }, 3600);
      });
    }

    // Scene 5 Severity Filter Tabs
    const vulnFilterBtns = document.querySelectorAll('#scene-5 .vuln-filter-btn');
    const vulnItems = document.querySelectorAll('#scene-5 .vuln-item');
    vulnFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        initAudio();
        vulnFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        playSynthBlip(750, 0.04);

        vulnItems.forEach(item => {
          if (filter === 'all' || item.dataset.severity === filter) {
            item.style.display = 'flex';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Scene 5 Finding Items Click (Focus Code Viewer)
    vulnItems.forEach(item => {
      item.addEventListener('click', () => {
        initAudio();
        vulnItems.forEach(i => i.classList.remove('active-finding'));
        item.classList.add('active-finding');
        playSynthBlip(540, 0.05);

        const fileName = item.dataset.file || 'database.py';
        const lineNum = parseInt(item.dataset.line || '42', 10);
        const cwe = item.dataset.cwe || 'CWE-89';
        const nameEl = item.querySelector('.vuln-name');
        const title = nameEl ? nameEl.textContent : 'Vulnerability';

        updateCodeFocusView(fileName, lineNum, cwe, title, item.id);
      });
    });

    // Scene 5 Anchor Tabs Click
    const scene5Tabs = document.querySelectorAll('#scene5FocusTabs .tab');
    scene5Tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        initAudio();
        const file = tab.dataset.file;
        const line = parseInt(tab.dataset.line || '0', 10);
        const cwe = tab.dataset.cwe || '';
        const title = tab.dataset.title || '';
        const id = tab.dataset.id || '';
        updateCodeFocusView(file, line, cwe, title, id);
        playSynthBlip(620, 0.05);
      });
    });

    // Scene 5 View Mode Switcher (Single Anchor vs All 3 Anchors)
    const btnFocusSingle = document.getElementById('btnFocusSingle');
    const btnFocusMulti = document.getElementById('btnFocusMulti');
    const focusSingleContainer = document.getElementById('focusSingleContainer');
    const focusMultiContainer = document.getElementById('focusMultiContainer');

    if (btnFocusSingle && btnFocusMulti && focusSingleContainer && focusMultiContainer) {
      btnFocusSingle.addEventListener('click', () => {
        initAudio();
        btnFocusSingle.classList.add('active');
        btnFocusMulti.classList.remove('active');
        focusSingleContainer.classList.remove('hidden');
        focusMultiContainer.classList.add('hidden');
        playSynthBlip(560, 0.04);
      });

      btnFocusMulti.addEventListener('click', () => {
        initAudio();
        btnFocusMulti.classList.add('active');
        btnFocusSingle.classList.remove('active');
        focusSingleContainer.classList.add('hidden');
        focusMultiContainer.classList.remove('hidden');
        playSynthBlip(680, 0.04);
      });
    }

    // Scene 5 Multi-Anchor Cards Click
    const multiCards = document.querySelectorAll('#scene-5 .multi-anchor-card');
    multiCards.forEach(card => {
      card.addEventListener('click', () => {
        initAudio();
        const file = card.dataset.file;
        const line = parseInt(card.dataset.line || '0', 10);
        const cwe = card.dataset.cwe || '';
        const title = card.dataset.title || '';
        const id = card.dataset.id || '';
        updateCodeFocusView(file, line, cwe, title, id);
        playSynthBlip(640, 0.05);
      });
      // Double click to switch to single anchor view for deep inspection
      card.addEventListener('dblclick', () => {
        if (btnFocusSingle) btnFocusSingle.click();
      });
    });

    // Scene 7 Recalculate Convergence Button
    const btnRecalcRisk = document.getElementById('btnRecalcRisk');
    if (btnRecalcRisk) {
      btnRecalcRisk.addEventListener('click', () => {
        initAudio();
        playAlertChime();
        setupScene7();
      });
    }

    // Scene 8 Error Tabs Click
    const scene8Tabs = document.querySelectorAll('#scene8ErrorTabs .scene8-tab');
    scene8Tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        initAudio();
        const errIdx = parseInt(tab.dataset.err || '0', 10);
        renderScene8Error(errIdx, true);
        playSynthBlip(650, 0.04);
      });
    });

    // Scene 8 View Mode Switcher (Copilot Single Inspector vs All 6 Codebase Grid)
    const btnScene8Single = document.getElementById('btnScene8Single');
    const btnScene8Grid = document.getElementById('btnScene8Grid');
    const scene8SingleView = document.getElementById('scene8SingleView');
    const scene8GridView = document.getElementById('scene8GridView');

    if (btnScene8Single && btnScene8Grid && scene8SingleView && scene8GridView) {
      btnScene8Single.addEventListener('click', () => {
        initAudio();
        btnScene8Single.classList.add('active');
        btnScene8Grid.classList.remove('active');
        scene8SingleView.classList.remove('hidden');
        scene8GridView.classList.add('hidden');
        playSynthBlip(560, 0.04);
      });

      btnScene8Grid.addEventListener('click', () => {
        initAudio();
        initScene8Grid();
        btnScene8Grid.classList.add('active');
        btnScene8Single.classList.remove('active');
        scene8SingleView.classList.add('hidden');
        scene8GridView.classList.remove('hidden');
        playSynthBlip(680, 0.04);
      });
    }

    // Scene 9 Fix Tabs Click
    const scene9Tabs = document.querySelectorAll('#scene9FixTabs .scene9-tab');
    scene9Tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        initAudio();
        const fixIdx = parseInt(tab.dataset.fix || '0', 10);
        renderScene9Fix(fixIdx);
        playSynthBlip(650, 0.04);
      });
    });

    // Scene 9 View Mode Switcher (Single Diff Inspector vs All 6 Codebase Matrix)
    const btnScene9Single = document.getElementById('btnScene9Single');
    const btnScene9Grid = document.getElementById('btnScene9Grid');
    const scene9SingleView = document.getElementById('scene9SingleView');
    const scene9GridView = document.getElementById('scene9GridView');

    if (btnScene9Single && btnScene9Grid && scene9SingleView && scene9GridView) {
      btnScene9Single.addEventListener('click', () => {
        initAudio();
        btnScene9Single.classList.add('active');
        btnScene9Grid.classList.remove('active');
        scene9SingleView.classList.remove('hidden');
        scene9GridView.classList.add('hidden');
        playSynthBlip(560, 0.04);
      });

      btnScene9Grid.addEventListener('click', () => {
        initAudio();
        initScene9Grid();
        btnScene9Grid.classList.add('active');
        btnScene9Single.classList.remove('active');
        scene9SingleView.classList.add('hidden');
        scene9GridView.classList.remove('hidden');
        playSynthBlip(680, 0.04);
      });
    }

    // Scene 11 View Switcher Tabs
    const btnScene11Register = document.getElementById('btnScene11Register');
    const btnScene11Policy = document.getElementById('btnScene11Policy');
    const btnScene11Split = document.getElementById('btnScene11Split');
    const viewScene11Register = document.getElementById('scene11ViewRegister');
    const viewScene11Policy = document.getElementById('scene11ViewPolicy');
    const viewScene11Split = document.getElementById('scene11ViewSplit');

    function switchScene11Tab(viewName) {
      const tabBtns = [btnScene11Register, btnScene11Policy, btnScene11Split];
      const views = [viewScene11Register, viewScene11Policy, viewScene11Split];
      tabBtns.forEach(b => b && b.classList.remove('active'));
      views.forEach(v => v && v.classList.add('hidden'));

      if (viewName === 'register') {
        if (btnScene11Register) btnScene11Register.classList.add('active');
        if (viewScene11Register) viewScene11Register.classList.remove('hidden');
      } else if (viewName === 'policy') {
        if (btnScene11Policy) btnScene11Policy.classList.add('active');
        if (viewScene11Policy) viewScene11Policy.classList.remove('hidden');
      } else if (viewName === 'split') {
        if (btnScene11Split) btnScene11Split.classList.add('active');
        if (viewScene11Split) viewScene11Split.classList.remove('hidden');
      }
    }

    if (btnScene11Register) {
      btnScene11Register.addEventListener('click', () => {
        initAudio();
        switchScene11Tab('register');
        playSynthBlip(600, 0.04);
      });
    }
    if (btnScene11Policy) {
      btnScene11Policy.addEventListener('click', () => {
        initAudio();
        switchScene11Tab('policy');
        playSynthBlip(680, 0.04);
      });
    }
    if (btnScene11Split) {
      btnScene11Split.addEventListener('click', () => {
        initAudio();
        switchScene11Tab('split');
        playSynthBlip(720, 0.04);
      });
    }

    // Scene 11 Audit Table Filter Tabs
    const auditFilterBtns = document.querySelectorAll('#scene-11 .audit-tag-btn');
    const auditRows = document.querySelectorAll('#scene-11 .audit-row');
    auditFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        initAudio();
        auditFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        playSynthBlip(720, 0.04);

        auditRows.forEach(row => {
          if (filter === 'all') {
            row.style.display = '';
          } else if (filter === 'resolved') {
            row.style.display = row.dataset.status === 'resolved' ? '' : 'none';
          } else if (row.dataset.severity === filter) {
            row.style.display = '';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Don't intercept if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      switch (e.code) {
        case 'Space':
          e.preventDefault();
          initAudio();
          togglePlay();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          initAudio();
          prevScene();
          break;
        case 'ArrowRight':
          e.preventDefault();
          initAudio();
          nextScene();
          break;
        case 'KeyF':
          e.preventDefault();
          dom.fullscreenBtn.click();
          break;
        case 'KeyM':
          e.preventDefault();
          dom.audioToggleBtn.click();
          break;
        case 'KeyR':
          e.preventDefault();
          goToScene(0);
          break;
        // Direct jump 1-9
        case 'Digit1': goToScene(0); break;
        case 'Digit2': goToScene(1); break;
        case 'Digit3': goToScene(2); break;
        case 'Digit4': goToScene(3); break;
        case 'Digit5': goToScene(4); break;
        case 'Digit6': goToScene(5); break;
        case 'Digit7': goToScene(6); break;
        case 'Digit8': goToScene(7); break;
        case 'Digit9': goToScene(8); break;
        case 'Digit0': goToScene(9); break;
      }
    });
  }

  // --- INITIALIZATION ---
  function init() {
    cacheDom();
    if (dom.totalTimeDisplay) dom.totalTimeDisplay.textContent = formatTime(totalDemoDuration);
    updatePlayPauseUI();
    initListeners();
    goToScene(0);
    requestAnimationFrame(tick);
  }

  // Run on DOM loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

