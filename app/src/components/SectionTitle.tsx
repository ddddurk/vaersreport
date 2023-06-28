import { panda } from "@panda/jsx";
import type { SystemStyleObject } from "@panda/types";
import type { HTMLAttributes } from "react";

export interface SectionTitleProps
  extends Omit<
      HTMLAttributes<HTMLHeadingElement>,
      "color" | "content" | "translate"
    >,
    SystemStyleObject {}

export const SectionTitle = ({
  children,
  ...props
}: SectionTitleProps) => (
  <panda.h2
    borderBottomWidth="1px"
    borderColor="gray.200"
    borderStyle="solid"
    fontSize={{ base: "xl", md: "2xl" }}
    fontWeight="bold"
    maxW="2xl"
    mt={{ base: "24", md: "36" }}
    pb="4"
    textAlign="center"
    w="full"
    {...props}
  >
    {children}
  </panda.h2>
);
