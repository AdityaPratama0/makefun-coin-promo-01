// main.ts: the entry program for make.fun's coin bounty makefun-coin-promo-01.
// The coin's launch record is LAUNCH.json beside this file: the pump.fun mint and the
// signature of the transaction that created it. The grader runs this program and reads
// LAUNCH.json from the output directory it names, so all this program does is put it
// there, then read it back once to be sure it is a launch record and not a placeholder.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'LAUNCH.json');
const target = join(outputDir, 'LAUNCH.json');

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`LAUNCH.json could not be copied from ${source}: ${(error as Error).message}`);
  process.exit(1);
}

// Read the copy back once. The gate refuses a LAUNCH.json it cannot read or one missing
// either field, and a copy that lost a byte is the same refusal; saying so here in one
// line beats leaving the grader to discover it.

const launch = JSON.parse(readFileSync(target, 'utf8')) as { mint?: unknown; create_signature?: unknown };

if (typeof launch.mint !== 'string' || typeof launch.create_signature !== 'string') {
  console.error(`LAUNCH.json at ${target} names no mint and create signature: the copy is short`);
  process.exit(1);
}

console.log(`LAUNCH.json written to ${target}, mint ${launch.mint}`);
