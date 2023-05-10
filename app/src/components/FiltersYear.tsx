import { years } from "@lib";
import type { Year } from "@types";
import { useParams, useRouter } from "next/navigation";

import Select from "./Select";

const FiltersYear = () => {
  const { year } = useParams() as { year: undefined | Year };
  const router = useRouter();

  return (
    <Select
      className="font-bold"
      onChange={(event) =>
        router.push(
          `/${
            event.target.value !== "all"
              ? event.target.value
              : ""
          }`
        )
      }
      value={year || "all"}
    >
      <option value="all">All Years</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </Select>
  );
};

export default FiltersYear;
