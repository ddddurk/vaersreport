import { panda } from "@panda/jsx";
import type { SystemStyleObject } from "@panda/types";
import type { HTMLAttributes } from "react";

export interface ReportTitleProps
  extends Omit<
      HTMLAttributes<HTMLHeadingElement>,
      "color" | "content" | "translate"
    >,
    SystemStyleObject {}

export const ReportTitle = ({
  children,
  ...props
}: ReportTitleProps) => (
  <panda.h1
    fontSize="3xl"
    fontWeight="bold"
    mt="32"
    textAlign="center"
    {...props}
  >
    {children}
  </panda.h1>
);
