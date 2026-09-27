import type { SubjectGroup } from "@/data/subjects";

/**
 * What two subject groups bring to each other, with project seeds. Seeds are
 * templates: `{region}` and `{priority}` are filled in by `fillSeed()`.
 * Covers all 36 pairs of the 8 groups, including a group with itself.
 */
export type Synergy = {
  groups: [SubjectGroup, SubjectGroup];
  blurb: string;
  projectSeeds: [string, string];
};

export const SYNERGIES: readonly Synergy[] = [
  {
    groups: ["Maths & Computing", "Maths & Computing"],
    blurb:
      "Two subjects from this group sharpen the same core: rigorous logic and modelling. Pairing pure maths with programming or statistics turns an abstract proof into something you can actually run and test.",
    projectSeeds: [
      "Build a small model or app that predicts something useful for a {priority} employer in {region}, such as demand or journey times, and test it against real data.",
      "Write and test an algorithm that solves a genuine local problem in {region}, then explain, with evidence, where it breaks down.",
    ],
  },
  {
    groups: ["Maths & Computing", "Sciences"],
    blurb:
      "Maths and computing give sciences the tools to model and test at scale; sciences give maths and computing a real system, with noisy data and genuine uncertainty, to apply them to.",
    projectSeeds: [
      "Collect environmental or health data in {region} and build a simple model that predicts a trend for a {priority} organisation.",
      "Write code that analyses a public dataset relevant to {region}, such as air quality or river flow, and present what it actually shows.",
    ],
  },
  {
    groups: ["Maths & Computing", "Technical & Applied"],
    blurb:
      "Computing and maths supply the modelling and control logic; engineering, design and care subjects supply a physical or human system worth modelling, and a brief that has to actually work.",
    projectSeeds: [
      "Design and code a simple control system or spreadsheet model for a {priority} process in {region}, such as workshop scheduling or material use.",
      "Survey a local {priority} employer in {region} about a repetitive task, then prototype a simple digital tool to fix it.",
    ],
  },
  {
    groups: ["Maths & Computing", "Business & Economics"],
    blurb:
      "Maths and computing turn business and economic questions into testable numbers; business and economics give those numbers a real decision to inform, like pricing, risk or policy.",
    projectSeeds: [
      "Build a spreadsheet model that tests a pricing or growth strategy for a small {priority} business in {region}, using data you collect yourself.",
      "Analyse public economic data for {region} and code a simple tool that visualises a trend a {priority} employer would care about.",
    ],
  },
  {
    groups: ["Maths & Computing", "Humanities & Social Sciences"],
    blurb:
      "Humanities and social sciences ask what a pattern in society means and why it matters; maths and computing supply the data skills to test whether the pattern is really there.",
    projectSeeds: [
      "Survey peers or residents in {region} on a social question and use spreadsheet or coding skills to test whether the results are statistically meaningful.",
      "Build a simple interactive map or dataset that shows how a {priority} issue affects different parts of {region}.",
    ],
  },
  {
    groups: ["Maths & Computing", "English & Languages"],
    blurb:
      "Computing and maths give a precise, testable method; languages and English give the ability to explain that method's results clearly to people who were never going to read the code.",
    projectSeeds: [
      "Build a bilingual explainer tool or webpage that makes a {priority} dataset from {region} understandable to non-specialists.",
      "Write and code a short interactive quiz that teaches a technical idea from a {priority} sector to Year 9 students in {region}.",
    ],
  },
  {
    groups: ["Maths & Computing", "Creative & Performing"],
    blurb:
      "Computing and maths supply structure, logic and data; creative subjects supply the visual or narrative sense that turns a working program into something people actually want to look at.",
    projectSeeds: [
      "Design and code a small game or interactive artwork that teaches younger students in {region} something about a {priority} career.",
      "Use data about {region} to design a data visualisation or generative artwork that a {priority} employer could display.",
    ],
  },
  {
    groups: ["Maths & Computing", "Sport & Wellbeing"],
    blurb:
      "Sport and wellbeing subjects generate real performance and health data; maths and computing give you the tools to model it properly instead of relying on guesswork.",
    projectSeeds: [
      "Build a spreadsheet or simple app that tracks and analyses training or nutrition data for a school team in {region}.",
      "Model how a {priority} factor, such as air quality or access to green space, might affect activity levels across {region}.",
    ],
  },
  {
    groups: ["Sciences", "Sciences"],
    blurb:
      "Two sciences together strengthen the same experimental core, evidence, controls and uncertainty, while each brings its own system, living, chemical, physical or psychological, to test it on.",
    projectSeeds: [
      "Design and run a fair-test investigation into a real {priority} question in {region}, such as water quality or wellbeing, with a proper control group.",
      "Measure a local environmental or health factor in {region} and write up what the evidence does and doesn't support.",
    ],
  },
  {
    groups: ["Sciences", "Technical & Applied"],
    blurb:
      "Sciences supply the evidence and theory; engineering, design and care subjects supply a real product, structure or service that the theory has to actually work in.",
    projectSeeds: [
      "Test a material, design or care practice used by a {priority} employer in {region} and report what the evidence says about whether it works.",
      "Investigate an environmental or health factor affecting a {priority} site in {region} and suggest one evidence-based improvement.",
    ],
  },
  {
    groups: ["Sciences", "Business & Economics"],
    blurb:
      "Sciences bring evidence and measurement; business and economics bring the question of whether an idea is worth paying for. Together they test both whether something works and whether it pays.",
    projectSeeds: [
      "Investigate the science behind a {priority} product or process in {region}, then model whether a small-scale version would be commercially viable.",
      "Survey local attitudes or behaviour in {region} and use the data to make the case for a {priority} business or public health idea.",
    ],
  },
  {
    groups: ["Sciences", "Humanities & Social Sciences"],
    blurb:
      "Social sciences and humanities ask why people think and behave as they do; sciences add the discipline of testing that explanation against controlled, honest evidence.",
    projectSeeds: [
      "Design a survey that tests a social or psychological claim about {region}, such as attitudes to a {priority} issue, and analyse it rigorously.",
      "Investigate how a scientific issue, such as climate change or public health, is understood across {region}, and what evidence people actually rely on.",
    ],
  },
  {
    groups: ["Sciences", "English & Languages"],
    blurb:
      "Sciences supply rigorous evidence; English and languages supply the skill to explain that evidence to an audience that has no reason to already care about it.",
    projectSeeds: [
      "Write a clear explainer article or translated leaflet on a {priority} science issue affecting {region}, aimed at people with no scientific background.",
      "Interview a local scientist or technician working in a {priority} sector in {region} and write up their work for a general reader.",
    ],
  },
  {
    groups: ["Sciences", "Creative & Performing"],
    blurb:
      "Science asks what is true; creative subjects make people care. Together they turn evidence into something an audience remembers.",
    projectSeeds: [
      "Design a short exhibition or video that explains one local science challenge in {region} to Year 9 students, and test whether it changes what they understand.",
      "Create a visual guide to the lab and technician careers behind {priority} in {region}, based on interviews your school arranges.",
    ],
  },
  {
    groups: ["Sciences", "Sport & Wellbeing"],
    blurb:
      "Sport and wellbeing subjects supply real performance and health questions; sciences supply the experimental rigour to answer them properly, rather than by hunch.",
    projectSeeds: [
      "Design a controlled study into how diet, sleep or training affects performance among students in {region}, with a proper control group.",
      "Investigate an environmental factor, such as air quality or green space, that could affect health outcomes for a {priority} community in {region}.",
    ],
  },
  {
    groups: ["Technical & Applied", "Technical & Applied"],
    blurb:
      "Two applied subjects together strengthen the same practical core, working to a brief, safely and to a standard, while each adds a different system, physical, digital or human, to apply it to.",
    projectSeeds: [
      "Design and prototype a small product or service improvement for a {priority} organisation in {region}, working to a real brief.",
      "Survey how a {priority} site or service in {region} is used, then propose one practical, costed improvement.",
    ],
  },
  {
    groups: ["Technical & Applied", "Business & Economics"],
    blurb:
      "Engineering, design and care subjects supply a product or service worth building; business and economics supply the costing, market and viability thinking that decides whether it's worth building at all.",
    projectSeeds: [
      "Cost and pitch a small product or service improvement for a {priority} employer in {region}, including a basic business case.",
      "Research the market for a {priority} product or service in {region} and design a prototype to match what people actually need.",
    ],
  },
  {
    groups: ["Technical & Applied", "Humanities & Social Sciences"],
    blurb:
      "Applied subjects design and build for real people; humanities and social sciences supply the understanding of those people's needs and inequalities that a good design has to respect.",
    projectSeeds: [
      "Investigate how a {priority} building, service or product in {region} affects different groups, then propose a fairer or more accessible design.",
      "Research the history or social impact of a {priority} industry in {region} and use it to inform a design or construction proposal.",
    ],
  },
  {
    groups: ["Technical & Applied", "English & Languages"],
    blurb:
      "Applied subjects build and design; English and languages give the ability to explain a technical design clearly, including to people who don't share your first language.",
    projectSeeds: [
      "Write and translate a clear guide to a {priority} product, process or service in {region} for people who don't already understand it.",
      "Interview practitioners in a {priority} trade or care role in {region} and write up what the job actually involves.",
    ],
  },
  {
    groups: ["Technical & Applied", "Creative & Performing"],
    blurb:
      "Applied subjects supply the technical constraints, materials, structures, safety, that a design has to satisfy; creative subjects supply the visual skill to make that design something people want.",
    projectSeeds: [
      "Design and build a prototype product, set or space for a {priority} organisation in {region}, then present it visually to a real audience.",
      "Create a short film or set of illustrations that shows the design process behind a {priority} product made or used in {region}.",
    ],
  },
  {
    groups: ["Technical & Applied", "Sport & Wellbeing"],
    blurb:
      "Sport and wellbeing subjects supply real questions about bodies, performance and care; applied subjects supply the design, construction and care-practice skills to actually improve them.",
    projectSeeds: [
      "Design or test a piece of equipment, facility layout or care routine that could improve wellbeing outcomes for a group in {region}.",
      "Investigate how a {priority} facility or service in {region} supports physical activity or care, and propose one practical improvement.",
    ],
  },
  {
    groups: ["Business & Economics", "Business & Economics"],
    blurb:
      "Two subjects from this group strengthen the same evidence-based argument about markets, money and decisions, while each adds a different lens: numbers, incentives, law or policy.",
    projectSeeds: [
      "Research and cost a small business idea aimed at a {priority} gap in {region}, backed by a market survey of consenting peers or family.",
      "Investigate how a change in regulation or the economy has affected a {priority} sector in {region}, using publicly available data.",
    ],
  },
  {
    groups: ["Business & Economics", "Humanities & Social Sciences"],
    blurb:
      "Business and economics supply the numbers and incentives behind a decision; humanities and social sciences supply the history, politics and inequality that numbers alone can miss.",
    projectSeeds: [
      "Investigate how a {priority} policy or industry has affected different communities in {region}, using economic data and social research.",
      "Research the history of a {priority} industry in {region} and use it to explain a current business or economic trend.",
    ],
  },
  {
    groups: ["Business & Economics", "English & Languages"],
    blurb:
      "Business and economics supply the evidence and the numbers; English and languages supply the persuasive, well-structured writing, in one language or several, that turns evidence into a case.",
    projectSeeds: [
      "Write and, if useful, translate a business case or marketing plan for a {priority} idea aimed at {region}'s community.",
      "Interview a local {priority} business owner in {region} and write up their story for a wider, non-specialist audience.",
    ],
  },
  {
    groups: ["Business & Economics", "Creative & Performing"],
    blurb:
      "Business and economics supply the market and the numbers; creative subjects supply the branding, storytelling and design that make an idea land with an actual audience.",
    projectSeeds: [
      "Design a brand identity and marketing plan for a small {priority} business idea aimed at {region}.",
      "Research what a {priority} audience in {region} actually wants, then create a piece of creative work, such as a film or campaign, that responds to it.",
    ],
  },
  {
    groups: ["Business & Economics", "Sport & Wellbeing"],
    blurb:
      "Sport and wellbeing subjects supply a real market: fitness, food and health; business and economics supply the costing and marketing skill to turn that market into a viable idea.",
    projectSeeds: [
      "Research demand for a fitness, nutrition or wellbeing service in {region} and write a costed business case for a {priority} provider.",
      "Investigate the economics of a local sports or leisure facility in {region} and propose one financially realistic improvement.",
    ],
  },
  {
    groups: ["Humanities & Social Sciences", "Humanities & Social Sciences"],
    blurb:
      "Two subjects from this group strengthen the same evidenced argument about people, power and society, while each adds a different source base: sources, statistics, texts or case law.",
    projectSeeds: [
      "Investigate how a historical or political decision still shapes a {priority} issue in {region} today, using primary and secondary sources.",
      "Survey opinion in {region} on a live social or political question and analyse it against the wider evidence.",
    ],
  },
  {
    groups: ["Humanities & Social Sciences", "English & Languages"],
    blurb:
      "Humanities and social sciences supply the evidence and argument; English and languages supply the precise, persuasive writing, and where relevant translation, that gets that argument read.",
    projectSeeds: [
      "Research a social or historical issue affecting {region} and write it up as a long-form article for a real audience, such as a local newspaper.",
      "Interview residents in {region} about a {priority}-related change in their community and write up their testimony accurately and fairly.",
    ],
  },
  {
    groups: ["Humanities & Social Sciences", "Creative & Performing"],
    blurb:
      "Humanities and social sciences supply the evidence about people and power; creative subjects supply the storytelling and design skill to make that evidence felt, not just read.",
    projectSeeds: [
      "Create a piece of creative work, such as a film or exhibition, that communicates a social or historical issue affecting {region}.",
      "Research a {priority} community's history in {region} and turn it into a short documentary, podcast or set of portraits.",
    ],
  },
  {
    groups: ["Humanities & Social Sciences", "Sport & Wellbeing"],
    blurb:
      "Sport and wellbeing subjects supply real questions about bodies and behaviour; humanities and social sciences supply the social context that explains why people do or don't take part.",
    projectSeeds: [
      "Investigate what stops or encourages participation in sport or healthy eating among a group in {region}, and what a {priority} provider could change.",
      "Research the social history of a sport or wellbeing tradition in {region} and connect it to a current participation gap.",
    ],
  },
  {
    groups: ["English & Languages", "English & Languages"],
    blurb:
      "Two subjects from this group strengthen the same close reading and writing, while each adds a different way in: another language, a different form, or a sharper focus on structure over meaning.",
    projectSeeds: [
      "Write and, where possible, translate a set of short profiles of people working in a {priority} sector in {region}.",
      "Analyse how a {priority} issue in {region} is described differently across English and another language's media.",
    ],
  },
  {
    groups: ["English & Languages", "Creative & Performing"],
    blurb:
      "English and languages supply precise, structured storytelling; creative subjects supply the visual, sound or performance skill to give that story a form beyond the page.",
    projectSeeds: [
      "Adapt a piece of local writing or oral history from {region} into a short film, podcast or performance.",
      "Write and perform or film a piece that introduces a {priority} career in {region} to students who've never considered it.",
    ],
  },
  {
    groups: ["English & Languages", "Sport & Wellbeing"],
    blurb:
      "Sport and wellbeing subjects supply a subject people are genuinely motivated by; English and languages supply the writing and interviewing skill to turn that motivation into a piece worth reading.",
    projectSeeds: [
      "Write and publish a series of interviews with people working in {priority} sport or wellbeing roles in {region}.",
      "Research how a sports or wellbeing story from {region} is reported differently across English-language and foreign-language media.",
    ],
  },
  {
    groups: ["Creative & Performing", "Creative & Performing"],
    blurb:
      "Two creative subjects together strengthen the same design process, brief, iterate, refine, while each adds a different medium: image, sound, text or movement, to say it in.",
    projectSeeds: [
      "Create a multimedia piece, combining two art forms, that tells the story of a {priority} scene or community in {region}.",
      "Design and stage a small exhibition or performance in {region} that responds to a theme a local {priority} organisation cares about.",
    ],
  },
  {
    groups: ["Creative & Performing", "Sport & Wellbeing"],
    blurb:
      "Sport and wellbeing subjects supply real physical performance and health stories; creative subjects supply the skill to film, photograph or perform them for an audience.",
    projectSeeds: [
      "Produce a short film or photo series documenting a {priority} sport, fitness or wellbeing initiative in {region}.",
      "Choreograph or design a performance piece that responds to a health or wellbeing issue affecting young people in {region}.",
    ],
  },
  {
    groups: ["Sport & Wellbeing", "Sport & Wellbeing"],
    blurb:
      "Two subjects from this group strengthen the same understanding of the body and behaviour, while each adds a different angle: physiology, psychology, training or nutrition.",
    projectSeeds: [
      "Design and run a small, ethical study into how diet or training affects performance among students in {region}.",
      "Investigate access to sport, exercise or healthy food for a group in {region}, and connect it to a {priority} provider's services.",
    ],
  },
];

export function findSynergy(a: SubjectGroup, b: SubjectGroup): Synergy | undefined {
  return SYNERGIES.find(({ groups: [x, y] }) => (x === a && y === b) || (x === b && y === a));
}

export function fillSeed(template: string, values: { region: string; priority: string }): string {
  return template.replaceAll("{region}", values.region).replaceAll("{priority}", values.priority);
}
