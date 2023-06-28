import type { FlexProps } from "@panda/jsx";
import { Box, Flex, panda } from "@panda/jsx";

export interface BulletPointProps extends FlexProps {}

export const BulletPoint = ({
  children,
  ...props
}: BulletPointProps) => (
  <Flex align="start" gap="4" justify="center" {...props}>
    <Box bg="black" h="2" mt="2" w="2" />
    <panda.p>{children}</panda.p>
  </Flex>
);
