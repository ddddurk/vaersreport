"use client";

import { PolymorhUnderline } from "@components";
import { HiArrowUp } from "react-icons/hi2";

const BackToTopButton = () => {
  return (
    <PolymorhUnderline
      as="button"
      className="grid grid-cols-[auto,auto] items-center space-x-2"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    >
      <span>Top</span>
      <HiArrowUp />
    </PolymorhUnderline>
  );
};

export default BackToTopButton;
