import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { Phone, MapPin, Wrench, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Boston = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Garage Door Repair in Boston, MA
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional garage door repair services in Boston, MA. Fast emergency service available.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Serving Boston Area
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We provide garage door repair services throughout the Boston metropolitan area.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Emergency service within 2 hours</p>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Licensed & insured technicians</p>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mt-1 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">Same-day service available</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Need Garage Door Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Call now for fast, reliable service in Boston. Our local technicians know the area well.
                </p>
                <Button 
                  className="w-full bg-gradient-cta text-primary-foreground hover:shadow-hover transition-all duration-300 font-semibold py-6"
                  onClick={() => window.open('tel:+19513794799')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  <span className="hidden sm:inline">Call Now for Service in MA: (951) 379-4799</span>
                  <span className="sm:hidden">Call Now: (951) 379-4799</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Common Garage Door Issues in Boston
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 bg-background rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Winter Damage</h3>
                  <p className="text-muted-foreground">
                    Harsh New England winters can cause springs to break
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-background rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Salt Corrosion</h3>
                  <p className="text-muted-foreground">
                    Road salt in winter can corrode metal parts
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-background rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Humidity Effects</h3>
                  <p className="text-muted-foreground">
                    Coastal humidity can cause metal parts to rust
                  </p>
                </div>
              </div>
              
              <div className="flex items-start p-4 bg-background rounded-lg border border-border">
                <Wrench className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Older Home Issues</h3>
                  <p className="text-muted-foreground">
                    Historic Boston homes may have older garage systems
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

export default Boston;