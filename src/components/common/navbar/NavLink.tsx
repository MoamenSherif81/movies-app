"use client";

import { usePathname } from "next/navigation";
import React from "react";
import styles from "./styles/Navbar.module.scss";

interface INavLinkProps {
  href: string,
  children: React.ReactNode,
  className?: string
}

export default function NavLink({ href, children, className }: INavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  console.log(pathname, href, isActive, "isActive");

  return (
    <li
      className={`${className || ""} ${isActive ? styles.active : ""}`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </li>
  );
}
