# D matrix: second review of extremes and cross-area consistency

**Research step: D second review. Date: 27 September 2026.** Methodology §4.2 requires that "a second reviewer checks every 5 and every 0." This document records that check for the 24 extreme cells in the five North West `demand.csv` files. It also records one reading of the §4.2 survey test, applied to all five areas, and the resulting D table.

Every quote was re-opened in the saved text files (`=== PAGE n ===`, PDF page index, following methodology §2). The Cumbria Annex A1 chart values were re-measured from the PDF's vector geometry: the bars are drawn shapes, so their widths can be read exactly instead of by eye.

## 1. Outcome in brief

- **Five 5s remain, one per area:**
  - C&W `self-management`
  - Cumbria `self-management`
  - GM `leadership`
  - Lancashire `digital-ai`
  - LCR `digital-ai`

  Three of these are the §4.2 anchors. Twelve 5s were lowered: eleven to 4 and one to 3 (C&W `care-empathy`).
- **Five 0s remain.** They are the `languages` cells, all upheld. GM `teamwork` and Cumbria `content-production` rise from 0 to 1.
- **The Cumbria chart values in `demand.csv` were misread.** Teamwork was given as ~30% and is 16.3%. Adapting to new equipment was given as ~13% and is 8.7%. Manage own time was given as ~38% and is 32.1%.
- **No demand file raises an error in `compile-data.ts`** (§6).

## 2. Consistency ruling: what counts as "employer survey evidence" for a 5

§4.2 defines a 5 as "a cross-cutting or top-priority gap **with** employer survey evidence". It defines that evidence as "a quantified finding from the ERB's own survey or structured engagement, attributable to this skill". The five scorers read this differently:

- C&W awarded eight 5s, several from one p.18 passage.
- GM awarded one, rejecting its QES job-title rankings.
- Lancashire and Cumbria accepted third-party data and chart values of any size.

I apply a single reading everywhere. For a 5, the survey limb is met only by a finding that passes all five tests below.

1. **Source: the ERB's own evidence.** That means its survey, interviews, deep dives, 1-2-1s or workshops.
   - Third-party figures quoted in the plan do not count: Lightcast, ECITB, Skills for Care, Cogent, and sector-level ESS vacancy rates. The only exception is the one §4.2 allows: a local or North West ESS figure for *that specific skill*.
2. **Magnitude.** The finding must state how much. That can be:
   - a percentage;
   - a majority quantifier ("more than half", "most employers");
   - a universal or near-universal quantifier over the ERB's sample ("virtually all deep-dive interviews", "nearly every employer interviewed", "every sector represented in the survey and interviews");
   - a chart value.

   A ranking or frequency adverb without a size does not count: "most frequently identified", "second most in-demand", "consistently", "repeatedly", "many", "widely cited". **This is GM's QES ruling, upheld and applied to every area.**
3. **Scope matches the claim.** The quantifier must be over the whole-area engagement (all employers or all sectors), as it is in all three §4.2 anchors. A quantifier confined to one sector's interviewees evidences a sector gap, which the rubric already rewards at 3–4.
   - A plan sentence saying a need exists "across all (priority) sectors" is the *cross-cutting label*, even when it is attributed to "employers". It is not also a measurement of the sample; otherwise the two limbs of the test would collapse into one. The C&W anchor passes because it explicitly measures across "every sector represented in the survey and interviews".
4. **Materiality.** A chart percentage must show the skill is a gap for at least one respondent in five (**≥ 20%**). A bar showing that 91% of employers do *not* find a skill hard to obtain is not evidence of a top-level gap. Three things support this floor:
   - The anchors are all majority or universal findings.
   - N's own rubric treats ESS items below 20% as weak evidence (N = 2).
   - Cumbria's ERB summarises its own survey by naming only the items above ~30% (Annex A p.44).

   Any floor above 16.3% and up to 30.4% gives identical results.
5. **Attribution.** The finding must name this skill, an unambiguous synonym, or the project's crosswalk category. It does not count if:
   - it reaches the skill only through an occupation or a sector aggregate (vacancy rates, workforce projections, recruitment intentions); or
   - it mentions the skill only as an illustrative example of a different gap.

**Can one passage that names several skills support a 5 for each?** Yes, but only if the magnitude attaches to each skill separately.

- **Distributive findings: each skill can take its own 5.** Examples are a chart with one bar per skill (Cumbria Q12), or wording that measures each item.
- **Bundle findings: only one 5.** Here one quantifier covers one bundled gap, as in C&W p.18: "the same gap: … workplace behaviours, communication habits, reliability and practical readiness". The quantifier measures the bundle, so it supports one 5, for the bundle's core skill. The methodology's own anchor gives that to `self-management`, which J1 calls the scoreable core of work readiness. The other components (`speaking` here) take the cross-cutting 4.
- **Rankings: none.** A passage that names several skills but only ranks them supports no 5 at all. C&W p.18's "most frequently identified … digital and data capability, and leadership and management" is the example.
- **Bundled questions: none.** Cumbria Q13 asks about "Maths, English, basic IT" together. It gives one figure for the bundle and cannot be split across numeracy, writing and digital-ai.

