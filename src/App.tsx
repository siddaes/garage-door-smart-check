import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
// Import new service pages
import BrokenSpringRepair from "./pages/BrokenSpringRepair";
import OpenerRepair from "./pages/OpenerRepair";
import DoorOffTrack from "./pages/DoorOffTrack";
import BrokenCableRepair from "./pages/BrokenCableRepair";
import NewGarageDoor from "./pages/NewGarageDoor";
// Import new location pages
import NewJersey from "./pages/NewJersey";
import NewYork from "./pages/NewYork";
import Boston from "./pages/Boston";
import Philadelphia from "./pages/Philadelphia";
import Atlanta from "./pages/Atlanta";
import Nashville from "./pages/Nashville";
import Miami from "./pages/Miami";
import Charlotte from "./pages/Charlotte";
// Import new legal pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import AboutUs from "./pages/AboutUs";
import Disclaimer from "./pages/Disclaimer";
import ContactUs from "./pages/ContactUs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Add new service routes */}
          <Route path="/broken-spring-repair" element={<BrokenSpringRepair />} />
          <Route path="/opener-repair" element={<OpenerRepair />} />
          <Route path="/door-off-track" element={<DoorOffTrack />} />
          <Route path="/broken-cable-repair" element={<BrokenCableRepair />} />
          <Route path="/new-garage-door" element={<NewGarageDoor />} />
          {/* Add new location routes */}
          <Route path="/new-jersey" element={<NewJersey />} />
          <Route path="/new-york" element={<NewYork />} />
          <Route path="/boston" element={<Boston />} />
          <Route path="/philadelphia" element={<Philadelphia />} />
          <Route path="/atlanta" element={<Atlanta />} />
          <Route path="/nashville" element={<Nashville />} />
          <Route path="/miami" element={<Miami />} />
          <Route path="/charlotte" element={<Charlotte />} />
          {/* Add new legal routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
