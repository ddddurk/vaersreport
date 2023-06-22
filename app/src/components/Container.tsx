import type { BoxProps } from "@panda/jsx";
import { Box } from "@panda/jsx";

export interface ContainerProps extends BoxProps {}

export const Container = ({
  children,
  ...props
}: ContainerProps) => (
  <Box maxW="3xl" mx="auto" w="full" {...props}>
    {children}
  </Box>
);
