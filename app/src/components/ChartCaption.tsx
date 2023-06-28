import { panda } from "@panda/jsx";
import type { SystemStyleObject } from "@panda/types";
import type { HTMLAttributes } from "react";

export interface ChartCaptionProps
  extends Omit<
      HTMLAttributes<HTMLHeadingElement>,
      "color" | "content" | "translate"
    >,
    SystemStyleObject {}

export const ChartCaption = ({
  children,
  ...props
}: ChartCaptionProps) => (
  <panda.p
    color="gray.600"
    maxW="2xl"
    mt="2"
    w="full"
    {...props}
  >
    {children}
  </panda.p>
);
