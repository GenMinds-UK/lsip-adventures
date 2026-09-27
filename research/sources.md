# Sources retrieved for R0 (taxonomy and methodology)

Everything below was retrieved on **27 September 2026**.

**Where the files are.** Saved text files live in the session scratch directory `S\pdfs\`, where `S` = `C:\Users\Alexander\AppData\Local\Temp\claude\c--Users-Alexander-Desktop-A---Generative-Minds-lsip-adventures\6f9a8047-a46c-4f2a-a78f-ad9b01f39666\scratchpad`. The DfE files are in `S\pdfs\r0-dfe\`. Later agents can reuse all of them.

**How the text was made.** Each file was extracted with `S\pdftext.py`. Page markers `=== PAGE n ===` are **PDF page indices**, and every `p.N` in `methodology.md` and `skills.csv` uses them.

**Status key:**

- **retrieved**: the full document was downloaded and extracted.
- **retrieved (web)**: read with a web fetch; no local copy.
- **fallback**: a substitute was used for the requested document.
- **failed**: could not be retrieved.
- **located**: the URL was found but the file was not downloaded.

## LSIPs 2026–29 (North West)

| # | Document | Publisher / date | URL | Status | Saved text |
|---|---|---|---|---|---|
| 1 | Cheshire & Warrington Local Skills Improvement Plan 2026-2029 | South & North Cheshire Chamber of Commerce (produced by BizEd Projects CIC); June 2026 | Flipbook: https://heyzine.com/flip-book/CheshireandWarringtonLSIP2026.html. Underlying PDF: https://cdnm.heyzine.com/files/uploaded/v3/5c3373df5a7e7b084fb95834ddf4dc6ea6ddc469-3.pdf | retrieved (the PDF is embedded in the flipbook) | `r0-cw-lsip-2026.txt` (140 pp) |
| 1a | C&W LSIP website | cheshireandwarringtonlsip.co.uk | https://cheshireandwarringtonlsip.co.uk/ | checked. It links only to the 2023 report (https://cheshireandwarringtonlsip.co.uk/wp-content/uploads/2023/11/Cheshire-Warrington-LSIP-Report-Aug-2023.pdf), which was not downloaded, plus the 2026 flipbook | — |
| 2 | Cumbria Local Skills Improvement Plan 2026-2029 (final post-submission) | Cumbria Chamber of Commerce; uploaded July 2026, no printed date | https://cumbriachamber.co.uk/wp-content/uploads/2026/07/Cumbria-LSIP-2026-2029-FINAL-POST-SUBMISSION.pdf | retrieved | `r0-cumbria.txt` (42 pp) |
| 2a | Cumbria LSIP Annex A: Further Evidence (Final Draft) | Cumbria Chamber; July 2026 | https://cumbriachamber.co.uk/wp-content/uploads/2026/07/LSIP-Annex-A-Further-Evidence-Final-Draft.pdf | retrieved | `r0-cumbria-annexA.txt` (51 pp) |
| 2b | Cumbria LSIP Annex A1: Cumbria Employer Skills Survey 2025 (213 responses) | Cumbria Chamber; July 2026 | https://cumbriachamber.co.uk/wp-content/uploads/2026/07/LSIP-Annex-A1-Employer-Skills-Survey.pdf | retrieved. Charts are images: pages 11, 15, 17 and 21 were rendered to `S\pdfs\r0-cumbria-survey-img\r0-p11.png` etc., and bar values read by eye (±2 pp) | `r0-cumbria-annexA1-survey.txt` (44 pp) |
| 2c | Cumbria LSIP Annex B (action table, PDF and XLSX) and Annex D (mapping table) | Cumbria Chamber; July 2026 | https://cumbriachamber.co.uk/wp-content/uploads/2026/07/Annex-B-Final-post-submission.pdf ; https://cumbriachamber.co.uk/wp-content/uploads/2026/07/Annex-B-Final-post-submission.xlsx ; https://cumbriachamber.co.uk/wp-content/uploads/2026/07/LSIP-Annex-D-Mapping-Table-Final-Draft.pdf | located, not downloaded (not needed for R0) | — |
| 3 | Greater Manchester Local Skills Improvement Plan (2026 to 2029) | Greater Manchester Chamber of Commerce with GMCA; 2026, no month printed (latest data cited April 2026) | Landing page: https://www.gmchamber.co.uk/gmlsip (returned HTTP 200 to curl with a browser user agent; no 403). PDF: https://gmc-uat.s3.eu-west-2.amazonaws.com/public/01KXZ6QR0Y5JAK9Z5399SMNRYN.pdf | retrieved | `r0-gm-lsip-2026.txt` (86 pp) |
| 3a | GMCA LSIP page | GMCA | https://www.greatermanchester-ca.gov.uk/what-we-do/education-work-and-skills/priorities-and-plans/local-skills-improvement-plan/ | retrieved. It links only to the GMCC page | — |
| 3b | Older GM documents on the GMCC page: Progress Report June 2025; Progress Report January 2024; LSIP August 2023 | GMCC | https://gmc-uat.s3.eu-west-2.amazonaws.com/public/01KWW15K8M4207A9J7JF2G0WRA.pdf ; …/01KMJ66YFXAR7NRME5BRAW0DRZ.pdf ; …/01KMJ66XXC7WP30YH3V2D2SQFQ.pdf | located, not downloaded | — |
| 4 | Lancashire Local Skills Improvement Plan, July 2026 | North & Western Lancashire Chamber of Commerce with the Lancashire Skills and Employment Hub (LCCA); July 2026 | https://www.lancashirelsip.co.uk/downloads/Lancashire%20Local%20Skills%20Improvement%20Plan%20July%202026.pdf | retrieved | `r0-lancashire.txt` (54 pp) |
| 5 | Liverpool City Region LSIP, July 2026 ("Section 1" V6; contains both Section 01 Local Skills Needs and Section 02 Agreed Changes) | Liverpool Chamber of Commerce, co-owned by LCRCA; July 2026 | https://www.liverpoolchamber.org.uk/wp-content/uploads/2026/07/LSIP-Local-Skills-Section-1_V6.pdf | retrieved | `r0-lcr-s1.txt` (49 pp) |
| 5a | LCR LSIP 2026-29 (the same document under another file name; its text is identical apart from one typo) | Liverpool Chamber; July 2026 | https://www.liverpoolchamber.org.uk/wp-content/uploads/2026/07/LSIP-2026-29.pdf | retrieved | `r0-lcr-LSIP-2026-29.txt` |
| 5b | LCR LSIP Annex A: Information on Skills Needs (occupations and upskilling tables) | Liverpool Chamber; July 2026 | https://www.liverpoolchamber.org.uk/wp-content/uploads/2026/07/LSIP-2026-29-Annex-A.pdf (identical to …/LSIP-Local-Skills-Annex-A_V3.pdf) | retrieved | `r0-lcr-LSIP-2026-29-Annex-A.txt` (19 pp) |
| 5c | LCR LSIP Annex B: Action Plans, including the cross-sector AI, leadership and work-readiness sections | Liverpool Chamber; July 2026 | https://www.liverpoolchamber.org.uk/wp-content/uploads/2026/07/LSIP-2026-29-Annex-B.pdf (identical to …/LSIP-Local-Skills-Annex-B_V3.pdf) | retrieved | `r0-lcr-LSIP-2026-29-Annex-B.txt` (26 pp) |
| 5d | LCR LSIP Annex C: Evidence Base and Methodology | Liverpool Chamber; July 2026 | https://www.liverpoolchamber.org.uk/wp-content/uploads/2026/07/LSIP-2026-29-Annex-C.pdf (identical to …/LSIP-Local-Skills-Annex-C_V2.pdf) | retrieved. No skill-specific survey statistics | `r0-lcr-LSIP-2026-29-Annex-C.txt` (25 pp) |
| 6 | Local Skills Improvement Plans and designated Employer Representative Bodies (notice) | DfE / Skills England, GOV.UK; updated 10 July 2026 | https://www.gov.uk/government/publications/designated-employer-representative-bodies/notice-of-designated-employer-representative-bodies | retrieved | `r0-erb-notice.txt` |

**Page-numbering notes for region agents:**

- **GM:** PDF page = printed page + 4.
- **Cumbria:** PDF page = printed page + 1.
- **LCR and Lancashire (main body):** PDF page = printed page.
- **C&W:** every page's text is repeated on the following PDF page (for example 18 = 19 and 22 = 23; checked by md5). Cite the first page of the pair, which usually equals the printed page in the contents list. Cite the direct PDF URL, not the flipbook.

## National sources

| # | Document | Publisher / date | URL | Status | Saved text |
|---|---|---|---|---|---|
| 7 | Assessment of priority skills to 2030 | Skills England; 12 August 2025 | https://www.gov.uk/government/publications/assessment-of-priority-skills-to-2030/assessment-of-priority-skills-to-2030 . The PDF print of that page, cited for page numbers, is at https://dera.ioe.ac.uk/id/eprint/41459/1/Assessment%20of%20priority%20skills%20to%202030%20-%20GOV.pdf | retrieved | `r0-se-priority-2030.txt` (37 pp, DERA PDF); `r0-se-priority-2030-html.txt` (GOV.UK HTML) |
| 8 | Skills England: annual skills report 2026 (supplementary; newer than the brief) | Skills England; 1 June 2026 | https://assets.publishing.service.gov.uk/media/6a47c33a045e1108aaa5eb48/Skills_England_annual_skills_report_2026.pdf (collection: https://www.gov.uk/government/publications/skills-england-annual-skills-report-and-sectoral-skills-needs-assessments-2026) | retrieved | `r0-se-annual-2026.txt` (56 pp) |
| 8a | Skills needs assessments: introduction | Skills England; 4 August 2026 | https://www.gov.uk/government/publications/skills-england-annual-skills-report-and-sectoral-skills-needs-assessments-2026/skills-needs-assessments-introduction | retrieved (web). The ten sector SNA PDFs are listed on the collection page but were not downloaded | — |
| 9 | Employer Skills Survey 2024: Full UK research report | IFF Research for DfE; November 2025 (updated June 2026) | https://assets.publishing.service.gov.uk/media/69205d2db303fcb3352e5347/Employer_skills_survey_2024_full_UK_research_report.pdf (the same file is also at …/6a1eef8d050971fbebf3bd92/Employer_Skills_Survey_2024_UK_report.pdf) | retrieved | `r0-ess2024-uk.txt` (218 pp) |
| 10 | The UK's Modern Industrial Strategy (CP 1451) | Department for Business and Trade; this copy is dated November 2025 (the strategy was first published June 2025) | https://assets.publishing.service.gov.uk/media/69256e16367485ea116a56de/industrial_strategy_policy_paper.pdf | retrieved. VERIFY if the June 2025 original is required, since page numbers may differ | `r0-industrial-strategy.txt` (160 pp) |
| 11 | Skills Builder Universal Framework (eight essential skills) | Skills Builder Partnership; current web page | https://www.skillsbuilder.org/global/universal-framework | retrieved | `r0-skillsbuilder.txt` |
| 11a | Universal Framework 2.0 FAQs (the renaming of Aiming High to Planning and Staying Positive to Adapting; 2025–35) | Skills Builder Partnership | https://www.skillsbuilder.org/global/uf2-faqs | retrieved (web) | — |

## A level subject content and specifications (for M anchors)

**DfE GCE AS and A level subject content.** These were found via https://www.gov.uk/government/collections/gce-as-and-a-level-subject-content. All are **retrieved** and saved as `S\pdfs\r0-dfe\<slug>.txt`, where `<slug>` is the GOV.UK publication slug.

| Subject content | GOV.UK slug | Asset URL |
|---|---|---|
| Science (biology, chemistry, physics and **psychology**, Appendix 4) | gce-as-and-a-level-for-science | https://assets.publishing.service.gov.uk/media/5a807949e5274a2e8ab50599/Science_AS_and_level_formatted.pdf |
| Mathematics | gce-as-and-a-level-mathematics | https://assets.publishing.service.gov.uk/media/5a7f273a40f0b62305b85670/GCE_AS_and_A_level_subject_content_for_mathematics_with_appendices.pdf |
| Further mathematics | gce-as-and-a-level-further-mathematics | (linked from the GOV.UK page) |
| Statistics | gce-as-and-a-level-statistics | https://assets.publishing.service.gov.uk/media/5a803103e5274a2e8ab4eb7a/Statistics_AS_and_A_level_content_formatted.pdf |
| Computer science | gce-as-and-a-level-for-computer-science | https://assets.publishing.service.gov.uk/media/5a7dbefb40f0b65d88634282/A_level_computer_science_subject_content.pdf |
| Geography | gce-as-and-a-level-geography | https://assets.publishing.service.gov.uk/media/5a7cf7f6e5274a2af0ae2927/GCE_AS_and_A_level_subject_content_for_geography.pdf |
| History | gce-as-and-a-level-for-history | https://assets.publishing.service.gov.uk/media/5a7e5050ed915d74e33f1704/A_level_history_subject_content.pdf |
| Business | gce-as-and-a-level-for-business | https://assets.publishing.service.gov.uk/media/5a7ec510ed915d74e33f24ee/A_level_business_subject_content.pdf |
| Economics | gce-as-and-a-level-for-economics | https://assets.publishing.service.gov.uk/media/5a75c42540f0b6488c78ecb5/A_level_economics_subject_content.pdf |
| Accounting | gce-as-and-a-level-accounting | https://assets.publishing.service.gov.uk/media/5a757b46e5274a1622e22221/Accounting_AS_A_level_subject_content.pdf |
| Law | gce-as-and-a-level-law | https://assets.publishing.service.gov.uk/media/6287a72e8fa8f55624b69c75/GCE_subject_content_law_May_2022.pdf |
| Politics | gce-as-and-a-level-politics | https://assets.publishing.service.gov.uk/media/6287a7bed3bf7f1f40ca5111/GCE_subject_content_politics_May_2022.pdf |
| Sociology | gce-as-and-a-level-for-sociology | https://assets.publishing.service.gov.uk/media/5a7db91240f0b65d8863403a/A_level_sociology_subject_content.pdf |
| Philosophy | gce-as-and-a-level-philosophy | https://assets.publishing.service.gov.uk/media/5a7f4e37ed915d74e6229a70/Philosophy_AS_and_A_level_formatted.pdf |
| Religious studies | gce-as-and-a-level-religious-studies | https://assets.publishing.service.gov.uk/media/5a756b46e5274a1baf95e6dd/Religious_Studies_AS_and_A_level_subject_content.pdf |
| Design and technology | gce-as-and-a-level-design-and-technology | https://assets.publishing.service.gov.uk/media/5a7f437eed915d74e622964d/D_and_T_A_level.pdf |
| English literature | gce-as-and-a-level-for-english-literature | https://assets.publishing.service.gov.uk/media/5a7eb05740f0b6230268ae6b/A_level_English_literature_content.pdf |
| English language | gce-as-and-a-levels-for-english-language | https://assets.publishing.service.gov.uk/media/5a7ea47040f0b6230268a9be/A_level_English_language_subject_content.pdf |
| English language and literature | gce-as-and-a-level-for-english-language-and-literature | https://assets.publishing.service.gov.uk/media/5a75afd7e5274a545822d70b/A_level_English_language_and_literature_content.pdf |
| Modern foreign languages (French, German, Spanish; Chinese annex) | gce-as-and-a-level-modern-foreign-languages | https://assets.publishing.service.gov.uk/media/64aebaa0fe36e0000d6fa848/GCE_AS_and_A_level_subject_content_for_modern_foreign_languages.pdf |
| Languages with smaller cohorts | gce-as-and-a-level-languages-with-smaller-cohorts | https://assets.publishing.service.gov.uk/media/64aec2f2c033c1000d8061c8/GCE_AS_and_A_level_subject_content_for_languages_with_smaller_cohorts.pdf |
| Art and design (all titles) | gce-as-and-a-level-for-art-and-design | https://assets.publishing.service.gov.uk/media/5a7ec531ed915d74e33f24fd/A_level_art_and_design_subject_content.pdf |
| Drama and theatre | gce-as-and-a-level-drama-and-theatre | https://assets.publishing.service.gov.uk/media/5a7f27b8ed915d74e33f4aca/Drama_and_theatre_GCE_revised2017_FORMATTED__004_.pdf |
| Dance | gce-as-and-a-level-dance | https://assets.publishing.service.gov.uk/media/5a7efc2f40f0b62305b84695/GCE_AS_and_A_level_subject_content_for_dance.pdf |
| Music (DOCX only) | gce-as-and-a-level-music | https://assets.publishing.service.gov.uk/media/5a7d701340f0b64a5813f01b/GCE_AS_and_A_level_subject_content_for_music.docx |
| Music technology | gce-as-and-a-level-music-technology | https://assets.publishing.service.gov.uk/media/5a750aeae5274a59fa716f10/Music_Technology_A_level.pdf |
| Film studies | gce-as-and-a-level-film-studies | https://assets.publishing.service.gov.uk/media/5a7f74e0e5274a2e87db5f79/Film_studies_AS_A_level_subject_content.pdf |
| Media studies | gce-as-and-a-level-media-studies | https://assets.publishing.service.gov.uk/media/5a80ec6840f0b62305b8de9a/Media_studies_AS_A_level_subject_content.pdf |
| Physical education | gce-as-and-a-level-physical-education | https://assets.publishing.service.gov.uk/media/5a74ccc1e5274a3f93b48e60/GCE_AS_and_A_level_subject_content_for_PE.pdf |
| Environmental science | gce-as-and-a-level-environmental-science | https://assets.publishing.service.gov.uk/media/5a817b4ae5274a2e87dbddd8/Environmental_Science_A_level.pdf |

- **Failed:** a stand-alone DfE psychology content page (`gce-as-and-a-level-psychology`) returned 404. Psychology is covered by Appendix 4 of the science content above.
- **No DfE A level content exists** for Applied Science, Engineering, Health & Social Care, Construction & the Built Environment, Criminology, Sport & Exercise Science or Food Science & Nutrition. These are Level 3 applied qualifications; see methodology §4.1.

**Exam board "specification at a glance" pages:**

| Spec | URL | Status |
|---|---|---|
| AQA A-level Computer Science 7517 | https://www.aqa.org.uk/subjects/computer-science/a-level/computer-science-7517/specification/specification-at-a-glance | retrieved (web) |
| AQA A-level Geography 7037 | https://www.aqa.org.uk/subjects/geography/a-level/geography-7037/specification/specification-at-a-glance | retrieved (web) |
| AQA A-level Business 7132 | https://www.aqa.org.uk/subjects/business/a-level/business-7132/specification/specification-at-a-glance | retrieved (web) |
| AQA A-level Design and Technology: Product Design 7552 | https://www.aqa.org.uk/subjects/design-and-technology/a-level/design-and-technology-product-design-7552/specification/specification-at-a-glance | retrieved (web) |
| AQA A-level Psychology 7182 | https://www.aqa.org.uk/subjects/psychology/a-level/psychology-7182/specification/specification-at-a-glance | retrieved (web). No stated research-methods weighting |
| AQA A-level French 7652 | https://www.aqa.org.uk/subjects/french/a-level/french-7652/specification/specification-at-a-glance | retrieved (web) |
| AQA A-level English Literature A 7712 | https://www.aqa.org.uk/subjects/english/a-level/english-literature-a-7712/specification/specification-at-a-glance | **failed** (HTTP 404); not used |
