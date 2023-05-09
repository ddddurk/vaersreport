import { Report } from "@components";
import { years } from "@lib";
import type { NextPage } from "next";

export const generateStaticParams = async () =>
  years.map((year) => ({ year }));

const Page: NextPage = () => {
  return (
    <>
      <Report />
    </>
  );
};

export default Page;
