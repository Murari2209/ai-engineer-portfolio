import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/sections/hero/HeroSection";
import AboutSection from "@/sections/about/AboutSection";
import SkillsSection from "@/sections/skills/SkillsSection";
import ProjectsSection from "@/sections/projects/ProjectsSection";
import ContactSection from "@/sections/contact/ContactSection";

export default function Home() {
  return (
    <main className="bg-[#0B1120] text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}