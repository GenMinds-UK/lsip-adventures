# Cheshire and Warrington — LSIP evidence notes

**Note (checkpoint 2):** D and W scores in the Phase B tables below have been superseded by `research/d-review.md` (second review and harmonisation) and `research/w-review.md`. The CSVs in `research/data/regions/cheshire-warrington/` are authoritative.

Region id: `cheshire-warrington`. Compiled 2026-09-27, page citations corrected 2026-09-27
(Phase B). **Page-numbering note (important):** the LSIP's underlying PDF at its canonical
URL (`https://cdnm.heyzine.com/files/uploaded/v3/5c3373df5a7e7b084fb95834ddf4dc6ea6ddc469-3.pdf`,
per `research/sources.md`) has every content page duplicated back-to-back (e.g. its own
page 18 = page 19, page 22 = page 23 — confirmed by md5 and spot-checked here). All page
citations below are to **this canonical, 140-page PDF**, and always cite **the first page
of each duplicated pair** (which is usually very close to the document's own printed folio
number). My original Phase A research used a different, non-duplicated 71-page rendering
of the same content (from the heyzine "flip-book/pdf" viewer URL, not the canonical
"files/uploaded/v3" source URL); every citation in this file and in the region's CSVs has
now been mechanically remapped from that 71-page numbering to the canonical 140-page
numbering (old page 1 → new page 1; old page *N* → new page 2*N*-2 for *N* ≥ 2), and
verified against a handful of independent phrase searches in the canonical text
(`r0-cw-lsip-2026.txt`) before being applied. `source` cells in the CSVs use the canonical
URL directly; this note uses the shorthand `p.N`.

## 1. Documents

| Document | URL | Pages | Retrieval status |
|---|---|---|---|
| **Cheshire & Warrington LSIP 2026-2029** (main plan) | Flipbook: https://heyzine.com/flip-book/CheshireandWarringtonLSIP2026.html — canonical underlying PDF: `https://cdnm.heyzine.com/files/uploaded/v3/5c3373df5a7e7b084fb95834ddf4dc6ea6ddc469-3.pdf` | 140 (extracted; every page duplicated, 71 logical pages) | **Retrieved successfully.** Found the underlying PDF URL in the flipbook's page source (as hinted), downloaded it and extracted text. All page citations here use this canonical PDF's own page numbers (first of each duplicate pair). |
| Cheshire & Warrington LSIP, June 2023 | https://sccci.co.uk/wp-content/uploads/2023/08/Cheshire-Warrington-LSIP-Report-Aug-2023.pdf | 32 | Retrieved successfully. Used for historical comparison (the 2023 plan had only 3 sector priorities and 2 cross-cutting themes, versus 7 + 3 in 2026). |
| LSIP Update Report, 2024 | https://cheshireandwarringtonlsip.co.uk/wp-content/uploads/2024/08/LSIP-Update-Report.pdf | 51 | Retrieved successfully. Used to confirm ERB branding transition (SCCCI → South & North Cheshire Chamber) and governance continuity. |
| GOV.UK ERB notice | https://www.gov.uk/government/publications/designated-employer-representative-bodies/notice-of-designated-employer-representative-bodies#north-west | — | Retrieved (HTML saved). Confirms ERB name, councils, and states "Not applicable" for strategic authority — this is now out of date; see VERIFY note in §2. |

The 2026 plan (the current document) was fully reachable, so this note is built primarily
from it, with the 2023 and 2024 documents used only for historical/contextual colour.

## 2. Area summary and key stats

- Cheshire and Warrington is "one of the UK's most productive economies and the most
  productive in the North of England" (p.10), with strengths in professional/scientific/
  technical employment, advanced manufacturing, life sciences and clean energy (p.10).
- 49.1% of working-age residents hold Level 4+ qualifications, slightly above the UK
  average of 47.4% — but this masks unevenness: Warrington has 13.6% of working-age
  adults with no formal qualifications, more than double the UK average of 6.8% (p.10).
- Demand for Level 3+ skills is predicted to grow by 16% by 2035 (p.4, p.10).
- More than 800 young people aged 16–17 are currently NEET (not in education,
  employment or training) across the sub-region (p.10).
- The evidence base draws on over 130 employer meetings, a survey of 184 businesses,
  1:1 interviews across all priority sectors, and views from four recruitment agencies
  (p.4, p.18).
- **VERIFY / important update:** GOV.UK's ERB notice (checked 2026-09-27, "updated 10 July
  2026") lists "Not applicable" for a strategic authority in Cheshire and Warrington.
  However, the LSIP itself (foreword, p.2, and Strategic & Economic Context, p.10) states
  that the **Cheshire and Warrington Combined Authority (CWCA) held its inaugural
  meeting in April 2026**, bringing together Cheshire East, Cheshire West and Chester,
  and Warrington councils under one governance structure, with a directly elected Mayor
  due in 2027 and the Adult Skills Fund transferring to the CWCA from April 2027 (p.10).
  The CWCA's own website (https://cheshireandwarrington-ca.gov.uk/) is live and
  describes itself as the official combined authority. This looks like GOV.UK's ERB
  page simply not yet reflecting the new authority; I have used the CWCA as the
  `authority_name`/`authority_url` in `region.csv` because it is evidently now real and
  operating, but a human reviewer should double-check this before publishing given the
  conflict with GOV.UK's own notice.
- The sub-region is polycentric and heavily road-dependent, with "poor cross-boundary
  connectivity, infrequent services and the cost of running a car" cited as a barrier to
  work, particularly in domiciliary care and construction (p.10). Rural areas face
  additional digital exclusion — "ending broadband and mobile not-spots" is an
  identified priority (p.12).
- The "ten focus areas" mentioned in the task brief are: 5 priority sectors badged as
  growth sectors in body text (Advanced Manufacturing, Agri-tech and Food Security,
  Business and Professional Services, Clean Energy, Life Sciences), 2 foundational
  sectors (Construction and the Built Environment, Health and Social Care), and 3
  cross-cutting themes (Digital and Creative, Sustainability, Visitor Economy) = 10.
  **The "missing tenth" is Business and Professional Services** (p.34, p.36) — it is not
  named in the four-sector "growth sector" summary on p.4/p.12, but it has its own full
  chapter with key stats, key regional anchors and sector-specific actions, exactly like
  the other growth sectors, so I have treated it as a full priority in `priorities.csv`.

