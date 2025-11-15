// api/command.js - ALL LORE HIDDEN HERE (ACT 1 & ACT 2)
// Users CANNOT see this file!

// ACT 1 ORDER
const ACT1_ORDER = [
  "LOG#1",
  "TRACE",
  "TRACE GROUP C",
  "CONNECT",
  "OHGOD",
  "FALLEN",
  "THEYREKEEPINGONEALIVE",
  "ACCESS://FILE:FENIX",
  "G13-02",
  "ONETHOUSAND" // New: triggers corruption AFTER reading G13-02
];

// ACT 2 ORDER (unlocked after Act 1 completion)
const ACT2_ORDER = [
  "ACCESS FILE://TS-85",
  "WAREHOUSE",
  "SSO ARE FIGHTING DG",
  "COUNTER-RAID TS-84",
  "TWODAYFIGHT",
  "SSO SPECIALISTS",
  "TYPE BLUE SUITS",
  "GUARD AUTHORIZATION",
  "TRANSFER",
  "2303",
  "ANTARCTICA",
  "CLASS-3 SCENARIO",
  "DIVISION ETA",
  "RAKID",
  "ENCRYPTED FILES"
];

const CONTENT = {
  // ===== ACT 1 =====
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
<< ITS ALL HIS FAULT. >>

TYPE "ONETHOUSAND" TO CONTINUE...`,

  "ONETHOUSAND": `__CORRUPTION_SEQUENCE__`, // Special trigger for frontend

  // ===== ACT 2 =====
  "ACCESS FILE://TS-85": `BODYCAM TRANSCRIPT UNIT-02.

"So, feniks. What do you know?"
"I don't know anything I swear!"
"Speak or you get ####### again."
"All I know is DIVISIONGAMMA is doing something, they found something they weren't supposed to."
"And?"
"They want to go somewhere, do something I don't know I was gassed after getting spotted!"
"Gassed by what? Spotted by who?"
"I'm not answering your damn question, it's either i stay loyal or i go too far."
"Give us the fucking information we want you rat!"
"Okay, okay! Fuck."
"They found an old testing site, they want to raid it for goods."
"Where is it?"
"I don't know, all I know is that it's called TS-85"
"It was meant to be a site for experimenting on humans, it belonged to the GUARD PMC, before it collapsed because the owner gave up on it."
"Good. Put him back in the chambers, we'll intercept them there."
"Wait, you bastards! You fucking promised something! Get me out of here!"

---

GUARD Testing Site 85.

A warehouse for storing chemical items for the usage of GUARD research personnel, located somewhere at Testing Site 84. It was mostly used for storage of different supplies used during fights and patrols, printed money, armor, weaponry.
Wherever they got all of this stuff from is unknown, what matters it's that it's there, ready for usage.

FILE UPDATED: As of now, the Testing Site is closed off and NOT to be entered at all costs, all gear has been moved to [ REDACTED ] for specific reasons, thank you for your understanding.

GUR JNERUBHFR VF ABG N JNERUBHFR. GURL'ER UVQVAT FBZRGUVAT. F.F.B. VF CERCNEVAT FBZRGUVAT OVT.`,

  "WAREHOUSE": `ACCESS FILE://WAREHOUSE

FILE UPDATED: Testing Site-84 Is disguised as a warehouse, deep underground is the true laboratory for the P.M.C. "GUARD", where the anomalies of today were created by accident. Due to the fact that GUARD had no leader, it lacked funding, promotion. Letting the anomalies free. The underground laboratory has a ton of goodies that have never been grabbed due to the risks down there. According to all files except this one, this laboratory does NOT exist. Nobody knows it exists, so nobody went down there. And even if they did, they probably won't go down there due to the risks.

<< ERROR, FILE HAS BEEN DELETED. >>
UPLOADING NEW FILE: r7GOVavX{@miCb!qY[y}mns%%pe<UWlQ:*Jmmnm+sS*a7r.ljYpFJ35k$$6te*9$:ml%<vavF!1lR*DLmmg2%mP92Raxg)6qY]4dqCx.Tk$&)rmn^2VqxOt5l}5*>awLv63pN&<pF@r5pEESbiV}l$qbP!XswYz]qC{p*avw{)mkD$EygQ1Dy+Q3Op^F#ih:GkMfeCLepIh*N3pN&<pF@r5pEESdiV{ahfFCgnfFBR6f!+pnf!>x`,

  "SSO ARE FIGHTING DG": `"We're not letting those fucks get away, not after all they did, you remember those guys sent to S-07? Yeah they fucking died! All of them got tortured by that fallen creature thing. Yes I read the files, yes I know what happened. We're coming for them, and i'm not letting them get away with this. Gear up and meet me at the point. Code COUNTER-RAID TS-84."`,

  "COUNTER-RAID TS-84": `CCTV MOTION DETECTED. PLAYING VIDE-
<< ERROR >>
<< PLAYING CCTV TRANSCRIPT >>

Six (6) Division gamma agents entered the underground laboratory, searching for evidence of past GUARD activities to uncover secrets that were never meant to be discovered.

** THREE HOURS PASS **

A huge group of SEVENTY-FIVE (75) S.S.O. Low-Ranking members followed division gamma inside the underground laboratory.
Low-ranking members found keycards belonging to Fenix and GUARD_COMMANDER, one of them shouted "Hey! I found something!"
Division GAMMA heard them, and a huge war broke out between Division GAMMA and LR S.S.O. members. The war lasted for two days
After the f
<< ERROR >>
<< FILE UPDATED >>
<< CCTV AUDIO HAS BEEN UPLOADED OF THE TWO DAY FIGHT. >>
<< VIEW IT RIGHT HERE: [AUDIO LINK PLACEHOLDER] >>`,

  "TWODAYFIGHT": `After the two (2) days passed, one singular division gamma member came out with blood all over him, he was escorted back to the main base via helicopter, everyone was put on lockdown to avoid seeing the identity of the division gamma member. The facility was locked down by S.S.O. specialists, anyone who approached the area and seen by the S.S.O. specialists was executed with the exception of Division Gamma.`,

  "SSO SPECIALISTS": `The S.S.O. Specialists were a sub-division formed of highly trained personnel, ready for anything. They were shortly disbanded after the incidents of the failed TS-84 Protection. They were equipped with type blue suits to combat any sort of issue standing in their way.`,

  "TYPE BLUE SUITS": `The type blue suits were created by GUARD to combat the anomalies inside of the Testing Sites. Since 2024, the suits have been transferred to S.S.O. by an unknown person, with full documentation and authorization from GUARD, they are now used by S.S.O. Medium Ranking members and higher, protecting them from anomalies to a certain extent. Although the suits were never used against modern day anomalies, it is still assumed that they work.`,

  "GUARD AUTHORIZATION": `After GUARDs collapse, the owner returned to making Private Military Companies for unknown reasons, he has also authorized several transferations from the old sites, chemical supplies, guns, suits, whatever you would need. But this didn't seem as used for one regular P.M.C. What was transferred was unknown at this time.`,

  "TRANSFER": `GUARD Transfer logs #30
20/03/2025:
- One thousand (1000) Type blue suits.
- Five hundred (500) D.E. Rifles.
- Five hundred (500) MP7 SMGs.
- Two thousand three hundred and three (2303) chemical supplies.

These items were transferred to a P.M.C. called S.S.O.`,

  "2303": `Audio tape [ REDACTED ] transcript
"Right, so I've transferred everything just like you asked."
"GOOD. EVEN THE SUITS?"
"Yeah, the suits, guns, chemical supplies are at the base you asked me to drop them off."
"NO. THE CHEMICAL SUPPLIES SEND THEM TO -83.670077, 59.999300"
"Oh, sorry. I'll get the moving team there."`,

  "ANTARCTICA": `Audio tape [ REDACTED ]-2 transcript
"Sir, we're here. There's nothing out here but snow and we're freezing!"
"IF YOU'RE AT THE EXACT COORDINATES THERE SHOULD BE AN ELEVATOR. SWIPE YOUR DIVISION E*beep* CARD IN THE READER AND IT SHOULD OPEN."
*Two hours of silence*
"We're here but how do we fit the cargo inside in a small door?"
"GO INSIDE. PRESS THE FOURTH BUTTON ON THE WALL TO TURN ON THE LIGHTS, AND THE SIXTH BUTTON TO ACTIVATE THE CARGO HOLDING."
"Okay, done, after we put the cargo what do we do next?"
"NOTHING, YOU HAVE NO TASKS FOR ME ANYMORE. ATLEAST FOR NOW."
"JUST BE SURE NOBODY GETS ACCESS TO THAT. IF MY COVER IS BLOWN I'M AFRAID I HAVE TO TRIGGER A CLASS-3 SCENARIO."
"Got it, sir."`,

  "CLASS-3 SCENARIO": `A class-3 scenario is an event within the GUARD P.M.C. that triggers as a last resort, if everything goes wrong then with 5 Division ETA keycards, it will activate a warhead capable of destroying the world in two seconds, a blast more powerful than the suns core, it will wipe anything in one second of no pain.`,

  "DIVISION ETA": `Division ETA was the division in charge of the ETTRA and RAKID departments, their focus was on keeping everything secure, that nobody was releasing sensitive information to the public.`,

  "RAKID": `The Record and Keeping Information Department focused keeping every members identity safe, keeping all sorts of secrets in locked encrypted files that changed once every two days to maintain security.`,

  "ENCRYPTED FILES": `<< ERROR. YOU DO NOT HAVE ACCESS TO THESE FILES. >>
<< YOU'RE CLOSE TO FINDING OUT THE TRUTH. >>

=== END OF ACT 2 ===

Thank you for exploring Division Gamma's secrets.
More to come...`
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

// Session storage (in production, use Redis or similar)
const sessions = new Map();

export default function handler(req, res) {
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

  const sessionToken = req.headers.authorization?.replace('Bearer ', '');
  
  if (!sessionToken) {
    return res.status(401).json({ ok: false, message: "UNAUTHORIZED" });
  }

  // Get or create session
  let session = sessions.get(sessionToken);
  if (!session) {
    session = { 
      act1Step: 0, 
      act2Step: 0,
      act1Complete: false 
    };
    sessions.set(sessionToken, session);
  }

  const cmdRaw = String(req.body.cmd || "").trim();
  const cmd = cmdRaw.toUpperCase();

  // Handle special command to set Act 1 complete from client
  if (cmd === '__SET_ACT1_COMPLETE__') {
    session.act1Complete = true;
    return res.status(200).json({ ok: true, message: "Act 1 status updated" });
  }

  // Global commands
  if (GLOBAL_COMMANDS[cmd]) {
    let data = GLOBAL_COMMANDS[cmd];
    if (typeof data === "function") data = data();
    return res.status(200).json({ ok: true, cmd, data });
  }

  // Check if trying to access Act 2 before completing Act 1
  const isAct2Command = ACT2_ORDER.includes(cmd);
  if (isAct2Command && !session.act1Complete) {
    return res.status(200).json({ 
      ok: false, 
      message: "__ACT2_LOCKED__",
      data: `<< ACCESS DENIED >>
<< YOU HAVEN'T COMPLETED ACT 1 YET >>
<< COMPLETE THE FULL STORY FIRST >>
<< ... OR HAVE YOU? >>
<< SOMETHING IS WATCHING YOU >>
<< IT KNOWS YOU'RE NOT READY >>` 
    });
  }

  // ACT 1 PROGRESSION
  const expectedAct1 = ACT1_ORDER[session.act1Step];
  if (cmd === expectedAct1 && !session.act1Complete) {
    const data = CONTENT[cmd] || "NO DATA";
    session.act1Step++;
    
    // Check if Act 1 is complete
    if (session.act1Step >= ACT1_ORDER.length) {
      session.act1Complete = true;
    }
    
    return res.status(200).json({ ok: true, cmd, data });
  }

  // Allow restarting Act 1 at LOG#1
  if (cmd === "LOG#1" && !session.act1Complete) {
    session.act1Step = 1;
    return res.status(200).json({ ok: true, cmd, data: CONTENT["LOG#1"] });
  }

  // ACT 2 PROGRESSION (only if Act 1 complete)
  if (session.act1Complete) {
    const expectedAct2 = ACT2_ORDER[session.act2Step];
    if (cmd === expectedAct2) {
      const data = CONTENT[cmd] || "NO DATA";
      session.act2Step++;
      return res.status(200).json({ ok: true, cmd, data });
    }

    // Allow restarting Act 2 at first command
    if (cmd === "ACCESS FILE://TS-85") {
      session.act2Step = 1;
      return res.status(200).json({ ok: true, cmd, data: CONTENT["ACCESS FILE://TS-85"] });
    }
  }

  return res.status(200).json({ ok: false, message: "PROTOCOL ERROR" });
}