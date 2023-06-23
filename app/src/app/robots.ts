import { metadata } from "@src/lib";

const robots = () => ({
  rules: [
    {
      userAgent: "*"
    }
  ],
  sitemap: `${metadata.openGraph.url}/sitemap.xml`,
  host: metadata.openGraph.url
});

export default robots;
