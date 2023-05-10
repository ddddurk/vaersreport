import type { ReactNode } from "react";

export interface ReportBulletPointProps {
  children: ReactNode;
}

const ReportBulletPoint = ({
  children
}: ReportBulletPointProps) => {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-lg space-x-6">
      <span className="mt-2 h-2 w-2 bg-black" />
      <p>{children}</p>
    </div>
  );
};

export default ReportBulletPoint;