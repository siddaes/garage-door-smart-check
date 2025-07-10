import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StickyCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-cta animate-slide-up">
      <div className="container mx-auto px-4 py-3">
        <Button 
          className="w-full bg-gradient-cta text-primary-foreground hover:shadow-hover transition-all duration-300 font-bold text-lg"
          onClick={() => window.open('tel:+1-800-GARAGE-1')}
        >
          <Phone className="mr-2 h-5 w-5" />
          Talk to a Garage Door Expert Now – Free Diagnosis
        </Button>
      </div>
    </div>
  );
};