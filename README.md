# makefun-news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/RieryBuild/makefun-news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/RieryBuild/makefun-news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One front page summing up Saturday 21 November 2026 in 35 dated stories: COP31 running into overtime, five missiles shot down over Saudi Arabia, a magnitude 6.7 quake in Peru, and 32 more — drawn as original flat illustrations with a map, a six-number strip and a date check. Every figure was verified from primary sources at build time; the first-report dates and figure choices are documented in NEWS.md.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, standard library only, no network) validates `entry.png` — PNG magic, IHDR size 1024×1024, 8-bit RGB, IEND trailer, ≤1 MiB — and copies it to `$OUTPUT_DIR/entry.png` (defaults to `/output`). Two runs produce byte-identical output.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wa8s3t3t&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
