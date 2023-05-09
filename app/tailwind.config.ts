import ddddurkColors from "@ddddurk/colors/colors/colors.json";
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      blue: ddddurkColors.blue,
      gray: ddddurkColors.gray,
      white: ddddurkColors.white.white
    }
  }
};

export default config;
