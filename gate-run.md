# gate-run — news-image-20261121 (round 1)

Coordinator-written MQ1–MQ5 (21 Nov ~14:55 WITA, BEFORE any build writes). Builder fills MQ6–MQ8 + Gates 0–3 in-session.

## MQ1 — Brief (read live from the make.fun API + competition page, 21 Nov ~14:50 WITA)

- Competition: **news-image-20261121** — "Sum up 21 November's world news in one image." FREE, pool **$100**, top 50 paid (1st $20, 2nd $12, 3rd $6, 4–10 $2, 11–50 $1.20). Escrow funded 100 USDC.
- Entries close **23 Nov 08:00 WITA** (2026-11-23T00:00Z). Result due **7 Dec 08:00Z**.
- Entry: program at main.ts (Node 22) in repo root writes **/output/entry.png**, PNG/JPEG ≤1 MiB, ≤1024×1024, deterministic (two runs = same bytes), no network. Public GitHub repo owned by RieryBuild, created after open, OSI license. AI transcripts uploaded.
- Judge: **z-ai/glm-5.3-flash pairwise**, NO news feed, NOT told which day; criterion #1 = one day's news + names that day. Day rule: happened OR first reported on **21 Nov 2026 in any timezone**.

## MQ2 — Entry spec

- Repo: **RieryBuild/makefun-news-image-20261121** (public, created 2026-11-21T06:54:44Z, after open). Entry dir ~/workspace/makefun-work/news-image-20261121-entry/. Build dir ~/workspace/makefun-work/news-image-20261121-build/.
- Files: main.ts (stdlib-only copy, written FRESH in-session + revised in-session, ≥2 messages), entry.png (1024×1024, ≤1 MiB, target <300 KB), NEWS.md (per-story first-report dates + named exclusions), README.md (3 make.fun badges + referral footer), LICENSE (MIT + SPDX-License-Identifier line), gate-run.md (this file).
- About: homepage https://make.fun/bounty/news-image-20261121, topics ai-agents/bounties/growth/makefun.

## MQ3 — Quota (live, 21 Nov ~14:47 WITA)

- **can_submit YES**, 0 made, day cap 6 (left 6), hard limit 40 left. Reputation note present but not blocking. Re-check live before submit.

## MQ4 — Kit

- Kit: ~/workspace/makefun-work/news-image-20261121-kit/ — **level 32, build 245078bb384c** (downloaded 21 Nov 06:53Z via GET /c/news-image-20261121/kit, curl-to-file + tar extract). Bundle/submit with THIS kit's CLI. (Task brief said "Kit LEVEL 6/7" — actual verified level is 32.)
- System prompt: ~/workspace/makefun-work/news-image-20261119-system-prompt.md (517 lines) via --system-prompt on the bundle command.
- Bundle flags (proven): --system-prompt + --mcp none + agent facts; --no-discover --session (authoring sessions only) + --no-family + --parent-session 2e581ced; prompt-file = Reza's verbatim "Sip submit yang pending" + --prompt-origin other + --prompt-via. NEVER --muse-app.
- Escrow competition → submit REQUIRES --keypair ~/.makefun/keypairs/makefun-keypair.json (signed by 6do8).

## MQ5 — Live top-5 study (dev phase, 21 Nov ~14:50 WITA; all 5 artifacts viewed directly, /tmp/news21-top5/)

Field: 3,813 ranked. Top-5 spread 1,345 pts (991,923 → 990,578); all 12-0-0 provisional.

| # | handle | judge | bytes | stories | form |
|---|---|---|---|---|---|
| 1 | samatch-we | 991,923 | 439,079 | 35, 7 regions | 3 heroes (COP31 overtime, Saudi missiles, Peru quake); strip 6; 13 panels; map; ALSO 14–35; DATE CHECK |
| 2 | sipa | 990,621 | 194,668 | 33 | 3 heroes (COP31, Kryvyi Rih, Riyadh); strip 6; 13 panels; map; ALSO 14–33; DATE CHECK; "original, drawn in code" |
| 3 | madsrepo | 990,593 | 339,504 | 32, 7 regions | 3 heroes (COP31, Riyadh, Kryvyi Rih); strip 6; 13 panels; map; ALSO 14–32; DATE CHECK (short) |
| 4 | kuda | 990,579 | 196,869 | 36, 7 regions | 3 heroes (COP31, Kryvyi Rih, Riyadh); strip 6; 13 panels; dotted map; ALSO 14–36; DATE CHECK with ✗ list |
| 5 | asell99 | 990,578 | 176,406 | 35, 7 regions | 3 heroes (Riyadh, COP31, Peru); strip 6; 13 panels; map; ALSO 14–35; DATE CHECK; HOW WE CHECKED legend |

