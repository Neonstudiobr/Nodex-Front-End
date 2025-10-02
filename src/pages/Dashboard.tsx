import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, MessageSquare, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const Dashboard = () => {
  const navigate = useNavigate();
  const updates = [
    {
      type: "CHANGES LOG",
      date: "09/09/2025",
      tags: ["CLOTHING", "IMPORTANT"],
      items: [
        "Update 1.0.1 - Added new assault system",
        "Update 1.0.1 - Added new assault system",
        "Update 1.0.1 - Added new assault system"
      ]
    },
    {
      type: "SERVER UPDATE",
      date: "09/09/2025",
      tags: ["HOUSING", "CARS", "IMPORTANT"],
      items: [
        "Update 1.0.1 - Added new assault system",
        "Update 1.0.1 - Added new assault system",
        "Update 1.0.1 - Added new assault system"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          filter: 'brightness(0.15)'
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Header */}
      <header className="relative z-10 border-b border-border/50 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-primary text-3xl">N</span>
              <span className="text-white text-xl"> NodeX</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/dashboard" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">Dashboard</a>
            <a href="/support" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Support</a>
            <a href="/applications" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Applications</a>
            <a href="/rules" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Rules</a>
          </nav>
          
          <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/10 p-2"
            onClick={() => navigate("/admin/login")}
          >
            <MessageSquare className="h-4 w-4" />
          </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
              <User className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2 flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <span className="text-xs">ENG</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Welcome Card */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded bg-muted flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">Welcome, CE BLAKE</h2>
                  <p className="text-primary text-sm">Thanks for coming back here.</p>
                </div>
              </div>
            </div>

            {/* Priority Card */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-primary text-3xl font-bold">N</div>
                <div className="flex-1">
                  <p className="text-muted-foreground text-sm mb-1">Current Priority</p>
                  <p className="text-primary text-xl font-bold">Legacy</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground text-sm mb-1">Days left of Sub</p>
                  <p className="text-primary text-xl font-bold">1 day</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                  Upgrade Subscription
                </Button>
                <Button variant="ghost" className="text-foreground hover:bg-muted">
                  Missing a Subscription?
                </Button>
              </div>
            </div>

            {/* Server Card */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-primary text-3xl font-bold">N</div>
                  <div className="flex-1">
                    <p className="text-foreground font-medium mb-1">FiveM Server</p>
                    <p className="text-muted-foreground text-sm">nodex-fivem-ip.com</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground text-sm mb-1">Players</p>
                    <p className="text-foreground font-bold">269/300</p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-none py-6">
                Play now
              </Button>
            </div>
          </div>

          {/* Right Column - Updates */}
          <div className="space-y-6">
            {updates.map((update, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="border-primary text-primary">
                      {update.type}
                    </Badge>
                    <span className="text-muted-foreground text-sm">· {update.date}</span>
                  </div>
                  <div className="flex gap-2">
                    {update.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex} 
                        variant="outline" 
                        className={tag === "IMPORTANT" ? "border-primary text-primary" : "border-border text-foreground"}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {update.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex gap-2 text-foreground text-sm">
                      <span>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
