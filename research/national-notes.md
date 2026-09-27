# National subject facts — method and notes (R3a)

Covers `research/data/national_subjects.csv`, `research/data/national_occupations.csv` and
`research/data/national_sources.csv`: the hardcoded national facts behind the "National demand
for your subjects" screen, for all 45 A levels in `src/data/subjects.ts`.

Access date for every source below: **27 September 2026**.

## Method

The backbone of this dataset is Skills England's **"Assessment of priority skills to 2030"**
(August 2025) and its accompanying data tables (an Excel workbook of underlying figures, linked
from the same gov.uk publication). This is the first cross-government, cross-sector quantitative
assessment of skills needs, covering the 8 Industrial Strategy growth-driving sectors (IS-8) plus
Housebuilding and Health/Adult Social Care — 10 "priority sectors" in total. It gave:

- Whole-sector workforce size and % growth, 2025 to 2030, for all 10 sectors.
- SOC2020-level occupation growth (jobs needed by 2030) for ~140 "priority occupations", each
  tagged to the sector(s) that need it.
- The share of higher-education leavers, by subject group, who go on to work in a priority
  occupation ("HE subjects into priority occupations").

Where a subject maps clearly onto one or more IS-8 sectors (or Housebuilding/Health/Adult Social
Care, both bucketed here under the schema's `foundational` sector id), I used this workbook as the
primary evidence for both the `national_subjects.csv` sectors/headline and the
`national_occupations.csv` rows, citing the real occupation titles and growth figures exactly as
given (see `research/data/priority_skills_tables.xlsx`-derived figures throughout — I downloaded
and parsed this workbook directly rather than relying on a text summary of the HTML report, since
the report's prose does not spell out sector-by-sector occupation tables).

For sectors or angles the Skills England report does not cover (heritage, sport and physical
activity, fashion and textiles, criminal justice, the accountancy and legal professions
specifically, modern languages), I used sector-body and professional-body evidence instead:
EngineeringUK, CITB, UK Music, UKFT, Historic England, ICAEW, the Law Society, Sport England, the
Food and Drink Federation, and Prospects' graduate destinations data for criminology. All of these
are cited per-subject in `national_sources.csv` and were opened directly (not taken from search
snippets alone) before use, with the exception of the UKFT footprint-report figures, which loaded
as a client-rendered page but were corroborated verbatim across several independent citations of
the same Oxford Economics report, so I kept the citation to the UKFT page itself.

## Outlook criteria as applied

The brief's four-tier scale is necessarily a judgement call subject-by-subject. In practice I used
two signals as evidence of a **national shortage/priority signal**, treating either as sufficient:

1. **The Immigration Salary List** (gov.uk, skilled-worker visas) — the current, live list of
   occupations recognised as being in shortage. I opened the full current list. It runs to 25
   occupations and, helpfully, includes several that map directly onto subjects here: biological
   scientists, chemical scientists (nuclear), laboratory technicians, pharmaceutical technicians,
   graphic and multimedia designers, artists, skilled classical/contemporary dancers, skilled
   orchestral musicians, arts officers/producers/directors, bricklayers, roofers, carpenters and
   joiners, stonemasons, retrofitters, high-integrity pipe welders, care workers and senior care
   workers (the last two carrying eligibility all the way to 2028, longer than any other
   occupation on the list). Note: general "engineers" and IT/software roles were **removed** from
   this list in the current version — I did not claim Computer Science or Engineering sit on it.
2. **Skills England's own "priority occupation" designation** — the report's title is literally an
   assessment of *priority* skills, and its tables name specific occupations facing the largest
   projected 2025–2030 growth (e.g. programmers and software development professionals, +87,000,
   the single largest projected occupation increase in the whole exercise, needed in 7 of the 10
   sectors). I treated a top-of-table growth occupation, tied to a frontier IS-8 sector projected
   to grow fast (Clean Energy Industries +77%, Housebuilding +42%, Life Sciences +30%, Defence
   +27%), as an equivalent priority signal to (1) for subjects like Mathematics, Further
   Mathematics, Computer Science, Physics and Engineering that are not individually named on the
   Immigration Salary List.

`very-high` was reserved for subjects meeting one of the two signals above **and** feeding a
frontier IS-8 sector (or Housebuilding/Adult Social Care) with strong 2025–2030 growth:
Mathematics, Further Mathematics, Computer Science, Biology, Chemistry, Physics, Applied Science,
Engineering, Health & Social Care, Construction & the Built Environment, Art & Design (Fine Art),
Graphic Communication, Music, Dance.

`high` covers subjects that clearly feed an IS-8/priority sector, or reach priority occupations at
a well-evidenced rate, without a specific shortage-list hit: Statistics, Environmental Science,
Psychology, Design & Technology (Product Design), Business Studies, Economics, Accounting, Law,
Geography, Politics, French, Spanish, German, Chinese (Mandarin), Photography, Film Studies, Media
Studies, Music Technology, Drama & Theatre, Food Science & Nutrition.

`growing` covers subjects where demand is real but concentrated in specific, smaller or emerging
areas: Sociology, Criminology, Textile Design, Physical Education, Sport & Exercise Science.

`steady` covers subjects whose case rests on broad transferability rather than a sector-specific
growth story: History, Philosophy, Religious Studies, English Language, English Literature, English
Language & Literature.

One number worth flagging for calibration: Skills England's "HE subjects into priority
occupations" table gives the % of graduates in each subject group entering a priority occupation —
e.g. Mathematical sciences 57%, Chemistry 56%, Business and management 53%, Languages and area
studies 49%, Politics 48%, Geography/earth/environment 48%, Law 47%, Media/journalism/communications
46%, Psychology 42%, Philosophy and religious studies 42%, English studies 39%, Creative arts and
design 35%, Sociology/social policy/anthropology 33%, Agriculture/food and related studies 32%,
Performing arts 31%, Sport and exercise sciences 25%. I used this to calibrate several `high` vs
`steady`/`growing` calls (Languages, Politics, Media Studies, Psychology) and it is quoted directly
in several `national_subjects.csv` headlines/occupation notes as "reaches priority occupations at
a notably high/strong rate", always without a specific % (the % itself groups several A-level
subjects together under one HESA subject category, e.g. "Languages and area studies" covers French,
Spanish, German and Chinese, so I did not attribute the exact percentage to a single A level).

## Per-subject rationale (one line each)

- **Mathematics** — very-high: Mathematical sciences graduates enter priority occupations at 57%
  (highest of any subject bar medicine/nursing/architecture), feeding finance, software, engineering.
- **Further Mathematics** — very-high: same routes as Mathematics, intensified toward engineering,
  physics, computing and defence, where the largest single national demand sits (programmers).
- **Statistics** — high: feeds data analyst/actuarial priority occupations in Digital & Technologies,
  Life Sciences and Financial Services, all growing.
- **Computer Science** — very-high: programmers/software developers are the single largest
  priority occupation nationally, named by 7 of 10 priority sectors.
- **Biology** — very-high: biological scientists sit on the Immigration Salary List; Life Sciences
  is projected to grow 30% by 2030, among the fastest of the 10 priority sectors.
- **Chemistry** — very-high: nuclear-industry chemical scientists sit on the Immigration Salary
  List; feeds Clean Energy (+77%), Advanced Manufacturing and Life Sciences.
- **Physics** — very-high: physical scientists and electronics engineers are named priority
  occupations across Clean Energy, Defence and Digital & Technologies.
- **Applied Science** — very-high: laboratory technicians and pharmaceutical technicians both sit
  on the Immigration Salary List.
- **Environmental Science** — high: environment and conservation professionals are named
  Housebuilding priority occupations as green construction and Clean Energy (+77%) expand.
- **Psychology** — high: the NHS Long Term Workforce Plan is expanding clinical psychology and
  psychological-therapy training places by more than a quarter by 2031.
- **Engineering** — very-high: 6.3 million people already work in engineering/technology roles
  (19% of all UK jobs), feeding Advanced Manufacturing, Clean Energy and Defence.
- **Design & Technology (Product Design)** — high: graphic/multimedia designers (shortage-listed)
  and CAD/architectural technicians sit across Creative Industries and Clean Energy/Housebuilding.
- **Health & Social Care** — very-high: care workers are the single largest priority occupation
  nationally (+90,000 by 2030) and, with senior care workers, sit on the Immigration Salary List
  with eligibility running to 2028, longer than any other listed occupation.
- **Construction & the Built Environment** — very-high: Housebuilding is projected to grow 42% by
  2030 (second only to Clean Energy), and bricklayers, carpenters, roofers and stonemasons all sit
  on the Immigration Salary List.
- **Business Studies** — high: feeds Professional & Business Services, the single largest of the
  10 priority sectors by employment (5.05 million workers in 2025).
- **Economics** — high: finance/investment analysts are a fast-growing priority occupation across
  Financial and Professional & Business Services.
- **Accounting** — high: ICAEW's own 2025/26 research states accountants remain in high demand
  nationally even as AI reshapes the profession.
- **Law** — high: solicitors are a named, growing Professional & Business Services priority
  occupation, and solicitor apprenticeship numbers are expanding fast.
- **Geography** — high: environment, conservation and surveying roles are named Housebuilding
  priority occupations; geography also feeds civil engineering.
- **History** — steady: broad transferable-skills case; heritage (a common destination) supports
  559,000 UK jobs but is not a fast-growing priority sector in its own right.
- **Politics** — high: politics graduates enter priority occupations at 48%, above law, media and
  psychology graduates, largely via professional/business services and policy roles.
- **Sociology** — growing: feeds the growing social care/social work workforce (Adult Social Care
  +12% by 2030) without a single dominant professional qualification route.
- **Philosophy** — steady: reasoning/communication skills feed law conversion and professional
  services broadly (philosophy and religious studies graduates enter priority occupations at 42%).
- **Religious Studies** — steady: same transferable-skills case as Philosophy.
- **Criminology** — growing: a well-established, real pipeline into policing, probation, prison
  and court services (Prospects graduate destinations data), without a fast-growth sector story.
- **English Language** — steady: broad communication-skills case into publishing, media, teaching
  (English studies graduates enter priority occupations at 39%).
- **English Literature** — steady: same case as English Language, via publishing/media/education.
- **English Language & Literature** — steady: combines both cases.
- **French/Spanish/German/Chinese (Mandarin)** — high: languages and area studies graduates enter
  priority occupations at 49%, above law and media; translators, international marketing and
  Professional & Business Services roles are the main routes for all four languages.
- **Art & Design (Fine Art)** — very-high: artists sit on the Immigration Salary List; feeds a
  Creative Industries sector projected to add ~416,000 jobs (27%) by 2035.
- **Graphic Communication** — very-high: graphic and multimedia designers sit on the Immigration
  Salary List and are one of the single fastest-growing named Creative Industries occupations
  (+14,000 by 2030).
- **Photography** — high: photographers/AV/broadcasting operators need +11,000 more workers by
  2030, one of the larger named Creative Industries occupations.
- **Textile Design** — growing: UK fashion and textiles is worth £62bn and 1.3 million jobs (UKFT),
  with a specific, real skills-shortage and sustainability agenda, but growth is not sector-wide.
- **Film Studies** — high: Film & TV is a named IS-8 frontier industry within Creative Industries.
- **Media Studies** — high: media/journalism/communications graduates enter priority occupations
  at 46%, and journalism/PR/marketing are all named, growing Creative Industries occupations.
- **Music** — very-high: skilled orchestral musicians sit on the Immigration Salary List; UK music
  supports a record 220,000 jobs and £8bn GVA (2024, UK Music).
- **Music Technology** — high: sits across the record-breaking music industry and Digital &
  Technologies' software/production-tool demand.
- **Drama & Theatre** — high: arts officers/producers/directors sit on the Immigration Salary List
  and are a large, growing named Creative Industries occupation.
- **Dance** — very-high: skilled classical/contemporary dancers sit on the Immigration Salary List,
  a direct, unambiguous shortage signal, inside a growing Creative Industries sector.
- **Physical Education** — growing: the coaching/sport workforce is professionalising fast (paid
  coaches up from 38% to 53% of active coaches in two years, Sport England/UK Coaching) from a
  400,000-strong base, but this is not one of Skills England's 10 priority sectors.
- **Sport & Exercise Science** — growing: same sector evidence as PE, with an added route into the
  allied health workforce the NHS is expanding; HE data shows sport/exercise science graduates
  enter priority occupations at the lowest rate of any subject group measured (25%), so I kept
  this to `growing` rather than `high`.
- **Food Science & Nutrition** — high: feeds the UK's largest manufacturing sector by employment
  (500,000 jobs, FDF), which reports vacancy rates more than double the wider manufacturing average
  and is explicitly investing in higher-skilled roles.

## Full source list

| Source | URL | Accessed |
|---|---|---|
| Skills England, "Assessment of priority skills to 2030" (2025) | https://www.gov.uk/government/publications/assessment-of-priority-skills-to-2030/assessment-of-priority-skills-to-2030 | 2026-09-27 |
| Skills England, accompanying data tables (xlsx) | https://assets.publishing.service.gov.uk/media/6895d6eca6eb81a3f9b2e2a5/Assessment_of_priority_skills_accompanying_tables.xlsx | 2026-09-27 |
| Industrial Strategy sector definitions list (IS-8) | https://www.gov.uk/government/publications/industrial-strategy/industrial-strategy-sector-definitions-list | 2026-09-27 |
| Skilled Worker visa: Immigration Salary List | https://www.gov.uk/government/publications/skilled-worker-visa-immigration-salary-list/skilled-worker-visa-immigration-salary-list | 2026-09-27 |
| Skills England, Sector Skills Needs Assessment – Creative Industries | https://www.gov.uk/government/publications/skills-england-annual-skills-report-and-sectoral-skills-needs-assessments-2026/sector-skills-needs-assessment-creative-industries | 2026-09-27 |
| NHS Long Term Workforce Plan — About the plan | https://www.england.nhs.uk/ltwp/about-the-plan/ | 2026-09-27 |
| EngineeringUK, Engineering and technology workforce (May 2025 update) | https://www.engineeringuk.com/research-and-insights/our-research-and-evaluation-reports/engineering-and-technology-workforce/ | 2026-09-27 |
| CITB, Construction Workforce Outlook 2025–29 | https://www.citb.co.uk/about-citb/news-events-and-blogs/citb-publishes-construction-workforce-outlook-2025-29 | 2026-09-27 |
| UK Music, This Is Music 2025 | https://www.ukmusic.org/research-reports/this-is-music-2025/ | 2026-09-27 |
| UKFT, The Fashion & Textile Industry's Footprint in the UK | https://ukft.org/industry-footprint-report/ | 2026-09-27 |
| Historic England, Heritage Counts — economic value of the heritage sector | https://historicengland.org.uk/research/heritage-counts/heritage-and-economy/economic-value/ | 2026-09-27 |
| ICAEW, UK accountants still in high demand despite AI jobs shift | https://www.icaew.com/about-icaew/news/2026-news-releases/uk-accountants-still-in-high-demand-despite-ai-jobs-shift-icaew-report-finds | 2026-09-27 |
| The Law Society, Solicitor apprenticeships | https://www.lawsociety.org.uk/career-advice/becoming-a-solicitor/qualifying-without-a-degree/apprenticeships | 2026-09-27 |
| Sport England, Working in an Active Nation: the professional workforce strategy for England | https://www.sportengland.org/news/working-in-an-active-nation-the-professional-workforce-strategy-for-england | 2026-09-27 |
| Food and Drink Federation, backing a £50bn growth plan for the UK's largest manufacturing sector | https://www.fdf.org.uk/fdf/news-media/press-releases/2025/fdf-urges-government-to-back-50bn-growth-plan-for-uks-largest-manufacturing-sector/ | 2026-09-27 |
| Prospects, What can I do with a criminology degree? | https://www.prospects.ac.uk/careers-advice/what-can-i-do-with-my-degree/criminology | 2026-09-27 |
| DfE, Employer Skills Survey 2024: full UK research report (background reading, not cited per-subject) | https://assets.publishing.service.gov.uk/media/6a1eef8d050971fbebf3bd92/Employer_Skills_Survey_2024_UK_report.pdf | 2026-09-27 |

## Notes for skill-demand scoring (phase B)

Once the skills taxonomy is signed off, a national skill-demand vector could draw on:

- **Employer Skills Survey 2024** (DfE, full UK report, link above) — the "skills lacking in
  vacancies" categories are already close to a usable taxonomy: solving complex problems (45% of
  skill-shortage vacancies, up from 36% in 2022), advanced/specialist IT skills (25%, up from 17%),
  knowledge of the organisation's products/services (45%, up from 40%), adapting to new equipment
  and materials (26%). 69% of employers reported both a technical-skills gap and a people/personal
  skills gap. These map reasonably well onto "digital literacy", "problem-solving",
  "adaptability/learning" style skill categories.
