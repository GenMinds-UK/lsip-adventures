import { NATIONAL_SUBJECTS } from "@/data/generated/national";
import { SKILLS } from "@/data/generated/taxonomy";
import { REGION_META } from "@/data/regions";
import type { Region } from "@/data/regions/types";
import { SKILL_CONTENT } from "@/data/skills-content";
import type { SubjectName } from "@/data/subjects";
import { CONTACT_GROUPS, TIER_LABELS, type JourneyResults } from "@/lib/results";
import { DEVELOPED } from "@/lib/scoring";
import { COLOURS, createPdfWriter } from "./pdfWriter";

const SKILL_NAME = new Map(SKILLS.map((skill) => [skill.id, skill.name]));
const LEVEL_WORDS = ["", "a little", "regularly", "at the core"];

/** Build and download the stage 10 summary as an A4 PDF. jsPDF loads only on click. */
export async function downloadSummaryPdf({
  region,
  subjects,
  results,
  pinnedQuestId,
}: {
  region: Region;
  subjects: readonly SubjectName[];
  results: JourneyResults;
  pinnedQuestId: string | undefined;
}) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pdf = createPdfWriter(doc);
  const today = new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  pdf.cover({
    eyebrow: "LSIP Adventures",
    title: `My A levels and the ${region.name} skills plan`,
    meta: [`A levels: ${subjects.join(" | ")}`, `Made on ${today}`],
  });

  pdf.heading("Your area");
  pdf.text(region.summary);
  pdf.card({
    label: "YOUR LOCAL SKILLS IMPROVEMENT PLAN",
    title: `${region.lsip.title} (${region.lsip.published})`,
    body: `Led by ${region.erb.name}. ${region.lsip.url}`,
    fill: COLOURS.paleTeal,
    border: "#abdcd5",
  });

  pdf.heading("Skills you will develop");
  const strong = results.skills.filter((skill) => results.profile.effective[skill] >= DEVELOPED);
  pdf.bullets(
    (strong.length ? strong : results.skills).slice(0, 12).map((skill) => {
      const level = LEVEL_WORDS[Math.floor(results.profile.level[skill])] ?? "";
      const reinforced = results.boosted[skill] ? ", boosted by two of your subjects" : "";
      return `${SKILL_NAME.get(skill)}: ${level}${reinforced}. Demand in ${region.short}: #${results.skillRanks[skill]} of ${SKILLS.length}.`;
    }),
  );

  pdf.heading(`Your match with ${region.name}`);
  pdf.card({
    label: "LSIP MATCH",
    title: TIER_LABELS[results.local.tier],
    body: `Compared with every possible combination of ${results.count} A levels.`,
  });
  pdf.text("How your subjects rank across the North West:", { style: "bold", gap: 4 });
  pdf.bullets(
    results.areas.map(
      (area, index) =>
        `${index + 1}. ${REGION_META[area.id].name}: ${TIER_LABELS[area.tier]}${area.id === region.id ? " (your area)" : ""}`,
    ),
  );

  pdf.heading("Top LSIP priorities for you");
  for (const result of results.priorities.slice(0, 3)) {
    const roles = result.roles.filter((role) => role.matched).map((role) => role.item.title);
    const gaps = result.gaps.filter((gap) => gap.matched).map((gap) => gap.item.text);
    pdf.card({
      title: result.priority.name,
      body: [
        result.priority.blurb,
        roles.length ? `Roles that fit your skills: ${roles.join(", ")}.` : "",
        gaps.length ? `Gaps you could help close: ${gaps.join("; ")}.` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      fill: COLOURS.white,
    });
  }

  pdf.heading("National demand for your subjects");
  pdf.card({ label: "NATIONAL MATCH", title: TIER_LABELS[results.national.tier] });
  pdf.bullets(subjects.map((subject) => `${subject}: ${NATIONAL_SUBJECTS[subject].headline}`));

  pdf.heading("Where your subjects overlap");
  for (const pair of results.pairs.slice(0, 2)) {
    pdf.card({
      title: pair.subjects.join(" + "),
      body: [
        pair.synergy?.blurb ?? "",
        pair.shared.length
          ? `Skills you practise twice: ${pair.shared.map((s) => SKILL_NAME.get(s)).join(", ")}.`
          : "",
        ...pair.seeds.map((seed) => `Project idea: ${seed}`),
      ]
        .filter(Boolean)
        .join("\n"),
      fill: COLOURS.white,
    });
  }

  const pinned = results.quests.find((q) => q.quest.id === pinnedQuestId);
  pdf.heading(pinned ? "Your research quest" : "Your research quests");
  if (pinned) {
    pdf.card({
      label: pinned.priority?.name.toUpperCase(),
      title: pinned.quest.title,
      body: `${pinned.quest.strapline}\n${pinned.quest.summary}`,
      fill: COLOURS.paleTeal,
      border: "#abdcd5",
    });
    pdf.text("How your subjects feed in:", { style: "bold", gap: 4 });
    pdf.bullets(pinned.subjectLinks.map((link) => `${link.subject}: ${link.contribution}`));
    pdf.text("Questions you could ask:", { style: "bold", gap: 4 });
    pdf.bullets(pinned.quest.researchQuestions);
    pdf.text("Where this could lead:", { style: "bold", gap: 4 });
    pdf.bullets([
      `Degrees: ${pinned.quest.whereThisCouldLead.degrees.join(", ")}`,
      `Apprenticeships: ${pinned.quest.whereThisCouldLead.apprenticeships.join(", ")}`,
      `Careers: ${pinned.quest.whereThisCouldLead.careers.join(", ")}`,
      `Local organisations: ${pinned.quest.whereThisCouldLead.localOrganisations.join(", ")}`,
    ]);
  } else {
    for (const { quest, priority } of results.quests) {
      pdf.card({
        label: priority?.name.toUpperCase(),
        title: quest.title,
        body: quest.strapline,
        fill: COLOURS.white,
      });
    }
  }

  if (results.worthAdding.length) {
    pdf.heading("Skills worth adding");
    pdf.bullets(
      results.worthAdding.map(
        (skill) => `${SKILL_NAME.get(skill)}: ${SKILL_CONTENT[skill].buildItBy}`,
      ),
    );
  }

  pdf.heading(`Key contacts in ${region.name}`);
  for (const { kind } of CONTACT_GROUPS) {
    for (const contact of region.contacts.filter((c) => c.kind === kind)) {
      pdf.card({
        title: contact.name,
        body: `${contact.whyContact}\n${contact.url}`,
        fill: COLOURS.white,
      });
    }
  }

  pdf.footers(
    "Check contact details before getting in touch, and ask a teacher to review messages.",
  );
  doc.save(`lsip-adventures-${region.id}.pdf`);
}
