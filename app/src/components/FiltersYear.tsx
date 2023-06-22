"use client";

import { years } from "@lib";
import type { Year } from "@types";
import { useParams, useRouter } from "next/navigation";

import { Select } from "./Select";

export const FiltersYear = () => {
  const { year } = useParams() as { year: undefined | Year };
  const router = useRouter();

  return (
    <Select
      defaultValue={{
        label: year || "All Years",
        value: year || "All Years"
      }}
      onChange={(option) =>
        router.push(
          `/${option.value === "All Years" ? "" : option.value}`
        )
      }
      options={["All Years", ...years]}
    />
  );
};
