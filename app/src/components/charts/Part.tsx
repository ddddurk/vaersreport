"use client";

import type { Part as PartProps } from "@types";

import Chart from "./Chart";

const Part = ({ charts, title }: PartProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {charts.map((chart) => (
          <Chart key={chart.title.toString()} {...chart} />
        ))}
      </div>
    </div>
  );
};

export default Part;
