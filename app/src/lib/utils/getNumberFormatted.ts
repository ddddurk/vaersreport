export const getNumberFormatted = (value: number | string) =>
  new Intl.NumberFormat("en").format(value as number);
