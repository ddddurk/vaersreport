import { Dropdown, DropdownItem } from "@tremor/react";

import { useReportContext, years } from "../../lib";

export const FiltersYear = () => {
  const reportContext = useReportContext();

  return (
    <Dropdown
      className="w-24"
      onValueChange={(value) =>
        reportContext.setFilter("year", value)
      }
      placeholder={reportContext.filters.year ?? "Year"}
      value={reportContext.filters.year}
    >
      {years.map((value) => (
        <DropdownItem
          className="py-2"
          key={value}
          value={value}
          text={value}
        />
      ))}
    </Dropdown>
  );
};
