"use client";

import { polymorph } from "@dddstack/polymorph-react";
import { years } from "@lib";
import type { Year } from "@types";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import type { AnchorHTMLAttributes } from "react";

const PolymorphUnderline = polymorph(
  ({
    className,
    href,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const pathname = usePathname();
    return {
      className: clsx(
        "block border-b-4 py-2",
        href === pathname ||
          (href === "/" &&
            years.includes(pathname.substring(1) as Year))
          ? "pointer-events-none border-blue-600"
          : "border-[transparent] hover:border-blue-600",
        className
      ),
      href,
      ...props
    };
  }
)("a");

export default PolymorphUnderline;
