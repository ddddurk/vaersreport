import type { Year } from "@types";

export const getTense = (word: string, year?: Year) =>
  !year || year === new Date().getFullYear().toString()
    ? `have ${word}`
    : word;