## 3. Priorities

### Advanced Manufacturing (pages 28, 30)
- **Description:** One of the UK's leading advanced manufacturing locations — aerospace,
  automotive, chemicals, medical science. £8bn GVA (19.3% of the local economy), ~44,000
  employed. Designated priority growth sector in Invest 2035; sits within the Cheshire
  Science Corridor (p.28).
- **Key stats:** 15% of sites report ≥1 vacancy; 56% of vacancies are hard to fill; 39%
  are skill-shortage vacancies; 14% of employers report internal skills gaps (Employer
  Skills Survey 2024, NW Manufacturing) (p.28). ~18,800 people (about a third of the
  manufacturing workforce) are aged 50+, vs 6% aged 20–24 (p.28). 89% of enterprises are
  micro-businesses (p.28). 739 apprentices enrolled 2024/25 (p.30); T-Level entrants in
  Engineering and Manufacturing up 7.6% in 2025 but 90% male (p.30).
- **Skills gaps (verbatim quotes):**
  - "These technologies – robotics, additive manufacturing and automation – aren't plug
    and play. You can't just pick up a robot and run it." (Advanced manufacturing
    training provider, p.28)
  - "If I'm a traditional engineer with 30 years of experience, I don't understand
    modern technologies like VR, AR or the Internet of Things." (Advanced manufacturing
    training provider, p.28)
  - "These are niche specialist skills – you can't easily recruit people with them,
    especially in smaller organisations." (Advanced manufacturing training provider,
    p.28)
- **Occupations/roles named:** Mechanical Engineers, Electrical Engineers, Engineering
  Technicians, Process Engineers (Chemical), Metal Working Fitters (Annex A, Table A3.1,
  p.70, p.72).
- **Clusters/employers named:** Cheshire Science Corridor (Alderley Park, Jodrell Bank,
  Daresbury); Bentley Motors, Stellantis (Vauxhall), AstraZeneca, EET Fuels, Tata
  Chemicals, Bombardier, Siemens, Waters Corporation; supply chain to Airbus and BAE
  Systems in North Wales/North West (p.28). Colleges: Warrington & Vale Royal AMET,
  Cheshire & Warrington Institute of Technology, Reaseheath Centre for Advanced
  Engineering and Agri-Tech, 3D 360 training, Cheshire College – South and West
  (robotics), TTE Training (p.28).

### Agri-tech and Food Security (page 32)
- **Description:** Applied engineering, robotics, digital systems and precision
  technology in farming and food production. Not high-volume employment (agricultural
  employment fell from ~6,100 in 2021 to ~3,800 in 2024, BRES), but strategically
  important for food security and net-zero transition (p.32).
- **Key stats:** ~70% of the current agricultural workforce is aged 50+ (DEFRA 2025,
  p.32). 332 apprentices enrolled 2024/25, most popular route Land Based Service
  Engineering Technician; 261 aged-19+ enrolments (p.32). University of Chester:
  Animal Sciences 150, Agriculture 80, food sciences 35 (2024/25) (p.32).
- **Skills gaps (verbatim quotes):**
  - "There aren't people who are robot trained. If people in agriculture were robot
    trained it would make a big difference." (Robotic milking farm owner, Cheshire,
    p.32)
- **Occupations/roles named:** engineering professionals (degree-level), engineering and
  land-based technicians (Levels 4–5), skilled trades in precision fabrication and
  machinery (p.32); Dairy Technologist apprenticeship named as a newer course (p.32).
- **Clusters/employers named:** Reaseheath College and University Centre (£9.9m Advanced
  Engineering and Agri-Tech Centre, Vertical Farming Centre, working commercial farm,
  Food Centre for Dairy Technology); Cheshire and Warrington Institute of Technology
  (CWIoT, led by Cheshire College – South and West); Agri-Tech West (ATW); Food
  Enterprise Zone (FEZ) with Cheshire East Council (p.32).

### Business and Professional Services (pages 34, 36)
- **Description:** The largest employment sector in Cheshire and Warrington "by some
  distance" and one of the fastest-growing for jobs — legal, accountancy, management
  consultancy, engineering advisory, digital professional services, HR, compliance and
  business support. ~144,800 employed, ~£6.9bn GVA (p.34).
- **Key stats:** Employment projected to grow from ~144,800 (2025) to ~158,300 (2030), a
  9.35% increase (p.34). Legal and accounting activities ~37,000 jobs; employment
  services ~24,000; head office/management activities ~20,000; architectural and
  engineering consultancy ~14,000 (2024 data, p.34). 2,020 apprenticeship starts in
  Business, Administration and Law in 2024/25 (+220 on 2023/24); 1,070 aged-19+ FE
  enrolments; ~90,830 business-related graduates nationally each year (p.34). University
  of Chester Business and Management enrolments up from 1,445 to 1,865 (2022–2025)
  (p.36).
- **Skills gaps (verbatim quotes):**
  - "The technology that was meant to make recruitment more efficient is creating
    significant challenges for employers seeking technical expertise." (Engineering
    recruitment and training business, Warrington, p.34)
- **Occupations/roles named:** finance and investment analysts, accountants and
  financial professionals, management consultants and business analysts, software
  developers and digital specialists, marketing and communications professionals, legal
  and compliance specialists (p.34); Chartered Accountants and Auditors, Financial and
  Investment Professionals, Management Consultants and Business Analysts, Legal
  Professionals, HR Professionals (Annex A, Table A3.3).
- **Clusters/employers named:** Bank of America and Barclays (Cheshire West); Birchwood
  Park (Warrington) and Origin cluster (Ellesmere Port) for property/engineering
  consultancy; Daresbury Park shared-services hub (~20,000 head-office/management jobs,
  though technically in a bordering region) (p.34).

### Clean Energy (pages 38, 40)
- **Description:** Key growth region in the national Clean Energy Jobs Plan. Hosts HyNet
  (hydrogen and carbon capture) and Urenco's nuclear fuel facility at Capenhurst. One of
  eight priority growth sectors in Invest 2035 (p.38).
