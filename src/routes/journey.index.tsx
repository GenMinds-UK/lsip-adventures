import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/journey/")({
  beforeLoad: ({ search }) => {
    throw redirect({ to: "/journey/skills", search });
  },
});
