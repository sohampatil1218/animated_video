/**
 * SAT-SA Interactive Presentation Engine
 * Filename: script1.js
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. SCENE LIST & METADATA
     ========================================================================== */
  const SCENES = [
    { id: 'scene-1', title: 'Scene 01: Critical Sector Entities & SOCs', duration: 8000 },
    { id: 'scene-2', title: 'Scene 02: Periodic Supervisory Assessment', duration: 8000 },
    { id: 'scene-3', title: 'Scene 03: The Hidden Operational Problem', duration: 8000 },
    { id: 'scene-4', title: 'Scene 04: Introducing SAT-SA Platform', duration: 8000 },
    { id: 'scene-5', title: 'Scene 05: Data Ingestion & Feature Engineering', duration: 8000 },
    { id: 'scene-6', title: 'Scene 06: Supervisory Analytics Core', duration: 8000 },
    { id: 'scene-7', title: 'Scene 07: Execution Gap Detection', duration: 8000 },
    { id: 'scene-8', title: 'Scene 08: Negative Space Detection', duration: 9000 },
    { id: 'scene-9', title: 'Scene 09: Anomaly Detection', duration: 9000 },
    { id: 'scene-10', title: 'Scene 10: Peer Benchmarking', duration: 9000 },
    { id: 'scene-11', title: 'Scene 11: Signal Correlation & Risk Indicator', duration: 8000 },
    { id: 'scene-12', title: 'Scene 12: Intelligent Sample Prioritization', duration: 8000 },
    { id: 'scene-13', title: 'Scene 13: Explainable Findings & Audit Trail', duration: 8000 },
    { id: 'scene-14', title: 'Scene 14: Human Examiner Control', duration: 8000 },
    { id: 'scene-15', title: 'Scene 15: Supervisory Dashboard', duration: 8000 },
    { id: 'scene-16', title: 'Scene 16: Historical Trends', duration: 8000 },
    { id: 'scene-17', title: 'Scene 17: Complete Workflow Pipeline', duration: 8000 },
    { id: 'scene-18', title: 'Scene 18: Offline Air-Gapped Environment', duration: 8000 },
    { id: 'scene-19', title: 'Scene 19: Core Vision & Tech Stack', duration: 10000 }
  ];

  let currentSceneIndex = 0;
  let isPlaying = true;
  let sceneTimer = null;

  /* DOM Elements */
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnPlayPause = document.getElementById('btn-play-pause');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  const playIcon = document.getElementById('play-icon');
  const playText = document.getElementById('play-text');
  const sceneSelect = document.getElementById('scene-select');
  const progressBar = document.getElementById('progress-bar');
  const footerSceneIndicator = document.getElementById('footer-scene-indicator');
  const audioToggleBtn = document.getElementById('audio-toggle-btn');
  const audioIcon = document.getElementById('audio-icon');
  const audioText = document.getElementById('audio-text');
  const btnReplayDemo = document.getElementById('btn-replay-demo');

  /* ==========================================================================
     PROCEDURAL WEB AUDIO SYNTHESIZER (100% Zero External Dependencies)
     ========================================================================== */
  let audioCtx = null;
  let audioEnabled = false;

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

  function toggleAudio() {
    initAudio();
    audioEnabled = !audioEnabled;
    if (audioIcon && audioText) {
      audioIcon.textContent = audioEnabled ? '🔊' : '🔇';
      audioText.textContent = audioEnabled ? 'Audio On' : 'Audio Off';
    }
    if (audioEnabled) {
      playSuccessChord();
    }
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', toggleAudio);
  }

  function playSynthBlip(freq = 600, duration = 0.06, type = 'sine', volume = 0.08) {
    if (!audioEnabled || !audioCtx) return;
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
      console.warn('Audio error:', e);
    }
  }

  function playAlertChime() {
    if (!audioEnabled || !audioCtx) return;
    [520, 680, 840].forEach((freq, idx) => {
      setTimeout(() => {
        playSynthBlip(freq, 0.12, 'triangle', 0.09);
      }, idx * 70);
    });
  }

  function playSuccessChord() {
    if (!audioEnabled || !audioCtx) return;
    [440, 554, 659, 880].forEach((freq, idx) => {
      setTimeout(() => {
        playSynthBlip(freq, 0.18, 'sine', 0.08);
      }, idx * 60);
    });
  }

  function playAnomalyWarning() {
    if (!audioEnabled || !audioCtx) return;
    [780, 620, 780, 620].forEach((freq, idx) => {
      setTimeout(() => {
        playSynthBlip(freq, 0.09, 'sawtooth', 0.07);
      }, idx * 90);
    });
  }

  /* ==========================================================================
     2. INITIALIZE SCENE DROPDOWN & CONTROLS
     ========================================================================== */
  SCENES.forEach((scene, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = scene.title;
    sceneSelect.appendChild(opt);
  });

  function updateSceneUI(index) {
    document.querySelectorAll('.scene').forEach((sc, i) => {
      sc.classList.toggle('active', i === index);
    });

    sceneSelect.value = index;
    footerSceneIndicator.textContent = `Scene ${String(index + 1).padStart(2, '0')} / ${SCENES.length}`;
    
    // Reset progress bar
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    setTimeout(() => {
      if (isPlaying) {
        progressBar.style.transition = `width ${SCENES[index].duration}ms linear`;
        progressBar.style.width = '100%';
      }
    }, 50);

    // Audio SFX on scene transition
    if (index === 8 || index === 6) {
      playAnomalyWarning();
    } else if (index === 18) {
      playSuccessChord();
    } else {
      playSynthBlip(520 + (index % 5) * 50, 0.06, 'sine', 0.06);
    }

    // Trigger scene-specific canvas animations
    if (index === 8) renderAnomalyChart();
    if (index === 14) renderDashboardSectorChart();
  }

  function goToScene(index) {
    currentSceneIndex = (index + SCENES.length) % SCENES.length;
    updateSceneUI(currentSceneIndex);
    if (isPlaying) startSceneTimer();
  }

  function startSceneTimer() {
    clearTimeout(sceneTimer);
    const duration = SCENES[currentSceneIndex].duration;
    
    sceneTimer = setTimeout(() => {
      if (isPlaying) {
        goToScene(currentSceneIndex + 1);
      }
    }, duration);
  }

  function togglePlayPause() {
    isPlaying = !isPlaying;
    if (isPlaying) {
      playIcon.textContent = '⏸';
      playText.textContent = 'Pause';
      startSceneTimer();
      progressBar.style.transition = `width ${SCENES[currentSceneIndex].duration}ms linear`;
      progressBar.style.width = '100%';
      playSynthBlip(720, 0.08, 'sine', 0.07);
    } else {
      playIcon.textContent = '▶';
      playText.textContent = 'Play';
      clearTimeout(sceneTimer);
      const computedWidth = getComputedStyle(progressBar).width;
      progressBar.style.transition = 'none';
      progressBar.style.width = computedWidth;
      playSynthBlip(480, 0.08, 'triangle', 0.07);
    }
  }

  /* Event Listeners for Navigation */
  btnPrev.addEventListener('click', () => goToScene(currentSceneIndex - 1));
  btnNext.addEventListener('click', () => goToScene(currentSceneIndex + 1));
  btnPlayPause.addEventListener('click', togglePlayPause);
  sceneSelect.addEventListener('change', (e) => goToScene(parseInt(e.target.value, 10)));

  if (btnReplayDemo) {
    btnReplayDemo.addEventListener('click', () => {
      goToScene(0);
      if (!isPlaying) togglePlayPause();
      playSuccessChord();
    });
  }

  btnFullscreen.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error(err));
    } else {
      document.exitFullscreen();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goToScene(currentSceneIndex + 1);
    if (e.key === 'ArrowLeft') goToScene(currentSceneIndex - 1);
    if (e.key === ' ') {
      e.preventDefault();
      togglePlayPause();
    }
    if (e.key.toLowerCase() === 'f') btnFullscreen.click();
    if (e.key.toLowerCase() === 'm') toggleAudio();
    if (e.key.toLowerCase() === 'r') {
      goToScene(0);
      if (!isPlaying) togglePlayPause();
    }
    if (e.key >= '1' && e.key <= '9') {
      goToScene(parseInt(e.key, 10) - 1);
    }
    if (e.key === '0') {
      goToScene(9);
    }
  });

  /* Initial start */
  updateSceneUI(0);
  startSceneTimer();

  /* ==========================================================================
     3. BACKGROUND CANVAS PARTICLE SYSTEM
     ========================================================================== */
  const canvas = document.getElementById('background-canvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.3
    });
  }

  function drawBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.15 * (1 - dist / 140)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(drawBackground);
  }
  drawBackground();

  /* ==========================================================================
     4. SCENE 1 LIVE SOC LOG STREAMER
     ========================================================================== */
  const logTemplates = [
    { type: '', text: 'INFO [LOG-981] Auth Check Succeeded' },
    { type: 'alert', text: 'ALERT [ALT-402] Rapid Failure Spike' },
    { type: '', text: 'INFO [CASE-120] Case Evidence Recorded' },
    { type: 'incident', text: 'INCIDENT [ESC-90] Escalated to L2' },
    { type: '', text: 'INFO [FLOW-33] NetFlow Packet Verified' }
  ];

  function streamLogs(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    setInterval(() => {
      const randLog = logTemplates[Math.floor(Math.random() * logTemplates.length)];
      const div = document.createElement('div');
      div.className = `event-log-item ${randLog.type}`;
      div.innerHTML = `<span>${randLog.text}</span><span>${new Date().toLocaleTimeString()}</span>`;

      container.appendChild(div);
      if (container.children.length > 5) {
        container.removeChild(container.children[0]);
      }
    }, 1800 + Math.random() * 1000);
  }

  streamLogs('stream-cse1');
  streamLogs('stream-cse2');
  streamLogs('stream-cse3');
  streamLogs('stream-cse4');

  /* ==========================================================================
     5. SCENE 9 ANOMALY CHART CANVAS RENDERER (ENHANCED)
     ========================================================================== */
  function renderAnomalyChart() {
    const c = document.getElementById('anomaly-chart-canvas');
    if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.parentElement.clientWidth - 20;
    c.height = 240;

    ctx.clearRect(0, 0, c.width, c.height);

    // Shaded Normal Operating Range (75% to 85%)
    const minY = 60; // 85%
    const maxY = 110; // 75%
    ctx.fillStyle = 'rgba(0, 240, 255, 0.06)';
    ctx.fillRect(50, minY, c.width - 70, maxY - minY);

    ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(50, minY, c.width - 70, maxY - minY);
    ctx.setLineDash([]);

    // Grid lines & Y Axis labels
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.font = '10px "JetBrains Mono"';
    ctx.fillStyle = '#8a99ad';

    [100, 80, 60, 40, 20].forEach((val, idx) => {
      const y = 30 + idx * 40;
      ctx.beginPath();
      ctx.moveTo(50, y);
      ctx.lineTo(c.width - 20, y);
      ctx.stroke();
      ctx.fillText(`${val}%`, 15, y + 4);
    });

    // Baseline Curve & Points
    const dataPoints = [
      { p: 'P1', val: 78 },
      { p: 'P2', val: 81 },
      { p: 'P3', val: 80 },
      { p: 'P4', val: 83 },
      { p: 'P5', val: 79 },
      { p: 'P6', val: 42, anomaly: true },
      { p: 'P7', val: 96, anomaly: true },
      { p: 'P8', val: 84 }
    ];

    const stepX = (c.width - 100) / (dataPoints.length - 1);
    ctx.beginPath();
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 3;

    const coords = [];
    dataPoints.forEach((dp, i) => {
      const x = 60 + i * stepX;
      const y = 190 - (dp.val / 100) * 160;
      coords.push({ x, y, dp });

      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);

      // X Labels
      ctx.fillStyle = '#8a99ad';
      ctx.fillText(dp.p, x - 6, 215);
    });
    ctx.stroke();

    // Draw Points & Highlight Anomalies
    coords.forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, pt.dp.anomaly ? 6 : 4, 0, Math.PI * 2);
      ctx.fillStyle = pt.dp.anomaly ? '#ff3b5c' : '#00f0ff';
      ctx.fill();

      if (pt.dp.anomaly && pt.dp.p === 'P6') {
        // Pulsing Ring for P6 anomaly
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 14, 0, Math.PI * 2);
        ctx.strokeStyle = '#ff3b5c';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = '#ff3b5c';
        ctx.font = 'bold 11px "JetBrains Mono"';
        ctx.fillText('⚠ ANOMALY: 42% (-40 pts)', pt.x - 60, pt.y + 25);
      }
    });
  }

  /* ==========================================================================
     6. SCENE 15 SECTOR DASHBOARD CANVAS RENDERER
     ========================================================================== */
  function renderDashboardSectorChart() {
    const c = document.getElementById('dashboard-sector-canvas');
    if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.parentElement.clientWidth - 40;
    c.height = 170;

    ctx.clearRect(0, 0, c.width, c.height);

    const data = [
      { label: 'Energy (CSE-A)', val: 24, color: '#00e676' },
      { label: 'Finance (CSE-B)', val: 18, color: '#00e676' },
      { label: 'Telecom (CSE-C)', val: 42, color: '#ffaa00' },
      { label: 'Transport (CSE-D)', val: 87, color: '#ff3b5c' }
    ];

    const barWidth = 70;
    const gap = (c.width - data.length * barWidth) / (data.length + 1);

    data.forEach((item, i) => {
      const x = gap + i * (barWidth + gap);
      const h = (item.val / 100) * 110;
      const y = 130 - h;

      ctx.fillStyle = item.color;
      ctx.fillRect(x, y, barWidth, h);

      ctx.fillStyle = '#fff';
      ctx.font = '11px "Inter"';
      ctx.textAlign = 'center';
      ctx.fillText(item.label, x + barWidth / 2, 150);
      ctx.fillText(`Risk ${item.val}`, x + barWidth / 2, y - 6);
    });
  }

});
