import { cx } from "@panda/css";
import type { BoxProps } from "@panda/jsx";
import { Box, panda } from "@panda/jsx";
import type {
  CardVariantProps,
  HoverVariantProps,
  PillVariantProps
} from "@panda/recipes";
import { card, hover, pill } from "@panda/recipes";
import type { SystemStyleObject } from "@panda/types";
import type { HTMLAttributes } from "react";

export interface CardProps extends BoxProps, CardVariantProps {}

export const Card = ({
  children,
  className,
  type,
  ...props
}: CardProps) => (
  <Box className={cx(card({ type }), className)} {...props}>
    {children}
  </Box>
);

export interface HoverProps
  extends HoverVariantProps,
    Omit<
      HTMLAttributes<HTMLSpanElement>,
      "color" | "content" | "translate"
    >,
    SystemStyleObject {}

export const Hover = ({
  children,
  className,
  ...props
}: HoverProps) => (
  <panda.span className={cx(hover({}), className)} {...props}>
    {children}
  </panda.span>
);

export interface PillProps extends BoxProps, PillVariantProps {}

export const Pill = ({
  children,
  className,
  type,
  ...props
}: PillProps) => (
  <Box className={cx(pill({ type }), className)} {...props}>
    {children}
  </Box>
);
