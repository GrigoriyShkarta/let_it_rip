"use client";

import { useState, useEffect } from "react";
import styles from "./Navigation.module.css";

const links = [
  { label: "Кому підійде", href: "#for-whom" },
  { label: "Що входить", href: "#what-includes" },
  { label: "Програма", href: "#program" },
  { label: "Автор", href: "#about" },
  { label: "Відгуки", href: "#reviews" },
  { label: "Тарифи", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a
          className={styles.logo}
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#hero");
          }}
        >
          LET IT RIP
        </a>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a
                className={styles.link}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(l.href);
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
