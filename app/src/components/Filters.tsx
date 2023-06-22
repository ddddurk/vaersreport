"use client";

import { Box } from "@panda/jsx";

import { FiltersYear } from "./FiltersYear";

export const Filters = () => (
  <Box
    backdropBlur="xl"
    backdropFilter="auto"
    backdropSaturate="2"
    bg="rgba(255, 255, 255, 0.75)"
    left="0"
    mx="auto"
    p={{ base: "4", md: "6" }}
    pos="fixed"
    top="0"
    w="full"
    zIndex="99"
  >
    <FiltersYear />
  </Box>
);
