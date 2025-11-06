import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StoryPanels } from "@/components/StoryPanels";
import { ProductCards } from "@/components/ProductCards";
import { Testimonials } from "@/components/Testimonials";
import { DemoCTA } from "@/components/DemoCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StoryPanels />
      <ProductCards />
      <Testimonials />
      <DemoCTA />
      <Footer />
    </div>
  );
};

export default Index;
