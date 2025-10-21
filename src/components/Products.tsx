import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const categories = ["All", "Food Containers", "Disposables", "Custom Packaging", "Labels"];
  const [activeCategory, setActiveCategory] = useState("All");

  const products = [
    {
      title: "Paper Food Boxes",
      category: "Food Containers",
      description: "Eco-friendly paper boxes for takeaway meals, custom printed with your brand",
    },
    {
      title: "Disposable Cups",
      category: "Disposables",
      description: "High-quality paper cups with custom designs, perfect for beverages",
    },
    {
      title: "Custom Labels",
      category: "Labels",
      description: "Premium adhesive labels with vibrant printing for product branding",
    },
    {
      title: "Food Trays",
      category: "Food Containers",
      description: "Sturdy food trays for restaurants and catering services",
    },
    {
      title: "Packaging Boxes",
      category: "Custom Packaging",
      description: "Custom-designed boxes for retail and food products",
    },
    {
      title: "Paper Bags",
      category: "Disposables",
      description: "Eco-friendly paper bags with custom printing options",
    },
  ];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Products
            </span>
            <div className="h-1 w-20 bg-accent mt-2 rounded-full mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quality Products for Every Need
          </h2>
          <p className="text-muted-foreground text-lg">
            Browse our extensive range of food packaging and disposable products, all customizable
            to match your brand.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                activeCategory === category
                  ? "gradient-primary text-white shadow-soft"
                  : "bg-secondary text-foreground hover:bg-accent hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-medium transition-smooth animate-scale-in border-2 border-border hover:border-accent"
            >
              <CardContent className="p-6">
                {/* Placeholder for product image */}
                <div className="w-full h-48 bg-gradient-to-br from-secondary to-muted rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-smooth">
                  <span className="text-4xl font-bold text-accent/30">{product.title[0]}</span>
                </div>

                <Badge className="mb-3 bg-accent text-white">{product.category}</Badge>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for something specific? We can create custom solutions for your needs.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="gradient-primary text-white px-8 py-3 rounded-lg font-semibold shadow-soft hover:shadow-medium hover:scale-105 transition-smooth"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
