// api/command.js - Serverless function for commands
// ALL YOUR LORE IS HIDDEN HERE - users CANNOT see this file!

const ORDER = [
  "LOG#1",
  "TRACE",
  "TRACE GROUP C",
  "CONNECT",
  "OHGOD",
  "FALLEN",
  "THEYREKEEPINGONEALIVE",
  "ACCESS://FILE:FENIX",
  "G13-02"
];

const CONTENT = {
  "LOG#1": `[CLASSIFIED – LEVEL 5]
UNIT: S.S.O. — TASK FORCE
MISSION DATE: 01 March 2024
OPERATION: [REDACTED]
DEPLOYMENT: Rotary insertion to Sector 07
FORCE COMPOSITION: 9 personnel (including commanding officer)
PRIMARY OBJECTIVES:
1. Locate and secure designated anomalous objects.
2. Recover all available research/data relevant to the site.
3. Evacuate all mission-critical personnel and materiel.
4. Establish visual and electronic confirmation of interior conditions.
RULES OF ENGAGEMENT:
- Mission precedence: secure objects and data.
- Use of force authorized under direct threat to team or mission.
- Contact with objects: observe only unless otherwise ordered.
LOGISTICS:
- Insertion time: 0500 hours (local)
- Expected mission window: up to 36 hours (subject to command)
- Extraction: conditional; follow standing extraction protocol.
NOTES:
- Sector 07 classified as restricted; prior reconnaissance indicates anomalous activity.
- All footage and sensor data to be transmitted to Command for analysis.
AUTHORIZED:
Signature: ______________________
Name/Rank: [REDACTED]
Date: ______________________`,
  "TRACE": `ATTEMPTING UNIVERSAL CONTACT... FAILURE.
NO LOCATION FOR UNIVERSAL CONTACT.
ATTEMPT TO TRACE USING THE TERMINAL.`,
  "TRACE GROUP C": `ATTEMPTING TO TRACE GROUP C.
SUCCESS.
GROUP C LOCATION: TOWER.
GROUP C STATUS: #### HELPUS### HELP## ERROR.
GROUP C STATUS: TWO MEMBERS TERMINATED.
ONE MEMBER HEAVILY WOUNDED.
PLEASE RUN THE "CONNECT" COMMAND TO ESTABLISH A HANDSHAKE WITH GROUP C.`,
  "CONNECT": `CONNECTION SUCCESSFUL.
CONNECTING YOU TO GROUP C.
YOU ARE NOW SPEAKING TO: MIKE #######.
AUDIO AVAILABLE: /assets/OhGod.mp3`,
  "OHGOD": `SUBJECT: ####
TESTED VIAL: #####
RESULTS: SUBJECT HAS STARTED VOMITING PURPLE LIQUID AFTER TAKING THE VIAL.
AFTERMATH: A HOODED HUMANOID FIGURE APPEARED NEAR TS-## WITH A LONG SWORD, IMMUNE TO BULLETS THAT MANAGED TO SLAUGHTER THIRTY THREE SECURITY GUARDS, BEFORE BEING STABBED TO DEATH AND VANISHING INTO A BLACK MIST.
ASSUMPTIONS: THE HOODED HUMANOID FIGURE IS BULLETPROOF BUT COMPLETLY VULNERABLE TO SHARP, BLUNT OBJECTS.
NEW DESIGNATION: F##L#N.`,
  "FALLEN": `ENCRYPTED LINK: https://www.youtube.com/watch?v=wlr5GpfSqAk`,
  "THEYREKEEPINGONEALIVE": `DIVISION GAMMA FACILITY "TS-84" RAID LOGS.
ENTERED AT: 0500 hours (local)
LEFT AT: 2300 HOURS (local)
FOUND INFORMATION:
- One hundred thirty seven (137) dead bodies
- Two (2) keycards with blood stains.
- Two (2) Blocked off checkpoints inside.
- One (1) Non identifiable object.
Keycards had the names of: GU### ######### and FENI# ###########`,
  "ACCESS://FILE:FENIX": `S.S.O. COLONEL FENIX.
DIVISION GAMMA PRIORITY CARD 0. INSURGENCY PRIORITY CARD 0. SSO PRIORITY CARD 4.
"Former ##### Secondary leader, joined the S.S.O. after the incidents of G13-02, experience in weaponry and tactical advancements."`,
  "G13-02": `G13-02 was the designated number for the unknown substance found near TS-##. It was tested upon a human and after Three (3) hours of waiting, the subject mutated into a horrifying mass of flesh. It managed to breach its area and reach the ####### zone before getting shot down by ######## members. It survived ONE THOUSAND (1000) rounds of AP 7.62x51.
<< ERROR TERMINAL HAS BEEN HIJACKED PLEASE >>
<< I KNOW WHO YOU ARE. >>
<< YOU WANT TOO MUCH. >>
<< THEY KILLED A TON OF INNOCENT PEOPLE. >>
<< THEY TESTED ON INNOCENT PEOPLE. >>
<< THEY ALL DIED IN HORRIFYING WAYS. >>
<< ITS ALL HIS FAULT. >>`
};

const GLOBAL_COMMANDS = {
  "HELP": `AVAILABLE COMMANDS:
- HELP: Show this message
- CLEAR: Clear terminal
- REBOOT: Reboot terminal
- INFO: System info
- DATE: Current date/time`,
  "CLEAR": "__CLEAR__",
  "REBOOT": "__REBOOT__",
  "INFO": `S.S.O. TERMINAL v1.0
DIVISION GAMMA SECURE ACCESS
TERMINAL STATUS: OPERATIONAL`,
  "DATE": () => new Date().toString()
};

// Simple in-memory session storage (for demo purposes)
// In production, use a proper database or Redis
const sessions = new Map();

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  // Get session token from request
  const sessionToken = req.headers.authorization?.replace('Bearer ', '');
  
  if (!sessionToken) {
    return res.status(401).json({ ok: false, message: "UNAUTHORIZED" });
  }

  // Get or create session
  let session = sessions.get(sessionToken);
  if (!session) {
    session = { step: 0 };
    sessions.set(sessionToken, session);
  }

  const cmdRaw = String(req.body.cmd || "").trim();
  const cmd = cmdRaw.toUpperCase();

  // Global commands
  if (GLOBAL_COMMANDS[cmd]) {
    let data = GLOBAL_COMMANDS[cmd];
    if (typeof data === "function") data = data();
    return res.status(200).json({ ok: true, cmd, data });
  }

  // Story commands
  const expected = ORDER[session.step];
  if (cmd === expected) {
    const data = CONTENT[cmd] || "NO DATA";
    session.step++;
    return res.status(200).json({ ok: true, cmd, data });
  }

  // Allow restarting story at LOG#1
  if (cmd === "LOG#1") {
    session.step = 1; // next expected will be TRACE
    return res.status(200).json({ ok: true, cmd, data: CONTENT["LOG#1"] });
  }

  return res.status(200).json({ ok: false, message: "PROTOCOL ERROR" });
}