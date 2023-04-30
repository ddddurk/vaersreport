import { Filters } from "@workspace/components";
import type { NextPage } from "next";

import { ReportContextProvider } from "../lib";

const Report: NextPage = () => {
  return (
    <ReportContextProvider>
      <Filters />
      <main className="h-[200vh]" />
    </ReportContextProvider>
  );
};

export default Report;