- **Skills England's occupation-level qualification-expectation lookup** ("Occupation expected
  level" tab in the accompanying workbook) — a SOC2020-level table of the expected qualification
  level(s) for ~400 occupations, which could seed a level-of-study weighting per skill/occupation.
- **Skills England's subject-to-occupation flow tables** ("HE subjects into priority occs", "FE
  subjects into priority occs", "App subjects into priority occs") — proportions of learners by
  subject area who move into a priority occupation. These are HESA/ILR-derived and grouped at a
  coarser level than our 45 A levels (e.g. all modern languages sit under "Languages and area
  studies"), but they are a genuine, real, government-verified crosswalk between subject and
  occupation that a skill-demand model could reuse or refine.
- **Creative Industries Sector Skills Needs Assessment** names specific skill clusters required by
  its priority occupations ("creating", "digital literacy", "learning and investigating" were
  mentioned) — worth pulling in full for the creative-subject cluster.
- Sector bodies not yet folded into a skills taxonomy but worth another pass: EngineeringUK's
  "Engineering and Technology Insights" survey (employer-reported skill priorities: innovative
  thinking 42%, digital/technical expertise 39%); the IET's annual Skills Survey.

## National skill-demand vector (N)

**Research step R3b, phase B, 27 September 2026.** Written after the 23-skill taxonomy
(`research/methodology.md` §3) was signed off. Scores `research/data/national_demand.csv` against
the §4.4 rubric, using the five R0 source extracts in
`…\scratchpad\pdfs\{r0-se-priority-2030,r0-se-annual-2026,r0-ess2024-uk,r0-industrial-strategy,r0-skillsbuilder}.txt`
plus the "Notes for skill-demand scoring" above. All page numbers are the PDF page index (the
`=== PAGE N ===` marker), per `methodology.md` §2's citation convention. Six anchors were fixed by
the brief (`digital-ai`, `problem-solving`, `self-management` at 5; `care-empathy`,
`practical-making` at 4; `languages` at 2) and are kept unchanged — I found no contrary evidence,
only further corroboration (see below).

### How "named cross-sector national priority" was applied

The rubric's level-5 test requires **both** a named cross-sector priority **and** ESS ≥30% of
SSVs; level 4 requires **any one** of a named priority/programme, ESS ≥30%, or a link to one of
Skills England's top-five occupations for additional demand to 2030. To keep this consistent
rather than impressionistic, I only counted a passage as a "named priority" when it was a
**specific, dedicated commitment** — a funded programme, a named benchmark/framework component, or
a numbered strategic priority — not a skill merely appearing as one word in an illustrative list
attached to a *different* skill's dedicated evidence. Two examples of that distinction:

- Skills England 2026 p.8 ("work-ready recruits… work well with others, engage confidently with
  customers, take the initiative, and demonstrate responsibility") is `methodology.md` §3.2 J1's
  own designated evidence for **`self-management`** specifically ("the Skills England 2026 call for
  'work-ready' recruits"). I did not also spend its illustrative clauses ("engage confidently with
  customers", "work well with others") to promote `customer-service` or `teamwork` to a 5 — that
  would double up evidence R0 had already earmarked elsewhere. Both stay on their own ESS figures.
- By contrast, Skills England 2026 p.29 ("employers want those who have judgement, problem-solving,
  collaboration, digital fluency and responsible AI capabilities… 'human' skills such as empathy,
  team work, resilience", citing the Financial Services Skills Commission's 2026 report) is **not**
  pre-assigned to any skill in `methodology.md`. It is fresh, dedicated, sourced evidence, so I used
  it where it plainly names a skill: `teamwork` ("collaboration", "team work") and `law-ethics`
  ("responsible AI capabilities", reinforced by Skills England's own named "Responsible and ethical
  AI foundation skills", one of 6 benchmark components, p.31).

Two occupation-level facts did the heaviest lifting for the digital/engineering skills:

- **Skills England, Assessment of priority skills to 2030, p.18–19**: the report's own ranked list
  of "top 20 occupations" by additional employment demand 2025–2030, and its explicit statement of
  how many of the 10 priority sectors name each occupation. Programmers and software development
  professionals (+87,000, 7 sectors) and IT business analysts/architects/systems designers
  (+34,000, 6 sectors) are both literally inside the top five, which is a clean, objective test for
  level 4 that doesn't depend on judgement.
- **Same report, p.68 (Industrial Strategy)**: TechFirst (£187m: AI, cyber security, computer
  science) and the engineering package (£100m+: Advanced Manufacturing, Clean Energy, Digital &
  Technologies) are genuine, funded, named programmes — the same tier of evidence as the
  brief's own `practical-making` anchor (the £600m+ construction package, p.69).

One number I deliberately did **not** use as an "ESS ≥30%" hit: the Employer Skills Survey's "new
legislative or regulatory requirements (37%)" figure (ESS p.157–159) answers a *different* survey
question — reasons employers give for needing to upskill their existing workforce — not the
"skills lacking in applicants for skill-shortage vacancies" question the rubric's ESS thresholds are
built on. I used it as qualitative colour for `law-ethics` in the table below, but did not let it
push that skill to a 5, since it isn't literally an SSV percentage.

### The vector

| Skill | N | Justification |
|---|---|---|
| `data-analysis` | **4** | IT business analysts/architects/systems designers is the #3 top-demand occupation nationally (+34,000 by 2030), needed in 6 of 10 sectors (top-five link, DERA p.19). ESS complex numerical/statistical skills lacking in 25% of SSVs (p.49) — short of the 30% needed for a 5. |
| `programming` | **4** | Programmers and software development professionals is the #2 top-demand occupation nationally (+87,000 by 2030), needed in 7 of 10 sectors (DERA p.18–19) — a top-five link. TechFirst names computer science explicitly (IS p.68). ESS advanced/specialist IT skills only 25% (p.48), so not a 5. |
| `digital-ai` | **5** *(fixed)* | Industrial Strategy: "AI, digital, management, and data skills" named as the barrier to tech adoption (p.65) and a £-backed pledge to train 7.5 million UK workers in AI skills by 2030 (p.68). ESS digital skills group lacking in 38% of SSVs (p.48–49), clearing the ≥30% bar. Both conditions met. |
| `cyber-security` | **4** | TechFirst (£187m) explicitly funds "AI, cyber security and computer science" (IS p.68) — a genuine named, funded cross-sector programme. ESS advanced/specialist IT skills 25% (p.48), and Cyber security professionals is a priority occupation in only 2 sectors (Defence, Digital & Technologies) — neither clears the bar needed for a 5. |
| `numeracy` | **3** | ESS basic numerical skills lacking in 26% of SSVs, complex numerical/statistical in 25% (p.48–49) — squarely in the 20–29% band. Skills England's "broad need for digital and STEM skills across occupations and the economy" (p.19) is a general observation, not a dedicated, funded programme in the way TechFirst or the engineering/construction packages are, so I did not count it as a "named priority" and kept this at 3 rather than 4. |
| `scientific-method` | **2** | Life Sciences is 1 of Skills England's 10 priority sectors (DERA throughout), but none of its lab-facing occupations (biological/chemical/physical scientists, laboratory technicians) appear on the report's own list of occupations named priority in 4 or more sectors (p.19–20) — at most Life Sciences plus one other (Defence, for nuclear chemical scientists; Digital & Technologies, for physical scientists/biochemists). No ESS item exists for this skill. 1–3 sectors → 2. |
| `engineering` | **4** | The Industrial Strategy's dedicated engineering package (over £100m) names engineering skills as critical across Advanced Manufacturing, Clean Energy Industries and Digital & Technologies (IS p.68) — a genuine named, funded programme. Independently, engineering professionals n.e.c. (5 sectors) and civil/electrical/electronics engineers and engineering technicians (4 sectors each) all clear the ≥4-sector bar (DERA p.19–20). No ESS item exists for `engineering` specifically, so it cannot reach 5. |
| `practical-making` | **4** *(fixed)* | Industrial Strategy construction package: over £600m to train up to 60,000 more skilled construction workers (p.69) — a named, funded programme. ESS: adapting to new equipment or materials lacking in 26% of SSVs, manual dexterity in 20% (p.48–49) — neither clears 30%, so capped at 4. |
| `sustainability` | **4** | Clean Energy Industries employment is projected to grow 77% by 2030 — the fastest of Skills England's 10 priority sectors, by a wide margin (DERA p.11) — alongside Industrial Strategy language about a workforce "ready for the green jobs of the future" (p.64). No ESS item exists for this skill, so it cannot reach 5. |
| `commercial` | **4** | ESS: knowledge of products and services offered lacking in 45% of SSVs (up from 40% in 2022, p.48) — comfortably clears 30% on its own. I did not find a dedicated, funded cross-sector "commercial skills" programme (the only close national mention, a participant quote about a "financial literacy" gap in Skills England 2026 p.31 area, describes a stakeholder-identified gap rather than a government commitment), so this stays at 4 rather than 5. |
| `leadership` | **5** | ESS: management and leadership skills (grouped) lacking in 46% of SSVs (p.52) — well clear of 30%. Skills England has launched a concrete, named product: "three apprenticeship units on AI leadership" for managers (p.30), plus Industrial Strategy's own commitment to "explore interventions to improve management skills…targeted specifically at senior leaders in industry" (p.58). Both conditions met. |
| `law-ethics` | **4** | "Responsible and ethical AI foundation skills" is 1 of Skills England's 6 named AI foundation skills for work — a dedicated benchmark component, not a passing mention (p.31), reinforced by "responsible AI capabilities" being named among what employers want (p.29). No ESS SSV percentage exists for this skill (the 37% "regulatory requirements" figure answers a different survey question, see above), so it cannot reach 5. |
| `writing` | **5** | ESS: reading/understanding instructions, reports etc. lacking in 30% of SSVs (p.48) — at the threshold. Skills England names "communication skills" as the first of its named cross-cutting AI-readiness priorities, alongside critical thinking (p.7). Both conditions met. |
| `speaking` | **4** | Same "communication skills" named priority as `writing` (Skills England p.7) applies (the taxonomy's own crosswalk assigns this citation to both). ESS making speeches or presentations lacking in only 17% of SSVs (up from 13%, p.51) — well short of 30%, so capped at 4. |
| `languages` | **2** *(fixed)* | ESS: communicating in a foreign language contributed to 14% of SSVs in 2024, down from 18% in 2022 (p.48). Kept per the brief; no contrary evidence found. |
| `care-empathy` | **4** *(fixed)* | Care workers and home carers need +90,000 jobs by 2030 — the single largest priority occupation nationally, one-ninth of all priority demand (DERA p.4), and a top-five occupation link on its own. Reinforced by "'human' skills such as empathy" being named among what employers will value more as AI adoption grows (Skills England 2026 p.29). Still only 1 sector (Adult Social Care) and no ESS item, so capped at 4 as instructed. |
| `teamwork` | **5** | ESS: team working lacking in 35% of SSVs (p.52) — clears 30%. Skills England names "collaboration" and "team work" among the human skills employers will most value (p.29, citing the Financial Services Skills Commission's 2026 report) — fresh evidence not already assigned elsewhere in the taxonomy. Both conditions met. |
| `customer-service` | **4** | ESS: sales and customer service skills (grouped) lacking in 40% of SSVs, customer handling alone 36% (p.51–52) — comfortably clears 30%. I did not find a dedicated national programme naming customer service specifically (as opposed to it being one clause inside the p.8 "work-ready recruits" sentence already earmarked for `self-management`), so this stays at 4. |
| `self-management` | **5** *(fixed)* | ESS: self-management skills (grouped) lacking in 54% of SSVs, the most common people-skill gap of all (p.51). Skills England's explicit call for "'work-ready' recruits" (p.8). Both conditions met. |
| `critical-thinking` | **4** | Skills England names "critical thinking and analytical skills" as the first of its named cross-cutting AI-readiness priorities (p.7), reinforced by "judgement" being named among what employers want (p.29). No ESS item exists for this skill at all, so it cannot reach 5. |
| `problem-solving` | **5** *(fixed)* | ESS: solving complex problems was a factor in 45% of SSVs in 2024, up from 36% in 2022 — the sharpest rise of any skill measured and the single highest technical/practical figure (p.48). Skills England names "problem solving" among the transferable skills employers value (p.8). Both conditions met. |
| `creativity` | **4** | ESS: creative and innovative thinking lacking in 43% of SSVs (up from 40% in 2022, p.49) — comfortably clears 30% on its own. Creative Industries' own sector plan is a real, funded priority, but it is sector-specific, not cross-sector, so I did not count it as the rubric's "named cross-sector priority" and kept this at 4. |
| `content-production` | **2** | Creative Industries is 1 of Skills England's 10 priority sectors, but its design/content occupations (graphic and multimedia designers, web design professionals, photographers/AV operators) are not among those the report names as priority in 4 or more sectors (DERA p.19) — at most 1–2 sectors (Creative Industries, occasionally Professional & Business Services). No ESS percentage is reported for this specific skill in the extracted text. 1–3 sectors → 2. |

**Distribution:** six 5s (`digital-ai`, `problem-solving`, `self-management`, `leadership`,
`writing`, `teamwork`), thirteen 4s, one 3 (`numeracy`), three 2s (`scientific-method`, `languages`,
`content-production`), zero 0s or 1s. The absence of any 0 or 1 is not an oversight: every skill in
the signed-off taxonomy already carries a "National" evidence column in `methodology.md` §3 (the
taxonomy's own selection criteria required *some* national evidence to make the final 23), so a
skill with genuinely "no national evidence" would not have survived into the taxonomy at all.
`languages` is the deliberate, flagged exception (J7): it is kept for its local discriminating power
despite thin national evidence, and correctly lands at the bottom of the scored range (2), not at
1 or 0, because the ESS figure (14%) does clear the "10–19%" band.

### ESS "skills lacking" categories mapped to our 23 skills

This is the crosswalk actually used above, read off `research/data/skills.csv` and cross-checked
against the ESS 2024 full UK report (p.45–53). Percentages are 2024 SSV-lacking rates unless
marked "grouped" (one of the four broader ESS analysis categories: complex analytical, digital,
operational, basic skills; or the three people/personal groups: self-management, management &
leadership, sales & customer service) or marked "reason" (a different ESS question: reasons given
for needing to upskill the existing workforce, not skills lacking in recruits).

| ESS category (p.48–52) | 2024 % | Our skill(s) |
|---|---|---|
| Specialist skills or knowledge | 66% | *(not mapped — "job-specific knowledge" is explicitly excluded from the taxonomy, §3.1)* |
| Solving complex problems | 45% | `problem-solving` |
| Knowledge of products and services offered | 45% | `commercial` |
| Creative and innovative thinking | 43% | `creativity` |
| Knowledge of how the organisation works | 34% | *(not mapped — organisational/job-specific knowledge)* |
| Reading/understanding instructions, reports etc. | 30% | `writing` |
| Writing instructions, reports etc. | 26% | `writing` |
| Adapting to new equipment or materials | 26% | `practical-making` |
| Basic numerical skills | 26% | `numeracy` |
| Advanced or specialist IT skills | 25% | `programming`, `cyber-security` |
| Complex numerical/statistical skills | 25% | `data-analysis`, `numeracy` |
| Computer literacy / basic IT skills | 21% | `digital-ai` |
| Manual dexterity | 20% | `practical-making` |
| Communicating in a foreign language | 14% | `languages` |
| — *digital skills group (grouped)* | 38% | `digital-ai` |
| — *complex analytical skills group (grouped)* | 50% | `data-analysis`, `critical-thinking` (no single clean % exists for `critical-thinking`; not used as its N evidence) |
| — *operational skills group (grouped)* | 53% | `commercial` |
| — *basic skills group (grouped)* | 37% | `numeracy`, `writing` (not used as `writing`'s primary evidence; the specific reading-instructions figure was preferred) |
| Managing own time and task prioritisation | 48% | `self-management` |
| Managing own feelings / handling those of others | 37% | `self-management` |
| Customer handling skills | 36% | `customer-service` |
| Team working | 35% | `teamwork` |
| Managing or motivating other staff | 35% | `leadership` |
| Instructing, teaching or training people | 25% | `speaking` (loosely; not used numerically) |
| Persuading or influencing others | 24% | `leadership` (loosely) |
| Setting objectives for others / planning resources | 22% | `leadership` |
| Sales skills | 20% | `commercial` |
| Making speeches or presentations | 17% | `speaking` |
| — *self-management skills group (grouped)* | 54% | `self-management` |
| — *management/leadership skills group (grouped)* | 46% | `leadership` |
| — *sales/customer service skills group (grouped)* | 40% | `customer-service` |
| New legislative or regulatory requirements *(reason for upskilling, not SSV%)* | 37% | `law-ethics` (qualitative colour only — not counted as an ESS≥30% SSV hit) |

No ESS "skills lacking" item exists at all for: `scientific-method`, `engineering`, `sustainability`,
`care-empathy`, `content-production`. Their N scores rest entirely on Skills England/Industrial
Strategy occupation and programme evidence (see table above).

### Validation

Ran `node --experimental-strip-types scripts/compile-data.ts --data research/data --out
…\scratchpad\compile-check-national` from the repo root. No error or warning referenced
`national_demand.csv`, `national_subjects.csv`, `national_occupations.csv` or
`national_sources.csv`. Remaining errors in the run belong to other agents' in-progress files
(region `demand.csv`/`priorities.csv`/etc. and the M matrix), per the coordinator's note that this
is expected while other research steps are still in flight.
