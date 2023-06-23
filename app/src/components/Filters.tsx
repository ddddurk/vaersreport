"use client";

import { Box } from "@panda/jsx";

import { Container } from "./Container";
import { FiltersYear } from "./FiltersYear";

export const Filters = () => (
  <Box
    bg="white"
    left="0"
    mx="auto"
    p={{ base: "4", md: "6" }}
    pos="fixed"
    top="0"
    w="full"
    zIndex="99"
  >
    <Container maxW="7xl">
      <FiltersYear />
    </Container>
  </Box>
);
