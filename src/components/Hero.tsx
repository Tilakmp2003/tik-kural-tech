import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";
import heroImage from "@/assets/hero-teashop.jpg";

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi, I'd like to know more about Tikpick", "_blank");
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-paper-warm to-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 fade-in-up">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Built for Tamil Nadu Businesses
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              We build SaaS that runs{" "}
              <span className="text-primary">small businesses</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Billing, inventory, table orders and bookings — simple, offline-first, and ready in 20 minutes.
            </p>
            
            <p className="text-lg tamil-text text-muted-foreground">
              சிறு வணிகங்களுக்காக வடிவமைக்கப்பட்ட எளிய மென்பொருள்
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="cta-primary rounded-full px-8 text-lg h-14">
                Book a Free Demo
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 border-2 h-14"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg"
                className="gap-2 text-muted-foreground hover:text-primary h-14"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Trust bar */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by 250+ Tamil Nadu businesses</p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="font-medium">95% error reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="font-medium">2+ hrs saved daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-medium tamil-text">24/7 தமிழ் support</span>
                </div>
              </div>
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
