# Greater Manchester — LSIP evidence notes

Region id: `greater-manchester`. ERB: Greater Manchester Chamber of Commerce (GMCC), jointly led with Greater Manchester Combined Authority (GMCA). Councils: Bolton, Bury, Manchester, Oldham, Rochdale, Salford, Stockport, Tameside, Trafford, Wigan.

All page numbers below are the `=== PAGE n ===` markers produced by `pdftext.py`, i.e. the physical page position in the PDF (page 1 = cover). These run 4 ahead of the document's own printed folio numbers (e.g. printed p.11 = extraction p.15), because the first four PDF pages (cover, approval, contents x2) are unnumbered in the document itself. All citations here and in the CSVs use the extraction numbering.

## Documents

| Document | URL | Pages | Retrieval |
|---|---|---|---|
| **Greater Manchester Local Skills Improvement Plan** (main plan, 2026–2029) | https://gmc-uat.s3.eu-west-2.amazonaws.com/public/01KXZ6QR0Y5JAK9Z5399SMNRYN.pdf | 86 | Retrieved. Linked from the GMCC LSIP landing page (see below) as "Local Skills Improvement Plan 2026". No explicit publication month is printed in the document; it describes itself as covering "the period 2026 to 2029" and cites data up to Q1 2026. `lsip_published` is set to "2026" only (VERIFY: exact month). |
| GM LSIP Progress Report — June 2025 | https://gmc-uat.s3.eu-west-2.amazonaws.com/public/01KWW15K8M4207A9J7JF2G0WRA.pdf | 37 | Retrieved, not needed for extraction (superseded by the 2026 plan, which restates all current priorities). Kept as background only. |
| GM LSIP Progress Report — January 2024 | https://gmc-uat.s3.eu-west-2.amazonaws.com/public/01KMJ66YFXAR7NRME5BRAW0DRZ.pdf | 68 | Retrieved, not used (superseded). |
| Local Skills Improvement Plan — August 2023 (original GM LSIP) | https://gmc-uat.s3.eu-west-2.amazonaws.com/public/01KMJ66XXC7WP30YH3V2D2SQFQ.pdf | 54 | Retrieved, not used (fully superseded by the 2026 plan, which is a ground-up rewrite covering different sectors — the 2023 plan used a different sector structure). |

**Access notes:** `https://www.gmchamber.co.uk/gmlsip` and the GMCC domain generally return HTTP 200 to `curl.exe` with a browser User-Agent, but return HTTP 403 to the WebFetch tool on every path tried (`/gmlsip`, `/`, `/quarterly-economic-research`) — the domain appears to block automated fetchers specifically, not browsers. `gmlsip.co.uk` redirects to the same Chamber page and also loads fine via curl. The four PDFs above are hosted on an S3 bucket (`gmc-uat.s3...`, apparently a staging/UAT bucket used for production downloads) and downloaded without issue via curl. The GMCA page (`.../local-skills-improvement-plan/`) loads fine with both curl and WebFetch and confirms the same plan and headline framing. Because WebFetch cannot reach gmchamber.co.uk, the ERB row in `contacts.csv` links to the GOV.UK designated-ERB notice page instead (which does load via WebFetch and confirms GMCC as GM's ERB), rather than to the Chamber's own site.

## Area summary and key stats

- GM is described as "the fastest growing sub-regional economy in the UK" (p.7), with GVA of £96bn, now 46% larger than in 2011 (UK grew only 23% over the same period), and average annual growth of 3.1% (p.8).
- UK GDP grew 0.6% in Q1 2026; the labour market is "showing signs of stress" with employment and vacancies falling and unemployment/inactivity rising (p.8).
- Average weekly earnings growth was 3.8% (total pay, three months to Feb 2026) but only 0.4% in real terms after CPIH inflation (p.8).
- 16-17 year-old NEET rate in the North West: 5.7% in 2024/25, up from 5.3% in 2023/24 (p.8, DfE).
- 73% of employers cited high labour costs as their main cost pressure (BCC QES Q1 2026) (p.9).
- Recruitment difficulty: 45.6% of employers attempting to recruit had difficulties in 2025 Q1, falling to 44.8% in 2026 Q1, but up from 39.8% in 2025 Q4 — "recruitment pressures remain volatile" (p.9; also "nearly 45%" cited at p.7).
- Six Growth Locations anchor the plan geographically: NorthFold (Wigan/Bolton), North East Growth Corridor / Atom Valley Mayoral Development Zone (Bury, Rochdale, Oldham — advanced manufacturing/materials, incl. the Advanced Machinery and Productivity Institute), Eastern Growth Cluster (Tameside — Ashton Moss), Central Growth Cluster (Manchester/Salford/Trafford — Sister, Crescent Salford, Oxford Road Corridor), MIX Manchester (Airport City), and Western Gateway (Trafford/Salford — Port Salford, HyNet hydrogen, creative/digital) (p.10, Table 2).
- The LSIP evidence base: 918 Quarterly Economic Survey (QES) responses (Q1–Q4 2025), 111 in-depth interviews, and 165 roundtable participants across GM's ten boroughs, plus a dedicated Jobcentre Plus work-coach roundtable and a trade union interview (p.7, p.78).
- GM's growth sectors are framed against the UK's IS8+2 Modern Industrial Strategy sectors and the Greater Manchester Baccalaureate (MBacc)'s seven "gateway" sectors (p.8).

## Priorities

GM's plan is structured in two tiers: **six "Overarching Priorities"** (cross-sectoral, non-sector-specific — mapped to `cross_cutting.csv`) and **eight "Sector Specific Priorities"** (mapped 1:1 to `priorities.csv`, in the plan's own order): Construction, Logistics, Health and Social Care, Engineering and Manufacturing, Digital and Technology, Creative and Media, Hospitality, and Financial, Business and Professional Services. No re-mapping from themes to sectors was needed — GM's own sector list already sits inside the 5–8 range the schema asks for, and using it directly keeps the citations traceable to the plan's own priority codes (C1–C6, L1–L3, HSC1–HSC3, EM1–EM3, DT1–DT6, CM1–CM4, H1–H2, FBPS1–FBPS3).

