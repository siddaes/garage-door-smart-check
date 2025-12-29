import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              How we collect, use, and protect your information
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-invert max-w-none">
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Information We Collect</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We collect information you provide directly to us when you use our services, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Contact information such as name, email address, and phone number</li>
                  <li>Service-related information about your garage door issue</li>
                  <li>Technical data about your device and browser</li>
                  <li>Location data for service area verification</li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Lock className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">How We Use Your Information</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Provide and improve our garage door repair services</li>
                  <li>Respond to your inquiries and service requests</li>
                  <li>Send you important service updates and promotional offers</li>
                  <li>Personalize your experience on our website</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Information Sharing</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Service providers who assist us in operating our business</li>
                  <li>Legal authorities when required by law</li>
                  <li>Other parties with your consent</li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Data Security</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-lg text-muted-foreground">
                  If you have questions about this privacy policy, please contact us at the information provided on our website.
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

export default PrivacyPolicy;