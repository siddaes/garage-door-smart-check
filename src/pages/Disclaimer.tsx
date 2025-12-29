import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { AlertTriangle, FileText, Shield, Clock } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Disclaimer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Important information about our services and website
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-invert max-w-none">
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Service Information</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  The information on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of the information.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Professional Services</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Our garage door repair services are performed by licensed and insured professionals. However, garage door systems are complex and involve potentially dangerous components. Always follow safety guidelines and never attempt repairs that are beyond your skill level.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Clock className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Time Estimates</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  All time estimates provided on this website or during consultations are approximate and may vary based on the specific circumstances of your garage door system, the nature of the repair needed, and other factors beyond our control.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Pricing Information</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  All pricing information is an estimate and may vary based on the actual work required. Final pricing will be determined after inspection and diagnosis of your specific garage door system. Prices are subject to change without notice.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-lg text-muted-foreground">
                  In no event shall USA Garage Experts be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the website or the services provided.
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

export default Disclaimer;