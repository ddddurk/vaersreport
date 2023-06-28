import { panda } from "@panda/jsx";
import type { SystemStyleObject } from "@panda/types";
import type { HTMLAttributes } from "react";

export interface TitleProps
  extends Omit<
      HTMLAttributes<HTMLHeadingElement>,
      "color" | "content" | "translate"
    >,
    SystemStyleObject {}

export const Title = ({ children, ...props }: TitleProps) => (
  <panda.h1
    fontSize={{ base: "2xl", md: "3xl" }}
    fontWeight="bold"
    mt={{ base: "24", md: "36" }}
    {...props}
  >
    {children}
  </panda.h1>
);
