# M scoring notes — Scorer B, subject set 2

**Research step R2. Scorer B (independent, blind). 24 subjects × 23 skills = 552 rows.**

Scored against the DfE GCE AS and A level subject content (common to all boards) plus one named reference specification per methodology §4.1, using the anchors in the same section where they applied directly.

## Reference specifications used

| Subject | Reference specification | Version / notes |
|---|---|---|
| Geography | AQA A-level Geography 7037 | Specification at a glance, retrieved 2026-09-27 |
| History | AQA A-level History 7042 | Specification at a glance, retrieved 2026-09-27 |
| Politics | AQA A-level Politics 7152 | Specification at a glance, retrieved 2026-09-27 |
| Sociology | AQA A-level Sociology 7192 | Specification at a glance, retrieved 2026-09-27 |
| Philosophy | AQA A-level Philosophy 7172 (only board) | Specification at a glance, retrieved 2026-09-27 |
| Religious Studies | AQA A-level Religious Studies 7062 | Specification at a glance, retrieved 2026-09-27 |
| Criminology | WJEC/Eduqas Level 3 Applied Diploma in Criminology | Per methodology §10 sign-off. Weighting confirmed via WJEC Eduqas Criminology newsletter (Jan/April 2026): from teaching September 2026, 60% external exam / 40% internal (NEA-equivalent), a change from the previous 50/50 |
| English Language | AQA A-level English Language 7702 | Specification at a glance + NEA guidance, retrieved 2026-09-27 |
| English Literature | AQA A-level English Literature A 7712 | Component weightings confirmed via AQA scheme-of-assessment summary (the "specification at a glance" URL in sources.md 404s — the current page is `/specification/scheme-of-assessment`) |
| English Language & Literature | AQA A-level English Language and Literature 7717 | As above; current spec is for first exams 2027, weightings unchanged (40/40/20) |
| French | AQA A-level French 7652 | Specification at a glance, retrieved 2026-09-27 |
| Spanish | AQA A-level Spanish 7692 | **Not independently fetched** — AQA's three MFL specs (French/German/Spanish) share an identical Paper 1/2/3 structure and weighting (50/20/30); confirmed for French only. See judgement calls. |
| German | AQA A-level German 7662 | Same caveat as Spanish. |
| Chinese (Mandarin) | Pearson Edexcel A-level Chinese 9CN0 (only board) | Full component weightings not confirmed beyond Paper 3 Speaking = 30% (72 marks); DfE MFL Chinese exceptions annex used for the rest. See judgement calls. |
| Art & Design (Fine Art) | AQA A-level Art & Design (Fine Art) 7202 | Specification at a glance, retrieved 2026-09-27 |
| Graphic Communication | AQA A-level Art & Design (Graphic Communication) 7203 | Component structure taken from 7202 (identical assessment model across all Art & Design titles); title-specific content from DfE p.3 |
| Photography | AQA A-level Art & Design (Photography) 7206 | As above |
| Textile Design | AQA A-level Art & Design (Textile Design) 7208 | As above |
| Film Studies | Eduqas A-level Film Studies (only board) | Component weightings (35/35/30) confirmed via web search of the Eduqas specification; full PDF not downloaded |
| Media Studies | AQA A-level Media Studies 7572 | Specification at a glance, retrieved 2026-09-27 |
| Music | AQA A-level Music 7272 | Specification at a glance, retrieved 2026-09-27 |
| Music Technology | Pearson Edexcel A-level Music Technology 9MT0 (only board) | Component weightings (20/20/25/35) confirmed via web search of the Pearson specification; full PDF not downloaded |
| Drama & Theatre | AQA A-level Drama and Theatre 7262 | Specification at a glance, retrieved 2026-09-27 |
| Dance | AQA A-level Dance 7237 (only board) | Specification at a glance, retrieved 2026-09-27 |

All DfE content was read from the pre-extracted text files in `pdfs/r0-dfe/` (URLs as listed in `research/sources.md`).

