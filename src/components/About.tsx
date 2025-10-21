import { CheckCircle, Award, Users, Target } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Premium materials and meticulous attention to detail in every product",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with years of packaging industry experience",
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Tailored packaging designs that perfectly match your brand identity",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="inline-block">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <div className="h-1 w-20 bg-accent mt-2 rounded-full" />
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Your Trusted Partner in Food Packaging Solutions
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              At <span className="text-accent font-semibold">SRIKANTTH PRINT MEDIA</span>, we
              specialize in designing, printing, and manufacturing high-quality food packaging and
              disposable products. Based in Hyderabad, we've been serving businesses with
              innovative packaging solutions that combine functionality with aesthetic appeal.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us a preferred choice
              for food businesses looking for reliable, eco-friendly packaging solutions.
            </p>

            <div className="space-y-4 pt-4">
              {[
                "ISO certified manufacturing facility",
                "Eco-friendly and sustainable materials",
                "Custom design and branding services",
                "Fast turnaround and on-time delivery",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid gap-6 animate-fade-in-up">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft hover:shadow-medium transition-smooth border border-border group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
