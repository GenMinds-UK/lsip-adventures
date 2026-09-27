import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, RotateCcw } from "lucide-react";
import { useState, type ReactNode } from "react";
import { ArcadeButton } from "@/components/arcade/ArcadeButton";
import { TierBadge } from "@/components/journey/FitMeter";
import { StageIntro } from "@/components/journey/StageIntro";
import { SkillBar } from "@/components/skills/SkillBar";
import { NATIONAL_SUBJECTS } from "@/data/generated/national";
import { SKILLS } from "@/data/generated/taxonomy";
import { REGION_META } from "@/data/regions";
import { useJourney } from "@/lib/journey";
import { CONTACT_GROUPS } from "@/lib/results";
import { DEVELOPED } from "@/lib/scoring";

export const Route = createFileRoute("/journey/summary")({
  head: () => ({ meta: [{ title: "Your summary | LSIP Adventures" }] }),
  component: SummaryStage,
});

const SKILL_NAME = new Map(SKILLS.map((skill) => [skill.id, skill.name]));

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="arcade-panel flex flex-col gap-3 p-5 sm:p-6">
      <h2 className="font-display text-accent text-[0.62rem] tracking-widest uppercase">{title}</h2>
      {children}
    </section>
  );
}

function SummaryStage() {
  const journey = useJourney();
  const { region, subjects, results, pinnedQuestId } = journey;
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const strong = results.skills.filter((skill) => results.profile.effective[skill] >= DEVELOPED);
  const pinned = results.quests.find((q) => q.quest.id === pinnedQuestId);
  const keyContacts = CONTACT_GROUPS.flatMap(({ kind }) =>
    region.contacts.filter((c) => c.kind === kind),
  ).slice(0, 4);
  const topPair = results.pairs[0];

  const download = async () => {
    setDownloading(true);
    setError(null);
    try {
      const { downloadSummaryPdf } = await import("@/components/summary/summaryPdf");
      await downloadSummaryPdf({ region, subjects, results, pinnedQuestId });
    } catch {
      setError("We couldn't make your PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <>
      <StageIntro
        title="Your adventure summary"
        aside={
          <ArcadeButton onClick={download} disabled={downloading}>
            <Download className="h-4 w-4" aria-hidden />
            {downloading ? "Making PDF..." : "Download PDF"}
          </ArcadeButton>
        }
      >
        <p>
          Here's everything from your adventure in one place. Download it to share with your careers
          lead, your family or your teachers.
        </p>
        {error ? (
          <p className="text-destructive" role="alert">
            {error}
          </p>
        ) : null}
      </StageIntro>

      <div className="grid gap-5 lg:grid-cols-2">
        <Panel title="Your area and subjects">
          <p className="text-foreground">{region.name}</p>
          <ul className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <li
                key={subject}
                className="border-border bg-surface-2 rounded border px-2.5 py-1.5 text-xs"
              >
                {subject}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Your LSIP match">
          <div className="flex items-center justify-between gap-3">
            <span className="text-foreground">{region.name}</span>
            <TierBadge tier={results.local.tier} />
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-muted-foreground text-sm">Nationally</span>
            <TierBadge tier={results.national.tier} />
          </div>
          <p className="text-muted-foreground text-xs">
            Best North West match: {REGION_META[results.areas[0]!.id].name}
          </p>
        </Panel>

        <Panel title="Skills you will develop">
          <ul className="flex flex-col gap-2 text-sm">
            {strong.slice(0, 6).map((skill) => (
              <li key={skill} className="flex items-center justify-between gap-3">
                <span>{SKILL_NAME.get(skill)}</span>
                <SkillBar
                  level={results.profile.effective[skill]}
                  reinforced={results.profile.reinforced[skill]}
                />
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Top LSIP priorities for you">
          <ol className="flex flex-col gap-2 text-sm">
            {results.priorities.slice(0, 3).map(({ priority, roles }) => (
              <li key={priority.id}>
                <span className="text-foreground">{priority.name}</span>
                <span className="text-muted-foreground block text-xs">
                  {roles.filter((r) => r.matched).length} roles fit your skills
                </span>
              </li>
            ))}
          </ol>
        </Panel>

        <Panel title="National demand">
          <ul className="flex flex-col gap-2 text-sm">
            {subjects.map((subject) => (
              <li key={subject}>
                <span className="text-foreground">{subject}: </span>
                <span className="text-muted-foreground">{NATIONAL_SUBJECTS[subject].headline}</span>
              </li>
            ))}
          </ul>
        </Panel>

        {topPair ? (
          <Panel title="Your strongest pairing">
            <p className="text-foreground">{topPair.subjects.join(" + ")}</p>
            {topPair.seeds[0] ? (
              <p className="text-muted-foreground text-sm">Project idea: {topPair.seeds[0]}</p>
            ) : null}
          </Panel>
        ) : null}

        <Panel title={pinned ? "Your pinned quest" : "Your quests"}>
          {pinned ? (
            <>
              <p className="font-display text-highlight text-[0.7rem] leading-relaxed">
                {pinned.quest.title}
              </p>
              <p className="text-muted-foreground text-sm">{pinned.quest.strapline}</p>
            </>
          ) : (
            <>
              <ul className="flex flex-col gap-1 text-sm">
                {results.quests.map(({ quest }) => (
                  <li key={quest.id}>{quest.title}</li>
                ))}
              </ul>
              <Link to="/journey/quests" search={true} className="text-accent text-xs underline">
                Pin a quest to add its full plan to your PDF
              </Link>
            </>
          )}
        </Panel>

        <Panel title="Who to talk to">
          <ul className="flex flex-col gap-1.5 text-sm">
            {keyContacts.map((contact) => (
              <li key={contact.name}>
                <a
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline"
                >
                  {contact.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ArcadeButton onClick={download} disabled={downloading} size="lg">
          <Download className="h-4 w-4" aria-hidden />
          {downloading ? "Making PDF..." : "Download PDF"}
        </ArcadeButton>
        <Link to="/" onClick={() => window.scrollTo({ top: 0 })}>
          <ArcadeButton type="button" variant="ghost" size="lg">
            <RotateCcw className="h-4 w-4" aria-hidden />
            Start again
          </ArcadeButton>
        </Link>
      </div>
    </>
  );
}
