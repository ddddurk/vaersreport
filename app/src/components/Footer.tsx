import { panda } from "@panda/jsx";
import { links } from "@src/lib";

import { FooterLink } from "./FooterLink";

export const Footer = () => (
  <panda.footer
    alignItems="center"
    display="grid"
    gap="4"
    gridTemplateColumns={{ base: "2", md: "3" }}
    maxW="2xl"
    mt={{ base: "36", md: "48" }}
    pb="8"
    w="full"
  >
    {[links.ddddurk, links.github, links.vaers].map((link) => (
      <FooterLink href={link.href} key={link.text} w="full">
        {link.text}
      </FooterLink>
    ))}
  </panda.footer>
);
