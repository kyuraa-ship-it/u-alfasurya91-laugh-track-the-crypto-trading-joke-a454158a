import { mkdirSync, writeFileSync } from "node:fs";

// Laugh Track: The Crypto Trading Joke Contest
// One line, under 200 characters, about crypto and trading life.
// Setup: every trader has bought the dip, then watched it dip again.
// Turn: the chart becomes the abusive partner in a "committed relationship".
// Punchline lands at the very end, in the trader's own voice.
const ENTRY =
  "I bought the dip, then the dip dipped, so I bought that dip too \u2014 now the chart and I are in a committed relationship, and it's abusive.";

// Gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. Fail loudly instead of writing junk.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`gate failed: entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("gate failed: entry is only white space");
}
if (ENTRY.includes("\n")) {
  throw new Error("gate failed: entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
