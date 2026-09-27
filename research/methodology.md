# LSIP Adventures: skills taxonomy and scoring methodology

**Research step R0. Version 1.0, 27 September 2026. Status: draft for sign-off.**

This document fixes the skills taxonomy (`research/data/clusters.csv` and `research/data/skills.csv`) and the rules every later research step must follow when scoring. No scoring should start until the user has signed it off. Section 10 lists the open questions that need an answer first. Every document cited here is listed in [sources.md](sources.md), with its URL, date, status and the saved text file.

---

## 1. Purpose and audience

LSIP Adventures is for 16–18 year olds in the five North West LSIP areas: Cheshire and Warrington, Cumbria, Greater Manchester, Lancashire and Liverpool City Region. A student picks where they live and 3–4 A levels. The app then shows how the skills those A levels develop match the skills gaps in their area's 2026–29 Local Skills Improvement Plan (LSIP).

Every number is hardcoded, sourced and reproducible. All calculations run on five score tables:

| Matrix | What it scores | Scale | Who fills it |
|---|---|---|---|
| **M** | subject → skill: how far an A level develops the skill | 0–3 | subject scorers (double-blind, §6) |
| **D** | area → skill: how strongly the area's LSIP demands the skill | 0–5 | region agents |
| **W** | priority → skill: how strongly one LSIP priority needs the skill | 0–3 | region agents |
| **N** | national demand for the skill | 0–5 | national agent |
| **Q** | quest → skill: how far a quest (project idea) uses the skill | 0–3 | quest author |

There are three audiences for this document:

- **Scorers**, human or agent. They need unambiguous rubrics with anchored examples.
- **The user**, who signs off the judgement calls.
- **Anyone checking the app later**, such as teachers, careers leaders and ERBs, who need to see why a number is what it is.

## 2. Sources summary

Full details, including URLs, retrieval status and file names, are in [sources.md](sources.md).

**All five 2026–29 LSIPs were retrieved in full.** None needed a fallback.

| Area | Document | Published | Pages | Employer evidence base |
|---|---|---|---|---|
| Cheshire and Warrington (C&W) | Cheshire & Warrington LSIP 2026-2029 (South & North Cheshire Chamber) | June 2026 | 140 PDF pages (every page appears twice, see note) | 130+ employers engaged; survey of 184 businesses (p.124) |
| Cumbria | Cumbria LSIP 2026-2029, final post-submission (Cumbria Chamber), plus Annex A *Further Evidence* and Annex A1 *Employer Skills Survey 2025* | July 2026 upload; no date printed | 42 + 51 + 44 | survey of 213 employers; 68 one-to-ones; workshops (p.38) |
| Greater Manchester (GM) | Greater Manchester LSIP (GM Chamber of Commerce) | 2026; no month printed | 86 | 111 business interviews, 165 roundtable participants, 918 Quarterly Economic Survey responses (p.5, p.78) |
| Lancashire (Lancs) | Lancashire LSIP July 2026 (North & Western Lancashire Chamber) | July 2026 | 54 | 500+ organisations surveyed; 100+ interviews (p.15) |
| Liverpool City Region (LCR) | LSIP July 2026, "Section 1" file (Liverpool Chamber), plus Annexes A (skills-needs tables), B (action plans) and C (methodology) | July 2026 | 49 + 19 + 26 + 25 | 1,618 active engagements; 635 deep-dive interviews (p.8) |

**National sources:**

- **Skills England, *Assessment of priority skills to 2030*** (12 August 2025): priority occupations across the 10 priority sectors.
- **Skills England, *Annual skills report 2026*** (1 June 2026). This is supplementary and newer than the brief. Its AI and youth-employability chapters bear directly on this taxonomy.
- **Employer Skills Survey (ESS) 2024, full UK research report** (IFF Research for DfE; November 2025, updated June 2026). It covers 22,712 employers, and its "skills lacking" categories are the main crosswalk.
- **The UK's Modern Industrial Strategy**, CP 1451, as hosted in November 2025: the IS-8 sectors and the TechFirst, engineering, defence and construction skills packages.
- **Skills Builder Universal Framework 2.0** (2025–35). It has the same eight skills as before, but *Aiming High* is renamed *Planning* and *Staying Positive* is renamed *Adapting*. The eight are grouped as Communication, Creative Problem Solving, Self-Management and Collaboration.
- **DfE GCE AS and A level subject content** (30 documents), plus AQA "specification at a glance" pages for six subjects. These are used for the M anchors.

**Page-citation convention (all matrices).** `p.N` always means the **PDF page index**, which is the `=== PAGE N ===` marker in the saved `.txt` file. It does *not* mean the number printed on the page. Some documents differ:

- **GM:** PDF page = printed page + 4.
- **Cumbria:** PDF page = printed page + 1.
- **LCR:** the two coincide.
- **Lancashire:** PDF page = printed page + 3 in the main body. The annexes restart at roman numerals from PDF page 35 (i = 35).
- **C&W:** the PDF repeats every page's text on the next page (pages 18/19, 22/23 and so on are identical). Cite the first page of each pair.

**Important:** the region notes already under `research/regions/` state their own conventions. Check that they match this one before writing `demand.csv`.

## 3. The final taxonomy

**23 skills in 6 clusters.** The "Areas" column lists the LSIPs where the skill appears in verified skills-gap language. Each phrase is in `skills.csv` → `lsip_terms`, and every phrase was machine-checked against the saved text. The "National" column gives the strongest national evidence.

| # | id | Name (short label) | Cluster | Areas | National | Why it's in |
|---|---|---|---|---|---|---|
| 1 | `data-analysis` | Data literacy and analysis (Data analysis) | Digital and data | all 5 | ESS complex numerical/statistical 25% of skill-shortage vacancies (SSVs); Industrial Strategy "data skills" | GM names data as a cross-sectoral priority (DT2); C&W ranks "digital and data capability" in its top three |
| 2 | `programming` | Programming and software (Programming) | Digital and data | C&W, GM, Lancs, LCR | Skills England: programmers are the #2 occupation for growth to 2030 (+87,000, 7 sectors) | A distinct, highly discriminating technical skill |
| 3 | `digital-ai` | Digital tools and AI literacy (Digital & AI) | Digital and data | all 5 | Industrial Strategy TechFirst, 7.5m workers in AI skills; ESS digital skills 38% of SSVs | The single most cross-cutting gap: LCR's cross-cutting priority, Lancs Priority 5, GM OP4 |
| 4 | `cyber-security` | Cyber security and IT systems (Cyber & IT) | Digital and data | all 5 | Industrial Strategy TechFirst (cyber); ESS advanced IT 25% | GM DT1/DT3/DT6; Lancs lists it first in its digital list |
| 5 | `numeracy` | Maths, modelling and numeracy (Maths) | STEM and technical | C&W, Cumbria (weak) | ESS basic numerical 26%, complex numerical 25% of SSVs; Skills England "digital and STEM skills" | Kept on national evidence; strongly discriminating (§3.2) |
| 6 | `scientific-method` | Scientific method and lab skills (Lab science) | STEM and technical | C&W, LCR (+GM, Lancs weak) | Skills England life-sciences occupations | Lab technician gaps in the life-sciences priorities |
| 7 | `engineering` | Engineering and technical skills (Engineering) | STEM and technical | all 5 | Industrial Strategy engineering package; Skills England engineering occupations in 4–5 sectors | GM OP5 is cross-sectoral; the top gap in every manufacturing and energy section |
| 8 | `practical-making` | Practical and hands-on skills (Hands-on) | STEM and technical | all 5 | ESS manual dexterity 20%, adapting to equipment 26%; Industrial Strategy construction package | Trades, welding and "practical readiness" |
| 9 | `sustainability` | Sustainability and net zero (Sustainability) | STEM and technical | all 5 | Industrial Strategy "green jobs"; Skills England clean energy +77% | C&W and LCR treat it as cross-cutting |
| 10 | `commercial` | Commercial and financial awareness (Commercial) | Business and leadership | all 5 | ESS sales skills 20%, knowledge of products/services 45% | GM L2/FBPS2; LCR "commercial awareness" |
| 11 | `leadership` | Leadership and management (Leadership) | Business and leadership | all 5 | ESS management/leadership group 46%; Industrial Strategy "management" | Cross-cutting in GM (OP3, with survey figure), Lancs, LCR and C&W |
| 12 | `law-ethics` | Law, ethics and safety (Law & ethics) | Business and leadership | all 5 | ESS: regulatory change is the joint-top reason for upskilling (37%); Skills England responsible AI | LCR Change 4; C&W "regulatory and compliance knowledge" |
| 13 | `writing` | Written communication (Writing) | Communication | GM, LCR, Cumbria | ESS reading instructions 30%, writing reports 26% | LCR literacy pilot; GM "clear and professional emails" |
| 14 | `speaking` | Speaking, listening and presenting (Speaking) | Communication | C&W, Cumbria, GM, LCR | Skills Builder Speaking + Listening; ESS presentations 17% | "Communication" is in every work-readiness list |
| 15 | `languages` | Languages and cultural awareness (Languages) | Communication | **none** | ESS foreign languages 14% of SSVs | **Exception, see §3.2 J7** |
| 16 | `care-empathy` | Care, empathy and wellbeing (Care & empathy) | People and personal skills | all 5 | Skills England: care workers are the #1 occupation for growth (+90,000) | A health and care priority in every area |
| 17 | `teamwork` | Teamwork and collaboration (Teamwork) | People and personal skills | C&W, Cumbria (+LCR weak) | ESS team working 35%; Skills Builder Teamwork | Cumbria headline gap "communication, teamwork, reliability" |
| 18 | `customer-service` | Customer and client service (Customers) | People and personal skills | Cumbria, GM, LCR (+C&W, Lancs occupations) | ESS customer handling 36% | GM L3; LCR and Cumbria visitor economy |
| 19 | `self-management` | Self-management and resilience (Managing self) | People and personal skills | all 5 | ESS self-management group 54%; Skills England "work-ready recruits" | The scoreable core of "work readiness" (§3.2 J1) |
| 20 | `critical-thinking` | Research and critical thinking (Crit. thinking) | Thinking and creating | C&W, GM, Lancs, LCR | Skills England: critical thinking for AI | Lancs "Critical evaluation of AI outputs"; LCR "critically assess information" |
| 21 | `problem-solving` | Problem-solving (Prob. solving) | Thinking and creating | C&W, GM, LCR | ESS solving complex problems 45% (up from 36%); Skills Builder | New (§3.2 J2) |
| 22 | `creativity` | Creativity, design and innovation (Creativity) | Thinking and creating | C&W, GM, Lancs, LCR | ESS creative and innovative thinking 43% | Design roles, LCR "fusion skills" |
| 23 | `content-production` | Media and content production (Media making) | Thinking and creating | C&W, GM, Lancs, LCR | IS-8 creative industries | GM creative priorities CM1–CM4; LCR "digital content production" |

