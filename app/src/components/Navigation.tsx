"use client";

import { usePathname } from "next/navigation";

import PolymorphGrid from "./PolymorphGrid";
import PolymorhUnderline from "./PolymorphUnderline";

const links = {
  external: [
    {
      href: "https://github.com/ddddurk/vaersreport",
      text: "GitHub"
    },
    { href: "https://vaers.hhs.gov/index.html", text: "VAERS" }
  ],
  internal: [{ href: "/", text: "Report" }]
};

const Navigation = () => {
  const pathname = usePathname();

  return (
    <PolymorphGrid
      as="nav"
      className="!col-span-3 !col-start-1 bg-gray-100 px-6 pt-[4px] text-base font-bold"
    >
      <div className="flex items-center justify-between space-x-6">
        {Object.keys(links)
          .reverse()
          .map((linksList) => (
            <ul
              className="flex items-center space-x-6"
              key={linksList}
            >
              {links[linksList as keyof typeof links].map(
                ({ text, ...props }) => (
                  <li key={text}>
                    <PolymorhUnderline
                      target={
                        linksList === "external"
                          ? "_blank"
                          : undefined
                      }
                      {...props}
                    >
                      {text}
                    </PolymorhUnderline>
                  </li>
                )
              )}
            </ul>
          ))}
      </div>
    </PolymorphGrid>
  );
};

export default Navigation;
