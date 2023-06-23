import type analysis from "@data/analysis.json";

import type { Year } from "./year.types";

export type Month =
  keyof (typeof analysis.intervals)[Year]["intervals"];
