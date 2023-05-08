import data from "@data";
import type { Month, Year } from "@types";

export const YEARS = Object.keys(data.years).reverse() as Year[];

export const MONTHS = Object.keys(data.years[YEARS[0]]).filter(
  (month) => month !== "all"
) as Month[];
