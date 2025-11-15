// api/auth.js - Serverless function for authentication
// This file stays on the server - users CANNOT see it!

const PASSWORD = "DIVISIONGAMMA";

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const pw = String(req.body.password || "");
  
  if (pw === PASSWORD) {
    // Generate a simple session token (in production, use JWT or similar)
    const sessionToken = Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
    
    return res.status(200).json({
      ok: true,
      message: "AUTHORIZED",
      info: "03 MARCH 2024. Type HELP for available operations.",
      sessionToken: sessionToken
    });
  }
  
  return res.status(403).json({ ok: false, message: "ACCESS DENIED" });
}