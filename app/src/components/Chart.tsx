"use client";

import type { ReactNode } from "react";

import ChartCaption from "./ChartCaption";
import ChartDescription from "./ChartDescription";
import ChartTitle from "./ChartTitle";

export interface ChartProps {
  caption?: ReactNode;
  chart: ReactNode;
  description: ReactNode;
  title: ReactNode;
}

const Chart = ({
  caption,
  chart,
  description,
  title
}: ChartProps) => {
  return (
    <div className="mt-32">
      <ChartDescription>{description}</ChartDescription>
      <ChartTitle>{title}</ChartTitle>
      <div className="mt-4">{chart}</div>
      {caption && <ChartCaption>{caption}</ChartCaption>}
    </div>
  );
};

export default Chart;
