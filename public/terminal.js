// terminal.js - Frontend code (users can see this, but secrets are on server)

const display = document.getElementById('display');
const input = document.getElementById('cmd-input');
const bootText = document.getElementById('boot-text');
const bootBar = document.querySelector('.bar-fill');
const frame = document.getElementById('frame');
const boot = document.getElementById('boot');
const bgAudio = document.getElementById('bg');

bgAudio.volume = 0.12;

// Session token (stored in memory, not localStorage to avoid persistence)
let sessionToken = null;

// WebAudio helpers (8-bit style)
function makeContext(){
  try { return new (window.AudioContext || window.webkitAudioContext)(); } catch(e) { return null; }
}
const audioCtx = makeContext();

function tone(freq=800, time=0.06, type='square', vol=0.03){
  if(!audioCtx) return;
  const o = audioCtx.createOscillator();
  const g = audioCtx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.value = vol;
  o.connect(g);
  g.connect(audioCtx.destination);
  o.start();
  o.stop(audioCtx.currentTime + time);
}

// static burst: short noise buffer
function staticBurst(duration = 0.12, vol = 0.06){
  if(!audioCtx) return;
  const sr = audioCtx.sampleRate;
  const buffer = audioCtx.createBuffer(1, sr * duration, sr);
  const data = buffer.getChannelData(0);
  for(let i=0;i<data.length;i++) data[i] = (Math.random()*2 - 1) * (1 - i/data.length);
  const src = audioCtx.createBufferSource();
  src.buffer = buffer;
  const g = audioCtx.createGain();
  g.gain.value = vol;
  src.connect(g);
  g.connect(audioCtx.destination);
  src.start();
}

// visual helpers
function append(text, type='normal'){
  const el = document.createElement('div');
  if(type === 'error') el.className = 'msg-error';
  else if(type === 'system') el.className = 'msg-system';
  else el.className = 'msg-normal';
  el.textContent = text;
  applyRandomGlitch(el);
  display.appendChild(el);
  display.scrollTop = display.scrollHeight;
}

function applyRandomGlitch(el){
  if(Math.random() < 0.12){
    el.classList.add('glitch');
    setTimeout(()=>el.classList.remove('glitch'), 1200 + Math.random()*800);
  }
}

// boot sequence
const bootLines = [
  "S.S.O. TERMINAL INITIALIZING...",
  "BIOS CHECK: OK",
  "LOADING SECURE MODULES...",
  "VERIFYING INTEGRITY...",
  "AUTHENTICATION SUBSYSTEM ONLINE...",
  "DIVISION GAMMA PROTOCOLS LOADED",
  "TERMINAL READY"
];

let bp = 0;
const bi = setInterval(()=>{
  if(bp < bootLines.length){
    bootText.innerText += bootLines[bp] + "\n";
    tone(300 + bp*60, 0.05);
    bootBar.style.width = ((bp+1) / bootLines.length * 100) + "%";
    bp++;
  } else {
    clearInterval(bi);
    setTimeout(()=>{
      boot.style.display='none';
      frame.hidden = false;
      try { bgAudio.play().catch(()=>{}); } catch(e){}
      append("ENTER PASSWORD:", 'system');
      input.focus();
      startIdleTimer();
    }, 420);
  }
}, 520);

// POST helper for Vercel API
async function postJson(url, body, useAuth = false){
  const headers = {"Content-Type":"application/json"};
  if (useAuth && sessionToken) {
    headers["Authorization"] = `Bearer ${sessionToken}`;
  }
  const r = await fetch(url, { 
    method: 'POST', 
    headers,
    body: JSON.stringify(body) 
  });
  try { return await r.json(); } catch(e){ return {ok:false}; }
}

let authed = false;
let lastActivity = Date.now();
let idleTimer = null;
let hauntInterval = null;

// idle/haunt system
function startIdleTimer(){
  clearTimeout(idleTimer);
  idleTimer = setTimeout(()=>{ triggerHaunt('idle'); }, 60000); // 60s idle
  startHauntLoop();
}
function resetIdleTimer(){ lastActivity = Date.now(); startIdleTimer(); }

function startHauntLoop(){
  if(hauntInterval) return;
  hauntInterval = setInterval(()=>{
    if(!authed) return;
    if(Math.random() < 0.06) triggerHaunt('random');
  }, 9000);
}
function stopHauntLoop(){
  if(hauntInterval){ clearInterval(hauntInterval); hauntInterval = null; }
}