**Clusters, in display order:**

1. Digital and data
2. STEM and technical
3. Business and leadership
4. Communication
5. People and personal skills
6. Thinking and creating

### 3.1 Changes from the draft

| Draft skill | Final | Rationale |
|---|---|---|
| Data literacy and analysis | **Kept** (`data-analysis`) | Evidence in all five LSIPs. |
| Programming and software | **Kept** (`programming`) | |
| Digital tools and AI literacy | **Kept** (`digital-ai`) | I considered splitting off "AI literacy", but no A level specification develops it explicitly, so it would score 0–1 for every subject and add nothing but denominator. |
| Cyber and information security | **Broadened** to *Cyber security and IT systems* | Employers also name cloud (GM DT3), IT technicians (GM DT6), "Infrastructure, cloud and connectivity" (Lancs) and specialist systems skills (ESS: 28% of digital SSVs). Broadening also lets Computer Science, whose Paper 2 covers architecture, networking and security, reach a 3. A security-only skill would have had no subject above 2. |
| Mathematical modelling and numeracy | **Renamed** *Maths, modelling and numeracy* | The draft name is 35 characters, over the 34-character limit. Retained despite weak LSIP evidence (J6). |
| Scientific method and lab practice | **Renamed** *Scientific method and lab skills* | Plainer wording. |
| Engineering and technical problem-solving | **Split** into *Engineering and technical skills* plus new *Problem-solving* | "Problem-solving" is a general skill that Maths, Computer Science and D&T develop as much as Engineering. Leaving it inside the engineering skill hid it (J2). |
| Sustainability and net-zero literacy | **Renamed** *Sustainability and net zero* | Shorter; "literacy" adds nothing for a 16-year-old. |
| Commercial and financial awareness | **Kept**, and now absorbs *enterprise* and sales/marketing | See the enterprise row. |
| Enterprise and innovation | **Dissolved** | LSIP enterprise language is thin: only LCR's creative-sector "freelance business capability". *Innovation* moves to Creativity, where the ESS pairs it ("creative and innovative thinking", 43%). *Enterprise/self-employment* moves into the Commercial definition. |
| Project management and organisation | **Split** | *Managing projects, resources and budgets* moves to Leadership and management; ESS groups "setting objectives for others / planning resources" with management, and LCR's own phrase is "leadership and project management". *Organising your own time and tasks* moves to the new Self-management skill. Otherwise every subject with non-exam assessment (NEA) would score identically on both. |
| Leadership and people management | **Renamed** *Leadership and management* | This is the exact phrase used in all five LSIPs. |
| Written communication | **Kept** | |
| Speaking and presenting | **Renamed** *Speaking, listening and presenting* | Skills Builder treats speaking and listening as one Communication pair, and employers say "communication". |
| Languages and intercultural | **Renamed** *Languages and cultural awareness*; kept as an exception | J7. |
| Care, empathy and wellbeing | **Kept** | |
| Teamwork and collaboration | **Kept** | |
| Customer and client service | **Kept** | J8. |
| Critical thinking and evaluation + Research and investigation | **Merged** into *Research and critical thinking* | J3. |
| Ethics, law and compliance | **Renamed** *Law, ethics and safety* (`law-ethics`) | "Compliance" is jargon to a 16-year-old. Health and safety and safeguarding are the concrete forms employers name most often. "Regulation" stays in the definition and in `lsip_terms`. |
| Design and creativity | **Renamed** *Creativity, design and innovation* | Absorbs innovation. |
| Creative and digital content production | **Renamed** *Media and content production* | The draft name is 39 characters. |
| Practical and hands-on making | **Renamed** *Practical and hands-on skills*; moved to STEM and technical | LSIP language covers installing, maintaining and repairing, not just making. It sits better beside engineering than in "Thinking and making". |
| *(new)* | **Self-management and resilience** | J1. |
| *(new)* | **Problem-solving** | J2. |

**Considered and rejected as skills.** Each of these is a real employer need, but it is not a *skill type* an A level can develop.

- **Experience:** Lancashire's "experience gap", and GM's "mid-level work experience". This is a labour-market condition.
- **Job-specific or specialist knowledge:** the ESS's single biggest category (66% of SSVs), plus knowledge of the organisation's products (45%). These are learned in the job.
- **Occupational licences and qualifications:** HGV and driving licences, Level 3 electrical qualifications, the SQE, the Care Certificate.
- **Sector technologies:** BIM, hydrogen, SMR/nuclear, PCB repair, AR/VR. These are folded into engineering, content production or cyber as appropriate, and scored through them.
- **Quality assurance and ISO standards** (C&W, LCR). These are folded into Law, ethics and safety (the standards side) and Scientific method (the testing side).

Region agents should record these in `gaps.csv` or `cross_cutting.csv` wherever they matter. They should **not** be forced onto a skill.

### 3.2 Key judgement calls

**J1. "Work readiness" becomes *Self-management and resilience*, not its own skill.**

Work readiness is the most consistent cross-cutting finding in all five plans:

- **GM:** "lack of work readiness amongst candidates entering the labour market" (p.14).
- **Lancashire:** its goal "to improve the work readiness / employability skills of people entering work for the first time" (p.28).
- **LCR:** Change 6 (p.42).
- **C&W:** the headline survey finding (p.18).
- **Cumbria:** "Core employability skills (communication, teamwork, reliability)" (p.24).

But "work readiness" is a bundle, not a skill. It combines communication, teamwork, reliability and professionalism, managing one's own time, resilience, and *experience of work*. No A level specification assesses "work readiness", so as a single skill it would score 0–1 for every subject. It would lower every student's fit equally and tell them nothing.

This taxonomy therefore:

