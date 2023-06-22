"use client";

import type { BoxProps } from "@panda/jsx";
import { Box } from "@panda/jsx";
import type { ReactNode } from "react";

import { ChartCaption } from "./ChartCaption";
import { ChartDescription } from "./ChartDescription";
import { ChartTitle } from "./ChartTitle";
import { Container } from "./Container";

export interface ChartProps extends Omit<BoxProps, "title"> {
  caption?: ReactNode;
  chart: ReactNode;
  description: ReactNode;
  title: ReactNode;
}

export const Chart = ({
  caption,
  chart,
  description,
  title,
  ...props
}: ChartProps) => (
  <Container mt="32" {...props}>
    <ChartDescription>{description}</ChartDescription>
    <ChartTitle>{title}</ChartTitle>
    <Box mt={{ base: "4", md: "6" }}>{chart}</Box>
    {caption && <ChartCaption>{caption}</ChartCaption>}
  </Container>
);
