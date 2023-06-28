export const getParams = () =>
  new URLSearchParams(window.location.search);

export const setParams = (key: string, value: string) => {
  const query = getParams();

  if (value === "All") query.delete(key);
  else query.set(key, value);

  window.location.search = query.toString();
};

export const useParams = () => {
  const params = getParams();

  return {
    vaccine: params.get("vaccine"),
    year: params.get("year")
  };
};
