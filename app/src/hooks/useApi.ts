import { useParams } from "@src/lib";
import { useQuery } from "@tanstack/react-query";

const DEV_API = "http://localhost:3001";
const PROD_API = "https://api.vaersreport.com";

const API_URL =
  import.meta.env.MODE === "development" ? DEV_API : PROD_API;

export const useApi = () => {
  const { params, vaccine, year } = useParams();

  return useQuery({
    queryFn: () =>
      fetch(`${API_URL}?${params.toString()}`).then((res) =>
        res.json()
      ),
    queryKey: [vaccine, year]
  });
};
