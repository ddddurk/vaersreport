import BackToTopButton from "./BackToTopButton";
import PolymorphGrid from "./PolymorphGrid";
import PolymorphUnderline from "./PolymorphUnderline";

const Footer = () => {
  return (
    <PolymorphGrid
      as="footer"
      className="!col-span-3 !col-start-1 mt-48 bg-gray-100 px-6 pt-[4px] text-base font-bold"
    >
      <ul className="grid grid-cols-[1fr,auto] gap-x-6">
        <li>
          <PolymorphUnderline
            className="w-fit"
            href="https://github.com/ddddurk"
            target="_blank"
          >
            Built by ddddurk
          </PolymorphUnderline>
        </li>
        <li>
          <BackToTopButton />
        </li>
      </ul>
    </PolymorphGrid>
  );
};

export default Footer;
