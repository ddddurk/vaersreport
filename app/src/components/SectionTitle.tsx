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
    borderColor="gray.200"
    borderStyle="1px"
    borderBottomWidth="1px"
    fontSize="2xl"
    fontWeight="bold"
    mt="32"
    mx="auto"
    maxW="2xl"
    pb="4"
    textAlign="center"
    {...props}
  >
    {children}
  </panda.h2>
);
