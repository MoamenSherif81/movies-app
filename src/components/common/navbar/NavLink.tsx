"use client";

import { usePathname } from "next/navigation";
import React from "react";
import styles from "./styles/Navbar.module.scss";
import Link from "next/link";

interface INavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className }: INavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li aria-current={isActive ? "page" : undefined}>
      <Link
        className={`${className || ""} ${isActive ? styles.active : ""}`}
        href={href}
      >
        {children}
      </Link>
    </li>
  );
}
