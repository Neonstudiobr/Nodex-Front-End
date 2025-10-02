import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Package, TrendingUp, Users, ShoppingCart, Tag } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import Sidebar from "@/components/Sidebar";

const AdminStoreSettings = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      image: "/api/placeholder/40/40",
      name: "Car Ranger Rover",
      description: "Car Esportive",
      category: "Cars",
      cost: "$ 50,00"
    },
    {
      id: 2,
      image: "/api/placeholder/40/40",
      name: "Car Ranger Rover",
      description: "Car Esportive",
      category: "Cars",
      cost: "$ 50,00"
    },
    {
      id: 3,
      image: "/api/placeholder/40/40",
      name: "Car Ranger Rover",
      description: "Car Esportive",
      category: "Cars",
      cost: "$ 50,00"
    }
  ];

  const discounts = [
    {
      id: 1,
      image: "/api/placeholder/40/40",
      product: "Car Ranger Rover",
      discount: "15%",
      code: "CARSYOUTUBE21",
      quantity: "10"
    },
    {
      id: 2,
      image: "/api/placeholder/40/40",
      product: "Car Ranger Rover",
      discount: "15%",
      code: "CARSYOUTUBE21",
      quantity: "10"
    },
    {
      id: 3,
      image: "/api/placeholder/40/40",
      product: "Car Ranger Rover",
      discount: "15%",
      code: "CARSYOUTUBE21",
      quantity: "10"
    }
  ];

  const categories = Array(5).fill("Subscriptions");

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1">
        {/* Top Navigation */}
        <div className="border-b border-border/40 bg-card/50 px-6 py-4">
        <div className="flex gap-4">
          <Button 
            variant="outline"
            className="bg-primary text-primary-foreground hover:bg-primary/90 border-primary"
          >
            Store Settings
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate("/admin/permissions")}
          >
            Permissions
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate("/admin/logs")}
          >
            Logs
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Products & Discounts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Products Section */}
            <div className="bg-card border border-border/40 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/50 rounded">
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Products</h2>
                    <p className="text-sm text-muted-foreground">1,500 Current</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 bg-background border-border"
                    />
                  </div>
                  <Button variant="outline" className="whitespace-nowrap">
                    New Product
                  </Button>
                </div>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Cost</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-10 h-10 rounded object-cover"
                          />
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{product.description}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.cost}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Remover</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Apply Discount Section */}
            <div className="bg-card border border-border/40 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary/50 rounded">
                    <Tag className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Apply Discount</h2>
                    <p className="text-sm text-muted-foreground">1,500 Current</p>
                  </div>
                </div>
                <Button variant="outline">
                  Add Discount
                </Button>
              </div>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Discount</TableHead>
                    <TableHead>Promotional Code</TableHead>
                    <TableHead>Quantity Used</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {discounts.map((discount) => (
                    <TableRow key={discount.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img 
                            src={discount.image} 
                            alt={discount.product}
                            className="w-10 h-10 rounded object-cover"
                          />
                          <span className="font-medium">{discount.product}</span>
                        </div>
                      </TableCell>
                      <TableCell>{discount.discount}</TableCell>
                      <TableCell>{discount.code}</TableCell>
                      <TableCell>{discount.quantity}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Remover</Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Right Column - Stats & Categories */}
          <div className="space-y-6">
            {/* Store Stats Section */}
            <div className="bg-card border border-border/40 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/50 rounded">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Store Stats</h2>
                  <p className="text-sm text-muted-foreground">1,500 Current</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-background/50 rounded border border-border/40">
                  <div className="p-2 bg-secondary/50 rounded">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">Store Views</p>
                    <p className="text-sm text-muted-foreground">1,500 Subs</p>
                    <p className="text-sm font-medium text-destructive mt-1">19.2%</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-background/50 rounded border border-border/40">
                  <div className="p-2 bg-secondary/50 rounded">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">Monthly Subscribers</p>
                    <p className="text-sm text-muted-foreground">$ 5,000</p>
                    <p className="text-sm font-medium text-green-500 mt-1">+19.2%</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-background/50 rounded border border-border/40">
                  <div className="p-2 bg-secondary/50 rounded">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">% of Subscriptions Bought</p>
                    <p className="text-sm text-muted-foreground">5,000 Clicks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Manage Category Section */}
            <div className="bg-card border border-border/40 rounded-lg p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-secondary/50 rounded">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Manage Category</h2>
                  <p className="text-sm text-muted-foreground">1,500 Current</p>
                </div>
              </div>

              <Button variant="outline" className="w-full mb-4">
                New Category
              </Button>

              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 bg-background/50 rounded border border-border/40"
                  >
                    <span className="text-sm text-foreground">{category}</span>
                    <Switch defaultChecked />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default AdminStoreSettings;