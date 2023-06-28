import { API_URL, useParams } from "@src/lib";
import { useQuery } from "@tanstack/react-query";

export const useData = () => {
  const { params, year } = useParams();

  return useQuery({
    queryKey: ["data", year],
    queryFn: () =>
      fetch(`${API_URL}?${params.toString()}`).then((res) =>
        res.json()
      )
  });
};
