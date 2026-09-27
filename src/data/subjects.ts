type SubjectDefinition = {
  name: string;
  group: string;
  /** Short, pre-written summary of what studying this A level involves. */
  learn: string;
};

/**
 * A curated list of A levels commonly offered across North West colleges and
 * sixth forms. Names are the stable keys used by every research CSV and data
 * file, so rename one only alongside `research/data/`.
 */
export const SUBJECTS = [
  {
    name: "Mathematics",
    group: "Maths & Computing",
    learn:
      "Algebra, calculus, trigonometry, mechanics and statistics — and, more than anything, how to model a messy real-world situation as something you can actually solve.",
  },
  {
    name: "Further Mathematics",
    group: "Maths & Computing",
    learn:
      "A second helping of maths: complex numbers, matrices, differential equations and deeper mechanics or statistics, taken alongside A level Mathematics.",
  },
  {
    name: "Statistics",
    group: "Maths & Computing",
    learn:
      "How to collect, summarise and test data honestly: sampling, probability, distributions, correlation and the difference between a real pattern and a fluke.",
  },
  {
    name: "Computer Science",
    group: "Maths & Computing",
    learn:
      "Programming, algorithms, data structures, how computers actually work underneath, plus databases, networks and the ethics of building software.",
  },

  {
    name: "Biology",
    group: "Sciences",
    learn:
      "Cells, genetics, ecosystems, the human body and disease — plus a lot of practical work and careful experimental design.",
  },
  {
    name: "Chemistry",
    group: "Sciences",
    learn:
      "Atomic structure, bonding, reactions, organic and physical chemistry, and the lab technique to test ideas safely and accurately.",
  },
  {
    name: "Physics",
    group: "Sciences",
    learn:
      "Forces, energy, waves, electricity, fields, particles and quantum ideas — and how to reason from measurement to conclusion.",
  },
  {
    name: "Applied Science",
    group: "Sciences",
    learn:
      "Science aimed at the workplace: laboratory techniques, scientific investigation, health and safety, and how science is used in industry.",
  },
  {
    name: "Environmental Science",
    group: "Sciences",
    learn:
      "Ecosystems, pollution, climate change, energy and sustainability, and how environmental data is gathered and argued over.",
  },
  {
    name: "Psychology",
    group: "Sciences",
    learn:
      "Memory, development, social influence, mental health and research methods — a science subject that leans heavily on statistics and study design.",
  },

  {
    name: "Engineering",
    group: "Technical & Applied",
    learn:
      "Design, materials, mechanical and electrical principles, manufacturing processes and working to a real brief.",
  },
  {
    name: "Design & Technology (Product Design)",
    group: "Technical & Applied",
    learn:
      "Designing and prototyping products: user needs, materials, sustainability, CAD and iterative making.",
  },
  {
    name: "Health & Social Care",
    group: "Technical & Applied",
    learn:
      "How care services work, human development across a lifetime, safeguarding, communication and the values behind good care.",
  },
  {
    name: "Construction & the Built Environment",
    group: "Technical & Applied",
    learn:
      "How buildings are designed, costed and built: structures, materials, surveying, regulations and sustainable construction.",
  },

  {
    name: "Business Studies",
    group: "Business & Economics",
    learn:
      "Marketing, finance, operations, people management and strategy — how an organisation decides what to do and whether it worked.",
  },
  {
    name: "Economics",
    group: "Business & Economics",
    learn:
      "Markets, prices, competition, unemployment, inflation, trade and the arguments about what governments should do.",
  },
  {
    name: "Accounting",
    group: "Business & Economics",
    learn:
      "Recording and interpreting financial information: accounts, budgeting, cash flow and what the numbers say about a business.",
  },
  {
    name: "Law",
    group: "Business & Economics",
    learn:
      "How the legal system works, contract, tort and criminal law, and how to build an argument from evidence and precedent.",
  },

  {
    name: "Geography",
    group: "Humanities & Social Sciences",
    learn:
      "Physical processes like rivers, coasts and climate alongside human geography — cities, migration, development — plus fieldwork and mapping.",
  },
  {
    name: "History",
    group: "Humanities & Social Sciences",
    learn:
      "How to read sources critically, weigh interpretations and write a sustained, evidenced argument about the past.",
  },
  {
    name: "Politics",
    group: "Humanities & Social Sciences",
    learn:
      "Parliament, elections, parties, pressure groups, political ideas and how power is actually exercised.",
  },
  {
    name: "Sociology",
    group: "Humanities & Social Sciences",
    learn:
      "Families, education, crime, inequality and the media, and how sociologists gather and challenge evidence about society.",
  },
  {
    name: "Philosophy",
    group: "Humanities & Social Sciences",
    learn:
      "Arguments about knowledge, ethics, religion and mind — and the discipline of making your own reasoning watertight.",
  },
  {
    name: "Religious Studies",
    group: "Humanities & Social Sciences",
    learn:
      "Religious beliefs and practice, ethical theory and philosophy of religion, taught through texts and debate.",
  },
  {
    name: "Criminology",
    group: "Humanities & Social Sciences",
    learn:
      "Types of crime, why crime is reported or hidden, how the justice system responds, and how campaigns change the law.",
  },

  {
    name: "English Language",
    group: "English & Languages",
    learn:
      "How language works and changes: grammar, accent and dialect, how children acquire speech, and how power shows up in words.",
  },
  {
    name: "English Literature",
    group: "English & Languages",
    learn:
      "Close reading of poetry, prose and drama across periods, and writing comparative, evidenced critical essays.",
  },
  {
    name: "English Language & Literature",
    group: "English & Languages",
    learn:
      "A combined course: literary analysis alongside linguistic study, plus your own creative and analytical writing.",
  },
  {
    name: "French",
    group: "English & Languages",
    learn:
      "Speaking, listening, reading and writing to a high level, plus film, literature and the society of French-speaking countries.",
  },
  {
    name: "Spanish",
    group: "English & Languages",
    learn:
      "Fluency in Spanish across all four skills, with study of Hispanic culture, history and current affairs.",
  },
  {
    name: "German",
    group: "English & Languages",
    learn:
      "German language to an advanced level, alongside German-speaking culture, politics and history.",
  },
  {
    name: "Chinese (Mandarin)",
    group: "English & Languages",
    learn:
      "Mandarin speaking, listening, characters and writing, plus contemporary Chinese society and culture.",
  },

  {
    name: "Art & Design (Fine Art)",
    group: "Creative & Performing",
    learn:
      "Developing your own visual practice — drawing, painting, sculpture or mixed media — with research, experimentation and a personal project.",
  },
  {
    name: "Graphic Communication",
    group: "Creative & Performing",
    learn:
      "Typography, branding, layout and illustration, working to briefs and presenting design thinking.",
  },
  {
    name: "Photography",
    group: "Creative & Performing",
    learn:
      "Camera technique, lighting, editing and the critical study of images — building a body of work around an idea.",
  },
  {
    name: "Textile Design",
    group: "Creative & Performing",
    learn:
      "Fabric, print, stitch and construction, from material experiments to a finished collection.",
  },
  {
    name: "Film Studies",
    group: "Creative & Performing",
    learn:
      "How films make meaning — form, genre, ideology and industry — plus your own short production work.",
  },
  {
    name: "Media Studies",
    group: "Creative & Performing",
    learn:
      "Analysing media industries, audiences and representation, and producing your own media to a brief.",
  },
  {
    name: "Music",
    group: "Creative & Performing",
    learn:
      "Performing, composing and analysing music across classical, popular and world traditions.",
  },
  {
    name: "Music Technology",
    group: "Creative & Performing",
    learn:
      "Recording, mixing, sequencing and sound design, with the technical theory of audio behind it.",
  },
  {
    name: "Drama & Theatre",
    group: "Creative & Performing",
    learn:
      "Acting, devising, directing and design, alongside the study of playwrights and theatre practitioners.",
  },
  {
    name: "Dance",
    group: "Creative & Performing",
    learn:
      "Technique, choreography and performance, plus critical study of dance works and their context.",
  },

  {
    name: "Physical Education",
    group: "Sport & Wellbeing",
    learn:
      "Anatomy, physiology, biomechanics, sport psychology and the social side of sport, alongside your own performance.",
  },
  {
    name: "Sport & Exercise Science",
    group: "Sport & Wellbeing",
    learn:
      "The science of training and performance: physiology, nutrition, testing and data analysis.",
  },
  {
    name: "Food Science & Nutrition",
    group: "Sport & Wellbeing",
    learn:
      "Nutrition, food safety, the science of cooking and how diet affects health across a lifetime.",
  },
] as const satisfies readonly SubjectDefinition[];

export type Subject = (typeof SUBJECTS)[number];
export type SubjectName = Subject["name"];
export type SubjectGroup = Subject["group"];

export const SUBJECT_NAMES: readonly SubjectName[] = SUBJECTS.map((subject) => subject.name);

export const SUBJECT_GROUPS: readonly SubjectGroup[] = Array.from(
  new Set(SUBJECTS.map((subject) => subject.group)),
);

const SUBJECT_NAME_SET: ReadonlySet<string> = new Set(SUBJECT_NAMES);

export function isSubjectName(value: string): value is SubjectName {
  return SUBJECT_NAME_SET.has(value);
}

export function subjectGroup(name: SubjectName): SubjectGroup {
  return SUBJECTS.find((subject) => subject.name === name)!.group;
}

export function comboKey(subjects: string[]): string {
  return [...subjects]
    .map((s) => s.trim().toLowerCase())
    .sort()
    .join("|");
}
