
import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

const HERO_BG = "https://static.prod-images.emergentagent.com/jobs/60526401-9479-4dd9-a31f-26713747bc5e/images/f245e216367ae06d5c5a4a2a602a4a95e7ffe05b9fa7722c69874fc00a2f3a01.png";

export default function Hero() {
  return (
    <section id="top" data-testid="hero-section" className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark gradient overlay */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      <div aria-hidden className="absolute inset-0 hero-radial" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-32 pb-20">
        <div className="max-w-3xl animate-fade-up">
          

          <h1 className="font-heading text-white font-medium text-4xl sm:text-5xl lg:text-7xl tracking-tighter leading-[1.02]">
            Premium Chemicals
            <br />
            <span className="gold-shimmer">& Engineered Packaging</span>
          </h1>

          <p className="mt-8 text-neutral-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Hindustan Chemora Industries provides high-purity industrial chemicals
            and precision packaging solutions for the world's most demanding brands —
            delivered with uncompromising quality and global compliance.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#contact"
              data-testid="hero-cta-primary"
              className="group inline-flex items-center gap-3 bg-gold-400 hover:bg-gold-300 text-black font-medium px-7 py-4 rounded-sm transition-all"
            >
              Request a Quote
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#products"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center gap-3 border border-gold-400/50 text-gold-400 hover:bg-gold-400/10 font-medium px-7 py-4 rounded-sm transition-colors"
            >
              Explore Products
            </a>
          </div>

          {/* Mini KPI strip */}
          <div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl">
            {[
              { k: "20+", v: "Years of Excellence" },
              { k: "40+", v: "Countries Served" },
              { k: "99.9%", v: "Purity Standard" },
            ].map((it) => (
              <div key={it.v} className="border-l border-gold-400/30 pl-4" data-testid={`hero-kpi-${it.k}`}>
                <div className="font-heading text-2xl lg:text-3xl gold-gradient-text font-semibold">{it.k}</div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-neutral-400 mt-1">{it.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div aria-hidden className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500 text-xs tracking-[0.3em] uppercase">
        Scroll
      </div>
    </section>
  );
}