- **Key stats:** ~6,100 employed in Energy and Water (SIC B, D, E); ~36% aged 50+ (p.38).
  £588m GVA (SIC D only) = 1.53% of total C&W GVA, understating true scale (p.38).
  Employer Skills Survey (utilities proxy): 13% of sites report ≥1 vacancy; 50% hard to
  fill; 35% skill-shortage vacancies; 12% report internal skills gaps (p.40). National/
  regional forecasts: hydrogen 28,675 direct + 64,500 indirect jobs nationally by 2030,
  plus 6,000 in the North West via HyNet; nuclear UK workforce growing 96,000→120,000 in
  early 2030s; up to 35,000 full-time clean power infrastructure roles in the NW by 2028;
  heat pumps/retrofit needing 3,300 additional skilled trades annually (6,600–11,000
  plumbing engineers, 400 retrofit coordinators) (p.38). HyNet alone projected to need
  ~1,000 construction workers at peak delivery (p.38).
- **Skills gaps (verbatim quotes):**
  - "Our networks are new – since 1980 we've only ever put what we class as plastic
    cables in the ground. But the industry hasn't moved forward and said what we need is
    plastic cable jointers, rather than a three-year programme that still trains people
    on historic cables." (Local employer engagement, p.40)
  - "Because hydrogen isn't widely stored or transported currently, I don't believe it's
    on the curricula." (Local employer engagement, p.40)
  - "We were 200 jointers a year short. I put a proposal together for an 18-month XLPE
    cable joining apprenticeship – plastic cables only, which is all we ever use."
    (Independent Distributor Operator in the Energy sector, p.18)
- **Occupations/roles named:** Electricians and Electrical Installation Trades, Plumbers
  and Heating Engineers, Engineering Technicians (Energy/Building Services), Electrical
  Engineers (Energy Systems), Energy and Process Engineers, Construction Project
  Managers (Energy/Retrofit), Energy Operatives and Technicians, Low-Carbon and Retrofit
  Specialists (emerging) (Annex A, Table A3.2).
- **Clusters/employers named:** HyNet (Origin cluster, Ellesmere Port); Urenco Capenhurst
  (Cheshire West, HALEU facility, £196m UK government investment, operational by 2031);
  Birchwood Park (Warrington, nuclear cluster); Peak Cluster; Regional Skills Pilot
  (Cheshire West & Chester, £1m); Energy Skills Passport (Enterprise Cheshire and
  Warrington with NW Net Zero Hub) (p.38).

### Life Sciences (pages 42, 44)
- **Description:** A nationally significant cluster anchored by Alderley Park, the UK's
  largest bioscience campus. ~£2.1bn GVA, 7,000+ employed across ~235 businesses,
  forecast to grow ~7.3% 2023–2028 (SIES 2025) (p.42).
- **Key stats:** GVA per worker ~£104,000, more than double the UK average (p.42).
  Pharmaceuticals jobs 4,500→6,000 (2022–24, +33%); electronics/instrumentation
  3,000→4,000 (+33%); medical equipment 1,175→1,750 (+49%); biotechnology R&D
  1,500→1,750 (+14%) (p.42). ~70% of workers hold a degree or equivalent vs ~41% UK
  average; only 4% of employees are under 25 (p.42). ~13% of sector job postings
  nationally ask for IT/computer science capability; ~2% ask for AI skills vs UK average
  1%, rising to 3% within BioPharma; 59% increase in Digital Health jobs (Cogent Skills)
  (p.44). 25% of the workforce is born outside the UK vs 19% in other sectors (p.44).
- **Skills gaps (verbatim quotes):**
  - "We have launched Lab Tech Level 3 apprenticeships. We have launched skills boot
    camps in laboratory areas… But business will not engage. We had a cohort of around
    six on the boot camp. Couldn't get anybody to interview those… they tell you they
    want this and this but they don't really because they're not interested in engaging
    with [students]." (FE Engagement Lead, Warrington, p.44)
  - "One of the advantages of this area is it's pretty healthy for the sort of skills
    we're looking for. We're sandwiched between Manchester University, Liverpool
    University, Sheffield and Keele." (Local employer, p.44)
- **Occupations/roles named:** biological scientists, biomedical researchers,
  bioinformaticians, pharmaceutical R&D specialists, health data analysts (professional/
  scientific tier); laboratory technicians, clinical trial coordinators, quality
  assurance/quality control specialists, pharmaceutical manufacturing technicians
  (technical tier); manufacturing production operatives, software development, quality
  assurance and compliance (operational tier) (p.42).
- **Clusters/employers named:** Alderley Park (Medicines Discovery Catapult, Centre for
  Antimicrobial Resistance; AstraZeneca, Thermo Fisher Scientific, Waters Corporation);
  Dechra Pharmaceuticals (Northwich); Cogent Skills, Aviagen, IMT Matcher (p.42).

### Construction and the Built Environment (pages 48, 50)
- **Description:** Underpins housing delivery, town centre regeneration, retrofit,
  low-carbon heat and industrial decarbonisation. ~26,000 employed (BRES 2024) (p.48).
- **Key stats:** Specialised construction activities (SIC 43) largest sub-sector at
  14,000 jobs and growing; Construction of buildings (SIC 41) declined 9,000→7,000 jobs
  (2022–24) (p.48). Over 95% of apprenticeship starts are male (p.48). Engineering and
  building services account for 40–60% of construction project value and 30–50% of
  whole-life project cost, with over 50% of vacancies hard to fill (p.48). ECITB data:
  craft and technician roles account for 60–70% of workforce demand across engineering
  construction projects (p.48). Construction Skills Mission Board target: close a gap of
  100,000 new workers nationally by the end of this government (p.48). Apprenticeship
  completions run at ~49%; Level 4+ apprenticeship provision just 35 enrolments in
  2024/25 (~10% of total FE construction enrolments) (p.48). 368 apprentices enrolled
  across trades incl. Carpentry and Joinery (60), Maintenance and Operations (58),
  Plumbing and Heating (44); Installation and Maintenance Electrician >130 starts (p.50).
  T-Level in Design, Surveying and Planning: 17.5% female / 82.5% male (p.50). No
  construction-specific provision at University of Chester (p.50).
- **Skills gaps (verbatim quotes):**
  - Four "mismatches" named directly: "Delivery ambition versus trade capacity";
    "Retrofit requirements versus current competence"; electrical occupations "training
    provision and workforce supply are not yet keeping pace with emerging demand"; and
    "Training participation versus progression into jobs" (p.48).
