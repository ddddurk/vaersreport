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

export const ChartDataSexes = ({ data }: RechartChartProps) => (
  <ResponsiveContainer {...chartOptions.responsiveContainer}>
    <BarChart data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        tickFormatter={getNumberFormatted}
        type="number"
        {...chartOptions.xAxis}
      />
      <YAxis
        dataKey="label"
        type="category"
        {...chartOptions.yAxis}
      />
      <Tooltip
        formatter={getNumberFormatted}
        {...chartOptions.tooltip}
      />
      <Legend />
      <Bar
        dataKey="female"
        name="Female"
        fill={token("colors.pink.500")}
        stackId="1"
        {...chartOptions.bar}
      />
      <Bar
        dataKey="male"
        fill={token("colors.blue.500")}
        name="Male"
        stackId="1"
        {...chartOptions.bar}
      />
    </BarChart>
  </ResponsiveContainer>
);
