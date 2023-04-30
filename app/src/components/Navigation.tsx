import Link from "next/link";

const links = [
  { href: "/about", text: "About" },
  { href: "/faq", text: "FAQ" }
];

export const Navigation = () => {
  return (
    <header className="flex justify-center bg-blue-500 px-6 py-2 text-white">
      <nav className="flex w-full max-w-5xl justify-between space-x-6">
        <Link
          className="flex items-end space-x-2 font-mono"
          href="/"
        >
          <span className="text-3xl font-extrabold">VAERS</span>
          <span className="text-lg font-light">Report</span>
        </Link>
        <ul className="flex items-center space-x-4">
          {links.map(({ text, ...props }) => (
            <li key={text}>
              <Link className="hover:underline" {...props}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
