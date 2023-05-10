import "tailwindcss/tailwind.css";

import {
  Filters,
  Footer,
  Navigation,
  PolymorphGrid
} from "@components";
import { metadata as libMetadata } from "@lib";
import type { ReactNode } from "react";

export const metadata = libMetadata;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <PolymorphGrid
        as="body"
        className="bg-white text-lg text-gray-800 antialiased [&_*]:transition-all [&_.recharts-legend-item]:text-sm [&_.recharts-tooltip-item]:!p-0 [&_.recharts-tooltip-item]:!text-sm [&_.recharts-tooltip-label]:text-sm [&_.recharts-tooltip-label]:font-bold"
      >
        <Navigation />
        <Filters />
        <PolymorphGrid as="main" className="px-6">
          {children}
        </PolymorphGrid>
        <Footer />
      </PolymorphGrid>
    </html>
  );
};

export default Layout;
