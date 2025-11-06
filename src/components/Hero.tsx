import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";
import heroImage from "@/assets/hero-teashop.jpg";

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi, I'd like to know more about Tikpick", "_blank");
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-up">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Built for Tamil Nadu Businesses
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              We build SaaS that runs{" "}
              <span className="text-primary">small businesses</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Billing, inventory, table orders and bookings — simple, offline-first, and ready in 20 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="cta-primary rounded-full px-8 text-lg">
                Book a Free Demo
                <span className="ml-2 tamil-text">இப்போது டெமோ</span>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-2"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                <span className="tamil-text">வாட்ஸ்அப்</span>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-primary">
                <Play className="h-4 w-4" />
                Watch 2-min demo
              </Button>
            </div>
          </div>
          
          <div className="relative fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Tamil Nadu tea shop owner" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">Tamil Support</p>
                  <p className="text-sm text-muted-foreground">Always available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
