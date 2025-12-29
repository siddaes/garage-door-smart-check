import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { Users, Award, Clock, Shield } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About USA Garage Experts
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Your trusted partner for professional garage door services since 2010
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                USA Garage Experts brings over 10+ years of hands-on experience delivering reliable, honest, and professional garage door services to homeowners across the United States. What began as a small team of skilled technicians has grown into a trusted nationwide service provider, while our commitment to quality workmanship and customer satisfaction has remained the same.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We understand that your garage door is more than just an entry point. It plays a vital role in your home's security, energy efficiency, and everyday convenience. That is why we focus on precision service, durable repairs, and long-term solutions using premium parts and proven techniques.
              </p>
              <p className="text-lg text-muted-foreground">
                USA Garage Experts operates as a trade name and brand of Garage Menders Inc., providing expert service backed by industry knowledge, experience, and a customer first approach.
              </p>
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

export default AboutUs;