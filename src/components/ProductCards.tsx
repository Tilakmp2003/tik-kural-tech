import { ShoppingBag, UtensilsCrossed, Hotel, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProductCards = () => {
  const products = [
    {
      icon: ShoppingBag,
      title: "POS for Tea Shops & Retail",
      titleTamil: "டீ கடைகள் & சில்லறை விற்பனை",
      features: [
        "2-tap billing with thermal printing",
        "GST invoices in Tamil",
        "Offline mode with auto-sync",
        "WhatsApp bill sharing"
      ],
      cta: "Start in 10 minutes",
      ctaTamil: "10 நிமிடத்தில் தொடங்குங்கள்",
      color: "from-primary/20 to-primary/5",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: UtensilsCrossed,
      title: "Restaurant Ordering",
      titleTamil: "உணவக ஆர்டர் அமைப்பு",
      features: [
        "Digital menu with Tamil support",
        "Table & takeaway orders",
        "Kitchen display system",
        "Real-time order tracking"
      ],
      cta: "See demo",
      ctaTamil: "டெமோ பார்க்க",
      color: "from-accent/20 to-accent/5",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Hotel,
      title: "Hotel Booking System",
      titleTamil: "ஹோட்டல் முன்பதிவு",
      features: [
        "Room availability & pricing",
        "Guest check-in/check-out",
        "Payment integration",
        "Booking analytics"
      ],
      cta: "Explore features",
      ctaTamil: "அம்சங்களை காண்க",
      color: "from-orange-500/20 to-orange-500/5",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <section id="products" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for <span className="text-primary">every business</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From small tea shops to hotels — simple SaaS solutions that just work
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="glass-card border-0 overflow-hidden hover:scale-[1.02] transition-all duration-300 fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 space-y-6 flex flex-col h-full">
                <div className={`w-16 h-16 rounded-2xl ${product.iconBg} flex items-center justify-center flex-shrink-0`}>
                  <product.icon className={`h-8 w-8 ${product.iconColor}`} />
                </div>

                <div className="space-y-2 flex-shrink-0">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <p className="text-sm tamil-text text-muted-foreground">{product.titleTamil}</p>
                </div>

                <ul className="space-y-3 flex-grow">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  className="w-full group border-2 hover:border-primary hover:bg-primary hover:text-primary-foreground mt-auto h-12"
                >
                  <span>{product.cta}</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Need something custom?</h3>
              <p className="text-muted-foreground text-lg">
                We build SaaS products tailored to your business. From inventory management to delivery tracking — we've got you covered.
              </p>
            </div>
            <div className="flex justify-end">
              <Button size="lg" className="cta-primary rounded-full px-8">
                Talk to our team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
