"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TEXTURE_BG = "https://static.prod-images.emergentagent.com/jobs/60526401-9479-4dd9-a31f-26713747bc5e/images/3075f8aa2d08dd69142051dae1af9b479b3422f2d5c729266592d91f37c3b962.png";

const PRODUCT_OPTIONS = [
  "Industrial Chemicals",
  "Specialty Chemicals",
  "Packaging Films",
  "Industrial Drums & Containers",
  "Custom Packaging",
  "Laboratory Reagents",
  "Other",
];

const initial = {
  name: "",
  email: "",
  phone: "",
  company: "",
  product_interest: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        ...form,
        phone: form.phone || null,
        company: form.company || null,
        product_interest: form.product_interest || null,
      };
      await axios.post(`${API}/inquiry`, payload);
      toast.success("Inquiry received. Our team will contact you within 24 hours.");
      setSubmitted(true);
      setForm(initial);
    } catch (err) {
      const msg = err?.response?.data?.detail || "Failed to submit. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden">
      {/* texture background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${TEXTURE_BG})` }}
      />
      <div aria-hidden className="absolute inset-0 bg-ink-900/90" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-14">
        {/* Left */}
        <div className="lg:col-span-2">
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold-400 font-bold mb-4">
            Get in Touch
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white font-medium">
            Request a <span className="gold-gradient-text">quote</span> or a specification sheet.
          </h2>
          <p className="mt-6 text-neutral-400 leading-relaxed">
            Share your requirement and our technical sales team will respond within one
            business day with a tailored quotation, specifications and dispatch timeline.
          </p>

          <div className="mt-12 space-y-6">
            <ContactRow icon={Mail} label="Email us" value="sales@hindustanchemora.com" testid="contact-email" />
            <ContactRow icon={Phone} label="Call us" value="+91 22 0000 0000" testid="contact-phone" />
            <ContactRow icon={MapPin} label="Visit" value="Mumbai · Gujarat · Global" testid="contact-location" />
          </div>
        </div>

        {/* Right - Form */}
        <div className="lg:col-span-3 bg-ink-800/80 backdrop-blur border border-ink-600 p-8 md:p-10">
          {submitted ? (
            <div className="py-10 text-center" data-testid="contact-success-state">
              <CheckCircle2 size={56} className="text-gold-400 mx-auto mb-6" strokeWidth={1.25} />
              <h3 className="font-heading text-2xl text-white font-medium">Thank you.</h3>
              <p className="mt-3 text-neutral-400 max-w-md mx-auto">
                Your inquiry has been received. A representative from Hindustan Chemora Industries
                will reach out within 24 hours.
              </p>
              <button
                data-testid="contact-send-another"
                onClick={() => setSubmitted(false)}
                className="mt-8 text-sm text-gold-400 border border-gold-400/40 hover:bg-gold-400/10 px-6 py-2.5 rounded-sm"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} data-testid="contact-form" className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Full Name *" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" testid="input-name" required />
                <Field label="Work Email *" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@company.com" testid="input-email" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Phone" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" testid="input-phone" />
                <Field label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Acme Pharmaceuticals" testid="input-company" />
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
                  Product of Interest
                </label>
                <select
                  data-testid="input-product-interest"
                  name="product_interest"
                  value={form.product_interest}
                  onChange={handleChange}
                  className="w-full bg-ink-900 border border-ink-600 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-white px-4 py-3 rounded-sm text-sm transition"
                >
                  <option value="">Select a category...</option>
                  {PRODUCT_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
                  Message *
                </label>
                <textarea
                  data-testid="input-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement — volume, specifications, timeline..."
                  rows={5}
                  required
                  className="w-full bg-ink-900 border border-ink-600 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-white px-4 py-3 rounded-sm text-sm transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                data-testid="contact-submit-button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold-400 hover:bg-gold-300 disabled:opacity-60 disabled:cursor-not-allowed text-black font-medium px-8 py-4 rounded-sm transition-colors"
              >
                {submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  <>
                    Submit Inquiry <Send size={16} />
                  </>
                )}
              </button>
              <p className="text-xs text-neutral-500">
                By submitting, you agree to be contacted by our sales team regarding your inquiry.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, type = "text", placeholder, testid, required }) {
  return (
    <div>
      <label className="text-[11px] uppercase tracking-[0.2em] text-neutral-400 font-semibold block mb-2">
        {label}
      </label>
      <input
        data-testid={testid}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-ink-900 border border-ink-600 focus:border-gold-400 focus:ring-1 focus:ring-gold-400 outline-none text-white px-4 py-3 rounded-sm text-sm transition placeholder:text-neutral-600"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, testid }) {
  return (
    <div className="flex items-start gap-4" data-testid={testid}>
      <div className="w-11 h-11 border border-gold-400/40 flex items-center justify-center shrink-0">
        <Icon size={16} className="text-gold-400" />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-neutral-500 font-semibold">{label}</div>
        <div className="text-white mt-1">{value}</div>
      </div>
    </div>
  );
}
