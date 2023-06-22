import { panda } from "@panda/jsx";

import { Container } from "./Container";
import { FooterLink } from "./FooterLink";

const links = [
  { href: "https://ddddurk.com", text: "ddddurk" },
  {
    href: "https://github.com/dddvilla/vaersreport",
    text: "GitHub"
  },
  { href: "https://vaers.hhs.gov/index.html", text: "VAERS" }
];

export const Footer = () => (
  <Container
    mb={{ base: "12", md: "16" }}
    mt={{ base: "24", md: "32" }}
  >
    <panda.footer
      alignItems="center"
      display="grid"
      gap="4"
      gridTemplateColumns={{ base: "2", md: "3" }}
    >
      {links.map((link) => (
        <FooterLink
          css={{ w: "full" }}
          href={link.href}
          key={link.text}
        >
          {link.text}
        </FooterLink>
      ))}
    </panda.footer>
  </Container>
);
