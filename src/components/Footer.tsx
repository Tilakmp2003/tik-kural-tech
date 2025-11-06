import { MessageCircle, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Tikpick</h3>
            <p className="text-background/70">
              Simple SaaS for small businesses across Tamil Nadu
            </p>
            <p className="text-sm text-background/70 tamil-text">
              தமிழ்நாடு முழுவதும் சிறு வணிகங்களுக்கான எளிய SaaS
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">POS System</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Restaurant Ordering</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Hotel Booking</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Inventory Management</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Blog</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MessageCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-background/70">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-background/70">hello@tikpick.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span className="text-background/70">Coimbatore, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2025 Tikpick. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/70 hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
