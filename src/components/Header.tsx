import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-primary">Tikpick</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Success Stories
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="gap-2 hidden sm:flex">
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">+91 98765 43210</span>
          </Button>
          <LanguageToggle />
          <Button className="cta-primary rounded-full px-6">
            Book Demo
          </Button>
        </div>
      </div>
    </header>
  );
};
