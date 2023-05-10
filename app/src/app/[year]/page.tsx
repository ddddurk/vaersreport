import { Report } from "@components";
import { years } from "@lib";
import type { NextPage } from "next";

export const generateStaticParams = async () =>
  years.map((year) => ({ year }));

export const generateMetadata = async ({ params }) => ({
  title: params.year
});

const Page: NextPage = () => <Report />;

export default Page;
