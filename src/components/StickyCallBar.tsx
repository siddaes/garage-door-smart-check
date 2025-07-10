import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-cta animate-slide-up">
      <div className="container mx-auto px-4 py-3 flex justify-center">
        <Button 
          className="bg-gradient-cta text-primary-foreground hover:shadow-lg transition-all duration-300 font-bold text-xl rounded-lg py-4 shadow-md"
          onClick={() => window.open('tel:+19545396734')}
        >
          <Phone className="mr-2 h-6 w-6" />
          Talk to a Garage Door Expert Now
        </Button>
      </div>
    </div>
  );
};