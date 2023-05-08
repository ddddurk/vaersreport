import { ContextProvider } from "@lib";
import type { NextLayout } from "@types";

const Layout = ({ children }: NextLayout) => (
  <ContextProvider>{children}</ContextProvider>
);

export default Layout;
