import type { BoxProps } from "@panda/jsx";
import { panda } from "@panda/jsx";

export interface MainProps extends BoxProps {}

export const Main = ({ children, ...props }: MainProps) => (
  <panda.main p={{ base: "4", md: "6" }} {...props}>
    {children}
  </panda.main>
);
