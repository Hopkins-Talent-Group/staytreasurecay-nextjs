"use client";

import { useEffect, useState } from "react";
import Brand from "@/components/Brand";
import { booking, site } from "@/data/site";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function updateHeader() {
      document.body.classList.toggle("at-top", window.scrollY < 30);
      document
        .getElementById("site-header")
        ?.classList.toggle("scrolled", window.scrollY > 40);
    }

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeader);
      document.body.classList.remove("at-top");
    };
  }, []);

  return (
    <header id="site-header">
      <div className="header-inner">
        <Brand />

        <nav className="desktop-nav">
          {site.navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={site.bookCta.href} className="header-book">
          {site.bookCta.label}
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
        {site.navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          href={booking.direct.href}
          className="mobile-book"
          style={{ background: "#0b4149", color: "#fff" }}
          onClick={() => setMenuOpen(false)}
        >
          {booking.direct.withNumber}
        </a>

        <a
          href={site.bookCta.href}
          className="mobile-book"
          onClick={() => setMenuOpen(false)}
        >
          {site.bookCta.label}
        </a>
      </div>
    </header>
  );
}
