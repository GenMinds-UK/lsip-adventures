# Cumbria — LSIP evidence notes

**Note (checkpoint 2):** D and W scores in the Phase B tables below have been superseded by `research/d-review.md` (second review and harmonisation) and `research/w-review.md`. The CSVs in `research/data/regions/cumbria/` are authoritative.

Region id: `cumbria`. Employer Representative Body: **Cumbria Chamber of Commerce** (confirmed on GOV.UK's designated ERB notice, checked 2026-09-27, retrieved as `govuk_lsip.html`). Councils: **Cumberland Council** and **Westmorland and Furness Council** (both unitary, created April 2023). Strategic authority: GOV.UK's designated-ERB table still lists "Not applicable" for Cumbria (checked 2026-09-27), but the 2026 LSIP itself states that the **Cumbria Combined Authority (CCA)** was formally established on 24 February 2026 (`cumbria-lsip-2026.pdf` p.14) — confirmed independently via the CCA's own site (cumbria-ca.gov.uk), Cumberland Council news and `legislation.gov.uk` (The Cumbria Combined Authority Order 2026). It is a non-mayoral combined authority for its first year; Cumbria elects its first mayor in May 2027. See VERIFY flags below.

## Documents

| Document | URL | Pages | Retrieval status |
|---|---|---|---|
| Cumbria LSIP 2026–2029 (main plan, "FINAL POST-SUBMISSION") | https://cumbriachamber.co.uk/wp-content/uploads/2026/07/Cumbria-LSIP-2026-2029-FINAL-POST-SUBMISSION.pdf | 42 | Downloaded with `curl`, extracted, read in full. Annexes A, B and D are referenced as separate documents not included in this PDF and were not separately located. |
| Cumbria LSIP Progress Report, June 2025 | https://cumbriachamber.co.uk/wp-content/uploads/2025/06/LSIP-Progress-Report-Cumbria-2025-FINAL.pdf | 44 | Downloaded with `curl`, extracted. Read in full for sections 1–5 (pages 1–14); the roadmap table in Annex A (pages 15–44) was read in full for the manufacturing/energy/construction occupation lists and grepped throughout for other stats/occupations. |
| Cumbria Local Skills Improvement Plan, August 2023 (previous full plan) | https://assets.cumbriachamber.co.uk/wp-content/uploads/2024/04/Cumbria-Local-Skills-Improvement-Plan-August-2023.pdf | 61 | Downloaded with `curl`, extracted. Read in full for Part 1 and Part 2 (pages 1–26, the employer-needs narrative and percentages); grepped for the Annex A economic-context statistics (pages 37–53). |
| Cumbria Chamber of Commerce LSIP page | https://www.cumbriachamber.co.uk/local-skills-improvement-plan-lsip | — | Checked with WebFetch, 2026-09-27: loads, links to the 2026 plan, the 2025 progress report and supporting sector reports (clean energy, offshore wind, land-based). |

GOV.UK's "Notice of designated Employer Representative Bodies" (local snapshot `govuk_lsip.html`, page states "updated 10 July 2026") confirms: ERB "Cumbria Chamber of Commerce"; areas covered "Cumberland, Westmorland and Furness"; strategic authority "Not applicable".

## Area summary and key stats

- Predominantly rural county, 2,614 square miles, population over 500,000; grew 2.5% 2014–2024 (below the 7.6% national rate), with growth of ~3,060 people/year since the pandemic (`cumbria-lsip-2026.pdf` p.12).
- £15bn economy (2022 GVA was £13.3bn per the 2025 progress report p.4); built on advanced manufacturing, clean energy, tourism and land-based industries, across a heritage city, industrial centres, market towns, three ports, an enterprise zone, two national parks and 180 miles of coastline (p.12).
- Productivity £55,964 per filled job (2023) vs national £66,402, though the gap is narrowing: Cumbria's productivity grew 11.3% vs 8.4% UK since 2021 (p.12).
- Employment rate 78.7% vs national 75.5%; claimant rate 2.3% vs national 4%; 9,475 active online job postings (March 2026) (p.13).
- 40.2% of working-age residents qualified to Level 4+ vs 48.4% nationally (p.13); Level 4+ qualification rate is 36th of 42 areas on the Skills England Local Skills Dashboard (p.24).
- NEET rate 3.3% vs national 5.4%, but 358 16/17-year-olds were NEET in February 2026, up 52 on the previous year, with a participation rate of 90.3% (below the 92.1% national rate) (p.13).
- Only 59% of Cumbria's residents are of working age; 58% of residents commute by car, reflecting limited public transport (p.19, "Get Cumbria Working" plan).
- £3 billion productivity gap and a projected 6% decline in the working-age population by 2045 are the two headline economic challenges behind the LSIP (p.18).
- The Cumbria Combined Authority (CCA) was established 24 February 2026, bringing together Cumberland and Westmorland & Furness council leaders; devolution is expected to unlock at least £333m of investment over 30 years (p.14).
- Manufacturing was 22% of Cumbria's GVA in 2021, well above the England share; healthcare, engineering and hospitality also employ a higher share of the workforce than the England average (18.4% vs 12.6%, 8.2% vs 6.1%, 6.4% vs 3.6%) (`cumbria-lsip-2023.pdf` p.38, p.41).
- Apprenticeship achievements 2,380 in 2024/25, up 130 on 2023/24; the apprenticeship rate in March 2025 was 14.0% in Cumberland and 12.8% in Westmorland & Furness vs a 4.1% national average (`cumbria-lsip-2026.pdf` p.24; `cumbria-progress-2025.pdf` p.12).

## Priorities (the 2026 LSIP's own six priority sectors, p.8)

The 2026 plan names six priority sectors "critical to Cumbria's economy" (p.8): Advanced manufacturing (including defence), Construction, Energy and net zero, Health and social care, Land-based industries, and Visitor economy. These map directly to `priorities.csv`. AI/robotics/digital, professional services (e.g. accountancy), inclusion/opportunity for all and net zero/green are separately named as cross-cutting themes rather than sectors (p.23).

### Advanced Manufacturing & Defence (pages 8, 26–29 of the 2026 plan; pages 6–7, 14–15 of the 2023 plan)

- Context: includes defence — BAE Systems' submarine-build programme at Barrow (Team Barrow) and the Sellafield/nuclear decommissioning supply chain. Manufacturing/engineering apprenticeship starts are already over-represented locally: engineering & manufacturing technologies account for 25% of Cumbria's apprenticeship starts vs a 22% share nationally for the top five subject groups combined (`cumbria-lsip-2023.pdf` p.41).
- Key stats: BAE Systems needs to recruit ~600 people a year just to cover natural attrition, plus 6,000 more over 15 years for the SSNR/AUKUS submarine programme; near-term Early Careers intake alone is 1,150–1,180 people/year (apprentices, graduates, placements, interns) (`cumbria-lsip-2023.pdf` p.7).
- Skills gaps (verbatim):
  - "Manufacturing/Defence – welders, machinists and electrical" (`cumbria-lsip-2026.pdf` p.26)
  - "Key issues highlighted included welders, mechanical/electrical engineers, tradespeople/construction (range of trades), social media/marketing and general manufacturing and production." (`cumbria-lsip-2023.pdf` p.7)
  - "The critical skills to be recruited are: cost estimators, cyber security, electrical, nuclear, product safety, software, systems, project management (bid management, risk, controls, planning), skills trades (welders, steelworkers), developers, architects and procurement." (`cumbria-lsip-2023.pdf` p.7, on BAE Systems)
  - "explore routes to aggregate SME training demand in areas such as Carlisle (vast majority of provision is in West Cumbria/Furness)" (`cumbria-lsip-2026.pdf` p.29)
- Occupations/roles named: welders, machinists, electrical/electronics engineers, engineering fitters, cost estimators, developers, project managers, nuclear engineers (Level 8 doctoral STAND-Up programme) (`cumbria-lsip-2026.pdf` pp.26, 28).
- Clusters/employers named: BAE Systems (Barrow submarines, SASK training academy), Sellafield/Nuclear Decommissioning Authority, Furness College, National College for Nuclear, University of Cumbria, Gen2 (Carlisle).

### Construction (pages 8, 26–29 of the 2026 plan; pages 14–15 of the 2023 plan)

- Context: growth pressure from major housing (10,000 homes at St Cuthbert's Garden Village, 800 at Barrow Marina Village) and infrastructure (Port of Workington, A66 dualling) alongside nationally significant projects such as HS2 and new nuclear pulling skilled trades away from local employers (`cumbria-lsip-2023.pdf` p.15).
- Key stats: construction & planning made up 15% of Cumbria's apprenticeship starts, part of a 40% combined share for manufacturing/engineering/construction vs 22% in England overall (`cumbria-lsip-2023.pdf` p.41).
- Skills gaps (verbatim):
  - "Construction – all trades but especially roofing, electrical, groundworkers, fenestration and civil engineering technicians" (`cumbria-lsip-2026.pdf` p.26)
  - "Explore low learner demand for T Level provision despite strong employer interest" (`cumbria-lsip-2026.pdf` p.28)
  - "Professional qualifications required are quantity surveying (apprenticeships), estimating and civil engineering." (`cumbria-lsip-2023.pdf` p.15)
- Occupations/roles named: roofers, electricians, groundworkers, fenestration installers, civil engineering technicians (Level 3), construction site supervisors (Level 4), site/construction managers (Level 6), quantity surveyors (Level 6) (`cumbria-lsip-2026.pdf` p.26; `cumbria-progress-2025.pdf` p.38).
- Clusters/employers named: CITB (Construction Industry Training Board), Cumbria & Lancashire Employer Network, Team Barrow.

### Energy & Net Zero (pages 8, 21, 26–30 of the 2026 plan; pages 18–20 of the 2023 plan)

- Context: nuclear (Sellafield, new nuclear build, Small Modular Reactors at the Moorside site), offshore wind (Cumbria generates ~1.7GW, around 16% of UK wind generation) and the wider North West Clean Power push, which projects 35,000 new clean energy jobs across the region by 2028 (`cumbria-lsip-2026.pdf` p.21; `cumbria-lsip-2023.pdf` p.19).
- Key stats: by 2040 Cumbria's Clean Energy Strategy hopes for 9GW of clean energy generation supporting 13,000 jobs; the Moorside/nuclear robotics and AI cluster alone is projected to bring 200 new jobs, alongside 6,000 for the nuclear deterrent (`cumbria-lsip-2023.pdf` p.18; `cumbria-lsip-2026.pdf` p.18).
- Skills gaps (verbatim):
  - "Energy and Net Zero – plumbing, heating, electrician (domestic and industrial) and engineering technicians and ensure the new skills needed are incorporated into all relevant apprenticeships" (`cumbria-lsip-2026.pdf` p.26)
  - "We need to retain our strong foundation of engineering skills, especially in roles such as welding (L3/4), electrical engineering (L3/6), engineering maintenance (L3), mechanical engineering (L3/6)" (`cumbria-lsip-2023.pdf` p.19)
  - "there are significant lead times in engaging young people ... and in training to the required standard for some roles (e.g. 4 years+ for specialised welders)" (`cumbria-lsip-2023.pdf` p.18)
- Occupations/roles named (construction phase): civil engineers (Level 6), technicians (Level 3), construction site supervisors (Level 4), managers (Level 6), quantity surveyors (Level 6), engineering construction riggers/erectors (Level 3), electrical trades (Level 3), scaffolders (Level 2); (operational phase): electrical engineering (Level 2), pipe & plate welders (Level 3), engineering fitters (Level 3), engineering design & draughtspersons (Level 3), project controls technicians (Level 3/professional Level 6) (`cumbria-progress-2025.pdf` pp.38–39).
- Clusters/employers named: Sellafield Ltd/NDA, National College for Nuclear (NCFN), RAICo (Robotics & AI Collaboration), Britain's Energy Coast Business Cluster (BECBC), Port of Workington, Barrow, Carlton Power (hydrogen), ORSTED/Furness College, Siemens/University of Cumbria Furness Campus.

### Health & Social Care (pages 8, 27–31 of the 2026 plan; pages 8, 13, 17 of the 2023 plan)

- Context: pressure falls hardest on the NHS care sector, with private care homes (better able to fund pay and flexibility) drawing staff away from the NHS, and rising pay in tourism/retail pulling workers out of care altogether (`cumbria-lsip-2023.pdf` p.8).
- Key stats: health, public services & care made up 21% of Cumbria's apprenticeship starts (`cumbria-lsip-2023.pdf` p.41); Cumbria and Lancashire together are projected to need 83,665 extra care staff by 2040 (cited via the regional Skills for Care evidence base referenced across LSIP documents).
- Skills gaps (verbatim):
  - "In the care sector, recruitment and lack of understanding of care as a career is highlighted by employers as their biggest challenge." (`cumbria-lsip-2023.pdf` p.8)
  - "Social Care – Level 2-6 ranging from care workers to social workers and nurses" (`cumbria-lsip-2026.pdf` p.27)
  - "availability countywide of apprenticeships to Level 6, social work at Levels 6 and 7; care management at level 5+ and nurses at Level 6" (`cumbria-lsip-2026.pdf` p.28)
  - "Staff shortages make it challenging for employers to release staff for training." (`cumbria-lsip-2023.pdf` p.13)
- Occupations/roles named: care/support workers (Level 2 Adult Social Care Certificate), registered/care managers (Level 5 Leadership & Management), social workers (Levels 6–7), nurses (Level 6) (`cumbria-lsip-2026.pdf` pp.28, 30).
- Clusters/employers named: Skills for Care, NHS, Integrated Care Boards (ICBs), private care providers, Westhouse/Lakes College (Routeway to Care).

### Land-based Industries (pages 8, 26–29 of the 2026 plan; pages 14, 18 of the 2023 plan)

- Context: farming, forestry, conservation and horticulture across Cumbria's national parks and coastline, undergoing a major policy shift from food production towards public goods, nature recovery and diversification (`cumbria-lsip-2023.pdf` p.14).
- Key stats: agriculture apprenticeship starts rose 112.5% 2018/19–2021/22 (though from a low base of 50); environmental conservation starts rose 500%; horticulture and forestry starts fell 77.3% (`cumbria-lsip-2023.pdf` p.41).
- Skills gaps (verbatim):
  - "Land based employers identify that current and future technical content must include mitigating and adapting to climate change, grants and regulation and use of renewables." (`cumbria-lsip-2023.pdf` p.14)
  - "There are gaps at L0/1 for ECHP/SEND students and Level 1 for all subsectors." (`cumbria-lsip-2023.pdf` p.14)
  - "Land-based – Level 2-6 across a range of skills and explore options to develop pre-apprenticeship activity such as Foundation Apprenticeships" (`cumbria-lsip-2026.pdf` p.26)
- Occupations/roles named: countryside workers (Level 2 apprenticeship), agricultural/farm technicians, forestry workers, professional foresters (Level 6, University of Cumbria), land-based business/environmental advisers (`cumbria-lsip-2023.pdf` p.14; `cumbria-progress-2025.pdf` p.8).
- Clusters/employers named: LANSS (Land & Nature Skills Service), Kendal College, Myerscough College, University of Cumbria (Ambleside campus), Farmer Network, NFU.

### Visitor Economy (pages 7–8, 26–32 of the 2026 plan; pages 7, 11, 13 of the 2023 plan)

- Context: includes cultural & creative industries; a largely non-chain, family-run, small-business sector centred on the Lake District, Carlisle and the coast.
- Key stats: Cumbria Tourism's Business Tracker shows 73% of visitor economy businesses experiencing recruitment challenges and 66% reporting skills shortages, especially chef skills, front of house/customer service and management (`cumbria-lsip-2023.pdf` p.7). Travel & Tourism starts at Carlisle College grew from 11 learners (2023/24) to around 47 (2025/26) (`cumbria-progress-2025.pdf` p.9).
- Skills gaps (verbatim):
  - "In the visitor economy, chef skills/a lack of well trained and experienced chefs is the problem most quoted by employers." (`cumbria-lsip-2023.pdf` p.7)
  - "Visitor Economy – chef de partie and commis chef, plus a range of other occupations as well as provision such as full-time Travel & Tourism and consider a stepped approach to the Chartered Manager Degree Apprenticeship" (`cumbria-lsip-2026.pdf` p.26)
  - "structural barriers (rurality, timing, transport, back-loading) that limit take up" of visitor-economy apprenticeships (`cumbria-lsip-2023.pdf` p.11)
- Occupations/roles named: commis chef, chef de partie, hospitality team members, housekeeping/accommodation services staff, travel & tourism officers, hospitality managers (Chartered Manager Degree Apprenticeship, Level 6) (`cumbria-lsip-2026.pdf` p.26, p.30; `cumbria-lsip-2023.pdf` p.11).
- Clusters/employers named: Cumbria Tourism (Tourism Talent Hub), Carlisle College (chef academy, new restaurant), Lakes College, Kendal College, Furness College, Simon Rogan/Our Farm, English Lakes Hotels, Westmorland Family (`cumbria-progress-2025.pdf` p.9).

## Cross-cutting themes

- **Digital, AI and robotics** — treated as an enabling capability embedded in every sector rather than a separate sector: "employers identified growing demand for digital capability and technology-enabled skills, including automation, robotics and AI-supported systems" (`cumbria-lsip-2026.pdf` p.30).
- **Net zero and low carbon skills** — embedded across construction, energy, manufacturing and land-based curricula, e.g. "ensure all relevant apprenticeship, study programme, ASF and HE provision in Cumbria incorporates up-to-date learning about net zero" (`cumbria-lsip-2026.pdf` p.30).
- **Rurality and transport** — "Cumbria's rural geography and limited transport infrastructure restrict access to jobs, education, and essential services", with 58% of residents commuting by car (`cumbria-lsip-2026.pdf` p.19).
- **NEET reduction and inclusion** — a proposed "overarching NEET strategy for Cumbria" targeting the 17–24 age group, alongside actions for disabled people, care leavers, ex-offenders and armed forces veterans (`cumbria-lsip-2026.pdf` p.28, p.9).
- **Professional and business services** — a planned review of accountancy and other professional-services roles, flagged separately from the six priority sectors (`cumbria-lsip-2026.pdf` p.29).
- **Apprenticeship growth** — a countywide push to reverse a recent decline in 16–18 apprenticeship starts, backed by a dedicated (draft) Apprenticeship Action Plan (`cumbria-lsip-2026.pdf` p.8, p.19-20).

## Employer survey findings

**2026 plan evidence base** (Annex C, p.38): employer survey of 213 respondents (47 with 0–10 employees, 65 with 11–249, 18 with 250+); 1-2-1s with 68 employers and 11 providers in priority sectors; workshops with 22 employers and 16 providers. The 2026 survey itself was run jointly with the emerging Combined Authority and Team Barrow, and detailed results sit in a separate "LSIP-2025-Survey-Results" annex not included in the main PDF.

**2025 progress report monitoring survey** (`cumbria-progress-2025.pdf` pp.7–8), with 2024/2023 figures in brackets where given:
- 44% report no skills or staff shortages (53.6% in 2024); 42% lack staff with the right skills (34%); 23% lack sufficient staff (25%); 19% have staff needing training (13%) (p.7).
- Skills Bootcamp usage rose from 5% (2023) to 9% (2024) to 13% (2025), even as awareness fell from 63% to 46% (p.8).
- 30% of employers now employ apprentices (28% in 2024); of those who don't, 55% say they aren't needed, 14% cite cost, 14% cite time, 10% difficulty recruiting, 14% difficulty finding suitable apprenticeships (p.8).
- Ease of recruiting apprentices: 10% very easy, 24% easy, 38% neither easy nor difficult, 21% difficult, 7% very difficult (p.8).
- Apprenticeship retention: during training, 68% rarely/never struggle, 26% sometimes, 6% usually/always; after training, 59% rarely/never struggle, 32% sometimes, 9% always/usually (p.8).
- 76% report no issues with basic skills (maths/English/ICT); of the rest, issues are mostly with existing staff (13%) (p.8).
- 53% report no issues with essential/employability skills (54% in 2024); of the rest, 39% cite young people leaving education, 14% other new staff, 11% existing staff (p.8).
- On finding the right training: 38% feel engaged with providers and can find it, 23% feel engaged but can't find it, 17% don't feel engaged but can find it, 22% don't feel engaged and can't find it (p.8).

**2023 plan employer survey** (`cumbria-lsip-2023.pdf`, pages 7–17):
- 48% of businesses across all sectors reported current staff shortages, roughly two-thirds skilled staff and one-third people needing training (p.7).
- 43% report issues with employee behaviours/emotional intelligence; the specific skills and behaviours most identified were: communication 60%, customer service 50%, self reliance 44%, teamworking 44%, turning up regularly and on time 42%, dealing with difficult people/situations 40%, managing emotions 32%, understanding boundaries 28%, empathy 25%, diffusing/addressing complaints 23%, dealing with different cultures 18% (p.9).
- 29% report basic/functional skills issues (18% existing staff, 8% new staff, 9% people coming out of education) (p.8).
- 30% of respondents currently employ apprentices; of those who don't, 44% say they aren't needed, 14% cite time, 12% say suitable apprenticeships aren't available, 10% cite cost, 8% difficulty recruiting (p.9).
- Of those who do employ apprentices: 80% say it's a good way of developing skills, 39% say it supports retention, 33% say it's cost-effective training, 59% pay above the relevant apprenticeship rate (p.9).
- 5% of respondents were aware of and had used Skills Bootcamps; 32% aware but not used; 63% not aware (p.12).
- 84% report currently available training as fit for purpose; of the 16% flagging issues, these are: cost 36%, content 34%, location 28%, timing 28%, standard 15% (p.13).
- 34% cite cost/availability of finance as a training barrier; 25% fund training themselves (p.17); in care specifically, 47% cite cost as a barrier (p.17).

## Skills-language inventory

Columns: phrase | priority/cross-cutting | page | strength signal (H = headline/repeated finding with numbers; M = named explicitly as a need; L = mentioned in passing/context only).

| phrase | priority/cross-cutting | page | strength signal |
|---|---|---|---|
| insufficient supply of Level 2–3 technical and trade skills | cross-cutting | 2026 p.8 | H — 1 of 5 core skills challenges |
| entry-level workforce shortages across key sectors | cross-cutting | 2026 p.8, p.24 | H — repeated in headline gaps |
| gaps in higher technical and professional skills (Level 4+) | cross-cutting | 2026 p.8, p.24 | H — repeated in headline gaps |
| weak progression pathways from entry-level to higher skills | cross-cutting | 2026 p.8 | M |
| underutilised workforce, particularly among disadvantaged groups | cross-cutting | 2026 p.8 | M |
| core employability skills (communication, teamwork, reliability) | cross-cutting | 2026 p.24 | H — headline priority skills gap |
| persistent recruitment difficulties across sectors | cross-cutting | 2026 p.24 | H — named in employer evidence |
| low applicant numbers and technical skills gaps | cross-cutting | 2026 p.24 | H — named in employer evidence |
| ageing population and limited workforce growth | cross-cutting | 2026 p.8 | H — 1 of 4 key skills challenges |
| lower levels of higher qualifications vs national average | cross-cutting | 2026 p.8, p.13 | H — 40.2% vs 48.4% national |
| AI, robotics and cyber security | cross-cutting | 2026 p.30 | H — named across all priority sectors |
| digital capability and technology-enabled skills | cross-cutting | 2026 p.30 | H — growing demand across all sectors |
| professional services (such as accountancy) | cross-cutting | 2026 p.29 | M — dedicated review planned |
| overarching NEET strategy | cross-cutting | 2026 p.28 | M — named action |
| welders, machinists and electrical | advanced-manufacturing | 2026 p.26 | H — named sector-specific need |
| welders, mechanical/electrical engineers | advanced-manufacturing | 2023 p.7 | H — top issues in employer survey |
| cost estimators, cyber security, electrical, nuclear, product safety, software, systems | advanced-manufacturing | 2023 p.7 | H — BAE Systems critical recruitment list, ~600/year replacement |
| aggregate SME training demand | advanced-manufacturing | 2026 p.29 | M — named action for Carlisle-area manufacturers |
| Level 8 doctoral STAND-Up programme (nuclear engineers) | advanced-manufacturing | 2026 p.28 | M — flagship higher-level pathway |
| full-time undergraduate and postgraduate HE offer (mechanical/electrical engineering) | advanced-manufacturing | 2026 p.28 | M |
| roofing, electrical, groundworkers, fenestration and civil engineering technicians | construction | 2026 p.26 | H — named sector-specific need |
| tradespeople/construction (range of trades) | construction | 2023 p.7 | H — named in employer survey |
| explore low learner demand for T Level provision despite strong employer interest | construction | 2026 p.28 | M |
| quantity surveying, estimating and civil engineering | construction | 2023 p.15 | M — professional qualifications required |
| civil engineers (L6) and technicians (L3), construction site supervisors (L4) and managers (L6), quantity surveyors (L6) | construction | progress p.38 | H — named priority occupations |
| scaffolders (L2) | construction | progress p.38 | M — named priority occupation |
| plumbing, heating, electrician (domestic and industrial) and engineering technicians | energy-net-zero | 2026 p.26 | H — named sector-specific need |
| welding (L3/4), electrical engineering (L3/6), engineering maintenance (L3), mechanical engineering (L3/6) | energy-net-zero | 2023 p.19 | H — core skills to retain for clean energy transition |
| 4 years+ for specialised welders | energy-net-zero | 2023 p.18 | M — training lead-time barrier |
| pipe & plate welders (L3), engineering fitters (L3), engineering design & draughtspersons (L3), project controls technician | energy-net-zero | progress p.39 | H — named priority occupations, operational phase |
| ensure all relevant provision incorporates up-to-date learning about net zero | energy-net-zero | 2026 p.30 | M — named action |
| SMR operation and maintenance to Level 7 | energy-net-zero | 2026 p.28 | M |
| recruitment and lack of understanding of care as a career | health-social-care | 2023 p.8 | H — named as biggest challenge by care employers |
| care workers to social workers and nurses | health-social-care | 2026 p.27 | H — named sector-specific need, Level 2-6 |
| social work at Levels 6 and 7; care management at level 5+ and nurses at Level 6 | health-social-care | 2026 p.28 | H — named priority occupations |
| Level 2 Adult Social Care Certificate | health-social-care | 2026 p.30 | M — new qualification to roll out countywide |
| values-based recruitment – reliability, compassion, stamina | health-social-care | 2026 p.32 | M — named retention action |
| staff shortages make it challenging for employers to release staff for training | health-social-care | 2023 p.13 | M |
| land based employers identify climate change, grants/regulation and renewables content | land-based | 2023 p.14 | H — named technical content gap |
| gaps at L0/1 for ECHP/SEND students and Level 1 for all subsectors | land-based | 2023 p.14 | M — named provision gap |
| Woodland Carbon Code, agroforestry | land-based | 2023 p.14 | L — named specialist forestry skill |
| Land-based – Level 2-6 across a range of skills | land-based | 2026 p.26 | H — named sector-specific need |
| Countryside Worker Apprenticeship (Level 2) | land-based | progress p.8 | M — flagship LANSS/Kendal College success |
| chef skills/a lack of well trained and experienced chefs | visitor-economy | 2023 p.7 | H — problem most quoted by employers |
| 73% recruitment challenges, 66% skills shortages (Cumbria Tourism Business Tracker) | visitor-economy | 2023 p.7 | H — sector employer survey |
| chef de partie and commis chef | visitor-economy | 2026 p.26 | H — named sector-specific need |
| front of house/customer service | visitor-economy | 2023 p.8, p.13 | H — named alongside chef skills as core gap |
| structural barriers (rurality, timing, transport, back-loading) | visitor-economy | 2023 p.11 | M — apprenticeship take-up barrier |
| Tourism Talent Hub | visitor-economy | 2026 p.32 | M — named delivery vehicle, replicated by other LVEPs |
| Chartered Manager Degree Apprenticeship | visitor-economy | 2026 p.26, p.28 | M |
| communication | cross-cutting | 2023 p.9 | H — 60% of employers name this skill |
| customer service | cross-cutting/visitor-economy | 2023 p.9 | H — 50% of employers name this skill |
| self reliance | cross-cutting | 2023 p.9 | H — 44% of employers |
| teamworking | cross-cutting | 2023 p.9 | H — 44% of employers |
| turning up regularly and on time | cross-cutting | 2023 p.9 | H — 42% of employers |
| dealing with difficult people/situations | cross-cutting | 2023 p.9 | H — 40% of employers |
| managing emotions | cross-cutting | 2023 p.9 | M — 32% of employers |
| ICT, digital and data | cross-cutting | 2023 p.16 | H — named gap across the range of sectors |
| marketing, both traditional and digital | cross-cutting | 2023 p.15 | H — named key gap, especially manufacturing/visitor economy |
| leadership, management and business | cross-cutting | 2023 p.17 | H — named priority theme |
| cost/availability of finances as a barrier to training | cross-cutting | 2023 p.17 | H — 34% of employers |
| currently available training as fit for purpose | cross-cutting | 2023 p.13 | H — 84% of survey respondents agree |
| lack of staff with the right skills | cross-cutting | progress p.7 | H — 42% of employers 2025 (34% 2024) |
| essential skills (young people leaving education) | cross-cutting | progress p.8 | H — 39% of employers cite this, up from 29% in 2023 |
| difficulty finding suitable apprenticeships | cross-cutting | progress p.8 | M — 14% of employers not offering apprenticeships |
| don't feel engaged and can't find the right training | cross-cutting | progress p.8 | M — 22% of employers 2025 |
| usage of Skills Bootcamps | cross-cutting | progress p.8 | H — up from 5% (2023) to 13% (2025) |
| shortage of trainers and assessors | cross-cutting | progress p.38 | M — CITB Industry Impact Fund of up to £500k to address |
| apprenticeship rate 14.0%/12.8% vs 4.1% national | cross-cutting | progress p.12 | H — standout local strength stat |
| 58% of residents commuting by car | cross-cutting | 2026 p.19 | H — rurality/transport barrier stat |
| NEET rate of 3.3%, 358 16/17 year olds NEET (+52) | cross-cutting | 2026 p.13 | H — used to justify NEET strategy action |
| projected 6% decline in working-age population to 2045 | cross-cutting | 2026 p.18 | H — headline economic driver behind LSIP priorities |
| £3 billion productivity gap | cross-cutting | 2026 p.18 | H — headline economic driver behind LSIP priorities |

## Contacts sources

All URLs below were opened with WebFetch on 2026-09-27 and confirmed to load.

- Cumbria Chamber of Commerce LSIP page (ERB) — https://www.cumbriachamber.co.uk/local-skills-improvement-plan-lsip
- Cumbria Combined Authority — https://www.cumbria-ca.gov.uk/
- Cumberland Council business support — https://www.cumberland.gov.uk/business-and-licensing/business-support
- Westmorland and Furness Council business support — https://www.westmorlandandfurness.gov.uk/business-and-licensing/business-support
- Cumbria Growth Hub — https://cumbriagrowthhub.co.uk/
- Cumbria Careers Hub — https://www.careershubcumbria.co.uk/
- University of Cumbria — https://www.cumbria.ac.uk/
- Kendal College (apprenticeships) — https://kendal.ac.uk/apprenticeships
- Carlisle College — https://www.carlisle.ac.uk/
- LANSS (Land & Nature Skills Service) — https://www.lanss.uk/

## VERIFY flags

- **VERIFY:** Strategic authority status. GOV.UK's designated-ERB notice (checked 2026-09-27) still shows "Not applicable" for Cumbria's strategic authority, but the 2026 LSIP itself, the CCA's own website, Cumberland Council's news page and `legislation.gov.uk` all confirm the Cumbria Combined Authority was established on 24 February 2026. It is non-mayoral in its first year (leaders of the two councils jointly lead it), with the first mayoral election due May 2027. `region.csv` records the CCA as the authority since it demonstrably exists, but the GOV.UK LSIP-designation page had evidently not been updated to reflect it as of the retrieval date.
- **VERIFY:** `lsip_published` for the 2026 plan. The document itself carries no explicit "published" date or version footer beyond "Official"; July 2026 is inferred from the PDF's upload path (`/wp-content/uploads/2026/07/...FINAL-POST-SUBMISSION.pdf`) and the area-fact brief's "updated 10 July 2026" GOV.UK note, not from text inside the PDF.
- **RESOLVED (Phase B):** Detailed sector-by-sector employer-survey percentages for 2026. Phase A could not locate the 2026 plan's Annexes A, B and D. R0 subsequently retrieved and extracted **Annex A (Further Evidence)** and **Annex A1 (Employer Skills Survey 2025, 213 responses)** — see the Phase B scoring section below, which draws its D/W evidence primarily from these two documents plus the main 2026 plan. Annex B (action table) and Annex D (mapping table) were still not required for scoring and remain unlocated.
- **VERIFY:** Care sector demand figure "83,665 extra staff by 2040" is a Lancashire-and-Cumbria combined figure (from the regional Skills for Care evidence base cited in the neighbouring Lancashire LSIP's research), not a Cumbria-only number; included here for context but flagged as not Cumbria-specific.

## Top 5 skills gaps by strength of evidence

1. **Level 2–3 technical trade skills across construction, engineering and care.** This is the LSIP's own single headline gap, repeated almost word-for-word in the five core challenges (p.8), the headline priority skills gaps (p.24) and every sector-specific action list (pp.26–30): welders, machinists, electricians, roofers, groundworkers, care workers. It is the one theme that appears in all six priority sectors.
2. **Chef and hospitality skills in the visitor economy.** Backed by hard numbers from Cumbria Tourism's own Business Tracker — 73% of businesses report recruitment challenges and 66% report skills shortages, focused on chef skills, front of house and management (2023 p.7) — and confirmed as still the top-named issue in the 2026 plan's sector-specific list (p.26).
3. **Core employability/essential skills (communication, teamworking, reliability, punctuality).** The 2023 employer survey gives this precise, ranked percentages (communication 60%, customer service 50%, self reliance 44%, teamworking 44%, turning up on time 42%; p.9), and the 2025 progress report shows the "young people leaving education" version of this gap has worsened from 29% to 39% of employers (progress p.8) — a rare case of a tracked trend getting worse.
4. **Nuclear, defence and clean-energy engineering skills (welders, engineers, technicians).** Extremely well evidenced with hard numbers: BAE Systems' ~600/year replacement recruitment plus 6,000 over 15 years for the submarine programme (2023 p.7), a detailed occupation-by-level breakdown for both construction and operational phases of clean energy projects (progress pp.38–39), and an explicit note that specialist welding training alone can take 4+ years (2023 p.18).
5. **Apprenticeship take-up and awareness.** Tracked consistently across all three documents with year-on-year percentages: 30% of employers now use apprentices (up from 28% in 2024, 2023's baseline), but Skills Bootcamp awareness has fallen from 63% (2023) to 46% (2025) even as usage rose from 5% to 13% (progress p.8) — good evidence of a gap between growing appetite and static awareness that the LSIP explicitly wants to fix through its Apprenticeship Action Plan.

## Phase B scoring (skills taxonomy demand and priority weights)

**Scope note.** Per `research/methodology.md` §4.2 and §10.8, D and W scores are evidenced **only** from Cumbria's 2026–29 cycle: the main plan (`cumbria-lsip-2026.pdf`, cited as **p.N** below), **Annex A: Further Evidence** (`https://cumbriachamber.co.uk/wp-content/uploads/2026/07/LSIP-Annex-A-Further-Evidence-Final-Draft.pdf`, 51 pages, cited as **Annex A p.N**) and **Annex A1: Employer Skills Survey 2025** (`https://cumbriachamber.co.uk/wp-content/uploads/2026/07/LSIP-Annex-A1-Employer-Skills-Survey.pdf`, 44 pages, 213 responses, cited as **Annex A1 p.N**). The 2025 progress report and 2023 plan used in Phase A were **not** used for D/W scoring, consistent with the methodology's source list for Cumbria (§2). Annex A1's charts (pages 11, 15, 17, 21) are images; values below are read by eye to about ±2 percentage points, per R0's own note, and are cited as "survey chart".

### D (area → skill demand, 0–5)

| skill | D | justification |
|---|---|---|
| `data-analysis` | 4 | Cross-cutting: "growing demand for digital capability... including... data-driven decision-making" applies across all priority sectors (p.30); also named in Land Based ("data handling, data analysis and AI", Annex A p.49). No skill-specific survey %. |
| `programming` | 1 | Not named anywhere. Implied only by "Digital Engineering Technician" and "Cyber Security Technician" apprenticeships (Annex A p.18). |
| `digital-ai` | 5 | Cross-cutting, stated "across all priority sectors" (p.30) **and** quantified: "Computer literacy/basic IT skills" is a named category employers found hard to obtain from applicants (survey chart, Annex A1 p.15) and one of the two skills most employers want improved in the next 1–3 years (Annex A1 p.21). |
| `cyber-security` | 2 | Official methodology anchor for Cumbria (§4.2): "understand the opportunities and impact of AI, robotics and cyber security on workforce skills" (p.30) — an action to investigate, not a stated gap. |
| `numeracy` | 2 | Per methodology J6: "Basic numerical skills and understanding" is a named survey category (Annex A1 p.15) but only ~6–8% of employers cite it — kept deliberately low and honest rather than inflated by the separate, much larger "needs improving" chart (Annex A1 p.21). |
| `scientific-method` | 2 | "Physical Scientists" and "Environment Professionals" occupations appear only in the occupation-employment context tables for Energy and Land Based (Annex A p.12, p.14) — the rubric's own example of a level-2 "occupation table" mention. |
| `engineering` | 4 | Headline: "Higher technical skills (Level 4+) in engineering, energy and digital" (p.24). Named as a core skills need across Manufacturing, Energy and Construction occupation/skills-needs tables (Annex A p.16, p.20, p.27). No skill-specific survey %. |
| `practical-making` | 5 | Cumbria's own #1 headline priority, stated twice: "Insufficient supply of Level 2–3 technical and trade skills" (p.8) and "Level 2–3 technical and trade roles" (p.24). Quantified: "Adapting to new equipment/materials" found hard to obtain from applicants, ~13% (survey chart, Annex A1 p.15). |
| `sustainability` | 4 | Explicitly named as one of four cross-cutting "key themes": "...and net zero/green" (p.23). No skill-specific survey %; Annex A's own qualitative finding is that employer demand for net zero/renewables training is currently "weak" (Annex A p.41), a judgement call noted below. |
| `commercial` | 4 | Explicitly named as a cross-cutting theme, "professional services/roles such as accountancy" (p.23), with a dedicated review action (p.29); also named in Land Based ("grants and financial acumen", "business and commercial skills", Annex A p.49). No skill-specific survey %. |
| `leadership` | 4 | Named in 2+ sectors — Visitor Economy ("customer service and career progression into management", p.30) and Energy ("Project management an important consideration", Annex A p.41) — reinforced by strong survey evidence: "Leadership/Management skills" hard to obtain, ~31% (Annex A1 p.15). Not scored 5: not one of Cumbria's own named cross-cutting themes or headline gaps (judgement call below). |
| `law-ethics` | 4 | Named in 2 sectors: "Health and safety – considerations on site" (Construction, Annex A p.41) and "knowledge of current regulations" (Land Based, Annex A p.49). No skill-specific survey %. |
| `writing` | 2 | Bundled into the Annex A1 survey question "Do you have issues with any basic/functional skills such as Maths, English, basic IT?" (Annex A1 p.17) — existing-staff issues ~19%, not isolated to English/writing specifically. |
| `speaking` | 4 | Headline: "communication" is one of Cumbria's core employability-skills gaps (p.24), and named again in both Visitor Economy and Land Based 1-2-1 findings (Annex A p.49). No dedicated survey % (the survey has no standalone "communication" category). |
| `languages` | 0 | No mention of foreign languages anywhere in the main plan, Annex A or Annex A1. |
| `care-empathy` | 3 | Named in one sector only (Health & Social Care): "values-based recruitment – reliability, compassion, stamina" (p.32), reinforced by a large table of mental-health, dementia and safeguarding qualifications (Annex A p.36–39). |
| `teamwork` | 5 | Headline: "teamwork" (p.24). Quantified: "Teamworking" hard to obtain from applicants, ~30% (survey chart, Annex A1 p.15), and one of the top skills employers want improved (Annex A1 p.21). |
| `customer-service` | 4 | Named in 3 sectors: Visitor Economy (p.30, Annex A p.49), Land Based ("customer care", Annex A p.49) and Health & Social Care (training-certificate title, Annex A p.37). No dedicated survey % (not a chart category). |
| `self-management` | 5 | Headline: "reliability" (p.24). Quantified: "Ability to manage own time/prioritise tasks" hard to obtain, ~38% (survey chart, Annex A1 p.15). Reinforced qualitatively: "Resilience and emotional intelligence is important for recruits and staff" (Visitor Economy, Annex A p.42). |
| `critical-thinking` | 1 | Not named. Implied only by "Quality engineers" and "Quality Assurance Technicians" shortages named across Manufacturing and Energy skills-needs tables (Annex A p.16, p.19, p.20). |
| `problem-solving` | 1 | Not named. Implied only by "Engineering Technicians" and "Production and Process Engineers" occupation shortages (Annex A p.11–12). |
| `creativity` | 1 | Not named as a skill gap. Implied only by the visitor economy's scope "including cultural & creative" (p.23) and "Design engineer" occupation entries (Annex A p.16), which the taxonomy's own scoring rules (§4.1 rule 6) treat as primarily an `engineering` skill. |
| `content-production` | 0 | No mention of media, video, content or digital-content production anywhere in the main plan, Annex A or Annex A1. |

**D vector:** `data-analysis=4, programming=1, digital-ai=5, cyber-security=2, numeracy=2, scientific-method=2, engineering=4, practical-making=5, sustainability=4, commercial=4, leadership=4, law-ethics=4, writing=2, speaking=4, languages=0, care-empathy=3, teamwork=5, customer-service=4, self-management=5, critical-thinking=1, problem-solving=1, creativity=1, content-production=0`

### W (priority → skill, 1–3): rows per priority

| priority | rows | skills (weight) |
|---|---|---|
| `advanced-manufacturing` | 7 | practical-making (3), engineering (3), cyber-security (2), digital-ai (2), commercial (2), self-management (2), leadership (1) |
| `construction` | 7 | practical-making (3), engineering (3), self-management (2), law-ethics (2), digital-ai (2), commercial (2), leadership (1) |
| `energy-net-zero` | 6 | practical-making (3), engineering (3), sustainability (2), leadership (2), law-ethics (2), scientific-method (1) |
| `health-social-care` | 5 | care-empathy (3), law-ethics (2), customer-service (2), leadership (2), self-management (1) |
| `land-based` | 9 | practical-making (3), engineering (2), data-analysis (2), commercial (2), law-ethics (2), sustainability (2), self-management (2), teamwork (2), speaking (2) |
| `visitor-economy` | 5 | practical-making (3), customer-service (3), self-management (3), speaking (2), leadership (2) |

Total: 39 rows across 6 priorities. Every row's `evidence` cell embeds its own page citation (e.g. "Annex A p.41"); see `priority_weights.csv`.

### Judgement calls

1. **Leadership kept at D4, not D5.** It clears "2+ sectors" easily and has the strongest single survey figure of any skill bar the headline three (~31% "Leadership/Management skills" hard to obtain, Annex A1 p.15), but it is not one of Cumbria's own named cross-cutting themes (p.23) or headline skills-gap bullets (p.8, p.24) the way `digital-ai`, `sustainability`, `commercial`, `practical-making`, `teamwork` and `self-management` are. Kept at 4 to stay faithful to the rubric's literal "cross-cutting or top-priority… **with** survey evidence" test for a 5, rather than reading the whole-sample survey as inherently "common to all sectors".
2. **Sustainability kept at D4 despite an explicit "weak demand" quote.** It is one of only four themes the LSIP itself calls cross-cutting (p.23: "net zero/green"), which satisfies the rubric's cross-cutting criterion on its own; Annex A's Energy & Net Zero workshop finding — "Weak employer demand for net zero/renewables provision" (p.41) — is evidence the *training market* is soft, not that the LSIP treats the skill as unimportant, so it doesn't override the explicit cross-cutting label but does rule out a 5 (no positive survey evidence).
3. **"Skills specific to the job role" (~63% in the Annex A1 charts, the single highest bar) was deliberately excluded as evidence for any skill.** This matches methodology §3.1's explicit exclusion of "job-specific or specialist knowledge" as a scoreable skill type. It was not used to inflate `practical-making` or any other score, even though it is the largest number in the whole survey.
4. **"Communication" (p.24 headline) was split unevenly between `speaking` (D4) and `writing` (D2).** Per methodology J1, work-readiness components should be distributed to where they belong; Cumbria's employer-facing "communication" complaints (Annex A p.49, both Visitor Economy and Land Based) read as predominantly oral/interpersonal, so `speaking` gets the headline-level weight. `writing` only has the weaker, bundled Annex A1 p.17 "Maths, English, basic IT" question behind it, so it stays low and honest rather than inheriting the full headline strength.
5. **`creativity` was not credited for "Design engineer" occupations.** Per methodology §4.1 rule 6 (no double-counting one activity across near-neighbour skills without separate evidence), engineering-design roles named in Annex A's skills-needs tables are scored under `engineering`, and `creativity` is left at a bare implicit 1 via the visitor economy's "cultural & creative" scope, rather than being inflated by the same occupation entries.
6. **Annex B and Annex D were not located** (referenced by URL in `sources.md` but not downloaded by R0), so no evidence from the action table or the mapping table was available for W scoring; all weights rest on Annex A/A1 and the main plan.

## Second review (D extremes)

Second review, 27 September 2026, under methodology §4.2. The full ruling and the cross-area table are in [`research/d-review.md`](../d-review.md).

**The Annex A1 chart values were re-measured.** The p.15 chart (Q12, 183 responses) is drawn as vector graphics, so each bar's width can be read exactly from the PDF instead of by eye. The measured values are:

| Category | Value |
|---|---|
| Skills specific to the job role | 63.2% |
| Ability to manage own time/prioritise tasks | 32.1% |
| Leadership/Management skills | 30.4% |
| Managing their own feelings/handling others | 23.9% |
| Other | 21.8% |
| Teamworking | 16.3% |
| Computer literacy/basic IT skills | 13.0% |
| Adapting to new equipment/materials | 8.7% |
| Basic numerical skills and understanding | 6.5% |

The Phase B table above misreads three of these: teamwork (~30%, actually ~16%), practical-making (~13%, actually ~9%) and self-management (~38%, actually ~32%). The p.17 "existing staff" bar is 16.7%, not ~19%. The p.21 chart (Q16) is 100%-stacked: it splits each skill between "next 12 months" and "next 1–3 years". It therefore shows nothing about how many employers want a skill improved, and it cannot support "most employers want improved".

**Ruling applied.** A 5 needs a quantified, whole-sample ERB finding that names the skill. A chart value must also show the gap is material, which I set at one respondent in five (≥ 20%). The ERB's own summary of the survey (Annex A p.44) singles out only the job-specific, leadership/management and basic-functional items. Any floor above 16.3% and up to 30.4% gives the same results.

| Skill | Was | Now | Reason |
|---|---|---|---|
| `self-management` | 5 | **5** | Upheld: a headline gap ("reliability", p.24) plus "manage own time/prioritise tasks" at 32.1%. The evidence text is corrected from ~38%. |
| `teamwork` | 5 | **4** | A headline gap (p.24), but "Teamworking" is 16.3%, below the floor. |
| `digital-ai` | 5 | **4** | Cross-cutting (p.30), but "Computer literacy/basic IT" is 13.0%. The p.30 phrase "across all priority sectors, employers identified…" is the cross-cutting label, not a measurement of the sample. |
| `practical-making` | 5 | **4** | A headline gap (p.8, p.24), but "Adapting to new equipment/materials" is 8.7%. |
| `languages` | 0 | **0** | Upheld. The only hits are "overseas workers" (Annex A p.50) and "overseas graduates" (A1 p.12), which are about workforce origin, not language skills. |
| `content-production` | 0 | **1** | Not absent: free-text answer 27 to Q12 reads "Video production/youtube" (A1 p.16), and answer 24 mentions "marketing and comms". The plan and Annex A never take this up. A single raw answer is weaker than the plan's own supporting mentions that define level 2, so I scored it 1. |

`leadership` stays at 4. It has a qualifying survey value (30.4%) but is not one of Cumbria's cross-cutting themes or headline gaps, so the scorer's judgement call 1 stands. `writing` stays at 2, with its evidence text corrected to ~17%. The 1s for `critical-thinking`, `problem-solving` and `creativity` stand. A synonym search found only occupation titles ("Design engineers", "Process Improvement engineers") and sector names ("cultural & creative").
