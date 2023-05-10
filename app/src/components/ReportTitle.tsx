import type { ReactNode } from "react";

export interface ReportTitleProps {
  children: ReactNode;
}

const ReportTitle = ({ children }: ReportTitleProps) => {
  return (
    <h1 className="mt-24 text-center text-3xl font-bold">
      {children}
    </h1>
  );
};

export default ReportTitle;
