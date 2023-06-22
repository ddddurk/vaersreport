import type { BoxProps } from "@panda/jsx";
import { Box } from "@panda/jsx";

export interface ChartCaptionProps extends BoxProps {}

export const ChartCaption = ({
  children,
  ...props
}: ChartCaptionProps) => (
  <Box fontWeight="light" mt="4" {...props}>
    {children}
  </Box>
);