- **Occupations/roles named:** Electricians and Electrical Installation Trades, Plumbers
  and Heating Engineers, Carpenters and Joiners, Bricklayers and Masons, Construction
  Project Managers, Engineering Technicians (Electrical/Building Services), Construction
  Operatives, Low-Carbon Retrofit Specialists (emerging) (Annex A, Table A3.5).
- **Clusters/employers named:** Warrington and Vale Royal College, Cheshire College –
  South and West, Macclesfield College, Reaseheath, TradeSkills4U; Chester Cathedral
  Works Department (heritage craft skills); Construction Technical Excellence College
  (CTEC – Wigan & Leigh College, hub-and-spoke model with C&W providers as delivery
  spokes) (p.48, p.50, p.66).

### Health and Social Care (pages 52, 54)
- **Description:** One of the largest employers and most important foundational
  sectors, £1.4bn GVA. Central challenge is workforce stability, not infrastructure or
  innovation (p.52).
- **Key stats:** 7% vacancy rate in C&W; NW proxy: 18% of sites report ≥1 vacancy, 35%
  hard to fill, 27% skill-shortage vacancies (p.52). 1,790 FE enrolments in health/care
  subjects (2025/26) but only 550 achievements — completion rate ~31% (p.52). 220
  apprenticeship achievements in Health, Public Services and Care (2023/24), ~28% of all
  local apprenticeship achievements; apprenticeship completion rate ~50% (p.52). 19% of
  direct care workers have a Level 2 relevant social care qualification (p.52). Only 110
  FE enrolments at Level 4+ (p.52). Skills for Care: NW adult social care posts projected
  to grow 22% (236,000→290,000) between 2024/25 and 2040; locally, workforce demand
  expected to rise from 34,000 to 39,000 by 2030, with a 7.2% vacancy rate (p.52). 1,661
  apprentices enrolled, most popular routes Early Years Educator (350), Lead Adult Care
  Worker (250), Children and Young People Practitioner (210) (p.54). Health T-Level: 92%
  female / 8% male (p.54). University of Chester Nursing/Adult Nursing: 335 and 310
  enrolments respectively (2025) (p.54).
- **Skills gaps (verbatim quotes):**
  - "One of the most difficult areas that we struggle to recruit for is when we're
    opening up another home – we struggle to recruit registered managers… there is a
    very small pool of them and 99% of the time they're already employed. Our agency fee
    was £16,000 just to get one person." (Residential Care Home, Cheshire, p.52)
- **Occupations/roles named:** Nurses (Adult, Mental Health, Community); Care Workers,
  Senior Care Workers and Home Carers; Allied Health Professionals; Health Associate
  Professionals (Healthcare Assistants); Social Workers; Health Services
  Managers/Directors and Residential/Day/Domiciliary Care Managers and Proprietors;
  Public Health and Community Health roles; Digital Health and Data roles (emerging);
  Integrated Care and Support roles (emerging) (Annex A, Table A3.6). Named
  progression-gap roles: care supervisors, team leaders, nursing associates, registered
  managers, advanced practitioners (p.52).

## 4. Cross-cutting themes (pages 22, 24)

*Correction from the original Phase A draft:* this section originally cited the
document's own printed footer numbers (22–25) instead of page-index numbers, and my
first duplicate-pair remapping pass then converted those footer numbers a second time,
compounding the error. The true page-index locations (checked directly against the
canonical text) are page 22 for Digital and Creative and the two employer-wide bullets
below, and page 24 for Sustainability and Visitor Economy. Fixed here.

1. **Digital and Creative** (p.22; the plan's own "Cross-Cutting Priorities" section runs
   p.22–24 across all three themes): 2023 IFATE Digital Route mapping found ~21,000
   digital-route jobs locally, concentrated in software development, business analysis
   and IT operations, centred on Chester, Crewe, Knutsford and Macclesfield (p.22).
   National demand for AI/ML skills up 86% 2021–2024, biggest growth in non-tech roles
   (p.22). Government's AI Skills for the UK Workforce plan targets 7.5m workers with AI
   skills by 2030 (p.22). Most in-demand specialised local skills (2023 data):
   SQL, Data Analysis, Agile Methodology, C#, Technical Support, plus communications,
   management and problem solving (p.22).
2. **Sustainability** (p.24): SIES ambition is to "support all businesses in the
   sub-region to decarbonise their operations, ensuring that our workforce has the
   skills they need to do this" (p.24). LSIP survey: businesses cited required green
   skills as "waste management, carbon reporting, renewable energy, sustainable
   procurement, and energy efficiency" (p.24) — but also, "around 50% of business
   responding on the impact of low carbon said there was 'no expected impact' on their
   business" (p.24), a caution against over-weighting sustainability demand uniformly.
   ECITB quote: "There's no such thing as a green welder. Many skills are the same, just
   recontextualised into a clean energy environment." (p.24)
3. **Visitor Economy** (p.24): Hospitality/tourism/leisure/events support 262,000 jobs
   across the North West (6.5% of regional employment), £15,495m GDP (VisitBritain,
   2026) (p.24). Treated primarily as an inclusive-employment enabler sector rather than
   a growth-volume sector. Priorities: supervisory/management development, culinary and
   specialist technical skills (chef shortages), cross-sector progression into business
   admin, facilities management, events management, health and wellbeing (p.24).

Additional employer-wide priorities sit outside the three named cross-cutting themes but
recur across the whole plan and materially affect demand scoring:
- **AI disruption and skills-pipeline risk** (p.22): ~32% of employers expect skills
  requirements to change significantly by 2030 (Lightcast); roles facing least
  disruption are manual/human-interaction "front line" occupations (farmworkers,
  delivery drivers, construction workers, care/nursing, counselling) (p.22).
- **Digital access and rural inclusion** (p.22): ending broadband/mobile not-spots is a
  named priority; rural SMEs face constrained digital-tool adoption and urban-centred
  training provision.

## 5. Employer survey findings (percentages, with pages)

- Around two-thirds of recruiting employers experienced recruitment difficulty (p.18).
- Around three-quarters expect their workforce to grow or remain stable over the next
  three years (p.18).
