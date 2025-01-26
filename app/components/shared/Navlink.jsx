'use client'; 

import Link from "next/link";
import { usePathname } from "next/navigation"; // For client-side path detection

const NavLink = ({ href, children }) => {
  const pathname = usePathname(); // Get the current route's path
  const isActive = pathname === href; // Check if the current route matches the link's href

  return (
    <Link
      href={href}
      className={`m:py-3 py-[0.8rem] capitalize text-sm font-medium border-b-2 md:border-b-4 ${
        isActive ? "text-[#00E676] border-[#00E676]" : "text-black border-transparent"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
