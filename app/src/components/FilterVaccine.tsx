import { useApi } from "@src/hooks";
import { setParams, useParams } from "@src/lib";

import { Select } from "./Select";

export const FilterVaccine = () => {
  const { data } = useApi();

  const { vaccine } = useParams();

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
        ...data.list.vax.type.map((vaccine: string) => ({
          label: vaccine,
          value: vaccine
        }))
      ]}
    />
  );
};