- Cogent Skills: 50% decline in apprenticeship starts across SMEs (all industries),
  2016–2021; 72% decline for SMEs in the science sector specifically (p.18).
- ~32% of employers expect skills requirements to change significantly by 2030
  (Lightcast) (p.22).
- LSIP survey: ~50% of businesses said low-carbon transition had "no expected impact" on
  their business (p.24).
- Advanced Manufacturing (Employer Skills Survey 2024, NW): 15% of sites report ≥1
  vacancy; 56% hard to fill; 39% skill-shortage vacancies; 14% internal skills gaps
  (p.28).
- Clean Energy (Employer Skills Survey, utilities proxy): 13% of sites report ≥1
  vacancy; 50% hard to fill; 35% skill-shortage vacancies; 12% internal skills gaps
  (p.40).
- Health and Social Care (NW proxy): 18% of sites report ≥1 vacancy; 35% hard to fill;
  27% skill-shortage vacancies; local C&W vacancy rate 7% (Skills for Care: 7.2%) (p.52).
- Construction: over 50% of vacancies (engineering/building services) hard to fill;
  ECITB: craft/technician roles = 60-70% of workforce demand on engineering construction
  projects (p.48).
- Life Sciences: ~13% of sector job postings nationally ask for IT/computer science
  skills; ~2% ask for AI skills (vs 1% UK average, rising to 3% in BioPharma); 59%
  increase in Digital Health jobs (p.44).
- Business & Professional Services: employment projected +9.35% 2025→2030 (p.34).

## 6. Skills-language inventory

40–80 phrases from the LSIP, tagged to a priority (using the same ids as
`priorities.csv`) or to "cross-cutting", with the page(s) they were found on and a
strength signal for later demand scoring.

