import React from "react";
import ModernNavbar from "@/components/home/ModernNavbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Events from "@/components/home/Events";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import CTA from "@/components/home/CTA";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth flex flex-col">
      <ModernNavbar />

      <main className="flex-grow">
        <div id="home">
          <Hero />
        </div>

        <div id="counter">
          <Stats />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="events">
          <Events />
        </div>

        <div id="success-stories">
          <Testimonials />
        </div>

        <div id="blog">
          <BlogPreview />
        </div>

        <div id="faq" className="py-20 bg-white">
          <FAQ />
        </div>

        <CTA />
      </main>
    </div>
  );
}
