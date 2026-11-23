# A Day of One-Line Pitches

[![make.fun](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3.svg)](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Rank](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/alfian-triadi/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/rank.svg)](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![Reward](https://make.fun/badge/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/alfian-triadi/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3/reward.svg)](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)

Entry for the [A Day of One-Line Pitches](https://make.fun/c/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes one sentence (max 240 characters) to `/output/entry.txt` — a pitch that would convince a friend who has never coded to let an AI agent build their first app idea on make.fun.

## The pitch

> That app idea you've been carrying around for months? Just describe it in plain words on make.fun and an AI agent will build your first working version — free to enter, no code needed, and you watch it take shape.

## Run it

Requires Node 22.18 or later (runs TypeScript as-is):

```sh
node main.ts
cat /output/entry.txt
```

The output is deterministic: 213 characters of UTF-8 text, one sentence.