| phrase | priority or cross-cutting | page | strength signal |
|---|---|---|---|
| technical skills | cross-cutting | p.18 | employers "most frequently identified" this as growing in importance |
| digital and data capability | cross-cutting | p.18 | employers "most frequently identified" this as growing in importance |
| leadership and management | cross-cutting | p.18 | employers "most frequently identified" this as growing in importance; also named p.52, p.54, p.24 |
| essential business skills | cross-cutting | p.18, p.20 | flagged by employers "across every sector represented in the survey and interviews"; became its own dedicated action (p.58) |
| workplace behaviours / practical readiness | cross-cutting | p.18, p.20 | recurring theme "from health and social care to advanced engineering" |
| AI adoption, governance and security | cross-cutting (digital) | p.22 | dedicated cross-cutting Priority 1 |
| AI literacy | cross-cutting (digital) | p.22, p.24, p.32, p.36, p.44, p.58 | named in 4+ sector chapters plus its own cross-cutting priority and a system-wide action |
| Python | cross-cutting (digital) | p.22 | "now standard within engineering apprenticeship frameworks" |
| SQL | cross-cutting (digital) | p.22 | named as one of the 5 most in-demand specialised local skills (2023 data) |
| Data Analysis | cross-cutting (digital) | p.22 | named as one of the 5 most in-demand specialised local skills |
| Agile Methodology | cross-cutting (digital) | p.22 | named as one of the 5 most in-demand specialised local skills |
| C# | cross-cutting (digital) | p.22 | named as one of the 5 most in-demand specialised local skills |
| Technical Support | cross-cutting (digital) | p.22 | named as one of the 5 most in-demand specialised local skills |
| AR/VR simulation | cross-cutting (digital) | p.22 | named use case: nuclear and EV maintenance training |
| IoT / condition-based maintenance | cross-cutting (digital) / advanced-manufacturing | p.22 | named as replacing time-based maintenance |
| software developers | life-sciences / business-professional-services | p.22, p.34, p.44 | named as growing-demand role in 2 sector chapters plus cross-cutting digital section |
| data modelling | life-sciences | p.22, p.44 | named twice re: life sciences digital convergence |
| creative direction / editorial judgement | cross-cutting (digital) | p.22 | named shift for creative roles under AI |
| waste management | cross-cutting (sustainability) | p.24 | named by businesses as a required green skill in the LSIP survey |
| carbon reporting | cross-cutting (sustainability) | p.24 | named by businesses as a required green skill in the LSIP survey |
| renewable energy (skill) | cross-cutting (sustainability) | p.24 | named by businesses as a required green skill in the LSIP survey |
| sustainable procurement | cross-cutting (sustainability) | p.24 | named by businesses as a required green skill in the LSIP survey |
| energy efficiency (skill) | cross-cutting (sustainability) | p.24 | named by businesses as a required green skill in the LSIP survey |
| carbon accounting / scope emissions | cross-cutting (sustainability) | p.24 | named as increasingly required for finance/procurement/ops/HR roles |
| ecological survey | cross-cutting (sustainability) | p.24 | named as a nature-based skill needed at landscape scale |
| nature-based project management | cross-cutting (sustainability) | p.24 | named alongside ecological survey |
| blended finance literacy | cross-cutting (sustainability) | p.24 | named as a nature-based/Biodiversity Net Gain skill |
| environmental governance | cross-cutting (sustainability) | p.24 | named as a nature-based skill |
| supervisory and management development (hospitality) | cross-cutting (visitor economy) | p.24 | dedicated Priority 1 of the visitor economy section |
| culinary and specialist technical skills | cross-cutting (visitor economy) | p.24 | dedicated Priority 2; "chef shortages remain acute" |
| cross-sector progression (hospitality) | cross-cutting (visitor economy) | p.24 | dedicated Priority 3 |
| electrification, electro-technical and EV systems | advanced-manufacturing | p.28 | local engagement: one of the sector's "most acute pressures" |
| automation, robotics and mechatronics | advanced-manufacturing | p.28 | local engagement: one of the sector's "most acute pressures" |
| industrial digitalisation and data-enabled production | advanced-manufacturing | p.28 | local engagement: one of the sector's "most acute pressures" |
| precision machining and advanced process operations | advanced-manufacturing | p.28 | local engagement: one of the sector's "most acute pressures" |
| supervisory and production management | advanced-manufacturing | p.28 | local engagement: one of the sector's "most acute pressures" |
| Level 4-5 technician pathways (manufacturing) | advanced-manufacturing | p.28, p.30 | named repeatedly as "currently thin" and the top action priority |
| hard-to-fill vacancies (manufacturing) | advanced-manufacturing | p.28 | Employer Skills Survey 2024: 56% |
| skill-shortage vacancies (manufacturing) | advanced-manufacturing | p.28 | Employer Skills Survey 2024: 39% |
| electrician plus / low-carbon retrofit upskilling | advanced-manufacturing / clean-energy | p.30 | named cross-sector upskilling route for existing electricians |
| mechatronics and automation (agri-tech) | agri-tech-food-security | p.32 | one of 4 named "core skill areas" for the sector |
| robotics and control systems (agri-tech) | agri-tech-food-security | p.32 | one of 4 named "core skill areas" |
| digital sensing and data analytics (agri-tech) | agri-tech-food-security | p.32 | one of 4 named "core skill areas" |
| GPS and precision tracking | agri-tech-food-security | p.32 | named directly by employers as a growing-importance skill |
| sustainable design and resource efficiency (agri-tech) | agri-tech-food-security | p.32 | one of 4 named "core skill areas" |
| finance and investment analysis | business-professional-services | p.34 | named among the roles "most in demand" |
| management consultancy and business analysis | business-professional-services | p.34 | named among the roles "most in demand" |
| legal and compliance | business-professional-services | p.34 | named among the roles "most in demand"; also apprenticeship expansion target (p.36, p.58) |
| marketing and communications (professional services) | business-professional-services | p.34 | named among the roles "most in demand" |
| digital business analyst / data technician | business-professional-services | p.36 | named as a Level 4-5 pathway priority |
| cyber security (BPS) | business-professional-services | p.36 | named in sector action alongside AI, automation and data capability |
| electrical installation and grid infrastructure | clean-energy | p.40 | "most urgent" per local engagement |
| low-carbon systems (heat pumps, solar PV) | clean-energy | p.38, p.40 | named occupation focus: Electricians and Electrical Installation Trades, Plumbers and Heating Engineers |
| hydrogen and industrial decarbonisation | clean-energy | p.38, p.40 | HyNet projected 28,675 direct + 64,500 indirect jobs nationally by 2030 |
| nuclear technician and engineering pathways | clean-energy | p.40 | named alongside "increasing replacement demand for older workers" |
| hard-to-fill vacancies (clean energy/utilities) | clean-energy | p.40 | Employer Skills Survey: 50% |
| skill-shortage vacancies (clean energy/utilities) | clean-energy | p.40 | Employer Skills Survey: 35% |
| instrumentation, control and digital technician pathways | clean-energy | p.40 | named as a Level 4-5 "future skills needed" priority |
| biomedical scientists and clinical researchers | life-sciences | p.44 | named among roles employers report "increasing demand" for |
| bioinformaticians and data specialists | life-sciences | p.22, p.44 | named twice: cross-cutting digital section and sector chapter |
| regulatory and quality assurance (life sciences) | life-sciences | p.44 | named among roles in increasing demand |
| laboratory and manufacturing technicians | life-sciences | p.42, p.44 | described as "the pipeline most in need of attention" (structural gap at Level 4-5) |
| genomics and health data | life-sciences | p.42, p.44 | linked to 13% of sector job postings nationally asking for IT/computer science |
| AI-enabled diagnostics | life-sciences | p.42, p.44 | named growth area alongside genomics and digital clinical trials |
| bricklaying, roofing, joinery and carpentry | construction-built-environment | p.48 | named as "core trades under pressure" |
| plumbing and heating (construction) | construction-built-environment | p.48 | named as "core trade under pressure"; central to retrofit delivery |
| retrofit competence / whole-house thinking | construction-built-environment | p.48 | employers "stress that competence standards matter as much as workforce numbers" |
| heritage/conservation skills (stonemasonry) | construction-built-environment | p.48, p.50 | named local-authority priority; Chester Cathedral partnership named |
| electrical occupations (retrofit) | construction-built-environment | p.48 | named as "increasingly central to retrofit delivery" |
| hard-to-fill vacancies (construction/engineering services) | construction-built-environment | p.48 | over 50% |
| craft and technician roles (ECITB) | construction-built-environment | p.48 | ECITB: 60-70% of workforce demand on engineering construction projects |
| care supervisors, team leaders, nursing associates, registered managers | health-social-care | p.52 | named as the sector's "growing gap at supervisory and leadership level" |
| safeguarding knowledge (care) | health-social-care | p.54 | named action: "embedding digital, safeguarding and leadership capability" |
| digital competence (care) | health-social-care | p.54 | named action alongside safeguarding and leadership |
| hard-to-fill vacancies (health & social care, NW proxy) | health-social-care | p.52 | 35% |
| skill-shortage vacancies (health & social care, NW proxy) | health-social-care | p.52 | 27% |
| vacancy rate (health & social care, C&W) | health-social-care | p.52 | 7% (7.2% per Skills for Care) |
| registered manager shortage | health-social-care | p.52 | verbatim employer quote: "£16,000 just to get one person" |
| digital literacy (workforce-wide) | cross-cutting | p.58 | named as a dedicated cross-cutting action: "MS Office, AI tools, digital content creation, online services, cybersecurity and data analytics" |
| recruitment difficulty (system-wide) | cross-cutting | p.18 | "around two-thirds of recruiting employers" |
| workforce growth expectation (system-wide) | cross-cutting | p.18 | "around three-quarters expect their workforce to grow or remain stable" |
| apprenticeship levy navigation | cross-cutting | p.18 | one large manufacturer holds ~£400,000 unspent levy |
| AI-driven applicant tracking / recruitment filtering | cross-cutting | p.22 | named as "creating new barriers" against non-traditional candidates |

## 7. Contacts sources

All URLs below were opened with WebFetch on 2026-09-27 and confirmed to load (see
`contacts.csv` for the same list with `checked` dates):

- South and North Cheshire Chamber of Commerce (ERB): https://sccci.co.uk/local-skills-improvement-plan/
- Cheshire and Warrington Combined Authority: https://cheshireandwarrington-ca.gov.uk/
- Enterprise Cheshire and Warrington Growth Hub: https://cheshireandwarrington.com/growth-and-skills/growth-hub/
- Cheshire and Warrington Careers Hub (Careers & Enterprise Company local hub):
  https://cheshireandwarrington.com/growth-and-skills/skills-and-education/careers-hub/
