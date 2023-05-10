import type { ReactNode } from "react";

export interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return (
    <h2 className="-mb-16 mt-32 border-b pb-4 text-center text-2xl font-bold">
      {children}
    </h2>
  );
};

export default SectionTitle;
