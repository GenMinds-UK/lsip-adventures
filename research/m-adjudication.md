# M matrix: R2 adjudication log

**Research step R2. Adjudicator's record, 27 September 2026.** This page records how the double-scored matrix (`research/scoring/M-merged.csv`) was turned into the frozen M matrix, `research/data/subject_skills.csv`. It follows the protocol in [methodology.md](methodology.md) §6. The rulings are written into the methodology as §4.1.1; they are numbered 1–15 there and R1–R15 here. R15 was added in the Checkpoint 2 follow-up at the end of this page.

## Summary

- **1,035 cells** in the final matrix: 45 subjects × 23 skills.
- **112 cells** were logged: the 5 adjudicated cells, the 13 audit cells, the 54 diff-1 cells in the four lowest-agreement skills, 33 other diff-1 cells touched by a ruling, and 7 agreed cells changed in the consistency pass.
- **79 cells moved from their provisional score in the main pass**: 77 up and 2 down. The 5 adjudicated cells had no provisional score, so they are counted separately below.
- **The Checkpoint 2 follow-up** changed 7 more cells, all up, and corrected the English Language & Literature citations. See the last section.
- **Final distribution, after the follow-up:** 0 = 627, 1 = 153, 2 = 158, 3 = 97. The main pass alone gave 0 = 629, 1 = 151, 2 = 163, 3 = 92.
- **Provisional distribution** (1,030 cells, excluding the 5 adjudicated cells): 0 = 656, 1 = 163, 2 = 130, 3 = 81.
- All anchors A1–A18 hold exactly (checked by script).
- **The lower-score default under-rates.** 9 of the 13 randomly sampled audit cells (69%) moved up, because the higher score's evidence met the rubric level exactly. So did 40 of the 54 targeted-review cells. Most of the disagreement came from two scorer habits. Scorer A read level 2 as needing the skill to be 'separately assessed'. Scorer B read it as needing 'a distinct assessed focus'. Neither test is in the rubric (ruling R2).

## Protocol deviation

§6 step 1 asks for a pre-scoring calibration gate. Both scorers should have matched the adjudicator on at least 9 of 12 non-anchor reference cells, and been within 1 on all 12, before full scoring started. **This gate was not run.** Scorers A and B went straight from reading §4.1 to blind scoring.

The adjudicator judged the gate moot after the fact, for two reasons:

- **Agreement far exceeds the targets.** It is 86.8% exact against a 60% target, 99.5% within 1 against 90%, and quadratic-weighted κ is 0.93. Every skill clears the 85% within-1 re-scoring threshold.
- **The anchors worked as the calibration set.** Both scorers read and applied anchors A1–A18, and the final matrix reproduces every anchor exactly.

The gate should still be run before any future re-scoring round (for example after a specification change), using cells that are not anchors.

## Method

1. **Adjudicated cells (diff ≥ 2).** The adjudicator read both evidence notes and the saved spec text, fetching the reference spec where it wasn't saved, and recorded a reasoned score.
2. **Audit cells and targeted review.** Protocol test: final = the lower score, unless the higher score's evidence meets the rubric level exactly. Where neither note was adequate, the adjudicator checked the spec and wrote their own evidence.
3. **Other diff-1 cells.** Every diff-1 cell at the 1/2 or 2/3 boundary in the other 19 skills was re-checked, because rulings R1–R9 bear on them.
4. **Unreviewed cells.** The 32 remaining diff-1 cells in those skills are all 0-versus-1 disagreements. They keep the lower default (0) without review; they are listed at the end.
5. **Consistency pass.** The rulings were applied across all MFLs, all Art & Design titles, the essay-based humanities, the three sciences and the seven applied subjects. Agreed cells were changed only where a ruling required it.
6. **Evidence and sources.** Each cell uses the evidence and source of the scorer whose score was kept. Where the final score matched neither scorer, or the note was wrong or thin, it uses the adjudicator's own evidence. Every score of 2 or more has evidence of 200 characters or fewer and a URL source.

Spec facts that were not in the saved texts were checked against the board pages:

- AQA 7262 Drama, 7272 Music, 7402 Biology, 7447 Environmental Science and 7582 PE: specification-at-a-glance pages;
- AQA 7552 D&T: scheme of assessment page;
- Pearson 9CN0 Chinese: specification Issue 5, saved as `specR2-chinese-9cn0.txt`;
- Ofqual GCE D&T subject-level conditions: saved as `specR2-ofqual-gce-dt-conditions.txt`.

## Rulings and the cells they affected

Full wording is in [methodology.md §4.1.1](methodology.md). "kept" means the ruling confirmed the provisional score.

