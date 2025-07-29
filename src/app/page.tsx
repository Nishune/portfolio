"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