## Method note

Given the volume (24 subjects × 23 skills in one pass), exam-board facts for most AQA subjects were confirmed directly from each specification's "specification at a glance" page. Where that page had moved or 404'd (English Literature, English Language & Literature) or where the board publishes the detail across several pages I didn't fetch in full (Film Studies, Music Technology, Chinese), I relied on a single corroborating web search rather than downloading and grepping the full spec PDF. This is a deviation from the suggested workflow in the brief, made to cover the full subject set; the DfE content, which is authoritative and common to all boards, was read in full for every subject that has it.

## Judgement calls

1. **Criminology weighting.** Used the post-September-2026 weighting (60% exam / 40% internal assessment) rather than the older 50/50 split, since the methodology's evidence base is "specifications current in September 2026" (§9.11).
2. **Spanish and German assumed structurally identical to French.** AQA's three modern-language A-levels (7652/7662/7692) are built to the same template (Paper 1 Listening/Reading/Writing 50%, Paper 2 Writing 20%, Paper 3 Speaking 30%, including an individual research project). I did not independently fetch the Spanish or German spec-at-a-glance pages to confirm this holds exactly; if either differs, French's anchor-derived scores (writing, speaking, languages, self-management, critical-thinking) may need revisiting for that language specifically.
3. **Chinese (Mandarin) writing score lowered to 2, not 3.** The DfE MFL Chinese exceptions annex states that listening/reading comprehension answers "must be in English, unless writing skills are also intentionally being assessed," which meaningfully reduces how much of the qualification is assessed through Chinese-language writing compared with French/Spanish/German (which score 3). Literary/film-work responses are still required in Chinese, so I kept writing at 2 rather than 1.
4. **Graphic Communication's `digital-ai` score corrected to 1, not 2.** My first pass scored 2 for its explicit "web and app design... animation and game design" content, but the rubric's own "what a 3/1 looks like" aid states plainly that "Media and Music Tech software counts under `content-production`" — i.e. software/tool literacy for a creative production subject should be attributed to `content-production` (scored 3 here), not `digital-ai`. Applied the same logic to Photography, Fine Art, Textile Design and Music Technology (all kept at 1 for `digital-ai`).
5. **Music's `teamwork` kept at 1, not 3**, despite the rubric aid table listing "Music ensemble" as a typical 3. DfE music content explicitly frames ensemble performance as one option among several ("playing or singing solo **or** in ensemble..."), not a requirement, and methodology §9.3 says specs with options are scored on compulsory elements only. Since AQA 7272 does not require ensemble performance (a solo-only route is permitted), rule 5 ("teamwork scores 2+ only when group work is assessed") is not clearly satisfied for every candidate. Flagged as a hardest call below.
6. **Music Technology's `engineering` kept at 1, not 2.** The specification's content on signal path, impedance and electromagnetic induction in speakers is genuine applied technical knowledge, but it reads more like the "physics principles" the rubric aid explicitly caps at 2 only when there is clear "application" — here the assessed skill is closer to using/evaluating existing audio equipment than designing or building a system. Scored conservatively; a case for 2 exists (see hardest calls).
7. **Drama & Theatre teamwork (anchor A17) confirmed rather than left provisional.** The anchor text itself says "confirm group assessment in the reference spec." AQA 7262's Component 2 (Creating Original Drama) is built around devising, which is inherently a group process even though each candidate is individually marked on a working notebook and devised performance — I judged this satisfies rule 5 and used the anchor score of 3 as given.
8. **Geography and Sociology numeracy/data-analysis did not rely on an unverifiable "X% must be maths" figure.** Unlike Business (DfE p.5, "minimum of 10%") or Science (Appendix 6), neither the DfE Geography content nor AQA's public pages state an explicit percentage minimum for mathematical/statistical skills. I found AQA 7037 states AO3 (quantitative, qualitative and fieldwork skills) is worth 20–30% of the A-level, and used that as the weighting evidence for both `data-analysis` and `numeracy` at score 2, rather than citing an unconfirmed "Level 2 maths" percentage some secondary sources quote for Geography.
9. **Criminology `content-production` scored 1, not 2.** Unit 1 ("Changing awareness of crime") plausibly asks learners to produce a resource analysing crime's media portrayal, but I could not confirm this from a primary source within the time available, so I scored conservatively (no evidence needed at 1) rather than claim a specific assessed production task I hadn't verified.

