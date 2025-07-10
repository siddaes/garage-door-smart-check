import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      rating: 5,
      text: "Called at 8 PM, and a tech was at my home within an hour. Fixed my spring fast and didn't try to upsell anything. Honest guys.",
      author: "Jason T.",
      location: "Houston"
    },
    {
      rating: 5,
      text: "I used their diagnostic tool and actually figured out what was wrong. Super helpful, and the tech was professional. Highly recommended.",
      author: "María R.",
      location: "Phoenix"
    },
    {
      rating: 5,
      text: "Thought I'd need a full door replacement. They fixed it on the spot and saved me hundreds.",
      author: "Lindsey K.",
      location: "Chicago"
    },
    {
      rating: 5,
      text: "Their emergency service is incredible. My garage door broke on a Sunday and they had someone out within 2 hours.",
      author: "Mike D.",
      location: "Dallas"
    },
    {
      rating: 5,
      text: "The diagnostic tool helped me understand what was wrong before they arrived. No surprises, just honest service and fair pricing.",
      author: "Sarah L.",
      location: "Miami"
    },
    {
      rating: 5,
      text: "Best garage door service in the area. They explained everything clearly and fixed our track issue quickly. Will definitely use again.",
      author: "Robert H.",
      location: "Atlanta"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Real reviews from real homeowners
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="bg-background border-border shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-primary fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-center text-foreground mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="text-center">
                <cite className="text-lg font-semibold text-primary">
                  {testimonials[currentIndex].author}
                </cite>
                <span className="text-muted-foreground ml-2">
                  {testimonials[currentIndex].location}
                </span>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};