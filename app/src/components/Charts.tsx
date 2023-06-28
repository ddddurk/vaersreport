import type { StackProps } from "@panda/jsx";
import { Stack } from "@panda/jsx";

export interface ChartsProps extends StackProps {}

export const Charts = ({ children, ...props }: ChartsProps) => (
  <Stack gap="16" maxW="2xl" w="full" {...props}>
    {children}
  </Stack>
);
