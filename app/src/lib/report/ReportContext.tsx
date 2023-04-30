import workspaceData from "@workspace/data";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

type ReportContext = {
  data: Partial<typeof workspaceData> | undefined;
  filters: {
    year: string | undefined;
  };
  setFilter: (filter: "year", value: string) => void;
};

const defaultReportContext: ReportContext = {
  data: undefined,
  filters: {
    year: undefined
  },
  setFilter: (filter: "year", value: string) => {}
};

const reportContext = createContext(defaultReportContext);

export const ReportContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const { query } = useRouter();

  const [data, setData] = useState(undefined);
  const [year, setYear] = useState(undefined);

  const filters = { year };

  const setFilter = (filter: "year", value: string) => {
    if (filter === "year") setYear(value);
  };

  useEffect(() => {
    console.log(filters);

    if (filters.year) setData(workspaceData.years[filters.year]);
    else setData(workspaceData.all);
  }, [filters]);

  return (
    <reportContext.Provider value={{ data, filters, setFilter }}>
      {children}
    </reportContext.Provider>
  );
};

export const useReportContext = () => useContext(reportContext);
