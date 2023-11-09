import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 mb-5 border-b h-14 items-center px-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className="text-zinc-500 hover:text-black transition-colors"
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
