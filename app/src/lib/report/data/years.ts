import data from "@workspace/data";

export const years = Object.keys(data.years).sort((a, b) =>
  parseInt(a) < parseInt(b) ? 1 : -1
);
