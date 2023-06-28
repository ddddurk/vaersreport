import { token } from "@panda/tokens";
import { chartOptions, getNumberFormatted } from "@src/lib";
import type { RechartChartProps } from "@src/types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export const ChartDataAge = ({ data }: RechartChartProps) => (
  <ResponsiveContainer {...chartOptions.responsiveContainer}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" {...chartOptions.xAxis} />
      <YAxis
        tickFormatter={getNumberFormatted}
        {...chartOptions.yAxis}
      />
      <Tooltip
        formatter={getNumberFormatted}
        {...chartOptions.tooltip}
      />
      <Legend />
      <Bar
        dataKey="total"
        name="Total"
        fill={token("colors.blue.500")}
        stackId="1"
        {...chartOptions.bar}
      />
    </BarChart>
  </ResponsiveContainer>
);
