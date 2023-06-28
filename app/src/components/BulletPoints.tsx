import type { StackProps } from "@panda/jsx";
import { Stack } from "@panda/jsx";

export interface BulletPointsProps extends StackProps {}

export const BulletPoints = ({
  children,
  ...props
}: BulletPointsProps) => (
  <Stack gap="6" maxW="2xl" w="full" {...props}>
    {children}
  </Stack>
);