### Construction (p.15–17, changes p.29–30)

- **Key stats:** 2025 GM Construction Pipeline Analysis estimates: 9,600 electricians needed in 2026 (p.16), 7,500 bricklayers needed in 2026 (p.16), 2,000 roofers needed in 2026 (p.17). New Electrotechnical Assessment Specification (EAS) requirements take effect 1 October 2026, requiring electricians to hold correct Level 3 qualifications (p.15).
- **Skills gaps (verbatim):**
  - "There is a shortage of mechanical and electrical engineers, both at degree level (Level 6) and among those with higher technical qualifications (Levels 4 and 5)." (C1, p.15)
  - "Qualified electricians are in high demand and there is a labour shortage in this trade." (C2, p.15)
  - "The industry is facing a shortage of bricklayers." — one interviewee: "bricklayers are like gold dust" (C3, p.16)
  - "The sector is experiencing a significant shortage of qualified quantity surveyors." — identified as hardest-to-fill role tied with electricians in the QES job title analysis (C4, p.16)
  - "Roofers are currently in short supply and there is a labour shortage in this trade." — "In terms of the volume of applications, there aren't many, and the quality is also an issue." (C5, p.17)
  - "There is an increasing demand in BIM-related skills and roles and this is an area with a skills shortage." (C6, p.17)
- **Occupations/roles named:** mechanical engineer, electrical engineer, mechanical/electrical engineering technician, electrician, bricklayer, quantity surveyor, roofer, BIM manager/lead/modeller, architect, architectural technologist/technician (p.15–17, Annex A p.34–40).
- **Clusters/initiatives named:** GM construction workforce plan (nearing completion at time of writing) and the devolved Construction Skills Package (p.9); Northern Powerhouse Rail, raising electrician demand (p.16); North-West Construction Technical Excellence College (CTEC, Levels 2–5) and the Greater Manchester Electrotechnical Training and Careers Alliance (ETCA, Level 3 electrician quals) (p.30); PlanBee shared apprenticeship scheme (p.30, and Annex B p.65-66).

### Logistics (p.17–18, changes p.31)

- **Key stats:** land transport makes up "almost a third of GM's logistics workforce" (BRES 2023) (p.17).
- **Skills gaps (verbatim):**
  - "There is a shortage of HGV Drivers, especially those of Class 1 with 3-5 years of experience." — "We all know about the driver crisis and the government put so much stuff in place a few years ago, didn't they, that sadly isn't there anymore because I think they think it's finished." (L1, p.17)
  - "There is a shortage of business development skills within the logistics sector." — one interviewee called the market "too niche" (L2, p.18)
  - "There is a shortage of customer service skills within the logistics sector." — "the customer service role is what is the highest in demand at the moment." (L3, p.18)
- **Occupations named:** HGV/Class 1 drivers, business development managers, customer service advisors/contact centre roles (p.17–18).

### Health and Social Care (p.18–19, changes p.31)

- **Skills gaps (verbatim):**
  - "There is a severe shortage of healthcare assistants." — "The worst challenge was our location is very hard. You cannot find local people who are willing to do care work." (Trafford employer) (HSC1, p.18)
  - "There are not enough nurses to meet current demand." — "We know that there's not enough nurses out there for us to kind of recruit. There's a lot of competition." (HSC2, p.19)
  - "There is a shortage of senior and managerial skills due to a lack of uptake of qualifications in Levels 3 and 4 for senior care workers, and Level 5 diplomas for care managers." — "they would think, when am I applying meds or when I'm washing somebody's body, why am I stressing myself for that [qualification]?" (HSC3, p.19)