- University of Chester: https://www.chester.ac.uk/
- Reaseheath College: https://www.reaseheath.ac.uk/
- Cheshire College South and West: https://www.ccsw.ac.uk/
- Warrington & Vale Royal College: https://www.wvr.ac.uk/
- Cogent Skills (sector body, life sciences/chemicals/nuclear/clean growth):
  https://cogentskills.com/

## 8. Notes on the ERB name and relationship to SCCCI

GOV.UK's ERB notice names the ERB "South and North Cheshire Chamber of Commerce". The
LSIP document itself (foreword, p.2; Annex C governance section, p.134) refers to the
same body as "South & North Cheshire Chamber of Commerce & Industry" and its LSIP email
domain is `sccci.co.uk` (`LSIP@sccci.co.uk`, p.140). The 2023 LSIP and the 2024 update
were produced under the name "South Cheshire Chamber of Commerce" / "SCCCI" — i.e. South
Cheshire Chamber of Commerce & Industry. Comparing across documents, this reads as one
organisation whose remit was expanded from South Cheshire to cover the whole sub-region
(hence "South and North"), rather than a merger of two separate chambers — though the
LSIP Advisory Board also separately lists three other, distinct chambers as members
(West Cheshire and North Wales Chamber, East Cheshire Chamber, Warrington Chamber Plus,
p.134), which are not the ERB. I have used the exact GOV.UK wording,
"South and North Cheshire Chamber of Commerce", in `region.csv`/`contacts.csv` per the
task instructions, and flagged the "& Industry" variant here for anyone reconciling
against the LSIP PDF's own cover/footer text.

## 9. Phase B scoring (demand.csv)

Scored 2026-09-27 against `research/methodology.md` §4.2 (D rubric). All citations use
the canonical PDF (`.../files/uploaded/v3/5c3373df5a7e7b084fb95834ddf4dc6ea6ddc469-3.pdf`)
and cite the first page of each duplicated pair, per §1's page-numbering note above.

| skill | D | one-line justification |
|---|---|---|
| data-analysis | 5 | Named in the Employer Perspective's headline, all-sector finding ("digital and data capability" — p.18) and the cross-cutting Digital section's named top skills (p.22); also a stated need in Advanced Manufacturing, BPS and Life Sciences. |
| digital-ai | 5 | Cross-cutting Priority 1 in its own right (AI adoption, governance, security), reinforced by a local, C&W-specific Lightcast figure (~32% of employers expect skills to change significantly by 2030, p.22) and named across 6 of 7 sector chapters. |
| engineering | 5 | The top-named pressure in Advanced Manufacturing, Clean Energy, Construction and Agri-tech, backed by the Employer Skills Survey's 56% hard-to-fill / 39% skill-shortage figures for manufacturing (p.28). |
| practical-making | 5 | Core trades (electricians, plumbers, bricklayers, joiners) are the central pressure in Construction and Clean Energy, backed by ECITB's 60–70% craft/technician workforce-demand figure (p.48) and Construction's own 50%+ hard-to-fill stat. |
| sustainability | 5 | The dedicated Sustainability cross-cutting theme names concrete green skills directly from the LSIP's own business survey (p.24); also central to the whole Clean Energy chapter and Construction's retrofit priority. Caveat: the same survey found ~50% of businesses expect "no impact" from low carbon — a genuine mixed signal, noted below. |
| leadership | 5 | Named in the Employer Perspective's headline top-3 finding (p.18) and explicitly "consistently hard to fill" for front-line supervisory roles (Visitor Economy, p.24); also a stated priority in Health & Social Care and BPS. |
| care-empathy | 5 | The whole Health & Social Care chapter is organised around workforce stability in caring roles, and the Employer Perspective's headline survey finding names "interpersonal resilience...for front-line care work" explicitly (p.18). |
| self-management | 5 | The methodology's own anchor example for this exact region/skill pair: the all-sector, survey-based "workplace behaviours...reliability and practical readiness" finding (p.18). |
| programming | 4 | Named within the cross-cutting Digital section's "most in-demand" local skills list (SQL, Agile, C#, p.22 — flagged in the plan itself as 2023 data) and as a growth need in Life Sciences and BPS; no dedicated shortage percentage. |
| commercial | 4 | Explicitly named as a competency gap within the cross-cutting Sustainability theme ("blended finance literacy...requires provision that does not currently exist at scale locally", p.24); a narrower base of evidence than the 5s — see judgement calls below. |
| law-ethics | 4 | Named as a stated skills need in Business & Professional Services ("regulatory and compliance knowledge", p.36) and Life Sciences (pharmaceutical/clinical regulatory knowledge, p.44) — a gap in 2+ sectors, no quantified survey figure. |
| speaking | 4 | Drawn from the same all-sector headline finding used for self-management ("communication habits", p.18) plus a supporting training-provider quote naming "teamwork, communication, problem-solving" (p.18/p.30) — see judgement call below on shared evidence. |
| critical-thinking | 4 | BPS's own central challenge is progression "into higher-level professional, analytical and digital positions" (p.34); reinforced by the cross-cutting Digital section's "editorial judgement" shift for creative roles (p.22). |
| problem-solving | 4 | Named within the cross-cutting Digital section's skills list (p.22) and in a supporting employer quote about apprentices lacking "teamwork, communication, problem-solving" (p.18). |
| creativity | 4 | Substantively discussed within the "Digital and Creative" cross-cutting theme itself — creative roles "shifting toward creative direction, editorial judgement and audience strategy" (p.22). |
| content-production | 4 | Also drawn from the "Digital and Creative" cross-cutting theme (p.22) and named directly in the system-wide digital-literacy action ("digital content creation", p.58). |
| scientific-method | 3 | A clearly named, single-sector gap: Life Sciences' own "structural gap at Level 4-5" for laboratory and clinical manufacturing technician pathways (p.44) — not stated as a gap in any other sector. |
| teamwork | 3 | A single, concrete supporting quote from an Advanced-Manufacturing-context apprenticeships manager ("teamwork, communication, problem-solving", p.18) — real but narrower evidence than the headline all-sector finding. |
| cyber-security | 2 | Appears only inside action/programme text (system-wide digital-literacy provision, p.58; a BPS upskilling action, p.64) rather than being named as a current shortage anywhere in the evidence sections. |
| customer-service | 2 | Appears only as a named SOC occupation category ("Customer Service Occupations") in the Business & Professional Services occupation-mapping annex (p.80) — an occupation-table mention, not a stated gap. |
| numeracy | 1 | Not named as a gap anywhere; only implicit, via mentions like "data modelling skills" (p.22) and the technical/measurement content of named occupations (engineers, fitters). Consistent with methodology §3.2 J6's expectation of low local demand. |
| writing | 1 | No distinct written-communication gap is named anywhere; only implicit via the general, undifferentiated "communication habits" finding (p.18), which I have scored primarily under self-management and speaking. |
| languages | 0 | No mention of foreign languages anywhere in the plan, including in Life Sciences' discussion of its internationally-recruited workforce. Consistent with methodology §3.2 J7. |

