import type { StackProps } from "@panda/jsx";
import { Stack } from "@panda/jsx";

export interface ChartProps extends StackProps {}

export const Chart = ({ children, ...props }: ChartProps) => (
  <Stack {...props}>{children}</Stack>
);
