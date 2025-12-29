import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { Phone, Wrench, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const DoorOffTrack = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Garage Door Off Track Repair
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional track repair and realignment services. Get your garage door back on track safely.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Door Off Track is Dangerous
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  When a garage door comes off its track, it's a serious safety hazard that requires immediate professional attention.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Door can fall suddenly causing injury</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Attempting DIY repair is extremely dangerous</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Can cause further damage to door components</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Makes your garage completely inaccessible</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Emergency Track Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Call now for immediate track repair service. Our certified technicians have the right tools and experience to safely get your door back on track.
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
              Track Repair Process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Safety Assessment</h3>
                <p className="text-muted-foreground">
                  We safely secure the door and assess the extent of track damage
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Track Repair</h3>
                <p className="text-muted-foreground">
                  Straighten or replace damaged track sections as needed
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Door Re-alignment</h3>
                <p className="text-muted-foreground">
                  Carefully get the door back on track and test for smooth operation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Common Track Issues We Fix
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Bent Track</h3>
                  <p className="text-muted-foreground">
                    Track bent due to impact or wear, causing door to bind or come off
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Off Track Roller</h3>
                  <p className="text-muted-foreground">
                    Rollers come off the track due to wear or misalignment
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Loose Track Mounting</h3>
                  <p className="text-muted-foreground">
                    Track brackets become loose over time causing misalignment
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Damaged Rollers</h3>
                  <p className="text-muted-foreground">
                    Worn or damaged rollers cause door to come off track repeatedly
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

export default DoorOffTrack;