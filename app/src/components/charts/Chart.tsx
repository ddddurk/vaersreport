"use client";

import type { Chart as ChartProps } from "@types";

const Chart = ({
  caption,
  chart,
  description,
  title
}: ChartProps) => {
  return (
    <div>
      <p>{description}</p>
      <h3>{title}</h3>
      <div>{chart}</div>
      {caption && caption}
    </div>
  );
};

export default Chart;
