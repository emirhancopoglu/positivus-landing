import React from "react";
import Hero from "@/components/hero/hero";
import ServicesSection from "@/components/sections/services-section/services-section";
import CaseSection from "@/components/sections/case-section/case-section";
import AccordionSection from "@/components/sections/accordion-section/accordion-section";
import TeamSection from "@/components/sections/team-section/team-section";
import TestimonialsSection from "@/components/sections/testimonials-section/testimonials-section";
import ContactSection from "@/components/sections/contact-section/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CaseSection />
      <AccordionSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