**For 0s:** a 0 needs no mention of any kind after a synonym search. A named mention anywhere in the plan or its official annexes lifts the cell to at least 1. So does a skill that is necessarily implied by a named shortage, for example through J1's definition of work readiness.

## 3. The 24 extremes

Pages are PDF indices. "A1" means Cumbria Annex A1; "A" means Annex A.

| Area | Skill | Was | Now | Reason |
|---|---|---|---|---|
| C&W | `data-analysis` | 5 | **4** | Cross-cutting (p.18 finding; p.22 Digital theme). "Most frequently identified" is a ranking with no magnitude (test 2). |
| C&W | `digital-ai` | 5 | **4** | Cross-cutting (p.22). The 32% is Lightcast's and measures expected change in skills (tests 1 and 5). The LSIP survey's AI finding has no figure. |
| C&W | `engineering` | 5 | **4** | A gap in 2+ sectors (p.28, p.40) but not cross-cutting. The 56%/39% are NW ESS vacancy rates for the manufacturing sector, not for this skill (tests 1 and 5). |
| C&W | `practical-making` | 5 | **4** | A gap in 2+ sectors (p.48, p.40). ECITB's 60–70% is a third-party share of workforce demand (tests 1 and 5). |
| C&W | `sustainability` | 5 | **4** | A cross-cutting theme (p.24). The LSIP survey names green skills without a figure. Its only figure (~50% "no expected impact") cuts against a gap. |
| C&W | `leadership` | 5 | **4** | Cross-cutting (p.18, p.24). "Most frequently identified" and "consistently hard to fill" are not magnitudes (test 2). |
| C&W | `care-empathy` | 5 | **3** | One priority sector (Health and Social Care, p.52). The p.18 "interpersonal resilience… front-line care work" is only an e.g. of the essential-business-skills gap (test 5). |
| C&W | `self-management` | 5 | **5** | Upheld; this is the §4.2 anchor. "Across every sector represented in the survey and interviews, employers flagged the same gap" (p.18; 184 responses, p.124). |
| Cumbria | `digital-ai` | 5 | **4** | Cross-cutting (p.30), but "Computer literacy/basic IT" is 13.0% (A1 p.15, test 4). The p.30 "across all priority sectors" is the label (test 3). The p.21 chart holds no level information (§5). |
| Cumbria | `practical-making` | 5 | **4** | Headline gap (p.8, p.24), but "Adapting to new equipment/materials" is 8.7%, not ~13% (test 4). |
| Cumbria | `teamwork` | 5 | **4** | Headline gap (p.24), but "Teamworking" is 16.3%, not ~30% (test 4). |
| Cumbria | `self-management` | 5 | **5** | Upheld. Headline gap ("reliability", p.24) plus "manage own time/prioritise tasks" at 32.1% of 183 (A1 p.15). Evidence text corrected from ~38%. |
| GM | `leadership` | 5 | **5** | Upheld; this is the §4.2 anchor. OP3 is "Cross-sectorial", plus "According to the LSIP survey, more than half of employers…" (p.12). |
| Lancs | `digital-ai` | 5 | **5** | Upheld. Cross-cutting theme and Main Priority 5, plus "nearly every employer interviewed" (p.22) and "nearly all employers interviewed" (p.16), from 100+ interviews. |
| Lancs | `care-empathy` | 5 | **4** | Main Priority 4 is a headline priority. But the 3,000+, 83,665 and 52%/58% figures are Skills for Care data (test 1). |
| Lancs | `self-management` | 5 | **4** | Priority 1 and the cross-cutting theme concern the experience gap, which §3.1 and J1 exclude as a skill. The 63%/41%/6% figures are recruitment intentions (test 5). What remains is work readiness, a continuing "general theme" (p.5, p.23, p.28): cross-cutting without a figure. |
| LCR | `digital-ai` | 5 | **5** | Upheld; this is the §4.2 anchor. p.22 cross-cutting theme, plus "virtually all of the deep dive interviews" (p.23). |
| C&W | `languages` | 0 | **0** | Upheld. Only metaphors: "speaking different languages" (p.18), "one language on essential business skills" (p.116). |
| Cumbria | `languages` | 0 | **0** | Upheld. Only "overseas workers" (A p.50) and "overseas graduates" (A1 p.12), which describe workforce origin. |
| GM | `languages` | 0 | **0** | Upheld; this is the §4.2 anchor. ESOL appears only as a claimant group (p.79); "international recruitment" (p.14, p.20) is about workforce origin. |
| Lancs | `languages` | 0 | **0** | Upheld. The only hit is "exports" (p.16). |
| LCR | `languages` | 0 | **0** | Upheld. "3412 Authors, writers and translators" (Annex A p.17) is only a SOC unit-group title, used to code content creators. |
| GM | `teamwork` | 0 | **1** | No teamwork language (confirmed). But OP5's "lack of work readiness amongst candidates entering the labour market" (p.14) implies it, since J1 defines work readiness as a bundle including teamwork. |
| Cumbria | `content-production` | 0 | **1** | Not absent. The Q12 free-text answer "Video production/youtube" (A1 p.16) names it, and answer 24 mentions "marketing and comms". A lone raw answer is weaker than the plan's own supporting mentions that define level 2. |

