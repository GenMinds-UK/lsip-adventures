# W matrix: second review of the priority weights

**Research step: W second review (checkpoint 2). Date: 27 September 2026.**

W weights each of the 34 LSIP priorities against the 23 skills on a 0–3 scale (methodology §4.3). Five region agents scored it, and nobody had reviewed it. This review:

- checks every 3;
- audits the eight people and communication skills in full: `writing`, `speaking`, `languages`, `critical-thinking`, `teamwork`, `self-management`, `customer-service` and `care-empathy`;
- reviews every 1 and 2.

It records the consistency rulings, every changed weight, the upheld 3s and the counts before and after. Every judgement rests on the LSIP wording alone. No subject, student group or combination was considered.

**How the quotes were checked.** Every quote was re-opened in the saved text files (`=== PAGE n ===`, the PDF page index, §2). The quoted fragments in all five weights files were then machine-checked against their cited pages: 279 fragments. The only non-match is a quote-mark style difference (LCR Creative `creativity` uses 'fusion skills' where the PDF has curly double quotes).

## 1. Outcome in brief

- **69 weights changed** out of 229: 24 raised, 18 added, 16 lowered and 11 removed. A further **29 weights keep their value but have corrected evidence**, for misquotations, wrong pages, or quotes that argue against the need.
- There are now 236 weights, and the total weight rose from 508 to 534. Every priority keeps at least three weights; GM Health & Care and GM Hospitality have the fewest, with three each.
- **3s:** 75 of 87 upheld and 12 lowered. There are 17 new 3s: 14 raised from 2, and 3 missing headline weights added (C&W Business Services `programming`, LCR Business & Finance `commercial`, LCR Manufacturing `leadership`).
- **People and communication rows:**
  - `writing` goes from 2 to 7 priorities, and `speaking` from 9 to 11.
  - `critical-thinking` stays at 4 priorities; its total weight goes from 10 to 9.
  - `languages` stays at 0: no plan names a language need.
  - `self-management` falls from 22 to 16 priorities. Most removals cited retention, turnover or recruitment evidence, which names no skill.
  - No people skill is scored 3 except `customer-service` (4 priorities), `care-empathy` (5) and `critical-thinking` (1).
- **Validation:** `compile-data.ts` reports 0 errors (§10).

## 2. How the review was done

