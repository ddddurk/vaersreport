import type { Metadata } from "next";

const description =
  "Accessible data visualization for the CDC's public VAERS data.";
const title = "VAERS Report";
const url = "https://vaersreport.ddddurk.com";

export const metadata: Metadata = {
  description,
  title: {
    default: title,
    template: "%s | VAERS Report"
  },
  openGraph: {
    description,
    images: [
      {
        height: 1080,
        url: `${url}/assets/og.png`,
        width: 1920
      }
    ],
    locale: "en-US",
    siteName: title,
    title,
    type: "website",
    url
  },
  robots: {
    index: true,
    follow: true
  },
  twitter: {
    card: "summary_large_image",
    title
  },
  icons: {
    shortcut: "/favicon/favicon.ico"
  }
};
