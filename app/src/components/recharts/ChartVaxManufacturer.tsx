import { chartOptions } from "@src/lib";
import type { RechartChartProps } from "@src/types";
import { ResponsiveContainer, Tooltip, Treemap } from "recharts";

import {
  ChartTreemapCustomContent,
  ChartTreemapCustomTooltip
} from "..";

export const ChartVaxManufacturer = ({
  data
}: RechartChartProps) => (
  <ResponsiveContainer {...chartOptions.responsiveContainer}>
    <Treemap
      // @ts-ignore
      content={<ChartTreemapCustomContent />}
      data={data}
      dataKey="total"
    >
      <Tooltip
        // @ts-ignore
        content={<ChartTreemapCustomTooltip />}
      />
    </Treemap>
  </ResponsiveContainer>
);
