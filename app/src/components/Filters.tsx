"use client";

import type { BoxProps } from "@panda/jsx";
import { Box, Flex } from "@panda/jsx";

export interface FilterProps extends BoxProps {}

export const Filters = ({ children, ...props }: FilterProps) => (
  <Box
    bg="white"
    left="0"
    p="4"
    pos="fixed"
    top="0"
    w="full"
    zIndex="99"
    {...props}
  >
    <Flex
      align="center"
      gap="4"
      justify="start"
      maxW="6xl"
      mx="auto"
    >
      {children}
    </Flex>
  </Box>
);
