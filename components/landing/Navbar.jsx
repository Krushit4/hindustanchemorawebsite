"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20">
        <a
          href="#top"
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 border border-gold-400/60 flex items-center justify-center bg-black/40 group-hover:border-gold-300 transition">
            <span className="font-heading text-gold-400 text-lg font-bold tracking-tight">HC</span>
          </div>
          <div className="leading-tight">
            <div className="font-heading text-sm md:text-base text-white tracking-wide font-semibold">
              HINDUSTAN CHEMORA
            </div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold-400/90">
              Industries
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-neutral-300 hover:text-gold-400 transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 hover:after:w-full after:h-px after:bg-gold-400 after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          data-testid="nav-cta-quote"
          className="hidden lg:inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-300 text-black font-medium text-sm px-5 py-2.5 rounded-sm transition-colors"
        >
          Get a Quote
        </a>

        <button
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-gold-400 border border-gold-400/40 rounded-sm"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
              className="text-neutral-200 hover:text-gold-400 py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            data-testid="mobile-cta-quote"
            className="mt-2 bg-gold-400 text-black font-medium text-sm px-5 py-3 rounded-sm text-center"
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
