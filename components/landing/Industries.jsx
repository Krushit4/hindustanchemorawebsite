import React from "react";

const INDUSTRIES = [
  "Pharmaceuticals",
  "Agrochemicals",
  "Food & Beverage",
  "Cosmetics",
  "Textiles",
  "Automotive",
  "Oil & Gas",
  "Construction",
  "Electronics",
  "Paints & Coatings",
  "Water Treatment",
  "Research Labs",
];

export default function Industries() {
  const row = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section id="industries" data-testid="industries-section" className="relative py-24 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-14">
        <div className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-bold mb-4 text-center">
          Industries Served
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white font-medium text-center">
          Trusted across <span className="gold-gradient-text">twelve</span> critical sectors
        </h2>
      </div>

      <div className="relative">
        {/* fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink-900 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink-900 to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap" data-testid="industries-marquee">
          {row.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="inline-flex items-center gap-6 mx-10 py-4"
            >
              <span className="font-heading text-4xl md:text-6xl text-transparent tracking-tight font-semibold"
                    style={{ WebkitTextStroke: '1px rgba(212,175,55,0.45)' }}>
                {name}
              </span>
              <span className="w-2.5 h-2.5 rotate-45 bg-gold-400/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
