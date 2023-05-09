import "tailwindcss/tailwind.css";

import type { NextLayout } from "@types";

const Layout = ({ children }: NextLayout) => {
  return (
    <html lang="en">
      <body className="grid grid-cols-[1fr,min(56.25rem,100%),1fr] p-6 text-lg text-gray-800 antialiased [&>*]:col-start-2 [&_.recharts-default-legend]:!ml-[100px] [&_.recharts-default-legend]:text-sm [&_.recharts-responsive-container]:max-w-[900px] [&_.recharts-tooltip-item]:!p-0 [&_.recharts-tooltip-label]:!mt-0 [&_.recharts-tooltip-label]:pb-1 [&_.recharts-tooltip-label]:!text-left [&_.recharts-tooltip-label]:font-bold [&_.recharts-tooltip-wrapper_*]:text-sm">
        {children}
      </body>
    </html>
  );
};

export default Layout;
