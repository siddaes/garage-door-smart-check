import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-cta animate-slide-up">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex justify-center">
        <Button 
          className="w-full max-w-md bg-gradient-cta text-primary-foreground hover:shadow-lg transition-all duration-300 font-bold text-base sm:text-xl rounded-lg py-3 sm:py-4 shadow-md"
          onClick={() => window.open('tel:+19545396734')}
        >
          <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
          <span className="truncate">Talk to a Garage Door Expert Now</span>
        </Button>
      </div>
    </div>
  );
};