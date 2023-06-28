import { panda } from "@panda/jsx";
import type { SystemStyleObject } from "@panda/types";
import type { HTMLAttributes } from "react";

export interface MainProps
  extends Omit<
      HTMLAttributes<HTMLHeadingElement>,
      "color" | "content" | "translate"
    >,
    SystemStyleObject {}

export const Main = ({ children, ...props }: MainProps) => (
  <panda.main
    alignItems="center"
    display="flex"
    flexDir="column"
    p="4"
    {...props}
  >
    {children}
  </panda.main>
);
