import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ParallaxBackground } from "./components/ParallaxBackground";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { WorkProcess } from "./components/WorkProcess";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ParallaxBackground />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ProjectShowcase />
        <WorkProcess />
      </main>
      <Footer />
    </>
  );
}