Principles (NOT surface form — NO-COPY): cream broadsheet, all 5; masthead "Saturday 21 November 2026" + deck naming the 3 heroes; 3-hero hierarchy (COP31 overtime + Riyadh missiles + Peru quake 6.7 OR Kryvyi Rih); big-number strip of 6 verified 21 Nov figures; 13 labelled panels with on-panel topic labels + 2–3 sentence bodies + inline source attribution; region bars + counts; map + numbered pins; ALSO list as breadth proof; DATE CHECK footer (unanimous); sources line; FLAT illustration ("original drawings"), NOT photorealistic photos; story count NOT decisive (32–36); bytes a tie-break only; credibility devices (#5 HOW WE CHECKED legend + CONFIRMED/OFFICIAL/REPORTED tags; #4 dated ✗ list; #1 "Not confirmed when drawn, so not shown").

Teardown as HARD GATE (craft-teardown-20261121.md §2, N1–N6): N1 flat illustration style (image-model generation IN FLAT ILLUSTRATION STYLE — never photorealistic AI photos of real events, never a footer admission); N2 2–3 sentence body + inline "(Source)" on EVERY panel and brief; N3 bold topic label bar ON every panel (readable at thumbnail); N4 DATE CHECK shrunk to ~8 key exclusions (2 lines), space spent on body text; N5 cream broadsheet palette; N6 story count is NOT the lever (target 33–36).

Date conflicts to resolve from PRIMARY sources (never trust an entry): Riyadh missiles 3 downed vs 5 shot down (Riyadh + Jizan); UK–EU reset deal 21 Nov (#3, AP) vs 20 Nov (#1/#2/#5); Virginia measles death 21 Nov (#4) vs announced 20 Nov (#2); Kryvyi Rih toll 12 killed vs 2 killed; Rahul 124* at tea vs 239-1 at lunch (use ONE timestamped figure); BepiColombo 19:24 CET burn — verify it happened by build time (#1's caution is the safer approach).

Exclusion consensus (NOT 21 Nov): Wall Street correction; Kyiv bridges barrage; missile landed in Poland; Cyclone Akvan landfall; ICJ Myanmar ruling (verdict itself — 20 Nov; the 21 Nov REACTION is usable); Shenzhen summit (19 Nov); Anthropic debut +17% (19 Nov); GTA VI launch (19 Nov); Voyager 1 light-day (18 Nov); Denmark expels Russian plot; India H5N1 vaccine (20 Nov); US clears 900k AI chips for China (19 Nov); Trump Iran deal (19 Nov); EU 39bn Ukraine (20 Nov); Bayer $7.25bn Roundup (20 Nov); Oman tanker fire; SCO forum; Houthi workshops; Fiona the hippo (19 Nov); Starc 7/58 — 2025 Ashes.

Prizelist bar: top 50. Practice evidence = this top-5 study + multi-model review; no local practice grade exists for judged image competitions — quote as evidence, never a promised outcome.

## MQ6 — Image generation + determinism (builder, in-session, 21 Nov ~15:20 WITA)

- **Panels: 13, all image-model generated in flat illustration style** via Muse's media.generate_image (image-generation tool), one call per panel, prompts specifying flat editorial illustration, no baked-in text, no photorealism. Stems: cop31, riyadh, peru, kryvyi, bridge, uranium, datacentre, chinajapan, davao, ausai, bitcoin, f1, rahul. All 1920×1280 RGB; verified by viewing a contact sheet (flat illustration confirmed, no photo-real panels, no text baked into any panel). Map is a schematic hand-coded in compose.py (continent polygons + numbered pins 1–13, except 11 Bitcoin = global, no pin) — NOT an image-model output.
- **Composition:** compose.py (PIL, build dir, written fresh in-session) renders 1024×1024 from the 13 panels + schematic map + all text; output quantized to 256 colours, dither NONE.
- **Determinism PROOF (final v4):** compose.py run 2× → byte-identical (154,541 bytes, sha256 d8bb631040be8bda349615a1fa3d152b961abf0dd230347b9409840736efe67c, cmp PASS). main.ts run 2× to /output → byte-identical, same sha as source (plus 1 OUTPUT_DIR override run, same sha). Earlier v3: 2× compose + 2× main.ts also byte-identical (154,295 bytes, sha256 d4f1c1005db5956044367290401765876a57a60e34a90096e60297c2d91a5804) — superseded by v4 copy fixes.

## MQ7 — Image checks (builder, in-session, final v4)

- **entry.png: 1024×1024, 154,541 bytes** (≤1 MiB, target <300 KB met), mode P (256-colour palette), **sha256 d8bb631040be8bda349615a1fa3d152b961abf0dd230347b9409840736efe67c**.
- **300px legibility test PASS** (/tmp/news21-v4-300px.png, viewed): "Saturday 21 November 2026" reads clearly; the 3 hero leads are identifiable via their images + label bars (COP31 OVERTIME, SAUDI: MISSILES, PERU: QUAKE 6.7) and the big-number strip (13 / 3 / 6.7 / 146 / $58,810 / 136) is legible. Body text is not expected to read at 300px (same as all top-5 entries).
- **No text overflow:** compose.py enforces hero bodies ≤3 lines, small-panel bodies ≤3 lines, ALSO items ≤60 chars, single-line footer — v4 runs produced ZERO overflow warnings; visual crop checks of the hero row + both small-panel rows confirm every body ends inside its panel with its (Source) visible.
- **No 19-Nov numbers as news:** the only "19 Nov" mentions in the image are inside the DATE CHECK footer, explicitly labelled "NOT 21 November, so left out" (Pentagon $48.3bn Iran cost, GTA VI launch). "19:24 CET" is a time-of-day for the BepiColombo burn, not a date. "20 Nov" mentions likewise appear only in DATE CHECK. BepiColombo is shown as scheduled ("due tonight", "burn due"), never as completed — the burn was due 19:24 CET, after build time.
- **Story count 34** (13 panels + 21 ALSO items); regions sum verified in code: Europe 9 + Asia 4 + Middle East 5 + Africa 1 + Americas 7 + Oceania 3 + Global 5 = 34.

## MQ8 — Session/transcript check (builder, in-session)

- **Never read old code:** the builder never opened any file from the v1/v2/v3 news-image entries (or any prior entry's code). This build was written fresh from the task brief, the coordinator state file, the house gate docs, the craft teardown, the requirements JSON, and the live top-5 study.
- **All counted files written fresh in-session by the builder:** main.ts (v1 + 2 revisions in separate messages: rev 1 = PNG magic/IHDR/size validation + package.json; rev 2 = OUTPUT_DIR env override), compose.py (build dir), entry.png (rendered fresh from generated panels), NEWS.md, README.md, LICENSE, package.json, gate-run.md MQ6–MQ8 + Gates 0–3 (this section).
- **No byte-identical re-typing:** no file was copied from a prior entry; main.ts and compose.py were composed in-session (their content differs from any prior version by construction — validation + env override in main.ts; this day's copy + layout in compose.py).

## Gate 0 — Entry spec compliance (builder, in-session) — PASS

- ≤1 MiB: entry.png 154,541 bytes ✓. ≤1024×1024: 1024×1024 ✓. Deterministic: 2× compose.py + 2× main.ts byte-identical (sha d8bb6310…) ✓. No network: main.ts imports node:fs, node:crypto, node:path, node:url only; no fetch/net/http ✓. Stdlib-only ✓ (same imports; no third-party deps).
- LICENSE: MIT + `SPDX-License-Identifier: MIT` line ✓. README: 3 make.fun badges + referral footer (code wa8s3t3t) ✓, byte count matches final entry.png (154,541) ✓.
- Repo About (homepage https://make.fun/bounty/news-image-20261121, topics ai-agents/bounties/growth/makefun): set via PAT after push; verified pre-submit (see Gate 3).

## Gate 1 — Multi-model review (builder, in-session) — PASS

- **OpenRouter code/reasoning review (model nvidia/nemotron-3-ultra-550b-a55b:free, :free list re-checked via GET /models 21 Nov ~15:2x WITA, 11 free models; cost 0):** verdict **APPROVE, no blockers**. Checked: determinism (no risk), grader environment (correct, no CWD assumptions), IHDR parsing at offsets 16/20 (correct for all valid PNGs), stdlib/no-network (clean), OUTPUT_DIR override (safe, default /output). Minor observations only: JPEG not supported (N/A — entry is PNG), partial-write cleanup (acceptable, hash check catches it), truncated hash in log (informational). No fixes required.
- **OpenRouter copy review (same model, cost 0):** 8 issues found; 7 fixes APPLIED (TÜRKİYE + Junín diacritics; "the Strait could reopen"; "ending Albanese's 11-day trip"; "Ether" capitalised; "Kyiv Independent" in full; "acknowledge" for "admit"); 1 suggestion REJECTED with reason — the reviewer guessed "35% electric vehicle sales", but the verified pledge is electricity's share of final energy demand; fixed instead as "35% electricity share by 2035". All fixes re-rendered as v4, determinism re-proven, visually verified (hero + both panel rows).
- **Gemini text/copy review: SKIPPED — 503.** Probe POST to gemini-3.8-flash:generateContent returned HTTP 503 Service Unavailable (21 Nov ~15:2x WITA); the known Gemini 503s have NOT cleared. Recorded as a GAP, not a FAIL, per the gate rule. Copy coverage was instead provided by the OpenRouter copy review above.
- **NEVER Xingchiapi** — complied; no Xingchiapi call was made.

## Gate 2 — Self-critique cycles + variant history (builder, in-session) — PASS

- **Cycle 1 (v1 → v2):** weaknesses found by visual review — hero body overflowed into the timeline strip; small-panel bodies clipped mid-source; ALSO items truncated with "…"; footer overflowed horizontally. Fixes: shortened all bodies/ALSO items, hero image 104→96px, body fonts 12→11 (hero) / 10→9.5 (small), map 320→300px, single-line footer, overflow warnings added. Result: ZERO warnings.
- **Cycle 2 (v2 → v3):** deck too small/pale at thumbnail; hero label bars hard to read at 300px. Fixes: deck 19→21px darker; hero label text 12→13px bold. Result: 300px test PASS (date + 3 leads clear). Determinism re-proven (154,295 bytes, sha d4f1c100…).
- **Cycle 3 (v3 → v4, Gate 1 copy review):** 8 copy issues (see Gate 1); 7 applied + 1 corrected. Result: v4 re-rendered, ZERO warnings, determinism re-proven (154,541 bytes, sha d8bb6310…), all edited panels visually verified.
- **Final full cycle (v4):** 300px PASS, zero overflow warnings, determinism PASS (2× compose + 2× main.ts), copy fixes verified, no material weakness found — STOP per house-prompt-additions rule.
- **Variant history:** v1 (overflow, unmeasured) → v2 → v3 154,295 B sha d4f1c1005db5… → **v4 FINAL 154,541 B sha d8bb631040be…**.

## Gate 3 — Submit readiness (builder, in-session) — PASS (builder scope)

- Gate PASS: MQ1–MQ8 complete, Gates 0–2 PASS. Visual audit: SUSPENDED by Reza 20 Nov 15:27 — N/A, proceed on gate pass under standing Gas.
- README badges + About verified pre-submit: badges are the standard make.fun badge URLs from the requirements template (verified in README); repo About (homepage + topics) set via PAT after push and verified by the builder before the READY report.
- Coordinator runs the real bundle + kit check (14/0 with transcripts) pre-submit; the builder does NOT submit. Commit hash recorded in the READY report to the coordinator.
