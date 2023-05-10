import type { ReactNode } from "react";

export interface DynamicTextProps {
  children: ReactNode;
}

const DynamicText = ({ children }: DynamicTextProps) => {
  return (
    <span className="font-bold text-blue-600">{children}</span>
  );
};

export default DynamicText;
