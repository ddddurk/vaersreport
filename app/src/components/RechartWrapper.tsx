import type { BoxProps } from "@panda/jsx";
import { Box } from "@panda/jsx";

export interface RechartWrapperProps extends BoxProps {}

export const RechartWrapper = ({
  children,
  ...props
}: RechartWrapperProps) => (
  <Box mt="4" {...props}>
    {children}
  </Box>
);
