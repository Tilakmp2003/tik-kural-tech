import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle, Phone } from "lucide-react";

export const DemoCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto">
        <Card className="glass-card border-0 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left side - Form */}
            <div className="p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                  Book a Free Demo
                </span>
                <h2 className="text-4xl font-bold">
                  See it in action
                </h2>
                <p className="text-muted-foreground text-lg">
                  20-minute personalized demo in Tamil or English. No commitment required.
                </p>
                <p className="tamil-text text-muted-foreground">
                  20 நிமிட தனிப்பயன் டெமோ. எந்த கடமையும் இல்லை.
                </p>
              </div>

              <form className="space-y-4">
                <div>
                  <Input 
                    placeholder="Your Name / உங்கள் பெயர்" 
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Input 
                    type="tel"
                    placeholder="Phone Number / தொலைபேசி எண்" 
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Shop/Business Name / கடையின் பெயர்" 
                    className="h-12 rounded-xl border-2"
                  />
                </div>
                <div>
                  <select className="w-full h-12 rounded-xl border-2 border-input bg-background px-4">
                    <option>Business Type / வணிக வகை</option>
                    <option>Tea Shop / டீ கடை</option>
                    <option>Restaurant / உணவகம்</option>
                    <option>Hotel / ஹோட்டல்</option>
                    <option>Retail Store / சில்லறை விற்பனை</option>
                    <option>Other / மற்றவை</option>
                  </select>
                </div>

                <Button size="lg" className="w-full cta-primary rounded-xl h-14 text-lg">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Demo Now
                  <span className="ml-2 tamil-text">இப்போது பதிவு செய்யவும்</span>
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center">
                We'll call you within 24 hours (Mon–Sat) / 24 மணி நேரத்தில் தொடர்பு கொடுப்போம்
              </p>
            </div>

            {/* Right side - Quick contact */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 md:p-12 space-y-8 flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Or reach us directly</h3>
                <p className="text-muted-foreground tamil-text">நேரடியாக தொடர்பு கொள்ளுங்கள்</p>
              </div>

              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full justify-start gap-4 h-16 border-2 hover:bg-white"
                  onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                >
                  <div className="bg-green-500 rounded-full p-2">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Instant response</p>
                  </div>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full justify-start gap-4 h-16 border-2 hover:bg-white"
                >
                  <div className="bg-primary rounded-full p-2">
                    <Phone className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                  </div>
                </Button>
              </div>

              <div className="pt-6 border-t border-border space-y-2">
                <p className="text-sm font-semibold">Office Hours</p>
                <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-sm text-muted-foreground tamil-text">திங்கள் - சனி: காலை 9 - மாலை 7</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
