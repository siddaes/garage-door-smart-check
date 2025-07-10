import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DiagnosticTool />
        <TrustSection />
        {/* Remove extra space below testimonials */}
        <div className="!mb-0 !pb-0">
          <TestimonialsSection />
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </div>
  );
};

export default Index;
