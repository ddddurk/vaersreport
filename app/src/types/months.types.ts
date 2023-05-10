import type analysis from "@analysis";

import type { Year } from "./year.types";

export type Month =
  keyof (typeof analysis.intervals)[Year]["intervals"];
