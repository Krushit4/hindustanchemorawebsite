import React from "react";
import { Quote } from "lucide-react";

const TEXTURE_BG = "https://static.prod-images.emergentagent.com/jobs/60526401-9479-4dd9-a31f-26713747bc5e/images/3075f8aa2d08dd69142051dae1af9b479b3422f2d5c729266592d91f37c3b962.png";

const STATEMENTS = [
  "At Hindustan Chemora, we believe that trust is the foundation of every successful business.",
  "Our focus is to deliver high-quality chemical and packaging products with transparency, consistency and reliability.",
  "Every batch we ship carries our personal commitment — to specification, to schedule and to service.",
  "We are building long-term partnerships, not one-time transactions.",
];

export default function FounderMessage() {
  return (
    <section
      id="founder"
      data-testid="founder-section"
      className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
    >
      {/* subtle texture */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: `url(${TEXTURE_BG})` }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-900/95 to-ink-900" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
        {/* Left — portrait / monogram */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <div className="relative aspect-[4/5] max-w-sm bg-ink-800 border border-ink-600 overflow-hidden group">
              {/* Monogram card */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, rgba(212,175,55,0.25), transparent 60%)",
                  }}
                />
                <div className="relative w-28 h-28 border border-gold-400/60 flex items-center justify-center mb-6">
                  <div className="absolute inset-2 border border-gold-400/20" />
                  <span className="font-heading text-5xl gold-gradient-text font-medium tracking-tight">
                    KD
                  </span>
                </div>
                <div
                  className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-semibold"
                  data-testid="founder-monogram-label"
                >
                  Founder
                </div>
              </div>
              {/* gold corner marks */}
              <span className="absolute top-3 left-3 w-6 h-px bg-gold-400/70" />
              <span className="absolute top-3 left-3 w-px h-6 bg-gold-400/70" />
              <span className="absolute bottom-3 right-3 w-6 h-px bg-gold-400/70" />
              <span className="absolute bottom-3 right-3 w-px h-6 bg-gold-400/70" />
            </div>

            <div className="mt-8 max-w-sm">
              <div
                className="font-heading text-2xl text-white font-medium tracking-tight"
                data-testid="founder-name"
              >
                Krushit Doshi
              </div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold mt-1">
                Founder
              </div>
              <div className="thin-rule my-5" />
              <div className="text-sm text-neutral-500 italic">
                Signed,
                <span
                  className="block font-heading not-italic text-xl text-neutral-300 mt-1"
                  style={{ fontFamily: "'Dancing Script', 'Caveat', cursive" }}
                >
                  Krushit Doshi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right — message */}
        <div className="lg:col-span-8">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-bold mb-4">
            Founder's Message
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white font-medium">
            A note from <span className="gold-gradient-text">the founder.</span>
          </h2>

          <div className="mt-10 relative">
            <Quote
              size={64}
              strokeWidth={1}
              className="absolute -top-4 -left-2 text-gold-400/15"
              aria-hidden
            />
            <div
              className="relative space-y-6 pl-6 border-l border-gold-400/30"
              data-testid="founder-message-body"
            >
              {STATEMENTS.map((line, idx) => (
                <p
                  key={idx}
                  data-testid={`founder-statement-${idx}`}
                  className="text-base md:text-lg text-neutral-300 leading-relaxed first:text-white first:text-lg md:first:text-xl first:font-medium"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-gold-400/50 to-transparent" />
            <a
              href="#contact"
              data-testid="founder-cta"
              className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold hover:text-gold-300 transition-colors"
            >
              Talk to our team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}