1. Scores each *skill* component where it belongs: Speaking and Writing, Teamwork, Customer service, and the new **Self-management and resilience**. The new skill matches Skills Builder UF2's Self-Management pair (Planning + Adapting), the ESS "self-management" group (54% of SSVs, the most common people-skills gap), and the Skills England 2026 call for "work-ready" recruits (p.8).
2. Treats the *experience* component as a cross-cutting message (`cross_cutting.csv`) that the app shows to everyone: build it through work experience, volunteering and part-time work.

Self-management *can* be scored, modestly. Specifications that require a long, self-directed project (NEA) or live assessed performance develop it more than exam-only courses do. See the rubric notes in §4.1.

**J2. Problem-solving becomes its own skill.**

- **National evidence is the strongest of any skill.** The ESS names "solving complex problems" in 45% of SSVs, up from 36% in 2022 (ESS p.48). Skills England 2026 lists problem solving among the transferable skills employers value (p.8), and it is a Skills Builder skill.
- **LSIP evidence is explicit.** LCR cites "communication, problem-solving, professional judgement" as all-sector new-entrant gaps (p.42). C&W quotes "teamwork, communication, problem-solving" (p.18).
- **It discriminates.** Maths ("OT2 Mathematical problem solving", DfE maths p.4), Computer Science ("take a systematic approach to problem solving", DfE CS p.2) and D&T score high. Most essay subjects score 1–2.

**J3. Research is merged into critical thinking.**

"Research" as a transferable skill does not appear in any LSIP's gap language. It appears only as R&D *occupations*, such as C&W's "biomedical researchers" and GM's "engineers for R&D positions". The two skills would also be scored almost identically for every subject: the same NEA investigation or source-evaluation evidence would support both, making them near-duplicates.

The merged skill is *finding and weighing up evidence and reaching judgements*. It matches the strong, AI-driven employer language: Lancs "Critical evaluation of AI outputs", LCR "critically review what it produces", and Skills England's "critical thinking and analytical skills" (p.7). Scientific experimentation stays under `scientific-method`.

**J4. Enterprise is dissolved.** See the table in §3.1.

**J5. Project management is split.** See the table in §3.1.

**J6. Numeracy is kept despite thin LSIP language.**

- **LSIP evidence:** only Cumbria's survey option "Basic numerical skills and understanding" (Annex A1 p.15, about 6% of respondents, read from the chart) and C&W's "data modelling skills" (p.22). No LSIP names a maths gap outright.
- **National evidence:** the ESS reports basic numerical skills in 26% of SSVs and complex numerical/statistical skills in 25% (p.48–49). Skills England stresses "the broad need for digital and STEM skills" (Assessment p.19).
- **Why it matters:** it is the most reliably scoreable skill in the set. DfE sets minimum maths weightings for most subjects (§4.1), so dropping it would hide what makes Maths, Further Maths, Physics, Statistics, Economics and Accounting distinctive.
- **Consequence:** D will honestly show low local demand, 1–2 in most areas.

**J7. Languages is kept as the only exception to criterion 1.**

No LSIP mentions foreign languages, and the ESS figure (14% of SSVs, down from 18%) is moderate, not a "strong national priority". The skill fails criterion 1. It is retained because:

1. It is the defining skill of four A levels: French, Spanish, German and Chinese. Without it their profiles would show only generic communication.
2. It is the most discriminating skill in the matrix.
3. With D ≈ 0–1 everywhere, it barely affects area fit. It simply lets the app say truthfully "your area's plan doesn't highlight languages; nationally, 1 in 7 skill-shortage vacancies involve them".

**The user should decide:** keep it (recommended), or drop it and accept that language students' profiles are thinner.

**J8. Leadership and customer service are kept although A levels barely develop them.**

Both are in high demand in almost every area (§4.2), but only Business, and the applied Health & Social Care and Sport qualifications, will score 2 or more. Keeping them is deliberate. They become the app's "skills worth adding" (work experience, volunteering, part-time jobs), so the tool doesn't imply that A levels cover everything employers want. Section 10 asks whether they should count in the fit denominator.

**J9. The AI part of `digital-ai` will score low for every subject.** Current specifications predate generative AI. This is a real gap, and it should be reported rather than inflated.

## 4. Rubrics

### 4.1 M: subject → skill (0–3)

| Score | Meaning |
|---|---|
| **0** | Not meaningfully developed. The skill plays no real part in what the specification requires. |
| **1** | Incidental. Students will use it occasionally, but the specification neither requires nor assesses it. Group work in class, for example, or writing a sentence of explanation in a maths answer. |
| **2** | A regularly practised, assessed part of the specification: a named content area, a required skill, a minimum mark weighting, or a regular feature of exam questions. |
| **3** | Core to the assessment objectives, or the focus of the NEA or required practicals. The skill is what the qualification is largely *about*, or a substantial assessed component (roughly ≥ 20% of marks) exists to assess it directly. |

**Evidence base.** Score against the **DfE GCE AS and A level subject content**, which is common to all boards, and one named **reference specification**. For subjects with a single board, that board's spec is the reference. For multi-board subjects, use the most widely taken board (below). Only count a board-specific component, such as an NEA option, if it is in the reference spec, and note in `evidence` if other boards differ. Every score of 2 or 3 needs an evidence note (≤ 200 characters) and a `source` URL with page or section.

**Scoring rules** (these resolve most disagreements):

1. **Score the skill, not the topic.** Studying *about* a skill, such as leadership theory in Business or mental-health disorders in Psychology, scores **at most 2**. It scores 2 only if the assessment regularly requires applying it to realistic cases; otherwise 1.
2. **Maths weightings (numeracy):**
   - 3 if the whole content is mathematical, or at least 40% of marks require Level 2+ maths;
   - 2 if the DfE sets a minimum of 10–39%;
   - 1 if maths is used but no minimum is set;
   - 0 otherwise.
