import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <Button 
            className="bg-gradient-cta text-primary-foreground hover:shadow-hover transition-all duration-300 font-semibold"
            onClick={() => window.open('tel:+1-800-GARAGE-1')}
          >
            <Phone className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Call Now –</span> Certified Tech in Your Area
          </Button>
        </div>
      </div>
    </header>
  );
};