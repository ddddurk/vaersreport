import "tailwindcss/tailwind.css";

import { Footer, Navigation } from "@workspace/components";
import type { AppProps } from "next/app";

const App = ({
  Component,
  pageProps
}: AppProps): JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-800">
      <Navigation />
      <main className="flex-1">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