| Ruling | Summary | Cells |
|---|---|---|
| R1 | Rules and anchors bind; the typical-3 table is an aid | Physics × problem-solving (2→3); Engineering × practical-making (2, kept); Construction & the Built Environment × engineering (—→3); Accounting × commercial (2→3); Criminology × critical-thinking (2→3); English Language × critical-thinking (2→3); English Language × content-production (0→1); Graphic Communication × practical-making (3→2); Photography × practical-making (3→2); Drama & Theatre × speaking (—→2) |
| R2 | What meets level 2 (any listed form; no 'separately assessed' test) | Statistics × scientific-method (0→1); Computer Science × digital-ai (1→2); Computer Science × critical-thinking (1, kept); Biology × problem-solving (1→2); Chemistry × sustainability (1, kept); Environmental Science × law-ethics (1→2); Environmental Science × writing (1→2); Environmental Science × problem-solving (1→2); Psychology × writing (1→2); Engineering × sustainability (1→2); Engineering × critical-thinking (1→2); Design & Technology (Product Design) × engineering (1→2); Design & Technology (Product Design) × law-ethics (1→2); Design & Technology (Product Design) × customer-service (—→1); Construction & the Built Environment × sustainability (1→2); Business Studies × problem-solving (1→2); Economics × sustainability (1, kept); Accounting × data-analysis (1→2); Accounting × problem-solving (1→2); Politics × law-ethics (1→2); Criminology × content-production (0→1); English Language × critical-thinking (2→3); English Language × content-production (0→1); English Literature × creativity (1, kept); English Language & Literature × creativity (2, kept); Media Studies × commercial (1→2); Dance × leadership (1→2); Physical Education × commercial (0→1); Physical Education × writing (1→2); Sport & Exercise Science × speaking (1→2); Sport & Exercise Science × critical-thinking (1→2); Food Science & Nutrition × problem-solving (1→2) |
| R3 | Score compulsory elements only; options count only if all options share the property | Further Mathematics × data-analysis (0, kept); Health & Social Care × scientific-method (0, kept); Graphic Communication × digital-ai (1, kept); Photography × digital-ai (1, kept); Drama & Theatre × speaking (—→2); Physical Education × speaking (—→1); Food Science & Nutrition × scientific-method (1, kept) |
| R4 | Rule 6: one 3 per activity across near-neighbours; neighbour 2 if a distinct assessed element | Biology × practical-making (1→2); Chemistry × practical-making (1→2); Physics × practical-making (1→2); Design & Technology (Product Design) × customer-service (—→1); Law × problem-solving (1→2); Geography × scientific-method (1→2); Graphic Communication × practical-making (3→2); Photography × practical-making (3→2) |
| R5 | Environmental Science × scientific-method = 3 (required practicals) | Environmental Science × scientific-method (2→3); Geography × scientific-method (1→2) |
| R6 | Numeracy: sub-10% minimum = 1; Ofqual minimums count; GLH share for applied quals | Engineering × numeracy (2, kept); Construction & the Built Environment × numeracy (2, kept); Music × numeracy (0, kept) |
| R7 | The 20% bar means ≥ 20%; a 60-GLH (16.7%) unit scores 2 | Engineering × practical-making (2, kept) |
| R8 | Only 'doing' parts of applied units count towards the 20% bar (rule 1) | Criminology × scientific-method (1, kept); Sport & Exercise Science × speaking (1→2) |
| R9 | Self-management: internal units ≥ 20% GLH = 2; set tasks are exams; live practical = 2 | Applied Science × self-management (1→2); Engineering × self-management (1→2); Health & Social Care × self-management (1→2); Construction & the Built Environment × self-management (1→2); English Language & Literature × self-management (2, kept); Physical Education × self-management (1→2) |
| R10 | Food Science & Nutrition = WJEC Applied Diploma, mandatory Units 1–2 | Food Science & Nutrition × scientific-method (1, kept) |
| R11 | Writing levels 3 / 2 / 1 | Computer Science × writing (1→2); Biology × writing (1→2); Applied Science × writing (1→2); Environmental Science × writing (1→2); Psychology × writing (1→2); Engineering × writing (1→2); Health & Social Care × writing (1→2); Construction & the Built Environment × writing (1→2); English Language & Literature × writing (3, kept); French × writing (2→3); Spanish × writing (2→3); German × writing (2→3); Chinese (Mandarin) × writing (2→3); Film Studies × writing (2→3); Media Studies × writing (2→3); Music × writing (—→2); Music Technology × writing (0→2); Dance × writing (2→3); Physical Education × writing (1→2); Sport & Exercise Science × writing (0→2); Food Science & Nutrition × writing (1→2) |
| R12 | Teamwork: 2+ needs assessed group work; 1 needs a spec hook | Mathematics × teamwork (0, kept); Further Mathematics × teamwork (0, kept); Statistics × teamwork (0, kept); Computer Science × teamwork (0, kept); Biology × teamwork (0, kept); Chemistry × teamwork (0, kept); Physics × teamwork (0, kept); Applied Science × teamwork (0→1); Environmental Science × teamwork (0, kept); Psychology × teamwork (0, kept); Sport & Exercise Science × teamwork (0, kept) |
| R13 | Problem-solving: solving set problems, not discursive evaluation | Biology × problem-solving (1→2); Physics × problem-solving (2→3); Environmental Science × problem-solving (1→2); Business Studies × problem-solving (1→2); Accounting × problem-solving (1→2); Law × problem-solving (1→2); Politics × problem-solving (0, kept); Sociology × problem-solving (0, kept); Philosophy × problem-solving (0, kept); Religious Studies × problem-solving (0, kept); Criminology × problem-solving (0→1); Art & Design (Fine Art) × problem-solving (0→1); Photography × problem-solving (0→1); Textile Design × problem-solving (0→1); Film Studies × problem-solving (0→1); Media Studies × problem-solving (0→1); Music Technology × problem-solving (0→2); Drama & Theatre × problem-solving (0→1); Food Science & Nutrition × problem-solving (1→2) |
| R14 | Digital & AI: 2 named assessed content; 1 required tool use; media software → content-production | Mathematics × digital-ai (0→1); Further Mathematics × digital-ai (0→1); Statistics × digital-ai (0→1); Computer Science × digital-ai (1→2); Biology × digital-ai (0→1); Chemistry × digital-ai (0→1); Physics × digital-ai (0→1); Applied Science × digital-ai (0→1); Environmental Science × digital-ai (0→1); Accounting × digital-ai (0, kept); English Language × digital-ai (0→1); Chinese (Mandarin) × digital-ai (0→1); Graphic Communication × digital-ai (1, kept); Photography × digital-ai (1, kept); Film Studies × digital-ai (0→1); Music × digital-ai (0→1); Physical Education × digital-ai (0→1); Sport & Exercise Science × digital-ai (0→1) |
| R15 | Critical-thinking via AOs: an unbundled evaluation AO ≥ 20% is core; bundled or appraisal AOs are not (Checkpoint 2 follow-up) | Psychology × critical-thinking (2→3); Business Studies × critical-thinking (2→3); Economics × critical-thinking (2→3); Accounting × critical-thinking (2→3); English Literature × creativity (1, kept); English Language & Literature × critical-thinking (3, kept); English Language & Literature × creativity (2, kept); French × critical-thinking (2, kept); Spanish × critical-thinking (2, kept); German × critical-thinking (2, kept); Chinese (Mandarin) × critical-thinking (2, kept); Physical Education × critical-thinking (2→3) |

Where a ruling touched agreed cells without changing them, the confirmation was not logged cell by cell. Examples:

