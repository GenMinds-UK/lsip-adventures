/// <reference types="node" />
// Outside the app tsconfig (which only has vite/client types), so pull in Node types here.
import { existsSync } from "node:fs";
import { defineConfig } from "drizzle-kit";

// Bun loads .env.local itself; under Node, drizzle-kit does not, so load it here.
if (!process.env.SUPABASE_PASSWORD && existsSync(".env.local")) process.loadEnvFile(".env.local");

const SUPABASE_PROJECT_REF = "cgeihhngponcivktkmkz";

// Session pooler (IPv4-friendly). The direct db.<ref>.supabase.co host is IPv6-only.
function databaseUrl(): string {
  if (process.env.DATABASE_URL) return process.env.DATABASE_URL;
  const password = process.env.SUPABASE_PASSWORD;
  if (!password) return "";
  return `postgresql://postgres.${SUPABASE_PROJECT_REF}:${encodeURIComponent(password)}@aws-1-eu-west-1.pooler.supabase.com:5432/postgres`;
}

export default defineConfig({
  dialect: "postgresql",
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  dbCredentials: {
    url: databaseUrl(),
  },
});
