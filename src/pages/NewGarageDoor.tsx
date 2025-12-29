import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { Phone, Wrench, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewGarageDoor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              New Garage Door Installation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional garage door installation services. Get a new, reliable garage door installed by certified technicians.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Why Choose Professional Installation
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Proper garage door installation requires expertise and specialized tools. Our certified technicians ensure safe, reliable operation.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Proper spring tensioning for safe operation</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Correct track alignment for smooth operation</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Proper opener setup and calibration</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Warranty coverage on parts and labor</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Schedule Your Installation</h3>
                <p className="text-muted-foreground mb-4">
                  Call now to schedule your new garage door installation. We'll provide a free quote and work around your schedule.
                </p>
                <Button 
                  className="w-full bg-gradient-cta text-primary-foreground hover:shadow-hover transition-all duration-300 font-semibold py-6"
                  onClick={() => window.open('tel:+19513794799')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">Call for Free Quote: (951) 379-4799</span>
                  <span className="sm:hidden">Call Now: (951) 379-4799</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Installation Process
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Measurement</h3>
                <p className="text-muted-foreground">
                  Precise measurement of your opening to ensure proper fit
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Removal</h3>
                <p className="text-muted-foreground">
                  Safe removal of old door and hardware if applicable
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Installation</h3>
                <p className="text-muted-foreground">
                  Professional installation with proper alignment and calibration
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Garage Door Options We Install
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Insulated Doors</h3>
                  <p className="text-muted-foreground">
                    Energy-efficient doors that help regulate temperature and reduce noise
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Single & Double Car</h3>
                  <p className="text-muted-foreground">
                    Custom sizing for single or double garage applications
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Modern Designs</h3>
                  <p className="text-muted-foreground">
                    Contemporary styles to enhance your home's curb appeal
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-card rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Smart Openers</h3>
                  <p className="text-muted-foreground">
                    Wi-Fi enabled openers with smartphone control and monitoring
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

export default NewGarageDoor;