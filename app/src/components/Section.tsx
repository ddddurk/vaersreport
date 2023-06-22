"use client";

import type { ChartProps } from "./Chart";
import { Chart } from "./Chart";
import { SectionTitle } from "./SectionTitle";

export interface SectionProps {
  charts: ChartProps[];
  title: string;
}

export const Section = ({ charts, title }: SectionProps) => (
  <>
    <SectionTitle>{title}</SectionTitle>
    {charts.map((chart) => (
      <Chart key={chart.title.toString()} {...chart} />
    ))}
  </>
);
