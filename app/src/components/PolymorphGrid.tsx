import { polymorph } from "@dddstack/polymorph-react";
import clsx from "clsx";
import type { HTMLAttributes } from "react";

const PolymorphGrid = polymorph(
  ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => ({
    className: clsx(
      "grid grid-cols-[1fr,min(56.25rem,100%),1fr] [&>*]:col-start-2",
      className
    ),
    ...props
  })
)("div");

export default PolymorphGrid;
