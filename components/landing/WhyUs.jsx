import React from "react";
import { Gem, Truck, HeartHandshake, ScanLine, Leaf, Headset } from "lucide-react";

const values = [
  { icon: Gem, title: "Premium Purity", copy: "Raw materials vetted at source. Every batch verified with multi-stage analytical QC before dispatch." },
  { icon: ScanLine, title: "Full Traceability", copy: "Barcoded batch records, certificate of analysis and digital documentation accompany every shipment." },
  { icon: Truck, title: "Global Logistics", copy: "Integrated warehousing and cold-chain ready logistics reaching 40+ countries on schedule." },
  { icon: Leaf, title: "Sustainable Practices", copy: "Low-emission manufacturing, recyclable packaging options and ISO 14001 certified processes." },
  { icon: HeartHandshake, title: "Partnership First", copy: "Long-term supply agreements, transparent pricing and dedicated account managers for every client." },
  { icon: Headset, title: "24 × 7 Support", copy: "Technical experts and commercial teams on call — resolving urgencies before they reach your line." },
];

export default function WhyUs() {
  return (
    <section id="why-us" data-testid="why-us-section" className="relative py-24 md:py-32 px-6 md:px-10 border-y border-ink-600/60 bg-ink-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-bold mb-4">
            Why Choose Us
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white font-medium">
            Precision you can measure. <br className="hidden sm:block" />
            <span className="gold-gradient-text">Trust you can feel.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-600/80">
          {values.map((v) => (
            <div
              key={v.title}
              data-testid={`why-us-${v.title.toLowerCase().replace(/s+/g, "-")}`}
              className="group p-10 bg-ink-900 hover:bg-ink-800 transition-colors relative"
            >
              <div className="w-12 h-12 border border-gold-400/40 flex items-center justify-center mb-6 group-hover:border-gold-300 group-hover:bg-gold-400/5 transition-colors">
                <v.icon size={20} className="text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-lg text-white font-medium">{v.title}</h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{v.copy}</p>
              <div className="absolute top-0 left-0 w-0 h-px group-hover:w-full bg-gold-400/70 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