**Summary.** Of the 17 5s, 5 were upheld, 11 lowered to 4 and 1 lowered to 3. Of the 7 0s, 5 were upheld and 2 raised to 1.

## 4. Other cells checked or changed

**Evidence text only (score unchanged):**

- Cumbria `writing` (2): the "existing staff" figure is corrected from ~19% to ~17% (A1 p.17 measures 16.7%).
- Cumbria `leadership` (4): its ~31% is kept, being within ±2 points of the measured 30.4%.

**4s where the ruling bites, all kept at 4:**

| Area | Skill | Why it stays 4 |
|---|---|---|
| Cumbria | `leadership` | Has a qualifying survey value (30.4%, the ERB's own summary at A p.44) but is not one of Cumbria's cross-cutting themes or headline gaps. Phase B's judgement call 1 stands. |
| GM | `engineering` | OP5 is cross-cutting. "Nearly all interviewees from the manufacturing sector reported … skills gaps in this field" (p.20) is limited to one sector (test 3). QES rankings fail test 2. **It would be 5 under a looser test 3.** |
| GM | `digital-ai` | OP4 is cross-cutting. "Almost all employers interviewed in this sector [creative]…" (p.23) is limited to one sector (test 3). **It would be 5 under a looser test 3.** |
| C&W | `speaking` | "Communication habits" is part of the p.18 bundle; only `self-management` takes that bundle's 5. |
| LCR | `leadership`, `self-management`, `problem-solving` | "Across all sectors…" (p.41) and the Change 6 wording are cross-cutting labels, not measurements (test 3). The p.42 percentages are national (ESS, ISE). |
| Lancs | `leadership` | Cross-cutting theme, but "commonly required by employers across sectors" (p.16) states no magnitude. |

**Clusters of 1s (search-miss check):**

- **Lancashire** `writing`, `speaking`, `problem-solving`, `teamwork` and `numeracy` stay at 1. I searched for communicat*, literacy, English, math*, numer*, presentation, verbal, written, problem, solv*, troubleshoot, analytic*, team, collaborat*, interpersonal and soft skills. The only hits are:
  - "digital communication" and "Effective Communication with AI", which are `digital-ai`;
  - "collaborate" used of agencies and providers;
  - "team members" and "team leaders" used as role nouns.

  The plan's soft-skills survey detail is in the out-of-scope 2023 plan.
- **Cumbria** `critical-thinking`, `problem-solving` and `creativity` stay at 1. The only hits are occupation titles ("Design engineers", "Process Improvement engineers") and the sector label "cultural & creative"; no thinking skill is named in the plan, Annex A or Annex A1.

## 5. Cumbria Annex A1 chart values, re-measured

**Q12, "Which skills have you found difficult obtaining from applicants?"** (183 responses, A1 p.15). The bars are vector-drawn. Scale: 0% at x = 181.2, 70% at x = 523.0, so 48.83 pt per 10%.

| Category | Measured | Was quoted in `demand.csv` | Maps to |
|---|---|---|---|
| Skills specific to the job role | 63.2% | not used | excluded (§3.1) |
| Ability to manage own time/prioritise tasks | 32.1% | ~38% | `self-management` |
| Leadership/Management skills | 30.4% | ~31% | `leadership` |
| Managing their own feelings/handling others | 23.9% | not used | `self-management` |
| Other (please specify) | 21.8% | not used | not applicable |
| Teamworking | 16.3% | ~30% | `teamwork` |
| Computer literacy/basic IT skills | 13.0% | not given | `digital-ai` |
| Adapting to new equipment/materials | 8.7% | ~13% | `practical-making` |
| Basic numerical skills and understanding | 6.5% | ~6–8% | `numeracy` |

**Other charts in Annex A1:**

- **Q13, basic/functional skills** (191 responses, p.17):

  | Group reporting issues | Share |
  |---|---|
  | None of the above | 69.4% |
  | Existing staff | 16.7% |
  | New staff coming out of education | 14.1% |
  | New staff | 11.9% |
  | Any other particular groups | 3.1% |

  The question asks about Maths, English and basic IT together, so the figures can't be split across skills (§2).
- **Q10, difficulties filling vacancies** (177 responses, p.11). The larger bars are:

  | Difficulty | Share |
  |---|---|
  | Inappropriate skill set of candidates applying | 60.9% |
  | Number of candidates applying | 49.6% |
  | Low number of applicants with the required attitude, motivation or personality | 41.1% |
  | Candidates don't have the qualifications needed | 36.1% |
  | Lack of work experience the company demands | 30.9% |
  | Remote location/poor public transport | 30.3% |

  The "attitude, motivation" bar further supports `self-management`. The others are not attributable to a single skill.
- **Q16, skills needing improvement** (175 responses, p.21). This is a **100%-stacked** timing split between "next 12 months" and "next 1–3 years": every bar sums to 100%. It shows nothing about how many employers want a skill improved, so the Phase B claim that it shows "most employers want improved" is withdrawn.

## 6. Validation

I ran `node --experimental-strip-types scripts/compile-data.ts --data research/data --out <scratch>/compile-check-d` after the edits.

- There were 1,036 errors, **all in `research/data/subject_skills.csv`**, which another step is still finalising. They are missing cells, for example for Sport & Exercise Science and Food Science & Nutrition.
- The demand files and region files raise no errors.
- The only other messages are two warnings: the existing Cumbria `lsip_published` VERIFY flag, and the note that tier cut-offs default until `data:analyse` runs.
- Every changed evidence cell is 200 characters or fewer, row order is unchanged, and the files are still UTF-8 with LF line endings.

## 7. Final D table (after review)

| Skill | C&W | Cumbria | GM | Lancs | LCR |
|---|---:|---:|---:|---:|---:|
| `data-analysis` | 4 | 4 | 4 | 4 | 4 |
| `programming` | 4 | 1 | 4 | 4 | 3 |
| `digital-ai` | 4 | 4 | 4 | 5 | 5 |
| `cyber-security` | 2 | 2 | 3 | 4 | 2 |
| `numeracy` | 1 | 2 | 1 | 1 | 1 |
| `scientific-method` | 3 | 2 | 2 | 2 | 3 |
| `engineering` | 4 | 4 | 4 | 4 | 4 |
| `practical-making` | 4 | 4 | 4 | 4 | 4 |
| `sustainability` | 4 | 4 | 4 | 2 | 4 |
| `commercial` | 4 | 4 | 4 | 3 | 4 |
| `leadership` | 4 | 4 | 5 | 4 | 4 |
| `law-ethics` | 4 | 4 | 3 | 4 | 4 |
| `writing` | 1 | 2 | 3 | 1 | 4 |
| `speaking` | 4 | 4 | 4 | 1 | 4 |
| `languages` | 0 | 0 | 0 | 0 | 0 |
| `care-empathy` | 3 | 3 | 3 | 4 | 3 |
| `teamwork` | 3 | 4 | 1 | 1 | 2 |
| `customer-service` | 2 | 4 | 3 | 2 | 3 |
| `self-management` | 5 | 5 | 3 | 4 | 4 |
| `critical-thinking` | 4 | 1 | 3 | 4 | 4 |
| `problem-solving` | 4 | 1 | 3 | 1 | 4 |
| `creativity` | 4 | 1 | 3 | 3 | 3 |
| `content-production` | 4 | 1 | 3 | 3 | 3 |
| **Count of 5s** | 1 | 1 | 1 | 1 | 1 |
| **Count of 4s** | 14 | 11 | 8 | 10 | 12 |
| **Sum of D** (before → after) | 84 → 76 | 67 → 65 | 70 → 71 | 67 → 65 | 76 → 76 |

## 8. Wider concerns about comparability across areas

1. **The 4 band is saturated, so D discriminates mainly between 1 and 3.** Two quite different evidence types share one score: "cross-cutting, no figure" and "2+ sectors". As a result, 8–14 of the 23 skills score 4 in each area. The single 5 per area adds only 25% weight over a 4, so most of the fit signal comes from where the low scores fall. The 5s still matter for skill rank within an area, because rank sorts by D first.
2. **Which skills get a 5 depends on what each ERB happened to count.** Cumbria's survey has a time-management bar but no trades bar, so Cumbria's #1 headline gap (Level 2–3 trades) scores 4 while self-management scores 5. The fact that each area now has exactly one 5 is a coincidence of the evidence, not a design choice.
3. **Document style drives level.** C&W and LCR have long cross-cutting sections that name many skills, which gives them a mean D of 3.30. Lancashire's plan is coded by occupation and has almost no soft-skills wording, which gives it 2.83 (with Cumbria also at 2.83). In Lancashire this bottoms out `speaking`, `writing`, `teamwork` and `problem-solving` at 1. Its richer 2023 survey is out of scope. C&W's scorer already flagged its `commercial`, `creativity`, `content-production` and `problem-solving` 4s as generous. They rest on short passages inside cross-cutting themes.
4. **Scorers read "cross-cutting" differently for 4s.** GM counted only an OP's named subject. LCR counted anything inside a Change. As a result GM has `critical-thinking` 3, `self-management` 3 and `problem-solving` 3, where LCR has 4s on comparable wording. GM `self-management` in particular would be 4 under the J1 reading that I used to keep Lancashire at 4. I left it unchanged and flagged it. The user may want one definition of "cross-cutting" for 4s, as this review sets one for 5s.
5. **Three rulings are sensitive and should be confirmed by the user:**
   - Test 3 (whole-sample scope). Relaxing it would make GM `engineering` and `digital-ai` 5.
   - The 20% floor (test 4). A 15% floor would restore Cumbria `teamwork` to 5; a 10% floor would also restore `digital-ai`.
   - The bundle rule. Relaxing it would make C&W `speaking` 5.

   Each of these is a one-cell change in `demand.csv`.
6. **The W matrix was not reviewed.** Nothing here changes `priority_weights.csv`. Cumbria's W rows cite no Annex A1 chart values, so the misreadings don't carry into W. W does draw on the same sector passages as D, so a similar second look at its 3s would be worthwhile.

## Harmonisation (checkpoint 2)

**27 September 2026.** After this review, the project owner decided two things:

1. **Keep the three strict readings for a 5**: whole-sample scope (test 3), the 20% chart floor (test 4), and one 5 per bundled survey figure (§2).
2. **Write one definition of "cross-cutting" for D = 4** and re-apply it to all five areas, deciding on the LSIP text only. This answers §8.4.

This section records the definition, every changed cell, the borderline cells and the resulting table. No fairness or ranking results were looked at.

**Method.** I re-read all 78 cells scored 3 or 4 against the saved text. I also checked each 0–2 cell for a cross-cutting statement that names the skill. A script checked every new quote against the `=== PAGE n ===` text, allowing only for whitespace and dash normalisation. The rulings are also in methodology §4.2.1.

### The definition

A skill scores 4 either through the "2+ priority sectors" route or through the cross-cutting route below. Otherwise it is scored by the number of priority sectors that state a gap in it: one sector is 3, two or more is 4.

1. **Cross-cutting is a property of a stated need, not of a page.** The plan must state a gap, lack or requirement for the skill, named directly or by a phrase in its `lsip_terms` list. That need is cross-cutting if either:
   - **(a)** the plan's own words give it whole-economy scope: "cross-cutting", "overarching", "across all/every sector", "common to all sectors", "all levels and roles", "the wider workforce"; or
   - **(b)** it is one of the §4.2 headline items. The skill must be named in the item's title, or in the sentences where the item says what is lacking, including as one of a listed set. A title counts even when it is worded as an action. A heading word that only names an industry does not count.

   *Grounds:* §4.2 says "the LSIP labels the need…", "it is one of the plan's headline priorities or changes", and "cross-cutting **gaps**" (level 4). The GM `leadership` anchor rests on OP3's action-worded title.
2. **Other prose in a cross-cutting section is scored on its own scope.** It inherits cross-cutting status only if its sentence keeps the item's cross-sector scope. It does not inherit when it is:
   - **(i)** tied to one sector, occupation group or single respondent;
   - **(ii)** an example ("e.g.", "such as", "for example"), or a specialist skill that the plan places at the advanced end of a range or "in specific occupations";
   - **(iii)** a driver or consequence rather than a need.

   The baseline tier that the plan says the whole workforce needs does inherit. Examples are GM OP4's "core digital skills", Cumbria's "foundational digital competence required across the workforce" (p.30), LCR's "baseline of AI literacy" (p.23) and Lancashire's Essential Digital Skills. A sector-tied mention counts once towards that sector. A need for a group that is not a priority sector is a supporting mention (2).

   *Grounds:* the GM `data-analysis` anchor counts OP4's "staff in manufacturing … monitor and assess data" (p.13) as a manufacturing mention, not a cross-cutting one. Test 5 of §2 already treats an illustrative example as evidence for the other gap. Level 3 requires a *priority* sector.
3. **Bundles (J1).** When a cross-cutting need lists its parts, each part takes the 4. Examples are "communication, teamwork, reliability" and "communication, problem-solving, professional judgement". When only the bundle's label is given ("work readiness", "behaviours", "employability skills", "essential business skills"), the 4 goes to `self-management` alone, J1's "scoreable core", and the unlisted parts are implied (1). Unqualified "communication" is `speaking`. `writing` needs wording about written text, such as composing emails or reports, written English or literacy; using email software is `digital-ai`. The one-5-per-bundled-figure rule still applies to 5s.

   *Grounds:* J1; §10 decision 2; §3's `speaking` row ("'Communication' is in every work-readiness list").
4. **Actions, research and context stay at 2 wherever they are printed.** This covers:
   - programmes, provision lists, pilots and success measures;
   - reviews or research still to be done;
   - job-posting or labour-market rankings, third-party projections and survey-design notes;
   - context bullets, strategy statements and occupation tables, even when they are labelled "cross-cutting" or "cross-sector".

   A headline item's own title is the only exception (rule 1b).

   *Grounds:* the level-2 list in §4.2, and the Cumbria `cyber-security` anchor, which scores 2 for an action inside the cross-cutting p.30 paragraph.
5. **No new 5s.** Cross-cutting status alone gives at most 4. A 5 still needs a finding that passes all five tests in §2.

### Changed cells

Pages are PDF indices. "A" means Cumbria Annex A.

| Area | Skill | Was | Now | Quote and page | Reason |
|---|---|---:|---:|---|---|
| C&W | `problem-solving` | 4 | **3** | "you need to allow them to learn soft skills – teamwork, communication, problem-solving" (Apprenticeships Manager, Manufacturing, p.18) | A single respondent in one sector (rule 2i). The other basis, "The most in-demand specialised skills locally are … problem solving, however we note this analysis dates from 2023" (p.22), is labour-market data (rule 4). This matches C&W `teamwork` 3, which rests on the same quote. |
| C&W | `creativity` | 4 | **3** | "sustainable design and resource efficiency"; "Supporting engineering design capability at degree level" (Agri-tech, p.32) | The 4 rested on "Creative roles increasingly require AI-assisted skills – shifting toward creative direction…" (p.22). That is one of the Digital theme's sector-by-sector examples (rule 2i), and creative roles are not a C&W priority sector. Agri-tech is one sector. |
| C&W | `content-production` | 4 | **2** | "digital content creation" (planned digital literacy provision, p.58); "Creative roles increasingly require AI-assisted skills" (p.22) | p.58 is an action (rule 4). p.22 is tied to creative roles, which are not a priority sector (rule 2). No priority-sector gap names the skill, so this is a supporting mention. |
| Cumbria | `data-analysis` | 4 | **3** | "digital skills including data handling, data analysis and AI" (Land Based 1-2-1s, A p.49) | p.30 attaches "across all priority sectors" to digital capability and to "foundational digital competence required across the workforce". It gives "data-driven decision-making" only among "advanced technical skills in areas such as…" (rule 2ii). One sector. |
| Cumbria | `commercial` | 4 | **3** | "grants and financial acumen, customer care, business and commercial skills" (Land Based 1-2-1s, A p.49) | "professional services/roles such as accountancy" (p.23) is one of the "key themes for consideration". It is not one of the six key skills priorities or the §3.2 headline gaps, and the plan's response is "Undertake a review of professional services" (p.29), which is research to be done (rule 4). One sector. |
| Cumbria | `care-empathy` | 3 | **4** | "Employers report persistent shortages in critical roles, including technical, engineering, construction, care and digital occupations" (key skills priority, p.9); "Level 2–3 technical and trade roles (construction, engineering, care)" (§3.2 headline gap, p.24) | Care occupations are one of a listed set in two §4.2 headline items' own statements of what is lacking (rule 1b). This is the same basis as Lancashire `care-empathy` 4 (Main Priority 4). There is no survey figure, so it is not a 5. |
| GM | `writing` | 3 | **4** | "expect employees at all levels and roles to possess essential digital skills. These core digital skills include … the ability to compose clear and professional emails" (OP4, p.13) | A listed part of OP4's own gap statement ("Where these skills are lacking, businesses face recruitment difficulties"), with all-levels scope (rules 1b and 3). The phrase is `writing`'s own `lsip_terms` entry. |
| GM | `self-management` | 3 | **4** | "Whilst both academic and technical pathways exist, employers report a lack of work readiness amongst candidates entering the labour market." (OP5, SIC "Cross-sectorial", p.14) | The sentence keeps OP5's cross-sector scope, which spans construction and manufacturing (rule 2). A work-readiness bundle named only by its label gives the 4 to `self-management` (rule 3). J1 cites this sentence as GM's cross-cutting work-readiness finding. `teamwork` stays 1. |
| GM | `critical-thinking` | 3 | **4** | accidental managers "may lack people management skills or not be adept in operational leadership skills and strategic thinking" (OP3, SIC "Cross-sectorial", p.13) | Part of OP3's own statement of what is lacking, and not narrowed to a sector ("businesses across GM experience such difficulties") (rule 1b). "strategic thinking (GM)" is a `critical-thinking` `lsip_terms` entry. |
| GM | `sustainability` | 4 | **3** | EAS electrician qualifications "include low carbon skills essential to the net zero strategy" (C2, Construction, p.15) | The second "sector" was Annex C p.80. That page only says what the survey asked ("Survey questions were tailored to include relevant questions on net zero…") and quotes a Clean Energy Jobs Plan projection (rule 4). OP5's "transition to a low-carbon economy … rely on" (p.14) is a driver (rule 2iii). One sector. |

**Net effect:** ten cells change. Four rise from 3 to 4. Five fall from 4 to 3, and one falls from 4 to 2. There are no new 5s, and every 0 is unchanged.

**Evidence and source updated, score unchanged.** In each of these the old quote no longer meets the definition, but other evidence holds the 4:

| Area | Skill | D | New basis | Why the old quote no longer carries it |
|---|---|---:|---|---|
| C&W | `programming` | 4 | Life Sciences "growing demand for software developers, AI capability and data modelling skills" (p.22) + BPS "software developers and digital specialists" (p.34): 2 sectors | The 2023 in-demand skills list (p.22) is labour-market data (rule 4) |
| C&W | `commercial` | 4 | BPS "finance and investment analysts, accountants … marketing and communications professionals" (p.34) + "blended finance literacy", which "sits at the intersection of the agri-tech and clean energy sectors" (p.24): 2+ sectors | The nature-based sub-priority is narrowed to named sectors, so it is not cross-cutting (rule 2i) |
| C&W | `critical-thinking` | 4 | BPS "sustained demand for analytical, digital and advisory capability" (p.34) + Life Sciences "increasing demand for biomedical scientists and clinical researchers" (p.44): 2 sectors. J3 merges research into this skill, and its `lsip_terms` include "biomedical researchers" | "editorial judgement" for creative roles (p.22) is an example outside the priority sectors (rule 2) |
| Cumbria | `sustainability` | 4 | "Respond to emerging skills needs (net zero, digital and AI)" (key skills priority, p.9) | The p.23 key theme "net zero/green" is "for consideration" and is not a §4.2 headline item |
| Lancs | `data-analysis` | 4 | AME "companies looking for digital skills, especially AI, data analysis" (p.17) + Social Care "staff increasingly require digital record-keeping and data-analysis capabilities" (p.21): 2 sectors | "Digital sector expansion supports cross-cutting skills needs: coding, data science…" (p.22) is a Context bullet (rule 4) |
| LCR | `data-analysis` | 4 | Change 3: "employers across all sectors … consistent gaps in the practical application of digital tools, limited confidence in using data effectively" (p.38) | "For the LSIP, this translates into a focus on … strengthening data literacy" (p.23) is a strategy statement (rule 4) |
| LCR | `critical-thinking` | 4 | Change 6: "Employers across sectors reported … consistent gaps in communication, problem-solving, professional judgement" (p.42). "professional judgement" is a `critical-thinking` `lsip_terms` entry | The maritime "critically review what it produces" (p.24) is a single respondent (rule 2i), and PBS p.25 is one sector |

### Borderline cells considered but not changed

- **GM `problem-solving` 3.** OP5's "solve advanced technical problems" is explicitly "some employers from the construction sector" (p.14), so it is one sector (rule 2i). This is the §8.4 contrast: LCR's Change 6 names problem-solving for "Employers across sectors" (p.42), so the two texts really do differ in scope.
- **GM `law-ethics` 3.**
  - OP6's "changes in compliance or service delivery requirements" (p.14) is a driver.
  - OP4's agreed change about "using AI in a responsible and ethical manner" (p.28) is an action.
  - FBPS1's "shortage of qualified solicitors" (p.25) would add a second sector only if a solicitor shortage is read as a `law-ethics` need. That is a sector-mapping question outside this definition.
- **GM `sustainability` 3.** It could arguably be 2, because the C2 mention describes qualification content rather than a stated shortage.
- **GM `creativity` and `content-production` 3.** OP4's "in the creative industries, role profiles are evolving to include the use of AI tools for image generation and graphic design" (p.13) is tied to one sector.
- **GM `teamwork` 1, and Lancs `speaking` and `teamwork` 1.** Work readiness is named only by its label (rule 3).
- **C&W `critical-thinking` 4.** It would be 3 if Life Sciences' demand for researchers (p.44) were credited to `scientific-method` alone.
- **C&W `creativity` 3.** It would be 4 if Clean Energy's "enabling progression into design, systems integration and project management" (p.40) were credited to creativity. The Cumbria review credits design-engineer wording to `engineering`, so I have not.
- **C&W `commercial` 4.** Half its basis is a narrow nature-based niche (p.24).
- **C&W `teamwork` 3 and `care-empathy` 3.** The first rests on a single respondent. The second rests on "e.g. interpersonal resilience required for front-line care work" (p.18), which is an example (rule 2ii).
- **C&W `cyber-security` 2.** The AI priority's "avoid security risks … what's permitted, responsible and secure" (p.22) is a governance need (`law-ethics`, `digital-ai`), not clearly a cyber gap, and p.58 is an action.
- **C&W `writing` 1 and Cumbria `writing` 2.** "Communication" on its own is `speaking` (rule 3).
- **C&W theme headings.**
  - "Creative" in "Digital and Creative" names the industries. The plan's summary gives the theme as "digital skills" (p.4).
  - The Visitor Economy theme's sub-priority titles name supervisory skills and chef skills, which are already 4.
- **Lancs `commercial`, `creativity` and `content-production` 3.**
  - p.5 lists "cyber security, website design, development and management, programming and digital marketing" as "higher level skills such as…" under "Specific needs", which the plan sets apart from its general themes (rule 2ii).
  - The key findings on p.23 call them "more specific skills such as…".
  - The §4.2 anchor reads p.22's list as the Digital sector.
  - Annex A's "Cross-sector" SOC 2141 row is an occupation table (rule 4).
- **Lancs `critical-thinking` and `law-ethics` 4.** Both rest on Future Dot Now's four "areas of need" for Essential Digital Skills in AI (p.22–23). The plan adopts these as the content of Main Priority 5's Essential Digital Skills, which is the baseline tier (rule 2). If that list were treated as third-party context, both would fall to 3.
- **LCR `customer-service` 3.** p.35 reports that "many employers, particularly in the PBS sector" need the "capability to communicate inclusively and address the needs of diverse clients". That would give a second sector if read as customer service rather than as equality training.
- **LCR `care-empathy` 3.** Change 4's "maintaining high standards of care" (p.40) is tied to health and care.
- **LCR `programming` 3.** The AI priority places "more advanced technical capability in specific occupations" (p.23), so rule 2ii applies.
- **LCR `cyber-security` 2.** Annex A p.4 is an occupation table.
- **Cumbria `leadership` 4.** It is not named in any headline item, so it stays 4 through the 2+ sectors route and cannot be a 5 (as in §4).
- **Cumbria `data-analysis` 3.** The A1 p.15 free-text answer "Data Analytical Skills" is one raw answer, which is weaker than level 2 (compare `content-production` 1 in §3).

### Final D table (after harmonisation)

| Skill | C&W | Cumbria | GM | Lancs | LCR |
|---|---:|---:|---:|---:|---:|
| `data-analysis` | 4 | **3** | 4 | 4 | 4 |
| `programming` | 4 | 1 | 4 | 4 | 3 |
| `digital-ai` | 4 | 4 | 4 | 5 | 5 |
| `cyber-security` | 2 | 2 | 3 | 4 | 2 |
| `numeracy` | 1 | 2 | 1 | 1 | 1 |
| `scientific-method` | 3 | 2 | 2 | 2 | 3 |
| `engineering` | 4 | 4 | 4 | 4 | 4 |
| `practical-making` | 4 | 4 | 4 | 4 | 4 |
| `sustainability` | 4 | 4 | **3** | 2 | 4 |
| `commercial` | 4 | **3** | 4 | 3 | 4 |
| `leadership` | 4 | 4 | 5 | 4 | 4 |
| `law-ethics` | 4 | 4 | 3 | 4 | 4 |
| `writing` | 1 | 2 | **4** | 1 | 4 |
| `speaking` | 4 | 4 | 4 | 1 | 4 |
| `languages` | 0 | 0 | 0 | 0 | 0 |
| `care-empathy` | 3 | **4** | 3 | 4 | 3 |
| `teamwork` | 3 | 4 | 1 | 1 | 2 |
| `customer-service` | 2 | 4 | 3 | 2 | 3 |
| `self-management` | 5 | 5 | **4** | 4 | 4 |
| `critical-thinking` | 4 | 1 | **4** | 4 | 4 |
| `problem-solving` | **3** | 1 | 3 | 1 | 4 |
| `creativity` | **3** | 1 | 3 | 3 | 3 |
| `content-production` | **2** | 1 | 3 | 3 | 3 |
| **Count of 5s** | 1 | 1 | 1 | 1 | 1 |
| **Count of 4s** | 11 | 10 | 10 | 10 | 12 |
| **Count of 3s** | 5 | 2 | 8 | 3 | 6 |
| **Sum of D** (§7 → now) | 76 → 72 | 65 → 64 | 71 → 73 | 65 → 65 | 76 → 76 |

Bold marks a cell changed in this section. The 4 band now holds 10–12 skills per area (it held 8–14 in §7).

### Validation

- I ran `node --experimental-strip-types scripts/compile-data.ts --data research/data --out <scratch>/compile-check-harmonise` after the edits. It reports **0 errors**. The only message is one warning: Cumbria's existing `lsip_published` VERIFY flag.
- Seventeen cells were rewritten: ten score changes and seven evidence-only updates. Row order and the other columns are unchanged. The files are still UTF-8 with LF line endings, and every evidence cell is 200 characters or fewer.
- The `research/regions/*.md` notes were deliberately not edited. Their Phase B tables are superseded for the cells above.