- **Occupations named:** healthcare assistants (HCAs), nurses (esp. senior nursing posts), senior care workers, home/care managers (p.18–19). Note: HSC1 explicitly excludes porters/cleaners/facility roles.
- **Barrier noted:** driving licence cost/backlog is a specific barrier to domiciliary care roles (p.18).

### Engineering and Manufacturing (p.19–21, changes p.32)

- **Key stats:** "47,000 vacancies created by the EU exit" (Skills England, 2025) remain largely unfilled (p.20).
- **Skills gaps (verbatim):**
  - "There is a shortage of advanced degree-level engineering skills (Level 6)." — "It's outside of skills, but we just haven't got enough people going into these professions [electrical, mechanical and aerospace engineering]." (EM1, p.19)
  - "There is a labour shortage in core manufacturing trades." Covers production operatives, electronics/electrical technicians (incl. PCB repair — a Wigan employer: "we're going to start trying to find somebody, but I think we'll really struggle to find that specific skill"), mechanical/maintenance fitters, welders/metal fabricators, and multiskilled "electromechanical technicians" (EM2, p.20)
  - "There is a shortage of trade skills needed to support advanced manufacturing" — robotics technicians, mechatronics technicians, CNC machinists; raised in "a roundtable with advanced manufacturing and graphene businesses" (EM3, p.20–21)
- **Occupations named:** mechanical/electrical/aerospace/R&D engineers, production operatives, electronics/electrical technicians, mechanical fitters, welders/fabricators, electromechanical technicians, robotics/mechatronics technicians, CNC machinists (p.19–21).
- **Clusters named:** graphene businesses, Atom Valley Mayoral Development Zone (AVMDZ) (p.21).

### Digital and Technology (p.21–23, changes p.33)

- **Skills gaps (verbatim):**
  - "There is a shortage of cybersecurity professionals." — "As soon as we put them through training for cybersecurity, they go from being a £40k employee to a £70k employee." (DT1, p.21)
  - "There is a shortage of data skills." — "data product owner and data product managers are absolutely flying at the moment." (DT2, p.21–22)
  - "There is a shortage of skills in cloud computing e.g. AWS." — cloud migration described as "the biggest topic in tech until AI came along" (DT3, p.22)
  - "There is a shortage in AI and ML engineering skills." — current AI expertise "originates in academia," which "does not always translate easily into commercial settings" (DT4, p.22, emerging)
  - "Software engineering continues to be a key skill in this sector" — 4th highest QES demand in digital/tech (DT5, p.22)
  - "IT Technicians continue to be in demand with signs this will increase in future" — 3rd most in-demand but most difficult to recruit per QES (DT6, p.23, emerging)
- **Occupations named:** cybersecurity analysts, data engineers/analysts/product owners, cloud engineers, AI/ML engineers, back-end/front-end software developers, IT support technicians (1st–3rd line) (p.21–23).
- **Clusters named:** Greater Manchester Digital Security Hub (DiSH — "a hub for large employers to co-ordinate training and career development" in cybersecurity), GM Institute of Technology (IOT, HTQs Levels 4–5) (p.21, p.29).

### Creative and Media (p.23–24, changes p.34)

- **Skills gaps (verbatim):**
  - "There is a shortage of new AI skills in the creative sector." Designers "expected to integrate AI"; "almost all employers interviewed in this sector mentioned that AI would have a large impact" (CM1, p.23)
  - "There are shortages in technical skills for live performance and an inefficient use of existing skills." — "Building a set for a theatre is not too dissimilar to building a set for a TV production." (CM2, p.23–24)
  - "There is a demand for new skills in digital marketing." — "marketing had about three specialisms, but with the onset of digital, you've now got so many specialisms." (CM3, p.24)
  - "There is a shortage in augmented reality and virtual reality skills which may intensify in the future." — North West is "second behind London and the southeast in usage of AR/VR" (CM4, p.24, emerging)
