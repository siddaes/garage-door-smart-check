import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#23272a] text-white pt-8 pb-6 px-4" role="contentinfo">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Contact */}
        <div className="flex flex-col">
          <Logo />
          <a
            href="tel:+19513794799"
            className="mt-4 text-2xl font-bold text-[#ff7f1a] hover:underline"
            aria-label="Call USA Garage Experts at (951) 379-4799"
          >
            (951) 379-4799
          </a>
          <div className="mt-2 text-sm text-gray-300 text-left">
            Reliable Garage Door Services Across the USA
          </div>
        </div>

        {/* Our Services */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-[#ff7f1a] uppercase tracking-wide mb-4 mt-6">Our Services</h3>
          <nav aria-label="Garage door services">
            <ul className="space-y-2 text-gray-200 text-sm">
              {/* Update links to point to new service pages */}
              <li><a href="/broken-spring-repair" className="hover:text-[#ff7f1a] transition-colors">Broken Spring Repair</a></li>
              <li><a href="/opener-repair" className="hover:text-[#ff7f1a] transition-colors">Opener Repair & Installation</a></li>
              <li><a href="/door-off-track" className="hover:text-[#ff7f1a] transition-colors">Door Off Track Repair</a></li>
              <li><a href="/broken-cable-repair" className="hover:text-[#ff7f1a] transition-colors">Broken Cable Repair</a></li>
              <li><a href="/new-garage-door" className="hover:text-[#ff7f1a] transition-colors">New Garage Door Installation</a></li>
            </ul>
          </nav>
        </div>

        {/* Service Areas - 2 columns on desktop */}
        <div className="md:col-span-2 flex flex-col">
          <h3 className="text-lg font-semibold text-[#ff7f1a] uppercase tracking-wide mb-4 mt-6">Service Areas</h3>
          <div className="grid grid-cols-2 gap-8 text-gray-200 text-sm">
            <div className="flex flex-col">
              <div className="font-bold text-white mb-2">Northeast</div>
              <ul className="space-y-2">
                <li><a href="/new-jersey" className="hover:text-[#ff7f1a] transition-colors">New Jersey (Statewide)</a></li>
                <li><a href="/new-york" className="hover:text-[#ff7f1a] transition-colors">Long Island & Albany, NY</a></li>
                <li><a href="/boston" className="hover:text-[#ff7f1a] transition-colors">Boston, MA</a></li>
                <li><a href="/philadelphia" className="hover:text-[#ff7f1a] transition-colors">Philadelphia, PA</a></li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-white mb-2">South</div>
              <ul className="space-y-2">
                <li><a href="/atlanta" className="hover:text-[#ff7f1a] transition-colors">Atlanta, GA</a></li>
                <li><a href="/nashville" className="hover:text-[#ff7f1a] transition-colors">Nashville, TN</a></li>
                <li><a href="/miami" className="hover:text-[#ff7f1a] transition-colors">Miami</a></li>
                <li><a href="/charlotte" className="hover:text-[#ff7f1a] transition-colors">Charlotte, NC</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400 mb-16">
        &copy; {new Date().getFullYear()} USA Garage Experts. All rights reserved.
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <a href="/privacy-policy" className="hover:text-[#ff7f1a] transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-[#ff7f1a] transition-colors">Terms of Service</a>
          <a href="/about-us" className="hover:text-[#ff7f1a] transition-colors">About Us</a>
          <a href="/disclaimer" className="hover:text-[#ff7f1a] transition-colors">Disclaimer</a>
          <a href="/contact-us" className="hover:text-[#ff7f1a] transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}; 