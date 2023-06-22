import { panda } from "@panda/jsx";
import type { SystemStyleObject } from "@panda/types";
import type { HTMLAttributes } from "react";

export interface ChartTitleProps
  extends Omit<
      HTMLAttributes<HTMLHeadingElement>,
      "color" | "content" | "translate"
    >,
    SystemStyleObject {}

export const ChartTitle = ({
  children,
  ...props
}: ChartTitleProps) => (
  <panda.h3
    fontSize="lg"
    fontWeight="bold"
    mt={{ base: "12", md: "16" }}
    {...props}
  >
    {children}
  </panda.h3>
);
