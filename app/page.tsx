import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ParallaxBackground } from "./components/ParallaxBackground";
import { ServicesSection } from "./components/ServicesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <ParallaxBackground />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
