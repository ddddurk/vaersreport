import type { FlexProps } from "@panda/jsx";
import { Flex, panda } from "@panda/jsx";

export interface ReportBulletPointProps extends FlexProps {}

export const ReportBulletPoint = ({
  children,
  ...props
}: ReportBulletPointProps) => (
  <Flex
    gap={{ base: "4", md: "6" }}
    justify="center"
    maxW="xl"
    mx="auto"
    mt="8"
    w="full"
    {...props}
  >
    <panda.span bg="black" h="2" mt="2" w="2" />
    <p>{children}</p>
  </Flex>
);
