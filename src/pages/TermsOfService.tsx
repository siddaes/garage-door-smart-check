import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { FileText, Shield, Clock, DollarSign } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Terms and conditions for using our services
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-invert max-w-none">
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Acceptance of Terms</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  By using our website and services, you agree to be bound by these terms and conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Service Description</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We provide garage door repair and installation services. Our services are provided by licensed and insured professionals. Service availability may vary by location.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Service Availability</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We make every effort to provide services as scheduled, but factors beyond our control may affect service times. Emergency services are available within 2 hours in most cases, subject to availability.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <DollarSign className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Pricing and Payment</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Pricing is provided as an estimate and may vary based on the actual work required. Payment is due upon completion of services unless otherwise agreed upon in writing. We accept various forms of payment as indicated on our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-lg text-muted-foreground">
                  Our liability is limited to the amount paid for the services. We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
                </p>
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

export default TermsOfService;