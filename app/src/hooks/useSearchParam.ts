import {
  usePathname,
  useRouter,
  useSearchParams
} from "next/navigation";
import { useEffect, useState } from "react";

export const useSearchParam = <T extends string>(
  key: string
): [T | undefined, (value: string | undefined) => void] => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [state, setState] = useState<T>();

  const updateSearchParam = (value: string | undefined) => {
    const updatedSearchParams = new URLSearchParams(
      // @ts-ignore
      searchParams
    );

    if (value) updatedSearchParams.set(key, value);
    else updatedSearchParams.delete(key);

    return router.push(
      `${pathname}?${updatedSearchParams.toString()}`
    );
  };

  useEffect(() => {
    if (searchParams[key]) setState(searchParams[key]);
  }, []);

  useEffect(() => {
    if (searchParams.has(key) && searchParams.get(key) !== state)
      setState(searchParams.get(key) as T);
    else if (state && !searchParams.has(key))
      setState(undefined);
  }, [searchParams]);

  return [state, updateSearchParam];
};
