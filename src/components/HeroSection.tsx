import { CheckCircle, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const trustSignals = [
    { icon: CheckCircle, text: "Trusted by 12,000+ homeowners" },
    { icon: Shield, text: "Certified technicians" },
    { icon: Clock, text: "Emergency repairs in under 2 hours" },
    { icon: Star, text: "No pricing shown — free diagnosis by phone" }
  ];

  const scrollToDiagnostic = () => {
    document.getElementById('diagnostic-tool')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-hero py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Garage Door Acting Up?<br />
            <span className="text-primary">Find Out What's Wrong in 60 Seconds.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Click your issue below, follow our simple checklist, and get expert help — fast.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
            {trustSignals.map((signal, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 p-4">
                <signal.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-center">{signal.text}</span>
              </div>
            ))}
          </div>

          <Button 
            onClick={scrollToDiagnostic}
            className="bg-gradient-cta text-primary-foreground hover:shadow-hover transition-all duration-300 text-xl px-8 py-6 animate-pulse-glow"
          >
            Start Diagnosis
          </Button>
        </div>
      </div>
    </section>
  );
};