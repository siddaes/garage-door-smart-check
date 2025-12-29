import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { DiagnosticTool } from "@/components/DiagnosticTool";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { StickyCallBar } from "@/components/StickyCallBar";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-16 px-4 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get in touch with our team for all your garage door needs
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">Call us anytime for immediate assistance</p>
                      <a 
                        href="tel:+19513794799" 
                        className="text-primary hover:underline font-bold text-lg mt-1 inline-block"
                      >
                        (951) 379-4799
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">Send us a message anytime</p>
                      <p className="text-primary font-bold mt-1">info@usagarageexperts.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Service Areas</h3>
                      <p className="text-muted-foreground">We serve multiple locations across the US</p>
                      <p className="text-primary font-bold mt-1">New Jersey, New York, Massachusetts, Pennsylvania, Georgia, Tennessee, Florida, North Carolina</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">Service Hours</h3>
                      <p className="text-muted-foreground">Emergency service available 24/7</p>
                      <p className="text-primary font-bold mt-1">Monday - Sunday: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Request Service</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Your city and state"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="issue" className="block text-sm font-medium text-foreground mb-2">
                      Describe Your Issue
                    </label>
                    <textarea
                      id="issue"
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Please describe your garage door issue"
                    ></textarea>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-cta text-primary-foreground hover:shadow-hover transition-all duration-300 font-semibold py-6"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    <span className="hidden sm:inline">Submit Service Request</span>
                    <span className="sm:hidden">Submit</span>
                  </Button>
                </form>
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

export default ContactUs;