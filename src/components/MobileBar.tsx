import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MobileBar = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi, I'd like to know more about Tikpick", "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+919876543210";
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-t border-border shadow-2xl">
      <div className="grid grid-cols-3 gap-2 p-3">
        <Button 
          variant="outline" 
          size="sm"
          className="flex flex-col gap-1 h-auto py-3 border-2"
          onClick={handleCall}
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs font-medium">Call</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm"
          className="flex flex-col gap-1 h-auto py-3 border-2 bg-green-500/10 border-green-500 text-green-700 hover:bg-green-500 hover:text-white"
          onClick={handleWhatsApp}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs font-medium">WhatsApp</span>
        </Button>
        
        <Button 
          size="sm"
          className="flex flex-col gap-1 h-auto py-3 cta-primary"
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs font-medium">Book Demo</span>
        </Button>
      </div>
    </div>
  );
};
