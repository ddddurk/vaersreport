import type { ReactNode } from "react";

export interface ChartCaptionProps {
  children: ReactNode;
}

const ChartCaption = ({ children }: ChartCaptionProps) => {
  return (
    <span className="mt-4 block text-base font-light">
      {children}
    </span>
  );
};

export default ChartCaption;
