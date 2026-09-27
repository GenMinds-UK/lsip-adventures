import type { SkillId } from "@/data/generated/taxonomy";

/** Student-facing words for each skill in the taxonomy. */
export type SkillContent = {
  /** What you will be able to do, written to the student ("You can…"). */
  youCan: string;
  /** Ways to build the skill beyond A levels, for "skills worth adding". */
  buildItBy: string;
};

export const SKILL_CONTENT: Readonly<Record<SkillId, SkillContent>> = {
  "data-analysis": {
    youCan:
      "You can turn a messy spreadsheet into a clear chart and spot which patterns are real and which are flukes.",
    buildItBy:
      "Try a data-based EPQ, join a maths or statistics club, or work through a free OpenLearn statistics or data course using real datasets.",
  },
  programming: {
    youCan:
      'You can write a working program that takes an idea from "wouldn\'t it be good if…" to something that actually runs.',
    buildItBy:
      "Build something for a school club or local charity, enter a hackathon, or work through a free Microsoft Learn coding course; an EPQ coding project counts as evidence too.",
  },
  "digital-ai": {
    youCan:
      "You can use everyday software and AI tools confidently, checking what an AI gives you rather than accepting it as fact.",
    buildItBy:
      "Take a free Grow with Google or Microsoft Learn course on AI and digital skills, help run a school digital awareness session, or use AI tools openly and critically in an EPQ.",
  },
  "cyber-security": {
    youCan:
      "You can explain how a network or cloud service can be attacked and take sensible steps to keep an account or device secure.",
    buildItBy:
      "Apply for an NCSC CyberFirst Advanced course or bursary, open to 16-17 year olds, join a school coding or cyber club, or take a free introductory cyber security course online.",
  },
  numeracy: {
    youCan:
      "You can build a simple mathematical model of a real situation and use it to estimate or predict what happens next.",
    buildItBy:
      "Enter the UKMT Senior Mathematical Challenge, tutor younger students in maths through your school, or use an EPQ to model something you're curious about, like ticket pricing or traffic flow.",
  },
  "scientific-method": {
    youCan:
      "You can design a fair test, control the variables that would otherwise wreck it, and say how confident your results really are.",
    buildItBy:
      "Apply for a STEM Learning Research Placement (formerly Nuffield Research Placements) or an In2scienceUK placement for the summer after Year 12, join a school science club, or run your own investigation as an EPQ.",
  },
  engineering: {
    youCan:
      "You can take an engineering problem apart into forces, materials or circuits and use that to design or improve something.",
    buildItBy:
      "Apply for an Arkwright Engineering Scholarship in Year 11, try an EDT Headstart residential course, or join a school robotics or Greenpower team.",
  },
  "practical-making": {
    youCan:
      "You can use tools and materials safely and accurately to make, fix or install something so it actually works.",
    buildItBy:
      "Take on a Duke of Edinburgh expedition, which needs real practical planning, volunteer on a community build or conservation project, or pick up hands-on shifts in a part-time job.",
  },
  sustainability: {
    youCan:
      "You can weigh up the environmental cost of a product, building or process and suggest a genuinely lower-carbon alternative.",
    buildItBy:
      "Join or start a school eco club, volunteer with a Wildlife Trust or the National Trust, or base an EPQ on a local sustainability question.",
  },
  commercial: {
    youCan:
      "You can read a set of accounts or a marketing plan and judge whether a business idea is actually likely to make money.",
    buildItBy:
      "Run a company through the Young Enterprise Company Programme, take on part-time retail or hospitality work, or take a free introductory finance or marketing course online.",
  },
  leadership: {
    youCan:
      "You can set a clear goal for a group, share out the work fairly, and keep everyone moving towards it when things go wrong.",
    buildItBy:
      "Take a role on the school council, captain a sports team, lead a Young Enterprise company, or aim for a Duke of Edinburgh Gold Award, which needs sustained leadership.",
  },
  "law-ethics": {
    youCan:
      "You can spot the safety, legal or ethical issue in a situation before it becomes a real problem.",
    buildItBy:
      "Enter a mock trial competition, take a work placement's health and safety induction seriously, or use an EPQ to weigh up a genuine ethical dilemma with evidence.",
  },
  writing: {
    youCan:
      "You can write a report, email or argument that says exactly what you mean and is easy for someone else to follow.",
    buildItBy:
      "Write for a school magazine or blog, complete an EPQ, which is assessed largely on writing, or take a volunteering role that involves drafting letters, minutes or newsletters.",
  },
  speaking: {
    youCan:
      "You can present an idea to a room, explain your reasoning clearly, and hold your own in a live discussion.",
    buildItBy:
      "Join a school debating society or a programme such as Debate Mate, take part in Model United Nations, or volunteer to present at open evenings and school assemblies.",
  },
  languages: {
    youCan:
      "You can hold a real conversation in another language and understand something of the culture behind it.",
    buildItBy:
      "Set up a language exchange with a native speaker, use a free app like Duolingo alongside your course, or volunteer to translate for a community group your school works with.",
  },
  "care-empathy": {
    youCan:
      "You can notice what someone needs, physically or emotionally, and respond with patience rather than awkwardness.",
    buildItBy:
      "Volunteer in a care home or hospital, join St John Ambulance or the British Red Cross, or take a free youth first aid or mental health awareness course.",
  },
  teamwork: {
    youCan:
      "You can pull your weight in a group project, back up a teammate who's struggling, and share the credit when it goes well.",
    buildItBy:
      "Play in a school sports team, take part in a Duke of Edinburgh expedition, or join a group project, such as Young Enterprise or a school production, that only works if everyone pulls together.",
  },
  "customer-service": {
    youCan:
      "You can work out what a customer actually needs and sort out a problem for them without losing your patience.",
    buildItBy:
      "Take a part-time retail, hospitality or leisure job, volunteer on an open day or in a charity shop, or shadow a customer-facing role on work experience.",
  },
  "self-management": {
    youCan:
      "You can plan your own time across competing deadlines and keep going professionally when a plan falls through.",
    buildItBy:
      "Balance a part-time job, sport or Duke of Edinburgh Award alongside your studies, or use an EPQ, which is largely self-directed, to practise planning your own project.",
  },
  "critical-thinking": {
    youCan:
      "You can weigh up conflicting evidence, including what an AI tool tells you, and reach your own well-reasoned judgement.",
    buildItBy:
      "Take on an EPQ, join a debating club, or take a free OpenLearn course on evaluating evidence and spotting misinformation online.",
  },
  "problem-solving": {
    youCan:
      "You can break an unfamiliar problem into smaller steps, try a method, and adjust it when your first attempt doesn't work.",
    buildItBy:
      "Enter a coding, engineering or maths challenge, build an EPQ around a real problem, or take a part-time job where you have to think on your feet.",
  },
  creativity: {
    youCan:
      "You can turn a rough idea into a finished piece of work through several rounds of trying, testing and improving it.",
    buildItBy:
      "Enter a design, art or writing competition, join a school creative society, or use an EPQ artefact to develop a project from first sketch to finished piece.",
  },
  "content-production": {
    youCan:
      "You can plan, shoot and edit a video, podcast or set of graphics that actually holds an audience's attention.",
    buildItBy:
      "Run a school's social media, YouTube channel or podcast, join a media or film club, or use free tools like Canva or CapCut to produce content for a real audience.",
  },
};
