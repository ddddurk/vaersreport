import data from "../../../data/data.json";
import { useParams } from "./params";

export const getData = (): any => {
  const { vaccine, year } = useParams();

  const years = data["years" as keyof typeof data];

  if (!vaccine && !year)
    return {
      years,
      ...(data["all" as keyof typeof data] as object)
    };

  return {
    years,
    ...(data[
      `${vaccine || ""}${year || ""}` as keyof typeof data
    ] as object)
  };
};
