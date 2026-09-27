import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { StageIntro } from "@/components/journey/StageIntro";
import type { Contact } from "@/data/regions/types";
import { useJourney } from "@/lib/journey";
import { CONTACT_GROUPS } from "@/lib/results";

export const Route = createFileRoute("/journey/contacts")({
  head: () => ({ meta: [{ title: "Who to talk to | LSIP Adventures" }] }),
  component: ContactsStage,
});

function ContactsStage() {
  const { region } = useJourney();

  return (
    <>
      <StageIntro title={`Key contacts in ${region.name}`}>
        <p>
          These organisations shape skills and jobs in {region.name}. Many of them run events, work
          experience, competitions and apprenticeship fairs for young people. They're also the
          people to ask about the skills plan itself.
        </p>
      </StageIntro>

      <p className="border-highlight/60 bg-surface-2 text-foreground mb-6 flex gap-3 rounded-md border-2 p-4 text-sm">
        <ShieldCheck className="text-highlight mt-0.5 h-5 w-5 shrink-0" aria-hidden />
        <span>
          Before you contact anyone, talk to your careers lead or a teacher. They can help you write
          your first message and may already have a contact there. Use the organisation's official
          website, and never share personal details you're not comfortable with.
        </span>
      </p>

      <div className="flex flex-col gap-6">
        {CONTACT_GROUPS.map(({ kind, title }) => {
          const contacts = region.contacts.filter((contact) => contact.kind === kind);
          if (contacts.length === 0) return null;
          return (
            <section key={kind} aria-labelledby={`contacts-${kind}`}>
              <h2
                id={`contacts-${kind}`}
                className="font-display text-accent mb-3 text-[0.6rem] tracking-widest uppercase"
              >
                {title}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {contacts.map((contact) => (
                  <ContactCard key={contact.name} contact={contact} />
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </>
  );
}

function ContactCard({ contact }: { contact: Contact }) {
  return (
    <li className="arcade-panel flex flex-col gap-2 p-5">
      <h3 className="text-foreground font-semibold">{contact.name}</h3>
      <p className="text-muted-foreground text-sm">{contact.what}</p>
      <p className="text-foreground/90 text-sm">{contact.whyContact}</p>
      <a
        href={contact.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent mt-auto inline-flex items-center gap-1 text-sm underline"
      >
        Visit website
        <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        <span className="sr-only">for {contact.name} (opens in a new tab)</span>
      </a>
    </li>
  );
}
