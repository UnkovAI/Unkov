#!/usr/bin/env node
/**
 * Unkov — Investor Access Code Generator
 * ─────────────────────────────────────────────────────────────────
 * Run locally to generate time-windowed investor access codes.
 * Nothing is sent to any server. The password never leaves your machine.
 *
 * Usage:
 *   npx tsx scripts/generate-code.ts              → 24h code (default)
 *   npx tsx scripts/generate-code.ts 4            → 4h code
 *   npx tsx scripts/generate-code.ts 72           → 72h code
 *   npx tsx scripts/generate-code.ts 72 delta     → 72h code (alt group)
 *   npx tsx scripts/generate-code.ts --list       → show all active codes
 *
 * Valid expiry options : 4, 24, 72 (hours)
 * Valid salt options   : alpha, beta, gamma, delta
 * ─────────────────────────────────────────────────────────────────
 */

// ─── Core code generation (must match InvestorGate.tsx exactly) ──────────────
function makeCode(windowIndex: number, salt: string): string {
  const raw = `${windowIndex}-${salt}-unkov`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    hash = ((hash << 5) - hash + raw.charCodeAt(i)) | 0;
  }
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  let h = Math.abs(hash);
  for (let i = 0; i < 6; i++) {
    code += chars[h % chars.length];
    h = Math.floor(h / chars.length) + (Math.abs(hash) >> i);
  }
  return `UNK-${code}`;
}

function generateCode(expiryHours: number, salt: string): string {
  const windowIndex = Math.floor(Date.now() / (expiryHours * 3600000));
  return makeCode(windowIndex, salt);
}

function expiresAt(expiryHours: number): Date {
  const windowStart = Math.floor(Date.now() / (expiryHours * 3600000)) * expiryHours * 3600000;
  return new Date(windowStart + expiryHours * 3600000);
}

function timeLeft(expiryHours: number): string {
  const diff = expiresAt(expiryHours).getTime() - Date.now();
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  if (h > 0) return `${h}h ${m}m ${s}s`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

// ─── Email draft ──────────────────────────────────────────────────────────────
function emailDraft(code: string, expiry: string): string {
  return `
Subject: Unkov Investor Access — Confidential

Hi,

Please use the code below to access Unkov's confidential investor materials including
financial projections, funding terms, and the data room.

  Access Code: ${code}

This code expires in approximately ${expiry}.
Visit: https://unkov.com/investor-gate

This information is confidential and intended solely for the recipient.
Please do not forward or distribute.

Best,
The Unkov Team
`.trim();
}

// ─── CLI ──────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const VALID_HOURS = [4, 24, 72];
const SALTS: Record<number, string[]> = {
  4:  ["alpha"],
  24: ["beta"],
  72: ["gamma", "delta"],
};

const reset  = "\x1b[0m";
const bold   = "\x1b[1m";
const green  = "\x1b[32m";
const cyan   = "\x1b[36m";
const yellow = "\x1b[33m";
const grey   = "\x1b[90m";
const red    = "\x1b[31m";
const blue   = "\x1b[34m";

// ── --list: show all currently active codes ───────────────────────────────────
if (args.includes("--list")) {
  console.log(`\n${bold}Unkov — All Active Investor Codes${reset}\n`);
  console.log(`${grey}Generated at: ${new Date().toLocaleString()}${reset}\n`);

  for (const hrs of VALID_HOURS) {
    const salts = SALTS[hrs];
    for (const salt of salts) {
      const code = generateCode(hrs, salt);
      const exp = expiresAt(hrs);
      const left = timeLeft(hrs);
      const label = hrs === 72 && salt === "delta" ? "72h (Group B)" : `${hrs}h`;
      console.log(`${bold}${green}${code}${reset}  ${cyan}${label}${reset}`);
      console.log(`${grey}  Expires: ${exp.toLocaleString()} (${left} remaining)${reset}`);
      console.log();
    }
  }
  process.exit(0);
}

// ── Single code generation ────────────────────────────────────────────────────
const hrsArg = parseInt(args[0] ?? "24");
const saltArg = args[1] ?? null;

if (!VALID_HOURS.includes(hrsArg)) {
  console.error(`${red}Error: expiry must be 4, 24, or 72 hours. Got: ${hrsArg}${reset}`);
  process.exit(1);
}

const availableSalts = SALTS[hrsArg];
const salt = saltArg && availableSalts.includes(saltArg) ? saltArg : availableSalts[0];

const code = generateCode(hrsArg, salt);
const exp  = expiresAt(hrsArg);
const left = timeLeft(hrsArg);
const draft = emailDraft(code, left);

console.log(`
${bold}Unkov — Investor Access Code${reset}
${"─".repeat(44)}
${bold}${green}  ${code}${reset}

${grey}  Expiry  :${reset} ${hrsArg} hours
${grey}  Expires :${reset} ${exp.toLocaleString()}
${grey}  Time left:${reset} ${yellow}${left}${reset}
${"─".repeat(44)}

${bold}${blue}Email draft (copy & paste):${reset}

${grey}${draft}${reset}

${"─".repeat(44)}
${grey}Tip: run with --list to see all active codes${reset}
`);
