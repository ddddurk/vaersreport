import type { ReactNode } from "react";

export interface ChartTitleProps {
  children: ReactNode;
}

const ChartTitle = ({ children }: ChartTitleProps) => {
  return <h3 className="mt-16 text-lg font-bold">{children}</h3>;
};

export default ChartTitle;
