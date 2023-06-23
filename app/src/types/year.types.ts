import type charts from "@data/charts.json";

export type Year = Exclude<
  keyof typeof charts.ages_chart,
  "all"
>;