## Hardest calls

- **Music `teamwork`** (see judgement call 5): a strong case exists for 2 wherever a centre actually enters students for ensemble performance, but the compulsory-content rule pushed this down to 1.
- **Music Technology `engineering`**: 1 vs 2 is genuinely close; the "how monitor speakers work (electromagnetic induction)" and "how leads and connectivity work including impedance" content (DfE p.7) is more applied than a typical Physics topic, but there's no design/build task attached to it.
- **Chinese (Mandarin) `writing`**: 2 vs 3. The exceptions annex is explicit that comprehension tasks may be answered in English, which is a real reduction in Chinese-language writing demand relative to French/Spanish/German, but Paper 2 (writing) and the literary/film-work responses still require substantial Chinese writing. Reasonable scorers could land on 3.
- **Criminology `data-analysis` and `content-production`**: scored from unit titles and the confirmed 60/40 weighting rather than a full read of unit learning outcomes, so these are the least certain cells in this set. Flag for adjudication if Scorer A's evidence differs materially.
- **Graphic Communication `problem-solving`**: DfE lists functional briefs (illustration, packaging, web/app design) that plausibly involve solving visual-communication problems, but the DfE content doesn't frame this explicitly as "problem-solving" the way D&T does. Scored 1, but 2 is arguable.

## Rubric ambiguities to flag for the adjudicator

- **Rule 2 (numeracy weighting thresholds) presumes every subject's Ofqual/DfE minimum maths percentage is publicly stated and easy to find.** For Geography and Sociology it isn't (unlike Business, which DfE states explicitly). Suggest the rubric note that AO/component weightings covering quantitative skills (even without an explicit "level 2 maths" percentage) are acceptable substitute evidence, as I've used here.
- **Rule 4's self-management anchor for NEA/practical courses assessed via a live oral exam rather than a written NEA** (the MFL individual research project, examined through Paper 3 speaking) isn't explicitly covered — I read "or a live assessed performance" in rule 4 as covering this, but the rubric could usefully say so directly, since it's the same reasoning that produced anchor A13 but rule 4 mentions "live assessed performance" only in the context of performing-arts NEAs.
- **The "what a 3 usually looks like" aid table sometimes conflicts with the compulsory-content principle in §9.3** (e.g. "Music ensemble" listed as typical-3 for teamwork, even though ensemble is optional in the DfE content). Since the aid table is explicitly "not binding," I followed §9.3, but a future revision could clarify precedence.

## Return summary

- **Row count:** 552 (24 subjects × 23 skills), validated by script.
- **Score distribution:** 0 → 376, 1 → 63, 2 → 55, 3 → 58.
- **Skills scored 3, by subject:** see the CSV; in summary — essay-based humanities (Geography, History, Politics, Sociology, Philosophy, Religious Studies, English Language, English Literature, English Language & Literature) score 3 on `writing` and `critical-thinking`; the four MFLs score 3 on `speaking`/`languages` (French/Spanish/German also `writing`); all four Art & Design titles score 3 on `practical-making`, `self-management` and `creativity` (Graphic Communication and Photography add `content-production`); Film Studies and Media Studies score 3 on `writing`, `critical-thinking` and `content-production`; Music scores 3 only on `creativity`; Music Technology scores 3 only on `content-production`; Drama & Theatre scores 3 on `speaking`, `teamwork` and `creativity`; Dance scores 3 on `writing`, `teamwork` and `creativity`; Criminology scores 3 only on `law-ethics`.
