import { css } from "@panda/css";
import { panda } from "@panda/jsx";
import type { SystemStyleObject } from "@panda/types";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { ReactNode } from "react";

import { Pill } from "./ddddurkUi";

interface FooterLinkProps extends SystemStyleObject {
  href: string;
  children: ReactNode;
}

export const FooterLink = ({
  children,
  href,
  ...props
}: FooterLinkProps) => (
  <panda.a href={href} target="_blank">
    <Pill
      className={css({
        alignItems: "center",
        color: "gray.500",
        display: "flex",
        fontSize: { base: "sm", md: "inherit" },
        gap: "2",
        justifyContent: "space-between",
        _hover: { color: "inherit" },
        ...props
      })}
      type="hover"
    >
      <span>{children}</span>
      <IconArrowUpRight size={16} />
    </Pill>
  </panda.a>
);
