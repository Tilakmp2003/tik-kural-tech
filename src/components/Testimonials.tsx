import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "முருகன்",
      nameEn: "Murugan",
      business: "Raja Tea Shop, Madurai",
      quote: "Before Tikpick, I was writing bills by hand. Now I print GST invoices in 2 seconds. My customers are happy!",
      quoteTamil: "டிக்பிக் வருமுன், நான் கையால் பில் எழுதினேன். இப்போது 2 விநாடியில் GST பில் அச்சிடுகிறேன்!",
      rating: 5,
    },
    {
      name: "கமலா",
      nameEn: "Kamala",
      business: "Lakshmi Hotel, Coimbatore",
      quote: "Room booking is now so simple. Guests book online, we get paid automatically. Game changer for our small hotel.",
      quoteTamil: "அறை முன்பதிவு மிகவும் எளிமை. வாடிக்கையாளர்கள் ஆன்லைனில் முன்பதிவு செய்கிறார்கள், பணம் தானாக வருகிறது.",
      rating: 5,
    },
    {
      name: "சுரேஷ்",
      nameEn: "Suresh",
      business: "Annapoorna Restaurant, Salem",
      quote: "Orders go straight to kitchen screen. No paper, no confusion. Staff loves it and we serve faster now.",
      quoteTamil: "ஆர்டர்கள் சமையலறை திரையில் வருகின்றன. காகிதம் இல்லை, குழப்பம் இல்லை. விரைவாக சேவை செய்கிறோம்.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Loved by shop owners <span className="text-primary">across Tamil Nadu</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass-card border-0 hover:shadow-2xl transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8 space-y-6">
                <Quote className="h-10 w-10 text-primary/30" />
                
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <div className="space-y-4">
                  <p className="text-foreground leading-relaxed font-medium">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-muted-foreground text-sm tamil-text leading-relaxed">
                    "{testimonial.quoteTamil}"
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="font-bold">
                    {testimonial.name} <span className="font-normal">• {testimonial.nameEn}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Join 500+ businesses already using Tikpick</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-muted/50 rounded-full">
              <span className="font-semibold text-primary">95%</span>
              <span className="text-sm text-muted-foreground ml-2">Error reduction</span>
            </div>
            <div className="px-6 py-3 bg-muted/50 rounded-full">
              <span className="font-semibold text-primary">2+ hrs</span>
              <span className="text-sm text-muted-foreground ml-2">Time saved daily</span>
            </div>
            <div className="px-6 py-3 bg-muted/50 rounded-full">
              <span className="font-semibold text-primary">24/7</span>
              <span className="text-sm text-muted-foreground ml-2 tamil-text">தமிழ் support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
