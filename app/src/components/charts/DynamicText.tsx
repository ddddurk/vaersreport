"use client";

import type { ReactNode } from "react";

interface DynamicTextProps {
  children: ReactNode;
}

const DynamicText = ({ children }: DynamicTextProps) => {
  return <span>{children}</span>;
};

export default DynamicText;
