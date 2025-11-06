import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StoryPanels } from "@/components/StoryPanels";
import { ProductCards } from "@/components/ProductCards";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { DemoCTA } from "@/components/DemoCTA";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { useEffect } from "react";

const Index = () => {
  // Scroll progress bar
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Header />
      <Hero />
      <StoryPanels />
      <ProductCards />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <DemoCTA />
      <Footer />
      <MobileBar />
    </div>
  );
};

export default Index;
