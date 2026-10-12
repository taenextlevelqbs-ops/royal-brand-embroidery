"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#work", label: "The workroom" },
  { href: "#pricing", label: "Quotes" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#main-content" aria-label="Royal Brand Embroidery home">
          <span className="wordmark-seal" aria-hidden="true">RB</span>
          <span className="wordmark-copy">
            <strong>Royal Brand</strong>
            <small>Embroidery</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" className={menuOpen ? "menu-icon is-open" : "menu-icon"}>
            <span />
            <span />
          </span>
        </button>

        <nav
          className={menuOpen ? "primary-navigation is-open" : "primary-navigation"}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="header-quote" href="#quote" onClick={() => setMenuOpen(false)}>
            Start a quote <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
