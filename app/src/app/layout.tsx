import "../index.css";

import { Filters, Footer, Main } from "@src/components";
import { metadata as libMetadata } from "@src/lib";
import type { ReactNode } from "react";

export const metadata = libMetadata;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Main>
          <Filters />
          {children}
          <Footer />
        </Main>
      </body>
    </html>
  );
};

export default Layout;
