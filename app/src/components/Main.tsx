import type { ReactNode } from "react";

import PolymorphGrid from "./PolymorphGrid";

export interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <PolymorphGrid as="main" className="px-6">
      {children}
    </PolymorphGrid>
  );
};

export default Main;
