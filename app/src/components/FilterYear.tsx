import { getData, setParams, useParams } from "@src/lib";

import { Select } from "./Select";

export const FilterYear = () => {
  const { year } = useParams();

  const data = getData();

  return (
    <Select
      defaultValue={{
        label: year || "All",
        value: year || "All"
      }}
      onChange={(option) =>
        setParams("year", option?.value || "All")
      }
      options={[
        { label: "All", value: "All" },
        ...data.years.map((year: string) => ({
          label: year,
          value: year
        }))
      ]}
    />
  );
};
