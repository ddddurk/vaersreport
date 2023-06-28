import { getData, setParams, useParams } from "@src/lib";

import { Select } from "./Select";

export const FilterVaccine = () => {
  const { vaccine } = useParams();

  const data = getData();

  return (
    <Select
      defaultValue={{
        label: vaccine || "All",
        value: vaccine || "All"
      }}
      onChange={(option) =>
        setParams("vaccine", option?.value || "All")
      }
      options={[
        { label: "All", value: "All" },
        ...data.vaccines.map((vaccine: string) => ({
          label: vaccine,
          value: vaccine
        }))
      ]}
    />
  );
};