- R3: Music × teamwork 1, Politics × sustainability 0.
- R6: PE × numeracy 1, D&T × numeracy 1 (Ofqual minimum = 7.5% of total marks).
- R7: Engineering × teamwork and leadership 2, Construction × law-ethics 2.
- R8: Sport & Exercise Science × leadership 2.
- R9: Criminology × self-management 2; all four MFLs × self-management 2 (Chinese Paper 3 Task 2 is an independent research project, which confirms scorer A's uncertain 2).
- R11: Drama, Economics and Business × writing 2; Chemistry and Physics × writing 1; D&T × writing 1.

## Adjudicated cells (difference of 2 or more)

None of these had a provisional score. Compared with the lower of A and B, all five moved up: D&T × customer-service 0→1, Construction × engineering 1→3, Music × writing 0→2, Drama × speaking 1→2 and PE × speaking 0→1.

| Subject | Skill | A | B | Prov. | Final | Rulings | Reason |
|---|---|---|---|---|---|---|---|
| Design & Technology (Product Design) | `customer-service` | 0 | 2 | — | **1** | R2,R4 | Understanding user/client needs is compulsory (user-centred design, NEA client feedback) but it is design research, credited at 3 under creativity; serving or helping customers is not required or assessed. Not 0 (a client is consulted), not 2. |
| Construction & the Built Environment | `engineering` | 1 | 3 | — | **3** | R1 | Unit 1 (33%) assesses applying forces/materials principles to structural members, heat, sound and light; Unit 2 (33%) assesses designing a building to a brief. The skill is what the qualification is largely about. A's 'design not assessed' is contradicted by Unit 2. |
| Music | `writing` | 0 | 2 | — | **2** | R11 | AQA 7272 Component 1 (40%) has a 34-mark analysis section and a 30-mark essay (Section C): extended writing is a regular assessed feature, so not 0. Not 3: the DfE allows discussion 'in writing and/or through speech', so writing is not a named requirement. |
| Drama & Theatre | `speaking` | 1 | 3 | — | **2** | R3,R1 | Performing is optional: AQA lets students contribute as performer, designer or director (DfE p.3 defines all three as theatre makers), so the performer route cannot give 3. Compulsory: the Component 1 exam applies performers' vocal interpretation to set plays, and devising is collaborative and oral. That is 2, not class-discussion 1. |
| Physical Education | `speaking` | 0 | 2 | — | **1** | R3 | The NEA allows 'written/verbal analysis' and performer or coach roles: speaking is used but not required of every candidate. B's 2 relies on an optional form; A's 0 ignores the verbal option and coaching route. |

**Rubric ambiguities these cells exposed**, now tightened:

- Optional performance roles (Drama designer route, PE coach route and "written/verbal" analysis): R3.
- Whether an aid-table entry ("Drama: typical 3") can override the compulsory-elements rule: R1.
- Whether understanding user needs in design counts as customer service: no. It is credited under creativity (R4).

## Audit sample (13 diff-1 cells)

9 of the 13 moved up. The protocol's 10% random audit was meant to find exactly this, and it is why the targeted review below was widened to every 1/2 and 2/3 boundary cell.

| Subject | Skill | A | B | Prov. | Final | Rulings | Reason |
|---|---|---|---|---|---|---|---|
| Statistics | `scientific-method` | 1 | 0 | 0 | **1** | R2 | Higher (1) meets level 1: DfE names 'research methodologies used in experiments and surveys' and hypothesis testing (p.3, p.6); no practicals, so not 2. |
| Biology | `teamwork` | 0 | 1 | 0 | 0 | R12 | No collaborative activity in the DfE content or AQA spec; B gave no evidence. Classroom group work alone is not a spec hook. |
| Physics | `teamwork` | 0 | 1 | 0 | 0 | R12 | As Biology: no spec hook for collaboration. |
| Environmental Science | `writing` | 1 | 2 | 1 | **2** | R11,R2 | Higher meets level 2: AQA 7447 lists 'extended writing questions' in both papers (100% exam). 'Not separately assessed' is not a test for 2. |
| Engineering | `critical-thinking` | 1 | 2 | 1 | **2** | R2 | Higher meets level 2: Unit 3 (33%) assessment outcome AO4 'evaluate engineering product design ideas, manufacturing processes and other design choices'. Matches the other BTECs (Applied Science, HSC, Construction all 2). |
| Construction & the Built Environment | `writing` | 1 | 2 | 1 | **2** | R11 | Higher meets level 2: mandatory internal Units 4 and 5 are evidenced by written reports (report to a client; report evaluating site safety). |
| Accounting | `problem-solving` | 2 | 1 | 1 | **2** | R13,R2 | Higher meets level 2: the DfE content (not only the aims) requires students to 'develop a logical and methodical approach to problem solving' (p.9). |
| Politics | `problem-solving` | 1 | 0 | 0 | 0 | R13 | Exam-only discursive evaluation, which belongs to critical-thinking (3). A gave no evidence; no problem-solving hook in the DfE content. |
| English Language | `critical-thinking` | 2 | 3 | 2 | **3** | R1,R2 | Higher meets level 3: critical evaluation of language theories and attitudes runs through both 40% papers, plus an independent language investigation in the NEA. Brings it in line with English Literature and English Language & Literature (both 3). |
| Textile Design | `problem-solving` | 1 | 0 | 0 | **1** | R13 | Art titles share one assessment model; Graphic Communication is already 1 (agreed). Refining work in response to a starting point is incidental problem-solving; the 3 sits in creativity. |
| Music | `numeracy` | 0 | 1 | 0 | 0 | R6 | B's 1 has no evidence. Counting rhythm and metre is not calculation or mathematical modelling; no maths is required. |
| Physical Education | `commercial` | 1 | 0 | 0 | **1** | R2 | Higher meets level 1: 'impact of commercialisation on physical activity and sport' is compulsory A level content, studied as knowledge (rule 1). |
| Sport & Exercise Science | `critical-thinking` | 1 | 2 | 1 | **2** | R2 | Higher meets level 2: mandatory Unit 6 requires evaluating practices, measures and the impact of own coaching (B.D2, CD.D3), and the report evidence reflects on it. Consistent with the other BTECs at 2. |

## Targeted review: digital-ai, problem-solving, writing, teamwork

Every diff-1 cell in these four skills that is not already in the audit sample above.

### `digital-ai` (17 cells; 14 changed)

| Subject | Skill | A | B | Prov. | Final | Rulings | Reason |
|---|---|---|---|---|---|---|---|
| Mathematics | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: DfE requires that graphing tools and spreadsheets 'must permeate the study' of the subject; required tool use, not assessed as a skill. |
| Further Mathematics | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: DfE requires that graphing tools and spreadsheets 'must permeate the study' of the subject; required tool use, not assessed as a skill. |
| Statistics | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: DfE 'Use of technology' section requires technology/spreadsheets to explore data; not assessed as a skill. |
| Computer Science | `digital-ai` | 2 | 1 | 1 | **2** | R14,R2 | Raised to 2: named compulsory content on capturing, exchanging and managing data 'to produce information for a particular purpose' and the 'opportunities and risks of digital technology'; the aid table allows CS to reach 2. |
| Biology | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: DfE Appendix 5b (directly assessed) includes 'use appropriate software and tools to process data, carry out research and report findings'. One bullet, so not 2. |
| Chemistry | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: DfE Appendix 5b (directly assessed) includes 'use appropriate software and tools to process data, carry out research and report findings'. One bullet, so not 2. |
| Physics | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: DfE Appendix 5b (directly assessed) includes 'use appropriate software and tools to process data, carry out research and report findings'. One bullet, so not 2. |
| Applied Science | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: data-logging software and spreadsheets are signposted in practical units; incidental. |
| Environmental Science | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: DfE requires 'appropriate methodology, including information and communication technology (ICT)' (p.4). |
| Accounting | `digital-ai` | 1 | 0 | 0 | 0 | R14 | Kept 0: the DfE content has no requirement to use digital tools; 'systems for recording' is not digital-specific. |
| Chinese (Mandarin) | `digital-ai` | 0 | 1 | 0 | **1** | R14 | Raised to 1 to match French, Spanish and German: the shared DfE MFL content requires use of 'online media' and 'the internet' as sources (p.3, p.6). |
| Graphic Communication | `digital-ai` | 2 | 1 | 1 | 1 | R14,R3 | Kept 1: DfE says students 'can work entirely in digital media or entirely in non-digital media' (optional), and production software counts under content-production (aid table). |
| Photography | `digital-ai` | 2 | 1 | 1 | 1 | R14,R3 | Kept 1: DfE says students 'can work entirely in digital media or entirely in non-digital media' (optional), and production software counts under content-production (aid table). |
| Film Studies | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: DfE requires 'the significance of the digital in film' and a 'digitally photographed storyboard' in the NEA; matches Media Studies (1). |
| Music | `digital-ai` | 0 | 1 | 0 | **1** | R14 | Raised to 1: DfE aim 'develop awareness of music technologies and their use in the creation and presentation of music'; production via technology is an option. |
| Physical Education | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: 'the role of technology in physical activity and sport' and 'the use of technology to analyse' it are compulsory content (studied, rule 1). |
| Sport & Exercise Science | `digital-ai` | 1 | 0 | 0 | **1** | R14 | Raised to 1: Unit 6 content A5 'Technology and sports professionals' and a video recording of the delivered session. |

### `problem-solving` (16 cells; 13 changed)

| Subject | Skill | A | B | Prov. | Final | Rulings | Reason |
|---|---|---|---|---|---|---|---|
| Biology | `problem-solving` | 2 | 1 | 1 | **2** | R13,R2 | Raised to 2: A's evidence meets level 2, 'solve problems set in practical contexts' is an examined skill (Appendix 5a). Same as Chemistry. |
| Physics | `problem-solving` | 3 | 2 | 2 | **3** | R13,R1 | Raised to 3: both scorers say multi-step quantitative problem solving is central to all papers, which is the level-3 test (core to assessment). Aid table agrees; the Maths precedent allows numeracy 3 alongside. |
| Environmental Science | `problem-solving` | 1 | 2 | 1 | **2** | R13,R2 | Raised to 2: DfE lists 'solve problems set in practical contexts' among skills assessed (indirectly) in the papers, as for the sciences. |
| Business Studies | `problem-solving` | 2 | 1 | 1 | **2** | R13,R2 | Raised to 2: the DfE content requires students to 'identify', 'investigate, analyse and evaluate business opportunities and problems' and 'make justifiable decisions'. |
| Law | `problem-solving` | 2 | 1 | 1 | **2** | R13,R4 | Raised to 2: the DfE requires students to 'identify and breakdown' legal rules and apply them 'to a hypothetical scenario' (problem questions). Rule 6 bars only a second 3; B's rule-6 reason does not apply to a 2. |
| Sociology | `problem-solving` | 1 | 0 | 0 | 0 | R13 | Kept 0: exam-only discursive evaluation (critical-thinking 3). Where 'problems' appear they are topics (e.g. RS's problem of evil), not a problem-solving task. |
| Philosophy | `problem-solving` | 1 | 0 | 0 | 0 | R13 | Kept 0: exam-only discursive evaluation (critical-thinking 3). Where 'problems' appear they are topics (e.g. RS's problem of evil), not a problem-solving task. |
| Religious Studies | `problem-solving` | 1 | 0 | 0 | 0 | R13 | Kept 0: exam-only discursive evaluation (critical-thinking 3). Where 'problems' appear they are topics (e.g. RS's problem of evil), not a problem-solving task. |
| Criminology | `problem-solving` | 1 | 0 | 0 | **1** | R13 | Raised to 1: Unit 1 requires learners to 'plan a campaign for change relating to crime' to a brief (AC3.1), which is incidental problem-solving. |
| Art & Design (Fine Art) | `problem-solving` | 1 | 0 | 0 | **1** | R13 | Raised to 1: the four Art titles share one assessment model and Graphic Communication is already 1; responding to a set starting point is incidental. |
| Photography | `problem-solving` | 1 | 0 | 0 | **1** | R13 | Raised to 1: the four Art titles share one assessment model and Graphic Communication is already 1; responding to a set starting point is incidental. |
| Film Studies | `problem-solving` | 1 | 0 | 0 | **1** | R13 | Raised to 1: the NEA production (short film or screenplay) works to a brief; incidental. |
| Media Studies | `problem-solving` | 1 | 0 | 0 | **1** | R13 | Raised to 1: the NEA cross-media production must meet a set brief; incidental. |
| Music Technology | `problem-solving` | 1 | 0 | 0 | **2** | R13 | Raised to 2 (above both scorers): Component 4 (35%) requires students to 'correct and then combine' faulty audio/MIDI materials, and content includes 'correcting problems including sibilance, noise and resonances'. |
| Drama & Theatre | `problem-solving` | 1 | 0 | 0 | **1** | R13 | Raised to 1: devising from a stimulus is incidental problem-solving; matches Dance (1). |
| Food Science & Nutrition | `problem-solving` | 2 | 1 | 1 | **2** | R13,R2 | Raised to 2: the assessments are scenario briefs (e.g. plan safe food for a named event and group; meet a group's nutritional needs) that learners must solve. The rationale sentence A cited would not be enough on its own. |

### `writing` (12 cells; 12 changed)

| Subject | Skill | A | B | Prov. | Final | Rulings | Reason |
|---|---|---|---|---|---|---|---|
| Psychology | `writing` | 1 | 2 | 1 | **2** | R11,R2 | Raised to 2: B's evidence meets level 2 (16-mark extended-writing questions in all three papers). A's 'minority of marks' is not the level-2 test. |
| Engineering | `writing` | 1 | 2 | 1 | **2** | R11 | Raised to 2: mandatory internal Unit 2 is evidenced by a written report; the Unit 3 set task requires communicating and justifying the design. |
| Health & Social Care | `writing` | 1 | 2 | 1 | **2** | R11 | Raised to 2: mandatory internal Unit 5 (25%) is evidenced by written reports on case studies; Unit 2's exam has long-answer questions. |
| French | `writing` | 2 | 3 | 2 | **3** | R11 | Raised to 3: Paper 2 Writing (20%) exists to assess writing directly, the DfE requires students to 'respond critically in writing', and Paper 1 adds translation into the language. |
| Spanish | `writing` | 2 | 3 | 2 | **3** | R11 | Raised to 3: Paper 2 Writing (20%) exists to assess writing directly, the DfE requires students to 'respond critically in writing', and Paper 1 adds translation into the language. |
| German | `writing` | 2 | 3 | 2 | **3** | R11 | Raised to 3: Paper 2 Writing (20%) exists to assess writing directly, the DfE requires students to 'respond critically in writing', and Paper 1 adds translation into the language. |
| Film Studies | `writing` | 2 | 3 | 2 | **3** | R11 | Raised to 3: two written exams (70%) and the DfE requires 'communicating ideas effectively through discursive argument'. Matches the essay-based humanities. |
| Media Studies | `writing` | 2 | 3 | 2 | **3** | R11 | Raised to 3: the DfE requires 'sustained discursive writing' and two written papers make up 70%. |
| Music Technology | `writing` | 0 | 1 | 0 | **2** | R11 | Raised to 2 (above both scorers): Component 3 (25%) has a 35-mark essay section and Component 4 (35%) a 20-mark essay, so extended writing is a regular exam feature. |
| Dance | `writing` | 2 | 3 | 2 | **3** | R11 | Raised to 3: Component 2 (50%) is a written exam and the DfE names 'extended writing skills' and 'written communication' as required. Drama stays 2 because its DfE content says nothing about writing. |
| Physical Education | `writing` | 1 | 2 | 1 | **2** | R11,R2 | Raised to 2: every section of both papers includes 'extended writing' questions (AQA 7582). |
| Sport & Exercise Science | `writing` | 0 | 1 | 0 | **2** | R11 | Raised to 2 (above both scorers): mandatory Unit 6 is evidenced by three written reports and a coaching plan. Brings it in line with the other applied subjects. |

### `teamwork` (9 cells; 1 changed)

| Subject | Skill | A | B | Prov. | Final | Rulings | Reason |
|---|---|---|---|---|---|---|---|
| Mathematics | `teamwork` | 0 | 1 | 0 | 0 | R12 | Kept 0: B's 1 has no evidence and the specification has no collaborative activity. |
| Further Mathematics | `teamwork` | 0 | 1 | 0 | 0 | R12 | Kept 0: B's 1 has no evidence and the specification has no collaborative activity. |
| Statistics | `teamwork` | 0 | 1 | 0 | 0 | R12 | Kept 0: B's 1 has no evidence and the specification has no collaborative activity. |
| Computer Science | `teamwork` | 0 | 1 | 0 | 0 | R12 | Kept 0: B's own note says the NEA is completed individually; no spec hook. |
| Chemistry | `teamwork` | 0 | 1 | 0 | 0 | R12 | Kept 0: B's 1 has no evidence and the specification has no collaborative activity. |
| Applied Science | `teamwork` | 0 | 1 | 0 | **1** | R12 | Raised to 1: Unit 2 learning aim D2 'Interpersonal skills: communication and co-operation in the scientific working environment' is reflected on in the assessed review. Group work itself is not assessed, so not 2. |
| Environmental Science | `teamwork` | 0 | 1 | 0 | 0 | R12 | Kept 0: B's note ('fieldwork is often done in groups') describes practice, not the spec. Unlike Geography, the DfE does not mention group data collection. |
| Psychology | `teamwork` | 0 | 1 | 0 | 0 | R12 | Kept 0: B's 1 has no evidence and the specification has no collaborative activity. |
| Sport & Exercise Science | `teamwork` | 0 | 1 | 0 | 0 | R12 | Kept 0: coaching athletes is leading, not working as a team member (B's own note); group exercise is an optional unit. |

## Other diff-1 cells re-checked under a ruling

| Subject | Skill | A | B | Prov. | Final | Rulings | Reason |
|---|---|---|---|---|---|---|---|
| Further Mathematics | `data-analysis` | 0 | 1 | 0 | 0 | R3 | Kept 0: statistics is one optional applied strand. |
| Computer Science | `critical-thinking` | 2 | 1 | 1 | 1 | R2 | Kept 1: arguing algorithm correctness is logical/mathematical reasoning, like Mathematics proof (critical-thinking 1). |
| Biology | `practical-making` | 1 | 2 | 1 | **2** | R4 | Raised to 2: DfE Appendix 5b/5c directly assess 'safely and correctly use a range of practical equipment and materials' and a named apparatus/technique list, which is distinct from the investigative method (3). Rule 6 allows 2, and this matches Applied Science (2). |
| Chemistry | `practical-making` | 1 | 2 | 1 | **2** | R4 | Raised to 2: DfE Appendix 5b/5c directly assess 'safely and correctly use a range of practical equipment and materials' and a named apparatus/technique list, which is distinct from the investigative method (3). Rule 6 allows 2, and this matches Applied Science (2). |
| Chemistry | `sustainability` | 1 | 2 | 1 | 1 | R2 | Kept 1: atom economy and industrial processes are contexts inside other topics, not a dedicated sustainability item. |
| Physics | `practical-making` | 1 | 2 | 1 | **2** | R4 | Raised to 2: DfE Appendix 5b/5c directly assess 'safely and correctly use a range of practical equipment and materials' and a named apparatus/technique list, which is distinct from the investigative method (3). Rule 6 allows 2, and this matches Applied Science (2). |
| Applied Science | `self-management` | 2 | 1 | 1 | **2** | R9 | Raised to 2: Unit 2 (90 GLH) is internally assessed, and every optional unit is internal: 41.7% internally assessed. |
| Environmental Science | `scientific-method` | 3 | 2 | 2 | **3** | R5 | Raised to 3: the DfE requires practical work (4 fieldwork days or 2 days + 12 lab activities; 6 sampling techniques and 6 methodologies), and research methods are examined in both papers. A6's cap applies where practicals are not required. |
| Environmental Science | `law-ethics` | 2 | 1 | 1 | **2** | R2 | Raised to 2: a dedicated compulsory item, 'legislation/protocols: protection of habitats and species, trade controls and regulation of sustainable exploitation' (p.6). |
| Engineering | `numeracy` | 2 | 3 | 2 | 2 | R6 | Kept 2: Unit 1 is 120/360 GLH = 33% mathematical, inside the 10–39% band. |
| Engineering | `practical-making` | 3 | 2 | 2 | 2 | R7,R1 | Kept 2: hands-on making is Unit 2 (60 GLH = 16.7%); the Unit 3 set task is a written design and planning task. Below the 20% bar despite the aid table. |
| Engineering | `sustainability` | 1 | 2 | 1 | **2** | R2 | Raised to 2: Unit 3 (33%) names 'sustainability (carbon footprint)' and 'sustainability issues throughout the product lifecycle' as content, and grade descriptors assess it. |
| Engineering | `self-management` | 2 | 1 | 1 | **2** | R9 | Raised to 2: Unit 2 (60 GLH) plus the optional unit (all internal) = 33% internally assessed; the Unit 3 set task counts as an exam. |
| Design & Technology (Product Design) | `engineering` | 1 | 2 | 1 | **2** | R2 | Raised to 2 with the adjudicator's own evidence. B's 'structures, mechanisms' is Design Engineering content, but Product Design requires materials' performance characteristics, applied in the NEA. |
| Design & Technology (Product Design) | `law-ethics` | 2 | 1 | 1 | **2** | R2 | Raised to 2: dedicated compulsory items on the 'regulatory and legislative framework for health and safety', IP and patents, and legal requirements. |
| Health & Social Care | `scientific-method` | 0 | 1 | 0 | 0 | R3 | Kept 0: Anatomy and Physiology is optional. |
| Health & Social Care | `self-management` | 2 | 1 | 1 | **2** | R9 | Raised to 2: Unit 5 (90 GLH) is internally assessed, and every optional unit is internal: 41.7% internally assessed. |
| Construction & the Built Environment | `numeracy` | 2 | 3 | 2 | 2 | R6 | Kept 2: Unit 1 is 120/360 GLH = 33%, inside the 10–39% band. |
| Construction & the Built Environment | `sustainability` | 2 | 1 | 1 | **2** | R2 | Raised to 2: Unit 2 (33%) has a dedicated content area 'C4 Sustainability' (alternative energy, low embodied energy materials, SuDS, BREEAM). |
| Construction & the Built Environment | `self-management` | 2 | 1 | 1 | **2** | R9 | Raised to 2: Units 4 and 5 (60 + 60 GLH) = 33% internally assessed; the Unit 2 set task counts as an exam. |
| Economics | `sustainability` | 1 | 2 | 1 | 1 | R2 | Kept 1: 'externalities' is a sub-item of market failure, not dedicated sustainability content. |
| Accounting | `data-analysis` | 1 | 2 | 1 | **2** | R2 | Raised to 2: DfE requires students to 'calculate and interpret accounting ratios' and interpret variances (required skills). Matches Business and Economics (2). |
| Accounting | `commercial` | 2 | 3 | 2 | **3** | R1 | Raised to 3: the whole content is how organisations earn and manage money, costs and financial information. The aid table's '2–3' does not bar this. |
| Geography | `scientific-method` | 2 | 1 | 1 | **2** | R4,R5 | Raised to 2: the NEA requires designing field methodology, sampling and data collection (A). Capped at 2 because the NEA's 3 sits in critical-thinking (rule 6). |
| Politics | `law-ethics` | 1 | 2 | 1 | **2** | R2 | Raised to 2: dedicated compulsory content on 'the main sources of rights in the UK today (including relevant contemporary legislation)', examined in essays. |
| Criminology | `scientific-method` | 2 | 1 | 1 | 1 | R8 | Kept 1: learners evaluate others' forensic techniques on case studies; they do not plan or carry out investigations (rule 1). |
| Criminology | `critical-thinking` | 3 | 2 | 2 | **3** | R1 | Raised to 3: evaluation runs through every unit's criteria, and Unit 3 (25%) is examining evidence 'for validity and drawing conclusions on criminal cases'. Matches Sociology and Law. |
| Criminology | `content-production` | 0 | 1 | 0 | **1** | R2 | Raised to 1 after checking the spec: Unit 1 AC3.2 'Design materials for use in campaigning for change'. |
| Media Studies | `commercial` | 1 | 2 | 1 | **2** | R2 | Raised to 2: Media Industries is one of four compulsory framework areas, covering ownership, 'economic factors, including commercial…funding' and marketing. |
| Dance | `leadership` | 1 | 2 | 1 | **2** | R2 | Raised to 2: A level requires a group choreography for 3–5 dancers, developed 'in communication with other dancers', and a DfE aim names leadership. |
| Physical Education | `self-management` | 1 | 2 | 1 | **2** | R9 | Raised to 2: the 30% NEA is a live assessed practical performance, which rule 4 names as a route to 2. |
| Sport & Exercise Science | `speaking` | 1 | 2 | 1 | **2** | R2,R8 | Raised to 2: D.P6 requires learners to deliver a coaching session to athletes, a directly assessed live-instruction task. |
| Food Science & Nutrition | `scientific-method` | 1 | 2 | 1 | 1 | R3,R10 | Kept 1: the experimenting unit (Unit 3) is optional; the mandatory units teach food science as content. |

## Consistency pass: agreed cells changed

Both scorers gave the same score to these cells, but it breaks a ruling or a like-for-like comparison within a subject group.

| Subject | Skill | A | B | Prov. | Final | Rulings | Reason |
|---|---|---|---|---|---|---|---|
| Computer Science | `writing` | 1 | 1 | 1 | **2** | R11 | Changed 1 to 2: the 20% NEA is assessed through a written project report (analysis, design, testing, evaluation), which both scorers note. D&T stays 1 (portfolio mostly visual). |
| Biology | `writing` | 1 | 1 | 1 | **2** | R11 | Changed 1 to 2: AQA 7402 has 15 marks of extended response in Paper 1 and a 25-mark essay in Paper 3, the same kind of feature that gives Psychology, PE and Env Sci 2. Chemistry and Physics have no such question type (1). |
| Applied Science | `writing` | 1 | 1 | 1 | **2** | R11 | Changed 1 to 2: mandatory internal Unit 2 is evidenced by written reports (e.g. 'a report evaluating the accuracy of…'). Brings it in line with the other applied subjects. |
| Chinese (Mandarin) | `writing` | 2 | 2 | 2 | **3** | R11 | Changed 2 to 3 to match the other MFLs: Pearson Paper 2 (30%) is extended writing in Chinese plus translation into Chinese. English comprehension answers are still writing. |
| Graphic Communication | `practical-making` | 3 | 3 | 3 | **2** | R4,R1 | Changed 3 to 2 (rule 6): the making activity is producing media, already 3 under content-production. Work may be wholly digital (DfE para 8), so there is no separate hand-making requirement. Equipment and materials handling is regularly assessed, so 2. |
| Photography | `practical-making` | 3 | 3 | 3 | **2** | R4,R1 | Changed 3 to 2 (rule 6): the making activity is producing media, already 3 under content-production. Work may be wholly digital (DfE para 8), so there is no separate hand-making requirement. Equipment and materials handling is regularly assessed, so 2. |
| Food Science & Nutrition | `writing` | 1 | 1 | 1 | **2** | R11 | Changed 1 to 2: Unit 1's internal assessment needs written evidence, and Unit 2's 8-hour CAT produces a written food-safety training resource and risk assessment. |

**Groups checked and left as they are:**

- **MFLs:** French, Spanish, German and Chinese are now identical in every skill.
- **Art & Design:** the four titles differ only where the DfE title content differs. Practical-making and content-production differ for Photography and Graphic Communication (R4).
- **Essay-based humanities:** History, Politics, Sociology, Philosophy, RS, Law, Geography and the three English subjects all score writing 3 and critical-thinking 3.
- **Sciences:** Biology, Chemistry and Physics match on scientific-method 3, practical-making 2, digital-ai 1 and teamwork 0. They differ only where the spec differs: numeracy (A2/A3), Physics problem-solving 3, and Biology writing 2 (its essay).
- **Applied subjects:** all seven score writing 2 and self-management 2.

## Counts

Cells moved from provisional, by skill (the 5 adjudicated cells excluded):

| Skill | Up | Down | Net |
|---|---|---|---|
| `data-analysis` | 1 | 0 | +1 |
| `digital-ai` | 14 | 0 | +14 |
| `scientific-method` | 3 | 0 | +3 |
| `engineering` | 1 | 0 | +1 |
| `practical-making` | 3 | 2 | +1 |
| `sustainability` | 2 | 0 | +2 |
| `commercial` | 3 | 0 | +3 |
| `leadership` | 1 | 0 | +1 |
| `law-ethics` | 3 | 0 | +3 |
| `writing` | 19 | 0 | +19 |
| `speaking` | 1 | 0 | +1 |
| `teamwork` | 1 | 0 | +1 |
| `self-management` | 5 | 0 | +5 |
| `critical-thinking` | 4 | 0 | +4 |
| `problem-solving` | 15 | 0 | +15 |
| `content-production` | 1 | 0 | +1 |
| **Total** | **77** | **2** | **+75** |

By stage:

| Stage | Cells | Up | Down | Unchanged |
|---|---|---|---|---|
| Adjudicated (diff ≥ 2) | 5 | n/a | n/a | n/a (no provisional) |
| Audit sample | 13 | 9 | 0 | 4 |
| Targeted review (4 skills) | 54 | 40 | 0 | 14 |
| Re-checked under a ruling | 33 | 23 | 0 | 10 |
| Consistency (agreed cells) | 7 | 5 | 2 | 0 |

## Unreviewed diff-1 cells (32, kept at 0)

These are all 0-versus-1 disagreements outside the four target skills. No ruling moves them across the 1/2 boundary, and a 1 only affects fit through `C = max`. They keep the protocol's lower default: 0.

Four of them look like a 1 on the rubric text, so they should go first in any follow-up audit:

- Mathematics × engineering (compulsory mechanics);
- Health & Social Care × speaking (communication techniques applied to case studies, rule 1);
- Sport & Exercise Science × customer-service;
- Textile Design × sustainability.

All 32 cells: Mathematics × `engineering` (A 1, B 0); Mathematics × `commercial` (A 1, B 0); Further Mathematics × `engineering` (A 1, B 0); Statistics × `commercial` (A 1, B 0); Statistics × `creativity` (A 1, B 0); Computer Science × `engineering` (A 1, B 0); Chemistry × `engineering` (A 1, B 0); Chemistry × `commercial` (A 1, B 0); Applied Science × `engineering` (A 1, B 0); Environmental Science × `commercial` (A 1, B 0); Health & Social Care × `numeracy` (A 0, B 1); Health & Social Care × `speaking` (A 0, B 1); Business Studies × `sustainability` (A 1, B 0); Accounting × `sustainability` (A 1, B 0); Accounting × `leadership` (A 0, B 1); Law × `care-empathy` (A 0, B 1); Geography × `commercial` (A 1, B 0); Geography × `content-production` (A 1, B 0); History × `data-analysis` (A 1, B 0); History × `creativity` (A 0, B 1); Politics × `leadership` (A 0, B 1); Sociology × `care-empathy` (A 1, B 0); Criminology × `speaking` (A 0, B 1); Textile Design × `sustainability` (A 0, B 1); Film Studies × `commercial` (A 0, B 1); Media Studies × `data-analysis` (A 0, B 1); Music × `content-production` (A 1, B 0); Music Technology × `scientific-method` (A 1, B 0); Dance × `practical-making` (A 0, B 1); Sport & Exercise Science × `practical-making` (A 1, B 0); Sport & Exercise Science × `care-empathy` (A 0, B 1); Sport & Exercise Science × `customer-service` (A 1, B 0).

## Concerns for the project owner

1. **The matrix is now more generous than the provisional merge.** After the follow-up there are more 2s (158 against 130) and more 3s (97 against 81). All changes follow a written ruling, but tier cut-offs and fairness checks F1–F3 must be re-run (§7 step 6).
2. **Writing discriminates less.** 17 subjects score 3 and 21 score 2; only Maths, Further Maths, Statistics, Chemistry, Physics, Accounting and D&T score 1. That reflects how much A levels really assess extended writing. But almost every combination will now show writing as "reinforced", so its weight in fit comes mainly from D.
3. **Possible under-scores left in agreed cells.** These were not changed, because no ruling compels a change. (Psychology, Economics and Business × critical-thinking were on this list; the Checkpoint 2 follow-up raised them to 3 under R15.)
   - Health & Social Care × problem-solving (1), now one below Food Science & Nutrition (2) for similar scenario-planning tasks.
   - Food Science & Nutrition × critical-thinking (1), below the other applied subjects (2).
   - D&T × writing (1). The design portfolio is mostly visual, but it is a judgement call.
4. **Ten cells end outside both scorers' range.** Seven are the agreed cells changed in the consistency pass above. The other three are diff-1 cells raised above both scorers: Music Technology × writing and × problem-solving (both 2), and Sport & Exercise Science × writing (2). Each of the three rests on quoted spec text (essay sections; the correction task in Component 4; the Unit 6 report evidence). Scorer B confirmed Music Technology only through a web search, not the full specification.
5. **Criminology weighting is unsettled.** Scorer A used the 50/50 internal/external split; scorer B used a 60/40 split from September 2026, based on a WJEC newsletter. The saved spec has four 90-GLH units. Self-management (2) holds under either. Critical-thinking (3) partly rests on internal Unit 3, so re-check it if the 2026 revision restructures the units.
6. **Facts taken from scorer notes, not re-fetched.** These rely on the scorers' reading of board pages rather than a saved document:
   - OCR H446's NEA written report (the PDF was too large to fetch);
   - AQA 7182 Psychology's 16-mark essays;
   - AQA 7702 English Language's NEA investigation.
7. **Some skills stay hard to reach, by design.**
   - Leadership: only Business, D&T, Engineering, PE, Sport & Exercise Science and Dance score 2, and nothing scores 3.
   - Customer-service: 2 only in Business and Health & Social Care.
   - Digital & AI: Computer Science 2 is the maximum. Nothing develops AI literacy (J8, J9).
8. **Page references follow the saved-text convention.** For board specs saved during R2, `p.N` is the PDF page index of the saved file. For AQA web pages, the source is the page URL, since there are no page numbers.

## Checkpoint 2 follow-up

The project owner asked for rulings on a further set of cells, decided strictly on the specification text and the rubric (§4.1, §4.1.1), without regard to rankings. One new ruling came out of it: §4.1.1 item 15 (R15), on when an assessment objective makes critical-thinking "core to the AOs". None of these cells were diff-1 cells; all had agreed scores. "Before" is the score after the main pass (the provisional score).

Spec facts were checked against these sources:

- AQA scheme-of-assessment AO tables: 7652, 7692, 7662, 7182, 7136, 7132, 7192, 7127, 7582, 7237, 7262, 7272, 7712;
- AQA 7707 specification at a glance;
- Pearson 9CN0 Issue 5 (saved text, pp.18, 30, 44);
- Ofqual GCE D&T conditions (saved text);
- DfE English language para 5 and DfE MFL paras 11–14.

| Subject | Skill | Before | After | Rulings | Reason |
|---|---|---|---|---|---|
| Psychology | `critical-thinking` | 2 | **3** | R15 | Q5. Raised 2 to 3. An unbundled AO devoted to evaluating evidence or arguments to reach judgements carries ≥20% of the marks across the papers, so the skill is core to the AOs. This is the same test Sociology meets (AO3, 25%). No near-neighbour skill is at 3 on the same evidence (rule 6). |
| Business Studies | `critical-thinking` | 2 | **3** | R15 | Q5. Raised 2 to 3. An unbundled AO devoted to evaluating evidence or arguments to reach judgements carries ≥20% of the marks across the papers, so the skill is core to the AOs. This is the same test Sociology meets (AO3, 25%). No near-neighbour skill is at 3 on the same evidence (rule 6). |
| Economics | `critical-thinking` | 2 | **3** | R15 | Q5. Raised 2 to 3. An unbundled AO devoted to evaluating evidence or arguments to reach judgements carries ≥20% of the marks across the papers, so the skill is core to the AOs. This is the same test Sociology meets (AO3, 25%). No near-neighbour skill is at 3 on the same evidence (rule 6). |
| Accounting | `critical-thinking` | 2 | **3** | R15 | Q5. Raised 2 to 3. An unbundled AO devoted to evaluating evidence or arguments to reach judgements carries ≥20% of the marks across the papers, so the skill is core to the AOs. This is the same test Sociology meets (AO3, 25%). No near-neighbour skill is at 3 on the same evidence (rule 6). |
| English Language | `digital-ai` | 0 | **1** | R14 | Q2. Raised 0 to 1: DfE para 5 requires the methods of linguistics to be applied to 'spoken and written forms of English, including electronic and multimodal forms', which is studying digital communication as content (R14). Not 2: no tool use is assessed. |
| English Language | `content-production` | 0 | **1** | R1,R2 | Q2. Raised 0 to 1: the compulsory analysis of multimodal and electronic texts (para 5) is 'analysing media without producing it' (aid table). This agrees with rule 1, since studying about a skill without applying it scores 1. Original and directed writing are credited under writing and creativity, not media production. |
| English Literature | `creativity` | 1 | 1 | R15,R2 | Q3. Kept 1. DfE para 17's 'respond critically and creatively' is carried by AO1 (28%), which bundles 'personal and creative responses' with terminology and written expression, so it is interpretive originality inside critical writing. AQA 7712 has no generate-and-iterate task: the NEA is one comparative critical essay with bibliography, and there is no re-creative option. |
| English Language & Literature | `writing` | 3 | 3 | R11 | Q4. Citation corrected from AQA 7717 (English Literature B) to the reference spec, AQA 7707. The score is unchanged: two 40% written papers and a 20% NEA investigation of 2,500–3,000 words. |
| English Language & Literature | `self-management` | 2 | 2 | R9 | Q4. Citation corrected to AQA 7707. The NEA 'Making connections' (20%) is a personal investigation of 2,500–3,000 words; the score is unchanged. |
| English Language & Literature | `critical-thinking` | 3 | 3 | R15 | Q4. Citation corrected to AQA 7707. The score is unchanged: the 20% NEA personal investigation weighs literary and non-literary evidence, and extended critical response runs through both papers. |
| English Language & Literature | `creativity` | 2 | 2 | R15,R2 | Q4/Q5. Citation corrected to AQA 7707, whose Paper 2 Section A is a re-creative writing piece (25 marks) plus a critical commentary (30 marks). That is a real production task, so 2 no longer rests on DfE wording. Not 3: only the 25-mark piece (12.5%) assesses creativity directly. |
| French | `critical-thinking` | 2 | 2 | R15 | Q1. Kept 2. AO4 (20%: 10% Paper 2, 10% Paper 3; the same table in AQA 7652, 7692 and 7662) bundles 'knowledge and understanding of' culture with 'respond critically', so the critical part is under 20%. The IRP discussion is AO1/AO3/AO4 10 marks each, and 80% of marks are language AOs. The DfE critical-response and IRP requirements (paras 11–12, 14) meet level 2, not 3. |
| Spanish | `critical-thinking` | 2 | 2 | R15 | Q1. Kept 2. AO4 (20%: 10% Paper 2, 10% Paper 3; the same table in AQA 7652, 7692 and 7662) bundles 'knowledge and understanding of' culture with 'respond critically', so the critical part is under 20%. The IRP discussion is AO1/AO3/AO4 10 marks each, and 80% of marks are language AOs. The DfE critical-response and IRP requirements (paras 11–12, 14) meet level 2, not 3. |
| German | `critical-thinking` | 2 | 2 | R15 | Q1. Kept 2. AO4 (20%: 10% Paper 2, 10% Paper 3; the same table in AQA 7652, 7692 and 7662) bundles 'knowledge and understanding of' culture with 'respond critically', so the critical part is under 20%. The IRP discussion is AO1/AO3/AO4 10 marks each, and 80% of marks are language AOs. The DfE critical-response and IRP requirements (paras 11–12, 14) meet level 2, not 3. |
| Chinese (Mandarin) | `critical-thinking` | 2 | 2 | R15 | Q1. Kept 2. Pearson 9CN0 AO4 is 20% (Paper 2 10%, Paper 3 10%; p.44) and uses the same bundled wording. Paper 3's AO4 grid is headed 'Knowledge and understanding of society and culture' (p.30), so only Paper 2's 10% 'critical and analytical response' grid (p.18) is directly critical. |
| Physical Education | `critical-thinking` | 2 | **3** | R15 | Q5. Raised 2 to 3. An unbundled AO devoted to evaluating evidence or arguments to reach judgements carries ≥20% of the marks across the papers, so the skill is core to the AOs. This is the same test Sociology meets (AO3, 25%). No near-neighbour skill is at 3 on the same evidence (rule 6). |

### R15 consistency check: every subject with an evaluation AO

Under R15, the relevant evidence is an AO weighting that directly and wholly assesses evaluating evidence, information, theories or arguments to reach judgements. The weightings below are from each reference spec's scheme of assessment.

| Subject | AO and weighting | Result |
|---|---|---|
| Sociology | AO3 'analyse and evaluate…evidence…make judgements' 25% | Meets R15; confirms the existing 3 |
| Psychology | AO3 'analyse, interpret and evaluate…evidence…make judgements' 36–38% | Meets R15: **2 → 3** (scientific-method is only 2, so rule 6 does not block) |
| Economics | AO4 'evaluate economic arguments…evidence…judgements' 22–25% | Meets R15: **2 → 3** |
| Business Studies | AO4 'evaluate…information to make informed judgements' 23–26% | Meets R15: **2 → 3** |
| Accounting | AO3 'analyse and evaluate accounting data…make judgements' 40–42% | Meets R15: **2 → 3** (data-analysis stays 2 under rule 6) |
| Physical Education | AO3 'analyse and evaluate the factors that underpin performance' 22–25%; DfE 'present arguments and draw conclusions' | Meets R15: **2 → 3** |
| French, Spanish, German, Chinese | AO4 20%, bundled with 'knowledge and understanding'; 80% of marks are language AOs | Bundled: stays 2 |
| Music | AO4 'evaluative and critical judgements about music' 30% | Appraisal of works: stays 2 |
| Dance | AO4 'critically appreciate and assess performance and choreography' 25% | Appraisal of works: stays 2 |
| Drama & Theatre | AO4 'analyse and evaluate their own work and the work of others' 20% | Appraisal, including own work: stays 2 |
| Art & Design (4 titles) | AO1 'develop ideas…demonstrating analytical and critical understanding' 25% | Bundled with developing ideas: stays 2 |
| Design & Technology | Ofqual AO3 'analyse and evaluate design decisions and outcomes…prototypes made by themselves…wider issues' 20–25% | Bundled with own-prototype appraisal (creativity 3): stays 2 |
| Biology, Chemistry, Physics, Environmental Science | Science AO3 'analyse, interpret and evaluate…develop and refine practical design' | Rule 6: this evidence already gives scientific-method 3, so stays 2 |
| Statistics | Evaluation of statistical results | Rule 6: already data-analysis 3, so stays 2 |
| Mathematics, Further Mathematics, Computer Science | Proof validity / evaluating a system against requirements | Rule 6: already problem-solving 3, so stays 1 |
| Applied Science, Engineering, HSC, Construction, Sport & Exercise Science, Food Science & Nutrition | No qualification-level AO table (unit AOs only) | R15 does not apply; unchanged |

The subjects already at 3 are unaffected: History, Geography, Law, Politics, Philosophy, RS, the three English subjects, Film, Media, Criminology and Sociology. Each has evaluative AOs throughout, an investigation component (A9 route), or both.

### Q3 consistency: 'creative response' wording

R15's bundling logic applies to creativity too. Wording such as 'respond creatively', an aim, or an AO that bundles creativity with other skills gives at most 1. A score of 2 or more needs an assessed production task.

Every creativity score of 2 or more was re-checked:

- English Language & Literature was the only one resting on DfE wording alone. AQA 7707's re-creative writing task (Paper 2 Section A) now supports its 2.
- English Language has an NEA original-writing task. Film and Media have production NEAs.
- Music Technology has a composition NEA; rule 6 caps it at 2, because its production 3 sits in content-production.
- The rest have design, composition, choreography, devising or art projects.

Subjects with 'creative' wording only (English Literature, the MFLs, Business) stay at 1.

### Q2 consistency

- **English Language & Literature × digital-ai and × content-production stay 0.** Neither the DfE content nor AQA 7707 requires electronic or multimodal texts.
- **MFL × content-production stays 0.** Reading material drawn from online media is working with its content, not analysing media form, and it is already credited under digital-ai (1).

### Follow-up counts

- Cells changed: 7, all up. They are Psychology, Economics, Business Studies, Accounting and Physical Education × critical-thinking (2 → 3), and English Language × digital-ai and × content-production (0 → 1).
- Evidence and citations corrected, scores unchanged: 4 English Language & Literature cells (writing, self-management, critical-thinking, creativity).
- Across both passes, 86 cells now differ from their provisional score (84 up, 2 down), plus the 5 adjudicated cells.
- Critical-thinking now has 18 subjects at 3.
