import { panda } from "@panda/jsx";
import type { SystemStyleObject } from "@panda/types";
import type { HTMLAttributes } from "react";

export interface ChartTitle
  extends Omit<
      HTMLAttributes<HTMLHeadingElement>,
      "color" | "content" | "translate"
    >,
    SystemStyleObject {}

export const ChartTitle = ({
  children,
  ...props
}: ChartTitle) => (
  <panda.h3
    fontSize={{ base: "md", md: "lg" }}
    fontWeight="bold"
    maxW="2xl"
    mt="16"
    w="full"
    {...props}
  >
    {children}
  </panda.h3>
);
