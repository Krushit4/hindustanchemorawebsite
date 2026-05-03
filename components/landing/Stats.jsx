
import React from "react";
import { Factory, Globe, ShieldCheck, FlaskConical } from "lucide-react";

const stats = [
  {
    icon: Factory,
    title: "Manufacturing Scale",
    value: "250,000+",
    label: "MT Annual Capacity",
    description: "State-of-the-art production facilities across multiple plants delivering consistent volume and quality.",
  },
  {
    icon: Globe,
    title: "Global Footprint",
    value: "40+",
    label: "Countries",
    description: "Trusted by manufacturers, labs and distribution partners across Asia, Europe, Middle East and Americas.",
  },
];

export default function Stats() {
  return (
    <section id="about" data-testid="about-stats-section" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-bold mb-4">
              About the Company
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white font-medium">
              Engineered for industry.
              <br />
              <span className="gold-gradient-text">Refined for excellence.</span>
            </h2>
          </div>
          <p className="max-w-md text-neutral-400 leading-relaxed text-sm md:text-base">
            From high-purity reagents to industrial-grade packaging, Hindustan Chemora
            has powered manufacturers for over two decades — blending craftsmanship
            with scientific precision at every stage.
          </p>
        </div>

        <div className="thin-rule mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-px bg-ink-600">
          {stats.map((s) => (
            <div
              key={s.title}
              data-testid={`stat-card-${s.title.toLowerCase().replace(/s+/g, "-")}`}
              className="group relative bg-ink-900 p-8 lg:p-10 transition-colors hover:bg-ink-800"
            >
              <s.icon size={28} className="text-gold-400 mb-8" strokeWidth={1.25} />
              <div className="font-heading text-3xl lg:text-4xl text-white font-medium tracking-tight">
                {s.value}
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-gold-400 mt-1">
                {s.label}
              </div>
              <div className="mt-6 text-sm text-neutral-400 leading-relaxed">
                {s.description}
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gold-400 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
