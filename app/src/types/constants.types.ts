import type data from "@data";

export type Year = keyof typeof data.years;

export type Month = Exclude<
  keyof (typeof data.years)[Year],
  "all"
>;