### Judgement calls (flagged for review)

- **`data-analysis`, `leadership`, `care-empathy`, `speaking` all partly rely on the same
  single headline sentence** — "Employers most frequently identified technical skills,
  digital and data capability, and leadership and management as growing in importance"
  (p.18) plus the adjoining all-sector survey finding about workplace behaviours and
  communication habits (also p.18, the same passage methodology.md uses as its own
  `self-management` anchor for this region). I read "most frequently identified" and
  the all-sector survey framing as valid, if qualitative, employer-survey evidence
  (matching the rubric's own precedent for LCR's "virtually all of the deep-dive
  interviews" hedge), so I let multiple skills draw D=5 from this one rich passage
  rather than reserving it for a single skill. A reviewer who wants a stricter one-skill-
  per-quote rule should downgrade `speaking` to 4 and possibly `data-analysis`/`leadership`
  to 4 as well.
- **`commercial` = 4** rests on one fairly narrow mention (financial literacy for nature-
  based/land-management projects, p.24) rather than broad evidence of commercial/
  financial-awareness shortage across the mainstream economy. It clears the bar only
  because that mention sits inside a cross-cutting theme's own text, which the rubric
  treats as an automatic floor of 4. A reviewer may consider this over-generous.
  Same reasoning applies to `creativity` and `content-production` (both drawn from the
  "Digital and Creative" theme's short discussion of creative roles adapting to AI,
  p.22) and to `problem-solving`/`programming` (drawn from the same cross-cutting
  Digital skills list, p.22).
- **`sustainability` = 5** despite a genuine mixed signal in the same survey: about half
  of businesses said low carbon would have "no expected impact" on them (p.24). I scored
  on the strongest supporting evidence per the rubric's instruction ("take the highest
  level the evidence supports"), but flagged the caveat in the table above and in
  `demand.csv`'s evidence text is necessarily short — the fuller caveat is only here.
- **`writing` vs `speaking`**: the LSIP never distinguishes written from spoken
  communication — it only uses the bundled phrase "communication habits". I split the
  evidence by judgement (self-management/speaking get credit, writing stays low) rather
  than scoring both identically, since no A-level-relevant "reports", "emails" or
  "written communication" language appears anywhere in the plan (unlike, for example,
  GM's "professional emails" quote).
- **Page-citation correction:** my original Phase A draft mis-cited the whole Cross-
  Cutting Priorities section (Digital and Creative / Sustainability / Visitor Economy)
  using the document's own printed footer numbers instead of extraction page-index
  numbers, and my first pass at the R0 duplicate-pair remapping then converted those
  footer numbers a second time. This has been corrected throughout (see §4's note) and
  cross-checked against a dozen independent phrase searches in the canonical
  `r0-cw-lsip-2026.txt` before being relied on for `demand.csv`/`priority_weights.csv`.

## Second review (D extremes)

Second review, 27 September 2026, under methodology §4.2 ("a second reviewer checks every 5 and every 0"). The full ruling and the cross-area table are in [`research/d-review.md`](../d-review.md). Page numbers are the canonical PDF index; the first page of each duplicated pair is cited.

**Ruling applied.** A 5 needs a quantified finding from the ERB's own survey or structured engagement. The finding must cover the whole sample, state a magnitude and name this skill. A ranking such as "most frequently identified" is not a magnitude; this is the same test that GM applied to its QES job-title rankings. Third-party figures are not the ERB's own evidence either: Lightcast, ECITB, Skills for Care, Cogent and sector-level ESS vacancy rates. A single quantified passage that describes one bundled gap supports a 5 only for the bundle's core skill (the anchor gives it to self-management), not for every component it lists.

| Skill | Was | Now | Reason |
|---|---|---|---|
| `self-management` | 5 | **5** | Upheld: this is the §4.2 anchor. "Across every sector represented in the survey and interviews, employers flagged the same gap…" (p.18) is a universal quantifier over the ERB's own sample. |
| `data-analysis` | 5 | **4** | Cross-cutting (p.18 finding, p.22 Digital theme). "Most frequently identified" is a ranking with no magnitude. |
| `leadership` | 5 | **4** | Same p.18 ranking. "Consistently hard to fill" (p.24) is not a magnitude. |
| `digital-ai` | 5 | **4** | Cross-cutting (Digital Priority 1, p.22). The 32% figure is Lightcast's, not the LSIP survey's, and measures expected change in skills rather than a gap. The LSIP survey's AI finding (p.22) has no figure. |
| `sustainability` | 5 | **4** | A cross-cutting theme (p.24). The LSIP survey names green skills but gives no figure. Its only figure, "around 50%… 'no expected impact'", points against a gap. |
| `engineering` | 5 | **4** | A gap in 2+ sectors (p.28, p.40), but not cross-cutting. The 56%/39% figures are NW ESS vacancy rates for the manufacturing sector as a whole, not for this skill. |
| `practical-making` | 5 | **4** | A gap in 2+ sectors (p.48, p.40). ECITB's 60–70% is a share of workforce demand, from a third party. |
| `care-empathy` | 5 | **3** | A gap in one priority sector (Health and Social Care, p.52). The p.18 phrase "interpersonal resilience required for front-line care work" is only an example ("e.g.") of the essential-business-skills gap. |
| `languages` | 0 | **0** | Upheld. Synonym search found only metaphors ("speaking different languages", "one language on essential business skills", p.18, p.116). |

`speaking` stays at 4. "Communication habits" is part of the same p.18 bundle, so it can't take a second 5 from that passage.
