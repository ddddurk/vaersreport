"use client";

import { buildReport } from "@lib";
import type { Year } from "@types";
import { useParams } from "next/navigation";

import { Part } from "./charts";

const Report = () => {
  const { year } = useParams() as { year: undefined | Year };

  return (
    <>
      {buildReport(year).map((part) => (
        <Part key={part.title} {...part} />
      ))}
    </>
  );
};

export default Report;
