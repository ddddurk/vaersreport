import { metadata, years } from "@lib";

const sitemap = () =>
  ["", ...years.map((year) => `/${year}`)].map((route) => ({
    url: `${metadata.openGraph.url}/${route}`,
    lastModified: new Date().toISOString().split("T")[0]
  }));

export default sitemap;