- **Occupations named:** designers, PR/writing roles, video post-production, web design/dev, music/lighting/sound technicians, hair and make-up, carpenters (set-building), marketing managers/executives/assistants, social media managers, social content creators, influencer talent managers (p.23–24).
- **Clusters/employers named:** MediaCity, Factory International, the Sharp Project (GM's "critical assets") (p.24).

### Hospitality (p.24–25, changes p.34)

- **Skills gaps (verbatim):**
  - "There is a labour shortage of chefs across a wide variety of settings" — flagged by both high-street employers in outer GM and central Manchester hotel operators (H1, p.24–25, emerging)
  - "Development and retention of mid-level staff is a challenge" — commis chef and chef de partie roles are hardest to recruit; QES shows chef roles 2nd most in-demand but hardest to fill (H2, p.25, emerging)
- **Occupations named:** chefs (all levels), kitchen assistants, commis chefs, chef de partie, supervisory hotel roles (p.24–25).
- **Quote on culture:** "We don't actually have many people coming in at entry-level roles who want to actually stay in hospitality or have seen it as a career choice." (p.25)

### Financial, Business and Professional Services (p.25–26, changes p.35)

- **Skills gaps (verbatim):**
  - "There is a shortage of qualified solicitors, especially in some legal specialisations." — property, wills and probate, corporate and commercial hit hardest; one Wigan employer described wills and probate roles as "extremely difficult to fill" (FBPS1, p.25)
  - "There is a shortage of B2B business development and sales skills." (FBPS2, p.26, emerging)
  - "There is a shortage of experienced accountancy and finance professionals." — identified as the hardest-to-fill role in financial/professional services per QES (FBPS3, p.26, emerging)
- **Occupations named:** solicitors (SQE-qualified), chartered accountants, finance managers/controllers, sales representatives/managers/consultants, business development managers (p.25–26).
- **Policy note:** "The defunding of Level 7 apprenticeships" (funding restricted to 16–21-year-olds for new starters from 2026) is flagged as worsening the solicitor shortage (p.25).

## Cross-cutting themes (six Overarching Priorities, p.11–15, changes p.27–29)

1. **OP1 — Increase employer engagement with the skills system and training uptake** (current, p.11–12): low SME participation in curriculum co-design/placements/apprenticeships; ESS 2024 shows national improvement in training participation, yet "some providers report poor uptake of training courses, including in areas with reported shortages, such as leadership and management" (p.11).
2. **OP2 — Enhance careers education, information, advice and guidance (CEIAG)** (emerging, p.12): "I think more education to young people on the career options within the industry because they're so vast... a lot of them have no idea what the options are available to them" (construction/property consultancy, p.12); "Information given on careers and pathways earlier would be really useful... that there is an alternative to university that can still result in a professional qualification" (accounting/tax firm, p.12).
3. **OP3 — Strengthen leadership and management capabilities across the workforce** (emerging, p.12–13): "more than half of employers report difficulties filling professional and managerial roles" (p.12); the "accidental managers" problem — "That first line management piece can be a real challenge, getting them to move away from what is a technical role of engineering into people management" (management consulting firm, p.13).
4. **OP4 — Strengthen digital skills provision for all sectors and occupational levels** (current, p.13–14): baseline digital skills (Outlook, Excel, email, Teams) now a "core employability requirement"; advanced/sector-specific digital skills cited include IoT data analysis (manufacturing/logistics), BIM (construction), and AI image/design tools (creative); "a real lack of awareness of AI and what it can do" (p.14).
5. **OP5 — Address shortages in mechanical and electrical engineering at both degree level (Level 6) and HTQ level (Levels 4 and 5)** (current, p.13–14): flagged as overarching because it cuts across construction (C1), engineering and manufacturing (EM1), and beyond; "electrical [engineering] is probably the worst by far at the moment" (p.13–14).
6. **OP6 — Continued tracking of emerging skills requirements** (emerging, p.14–15): "Technology and developments are moving so quickly and they're teaching kids in school about getting ready for jobs that don't exist yet" (construction company, p.14).

**Other cross-cutting material (Annex C, p.79–80):**
- **Jobcentre Plus and trade unions:** a dedicated JCP roundtable drew work coaches from all ten GM boroughs, covering claimant groups including young people with multiple barriers to employment, people with health conditions seeking part-time/flexible roles, ex-offenders, refugees and ESOL learners, and neurodiverse and disabled candidates (p.79). One trade union interview was also held; its principal asks were "better-quality training linked to job opportunities, apprenticeships and greater on-the-job learning" (p.79).
- **Net zero:** North West construction, engineering and manufacturing sectors expected to see "the largest change in workforce relating to net zero" (Clean Energy Jobs Plan analysis); survey questions covered solar PV, insulation, heat pump installation and retrofit (construction), lean manufacturing (engineering/manufacturing), electric vehicles (logistics) and lean operations (retail/wholesale); a specific Bee Net Zero Board workstream covers GM's 2038 net zero target (p.80).
- **Governance:** GM Employment, Work and Skills Executive Board is the primary decision body; GM Labour Market Insight Unit (jointly with GMCA, GM Growth Hub, Invest Manchester) supports ongoing data; GM Colleges, GM Civic Universities Board, Greater Manchester Learning Provider Network and GM Institute of Technology are named as ongoing governance partners (p.80).
- **Equality of opportunity:** "Over half of respondents were female"; interviews and roundtables also drew on local colleges/training providers working with disadvantaged groups, regional trade union representatives, and JobCentre Plus work coaches (p.80).

## Employer survey findings (percentages, with pages)

| Finding | % | Page |
|---|---|---|
| Employers with recruitment difficulties (nearly), general | ~45% | p.7 |
| Employment rate ambition (GMWP target) | 80% | p.7 |
| GM GVA growth vs 2011 | 46% larger | p.8 |
| UK GVA growth over same period | 23% | p.8 |
| GM average annual economic growth | 3.1% | p.8 |
| UK GDP growth, Q1 2026 | 0.6% | p.8 |
| 16-17 NEET rate, North West, 2024/25 (up from 5.3%) | 5.7% | p.8 |
| Average weekly earnings growth, total pay (3 months to Feb 2026) | 3.8% | p.8 |
| ...same, real terms after CPIH | 0.4% | p.8 |
| Employers citing high labour costs as main cost pressure (BCC QES Q1 2026) | 73% | p.9 |
| Recruitment difficulty, 2025 Q1 | 45.6% | p.9 |
| Recruitment difficulty, 2025 Q4 | 39.8% | p.9 |
| Recruitment difficulty, 2026 Q1 | 44.8% | p.9 |
| Employers reporting difficulty filling professional/managerial roles | "more than half" | p.12 |
| Women in the UK electrical workforce | 3% | p.15 |
| LSIP interview participants who were SMEs | 61.3% | p.78 |
| ...large businesses | 38.7% | p.78 |
| Interview participants who were non-GMCC-members | 65.8% | p.78 |
| Roundtable participants who were SMEs | 52.4% | p.78 |
| ...larger organisations | 47.6% | p.78 |
| Survey response rates achieved (all surveys) | exceeding 50% | p.78 |
| Employer survey respondents who were female | "over half" | p.80 |

**Evidence base scale (not %, but material for weighting confidence):** 918 QES responses (p.7, p.78), 111 in-depth interviews (p.7, p.78), 165 roundtable participants (p.7, p.78).

## Skills-language inventory

Extraction page numbers as above. Strength signal summarises how the plan itself badges the item (current/emerging time-horizon category used in the plan, any quantified stat, or "QES hardest-to-fill"/"QES top-demand" designation).

| Phrase | Priority / cross-cutting | Page | Strength signal |
|---|---|---|---|
| Mechanical and electrical engineers (Level 6 & HTQ) | construction (C1) / OP5 | 15 | current; also overarching priority |
| Qualified electricians | construction (C2) | 15-16 | current; 9,600 needed 2026; EAS deadline Oct 2026 |
| Bricklayers | construction (C3) | 16 | current; 7,500 needed 2026; "gold dust" quote |
| Quantity surveyors | construction (C4) | 16 | current; QES hardest-to-fill (tied) |
| Roofers | construction (C5) | 17 | current; 2,000 needed 2026 |
| BIM-related skills and roles | construction (C6) | 17 | emerging |
| HGV drivers (Class 1, 3-5 yrs experience) | logistics (L1) | 17 | current; QES 2nd most in-demand |
| Business development skills (logistics) | logistics (L2) | 18 | emerging; "too niche" |
| Customer service skills (logistics) | logistics (L3) | 18 | emerging; "highest in demand" quote |
| Healthcare assistants | health-social-care (HSC1) | 18 | current; "severe shortage" |
| Nurses (esp. senior nursing) | health-social-care (HSC2) | 19 | current |
| Senior/managerial care qualifications (L3-5) | health-social-care (HSC3) | 19 | current; low uptake despite free courses |
| Advanced degree-level engineering (Level 6) | engineering-manufacturing (EM1) | 19-20 | current |
| Core manufacturing trades (welders, fitters, electronics techs) | engineering-manufacturing (EM2) | 20 | current; welder = QES most cited hard-to-recruit |
| Advanced manufacturing trade skills (robotics, mechatronics, CNC) | engineering-manufacturing (EM3) | 20-21 | emerging |
| 47,000 unfilled engineering vacancies (EU exit) | engineering-manufacturing | 20 | current; Skills England 2025 stat |
| Cybersecurity professionals | digital-technology (DT1) | 21 | current |
| Data skills (engineers, analysts, product owners) | digital-technology (DT2) | 21-22 | current |
| Cloud computing skills (e.g. AWS) | digital-technology (DT3) | 22 | current |
| AI and ML engineering skills | digital-technology (DT4) | 22 | emerging |
| Software engineering | digital-technology (DT5) | 22 | current; QES 4th highest demand |
| IT technicians | digital-technology (DT6) | 23 | emerging; QES 3rd most in-demand, hardest to recruit |
| AI skills in the creative sector | creative-media (CM1) | 23 | current |
| Technical live-performance skills (sound/lighting/hair/make-up) | creative-media (CM2) | 23-24 | current |
| Digital marketing skills | creative-media (CM3) | 24 | emerging |
| Augmented/virtual reality skills | creative-media (CM4) | 24 | emerging; GM lags London/SE |
| Chefs (all settings) | hospitality (H1) | 24-25 | emerging; QES 2nd most in-demand, hardest to fill |
| Mid-level hospitality retention (chef de partie, commis chef) | hospitality (H2) | 25 | emerging |
| Qualified solicitors (SQE route) | financial-professional-services (FBPS1) | 25 | current |
| B2B business development and sales skills | financial-professional-services (FBPS2) | 26 | emerging |
| Accountancy and finance professionals | financial-professional-services (FBPS3) | 26 | emerging; QES hardest-to-fill in sector |
| Employer engagement in curriculum co-design/placements | OP1 (cross-cutting) | 11 | current |
| Uptake of existing training provision | OP1 (cross-cutting) | 11-12 | current |
| Careers education, information, advice and guidance (CEIAG) | OP2 (cross-cutting) | 12 | emerging |
| Visibility of vocational/apprenticeship routes | OP2 (cross-cutting) | 12 | emerging |
| Leadership and management capabilities | OP3 (cross-cutting) | 12-13 | emerging; "more than half" struggle to fill mgmt roles |
| "Accidental managers" | OP3 (cross-cutting) | 13 | emerging |
| Baseline digital skills (Outlook, Excel, Teams, email) | OP4 (cross-cutting) | 13 | current |
| Data analysis / data literacy (cross-sector) | OP4 (cross-cutting) | 13 | current |
| IoT data skills (manufacturing/logistics) | OP4 (cross-cutting) | 13 | current |
| AI adoption / awareness | OP4 (cross-cutting) | 14 | current; "real lack of awareness" quote |
| Continued employer intelligence gathering / LMI tracking | OP6 (cross-cutting) | 14-15 | emerging |
| Net zero / retrofit skills (solar PV, insulation, heat pumps) | cross-cutting (green) | 80 | flagged in construction/EM survey design |
| Lean manufacturing skills | cross-cutting (green) | 80 | flagged in EM survey design |
| Electric vehicle skills (logistics) | cross-cutting (green) | 80 | flagged in logistics survey design |
| Women in engineering/electrical trades (under-representation) | cross-cutting (equality) | 15, 80 | current; 3% of UK electrical workforce is female |
| NEET reduction / Youth Guarantee | cross-cutting | 8 | current; NW 16-17 NEET up to 5.7% |
| 45-day work placement guarantee (GMS) | OP1 (cross-cutting) | 27 | current (agreed change) |
| Skills and Growth Levy awareness | OP1 (cross-cutting) | 27 | current (agreed change) |
| GM Skills Map (single training directory) | OP1 (cross-cutting) | 27 | current (agreed change) |
| MBacc gateway progression maps | OP2 (cross-cutting) | 28 | current (agreed change) |
| Level 7 apprenticeship defunding (solicitors) | financial-professional-services (FBPS1) | 25 | current; policy risk flagged |
| Shared apprenticeship schemes (e.g. PlanBee) | construction (C2, C3) | 30 | current (agreed change) |
| Graphene / advanced manufacturing and materials cluster | engineering-manufacturing (EM3) | 20-21 | emerging; roundtable-sourced |
| DiSH (Digital Security Hub) cyber ecosystem | digital-technology (DT1) | 21 | current |
| GM Institute of Technology HTQs (Levels 4-5) | digital-technology (DT4) | 33 | current (agreed change) |
| Centre for Digital Innovation (CDI) | creative-media (CM4) | 34 | current (agreed change) |
| Bee Net Zero Board skills workstream | cross-cutting (green) | 80 | current |
| Recruitment difficulty volatility (39.8% to 44.8% to 45.6% across quarters) | cross-cutting | 9 | QES-sourced trend |
| High labour costs as top cost pressure | cross-cutting | 9 | 73% of employers, BCC QES Q1 2026 |

(60 rows.)

## Contacts sources

- ERB (Greater Manchester Chamber of Commerce): `https://www.gmchamber.co.uk/gmlsip`. WebFetch returns HTTP 403 on this URL (and on every other gmchamber.co.uk path tried), but `curl.exe` with a browser User-Agent returns HTTP 200 (confirmed again on 2026-09-27, phase B). Verified by curl, not WebFetch, for that reason; the GOV.UK designated-ERB notice (which does load via WebFetch) independently confirms GMCC as GM's ERB.
- GMCA skills and work: `greatermanchester-ca.gov.uk/what-we-do/education-work-and-skills/priorities-and-plans/local-skills-improvement-plan/`, confirmed via WebFetch.
- GC Business Growth Hub: `businessgrowthhub.com`, confirmed via WebFetch (about-us page describes it as "Greater Manchester's business support organisation").
- GMACS (Greater Manchester Apprenticeship & Careers Service), named explicitly in the LSIP text (Annex B, e.g. p.55, p.59) as the careers/LMI website GMCC and GMCA commit to improving: `gmacs.co.uk`, confirmed via WebFetch.
- Universities: University of Manchester (`manchester.ac.uk`) and Manchester Metropolitan University (`mmu.ac.uk`), both confirmed via WebFetch; both are named in the LSIP's DiSH consortium (Manchester) and general GM HE landscape.
- FE college: The Manchester College / LTE Group (`tmc.ac.uk`), confirmed via WebFetch; GM's largest FE college, part of GM Colleges (named in the LSIP's governance section, p.80).
- Sector body: Greater Manchester Digital Security Hub (DiSH), named directly in the LSIP text as the cybersecurity co-ordination hub (p.21); linked via its GMCA description page, confirmed via WebFetch (Chamber/Barclays-hosted DiSH pages were not used as the primary link to keep to a `.gov.uk` domain).

