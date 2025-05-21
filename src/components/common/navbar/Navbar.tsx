"use client";

import styles from "./styles/Navbar.module.scss";
import {
  burgerIcon,
  closeIcon,
  favouriteIcon,
  movieIcon,
  searchIcon,
} from "../../../utils/icons";
import NavLink from "./NavLink";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLUListElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleLinkClick = () => {
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
      if (contentRef.current) {
        contentRef.current.style.height = "auto";
      }
      return;
    }

    if (contentRef.current) {
      contentRef.current.style.height = "auto";
      const scrollHeight = contentRef.current.scrollHeight;
      setContentHeight(scrollHeight);

      contentRef.current.style.maxHeight = isOpen ? `${scrollHeight}px` : "0px";
    }
  }, [isMobile, isOpen]);

  return (
    <header className={styles.navbar}>
      <div className={`${styles.navbar__content} container`}>
        <h4 className={styles.navbar__logo}>
          <Link href="/" aria-label="Movies App - Home page">
            Movies App
          </Link>
        </h4>
        {isMobile && (
          <button
            className={styles.navbar__burger}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="main-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span aria-hidden="true">{isOpen ? closeIcon : burgerIcon}</span>
          </button>
        )}

        <nav
          aria-label="Main navigation"
          role="navigation"
          id="main-nav"
          className={`${styles.navbar__nav}`}
          ref={contentRef}
          style={{
            maxHeight: isMobile ? (isOpen ? `${contentHeight}px` : "0px") : "auto",
          }}
        >
          <ul
            className={`${styles.navbar__links}`}
          >
            <NavLink
              href="/"
              className={styles.navbar__links__item}
              onClick={handleLinkClick}
            >
              <span aria-hidden="true">{movieIcon}</span>
              <span>Home</span>
            </NavLink>
            <NavLink
              href="/search"
              className={styles.navbar__links__item}
              onClick={handleLinkClick}
            >
              <span aria-hidden="true">{searchIcon}</span>
              <span>Search</span>
            </NavLink>
            <NavLink
              href="/favourite"
              className={styles.navbar__links__item}
              onClick={handleLinkClick}
            >
              <span aria-hidden="true">{favouriteIcon}</span>
              <span>Favourite</span>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
