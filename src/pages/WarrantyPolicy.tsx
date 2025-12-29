import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { Shield, Calendar, Wrench, FileText } from "lucide-react";

const WarrantyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Warranty Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Our warranty coverage and terms
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-invert max-w-none">
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Warranty Coverage</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  We provide warranties on both parts and labor for our repair and installation services. The specific warranty terms will be provided in writing at the time of service.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Calendar className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Warranty Duration</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Warranty periods vary depending on the type of service and parts used:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Standard repairs: 90 days parts and labor</li>
                  <li>Springs and cables: 1 year parts, 90 days labor</li>
                  <li>New door installations: 1 year parts and labor</li>
                  <li>Motor replacements: 3-5 years depending on model</li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Wrench className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">What's Covered</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Our warranty covers defects in materials and workmanship under normal use. This includes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Defective parts that fail under normal conditions</li>
                  <li>Workmanship errors in installation or repair</li>
                  <li>Manufacturing defects in new components</li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <FileText className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">What's Not Covered</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4">
                  Our warranty does not cover:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Damages due to misuse, neglect, or lack of maintenance</li>
                  <li>Damages from severe weather or accidents</li>
                  <li>Normal wear and tear</li>
                  <li>Modifications made by others</li>
                  <li>Damage from power surges to electronic components</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Making a Warranty Claim</h2>
                <p className="text-lg text-muted-foreground">
                  To make a warranty claim, contact us with your original service receipt and details of the issue. We will inspect the problem and determine if it's covered under warranty.
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

export default WarrantyPolicy;