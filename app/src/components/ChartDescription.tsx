import type { ReactNode } from "react";

export interface ChartDescriptionProps {
  children: ReactNode;
}

const ChartDescription = ({
  children
}: ChartDescriptionProps) => {
  return <p className="mt-8 text-center text-lg">{children}</p>;
};

export default ChartDescription;
