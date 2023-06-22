import { panda } from "@panda/jsx";
import type { SystemStyleObject } from "@panda/types";
import type { HTMLAttributes } from "react";

export interface ChartDescriptionProps
  extends Omit<
      HTMLAttributes<HTMLParagraphElement>,
      "color" | "content" | "translate"
    >,
    SystemStyleObject {}

export const ChartDescription = ({
  children,
  ...props
}: ChartDescriptionProps) => (
  <panda.p fontSize="lg" mt="8" textAlign="center" {...props}>
    {children}
  </panda.p>
);
