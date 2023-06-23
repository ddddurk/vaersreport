import charts from "@data/charts.json";
import type { Year } from "@src/types";

export const years = Object.keys(charts.ages_chart)
  .filter((year) => year !== "all")
  .reverse() as Year[];
