import type charts from "@charts";

export type Year = Exclude<
  keyof typeof charts.ages_chart,
  "all"
>;
