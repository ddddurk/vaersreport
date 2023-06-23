import { Report } from "@src/components";
import { years } from "@src/lib";
import type { NextPage } from "next";

export const generateStaticParams = async () =>
  years.map((year) => ({ year }));

export const generateMetadata = async ({ params }) => ({
  title: params.year
});

const Page: NextPage = () => <Report />;

export default Page;
