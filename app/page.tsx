import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ParallaxBackground } from "./components/ParallaxBackground";
import { ServicesSection } from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import { WorkProcess } from "./components/WorkProcess";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <ProjectShowcase /> */}
      <Navbar />
      <ParallaxBackground />
      <ServicesSection />
      {/* <TechStack /> */}
      <AboutSection />
      <StatsSection />
      <WorkProcess />
      {/* <TestimonialsSection /> */}
      {/* <PortfolioShowcase /> */}
      <Footer />
    </main>
  );
}
