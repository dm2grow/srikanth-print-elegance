import { Palette, Printer, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Designing",
      description:
        "Creative and custom packaging designs tailored to your brand identity. Our expert designers create eye-catching visuals that make your products stand out on shelves.",
      features: ["Brand Identity Design", "Label Design", "Custom Graphics", "3D Mockups"],
    },
    {
      icon: Printer,
      title: "Printing",
      description:
        "State-of-the-art printing technology ensuring vibrant colors and crisp details. High-quality offset and digital printing for all your packaging needs.",
      features: ["Offset Printing", "Digital Printing", "Flexographic Printing", "Color Matching"],
    },
    {
      icon: Package,
      title: "Packaging",
      description:
        "Comprehensive packaging solutions from food containers to disposable products. Durable, safe, and eco-friendly packaging that protects your products.",
      features: [
        "Food Containers",
        "Disposable Products",
        "Custom Boxes",
        "Eco-friendly Materials",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <div className="h-1 w-20 bg-accent mt-2 rounded-full mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Packaging Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to creation, we provide end-to-end packaging services that elevate your
            brand and protect your products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-smooth animate-scale-in border-2 border-border hover:border-accent overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
