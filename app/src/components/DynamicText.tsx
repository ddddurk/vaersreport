import { panda } from "@panda/jsx";
import type { SystemStyleObject } from "@panda/types";
import type { HTMLAttributes } from "react";

export interface DynamicTextProps
  extends Omit<
      HTMLAttributes<HTMLSpanElement>,
      "color" | "content" | "translate"
    >,
    SystemStyleObject {}

export const DynamicText = ({
  children,
  ...props
}: DynamicTextProps) => (
  <panda.span color="blue.600" fontWeight="bold" {...props}>
    {children}
  </panda.span>
);
