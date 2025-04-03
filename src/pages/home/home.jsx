import React from "react";
import Hero from "@/components/hero/hero";
import ServicesSection from "@/components/services-section/services-section";
import CaseSection from "../../components/case-section/case-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <CaseSection />
    </>
  );
}
