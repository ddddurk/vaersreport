import { css as pandaCss } from "@panda/css";
import type { SystemStyleObject } from "@panda/types";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { LinkProps } from "next/link";
import Link from "next/link";
import type { ReactNode } from "react";

import { Pill } from "./ddddurkUi";

interface FooterLinkProps extends LinkProps {
  children: ReactNode;
  css?: SystemStyleObject;
}

export const FooterLink = ({
  children,
  css,
  ...props
}: FooterLinkProps) => (
  <Link target="_blank" {...props}>
    <Pill
      className={pandaCss({
        alignItems: "center",
        color: "gray.500",
        display: "flex",
        fontSize: { base: "sm", md: "inherit" },
        gap: "2",
        justifyContent: "space-between",
        _hover: { color: "inherit" },
        ...css
      })}
      type="hover"
    >
      <span>{children}</span>
      <IconArrowUpRight size={16} />
    </Pill>
  </Link>
);