## VERIFY flags

- `VERIFY:` exact publication month of the 2026 GM LSIP is not stated in the document itself (only "2026 to 2029" and data through Q1 2026); `region.csv` `lsip_published` is set to "2026" pending confirmation.
- `VERIFY:` the PDF's own host is an S3 path containing "uat" (`gmc-uat.s3...`), which is unusual for a production document link; treated as the correct live document because it is the exact file linked from the live GMCC LSIP page as of 2026-09-27.

## Phase B scoring (research step R2, methodology v1.0)

Scored against `research/methodology.md` §4.2 (D, 0-5) and §4.3 (W, 0-3), using the 23-skill taxonomy in `research/data/skills.csv`. All page citations are the PDF page index (`=== PAGE n ===`), which is 4 ahead of the document's own printed folio numbers (§2 of the methodology; confirmed against this region's own convention note at the top of this file).

### D: skill demand for Greater Manchester

Five values were given directly by the coordinator as fixed anchors and are marked *(given)*: `leadership`=5, `data-analysis`=4, `customer-service`=3, `numeracy`=1, `languages`=0. The other 18 were scored independently against §4.2.

**Key judgement call.** §9(1) of the methodology notes that "only GM gives one" skill-specific *survey statistic* — the leadership one ("more than half of employers report difficulties filling professional and managerial roles", p.12). GM's document also contains many QES "job title analysis" rankings attached to specific gaps (e.g. "engineers rank second in demand", "chef roles are the second most in-demand"), but these are rankings, not percentages/clean statistics of the kind the methodology treats as the qualifying "employer survey evidence" for a 5. I therefore did **not** award a 5 to any skill on the strength of a QES ranking alone — only `leadership` reaches 5. Skills that are the literal named subject of one of the six Overarching Priorities (`digital-ai`=OP4, `engineering`=OP5) score 4 as "cross-cutting, no quantified survey attached", per the rubric's own 4-tier wording. Skills named as an explicit (non-implicit) need in two or more distinct priority sectors also score 4, following the same pattern as the given `data-analysis`=4 anchor (DT2's own headline, "shortage of data skills", plus a second, explicit mention of manufacturing needing data skills embedded in OP4's text).

