"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  children?: React.ReactNode;
};

const Navlink = ({ href, children }: Props) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`rounded-md text-gray-300 ${
        href === path ? "bg-zinc-800 text-white" : "text-gray-400"
      }`}
    >
      {children}
    </Link>
  );
};

export default Navlink;
