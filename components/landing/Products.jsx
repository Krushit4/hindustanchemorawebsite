"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowUpRight, FlaskConical, Beaker, Package, Box, Sparkles, TestTube } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const CHEM_IMG = "https://static.prod-images.emergentagent.com/jobs/60526401-9479-4dd9-a31f-26713747bc5e/images/08864ede0c245a2878a69d83eafca6ae0691151d9d5962482b79343f421a3261.png";
const PKG_IMG = "https://static.prod-images.emergentagent.com/jobs/60526401-9479-4dd9-a31f-26713747bc5e/images/9c3144dc14186c17fd35cfa6917d601289557d9c0a4802d772d2f9b73a6f0584.png";

const ICONS = {
  "industrial-chemicals": FlaskConical,
  "specialty-chemicals": Beaker,
  "packaging-films": Sparkles,
  "industrial-drums": Package,
  "custom-packaging": Box,
  "laboratory-reagents": TestTube,
};

const IMAGES = {
  Chemicals: CHEM_IMG,
  Packaging: PKG_IMG,
};

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    axios
      .get(`${API}/products`)
      .then((res) => {
        if (mounted) setProducts(res.data);
      })
      .catch((e) => console.error("Failed to load products", e))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="products" data-testid="products-section" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-bold mb-4">
            Our Portfolio
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white font-medium">
            A complete range of <span className="gold-gradient-text">chemicals & packaging</span>
          </h2>
          <p className="mt-6 text-neutral-400 leading-relaxed">
            Six specialized product lines — engineered in-house, audited by international
            standards and supplied to factories, laboratories and brands worldwide.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="products-loading">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-[420px] bg-ink-800 animate-pulse border border-ink-600" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, idx) => {
              const Icon = ICONS[p.id] || FlaskConical;
              const img = IMAGES[p.category] || CHEM_IMG;
              return (
                <article
                  key={p.id}
                  data-testid={`product-card-${p.id}`}
                  className="group card-gold-border bg-ink-800 border border-ink-600 overflow-hidden flex flex-col"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="relative h-52 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/40 to-transparent" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-black/60 backdrop-blur border border-gold-400/30 px-3 py-1">
                      <Icon size={12} className="text-gold-400" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold">
                        {p.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-7 flex flex-col">
                    <h3 className="font-heading text-xl text-white font-medium tracking-tight">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-sm text-neutral-400 leading-relaxed flex-1">
                      {p.description}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {p.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-neutral-300">
                          <span className="w-1 h-1 bg-gold-400 rounded-full" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      data-testid={`product-inquire-${p.id}`}
                      className="mt-7 inline-flex items-center justify-between text-sm text-gold-400 group-hover:text-gold-300 border-t border-ink-600 pt-4"
                    >
                      <span>Inquire about this product</span>
                      <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
