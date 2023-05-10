import "tailwindcss/tailwind.css";

import {
  Body,
  Filters,
  Footer,
  Main,
  Navigation
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
      <Body>
        <Navigation />
        <Filters />
        <Main>{children}</Main>
        <Footer />
      </Body>
    </html>
  );
};

export default Layout;
