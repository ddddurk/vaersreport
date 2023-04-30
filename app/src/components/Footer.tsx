import Link from "next/link";

const links = [
  { href: "/about", text: "About" },
  { href: "/faq", text: "FAQ" },
  {
    href: "https://github.com/ddddurk/vaersreport",
    target: "_blank",
    text: "GitHub"
  },
  {
    href: "/about",
    target: "https://vaers.hhs.gov",
    text: "VAERS"
  }
];

export const Footer = () => {
  return (
    <footer className="flex justify-center px-6 py-16 text-gray-600">
      <div className="flex w-full max-w-5xl flex-col items-center justify-between space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        <div className="flex items-center space-x-6">
          {links.map(({ text, ...props }) => (
            <Link
              className="hover:text-gray-800 hover:underline"
              {...props}
            >
              {text}
            </Link>
          ))}
        </div>
        <span className="text-sm">
          Made by&nbsp;
          <Link
            className="hover:text-gray-800 hover:underline"
            href="https://ddddurk.com"
            target="_blank"
          >
            ddddurk
          </Link>
        </span>
      </div>
    </footer>
  );
};