3. **NEA, practicals and performances.** A skill that is the explicit focus of an NEA or practical component worth ≥ 20%, or of the Practical Endorsement, is eligible for 3.
4. **Self-management:**
   - 2 when the spec requires a substantial self-directed extended project (NEA ≥ 20%) or a live assessed performance;
   - 3 only when ≥ 50% of the qualification is a self-directed extended project (for example the Art and Design titles, and D&T's 50% NEA);
   - 1 for exam-only courses.
5. **Teamwork scores 2+ only when group work is assessed**, for example devised group performance or ensemble performance.
6. **Don't double-count one activity at 3 across near-neighbour skills without separate evidence.** An experiment is `scientific-method` 3 but only `practical-making` 1–2. A design brief is `creativity` 3; making the prototype is separately `practical-making`.
7. **Applied/vocational subjects** in `subjects.ts` have no DfE A level content: Applied Science, Engineering, Health & Social Care, Construction & the Built Environment, Criminology, Sport & Exercise Science and Food Science & Nutrition. Score them against the named Level 3 qualification's unit content and assessment. For mandatory units, assessed internally (coursework) versus externally (exam), apply the same 0–3 logic.

**Proposed reference specifications** (VERIFY = the scorer must confirm the current title and URL before scoring):

| Subject | Reference | Subject | Reference |
|---|---|---|---|
| Mathematics | DfE + Pearson Edexcel | English Language | DfE + AQA |
| Further Mathematics | DfE + Pearson Edexcel | English Literature | DfE + AQA (Lit A) |
| Statistics | DfE + Pearson Edexcel (only board) | English Lang & Lit | DfE + AQA |
| Computer Science | DfE + OCR (AQA 7517 also checked) | French / Spanish / German | DfE MFL + AQA (French 7652 checked) |
| Biology / Chemistry / Physics | DfE science + AQA (or OCR A) | Chinese (Mandarin) | DfE MFL (Chinese annex) + Pearson Edexcel (only board) |
| Applied Science | VERIFY: Pearson BTEC Level 3 National Extended Certificate, or AQA Level 3 Extended Certificate | Art & Design titles (Fine Art, Graphic Communication, Photography, Textile Design) | DfE art and design + AQA (title-specific) |
| Environmental Science | DfE + AQA (only board) | Film Studies | DfE + Eduqas (only board) |
| Psychology | DfE science (Appendix 4) + AQA 7182 | Media Studies | DfE + AQA or Eduqas |
| Engineering | VERIFY: Pearson BTEC Level 3 National Extended Certificate in Engineering | Music | DfE + AQA or Pearson |
| D&T (Product Design) | DfE + AQA 7552 | Music Technology | DfE + Pearson (only board) |
| Health & Social Care | VERIFY: Pearson BTEC National or OCR Cambridge Technical / Advanced National | Drama & Theatre | DfE + AQA |
| Construction & the Built Environment | VERIFY: Pearson BTEC National | Dance | DfE + AQA (only board) |
| Business Studies | DfE + AQA 7132 | Physical Education | DfE + AQA or OCR |
| Economics | DfE + AQA or Pearson A | Sport & Exercise Science | VERIFY: Pearson BTEC National or equivalent |
| Accounting | DfE + AQA | Food Science & Nutrition | VERIFY: WJEC/Eduqas Level 3 Applied Certificate/Diploma |
| Law | DfE (2022) + AQA or OCR | Geography | DfE + AQA 7037 |
| History | DfE + AQA or Pearson | Politics | DfE (2022) + AQA or Pearson |
| Sociology | DfE + AQA | Philosophy | DfE + AQA (only board) |
| Religious Studies | DfE + OCR or AQA | Criminology | VERIFY: WJEC/Eduqas Level 3 Applied Diploma |

**Anchored worked examples.** These are the calibration set: both scorers read them before starting. The DfE documents are the files in `pdfs/r0-dfe/`, with URLs in sources.md.

| # | Subject × skill | Score | Evidence (why this level, not the next) |
|---|---|---|---|
| A1 | Mathematics × `numeracy` | **3** | DfE maths content: the overarching themes "OT2 Mathematical problem solving" and "OT3 Mathematical modelling" (p.4–5) apply to all content, "assessed in the context of the overarching themes, represents 100% of the content" (p.6). |
| A2 | Physics × `numeracy` | **3** | DfE science Appendix 6: "at least 10% level 2 or above mathematical skills for biology and psychology, 20% for chemistry and 40% for physics" (p.24). Physics clears the 40% threshold. |
| A3 | Chemistry × `numeracy`; Biology × `numeracy` | **2**; **2** | Same source (p.24): 20% and 10% minimums are regular and assessed, but not what the course is about. |
| A4 | English Literature × `numeracy` | **0** | The DfE English literature content has no quantitative element. |
| A5 | Chemistry × `scientific-method` | **3** | DfE science Appendix 5: students must carry out "a minimum of 12 practical activities, which will contribute towards the Practical Endorsement", and practical skills are also examined (p.18). |
| A6 | Psychology × `scientific-method` | **2** | DfE requires "the design and reporting of investigations" and "inferential statistics" (p.17). But "students are expected to carry out ethical, investigative activities … but they will not be directly assessed on these activities" (p.16). There are no required practicals or endorsement, so the score is 2, not 3. |
| A7 | Computer Science × `programming` | **3** | DfE CS content: "fundamentals of programming" (p.1). AQA 7517: an on-screen programming exam (Paper 1, 40%) plus an NEA practical problem-solving project (20%). |
| A8 | Computer Science × `law-ethics` | **2** | DfE CS: "the individual (moral), social (ethical), legal and cultural opportunities and risks of digital technology" (p.2). This is assessed content, not a focus. |
| A9 | Geography × `critical-thinking` | **3** | AQA 7037 NEA (20%): an individual investigation of 3,000–4,000 words on "a question or issue defined and developed by the student", including "data collected in the field". |
| A10 | Geography × `data-analysis` | **2** | DfE geography requires "quantitative and qualitative skills and approaches" and geospatial data (p.4), assessed across papers and the NEA. Data isn't the course's focus, so it scores 2, not 3. |
| A11 | D&T × `practical-making` and × `creativity` | **3** and **3** | DfE D&T: "applying iterative design processes" (p.3) and "work safely and skilfully to produce high-quality prototypes/products" (p.4). AQA 7552 NEA: a "substantial design and make project", 50% of the A level. |
| A12 | D&T × `leadership` | **2** | DfE D&T: "approaches to project management, such as critical path analysis, scrum or six sigma" (p.7), which is examined and applied to planning the NEA. Leading people is not required, so it scores 2, not 3. |
| A13 | French × `speaking` and × `languages` | **3** and **3** | AQA 7652 Paper 3: a speaking exam worth 30%, including presentation and discussion of an individual research project. DfE MFL: communicate "through oral presentation and discussion" (p.6). |
| A14 | Business × `commercial` / × `numeracy` / × `leadership` / × `practical-making` | **3** / **2** / **2** / **0** | Commercial: the DfE business content *is* marketing, finance, operations and people, across three 33.3% papers (AQA 7132). Numeracy: quantitative skills "a minimum of 10% of the overall A level marks" (DfE business p.5). Leadership: examined through applying management and motivation decisions to case studies (rule 1 cap). Practical-making: none. |
| A15 | History × `critical-thinking`; History × `writing` | **3**; **3** | DfE history: "use historical sources critically", plus "a historical enquiry that is independently researched" (p.3). All assessment is extended written argument. |
| A16 | Mathematics × `writing` | **1** | Students write short justifications and proofs, but written communication is not assessed as such. |
| A17 | Drama & Theatre × `teamwork` | **3** | DfE drama: "understand and experience the collaborative relationship between various roles" (p.4). A level requires "a minimum of two performances, one devised" (p.5), and devising and performance are practically assessed. Confirm group assessment in the reference spec. |
| A18 | Psychology × `care-empathy` | **1** | Mental health is studied as knowledge (rule 1), with no caring practice. By contrast, Health & Social Care would score 3, because it assesses care values and communication in care settings. |

**What a 3 usually looks like, by skill.** This is a scorer's aid; it is not binding.

| Skill | Typical 3 | Typical 1 / common confusion |
|---|---|---|
| data-analysis | Statistics; Psychology research methods only if inferential statistics are central to the reference spec | Using a graph now and then is 1 |
| programming | Computer Science | Maths "algorithms" are not programming (1 at most) |
| digital-ai | Few, if any; Computer Science may reach 2 | Media and Music Tech software counts under `content-production` |
| cyber-security | Computer Science | — |
| numeracy | Maths, Further Maths, Statistics, Physics, Accounting | Rule 2 thresholds |
| scientific-method | Biology, Chemistry, Physics (Practical Endorsement); Applied Science; Environmental Science if practicals are required | Social-science research methods are 2 at most |
| engineering | Engineering; D&T possibly | Physics principles without application are 2 |
| practical-making | D&T, Engineering, Construction, Art titles, Textiles, Food Science | Lab technique belongs in `scientific-method` |
| sustainability | Environmental Science, Geography | Brief mention of sustainability is 1 |
| commercial | Business, Accounting, Economics (2–3) | — |
| leadership | Business (2), PE with a coaching role (2) | Rule 1 cap |
| law-ethics | Law, Criminology, Health & Social Care | Religious Studies and Philosophy ethics are ethical theory (2) |
| writing | English, History, the essay-based humanities | — |
| speaking | Modern foreign languages, Drama | Class discussion is 1 |
| languages | French, Spanish, German, Chinese | English Language studies language but is not a foreign language (1) |
| care-empathy | Health & Social Care | Rule 1 |
| teamwork | Drama, Dance (group choreography), Music ensemble | Rule 5 |
| customer-service | Rarely above 2 | Business marketing knowledge is 1–2 |
| self-management | Art titles, D&T | Rule 4 |
| critical-thinking | History, English Literature, Philosophy, Politics, Sociology, RS, Law, Geography NEA | — |
| problem-solving | Maths, Further Maths, Computer Science, Physics, D&T, Engineering | "Evaluate" in essay mark schemes belongs in critical-thinking |
| creativity | Art titles, D&T, Drama (devising), Dance (choreography), Music (composing) | — |
| content-production | Media, Film, Photography, Music Technology, Graphic Communication | Analysing media without producing it is 1 |

### 4.1.1 Adjudication rulings (R2)

The R2 adjudicator made these rulings after double scoring, to settle the ambiguities the scorers raised. They bind any re-scoring of M. The cells each ruling affected are listed in [m-adjudication.md](m-adjudication.md).

1. **Precedence.** The score levels, rules 1–7 and anchors A1–A18 are binding. The "typical 3" table is only an aid, so where the two conflict, the rules win. A conditional entry in the table ("if practicals are required", "Music ensemble", "PE with a coaching role") applies only when the condition is met under the rules. A subject that the table leaves out can still score 3.
2. **What meets level 2.** Any one of the listed forms is enough:
   - a dedicated item of compulsory content that is examined;
   - a skill the DfE or reference content requires;
   - a minimum mark weighting;
   - a regular assessment feature.

   The skill does not also have to be "separately assessed" or "the assessed focus". These do not meet level 2 on their own: a context inside another topic (externalities under market failure), an aim or rationale sentence, and optional content. Rule 1's cap still applies.
3. **Options.** Score only what every candidate on the reference spec must do (§9, limitation 3). Optional topics, routes, roles and units don't count, unless every permitted option shares the property (for example, every optional BTEC unit is internally assessed). Some results:
   - Music × teamwork is 1, because ensemble is optional.
   - Drama × speaking is 2, not 3, because students may take designer roles.
   - Politics × sustainability is 0, because ecologism is optional.
4. **Rule 6 (near-neighbour skills).** One activity supports only one 3 among near-neighbour skills. The neighbour scores 2 if a distinct required, assessed element exists, and 1 otherwise. One component can support two 3s only when each skill has its own named requirement (A11, A13, A15).
   - Photography and Graphic Communication score content-production 3 and practical-making 2, because work may be wholly digital.
   - Fine Art and Textile Design keep practical-making 3.
   - Biology, Chemistry and Physics score practical-making 2. The apparatus and technique skills they directly assess (DfE science Appendix 5b–5c) are separate from investigative method.
5. **Environmental Science × scientific-method is 3.** Level 3 includes "the focus of … required practicals". The DfE requires 4 days' fieldwork (or 2 days plus 12 lab activities), using at least 6 sampling techniques and 6 methodologies, and research methods are examined in both papers. A6's cap applies where practical work is only *expected*. The Practical Endorsement is enough for a 3 but is not required.
6. **Numeracy (rule 2).**
   - A stated minimum below 10% of total marks scores 1. This covers PE (5%) and D&T, whose Ofqual minimum of 15% of exam marks is 7.5% of the total.
   - Ofqual subject-level minimums count the same as DfE ones.
   - Applied qualifications set no minimum. For them, use the share of GLH in units whose assessment is mainly Level 2+ maths: 40% or more scores 3, and 10–39% scores 2. Engineering and Construction (Unit 1, 33%) score 2.
   - Rule 2's bands apply to numeracy only.
7. **The 20% bar.** "Roughly ≥ 20%" means at least 20%, which is 72 of 360 GLH. A 60-GLH unit (16.7%) that is wholly about one skill scores 2. It reaches 3 only if other components that directly assess the same skill take the total to 20%. Engineering × teamwork, leadership and practical-making therefore score 2, as does Construction × law-ethics.
8. **Doing versus knowing in applied units (rule 1).** Only the parts of a unit that assess the learner *doing* the skill count towards the 20% bar.
   - Sport & Exercise Science × leadership stays 2. Only one of Unit 6's three assignments (plan, deliver and review a session) assesses leading others.
   - Evaluating how other people use a skill counts as studying about it, so Criminology × scientific-method is 1.
9. **Self-management (rule 4).**
   - In applied qualifications, internally assessed units count as substantial non-exam work, whether they are centre-marked assignments or controlled assessments. If they make up at least 20% of GLH, the score is 2.
   - Externally set, supervised set tasks count as examinations.
   - A 3 needs at least 50% of the qualification to be a project that the learner defines. Teacher-set assignment briefs don't count, even when added together, so Criminology scores 2.
   - A live assessed practical scores 2 (PE NEA, 30%). So does an individual research project that is examined orally, which covers all four MFLs.
10. **Food Science & Nutrition** is scored as the WJEC Level 3 Applied Diploma (360 GLH, the same size as one A level). That means Units 1 and 2, plus anything the two optional units have in common. The Certificate is not used.
11. **Writing.**
    - **3:** extended written argument is the main mode of assessment, and the DfE content (or the reference spec's AOs) requires written argument or written communication. Alternatively, a component worth at least 20% is itself a writing paper.
    - **2:** extended writing is a regular assessed feature. This can be an essay or "extended writing" question type in the papers, a required prose element in the NEA, or written reports that form the main evidence for a mandatory internal unit or NEA.
    - **1:** short answers and annotation only.
    - The MFLs (including Chinese), Film, Media and Dance score 3. Economics, Business and Drama stay at 2, because their DfE content doesn't name writing.
12. **Teamwork (rule 5).** A score of 2 or more needs assessed group work. A score of 1 needs something in the specification: collaboration it requires, group data collection, or assessed reflection on interpersonal skills. Classroom group work that the spec doesn't mention scores 0.
13. **Problem-solving.**
    - It counts when students must solve set problems by choosing and applying methods. Examples: quantitative problems in unfamiliar contexts, applying rules to scenarios, design or technical briefs, and finding and fixing faults.
    - It scores 3 when this is central to assessment.
    - Discursive evaluation belongs to critical-thinking. So does "problem" used as a topic label, such as the problem of evil.
    - Exam-only essay subjects score 0. Creative subjects that work to a brief score 1.
14. **Digital tools and AI.**
    - **2:** named, assessed content on using digital systems (Computer Science).
    - **1:** the spec requires or expects students to use digital tools (for example, Maths "must permeate", science software, online sources in MFL), or studies technology as content.
    - **0:** otherwise.
    - Software used to make media counts under content-production. No current spec develops AI literacy (J9).
15. **When an assessment objective makes a skill "core to the AOs"** (added in the Checkpoint 2 follow-up).
    - An AO that directly and wholly assesses critical thinking, meaning evaluating evidence, information, theories or arguments to reach judgements, and carries at least 20% of the marks across the papers, makes the skill core to the AOs. That is level 3. Examples: Sociology AO3 25%, Psychology AO3 36–38%, Economics AO4 22–25%, Business AO4 23–26%, Accounting AO3 40–42%, PE AO3 22–25%.
    - An AO that bundles the skill with something else does not count. The MFL AO4 ("knowledge and understanding of, and respond critically…", 20%, with 80% of marks on language) stays at 2.
    - Nor does an AO that appraises artworks or performances, including one's own. Examples: Music, Dance and Drama AO4, and Art AO1.
    - Rule 6 applies: if the AO's evaluation is already the evidence for a 3 in a near-neighbour skill, it does not also give critical-thinking 3. That covers scientific-method in the sciences, data-analysis in Statistics, and problem-solving in Maths and CS.
    - The same bundling logic applies to creativity. "Respond creatively" wording, an aim, or an AO that bundles creativity with written expression (English Literature AO1) gives at most 1. A 2 or more needs an assessed production task.

### 4.2 D: area → skill demand (0–5)

| Score | Meaning |
|---|---|
| **5** | A cross-cutting or top-priority gap **with** employer survey evidence. |
| **4** | A gap in 2 or more priority sectors. This includes cross-cutting gaps that have no quantified employer evidence. |
| **3** | A gap in one priority sector. |
| **2** | A supporting mention: named as a need, but not stated as a gap or shortage. For example, it appears only in actions, research to be done, context or strategy summaries, or occupation tables. |
| **1** | Implicit only: not named, but necessarily implied by a named shortage. |
| **0** | Absent. |

**Rules.**

- **Scope.** Evidence comes from the area's 2026–29 LSIP and its official annexes, such as Cumbria's Annex A and A1.
  - Do not use national figures quoted inside an LSIP, such as LCR's quotation of the ESS on p.42; those feed N.
  - Local or North West ESS figures that an LSIP cites *for a specific skill* do count as survey evidence.
- **Cross-cutting** means one of two things:
  - the LSIP labels the need cross-cutting, overarching, "across all sectors" or common to all sectors; or
  - it is one of the plan's headline priorities or changes. These are GM OP1–OP6; LCR's cross-cutting priority and Changes 1–6; C&W's three cross-cutting priorities and the employer-perspective findings; Lancashire's cross-cutting themes and Main Priorities 1–5; and Cumbria's six key skills priorities and §3.2 headline gaps.
- **Employer survey evidence** means a quantified finding from the ERB's own survey or structured engagement, attributable to this skill. Examples: a percentage, "more than half", "virtually all deep-dive interviews", or a chart value.
- **One skill, one score per area.** Take the highest level the evidence supports.
  - `evidence` holds the single strongest quote, ≤ 200 characters, trimmed with "…" if needed.
  - `source` is `URL p.N`, with extra pages as `p.12, p.13` when two quotes together meet the level (for example cross-cutting plus survey).
  - Use the direct PDF URL, not a landing page.
- **Check the extremes.** A second reviewer checks every 5 and every 0.

**Anchored examples** (all quotes verified against the saved text):

| Area × skill | D | Quote and page | Why |
|---|---|---|---|
| GM × `leadership` | **5** | "Strengthen leadership and management capabilities across the workforce." (p.12, OP3, SIC "Cross-sectorial") + "According to the LSIP survey, more than half of employers report difficulties filling professional and managerial roles." (p.12) | A cross-cutting priority with a survey figure |
| C&W × `self-management` | **5** | "Across every sector represented in the survey and interviews, employers flagged the same gap: candidates arriving with qualifications but without the workplace behaviours, communication habits, reliability and practical readiness that employment requires." (p.18; survey of 184, p.124) | All sectors, survey-based |
| LCR × `digital-ai` | **5** | "The cross-cutting theme is AI and Digital Transformation." (p.22) + "in virtually all of the deep dive interviews … identified digital and AI capability as a critical and immediate skills gap" (p.23; 635 interviews, p.8) | Cross-cutting, with quantified structured engagement |
| GM × `data-analysis` | **4** | "There is a shortage of data skills." (p.21, DT2) + "staff in manufacturing are increasingly required to monitor and assess data as part of their role" (p.13) | A gap in 2+ sectors, but no survey figure |
| Lancs × `cyber-security` | **4** | "Cyber security" heads "the most commonly required digital skills" (p.22) + "Cyber security is an important element within this sector" (Clean Energy & Nuclear, p.25) | Named in 2+ priority sectors |
| GM × `customer-service` | **3** | "There is a shortage of customer service skills within the logistics sector." (p.18, L3) | One priority sector |
| LCR × `scientific-method` | **3** | "…a growing need for laboratory technicians and technical specialists capable of working in…" (p.30, Health, Life Science and Care) | One priority sector |
| Cumbria × `cyber-security` | **2** | "understand the opportunities and impact of AI, robotics and cyber security on workforce skills" (p.30) | An action to investigate, not a stated gap |
| GM × `numeracy` | **1** | No maths or numeracy gap is stated. It is implied by "There is a shortage of experienced accountancy and finance professionals." (p.26) and "…a significant shortage of qualified quantity surveyors." (p.16) | Implicit only |
| GM × `languages` | **0** | No mention of foreign languages; ESOL appears only as a claimant group (p.79) | Absent |

### 4.2.1 Harmonisation rulings (checkpoint 2)

The project owner signed these rulings off after the D second review ([d-review.md](d-review.md) §2 and §8.4). They bind any re-scoring of D. Rules 1–4 define "cross-cutting" for a 4. The cells they changed are listed in d-review.md, "Harmonisation (checkpoint 2)", which uses the same numbering.

1. **Cross-cutting is a property of a stated need, not of a page.** A skill takes the cross-cutting 4 only when the plan states a gap, lack or requirement for it (named directly or by a phrase in `skills.csv` → `lsip_terms`), and either:
   - **(a)** the plan's own words give that need whole-economy scope: "cross-cutting", "overarching", "across all/every sector", "all levels and roles", "the wider workforce"; or
   - **(b)** the need is one of the headline items listed in §4.2. The skill must be named in the item's title, or in the sentences where the item says what is lacking, including as one of a listed set (Cumbria's "care … occupations", p.9). A title counts even when it is worded as an action (GM OP3). A heading word that only names an industry does not count: C&W's "Digital and Creative" theme is "digital skills" (p.4).
2. **Other prose in a cross-cutting section is scored on its own scope.** It inherits cross-cutting status only if its sentence keeps the item's cross-sector scope. It does not inherit when it is:
   - **(i)** tied to one sector, occupation group or single respondent;
   - **(ii)** an example ("e.g.", "such as"), or a specialist skill that the plan places at the advanced end of a range or "in specific occupations";
   - **(iii)** a driver or consequence rather than a need.

   The baseline tier that the plan says the whole workforce needs does inherit. A sector-tied mention counts towards that sector, as in the GM `data-analysis` anchor. A need for a group that is not a priority sector is a supporting mention (2).
3. **Bundles (J1).** Each listed part of a cross-cutting bundle takes the 4, as in "communication, teamwork, reliability". A bundle named only by its label ("work readiness", "behaviours", "employability skills") gives the 4 to `self-management` alone; the unlisted parts are implied (1). Unqualified "communication" is `speaking`. `writing` needs wording about written text.
4. **Actions, research and context stay at 2 wherever they are printed.** This covers:
   - programmes, provision lists and pilots;
   - reviews or research still to be done;
   - job-posting or labour-market rankings, third-party projections and survey-design notes;
   - context bullets and occupation tables, even when they are labelled "cross-cutting" or "cross-sector".

   The Cumbria `cyber-security` anchor is an example. A headline item's own title is the only exception (rule 1b).
5. **A 5 keeps the three strict readings** of the survey limb (d-review.md §2), so cross-cutting status alone gives at most 4. The finding must cover the ERB's whole sample, not one sector's interviewees. A chart value must be at least 20%. One bundled survey figure supports only one 5, for the bundle's core skill.

### 4.3 W: priority → skill (0–3)

Priorities are those in each region's `priorities.csv`. Only list non-zero weights.

| Score | Meaning |
|---|---|
| **3** | Named as a core gap or need in that priority's own section: its headline, key findings or "most acute" list. |
| **2** | Named in the section as a secondary or supporting need, or a cross-cutting need the LSIP explicitly applies to this sector. |
| **1** | Implied by the priority's named shortage occupations (including SOC annex tables), but not named. |
| **0** | Not relevant. Omit the row. |

**Examples:**

- **GM Logistics:**
  - `customer-service` **3**: "There is a shortage of customer service skills within the logistics sector" (p.18).
  - `commercial` **3**: "There is a shortage of business development skills within the logistics sector" (p.18).
  - `digital-ai` **2**: "care and logistics, where staff are increasingly required to use handheld devices" (p.13).
  - `leadership` **2**: "line management piece can be a real challenge" (p.13).
- **LCR Visitor Economy:**
  - `leadership` **3**: "The biggest skills gap… is leadership and management capability." (p.31).
  - `customer-service` **3**: "customer-facing roles" (p.31).
  - `self-management` **2**: "professionalism, resilience, and reliability" (p.31).
  - `law-ethics` **2**: "staff must manage stricter food safety" (p.32).
  - `digital-ai` **2**: "managers will need to understand tools like Copilot" (p.32).
- **Lancashire Advanced Manufacturing & Engineering:**
  - `engineering` **3**: engineers are named as "Ongoing – L3-6", p.17.
  - `practical-making` **3**: "Fabricators & welders", p.17.
  - `data-analysis` **2**: "Data analysis (2133)" is listed as an increasing need, p.17.
  - `scientific-method` **1**: no lab work is named.

### 4.3.1 W review rulings (checkpoint 2)

These rulings come from the W second review ([w-review.md](w-review.md) §3, which uses the same numbering and lists every cell they changed). They bind any re-scoring of W.

1. **Core (3)** means the priority's own headline statement or superlative list:
   - GM: the numbered headlines (C1…FBPS3).
   - LCR: the "For the LSIP, this context highlights the need to…" sentence (p.17–20), plus sentences the section calls most immediate, biggest, core, defining or acute.
   - C&W: the "most acute / most immediate / most urgent / most in need / most in demand / core skill areas / main workforce challenge" statements.
   - Lancashire: the Key findings occupation lists and the Digital "most commonly required" list. "Increasing need for" items are 2.
   - Cumbria: the §4.1.1.1 sector needs, sector-named §3.2 headline gaps, and the sector's Annex A key finding.
   - Everything else named in the section is 2.
2. **Occupations stand for their defining skill.** A headline occupation scores 3, one named in the body 2, and one only in a SOC annex table 1. For example, engineers give `engineering`, trades and chefs `practical-making`, care workers and nurses `care-empathy`, supervisors and managers `leadership`, and software developers `programming`. A skill merely implied by an occupation scores 1, and only if it is a core task of that occupation: QS gives `commercial` and `numeracy`, and communications professionals give `writing`.
3. **Annex tables organised by priority** are part of the priority's section. A skill named in their skills- or upskilling-needs column scores 2. A course in a provision column is not a need.
4. **"Communication" is `speaking`.** `writing` needs written wording (written, literacy, English, reports, emails). "Negotiation" alone is `commercial`. This is as in §4.2.1 rule 3.
5. **Work readiness** ("work readiness", "employability", "behaviours", "reliability", "resilience") is `self-management`, and its named components take their own skills. All score 2 unless the plan itself names the component as the priority's core gap, as in the LCR Visitor anchor. Parts of a bundle that are not listed get no W weight, because W's 1 is for occupations only.
6. **Rule 2's cross-cutting limb** applies only where the cross-cutting passage names the sector, gives an example or employer quote from it, or the sector's section refers back to it. Blanket "all/every/across sectors" wording adds nothing to W on its own: D carries it (§4.2.1 rule 1a).
7. **A single employer quote with a superlative doesn't make a 3.** The plan's own narrative must adopt it.
8. **Not skills:** retention, turnover, applicant volume or quality, recruitment intentions, attainment, experience, and qualifications or licences (§3.1).
9. **Evidence that argues against the need** ("weak demand", "yet to translate"), and third-party vacancy rates, can't support a weight.
10. **In care priorities**, the service-user relationship is `care-empathy`. `customer-service` needs explicit customer or client wording.
11. **Clients.** Client relationships, client handling and engaging with clients are `customer-service`.
12. **`lsip_terms` are pointers for D, not W rulings.** Read each passage on its merits.
13. **Items named separately in a headline each take the level.** Sub-types of one role give the level to the primary skill only; the others take 2.
14. **Every existing weight is in scope.** Missing weights outside the eight people and communication skills are added only at headline (3) level. Others are listed in w-review.md §8 for decision.

### 4.4 N: national demand (0–5)

| Score | Meaning |
|---|---|
| **5** | A named cross-sector national priority (Industrial Strategy 2025 or Skills England 2025/2026) **and** ESS 2024 shows the skill, or its ESS group, in ≥ 30% of SSVs. |
| **4** | Any one of these: a named cross-sector national priority or dedicated national skills programme; ESS ≥ 30%; or linked to one of the top five occupations for additional demand to 2030 (Skills England). |
| **3** | ESS 20–29%, or linked to priority occupations in ≥ 4 of Skills England's 10 priority sectors. |
| **2** | ESS 10–19%, or linked to priority occupations in 1–3 sectors. |
| **1** | Mentioned in national sources without demand evidence. |
| **0** | No national evidence. |

**Anchors:**

- `digital-ai` **5**: Industrial Strategy "equipped with the right skills – including AI, digital, management, and data skills" (p.65) and "train 7.5 million UK workers in essential AI skills by 2030" (p.68); ESS digital skills in 38% of SSVs (p.48).
- `problem-solving` **5**: ESS "Solving complex problems (a factor for 45% of SSVs…)" (p.48); Skills England 2026 "transferable skills, including communication, problem solving, digital literacy and adaptability" (p.8).
- `self-management` **5**: ESS "Self-management skills remained the most common (affecting 54% of SSVs)" (p.51); Skills England 2026 on employers wanting "'work-ready' recruits" (p.8).
- `care-empathy` **4**: Skills England "care workers and home carers (90,000)", the largest single occupational demand (Assessment p.4). Only one sector, and no ESS item.
- `practical-making` **4**: the Industrial Strategy construction package "to train up to 60,000 more skilled construction workers" (p.69); ESS manual dexterity 20%, adapting to new equipment 26% (p.48–49).
- `languages` **2**: ESS "Communicating in a foreign language (contributing to 14% of SSVs…)" (p.48).

### 4.5 Q: quest → skill (0–3)

| Score | Meaning |
|---|---|
| **3** | The quest's main output cannot be produced without the skill. |
| **2** | A substantial, planned step of the quest uses it. |
| **1** | Incidental use. |
| **0** | Not used. |

Every quest should have 2–5 non-zero skills and at most two 3s, so that quest scores stay discriminating.

**Example.** The quest *"Map where your town could put heat pumps, using open energy data, and pitch it to a councillor"* scores:

- `data-analysis` 3 and `sustainability` 3;
- `speaking` 2 (the pitch) and `digital-ai` 2 (open-data tools);
- `commercial` 1 (a rough cost estimate).

## 5. Calculations

These formulas are copied as given, and implementations must follow them exactly:

- `C[k] = max over chosen subjects of M[s][k]`
- reinforced = at least 2 chosen subjects score 2 or more on skill k
- `E[k] = min(3, C[k] + 0.5·reinforced)`
- `fit_r = 100·ΣE[k]·D[r][k] / Σ3·D[r][k]`
- priority fit uses the same formula with W
- subject ranking uses `E = M[s]`
- skill rank in an area = order by `D[r][k]`, ties broken by `N[k]`
- a role matches if at least 60% of its skills have E ≥ 2; a gap is one "you could help close" if at least half of its skills have E ≥ 2
- pair shared skills = both ≥ 2; complementary = one 3, the other ≤ 1
- quest score = `ΣE·Q/Σ3·Q + 0.25·pf`

**Notes for implementers.** These notes interpret the formulas; they don't change them.

- **Reinforcement only matters when C[k] = 2.** It lifts E from 2 to 2.5. When C[k] = 3 the cap applies, and when C[k] < 2 the "2 or more" condition can't hold.
- **Sums run over all 23 skills.** Skills with D = 0 drop out of both numerator and denominator.
- **Adding a subject never lowers fit.** C is a maximum and reinforcement only adds, so fit can only stay the same or rise (see §7).
- **`pf` in the quest score must be on a 0–1 scale**, i.e. priority fit ÷ 100. On a 0–100 scale it would swamp the first term. Confirmed (§10).
- **Quest variety (checkpoint 2).** Quests are picked one at a time by adjusted score. Each candidate loses 0.15 (`QUEST_VARIETY_PENALTY`) for every quest already picked that shares one of its *lead* skills (its highest Q scores). This stops a student seeing four near-identical quests (for example four interview-led ones). The one-quest-per-priority rule still applies first.
- **The "boosted" star (checkpoint 2).** The app shows a star on a skill only when reinforcement lifts its score (C = 2, E = 2.5). Showing it whenever a skill is reinforced would star writing and critical thinking for about 99% of students.

## 6. Double-scoring protocol for M

The M matrix has 45 subjects × 23 skills = **1,035 cells**.

1. **Calibration.** Both scorers read §4.1, including the anchors. The adjudicator then gives them a separate calibration set of 12 cells that are *not* anchors, spread across all score levels and at least 6 subject groups. Each scorer must match the adjudicator's reference score exactly on at least 9/12, and be within 1 on all 12, before full scoring starts. If they don't, re-brief and repeat with a fresh set.
2. **Blind scoring.** Two scorers, A and B, independently score every cell with evidence and source. They don't see each other's work. If agents are used, they are separate agents with no shared context, both given only this document and the specification sources.
3. **Compare.**
   - Exact match → final.
   - A difference of 1 → final = the **lower** score, unless the higher score's evidence meets the rubric level exactly (the adjudicator audits a random 10% of these).
   - A difference of **2 or more** → **adjudicator**. The adjudicator is a third scorer who reads both evidence notes and the spec, records a reasoned final score, and flags any rubric ambiguity so the rubric text can be tightened.
4. **Report agreement** in `research/m-agreement.md`:
   - **exact agreement** (% of cells where A = B);
   - **within-1 agreement** (% where |A − B| ≤ 1);
   - quadratic-weighted Cohen's κ;
   - a breakdown by skill and by subject group.
   - Targets: exact ≥ 60%, within-1 ≥ 90%.
   - Any skill with within-1 < 85% has its rubric row revised, and that skill is re-scored by both scorers.
5. **Freeze.** Record the final matrix, the adjudication log and the agreement statistics before any tier calibration.

## 7. Tier calibration (Strong / Good / Emerging)

1. For each area r, compute `fit_r` for **all 163,185 combinations** of 3–4 of the 45 subjects: C(45,3) = 14,190 plus C(45,4) = 148,995.
2. Set cut-offs from the percentiles of this distribution, **separately for 3-subject and 4-subject combinations**. Four-subject combinations make up 91.3% of the pool, and adding a subject never lowers fit, so pooled cut-offs would unfairly mark down students taking three:
   - **Strong:** fit ≥ the 70th percentile (the top 30%).
   - **Good:** fit ≥ the 30th percentile (the middle 40%).
   - **Emerging:** below the 30th percentile (the bottom 30%).

   Thresholds use ≥, so ties go up. The same method is applied to national fit (N).
3. Publish the cut-offs and the distribution (min, P10, P30, P50, P70, P90, max) per area and subject count. They are written by `npm run data:analyse` to `research/data/tiers.csv` and `research/analysis/fit-distribution.csv`.
4. *(Superseded by the sign-off: calibration is always separate by subject count; see step 2.)*
5. **Sensitivity check.** Recompute after removing combinations most sixth forms wouldn't allow: Further Maths without Maths, and more than one English or more than one Art & Design title. Report whether any cut-off moves by more than 2 fit points.
6. **Re-run** whenever M, D or the subject list changes. Cut-offs are generated data, never hand-edited.
7. **Rounding (checkpoint 2).** `tiers.csv` stores each cut-off rounded *down* at 6 decimal places. Possible fits are at least 0.1 apart, so no fit lies between the stored and exact values, and a combination tied exactly at a cut-off stays in the higher tier. (Rounding to 1 dp had pushed up to 1.8% of Lancashire combinations down a tier.)

The tiers are **relative within each area**. "Emerging" means "less aligned with this plan than most combinations". It doesn't mean "poor", and the app copy must say so.

## 8. Fairness checks

Run these after tier calibration and before publishing.

**F1. Every subject gets a chance to shine.** For every area r and every priority p, rank the 45 subjects by priority fit, using `E = M[s]` (ties take the average rank). *Pass* if every subject ranks in the **top half** (rank ≤ 22.5) for at least one priority in at least one area. Report each subject's best rank and where it occurs.

**F2. No subject group is always "Emerging".** For each of the 8 groups in `subjects.ts`:

- **(a)** at least one combination made up only of that group's subjects reaches Good or Strong in at least one area; and
- **(b)** among combinations containing 2 or more subjects from the group, fewer than 50% are Emerging in all five areas.

**F3. Every skill is reachable.** Report any skill where no subject scores ≥ 2 (expected: none), and any skill where only one subject scores 3. This is information for the app's "skills worth adding" copy, not a failure.

**When a check fails:**

1. Re-examine the M evidence for the affected subjects, looking for under-scoring against the rubric.
2. Check whether the taxonomy is missing a skill type that the LSIPs name and those subjects develop.
3. **Never** adjust D or W to pass a check. They must stay faithful to the LSIPs.
4. Document every change and the reason.
5. If a check still fails after evidence review, report it honestly. For example, the app can say "this combination links more strongly to national priorities than to your area's plan".

**Outcome at checkpoint 2 (2026-09-27, after the M, D and W second reviews).**
- **F3** (skills reachable) and the tier **sensitivity** check pass.
- **F1 fails for English Literature** (best rank 31 of 45) and **English Language & Literature** (26.5).
- **F2 fails for English & Languages**: 51.5% of combinations with 2 or more of its subjects are Emerging in all five areas. No combination made only of these subjects reaches Good in any area.
- **Evidence review (§8 steps 1–2).** No rubric-compelled under-score was found. The adjudicator ruled English Literature × creativity 1, MFL × critical-thinking 2 and English Language × digital-ai and × content-production 1, on the specifications alone. No skill type named in the LSIPs is missing from the taxonomy.
- **Cause.** The failures are structural. These subjects' strengths, writing and critical thinking, are shared by nearly every subject, and no North West LSIP names language skills. D and W were not changed to pass the checks (§8 rule 3).
- **Response, as the owner decided.** The failures are reported here. When a student's local match is Emerging, the app explains that Emerging does not mean a poor choice. It names the student's developed skills that have high national demand (N ≥ 4), and points them to national demand and to the skills worth adding.

## 9. Known limitations

1. **LSIP evidence is mostly qualitative.** Few plans give skill-specific survey statistics. Only GM gives one (leadership), plus Cumbria's survey charts, whose values were read by eye to about ±2 percentage points. D therefore rests on documented judgement against the rubric.
2. **The plans are structured differently.**
   - GM ranks its priorities.
   - C&W duplicates every page in its PDF.
   - Cumbria and LCR keep much of their evidence in separate annex files. Region agents must read these as well as the main plans.
   - Uneven detail may make D look more or less "demanding" across areas for reasons of document style.
3. **M measures specification intent,** not teaching quality, options chosen, or what an individual student does. Specs with options (for example History topics, Art media, Music pathways) are scored on the reference spec's compulsory elements.
4. **The applied qualifications are not A levels.** Seven items in `subjects.ts` are Level 3 applied qualifications with no DfE A level content. They vary by board, and some are affected by post-16 qualification reform (V Levels). Their reference specs must be confirmed (§4.1).
5. **Formula simplifications.** `C = max` ignores breadth, and the reinforcement bonus is a coarse +0.5. Fit rewards alignment with demand. It says nothing about grades, interest or employability.
6. **Some skills are unreachable through A levels.** Leadership, customer service and AI literacy are barely developed by current A levels, so no combination can reach 100 in areas that demand them. This is intended (J8, J9).
7. **Merging loses nuance.** Research is folded into critical thinking; enterprise into commercial and creativity; project management into leadership and self-management.
8. **Languages is retained against criterion 1** (J7).
9. **National evidence is UK-wide.** The ESS figures are UK totals, and the Skills England projections are national. Local ESS breakdowns were not used for D.
10. **Tiers are percentile-based.** Some combinations will always be "Emerging". The pool weights every combination equally, whereas real uptake is heavily skewed towards some subjects; no uptake data was used.
11. **Everything is a snapshot:** plans for 2026–29, ESS fieldwork in 2024, specifications current in September 2026. Refresh when the LSIPs have their mid-term review.

## 10. Decisions (signed off by the project owner, 2026-09-27)

1. **Languages** is kept as an exception to criterion 1 (J7). Its local demand scores will honestly be low; its national score follows the ESS evidence.
2. **Work readiness** is scored through Self-management, Speaking, Teamwork and Customer service. "Experience" is carried as a cross-cutting message in the app, not a skill (J1).
3. **Research is merged into Research and critical thinking** (J3).
4. **Tier cut-offs:** 30 / 40 / 30 (Strong ≥ P70, Good ≥ P30), calibrated **separately for 3- and 4-subject combinations** by default (§7).
5. **Reference specifications for the applied subjects:** Pearson BTEC Level 3 National Extended Certificate (one-A-level size) for Applied Science, Engineering, Health & Social Care, Construction & the Built Environment and Sport & Exercise Science. WJEC/Eduqas Level 3 Applied Certificate/Diploma for Criminology and Food Science & Nutrition. For multi-board A levels, use the boards proposed in §4.1. Scorers confirm current titles and URLs.
6. **Quest score:** `pf` is priority fit on a 0–1 scale (priority fit ÷ 100). This is how `pickQuests()` in `src/lib/scoring.ts` implements it.
7. **Hard-to-reach skills** (leadership, customer service) stay in the fit calculation. Tiers are percentile-based, so this signals honestly without penalising any student relative to others (J8).
8. **Official annexes count as evidence for D.** These are Cumbria Annex A/A1 and LCR Annexes A–C.

## 11. Checkpoint 2 decisions (signed off by the project owner, 2026-09-27)

1. **D:** keep the D review's three strict readings for a 5 (whole-sample scope, the 20% materiality floor, one 5 per bundled figure). Write one definition of "cross-cutting" for D = 4 and re-apply it to all five areas (§4.2.1; `d-review.md`, "Harmonisation").
2. **W:** a blind second review of every 3 and the people and communication rows, against the LSIP text only (§4.3.1; `w-review.md`).
3. **Fairness F1/F2:** report the failures honestly (§8, outcome) and add the skills-based message to the app. The adjudicator decided the evidence-based M candidates on the specifications alone (§4.1.1 R15; `m-adjudication.md`, "Checkpoint 2 follow-up").
4. **Display and rounding:** show the star only when reinforcement lifts a score (§5), and round tier cut-offs down (§7 step 7).
5. **Quest balancing:** apply the quest-variety rule (§5). Adjust Q for quests whose scores misrepresented their own text, after checking each against the quest wording. The quests changed are GM logistics-1 and "Investigate the Future Solicitor Shortage", LCR creative-2 and "Inside the Biomanufacturing Pipeline", and C&W health-social-care-1. Quests that need rarer skills are left alone even where their coverage is low.
6. **Not adopted:** R6's analysis text was not saved as a separate document.
