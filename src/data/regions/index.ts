import { REGION_IDS, REGION_META, type RegionId } from "@/data/generated/regions-meta";
import type { GeneratedRegionData, Region, RegionContent } from "@/data/regions/types";

export { REGION_IDS, REGION_META, type RegionId };

type Parts = [{ REGION_DATA: GeneratedRegionData }, { CONTENT: RegionContent }];

/** One lazy chunk per area: compiled research data plus written content. */
const LOADERS: Record<RegionId, () => Promise<Parts>> = {
  "cheshire-warrington": () =>
    Promise.all([
      import("@/data/generated/regions/cheshire-warrington"),
      import("@/data/regions/cheshire-warrington.content"),
    ]),
  cumbria: () =>
    Promise.all([
      import("@/data/generated/regions/cumbria"),
      import("@/data/regions/cumbria.content"),
    ]),
  "greater-manchester": () =>
    Promise.all([
      import("@/data/generated/regions/greater-manchester"),
      import("@/data/regions/greater-manchester.content"),
    ]),
  lancashire: () =>
    Promise.all([
      import("@/data/generated/regions/lancashire"),
      import("@/data/regions/lancashire.content"),
    ]),
  "liverpool-city-region": () =>
    Promise.all([
      import("@/data/generated/regions/liverpool-city-region"),
      import("@/data/regions/liverpool-city-region.content"),
    ]),
};

const REGION_ID_SET: ReadonlySet<string> = new Set(REGION_IDS);

export function isRegionId(value: string | undefined): value is RegionId {
  return value !== undefined && REGION_ID_SET.has(value);
}

export async function loadRegion(id: RegionId): Promise<Region> {
  const [{ REGION_DATA }, { CONTENT }] = await LOADERS[id]();
  return { ...REGION_META[id], ...REGION_DATA, ...CONTENT };
}
