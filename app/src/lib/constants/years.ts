import charts from "@charts";
import type { Year } from "@types";

export const years = Object.keys(charts.ages_chart)
  .filter((year) => year !== "all")
  .reverse() as Year[];
