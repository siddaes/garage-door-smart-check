import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="bg-[#23272a] text-white pt-8 pb-6 px-4" role="contentinfo">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 gap-y-0 md:justify-items-start md:items-start">
        {/* Logo and Contact */}
        <div className="flex flex-col items-start md:col-span-1">
          <Logo />
          <a
            href="tel:+19513794799"
            className="mt-4 text-2xl font-bold text-[#ff7f1a] hover:underline md:ml-8"
            aria-label="Call USA Garage Experts at (951) 379-4799"
          >
            (951) 379-4799
          </a>
          <div className="mt-2 text-sm text-gray-300 md:ml-8 text-left">
            24/7 Emergency Service<br />
            Serving Major US Locations
          </div>
        </div>

        {/* Our Services */}
        <div className="md:col-span-1 w-full flex flex-col items-start md:pl-8">
          <h3 className="text-lg font-semibold text-[#ff7f1a] uppercase tracking-wide md:text-left w-full m-0 p-0">Our Services</h3>
          <nav aria-label="Garage door services">
            <ul className="space-y-1 text-gray-200 text-sm w-full">
              <li><a href="#diagnostic-tool" className="hover:text-[#ff7f1a] transition-colors">Broken Spring Repair</a></li>
              <li><a href="#diagnostic-tool" className="hover:text-[#ff7f1a] transition-colors">Opener Repair & Installation</a></li>
              <li><a href="#diagnostic-tool" className="hover:text-[#ff7f1a] transition-colors">Door Off Track Repair</a></li>
              <li><a href="#diagnostic-tool" className="hover:text-[#ff7f1a] transition-colors">Broken Cable Repair</a></li>
              <li><a href="#diagnostic-tool" className="hover:text-[#ff7f1a] transition-colors">New Garage Door Installation</a></li>
            </ul>
          </nav>
        </div>

        {/* Service Areas - 2 columns on desktop */}
        <div className="md:col-span-2 w-full flex flex-col items-start md:pl-8">
          <h3 className="text-lg font-semibold text-[#ff7f1a] uppercase tracking-wide md:text-left w-full m-0 p-0">Service Areas</h3>
          <div className="grid grid-cols-2 gap-x-0 gap-y-0 text-gray-200 text-sm w-full items-start">
            <div className="flex flex-col">
              <div className="font-bold text-white mb-1">Northeast</div>
              <ul className="space-y-0.5 mb-0">
                <li>New Jersey (Statewide)</li>
                <li>Long Island & Albany, NY</li>
                <li>Boston, MA</li>
                <li>Philadelphia, PA</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-white mb-1">South</div>
              <ul className="space-y-0.5 mb-0">
                <li>Atlanta, GA</li>
                <li>Nashville, TN</li>
                <li>Miami</li>
                <li>Charlotte, NC</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-gray-400 mb-16">
        &copy; {new Date().getFullYear()} USA Garage Experts. All rights reserved.
      </div>
    </footer>
  );
}; 