1. **Reading.** For each priority I read its whole section in the plan: headline, key findings, body text and the sector's actions. I also read its annex table(s) and every cross-cutting passage in the plan: GM OP1–OP6; LCR p.17–23, the Changes and Annex B; C&W p.18–24; Lancashire's cross-cutting themes and Part Two; and Cumbria §1.5, §3.2 and §4.
2. **Synonym search.** I searched each section for the eight people skills using these terms: communicat\*, written, writing, literacy, English, email, report, speak\*, present\*, listen\*, language\*, translat\*, cultur\*, critical\*, judgement, question, evaluat\*, research\*, team\*, collaborat\*, coordinat\*, work readiness, job-ready, employability, behaviour\*, reliab\*, resilien\*, confiden\*, attitude, time management, adapt\*, professional\*, customer\*, client\*, front of house, interpersonal, care, empath\*, compassion, mental health and wellbeing.
3. **3s.** All 87 were checked against the section's core statements (R1).
4. **1s and 2s.** All 142 were reviewed, which is 100%: 26 in C&W, 28 in Cumbria, 26 in GM, 29 in Lancashire and 33 in LCR. Of these, 39 changed value and 14 kept their value with corrected evidence.
5. **Reproducibility.** The change specification, apply script and quote checker are in `S\wreview\` (`changes.py`, `apply.py`, `quotecheck.py`). The original files are in `S\wreview\before\`.

## 3. Consistency rulings

The five scorers read the rubric differently. Each plan's own structure (numbered headlines, "most acute" lists, key-findings boxes) had been used unevenly to decide what counts as core, and so had rule 2's cross-cutting limb. These rulings were applied to all 34 priorities. The reasons in §4 cite them.

**R1. What counts as "core" (a 3).** The skill, or an occupation defined by it (R2), must be in the priority's own headline statement or superlative list. Where each plan puts that:

| Plan | Core (3) | Supporting (2) |
|---|---|---|
| GM | The numbered headline of each sector priority (C1–C6, L1–L3, HSC1–3, EM1–3, DT1–6, CM1–4, H1–2, FBPS1–3) | The body text under a headline |
| LCR | The priority's "For the LSIP, this context highlights the need to…" sentence (p.17–20), and sentences the section itself calls most immediate, biggest, core, defining or particularly acute | Everything else in the section, including the "Employers also…" paragraphs |
| C&W | The sector's superlative statements, listed below | Other skills-needs bullets |
| Lancashire | The occupation lists under Key findings or "priority occupations", and the Digital "most commonly required" list | Items under "Increasing need for skills in" (the §4.3 manufacturing anchor) |
| Cumbria | The sector needs in §4.1.1.1 (p.26–27), the §3.2 headline gaps where they name the sector, and the sector's own Annex A key finding (role shortages or skills gaps) | Other annex and action text |

The C&W superlative statements are:

- "most acute pressures" (Advanced Manufacturing);
- "core skill areas" (Agri-tech);
- "roles most in demand" and "main workforce challenge" (Business Services);
- "most immediate" and "most urgent" (Clean Energy);
- "most in need" (Life Sciences);
- "most acute" (Construction);
- "most urgently needed" and "particularly acute" (Health & Care).

In seven C&W cells, the original evidence itself said "most acute" or "core skill area" but the weight was 2. These were raised.

**R2. Occupations stand for their defining skill.** The pairings used were:

| Named occupation | Defining skill |
|---|---|
| Engineers | `engineering` |
| Trades, welders, chefs | `practical-making` |
| Care workers, healthcare assistants, nurses | `care-empathy` |
| Supervisors, managers | `leadership` |
| Solicitors | `law-ethics` |
| Accountants, marketing | `commercial` |
| Software developers | `programming` |
| Front of house, customer service | `customer-service` |

The weight depends on where the occupation is named: in a headline it is 3, in the section body 2, and only in a SOC annex table 1.

A skill that is only implied by an occupation's work scores 1, and only if it is a core task of that occupation. So quantity surveyors imply `commercial` and `numeracy`, accountants imply `numeracy`, and communications professionals and writers imply `writing`. Manager titles don't imply `numeracy`.

**R3. Annex tables.** An annex organised by priority is part of that priority's section.

- A skill named in an upskilling-needs or skills-needs column is a named supporting need, so 2. Examples are LCR Annex A and Cumbria Annex A Figure 4.
- A course listed in a provision column is not a need.

**R4. Communication wording.**

- Unqualified "communication" maps to `speaking`.
- `writing` needs written wording: written, literacy, English, report writing, emails or "writing-heavy".
- "Negotiation" alone follows the skills.csv crosswalk to `commercial`.

**R5. Work readiness is a bundle scored at 2.** Work readiness maps to `self-management`, J1's scoreable core, as in the D review's bundle rule. The wording that triggers it includes "work readiness", "job-ready" in the behavioural sense, "employability", "behaviours", "reliability", "resilience" and "professionalism".

- Components named with it take their own skills.
- All of these score 2 unless the plan itself names that component as the priority's core gap.
- This follows the §4.3 LCR Visitor anchor. There, "A key skills need is improving work readiness" in both the section and the p.20 headline still gives `self-management` 2.
- The C&W construction phrases "job-ready" and "site-ready" are not work readiness. The plan ties them to completions and competence (p.48, p.124).
- Unlisted parts of a label-only bundle get no W weight. This differs from D (§4.2.1 rule 3, where they are "implied (1)"), because W's 1 is limited to implication by named shortage occupations.

**R6. Rule 2's cross-cutting limb: explicit application only.** A cross-cutting passage, as §4.2 defines one, applies to a priority only when one of these is true:

- the passage names that sector;
- it gives an example from that sector, or quotes an employer from it;
- the sector's own section refers back to the passage.

Blanket "all sectors", "every sector" or "across sectors" wording does not, on its own, add a weight to every priority. D already carries that demand: whole-economy wording is exactly what gives D its cross-cutting 4 (§4.2.1 rule 1a). Reading it any other way would make the rubric's words "explicitly applies to this sector" redundant.

| Passage | Applied to | Not applied |
|---|---|---|
| GM OP5 (names construction, engineering and manufacturing) | Work readiness: Construction, Eng. & Mfg | |
| GM OP4 (names social care, logistics, manufacturing, construction, creative) | `digital-ai` in those sectors | Its email sentence (no sector named) |
| C&W finding 3, p.18 ("from health and social care to advanced engineering"; the soft-skills quote is from a manufacturing employer) | Adv. Manufacturing and Health & Care only | |
| LCR p.23 (AI) | PBS, manufacturing, construction, visitor economy | |
| LCR p.35 (equality) | PBS | |
| LCR Change 6 skills passports | Construction, visitor economy | |
| LCR Change 6 p.43 ("as reported in Section 1") | The Section 1 sectors that name writing and speaking | |
| Cumbria §3.2 "Core employability skills (communication, teamwork, reliability)" | | No sector named |
| Lancashire's cross-cutting themes and Work Ready Lancashire | | No sector named for people skills |

**R7. Single quotes don't make a 3.** A single employer quote with a superlative ("the biggest challenges") doesn't lift a skill to 3 by itself. The plan's own narrative must adopt it. This is the anchor's treatment of "Reliability and commitment are the biggest challenges" (LCR p.31).

**R8. Not skills.** None of these supports a weight:

- retention and turnover;
- applicant volume or quality;
- recruitment intentions (Lancashire's 63%);
- reluctance to hire school leavers;
- KS4 attainment;
- experience;
- qualifications and licences, such as the Adult Social Care Certificate (§3.1).

**R9. Evidence must support the need.** Some cited quotes argue against the need, for example "Demand for higher level skills is weak", "Weak employer demand for net zero" and "yet to translate into training demand". Some cite third-party vacancy rates (the ESS utilities proxy). In both cases I replaced the evidence where another passage supports the weight.

**R10. Care settings.** The service-user relationship in care roles is scored under `care-empathy`. `customer-service` in a care priority needs explicit customer or client-service wording.

**R11. Clients.** "Client relationship skills", "client handling" and "engage with clients" map to `customer-service`.

**R12. Crosswalk terms are pointers, not rulings.** The skills.csv `lsip_terms` were written for D. W reads each passage on its merits. Two cases:

- GM DT4, "AI and ML engineering", is about building AI, so it is `programming`, not `digital-ai`. This agrees with the crosswalk.
- LCR's "a workforce that can operate across disciplines" means individual fusion skills (p.33), so it is not `teamwork`. This departs from the crosswalk.

**R13. Several items in one headline.**

- Items named separately each take the level. For example, "Industrial digitalisation and data-enabled production" gives `digital-ai` 3 and `data-analysis` 3.
- Where one phrase lists sub-types of one role, its primary skill takes the level and the others take 2. For example, in "technician routes for laboratory science, quality assurance and pharmaceutical manufacturing", `scientific-method` is 3 and `law-ethics` and `practical-making` are 2.

**R14. Scope outside the eight people rows.**

- Existing weights in every skill were checked.
- Missing weights in other skills were added only where the skill is in the priority's headline, which is three new rows.
- Other missing weights outside the eight rows are listed in §8. They are not changed, because an unsystematic addition would make those rows inconsistent.

## 4. Changed weights

"Old" or "New" shows – where there was no row. For removed rows, the quote column shows what had been cited.

| # | Area | Priority | Skill | Old | New | Quote and page | Reason |
|---:|---|---|---|---:|---:|---|---|
| 1 | C&W | Adv. Manufacturing | `data-analysis` | 2 | 3 | in the "most acute pressures" list: "Industrial digitalisation and data-enabled production" (p.28) | Most-acute list item (rubric 3). |
| 2 | C&W | Adv. Manufacturing | `digital-ai` | 2 | 3 | in the "most acute pressures" list: "Industrial digitalisation and data-enabled production" (p.28) | Most-acute list item (rubric 3). |
| 3 | C&W | Adv. Manufacturing | `leadership` | 2 | 3 | in the "most acute pressures" list: "Supervisory and production management roles" (p.28) | The evidence itself says "most acute", which the rubric scores 3. |
| 4 | C&W | Adv. Manufacturing | `self-management` | – | 2 | finding 3: "workplace behaviours, communication habits, reliability and practical readiness", e.g. "understanding what shift-based, safety-critical production environments in manufacturing demand" (p.18) | The cross-cutting finding gives a manufacturing example (R6). |
| 5 | C&W | Adv. Manufacturing | `speaking` | – | 2 | "soft skills – teamwork, communication, problem-solving" (Manufacturing, p.18); finding 3 ("communication habits") appears "across sectors from health and social care to advanced engineering" (p.18) | A cross-cutting finding that names the sector, plus the attributed quote (R4, R6). |
| 6 | C&W | Adv. Manufacturing | `teamwork` | – | 2 | manufacturing employer in the cross-cutting findings: "you need to allow them to learn soft skills – teamwork, communication, problem-solving" (Apprenticeships Manager, Manufacturing, p.18) | An attributed quote ties the cross-cutting need to manufacturing (R6). Problem-solving already had a 2 from the same quote. |
| 7 | C&W | Agri-tech & Food | `data-analysis` | 2 | 3 | "The core skill areas are mechatronics and automation, robotics and control systems, digital sensing and data analytics, and sustainable design and resource efficiency" (p.32) | The evidence itself says "core skill area" (rubric 3). |
| 8 | C&W | Agri-tech & Food | `sustainability` | 2 | 3 | "The core skill areas are … digital sensing and data analytics, and sustainable design and resource efficiency" (p.32) | The evidence itself says "core skill area" (rubric 3). |
| 9 | C&W | Business Services | `customer-service` | – | 1 | implied by "Customer Service Occupations" ("Delivery of customer-facing services including contact centre activity") in the BPS SOC table (Annex A, Table A3.3, p.80) | Implied by a SOC annex occupation (a 1). |
| 10 | C&W | Business Services | `programming` | – | 3 | "The roles most in demand are … software developers and digital specialists" (p.34) | A named occupation in the "most in demand" list (R1, R2), but the weight was missing. |
| 11 | C&W | Business Services | `writing` | – | 1 | implied by "marketing and communications professionals" among the roles most in demand (p.34); no writing need is named | Implied by occupation (a 1). The crosswalk puts the role's main skill under commercial. |
| 12 | C&W | Clean Energy | `leadership` | 1 | 2 | "supporting progression into supervisory and operational leadership roles which will become more important as sites come closer to operation" (p.40) | Named in the skills-needs list, not implied, but framed as a future need behind the "most immediate" technician/trade need, so 2 rather than 3. |
| 13 | C&W | Construction | `law-ethics` | 2 | 3 | QA in the "most acute" bullet: "Building supervisory, retrofit coordination and quality assurance capacity" (p.50); "installation quality and rigorous quality assurance" (p.48) | Quality assurance (the standards side of law-ethics, §3.1) is in the most-acute bullet and the key mismatches. |
| 14 | C&W | Construction | `leadership` | 2 | 3 | "Building supervisory, retrofit coordination and quality assurance capacity at Levels 4–5 … where the gap between demand and supply is most acute" (p.50) | The evidence already quoted this "most acute" bullet (rubric 3). |
| 15 | C&W | Health & Care | `speaking` | – | 2 | finding 3 ("workplace behaviours, communication habits, reliability") appears "across sectors from health and social care to advanced engineering" (p.18) | A cross-cutting finding that names the sector (R6). |
| 16 | Cumbria | Manufacturing | `commercial` | 2 | 1 | implied by "Growing demand for administration staff with knowledge of the advanced manufacturing sector" (Annex A p.41); no commercial skill is named | Administration staff are named, but commercial is at most implied. |
| 17 | Cumbria | Manufacturing | `leadership` | 1 | 2 | internal development focuses on "digital skills, automation, and leadership progression as key areas of learning and development" (Annex A p.47); "Technology leaders" (Annex A p.16) | Named in the sector's interview findings, not merely implied by SOC 1121. |
| 18 | Cumbria | Manufacturing | `self-management` | 2 | – | (removed) cited: "Weak key stage 4 attainment affecting providers' ability to place young people into apprenticeships" (Annex A p.41) | KS4 attainment (Annex A p.41) is academic attainment, not self-management (R8). No work-readiness wording names this sector. |
| 19 | Cumbria | Construction | `commercial` | 2 | 1 | implied by "Quantity surveyors L4-5" in the sector's skills needs (Annex A p.28); no commercial skill is named | QS implies commercial and numeracy but names neither. This matches GM C4 (commercial 1). |
| 20 | Cumbria | Construction | `leadership` | 1 | 2 | "Project managers L4-6" and "Site Managers" named in the sector's skills needs (Annex A p.28) | The occupations are named in the skills-needs column (R2 tiering: supporting). |
| 21 | Cumbria | Health & Care | `customer-service` | 2 | – | (removed) cited: "Certificate in Customer Service for Health and Social Care Settings" named as training provision (Annex A p.37) | The only mention is a course in the provision column (Annex A p.37), not a need. The service-user relationship sits under care-empathy (R10). |
| 22 | Cumbria | Health & Care | `law-ethics` | 2 | 1 | implied by "Social workers" and "Care managers" in the skills needs (Annex A p.36); the Adult Social Care Certificate is a qualification (§3.1), and the safeguarding certificates are listed provision | No regulatory or safeguarding need is named. Qualifications and courses are not skills needs. |
| 23 | Cumbria | Health & Care | `self-management` | 1 | 2 | "promote case studies on the effectiveness of values-based recruitment – reliability, compassion, stamina, etc – to improve retention" (4.4.2.6, p.32) | Reliability and stamina are named. The old evidence (delegated clinical skills) implies care, not self-management. |
| 24 | Cumbria | Land-based | `care-empathy` | – | 2 | essential/soft skill gaps include "mental health awareness, and neurodivergence awareness" (Annex A p.49) | Named in the same list (skills.csv term "mental health awareness (Cumbria)"). |
| 25 | Cumbria | Land-based | `customer-service` | – | 2 | essential/soft skill gaps include "customer care" (Annex A p.49) | Named in the same list that already supports teamwork, speaking and self-management. |
| 26 | Cumbria | Visitor Economy | `self-management` | 3 | 2 | "work readiness" (Annex A p.49); "Resilience and emotional intelligence is important for recruits and staff" (Annex A p.42) | Work readiness sits beside customer service in the essential-skills gaps. Components of the work-readiness bundle score 2 (R5; LCR Visitor anchor, same structure). |
| 27 | GM | Construction | `self-management` | 1 | 2 | "employers report a lack of work readiness amongst candidates entering the labour market" (OP5, p.14); OP5 is "particularly felt within construction, engineering and manufacturing" (p.14) | Named (work readiness, J1) in a cross-cutting priority that names construction: rule 2, not an implication. |
| 28 | GM | Health & Care | `customer-service` | 1 | – | (removed) cited: implied by the care and support nature of healthcare assistant and nursing roles (HSC1-2, p.18-19) | Not named. The service-user relationship in care roles is scored under care-empathy (R10). |
| 29 | GM | Health & Care | `self-management` | 2 | – | (removed) cited: care providers reported "a lack of applications and poor-quality applicants" (HSC1, p.18) | "A lack of applications and poor-quality applicants" (p.18) names applicant volume and quality, not a skill (R8). |
| 30 | GM | Digital & Tech | `digital-ai` | 3 | 2 | "As employers increasingly adopt AI within their businesses, demand for AI engineers is rising" (DT4, p.22); "use of new practices such as AI coding tools" (DT5 change, p.33) | DT4's headline is AI and ML engineering, which is programming (skills.csv crosswalk; building AI, not using it). AI use appears only as supporting context. |
| 31 | GM | Digital & Tech | `self-management` | 1 | – | (removed) cited: implied by the fast-changing nature of cyber, cloud and AI roles described throughout DT1-DT6 (p.21-23) | The "fast-changing nature" of cyber, cloud and AI roles names no skill, and the named occupations do not imply one. |
| 32 | GM | Creative & Media | `commercial` | 2 | 3 | "There is a demand for new skills in digital marketing" (CM3 headline, p.24) | CM3 is a headline, so digital marketing is a core need (R1). |
| 33 | GM | Creative & Media | `creativity` | 3 | 2 | "Designers are expected to integrate AI and digital techniques" (CM1, p.23); "skills in... motion and interactive design" (CM3, p.24) | Design is named only in the body of CM1 and CM3. No headline names it, so it is supporting (R1). |
| 34 | GM | Creative & Media | `digital-ai` | 2 | 3 | "There is a shortage of new AI skills in the creative sector" (CM1 headline, p.23); "Designers are expected to integrate AI and digital techniques" (CM1, p.23) | CM1's headline names AI skills as a core gap. |
| 35 | GM | Creative & Media | `practical-making` | 1 | 2 | CM2 names "demand for roles including music, lighting and sound technicians, hair and make-up and trades such as carpenters" (p.23) | The trades are named in CM2's body, not merely implied (R2 tiering). |
| 36 | GM | Creative & Media | `writing` | – | 2 | "Writing-heavy roles, e.g. in PR, are still human-driven but leverage AI responsibly in workflows" (CM1, p.23) | Writing is named in the section as a continuing need. |
| 37 | GM | Hospitality | `self-management` | 2 | – | (removed) cited: "we don't actually have many people coming in at entry-level roles who want to actually stay in hospitality" (H2, p.25) | Staff "who want to actually stay in hospitality" (H2, p.25) is about retention and career choice, not a skill (R8). |
| 38 | GM | Finance & Business | `customer-service` | – | 2 | "Employers typically look for workers with sales, negotiation and client relationship skills" (FBPS2, p.26) | Client relationship skills are named in the FBPS2 body (R11). |
| 39 | GM | Finance & Business | `numeracy` | 2 | 1 | implied by "a shortage of experienced accountancy and finance professionals, including chartered accountants, finance managers" (FBPS3, p.26); no maths or numeracy need is named | Implied by occupations only, which is a 1. This matches the D anchor (GM numeracy 1 from the same sentence). |
| 40 | Lancs | Manufacturing | `self-management` | 1 | – | (removed) cited: manufacturers are reporting that they mainly recruit to fill existing roles (63%) (p.15) | "Recruit to fill existing roles (63%)" is a recruitment-intention figure and names no skill (R8, as in the D review). |
| 41 | Lancs | Construction | `self-management` | 3 | 2 | Feedback from employers points to a lack of preparedness and awareness of working conditions of those entering the workplace from education leading to early leavers from the sector. (p.19) | The "lack of preparedness" sentence is in the research findings, not the Key findings list (R1). A work-readiness component scores 2 (R5). |
| 42 | Lancs | Hospitality | `self-management` | 2 | – | (removed) cited: few survey respondents expressed an interest in taking on apprentices or young people directly from school or college (p.20) | Employers' reluctance to take on school leavers describes recruitment behaviour, not a skill (R8). |
| 43 | Lancs | Social Care | `data-analysis` | 1 | 2 | "staff increasingly require digital record-keeping and data-analysis capabilities" (p.21) | Named in the section, not implied. |
| 44 | Lancs | Social Care | `self-management` | 2 | – | (removed) cited: high turnover rates … exacerbating the high turnover rate within the sector (p.21) | High turnover is a labour-market condition, not a skill (R8). |
| 45 | Lancs | Digital | `commercial` | 2 | 3 | in "The most commonly required digital skills": "Digital marketing, design and social media" (p.22); key findings: "creative marketing" (p.23) | Same list as above. |
| 46 | Lancs | Digital | `content-production` | 2 | 3 | in "The most commonly required digital skills": "Web design, development and management" (p.22); key findings: "web-related skills" (p.23) | Listed with cyber and programming (both 3) in the most-commonly-required list and the key findings. |
| 47 | Lancs | Digital | `data-analysis` | 1 | 2 | "Digital sector expansion supports cross-cutting skills needs: coding, data science, cyber security, and AI ethics" (p.22) | Named in the section's context, not only implied by SOC 2133. |
| 48 | Lancs | Clean Energy | `engineering` | 3 | 2 | named only in context: "aligning advanced engineering with net-zero goals" (p.25); the key findings name no engineering gap | The key findings list uncertainty and cyber security only. Engineering appears in a context bullet (supporting). |
| 49 | Lancs | Clean Energy | `sustainability` | 3 | 2 | context: "24/7 low-carbon power generation and clean-tech diversification" (p.25); the key findings name no sustainability skill | The old quote ("a national leader in nuclear energy") names no skill. Low-carbon appears in context only. |
| 50 | LCR | Business & Finance | `commercial` | – | 3 | headline: "strengthen capability in areas such as financial and regulatory knowledge" (p.18); "3552 Business sales executives" in demand (Annex A p.6) | Financial knowledge is in the headline; Commercial covers "costs and financial information". This was a missing headline weight. |
| 51 | LCR | Business & Finance | `critical-thinking` | 3 | 2 | "limited ability to critically assess information and use data effectively" (p.25); "able to question and cross-check information" (p.25) | It accompanies ("alongside") the headline digital gap and is not a headline item itself. |
| 52 | LCR | Business & Finance | `customer-service` | – | 2 | "particularly in the PBS sector reported a need to train the workforce on regulatory requirements including equality legislation, and the knowledge and capability to communicate inclusively and address the needs of diverse clients" (p.35) | A cross-cutting (Equality) passage that names PBS: rule 2 (R6). |
| 53 | LCR | Business & Finance | `data-analysis` | 2 | 3 | headline: "strengthen capability in areas such as financial and regulatory knowledge, digital systems and data, and leadership and management" (p.18); "use data effectively" (p.25) | Data is one of the three capabilities in the priority's headline (R1). |
| 54 | LCR | Business & Finance | `problem-solving` | 3 | 2 | work-readiness gap "includes literacy, communication (speaking formally), problem-solving" (p.25) | A component of the secondary work-readiness gap (R5). |
| 55 | LCR | Business & Finance | `self-management` | 3 | 2 | "Employers also highlight gaps in work readiness among new entrants" (p.25) | A secondary paragraph ("also"), outside the p.18 headline. Work-readiness components score 2 (R5; LCR Visitor anchor). |
| 56 | LCR | Business & Finance | `speaking` | 3 | 2 | work-readiness gap "includes literacy, communication (speaking formally), problem-solving" (p.25) | A component of the secondary work-readiness gap (R5). |
| 57 | LCR | Manufacturing | `leadership` | – | 3 | "persistent and increasing skills pressures, particularly in technician, maintenance engineering, and supervisory roles" (p.26); "the transition from operative to technician and supervisory roles" (p.26) | Supervisory roles are in the core statement (R2), but the weight was missing. Change 5 repeats it for manufacturing (p.41). |
| 58 | LCR | Manufacturing | `practical-making` | 3 | 2 | "This will particularly affect welders… who will need stronger skills in programming, operating and troubleshooting robotic systems" (p.26) | The core statements name technician, maintenance-engineering and supervisory roles (engineering, leadership). Hands-on trades appear only in a quote and in Annex A. |
| 59 | LCR | Manufacturing | `programming` | 3 | 2 | "particularly in areas such as programming, operating, and maintaining automated systems" (p.26); headline lists this "alongside" the core ("alongside digital and automation capability", p.18) | A secondary technological-change paragraph. The headline puts automation "alongside" the core. |
| 60 | LCR | Manufacturing | `sustainability` | 2 | 3 | headline: "strong demand for engineering, low-carbon and energy-related skills" (p.18); "The transition to low-carbon manufacturing… is creating additional demand for skills" (p.26) | Low-carbon skills are in the priority's headline (R1). |
| 61 | LCR | Manufacturing | `writing` | – | 2 | "Many employers also reported candidates without appropriate communication, literacy skills" (p.26) | Literacy is named (R4). |
| 62 | LCR | Health & Care | `writing` | – | 2 | upskilling needs for care workers include "communication and report writing" (Annex A p.13) | Named in the priority's Annex A upskilling-needs column (R3). |
| 63 | LCR | Visitor Economy | `commercial` | 1 | 2 | upskilling needs name "commercial awareness" (SME managers) and "sales and digital marketing for venues" (Annex A p.15) | Named in the upskilling-needs column, not merely implied (R3). |
| 64 | LCR | Visitor Economy | `numeracy` | 1 | – | (removed) cited: implied by the same SME manager/proprietor occupation (Annex A p.15) | Hotel, restaurant and travel-agency manager titles do not necessarily imply maths, and none is named (R2). |
| 65 | LCR | Creative | `commercial` | 2 | 3 | headline: "support freelance and SME capability, and improve business and leadership skills" (p.20); fusion skills include "an understanding of commercial and client requirements" (p.33) | Business skills are in the headline, alongside leadership (which already has a 3). |
| 66 | LCR | Creative | `customer-service` | – | 2 | "managing projects, budgets and client relationships" (p.33); "engage with clients from an early stage" (p.33); "client handling" (Annex A p.17) | Client service is named repeatedly (R11). |
| 67 | LCR | Creative | `data-analysis` | 1 | 2 | fusion skills combine "digital production skills, data awareness" (p.33); "data-driven content creation" (p.33) | Named in the section, so not an implication. |
| 68 | LCR | Creative | `teamwork` | 2 | – | (removed) cited: "highlights strong demand for a workforce that can operate across disciplines" (p.33) | "A workforce that can operate across disciplines" means individual fusion skills: "individuals are expected to combine artistic capability with digital production skills" (p.33). It is not collaboration, so this departs from the skills.csv term. |
| 69 | LCR | Creative | `writing` | – | 1 | implied by "3412 Authors, writers and translators" among the creative occupations in demand (Annex A p.17); no writing need is named | Implied by a SOC annex occupation (a 1). Languages stays 0: "translators" is only part of the SOC group title (as in the D review). |

### 4.1 Evidence-only corrections (weight unchanged)

| Area | Priority | Skill | Weight | New evidence | Why |
|---|---|---|---:|---|---|
| C&W | Agri-tech & Food | `digital-ai` | 3 | "digital sensing and data analytics" named among "The core skill areas" (p.32); "Embedding transferable STEM and digital skills across land-based provision at all levels, including AI literacy" (p.32) | Upheld; evidence page corrected (the "digital first entry routes" action is on p.64, not p.32). |
| C&W | Business Services | `critical-thinking` | 3 | "Employers report sustained demand for analytical, digital and advisory capability across professional services" (p.34); move "into higher-level professional, analytical and digital positions" (p.36) | Upheld; the old p.34 citation of the p.36 sentence is corrected. |
| C&W | Business Services | `digital-ai` | 3 | "Demand is particularly strong for roles that combine professional expertise with digital capability" (p.34); "Embedding AI and automation capability … across all levels" (p.36) | Upheld; the evidence now cites the sector section, not the p.64 action. |
| C&W | Clean Energy | `practical-making` | 3 | "The most immediate need is at technician and skilled-trade levels: the people who will physically build, install and maintain the infrastructure" (p.40) | Upheld; evidence replaced (the ESS utilities-proxy vacancy rates are third-party and not skill-specific). |
| C&W | Clean Energy | `sustainability` | 3 | demand "most urgent at technician and skilled-trade levels, particularly in electrical installation, grid infrastructure and low carbon systems" (p.40) | Upheld; evidence now quotes the most-urgent statement. |
| C&W | Life Sciences | `critical-thinking` | 2 | "Employers report increasing demand for biomedical scientists and clinical researchers" (p.44) | Upheld; evidence corrected (regulatory/QA professionals belong to law-ethics). |
| C&W | Construction | `practical-making` | 3 | "The core trades under pressure are those directly linked to housing and retrofit delivery: bricklaying, roofing, joinery and carpentry, plastering, plumbing and heating" (p.48) | Upheld; the paraphrase is replaced with the direct quote (electricians were not in this list). |
| C&W | Construction | `sustainability` | 3 | "retrofit coordination … capacity … where the gap between demand and supply is most acute" (p.50); "Retrofit requirements versus current competence" (p.48) | Upheld; evidence now quotes the most-acute bullet. |
| C&W | Health & Care | `care-empathy` | 3 | "Expanding Level 4–5 pathways for nursing associates, care supervisors, team leaders and advanced practitioners - the pipeline most urgently needed" (p.54); frontline care roles (p.52) | Upheld; evidence now cites the sector's most-urgent statement. |
| C&W | Health & Care | `digital-ai` | 2 | "Embedding digital competence, safeguarding knowledge and leadership skills across all levels of provision" (p.54); "rising requirements for digital competence" (p.52) | Upheld; misquotation corrected. |
| C&W | Health & Care | `law-ethics` | 2 | "Embedding digital competence, safeguarding knowledge and leadership skills across all levels of provision" (p.54); "rising requirements for digital competence and safeguarding knowledge" (p.52) | Upheld; misquotation corrected. |
| C&W | Health & Care | `self-management` | 2 | finding 3 names the sector: "interpersonal resilience required for front-line care work", "across sectors from health and social care to advanced engineering" (p.18) | Upheld; evidence replaced ("low retention" is not a skill, R8). |
| Cumbria | Manufacturing | `digital-ai` | 2 | L&D focus on "future skills such as digital, automation, and AI" (Annex A p.47); "Technology leaders able to integrate digital, robotics and AI" (Annex A p.16) | Upheld; evidence replaced ("yet to translate into training demand" cuts against). |
| Cumbria | Manufacturing | `engineering` | 3 | "Engineering, technical, and production roles were noted as being hard to fill by all of the employers who took part in 1-2-1s" (Annex A p.47); headline gap "Higher technical skills (Level 4+) in engineering, energy and digital" (p.24) | Upheld; evidence replaced (the old quote, "Demand for higher level skills is weak", cuts against the need). |
| Cumbria | Construction | `engineering` | 3 | sector need: "Construction – all trades but especially roofing, electrical, groundworkers, fenestration and civil engineering technicians" (p.26); "Civil engineers L6", "Design engineers L4-6" (Annex A p.27) | Upheld; the main-plan sector need is added to the annex paraphrase. |
| Cumbria | Energy & Net Zero | `sustainability` | 2 | "ensure all relevant apprenticeship, study programme, ASF and HE provision in Cumbria incorporates up-to-date learning about net zero" (4.3.2.1, p.30) | Upheld; evidence replaced ("Weak employer demand for net zero" cuts against). |
| Cumbria | Health & Care | `care-empathy` | 3 | "Social Care – Level 2-6 ranging from care workers to social workers and nurses" (p.27); "values-based recruitment – reliability, compassion, stamina" (p.32) | Upheld; evidence now cites needs, not the provision table. |
| GM | Health & Care | `digital-ai` | 2 | OP4 names the sector: "social care and logistics, where staff are increasingly required to use handheld devices, electronic patient records and automated systems" (p.13) | Upheld; the elided quotation is restored. |
| GM | Eng. & Mfg | `digital-ai` | 2 | OP4 names manufacturing: "staff in manufacturing are increasingly required to monitor and assess data as part of their role, again needing familiarity with digital tools" (p.13) | Upheld; evidence replaced (the EM3 quote describes mechatronics, not digital-tool use). |
| GM | Digital & Tech | `speaking` | 2 | "Being able to interpret and communicate data was mentioned as needing to complement technical skills" (DT2, p.22); AI engineers need "communication skills" (DT4, p.22) | Upheld; page corrected and DT4 added. |
| GM | Creative & Media | `content-production` | 3 | "There are shortages in technical skills for live performance" (CM2 headline, p.23); "There is a shortage in augmented reality and virtual reality skills" (CM4 headline, p.24) | Upheld; evidence re-pointed to CM2 and CM4 (CM1 now carries digital-ai). |
| Lancs | Construction | `engineering` | 2 | "local employers continue to highlight shortages across trades, supervisory roles and building services engineering" (p.18); "electricians and electrical engineers" (p.18) | Upheld; evidence corrected (SOC 5241 is electricians, a trade). |
| Lancs | Digital | `self-management` | 2 | "ongoing challenges around confidence, work readiness and access to learning" (Skills for Life, within the Digital section, p.23) | Upheld; evidence now quotes the named work-readiness challenge. |
| Lancs | Defence & Security | `commercial` | 1 | implied by "1211 - Managers and Proprietors in Agriculture and Horticulture" (Annex A p.37) | Upheld; evidence re-pointed from logistics managers (which imply leadership) to proprietors. |
| Lancs | Defence & Security | `engineering` | 3 | "Defence manufacturing powerhouse: BAE Systems' Samlesbury and Warton sites drive advanced aerospace" (p.24); defence employers' needs "are already incorporated in the LSIP through those sectors" (advanced manufacturing, digital/cyber, p.24) | Upheld: the section imports advanced manufacturing's core needs explicitly. |
| Lancs | Defence & Security | `law-ethics` | 1 | implied by "2482 – Quality assurance and regulatory professionals … Safety-critical and regulated defence manufacturing environments" (Annex A p.36) | Upheld; evidence corrected (3582 is the offshore clean-energy entry). |
| LCR | Business & Finance | `digital-ai` | 3 | headline "digital systems and data" (p.18); roles "increasingly require interaction with AI-enabled systems and digital workflows" (p.25) | Upheld; headline citation added. |
| LCR | Business & Finance | `law-ethics` | 3 | headline "financial and regulatory knowledge" (p.18); "regulatory and compliance demands are increasing across the sector, particularly in areas such as payroll, employment regulation, and governance" (p.25) | Upheld; headline citation added. |
| LCR | Manufacturing | `self-management` | 2 | "Employers also identified challenges in the work readiness of new entrants… the pace of operations, adherence to safety standards, and expectations around quality" (p.26) | Upheld; evidence corrected (the old quote was the communication/literacy clause). |

## 5. Upheld 3s

**75 of the 87 original 3s are upheld.** Several have corrected evidence (§4.1).

| Area | Priority | Upheld 3s |
|---|---|---|
| C&W | Adv. Manufacturing | `engineering`, `practical-making` |
| C&W | Agri-tech & Food | `engineering`, `digital-ai` |
| C&W | Business Services | `data-analysis`, `digital-ai`, `commercial`, `law-ethics`, `critical-thinking` |
| C&W | Clean Energy | `engineering`, `practical-making`, `sustainability` |
| C&W | Life Sciences | `scientific-method` |
| C&W | Construction | `practical-making`, `sustainability` |
| C&W | Health & Care | `care-empathy`, `leadership` |
| Cumbria | Manufacturing | `practical-making`, `engineering` |
| Cumbria | Construction | `practical-making`, `engineering` |
| Cumbria | Energy & Net Zero | `practical-making`, `engineering` |
| Cumbria | Health & Care | `care-empathy` |
| Cumbria | Land-based | `practical-making` |
| Cumbria | Visitor Economy | `practical-making`, `customer-service` |
| GM | Construction | `engineering`, `practical-making` |
| GM | Logistics | `customer-service`, `commercial` |
| GM | Health & Care | `care-empathy`, `leadership` |
| GM | Eng. & Mfg | `engineering`, `practical-making` |
| GM | Digital & Tech | `cyber-security`, `data-analysis`, `programming` |
| GM | Creative & Media | `content-production` |
| GM | Hospitality | `practical-making` |
| GM | Finance & Business | `commercial`, `law-ethics` |
| Lancs | Manufacturing | `engineering`, `practical-making` |
| Lancs | Construction | `practical-making`, `leadership` |
| Lancs | Hospitality | `practical-making`, `customer-service`, `leadership` |
| Lancs | Social Care | `care-empathy` |
| Lancs | Digital | `digital-ai`, `cyber-security`, `programming` |
| Lancs | Defence & Security | `engineering`, `cyber-security` |
| Lancs | Clean Energy | `cyber-security` |
| LCR | Business & Finance | `leadership`, `law-ethics`, `digital-ai` |
| LCR | Manufacturing | `engineering` |
| LCR | Construction | `practical-making`, `engineering`, `sustainability`, `leadership` |
| LCR | Health & Care | `care-empathy`, `leadership`, `scientific-method`, `digital-ai`, `law-ethics` |
| LCR | Visitor Economy | `leadership`, `customer-service` |
| LCR | Creative | `creativity`, `content-production`, `digital-ai`, `leadership` |

**Lowered (12):**

| Area | Priority | Skills |
|---|---|---|
| Cumbria | Visitor Economy | `self-management` |
| GM | Creative & Media | `creativity` |
| GM | Digital & Tech | `digital-ai` |
| Lancs | Clean Energy | `engineering`, `sustainability` |
| Lancs | Construction | `self-management` |
| LCR | Business & Finance | `critical-thinking`, `problem-solving`, `self-management`, `speaking` |
| LCR | Manufacturing | `practical-making`, `programming` |

**New (17):**

| Area | Priority | Skills |
|---|---|---|
| C&W | Adv. Manufacturing | `data-analysis`, `digital-ai`, `leadership` |
| C&W | Agri-tech & Food | `data-analysis`, `sustainability` |
| C&W | Business Services | `programming` (new row) |
| C&W | Construction | `law-ethics`, `leadership` |
| GM | Creative & Media | `commercial`, `digital-ai` |
| Lancs | Digital | `commercial`, `content-production` |
| LCR | Business & Finance | `data-analysis`; `commercial` (new row) |
| LCR | Manufacturing | `sustainability`; `leadership` (new row) |
| LCR | Creative | `commercial` |

## 6. Counts before and after, all 34 priorities

"Priorities" is how many priorities weight the skill. "Total weight" is the sum of its weights. The eight audited skills are in bold.

| Skill | Priorities (before → after) | Total weight (before → after) | 3s / 2s / 1s before | 3s / 2s / 1s after |
|---|---:|---:|---|---|
| `data-analysis` | 15 → 15 | 27 → 33 | 2 / 8 / 5 | 5 / 8 / 2 |
| `programming` | 5 → 6 | 12 → 14 | 3 / 1 / 1 | 3 / 2 / 1 |
| `digital-ai` | 25 → 25 | 57 → 58 | 7 / 18 / 0 | 8 / 17 / 0 |
| `cyber-security` | 7 → 7 | 18 → 18 | 4 / 3 / 0 | 4 / 3 / 0 |
| `numeracy` | 8 → 7 | 9 → 7 | 0 / 1 / 7 | 0 / 0 / 7 |
| `scientific-method` | 5 → 5 | 9 → 9 | 2 / 0 / 3 | 2 / 0 / 3 |
| `engineering` | 16 → 16 | 45 → 44 | 13 / 3 / 0 | 12 / 4 / 0 |
| `practical-making` | 21 → 21 | 55 → 55 | 16 / 2 / 3 | 15 / 4 / 2 |
| `sustainability` | 10 → 10 | 23 → 24 | 4 / 5 / 1 | 5 / 4 / 1 |
| `commercial` | 13 → 14 | 26 → 31 | 3 / 7 / 3 | 7 / 3 / 4 |
| `leadership` | 23 → 24 | 51 → 59 | 9 / 10 / 4 | 12 / 11 / 1 |
| `law-ethics` | 21 → 21 | 42 → 42 | 4 / 13 / 4 | 5 / 11 / 5 |
| **`writing`** | 2 → 7 | 4 → 12 | 0 / 2 / 0 | 0 / 5 / 2 |
| **`speaking`** | 9 → 11 | 19 → 22 | 1 / 8 / 0 | 0 / 11 / 0 |
| **`languages`** | 0 → 0 | 0 → 0 | 0 / 0 / 0 | 0 / 0 / 0 |
| **`care-empathy`** | 5 → 6 | 15 → 17 | 5 / 0 / 0 | 5 / 1 / 0 |
| **`teamwork`** | 2 → 2 | 4 → 4 | 0 / 2 / 0 | 0 / 2 / 0 |
| **`customer-service`** | 7 → 10 | 16 → 22 | 4 / 1 / 2 | 4 / 4 / 2 |
| **`self-management`** | 22 → 16 | 43 → 32 | 3 / 15 / 4 | 0 / 16 / 0 |
| **`critical-thinking`** | 4 → 4 | 10 → 9 | 2 / 2 / 0 | 1 / 3 / 0 |
| `problem-solving` | 4 → 4 | 9 → 8 | 1 / 3 / 0 | 0 / 4 / 0 |
| `creativity` | 2 → 2 | 6 → 5 | 2 / 0 / 0 | 1 / 1 / 0 |
| `content-production` | 3 → 3 | 8 → 9 | 2 / 1 / 0 | 3 / 0 / 0 |
| **All** | 229 → 236 rows | 508 → 534 | 87 / 105 / 37 | 92 / 114 / 30 |

## 7. People and communication rows after review

Cells show the new weight, with the old weight in brackets where it changed. A dot means no weight.

| Area | Priority | Writing | Speaking | Lang. | Crit. thinking | Teamwork | Managing self | Customers | Care |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| C&W | Adv. Manufacturing | · | **2** (·) | · | · | **2** (·) | **2** (·) | · | · |
| C&W | Agri-tech & Food | · | · | · | · | · | · | · | · |
| C&W | Business Services | **1** (·) | · | · | 3 | · | · | **1** (·) | · |
| C&W | Clean Energy | · | · | · | · | · | · | · | · |
| C&W | Life Sciences | · | · | · | 2 | · | · | · | · |
| C&W | Construction | · | · | · | · | · | · | · | · |
| C&W | Health & Care | · | **2** (·) | · | · | · | 2 | · | 3 |
| Cumbria | Manufacturing | · | · | · | · | · | **·** (2) | · | · |
| Cumbria | Construction | · | · | · | · | · | 2 | · | · |
| Cumbria | Energy & Net Zero | · | · | · | · | · | · | · | · |
| Cumbria | Health & Care | · | · | · | · | · | **2** (1) | **·** (2) | 3 |
| Cumbria | Land-based | · | 2 | · | · | 2 | 2 | **2** (·) | **2** (·) |
| Cumbria | Visitor Economy | · | 2 | · | · | · | **2** (3) | 3 | · |
| GM | Construction | · | · | · | · | · | **2** (1) | · | · |
| GM | Logistics | · | 2 | · | · | · | · | 3 | · |
| GM | Health & Care | · | · | · | · | · | **·** (2) | **·** (1) | 3 |
| GM | Eng. & Mfg | · | · | · | · | · | 2 | · | · |
| GM | Digital & Tech | · | 2 | · | · | · | **·** (1) | · | · |
| GM | Creative & Media | **2** (·) | · | · | · | · | · | · | · |
| GM | Hospitality | · | · | · | · | · | **·** (2) | 1 | · |
| GM | Finance & Business | · | · | · | · | · | · | **2** (·) | · |
| Lancs | Manufacturing | · | · | · | · | · | **·** (1) | · | · |
| Lancs | Construction | · | · | · | · | · | **2** (3) | · | · |
| Lancs | Hospitality | · | · | · | · | · | **·** (2) | 3 | · |
| Lancs | Social Care | · | · | · | · | · | **·** (2) | · | 3 |
| Lancs | Digital | · | · | · | 2 | · | 2 | · | · |
| Lancs | Defence & Security | · | · | · | · | · | · | · | · |
| Lancs | Clean Energy | · | · | · | · | · | · | · | · |
| LCR | Business & Finance | 2 | **2** (3) | · | **2** (3) | · | **2** (3) | **2** (·) | · |
| LCR | Manufacturing | **2** (·) | 2 | · | · | · | 2 | · | · |
| LCR | Construction | 2 | 2 | · | · | · | 2 | · | · |
| LCR | Health & Care | **2** (·) | 2 | · | · | · | 2 | · | 3 |
| LCR | Visitor Economy | · | 2 | · | · | · | 2 | 3 | · |
| LCR | Creative | **1** (·) | · | · | · | **·** (2) | 2 | **2** (·) | · |

**Notes on the empty cells:**

- **`languages`** stays empty. No plan names a foreign-language or cultural-awareness need. LCR's "communicate inclusively and address the needs of diverse clients (e.g. non-binary and LGBTQ)" (p.35) is inclusive customer service, not cultural or language skill. "3412 Authors, writers and translators" (LCR Annex A p.17) is a SOC group title, as the D review found.
- **`teamwork`** is named only in C&W Advanced Manufacturing (the p.18 quote) and Cumbria Land-based ("collaboration", Annex A p.49). Elsewhere, "team" appears only in role titles (team leaders, hospitality team members) or refers to agencies and employers collaborating.
- **Lancashire, and C&W's technical sectors**, have almost no soft-skills wording in their own sections. This confirms the D review's search (d-review §4).

## 8. Omissions outside the eight rows (not changed)

Under R14, these weights look supported but were **not added**. The table lists them for a follow-up decision.

| Area | Priority | Skill | Suggested | Quote and page | Basis |
|---|---|---|---:|---|---|
| GM | Logistics | `data-analysis` | 2 | "Employers in manufacturing and logistics reported adopting IoT devices… create demand for data expertise to analyse and interpret operational data" (OP4, p.13) | R6: names logistics; the same sentence already gives Eng. & Mfg its 2 |
| GM | Creative & Media | `leadership` | 2 | "in services such as the creative industries, good business management is necessary to make work profitable" (OP3, p.13) | R6: the same basis as the Logistics `leadership` anchor |
| GM | Creative & Media | `law-ethics` | 2 | "several interviewees specifically singled out AI ethics and responsible usage as being particularly important in this sector" (CM1, p.23) | Named in the body |
| GM | Creative & Media | `data-analysis` | 2 | "requiring skills in social media, digital analytics and motion and interactive design" (CM3, p.24) | Named in the body |
| GM | Digital & Tech | `commercial` | 2 | "the ability to operate effectively in commercial environments" (DT4, p.22) | Named in the body |
| GM | Digital & Tech | `leadership` | 2 | "support is needed to ensure development into mid-level and management roles" (DT6, p.23) | Named in the body |
| GM | Construction, Creative & Media, Finance & Business | `programming` | 2? | "interviewees beyond the tech sector e.g. financial services, construction and creative industries all reported a need for developers" (DT5, p.22) | Borderline: a spillover inside a sector section, not a cross-cutting passage (R6) |
| LCR | Business & Finance | `sustainability` | 2 | "but also extends into sectors such as professional services, where regulatory and reporting requirements are evolving" (p.34) | R6: names PBS |
| LCR | Manufacturing | `scientific-method` | 2 | Laboratory technicians: "regulatory compliance; quality assurance; data recording" (Annex A p.9) | R3 |
| LCR | Construction | `commercial` | 1–2 | "Commercial and coordination roles" (estimating, QS) (Annex A p.11) | R2, R3 |
| C&W | Adv. Manufacturing | `sustainability` | 2 | "upskill current electricians in low-carbon and renewable technologies" (p.30) | Named in the skills needs |
| C&W | Life Sciences | `programming` | 2 | "In life sciences, alongside core scientific expertise, there is growing demand for software developers" (p.22) | R6: names life sciences |
| C&W | Agri-tech & Food | `cyber-security` | 2 | young people with skills in "networking and hardware" (p.32) | Named in the body |
| C&W | Agri-tech & Food (and Clean Energy) | `commercial`, `law-ethics`, `leadership`, `scientific-method` | 2 | "ecological survey, nature-based project management, blended finance literacy and environmental governance"; "This sits at the intersection of the agri-tech and clean energy sectors" (p.24) | R6, but tentative: "may require" |
| Cumbria | Land-based | `leadership`, `digital-ai` | 2 | "management skills"; "digital skills including data handling, data analysis and AI" (Annex A p.49) | The same list as the people-skill 2s |
| Cumbria | Health & Care | `digital-ai` | 2 | "align the ASF offer to upskilling needs – digital skills, leadership and management" (4.3.2.5, p.30) | Named need |
| Lancs | Digital | `creativity` | 2 | "Digital marketing, design and social media"; "Web design, development and management" (p.22) | R13: a secondary item in a core list |
| Lancs | Defence & Security | `programming` | 1 | "2134 – Programmers and Software Development Professionals… Defence embedded and cyber-physical systems" (Annex A p.36) | R2: annex only |
| Lancs | Clean Energy | `leadership` | 1 | "2117 - Engineering Project Managers and Project Engineers" (Annex A p.36) | R2: annex only |

## 9. Sensitive rulings

1. **R6 (explicit application) matters most for the people rows.** A reading in which any "all sectors" passage counts would add about 40 people-row 2s:

   | Passage | Adds a 2 for | In |
   |---|---|---|
   | Cumbria §3.2 employability headline (p.24) | `speaking`, `teamwork`, `self-management` | All six Cumbria priorities |
   | C&W finding 3, "Across every sector represented in the survey and interviews" (p.18) | `speaking`, `self-management` | All six interviewed sectors |
   | LCR Change 6, "Section 1 highlights consistent gaps in communication, problem-solving, professional judgement" (p.42) | `speaking`, `problem-solving`, `critical-thinking` | All six LCR priorities |
   | GM OP4, "the ability to compose clear and professional emails" (p.13) | `writing` | All eight GM priorities |
   | Work Ready Lancashire (p.28) | `self-management` | All seven Lancashire priorities |

   Within each area, these rows would then be almost identical across priorities. W would lose most of its within-area signal for these skills, which D already carries.
2. **R5 (work readiness at 2).** Relaxing it would restore LCR Business & Finance `self-management`, `speaking` and `problem-solving` to 3, and Cumbria Visitor Economy `self-management` to 3. But the §4.3 LCR Visitor anchor sets the level, so relaxing R5 would contradict a signed-off example.
3. **R1 in LCR (the p.17–20 headline sentence as the core).** This ruling produced LCR's new 3s (PBS `data-analysis` and `commercial`; Manufacturing `sustainability`; Creative `commercial`) and its lowered 3s (Manufacturing `practical-making` and `programming`). If the user prefers to read only the Section 1 narrative as the "section", these are the cells to revisit.
4. **Borderline upheld 3s:**
   - LCR Construction `engineering`: it rests on "electricians and apprentice electrical engineers are the roles most urgently in need of new skills" (p.28) and "building services" in the headline shortage.
   - Lancs Defence & Security `engineering` and `cyber-security`: they rest on the section importing the manufacturing and cyber needs (p.24), since it has no key findings of its own.

## 10. Validation

After the edits I ran `node --experimental-strip-types scripts/compile-data.ts --data research/data --out <S>\compile-check-w`.

- Result: **0 errors**, 1 warning. The warning is the existing Cumbria `lsip_published` VERIFY flag.
- No weights file raises an error, and every priority keeps at least one weight. The minimum is 3 (GM Health & Care and GM Hospitality).
- The files are still UTF-8 with LF line endings and keep their column format. Existing rows keep their order; new rows sit at the end of their priority's block, highest weight first. Rows not in §4 or §4.1 are byte-identical to the originals.
