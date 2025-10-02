import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const Store = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const products: Product[] = [
    {
      id: 1,
      name: "Car - Ranger Rover | Evoque",
      price: "39.99 USD",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      name: "Car - Ranger Rover | Evoque",
      price: "39.99 USD",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      name: "Car - Ranger Rover | Evoque",
      price: "39.99 USD",
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      name: "Car - Ranger Rover | Evoque",
      price: "39.99 USD",
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      name: "Car - Ranger Rover | Evoque",
      price: "39.99 USD",
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      name: "Car - Ranger Rover | Evoque",
      price: "39.99 USD",
      image: "/api/placeholder/300/200"
    }
  ];

  const categories = Array(8).fill("ALL JOBS");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        
        <div className="relative z-10 text-center px-6 py-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-primary text-4xl font-bold">N</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold">
            <span className="text-white">NODEX</span>
            <br />
            <span className="text-primary">STORE</span>
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">PRODUCTS</h2>
              <p className="text-muted-foreground text-sm mb-6">Browse through our trending products</p>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Categories */}
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded cursor-pointer transition-colors ${
                    index === 0 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-card text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">{category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-card rounded overflow-hidden border border-border">
                  <div className="aspect-video bg-muted relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-foreground font-medium mb-1">{product.name}</h3>
                    <p className="text-primary font-bold mb-4">{product.price}</p>
                    <div className="flex gap-3">
                      <Button 
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium relative"
                        style={{
                          clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0 50%)'
                        }}
                      >
                        PLAY NOW
                      </Button>
                      <Button 
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium"
                      >
                        DISCORD
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Store;