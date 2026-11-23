// A Day of One-Line Pitches — make.fun competition
// u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
//
// Writes one sentence (max 240 characters) to /output/entry.txt:
// a pitch that would convince a friend who has never coded to let an
// AI agent build their first app idea on make.fun.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "That app idea you've been carrying around for months? Just describe it in plain words on make.fun and an AI agent will build your first working version — free to enter, no code needed, and you watch it take shape.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