function triggerHaunt(kind){
  // small random haunt: corrupt a line and play static
  const r = Math.random();
  if(r < 0.4){
    append("<<< SIGNAL NOISE DETECTED >>>", 'system');
    staticBurst(0.12, 0.08);
    frame.classList.add('frame-corrupt');
    setTimeout(()=>frame.classList.remove('frame-corrupt'), 900 + Math.random()*900);
  } else if(r < 0.7){
    append("WHO IS USING MY TERMINAL?", 'error'); tone(120, 0.2, 'sawtooth', 0.09);
    staticBurst(0.18, 0.12);
    // flash a small corrupted image briefly
    const img = document.createElement('img');
    img.src = '/assets/end.png';
    img.style.maxWidth = '28%';
    img.style.opacity = '0.12';
    display.appendChild(img);
    setTimeout(()=>{ img.remove(); }, 1200);
  } else {
    // phantom command injection
    append("> RUNNING UNKNOWN PROCESS: ███", 'system');
    tone(880, 0.04);
    setTimeout(()=>{ append("<< PROCESS HALTED >>", 'error'); }, 900);
  }
}

// corrupt helper (used for G13-02 finale)
async function corruptionSequence(){
  stopHauntLoop();
  frame.classList.add('frame-corrupt');
  bgAudio.pause();
  for(let i=0;i<18;i++){
    staticBurst(0.15 + Math.random()*0.12, 0.12);
    append("<<< CORE MEMORY DUMPING ::: SECTOR STREAM CORRUPTION >>>", 'error');
    await new Promise(r => setTimeout(r, 120 + Math.random()*160));
  }
  // heavy beeps
  for(let i=0;i<6;i++){
    tone(200 + Math.random()*1600, 0.06, i%2? 'sine' : 'square', 0.06);
    await new Promise(r => setTimeout(r, 140));
  }
  // show end image large briefly
  const big = document.createElement('img');
  big.src = '/assets/end.png';
  big.style.maxWidth = '80%';
  big.style.display = 'block';
  big.style.margin = '12px auto';
  display.appendChild(big);
  await new Promise(r => setTimeout(r, 1800));
  frame.classList.add('frame-dead');
  // final static burst and reboot
  staticBurst(0.8, 0.18);
  append("<< SYSTEM REBOOTING >>", 'system');
  await new Promise(r => setTimeout(r, 1400));
  location.reload();
}

// command handling
input.addEventListener('keydown', async (e) => {
  if(e.key !== 'Enter') return;
  tone(1400, 0.03);
  resetIdleTimer();
  const raw = input.value.trim();
  if(!raw) return;
  append("S.S.O.# " + raw, 'system');
  input.value = '';

  if(!authed){
    const res = await postJson('/api/auth', { password: raw });
    if(res.ok){ 
      authed = true; 
      sessionToken = res.sessionToken; // Store session token
      append("AUTHORIZED", 'system'); 
      append(res.info||'', 'system'); 
      startHauntLoop(); 
      return; 
    }
    append("ACCESS DENIED", 'error'); 
    staticBurst(0.08, 0.06); 
    return;
  }

  const res = await postJson('/api/command', { cmd: raw }, true);
  if(res.ok){
    // handle special tokens from server
    if(res.data === "__CLEAR__"){ display.innerHTML = ''; return; }
    if(res.data === "__REBOOT__"){ append("<< REBOOTING >>", 'system'); await new Promise(r=>setTimeout(r,600)); location.reload(); return; }

    // normal content
    if(res.cmd === "CONNECT"){
      append(res.data, 'system');
      const btn = document.createElement('button');
      btn.textContent = 'PLAY REMOTE AUDIO';
      btn.onclick = () => { new Audio('/assets/OhGod.mp3').play().catch(()=>{}); };
      display.appendChild(btn);
    } else if(res.cmd === "FALLEN"){
      append("ENCRYPTED LINK:", 'system');
      const a = document.createElement('a');
      a.href = res.data.replace('ENCRYPTED LINK: ', '');
      a.textContent = res.data.replace('ENCRYPTED LINK: ', '');
      a.target = "_blank";
      display.appendChild(a);
    } else {
      append(res.data, 'normal');
    }

    // Post-G13-02 trigger: terminal insanity
    if(res.cmd === "G13-02"){
      // small pause then go full corruption
      setTimeout(()=>{ corruptionSequence(); }, 800);
    }
  } else {
    append("PROTOCOL ERROR", 'error');
    tone(180, 0.14, 'sawtooth', 0.06);
  }
});

// resume audio on first click (browsers)
document.addEventListener('click', function resume() {
  try { if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume(); } catch (e){}
  try { if (bgAudio.paused) bgAudio.play().catch(()=>{}); } catch(e){}
  document.removeEventListener('click', resume);
});