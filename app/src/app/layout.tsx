import type { NextLayout } from "@types";

const Layout = ({ children }: NextLayout) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
