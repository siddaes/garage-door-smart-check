import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { Phone, Wrench, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const OpenerRepair = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Garage Door Opener Repair & Installation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional opener repair, replacement, and installation services. Get your garage door working smoothly again.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Common Opener Problems
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Garage door openers can fail for various reasons. Our technicians diagnose and fix all types of opener issues.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Opener doesn't respond to remote or wall button</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Grinding or loud noises during operation</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Door reverses immediately after closing</p>
                  </div>
                  <div className="flex items-start">
                    <AlertTriangle className="h-6 w-6 text-destructive mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Opener runs but door doesn't move</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Professional Opener Service</h3>
                <p className="text-muted-foreground mb-4">
                  Call now for opener repair or installation. We service all major brands including Chamberlain, LiftMaster, Genie, and more.
                </p>
                <Button 
                  className="w-full bg-gradient-cta text-primary-foreground hover:shadow-hover transition-all duration-300 font-semibold py-6"
                  onClick={() => window.open('tel:+19513794799')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">Call for Opener Service: (951) 379-4799</span>
                  <span className="sm:hidden">Call Now: (951) 379-4799</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Opener Service Process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Diagnosis</h3>
                <p className="text-muted-foreground">
                  We test the opener and identify the specific issue causing problems
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Repair or Replace</h3>
                <p className="text-muted-foreground">
                  Either fix the existing opener or install a new one as needed
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Testing</h3>
                <p className="text-muted-foreground">
                  Full testing to ensure safe and smooth operation of your door
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Opener Services We Provide
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Repair Services</h3>
                  <p className="text-muted-foreground">
                    Motor repairs, gear replacement, circuit board fixes, and more
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">New Installation</h3>
                  <p className="text-muted-foreground">
                    Professional installation of new openers with latest features
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Remote Programming</h3>
                  <p className="text-muted-foreground">
                    Setup and programming of new remotes and keypads
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Maintenance</h3>
                  <p className="text-muted-foreground">
                    Regular maintenance to extend opener life and prevent issues
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

export default OpenerRepair;