| Skill | D | One-line justification |
|---|---|---|
| `leadership` | **5** *(given)* | OP3 (cross-cutting) + the plan's only skill-specific survey percentage: "more than half of employers report difficulties filling professional and managerial roles" (p.12). |
| `data-analysis` | **4** *(given)* | DT2's own headline gap (p.21) plus an explicit second-sector mention, manufacturing data monitoring (p.13) — 2+ sectors. |
| `digital-ai` | **4** | Literally OP4's own subject: "Strengthen digital skills provision for all sectors and occupational levels" (p.13) — cross-cutting, no % survey attached. |
| `engineering` | **4** | Literally OP5's own subject: "Address shortages in mechanical and electrical engineering..." (p.14) — cross-cutting, no % survey attached. |
| `programming` | **4** | Named in digital-technology (DT5, p.22) and, explicitly, in creative-media ("web design and development roles already use AI tools frequently", p.23) — 2 sectors. |
| `practical-making` | **4** | Named across construction (C2/C3/C5 trades), engineering-manufacturing (EM2 core trades) and hospitality (H1 chefs) — 3 sectors. |
| `sustainability` | **4** | Construction's EAS quals "include low carbon skills essential to the net zero strategy" (p.15) plus Annex C's explicit construction/manufacturing/logistics net-zero skill areas (p.80) — 2+ sectors. Judgement call: the Annex C mention is framed as survey design, not a stated gap; kept at 4 rather than 5 because it carries no % figure. |
| `commercial` | **4** | Named as the headline gap in logistics (L2), creative-media (CM3, digital marketing) and finance (FBPS2, B2B sales) — 3 sectors. |
| `speaking` | **4** | Explicit in logistics ("confidence and communication skills are key", p.18) and digital-technology ("interpret and communicate data...to complement technical skills", p.21-22) — 2 sectors. |
| `cyber-security` | **3** | DT1/DT3/DT6 cluster (cybersecurity, cloud, IT technicians) is entirely within one priority sector, digital-technology (p.21-23). |
| `care-empathy` | **3** | HSC1's own headline: "severe shortage of healthcare assistants" (p.18) — one priority sector, health-social-care. |
| `customer-service` | **3** *(given)* | L3's own headline: "shortage of customer service skills within the logistics sector" (p.18) — one priority sector. |
| `content-production` | **3** | CM1-CM4 cluster (AI content, live-performance production, AR/VR) is entirely within one priority sector, creative-media (p.23-24). |
| `law-ethics` | **3** | "Several interviewees specifically singled out AI ethics and responsible usage" (CM1, p.23) — named, one priority sector. |
| `writing` | **3** | "The ability to compose clear and professional emails" is named as a baseline requirement within OP4 (p.13); judgement call — not itself OP4's core subject (digital-ai is), so scored as a strong single mention rather than automatically inheriting cross-cutting status. |
| `self-management` | **3** | "Technicians should be adaptable, proficient in different areas" (EM2, p.20), reinforced by "a lack of work readiness amongst candidates" within OP5's text (p.14) — treated as one sector (engineering/manufacturing), not two, since both mentions are engineering-flavoured. |
| `critical-thinking` | **3** | "Not be adept in operational leadership skills and strategic thinking" (p.13) — one explicit mention, within OP3. |
| `problem-solving` | **3** | Construction-sector engineers who "could perform design, system planning tasks or solve advanced technical problems" (p.14) — one explicit mention. |
| `creativity` | **3** | "Skills in social media, digital analytics and motion and interactive design" (CM3, p.24) plus "designers expected to integrate AI and digital techniques" (CM1, p.23) — one priority sector, creative-media. |
| `scientific-method` | **2** | Only a context/strategy mention: the Central Growth Cluster's "science and technology cluster" and health-innovation framing (p.10, Growth Locations table) — life sciences is not one of GM's 8 named priorities. |
| `numeracy` | **1** *(given)* | Not stated as a gap; implied only by the named shortage of quantity surveyors (p.16). |
| `teamwork` | **0** | No employer-named teamwork/collaboration gap anywhere in the plan; "Teams"/"team managers" refer to software and management roles, not collaboration (checked by full-text search). |
| `languages` | **0** *(given)* | No mention of foreign languages; ESOL appears only as a Jobcentre Plus claimant group (p.79). |

