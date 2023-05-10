import { metadata } from "@lib";

const robots = () => ({
  rules: [
    {
      userAgent: "*"
    }
  ],
  sitemap: `${metadata.openGraph.url}sitemap.xml`,
  host: metadata.openGraph.url
});

export default robots;
