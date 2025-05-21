"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

import styles from "./styles/Navbar.module.scss"

interface INavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function NavLink({
  href,
  children,
  className,
  onClick,
}: INavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li aria-current={isActive ? "page" : undefined}>
      <Link
        className={`${className || ""} ${isActive ? styles.active : ""}`}
        href={href}
        aria-current={isActive ? "page" : undefined}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  )
}