### Top 5 / bottom 5

- **Top 5:** `leadership` (5); `data-analysis`, `digital-ai`, `engineering`, `programming`, `practical-making`, `sustainability`, `commercial`, `speaking` (all 4, nine-way tie for joint second) — leadership stands alone at the top because it is the plan's only skill tied to a clean percentage-style employer-survey finding.
- **Bottom 5:** `languages` (0, no mention at all); `teamwork` (0, no genuine mention — confirmed by full-text search, only false positives from "Microsoft Teams" and "team managers"); `numeracy` (1, implicit only, per the given anchor); `scientific-method` (2, context/strategy mention only, since life sciences isn't a GM priority sector); all ten skills at 3 form the next tier up.

### W: priority weights

43 weight rows across the 8 priorities (target was 4-10 per priority): construction 9, digital-technology 6, logistics 5, health-social-care 5, engineering-manufacturing 5, creative-media 5, hospitality 4, financial-professional-services 4. The GM Logistics example given in methodology §4.3 (`customer-service`=3, `commercial`=3, `digital-ai`=2, `leadership`=2) was used verbatim, with `speaking`=2 added on top (the L3 "confidence and communication skills" quote, distinct from the customer-service headline itself).

### Judgement calls flagged for review

1. **QES rankings vs "employer survey evidence".** Treated QES job-title rankings ("2nd most in-demand", "hardest to fill") as *not* meeting the bar for a clean D=5 survey statistic, reserving that for genuine percentage/"more than half"-style findings, per §9(1)'s observation that GM has only one such statistic (leadership). If the user disagrees and wants QES rankings to count as full survey evidence, `cyber-security`, `care-empathy`, `practical-making` and `content-production` would each be candidates to move from 3/4 to 5.
2. **Cross-cutting inheritance.** A skill was only treated as "cross-cutting" (eligible for the D=4 pathway without needing 2 sectors) when it is literally the OP's own named subject (`leadership`=OP3, `digital-ai`=OP4, `engineering`=OP5). Supporting phrases that happen to sit inside an Overarching Priority's prose (e.g. "strategic thinking" inside OP3, "work readiness" inside OP5) were *not* given automatic cross-cutting status — they were scored as ordinary single-sector mentions instead. This is a stricter reading than it could be; a looser reading would raise `critical-thinking` and `self-management` to 4.
3. **`sustainability`=4 rests partly on Annex C's survey-design paragraph** (p.80), which names construction/manufacturing/logistics net-zero skill needs but frames them as "questions we asked", not as employer-stated gaps. Kept at 4 (not 5, since no % figure) but flagged as the softest 4 in the set.
4. **BIM was folded into `engineering` and `digital-ai`,** not `creativity`, per the methodology's instruction that "sector technologies... are folded into engineering, content production or cyber as appropriate" (§3.1).
5. **HGV driving (L1) was not mapped to any skill.** Driving is explicitly listed as an excluded "occupational licence" in the methodology (§3.1), so this gap has no D or W entry and its role/gap rows carry `self-management`/`practical-making` only for the surrounding job context, not the licence itself.
