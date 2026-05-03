
import React from "react";
import Navbar from "../components/landing/Navbar";
import Stats from "../components/landing/Stats";
import Products from "../components/landing/Products";
import WhyUs from "../components/landing/WhyUs";
import Hero from "../components/landing/Hero";
import Industries from "../components/landing/Industries";
import ContactForm from "../components/landing/ContactForm";
import Footer from "../components/landing/Footer";
import FounderMessage from "../components/landing/FounderMessage";
import './globals.css'

export default function Landing() {
  return (
    <main className="min-h-screen bg-ink-900 text-white font-body grain-overlay overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <WhyUs />
      <Industries />
      <FounderMessage />
      <ContactForm />
      <Footer />
    </main>
  );
}
