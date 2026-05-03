
import React from "react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative border-t border-ink-600 bg-ink-900 pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-gold-400/60 flex items-center justify-center bg-black">
                <span className="font-heading text-gold-400 text-lg font-bold">HC</span>
              </div>
              <div>
                <div className="font-heading text-white font-semibold tracking-wide">HINDUSTAN CHEMORA</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold-400/90">Industries</div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Provider of premium industrial chemicals and precision packaging — serving
              forty-plus countries with ISO-certified quality and uncompromising craftsmanship.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Facebook].map((I, idx) => (
                <a
                  key={idx}
                  href="#"
                  data-testid={`social-${idx}`}
                  className="w-9 h-9 border border-ink-600 hover:border-gold-400 hover:text-gold-400 text-neutral-400 flex items-center justify-center transition"
                  aria-label="Social link"
                >
                  <I size={15} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Products" items={["Industrial Chemicals", "Specialty Chemicals", "Packaging Films", "Drums & Containers", "Custom Packaging"]} />
          <FooterCol title="Company" items={["About Us", "Manufacturing", "Certifications", "Sustainability", "Careers"]} />
          <FooterCol title="Contact" items={["sales@hindustanchemora.in", "+91 9004776905", "Mumbai · Global", "Global Distribution"]} />
        </div>

        <div className="thin-rule my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <div>© {new Date().getFullYear()} Hindustan Chemora Industries. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold-400 transition">Privacy</a>
            <a href="#" className="hover:text-gold-400 transition">Terms</a>
            <a href="#" className="hover:text-gold-400 transition">MSDS</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-bold mb-5">{title}</div>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it} className="text-sm text-neutral-400 hover:text-white transition cursor-pointer">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}