import type { ReactNode } from "react";

import PolymorphGrid from "./PolymorphGrid";

export interface BodyProps {
  children: ReactNode;
}

const Body = ({ children }: BodyProps) => {
  return (
    <PolymorphGrid
      as="body"
      className="bg-white text-lg text-gray-800 antialiased [&_*]:transition-all [&_.recharts-legend-item]:text-sm [&_.recharts-tooltip-item]:!p-0 [&_.recharts-tooltip-item]:!text-sm [&_.recharts-tooltip-label]:text-sm [&_.recharts-tooltip-label]:font-bold"
    >
      {children}
    </PolymorphGrid>
  );
};

export default Body;
