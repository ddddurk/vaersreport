import charts from "@charts";
import {
  DynamicText,
  TreemapCustomContent,
  TreemapCustomTooltip
} from "@components";
import type { Part, Year } from "@types";
import { Fragment } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  Treemap,
  XAxis,
  YAxis
} from "recharts";

import { chartOptions, colors } from "./constants";
import {
  getNumberFormatted,
  getNumberPercentage,
  getTense
} from "./utils";

export const buildReport = (year: undefined | Year): Part[] => {
  const chartsAges = charts.ages_chart[year || "all"];
  const chartsSexes = charts.sexes_chart[year || "all"];
  const chartsTotals = charts.totals_chart[year || "all"];

  const chartOutcomes = charts.outcomes_chart[year || "all"];

  const chartVaccines = charts.vaccines_chart[year || "all"];

  return [
    {
      charts: [
        {
          chart: (
            <ResponsiveContainer
              {...chartOptions.responsiveContainer}
            >
              <BarChart
                data={chartsTotals.data}
                {...chartOptions.barChart}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" {...chartOptions.xAxis} />
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
                  dataKey="Domestic"
                  fill={colors.sequential[2]}
                  stackId="1"
                  {...chartOptions.bar}
                />
                <Bar
                  dataKey="Nondomestic"
                  fill={colors.sequential[4]}
                  stackId="1"
                  {...chartOptions.bar}
                />
              </BarChart>
            </ResponsiveContainer>
          ),
          description: (
            <Fragment>
              Total VAERS reports submitted{" "}
              {getTense("peaked", year)} in{" "}
              <DynamicText>
                {chartsTotals.interval_most}(
                {getNumberFormatted(chartsTotals.interval_total)}
                )
              </DynamicText>
              .
            </Fragment>
          ),
          title: `VAERS Reports, ${year ?? "All Years"}`
        },
        {
          caption: (
            <Fragment>
              <em>Note</em>: For{" "}
              <b>
                {getNumberFormatted(chartsSexes.unknown.Total)}
              </b>{" "}
              reports victim sex was unknown.
            </Fragment>
          ),
          chart: (
            <ResponsiveContainer
              {...chartOptions.responsiveContainer}
            >
              <BarChart
                data={chartsSexes.data}
                layout="vertical"
                {...chartOptions.barChart}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  tickFormatter={getNumberFormatted}
                  type="number"
                  {...chartOptions.xAxis}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  {...chartOptions.yAxis}
                />
                <Tooltip
                  formatter={getNumberFormatted}
                  {...chartOptions.tooltip}
                />
                <Legend />
                <Bar
                  dataKey="Domestic"
                  fill={colors.sequential[2]}
                  stackId="1"
                  {...chartOptions.bar}
                />
                <Bar
                  dataKey="Nondomestic"
                  fill={colors.sequential[4]}
                  stackId="1"
                  {...chartOptions.bar}
                />
              </BarChart>
            </ResponsiveContainer>
          ),
          description: (
            <Fragment>
              <DynamicText>{chartsSexes.sex_most}</DynamicText>{" "}
              {getTense("submited", year)}{" "}
              <DynamicText>
                {getNumberPercentage(chartsSexes.sex_percent)}
              </DynamicText>{" "}
              of reported adverse events.
            </Fragment>
          ),
          title: `VAERS Report, Victims, Sexes, ${
            year ?? "All Years"
          }`
        },
        {
          caption: (
            <Fragment>
              <em>Note</em>: For{" "}
              <b>
                {getNumberFormatted(chartsAges.unknown.Total)}
              </b>{" "}
              reports victim age was unknown.
            </Fragment>
          ),
          chart: (
            <ResponsiveContainer
              {...chartOptions.responsiveContainer}
            >
              <BarChart
                data={chartsAges.data}
                {...chartOptions.barChart}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" {...chartOptions.xAxis} />
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
                  dataKey="Domestic"
                  fill={colors.sequential[2]}
                  stackId="1"
                  {...chartOptions.bar}
                />
                <Bar
                  dataKey="Nondomestic"
                  fill={colors.sequential[4]}
                  stackId="1"
                  {...chartOptions.bar}
                />
              </BarChart>
            </ResponsiveContainer>
          ),
          description: (
            <Fragment>
              Victims aged{" "}
              <DynamicText>{chartsAges.age_most}</DynamicText>{" "}
              {getTense("experienced", year)}{" "}
              <DynamicText>
                {getNumberPercentage(chartsAges.age_percent)}
              </DynamicText>{" "}
              of reported adverse events.
            </Fragment>
          ),
          title: `VAERS Report, Victims, Ages, ${
            year ?? "All Years"
          }`
        }
      ],
      title: "Part 1: VAERS Overview"
    },
    {
      charts: [
        {
          chart: (
            <ResponsiveContainer
              {...chartOptions.responsiveContainer}
            >
              <BarChart
                data={chartOutcomes.data}
                layout="vertical"
                {...chartOptions.barChart}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  tickFormatter={getNumberFormatted}
                  type="number"
                  {...chartOptions.xAxis}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  {...chartOptions.yAxis}
                />
                <Tooltip
                  formatter={getNumberFormatted}
                  {...chartOptions.tooltip}
                />
                <Legend />
                <Bar
                  dataKey="Injuries"
                  fill={colors.sequential[2]}
                  stackId="1"
                  {...chartOptions.bar}
                />
                <Bar
                  dataKey="Hospitilizations"
                  fill={colors.diverging[4]}
                  stackId="1"
                  {...chartOptions.bar}
                />
                <Bar
                  dataKey="Deaths"
                  fill={colors.diverging[5]}
                  stackId="1"
                  {...chartOptions.bar}
                />
              </BarChart>
            </ResponsiveContainer>
          ),
          description: (
            <Fragment>
              <DynamicText>
                {getNumberPercentage(
                  chartOutcomes.non_fatal_percent
                )}
              </DynamicText>{" "}
              of reports {getTense("resulted", year)} in
              non-fatal injuries.
            </Fragment>
          ),
          title: `VAERS Reports, Outcomes, ${
            year ?? "All Years"
          }`
        }
      ],
      title: "Part 2: VAERS Outcomes"
    },
    {
      charts: [
        {
          chart: (
            <ResponsiveContainer
              {...chartOptions.responsiveContainer}
            >
              <Treemap
                // @ts-ignore
                content={<TreemapCustomContent />}
                data={chartVaccines.data}
                dataKey="Total"
              >
                {/* @ts-ignore */}
                <Tooltip content={<TreemapCustomTooltip />} />
              </Treemap>
            </ResponsiveContainer>
          ),
          description: (
            <Fragment>
              <DynamicText>
                {chartVaccines.data[0].children.length}
              </DynamicText>{" "}
              vaccines {getTense("appeared", year)} with at least
              one related VAERS report.
            </Fragment>
          ),
          title: `VAERS Reports, Vaccines, ${
            year ?? "All Years"
          }`
        }
      ],
      title: "Part 3: VAERS Vaccines"
    }
  ];
};
