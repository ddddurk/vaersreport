"use client";

import dataJSON from "@data";
import { useSearchParam } from "@hooks";
import type { Data, Month, Year } from "@types";
import type { ReactNode } from "react";
import {
  createContext,
  useContext as reactUseContext,
  useEffect,
  useState
} from "react";

interface ContextType {
  data: Data | undefined;
  month: Month | undefined;
  setMonth: (month: Month) => void;
  setYear: (year: Year) => void;
  year: Year | undefined;
}

const defaultContext: ContextType = {
  data: undefined,
  month: undefined,
  setMonth: (month: Month) => {},
  setYear: (year: Year) => {},
  year: undefined
};

const context = createContext<ContextType>(defaultContext);

export const ContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [month, setMonth] = useSearchParam<Month>("month");
  const [year, setYear] = useSearchParam<Year>("year");

  const [data, setData] = useState<Data>();

  console.log({ data, month, setMonth, setYear, year });

  useEffect(() => {
    if (month) {
      if (year) setData(dataJSON.years[year][month]);
      else setData(dataJSON.all[month]);
    } else if (year) setData(dataJSON.years[year]);
    else setData(dataJSON.all);
  }, [month, year]);

  return (
    <context.Provider
      value={{ data, month, setMonth, setYear, year }}
    >
      {children}
    </context.Provider>
  );
};

export const useContext = () => reactUseContext(context);
