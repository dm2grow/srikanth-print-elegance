import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      business: "Fresh Bites Restaurant",
      rating: 5,
      text: "SRIKANTTH PRINT MEDIA transformed our packaging game! Their custom-designed food boxes not only look premium but are also eco-friendly. Highly recommended!",
    },
    {
      name: "Priya Sharma",
      business: "Sweet Delights Bakery",
      rating: 5,
      text: "Outstanding quality and service! The team understood our vision perfectly and delivered beautiful packaging that our customers love. Very professional.",
    },
    {
      name: "Mohammed Ali",
      business: "Spice Route Catering",
      rating: 5,
      text: "We've been working with them for 3 years now. Consistent quality, timely delivery, and excellent customer support. They're our go-to packaging partner.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <div className="h-1 w-20 bg-accent mt-2 rounded-full mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it - hear from businesses we've helped succeed
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="shadow-medium border-2 border-border animate-fade-in">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-center mb-8">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </p>
              </blockquote>

              <div className="text-center">
                <p className="font-bold text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-accent">{testimonials[currentIndex].business}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-primary text-white shadow-medium hover:bg-accent transition-smooth hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 mx-auto" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-primary text-white shadow-medium hover:bg-accent transition-smooth hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 mx-auto" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === currentIndex ? "bg-accent w-8" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
