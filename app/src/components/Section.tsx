"use client";

import { Fragment } from "react";

import type { ChartProps } from "./Chart";
import Chart from "./Chart";
import SectionTitle from "./SectionTitle";

export interface SectionProps {
  charts: ChartProps[];
  title: string;
}

const Section = ({ charts, title }: SectionProps) => {
  return (
    <Fragment>
      <SectionTitle>{title}</SectionTitle>
      {charts.map((chart) => (
        <Chart key={chart.title.toString()} {...chart} />
      ))}
    </Fragment>
  );
};

export default Section;
