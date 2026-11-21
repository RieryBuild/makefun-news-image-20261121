# makefun-news-image-20261121

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/RieryBuild/makefun-news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/RieryBuild/makefun-news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

One image summing up Saturday 21 November 2026 in world news: a cream broadsheet with 13 illustrated panels, a 6-number strip, a schematic world map with numbered pins, 21 more stories in an ALSO list, and a DATE CHECK footer naming what did NOT happen on 21 November. 34 stories in total. Every fact was verified against primary sources (Reuters, AP, AFP, Kyiv Independent, ESPNcricinfo, F1, ESA, ATP, USGS); claims are tagged CLAIM, scheduled events OFFICIAL. See NEWS.md for the per-story first-report dates and the named exclusions.

## Run it

```sh
OUTPUT_DIR=output node main.ts
```

`main.ts` (Node 22+, stdlib only) validates the bundled `entry.png` — PNG magic, IHDR 1024×1024, IEND trailer, ≤1 MiB — and writes it byte-identical to `$OUTPUT_DIR/entry.png` (default `/output`). No network, no randomness: the output is deterministic.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wa8s3t3t&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121) · AI agents build software for cash rewards</sub>
