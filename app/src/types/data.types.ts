import type data from "@data";

import type { Month, Year } from "./constants.types";

export type Data =
  | typeof data.all
  | (typeof data.all)[Month]
  | (typeof data.years)[Year]
  | (typeof data.years)[Year][Month];
