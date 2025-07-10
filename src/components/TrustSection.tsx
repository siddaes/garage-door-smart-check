import { Shield, Clock, Award, Phone, MapPin, Handshake } from "lucide-react";

export const TrustSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: "Licensed & Insured Garage Door Technicians",
      description: "All our technicians are certified and carry full insurance for your peace of mind."
    },
    {
      icon: Clock,
      title: "Emergency Repairs Within 2 Hours",
      description: "When you need help fast, we're there with same-day emergency service."
    },
    {
      icon: Award,
      title: "10+ Years of Experience",
      description: "Decades of expertise in garage door repair, installation, and maintenance."
    },
    {
      icon: Phone,
      title: "No Pricing Surprises — Free Diagnosis by Phone",
      description: "Get honest, upfront pricing with our free phone consultation service."
    },
    {
      icon: MapPin,
      title: "Trusted in Over 40+ U.S. Cities",
      description: "Serving homeowners across America with reliable garage door solutions."
    },
    {
      icon: Handshake,
      title: "Friendly Support, No Hard Sales",
      description: "We focus on solving your problem, not pushing unnecessary services."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-trust">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Why Homeowners Choose USA Garage Experts
          </h2>
          <p className="text-xl text-primary-foreground/90">
            America's trusted garage door service professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-6 bg-background/10 backdrop-blur-sm rounded-lg hover:bg-background/20 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <point.icon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-foreground mb-2 text-base sm:text-lg">
                  {point.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};