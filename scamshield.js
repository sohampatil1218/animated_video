/**
 * SCAMSHIELD 2.0: Multi-Channel Scam Intelligence & Coordinated Scam Detection
 * Interactive Presentation Engine & Procedural Audio Synthesizer
 */

(function () {
  'use strict';

  // --- SCENE CONFIGURATION (17 CONTINUOUS ACTS) ---
  const SCENES = [
    { id: 1, badge: 'SCENE 1 / 17', title: 'The Digital Scam Problem — Multi-Channel Threat', duration: 10000 },
    { id: 2, badge: 'SCENE 2 / 17', title: 'The Hidden Connection — Common Threat Infrastructure', duration: 9500 },
    { id: 3, badge: 'SCENE 3 / 17', title: 'The Existing Challenge — Siloed Detection Failures', duration: 9000 },
    { id: 4, badge: 'SCENE 4 / 17', title: 'Introducing ScamShield 2.0 — Multi-Channel Ingestion', duration: 9000 },
    { id: 5, badge: 'SCENE 5 / 17', title: 'Multi-Channel Analysis — 7-Stage Neural Pipeline', duration: 9500 },
    { id: 6, badge: 'SCENE 6 / 17', title: 'AI/ML Scam Pattern Detection — Social Engineering Levers', duration: 10000 },
    { id: 7, badge: 'SCENE 7 / 17', title: 'Entity Extraction — Structuring Unstructured Reports', duration: 9000 },
    { id: 8, badge: 'SCENE 8 / 17', title: 'Relationship / Graph Analysis — Campaign Network Topology', duration: 12000 },
    { id: 9, badge: 'SCENE 9 / 17', title: 'Coordinated Scam Detection — Multi-User Incident Clustering', duration: 10500 },
    { id: 10, badge: 'SCENE 10 / 17', title: 'Risk Assessment Engine — Score 92/100 Critical Risk', duration: 9500 },
    { id: 11, badge: 'SCENE 11 / 17', title: 'Explainable Warning — Non-Technical Plain English Guidance', duration: 9500 },
    { id: 12, badge: 'SCENE 12 / 17', title: 'Preventive Guidance — Proactive Action Interception', duration: 9500 },
    { id: 13, badge: 'SCENE 13 / 17', title: 'User Reporting — Crowd-Sourced Intelligence Network', duration: 9000 },
    { id: 14, badge: 'SCENE 14 / 17', title: 'Scam Intelligence Dashboard — SOC Threat Telemetry', duration: 10000 },
    { id: 15, badge: 'SCENE 15 / 17', title: 'Historical Intelligence — Unmasking Repeat Syndicates', duration: 9500 },
    { id: 16, badge: 'SCENE 16 / 17', title: 'Complete Workflow — Synchronized 12-Stage Architecture', duration: 9500 },
    { id: 17, badge: 'SCENE 17 / 17', title: 'Project Vision — Detect. Connect. Explain. Protect.', duration: 11000 }
  ];

  const totalDuration = SCENES.reduce((acc, s) => acc + s.duration, 0);

  // --- STATE MACHINE ---
  const state = {
    currentSceneIndex: 0,
    isPlaying: true,
    audioEnabled: false,
    speed: 1,
    elapsedTime: 0,
    sceneElapsed: 0,
    lastFrameTime: null
  };

  let animationFrameId = null;
  let sceneTimers = [];

  // --- PROCEDURAL WEB AUDIO SYNTHESIZER (100% Zero Dependency) ---
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playSynthBlip(freq = 600, duration = 0.06, type = 'sine', volume = 0.08) {
    if (!state.audioEnabled || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(volume, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio blip error:', e);
    }
  }

  function playAlertChime() {
    if (!state.audioEnabled || !audioCtx) return;
    [520, 680, 840].forEach((freq, idx) => {
      setTimeout(() => {
        playSynthBlip(freq, 0.12, 'triangle', 0.1);
      }, idx * 70);
    });
  }

  function playSuccessChord() {
    if (!state.audioEnabled || !audioCtx) return;
    [440, 554, 659, 880].forEach((freq, idx) => {
      setTimeout(() => {
        playSynthBlip(freq, 0.2, 'sine', 0.08);
      }, idx * 60);
    });
  }

  function playWarningAlarm() {
    if (!state.audioEnabled || !audioCtx) return;
    [880, 740, 880, 740].forEach((freq, idx) => {
      setTimeout(() => {
        playSynthBlip(freq, 0.09, 'sawtooth', 0.07);
      }, idx * 90);
    });
  }

  function clearSceneTimers() {
    sceneTimers.forEach(t => clearTimeout(t));
    sceneTimers = [];
  }

  // --- TIME FORMATTING ---
  function formatTime(ms) {
    const totalSec = Math.floor(ms / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // --- HUD & SCENE SWITCHING ---
  function updateHUD() {
    const scene = SCENES[state.currentSceneIndex];
    const badgeEl = document.getElementById('sceneBadge');
    const titleEl = document.getElementById('sceneTitleDisplay');
    const timeEl = document.getElementById('timeReadout');
    const scrubberFill = document.getElementById('scrubberFill');

    if (badgeEl) badgeEl.textContent = scene.badge;
    if (titleEl) titleEl.textContent = scene.title;
    if (timeEl) timeEl.textContent = `${formatTime(state.elapsedTime)} / ${formatTime(totalDuration)}`;

    const progressPct = Math.min(100, (state.elapsedTime / totalDuration) * 100);
    if (scrubberFill) scrubberFill.style.width = `${progressPct}%`;

    // Update Pills
    const pills = document.querySelectorAll('#scenePillsBar .scene-pill');
    pills.forEach((p, idx) => {
      if (idx === state.currentSceneIndex) {
        p.classList.add('active');
        p.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        p.classList.remove('active');
      }
    });
  }

  function activateScene(sceneIndex) {
    if (sceneIndex < 0) sceneIndex = 0;
    if (sceneIndex >= SCENES.length) sceneIndex = SCENES.length - 1;

    clearSceneTimers();
    state.currentSceneIndex = sceneIndex;
    state.sceneElapsed = 0;

    // Calculate global elapsed time up to start of this scene
    let cumulative = 0;
    for (let i = 0; i < sceneIndex; i++) {
      cumulative += SCENES[i].duration;
    }
    state.elapsedTime = cumulative;

    // Switch DOM active classes
    const scenes = document.querySelectorAll('.scene');
    scenes.forEach((s, idx) => {
      if (idx === sceneIndex) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });

    updateHUD();
    playSynthBlip(750, 0.04, 'sine', 0.05);

    // Run Scene Specific Automations
    runSceneRoutines(sceneIndex + 1);
  }

  // --- SCENE SPECIFIC DYNAMIC ANIMATION ROUTINES ---
  function runSceneRoutines(sceneNumber) {
    switch (sceneNumber) {
      case 1:
        setupScene1();
        break;
      case 2:
        setupScene2();
        break;
      case 4:
        setupScene4();
        break;
      case 5:
        setupScene5();
        break;
      case 6:
        setupScene6();
        break;
      case 8:
        setupScene8();
        break;
      case 10:
        setupScene10();
        break;
      case 12:
        setupScene12();
        break;
      case 13:
        setupScene13();
        break;
      case 14:
        setupScene14();
        break;
      case 15:
        setupScene15();
        break;
      case 17:
        setupScene17();
        break;
      default:
        break;
    }
  }

  // --- SCENE 1 ROUTINE (7 Distinct Communication Channels) ---
  function setupScene1() {
    const cards = document.querySelectorAll('.s1-seven-channels-grid .channel-card, .s1-channels-grid .channel-card');
    cards.forEach(c => {
      c.style.transform = 'scale(1)';
      c.style.borderColor = 'rgba(255, 255, 255, 0.08)';
    });

    cards.forEach((card, idx) => {
      sceneTimers.push(setTimeout(() => {
        card.style.transform = 'scale(1.03)';
        card.style.borderColor = 'var(--danger)';
        playSynthBlip(420 + idx * 55, 0.05, 'triangle', 0.04);
        setTimeout(() => {
          card.style.transform = 'scale(1)';
        }, 1100 / state.speed);
      }, (idx * 950 + 350) / state.speed));
    });
  }

  // --- SCENE 2 ROUTINE (Hidden Connection) ---
  function setupScene2() {
    const core = document.getElementById('s2CampaignCore');
    if (core) {
      core.style.transform = 'scale(0.8)';
      core.style.opacity = '0.4';
    }

    sceneTimers.push(setTimeout(() => {
      if (core) {
        core.style.transform = 'scale(1.15)';
        core.style.opacity = '1';
        playAlertChime();
        setTimeout(() => {
          core.style.transform = 'scale(1)';
        }, 600 / state.speed);
      }
    }, 2800 / state.speed));
  }

  // --- SCENE 4 ROUTINE (Analyze Button) ---
  function setupScene4() {
    const btn = document.getElementById('s4AnalyzeBtn');
    const mockInput = document.getElementById('s4MockInput');
    if (btn) btn.style.transform = 'scale(1)';

    sceneTimers.push(setTimeout(() => {
      if (btn) {
        btn.style.transform = 'scale(0.96)';
        playSynthBlip(880, 0.1);
        setTimeout(() => {
          btn.style.transform = 'scale(1)';
          playSuccessChord();
        }, 300 / state.speed);
      }
    }, 3800 / state.speed));
  }

  // --- SCENE 5 ROUTINE (Pipeline Progression) ---
  function setupScene5() {
    const progressFill = document.getElementById('s5PipeProgress');
    const nodes = document.querySelectorAll('.pipeline-track .pipe-node');

    if (progressFill) progressFill.style.width = '0%';
    nodes.forEach((n, idx) => {
      if (idx === 0) n.classList.add('active');
      else n.classList.remove('active');
    });

    nodes.forEach((node, idx) => {
      sceneTimers.push(setTimeout(() => {
        node.classList.add('active');
        if (progressFill) {
          progressFill.style.width = `${(idx / (nodes.length - 1)) * 100}%`;
        }
        playSynthBlip(540 + idx * 80, 0.05, 'sine', 0.05);
      }, (idx * 1100 + 500) / state.speed));
    });
  }

  // --- SCENE 6 ROUTINE (ML Pattern Alert) ---
  function setupScene6() {
    sceneTimers.push(setTimeout(() => {
      playWarningAlarm();
    }, 3500 / state.speed));
  }

  // --- SCENE 8 ROUTINE (Hero Relationship Graph & Forensic Node Inspector) ---
  const nodeEvidenceDescriptions = {
    'user-a': '👤 Citizen Report — User A (Delhi): Received urgent SMS threat from +91 98765 43210 instructing immediate credential verification on suspicious-bank-auth.com.',
    'user-b': '👤 Citizen Report — User B (Mumbai): Received spoofed vishing call from +91 98765 43210 claiming debit cards were suspended, directing to the same cloned portal.',
    'user-c': '👤 Citizen Report — User C (Bengaluru): Targeted with ₹25,000 collect request from fakebank@ybl and fraudulent QR code under the guise of an overdue refund.',
    'user-d': '👤 Citizen Report — User D (Hyderabad): Received WhatsApp impersonation message from FakeBank Support Desk referencing support@fakebank-alert.com.',
    'phone': '📞 Entity Indicator — Phone Number (+91 98765 43210): Flagged VoIP / Vishing gateway used to target both User A in Delhi and User B in Mumbai.',
    'domain': '🌐 Entity Indicator — Phishing Domain (suspicious-bank-auth.com): Cloned credential harvesting site registered 3 days ago. Linked to 4 distinct user reports.',
    'upi': '💳 Entity Indicator — Fraud UPI ID (fakebank@ybl): Active payment handle used for unauthorized collect requests. Flagged by User C in Bengaluru.',
    'qr': '🔳 Entity Indicator — Fraud QR Code (QR-2048): Reverse debit exploit claiming to deposit refund money but configured to withdraw funds.',
    'org': '🏢 Entity Indicator — Spoofed Organization (FakeBank Corp): Executive impersonation identity used in both WhatsApp and Email communications.',
    'email': '✉️ Entity Indicator — Threat Email (support@fakebank-alert.com): Phishing bait lure domain used for reward scams and fake customer care.',
    'messages': '💬 Entity Indicator — 7 Multi-Channel Messages: Unified forensic evidence across SMS, WhatsApp, and email corroborating the same threat pattern.',
    'campaign': '⚡ Master Threat Node — Campaign #SCM-2048: The single coordinated cybercrime syndicate orchestrating all 7 channels across 4 major Indian cities!'
  };

  function setupScene8() {
    const nodeGroups = document.querySelectorAll('#scene-8 .graph-node-group, #scene-8 .graph-node-center');
    const infoText = document.getElementById('s8NodeInfoText');

    nodeGroups.forEach((node, idx) => {
      // Auto pulse sequence
      sceneTimers.push(setTimeout(() => {
        node.style.transform += ' scale(1.12)';
        playSynthBlip(440 + idx * 45, 0.04, 'sine', 0.04);
        setTimeout(() => {
          node.style.transform = node.style.transform.replace(' scale(1.12)', '');
        }, 350 / state.speed);
      }, (idx * 550 + 500) / state.speed));

      // Interactive hover & click inspection
      const nodeKey = node.getAttribute('data-node');
      if (nodeKey && nodeEvidenceDescriptions[nodeKey]) {
        node.onclick = () => {
          if (infoText) infoText.innerHTML = `<strong>${nodeEvidenceDescriptions[nodeKey]}</strong>`;
          playSynthBlip(880, 0.05, 'triangle', 0.06);
        };
        node.onmouseenter = () => {
          if (infoText) infoText.textContent = nodeEvidenceDescriptions[nodeKey];
          playSynthBlip(660, 0.03, 'sine', 0.03);
        };
      }
    });

    sceneTimers.push(setTimeout(() => {
      playAlertChime();
    }, 7500 / state.speed));
  }

  // --- SCENE 10 ROUTINE (Risk Dial Count-Up to 92) ---
  function setupScene10() {
    const scoreDisplay = document.getElementById('s10RiskScoreDisplay');
    if (!scoreDisplay) return;

    scoreDisplay.textContent = '0';
    let currentScore = 0;
    const targetScore = 92;

    const countInterval = setInterval(() => {
      currentScore += 3;
      if (currentScore >= targetScore) {
        currentScore = targetScore;
        clearInterval(countInterval);
        playWarningAlarm();
      }
      scoreDisplay.textContent = currentScore;
      if (currentScore % 12 === 0) playSynthBlip(600 + currentScore * 4, 0.02, 'triangle', 0.03);
    }, 35 / state.speed);

    sceneTimers.push(countInterval);
  }

  // --- SCENE 12 ROUTINE (Interception Shields) ---
  function setupScene12() {
    const cards = document.querySelectorAll('.s12-intercept-box .intercept-card');
    cards.forEach((c, idx) => {
      sceneTimers.push(setTimeout(() => {
        c.style.transform = 'scale(1.03)';
        c.style.boxShadow = '0 0 16px var(--danger-glow)';
        playWarningAlarm();
        setTimeout(() => {
          c.style.transform = 'scale(1)';
        }, 500 / state.speed);
      }, (idx * 1600 + 1000) / state.speed));
    });
  }

  // --- SCENE 13 ROUTINE (Submit Report) ---
  function setupScene13() {
    const btn = document.getElementById('s13SubmitBtn');
    if (btn) {
      sceneTimers.push(setTimeout(() => {
        btn.style.transform = 'scale(0.96)';
        playSynthBlip(880, 0.1);
        setTimeout(() => {
          btn.style.transform = 'scale(1)';
          playSuccessChord();
        }, 300 / state.speed);
      }, 4000 / state.speed));
    }
  }

  // --- SCENE 14 ROUTINE (SOC Threat Map & Metro Telemetry) ---
  function setupScene14() {
    const cityNodes = document.querySelectorAll('#scene-14 .map-city-node');
    cityNodes.forEach((city, idx) => {
      sceneTimers.push(setTimeout(() => {
        const origTransform = city.getAttribute('transform') || '';
        city.style.transform = `${origTransform} scale(1.25)`;
        playSynthBlip(560 + idx * 50, 0.04, 'triangle', 0.04);
        setTimeout(() => {
          city.style.transform = origTransform;
        }, 350 / state.speed);
      }, (idx * 750 + 500) / state.speed));
    });

    sceneTimers.push(setTimeout(() => {
      playWarningAlarm();
    }, 5500 / state.speed));
  }

  // --- SCENE 15 ROUTINE (Historical Match) ---
  function setupScene15() {
    sceneTimers.push(setTimeout(() => {
      playAlertChime();
    }, 3500 / state.speed));
  }

  // --- SCENE 17 ROUTINE (Finale) ---
  function setupScene17() {
    sceneTimers.push(setTimeout(() => {
      playSuccessChord();
    }, 1500 / state.speed));
  }

  // --- MAIN ANIMATION LOOP ---
  function tick(timestamp) {
    if (!state.lastFrameTime) state.lastFrameTime = timestamp;
    const delta = (timestamp - state.lastFrameTime) * state.speed;
    state.lastFrameTime = timestamp;

    if (state.isPlaying) {
      state.elapsedTime += delta;
      state.sceneElapsed += delta;

      const curScene = SCENES[state.currentSceneIndex];

      // Move to next scene if current duration elapsed
      if (state.sceneElapsed >= curScene.duration) {
        if (state.currentSceneIndex < SCENES.length - 1) {
          activateScene(state.currentSceneIndex + 1);
        } else {
          // Reached end of presentation -> loop back to Scene 1
          activateScene(0);
        }
      } else {
        updateHUD();
      }
    }

    animationFrameId = requestAnimationFrame(tick);
  }

  // --- EVENT LISTENERS INITIALIZATION ---
  function initListeners() {
    // Play / Pause Button
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');

    function updatePlayPauseUI() {
      if (state.isPlaying) {
        if (playIcon) playIcon.classList.add('hidden');
        if (pauseIcon) pauseIcon.classList.remove('hidden');
      } else {
        if (playIcon) playIcon.classList.remove('hidden');
        if (pauseIcon) pauseIcon.classList.add('hidden');
      }
    }

    if (playPauseBtn) {
      playPauseBtn.addEventListener('click', () => {
        initAudio();
        state.isPlaying = !state.isPlaying;
        updatePlayPauseUI();
        playSynthBlip(state.isPlaying ? 800 : 500, 0.08);
      });
    }

    // Step Previous / Next
    const prevBtn = document.getElementById('prevSceneBtn');
    const nextBtn = document.getElementById('nextSceneBtn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        initAudio();
        if (state.currentSceneIndex > 0) {
          activateScene(state.currentSceneIndex - 1);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        initAudio();
        if (state.currentSceneIndex < SCENES.length - 1) {
          activateScene(state.currentSceneIndex + 1);
        }
      });
    }

    // Scrubber Track Click / Drag
    const scrubberTrack = document.getElementById('scrubberTrack');
    if (scrubberTrack) {
      scrubberTrack.addEventListener('click', (e) => {
        initAudio();
        const rect = scrubberTrack.getBoundingClientRect();
        const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const targetMs = clickRatio * totalDuration;

        // Find corresponding scene
        let cumulative = 0;
        for (let i = 0; i < SCENES.length; i++) {
          if (targetMs >= cumulative && targetMs < cumulative + SCENES[i].duration) {
            activateScene(i);
            state.sceneElapsed = targetMs - cumulative;
            state.elapsedTime = targetMs;
            break;
          }
          cumulative += SCENES[i].duration;
        }
      });
    }

    // Scene Pills Navigation
    const pills = document.querySelectorAll('#scenePillsBar .scene-pill');
    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        initAudio();
        const sceneNum = parseInt(pill.dataset.scene || '1', 10);
        activateScene(sceneNum - 1);
      });
    });

    // Audio SFX Toggle Button
    const audioBtn = document.getElementById('audioToggleBtn');
    const audioOnIcon = document.getElementById('audioOnIcon');
    const audioOffIcon = document.getElementById('audioOffIcon');
    const audioLabel = document.getElementById('audioLabel');

    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        initAudio();
        state.audioEnabled = !state.audioEnabled;
        if (state.audioEnabled) {
          audioBtn.classList.add('active');
          if (audioOnIcon) audioOnIcon.classList.remove('hidden');
          if (audioOffIcon) audioOffIcon.classList.add('hidden');
          if (audioLabel) audioLabel.textContent = 'Sound: ON';
          playAlertChime();
        } else {
          audioBtn.classList.remove('active');
          if (audioOnIcon) audioOnIcon.classList.add('hidden');
          if (audioOffIcon) audioOffIcon.classList.remove('hidden');
          if (audioLabel) audioLabel.textContent = 'Sound: OFF';
        }
      });
    }

    // Speed Multiplier Selectors
    const speedBtns = document.querySelectorAll('.speed-selector .speed-btn');
    speedBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        initAudio();
        speedBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.speed = parseFloat(btn.dataset.speed || '1');
        playSynthBlip(700, 0.05);
      });
    });

    // Fullscreen Toggle
    const fullBtn = document.getElementById('fullscreenBtn');
    if (fullBtn) {
      fullBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    // Replay Button (Scene 17)
    const replayBtn = document.getElementById('s17ReplayBtn');
    if (replayBtn) {
      replayBtn.addEventListener('click', () => {
        initAudio();
        activateScene(0);
        state.isPlaying = true;
        updatePlayPauseUI();
      });
    }

    // Keyboard Hotkeys
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        initAudio();
        state.isPlaying = !state.isPlaying;
        updatePlayPauseUI();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        initAudio();
        if (state.currentSceneIndex > 0) activateScene(state.currentSceneIndex - 1);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        initAudio();
        if (state.currentSceneIndex < SCENES.length - 1) activateScene(state.currentSceneIndex + 1);
      } else if (e.key === 'm' || e.key === 'M') {
        if (audioBtn) audioBtn.click();
      } else if (e.key === 'f' || e.key === 'F') {
        if (fullBtn) fullBtn.click();
      } else if (e.key >= '1' && e.key <= '9') {
        const idx = parseInt(e.key, 10) - 1;
        if (idx < SCENES.length) activateScene(idx);
      } else if (e.key === '0') {
        if (SCENES.length >= 10) activateScene(9);
      }
    });

    updatePlayPauseUI();
  }

  // --- BOOTSTRAP APPLICATION ---
  window.addEventListener('DOMContentLoaded', () => {
    initListeners();
    activateScene(0);
    animationFrameId = requestAnimationFrame(tick);
  });

})();
