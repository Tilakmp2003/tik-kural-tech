import { MessageCircle, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Tikpick</h3>
            <p className="text-background/70 leading-relaxed">
              Simple SaaS for small businesses across Tamil Nadu
            </p>
            <p className="text-sm text-background/70 tamil-text leading-relaxed">
              நாம் தமிழ்நாட்டை டிஜிட்டல் செய்கிறோம்
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">POS System</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Restaurant Ordering</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Hotel Booking</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Inventory Management</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Delivery Tracking</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Resources</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors text-sm">Partners</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background font-medium">WhatsApp / Call</p>
                  <p className="text-background/70 text-sm">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background font-medium">Email</p>
                  <p className="text-background/70 text-sm">hello@tikpick.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-background font-medium">Office</p>
                  <p className="text-background/70 text-sm">Coimbatore, Tamil Nadu</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2025 Tikpick. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
