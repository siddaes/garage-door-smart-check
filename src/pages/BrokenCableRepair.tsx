import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { Phone, Wrench, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const BrokenCableRepair = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Broken Garage Door Cable Repair
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional cable repair and replacement services. Get your garage door cables working safely again.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Cable Repair is Critical
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Garage door cables are under extreme tension and are essential for safe operation. When they break, immediate professional repair is necessary.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Cables under extreme tension can cause serious injury</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Broken cables make the door unsafe to operate</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Can cause door to fall suddenly</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Requires professional tools and expertise to repair</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Emergency Cable Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Call now for same-day cable repair. Our certified technicians have the right tools and experience to safely replace your cables.
                </p>
                <Button 
                  className="w-full bg-gradient-cta text-primary-foreground hover:shadow-hover transition-all duration-300 font-semibold py-6"
                  onClick={() => window.open('tel:+19513794799')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">Call for Emergency Repair: (951) 379-4799</span>
                  <span className="sm:hidden">Call Now: (951) 379-4799</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Cable Repair Process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Safety Preparation</h3>
                <p className="text-muted-foreground">
                  Secure the door and release tension safely before working on cables
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Remove Old Cable</h3>
                <p className="text-muted-foreground">
                  Carefully remove the broken cable using proper safety equipment
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Install New Cable</h3>
                <p className="text-muted-foreground">
                  Install properly sized cable and adjust tension for optimal performance
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Common Cable Issues We Fix
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Completely Broken Cable</h3>
                  <p className="text-muted-foreground">
                    Cable snaps completely, making door inoperable and unsafe
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Frayed Cable</h3>
                  <p className="text-muted-foreground">
                    Cable shows signs of wear and needs preventive replacement
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cable Off Pulley</h3>
                  <p className="text-muted-foreground">
                    Cable comes off the pulley system requiring repositioning
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Uneven Cable Tension</h3>
                  <p className="text-muted-foreground">
                    Cables have different tension causing door to operate unevenly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
};

export default BrokenCableRepair;