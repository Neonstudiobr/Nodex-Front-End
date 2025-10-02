import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, MessageSquare, Globe } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";

const ReviewTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const messages = [
    {
      id: 1,
      sender: "BlakeX",
      role: "Support",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      time: "07:00 PM - FRIDAY",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      sender: "JotapeN",
      role: "Member",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      time: "07:00 PM - FRIDAY",
      avatar: "/placeholder.svg"
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
            <a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Dashboard</a>
            <a href="/support" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">Support</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">Applications</a>
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
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8">
          <h1 className="text-2xl font-bold text-foreground mb-8">REVIEW TICKET</h1>

          {/* Ticket Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-1">
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <label className="text-muted-foreground text-sm block mb-2">Title</label>
                <p className="text-foreground">Ticket #{id}</p>
              </div>
            </div>
            <div>
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <label className="text-muted-foreground text-sm block mb-2">Created On</label>
                <p className="text-foreground">December 3rd, 2024 at 05:30PM</p>
              </div>
            </div>
            <div>
              <div className="bg-background/50 border border-border rounded-lg p-4">
                <label className="text-muted-foreground text-sm block mb-2">Status</label>
                <p className="text-foreground">Closed</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <div className="bg-background/50 border border-border rounded-lg p-4">
              <label className="text-muted-foreground text-sm block mb-2">Description</label>
              <p className="text-foreground min-h-[60px]"></p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4 mb-6">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`bg-background/50 border border-border rounded-lg p-6 ${
                  message.role === "Member" ? "ml-auto" : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  {message.role === "Support" && (
                    <div className="w-12 h-12 rounded bg-muted flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                  <div className={`flex-1 ${message.role === "Member" ? "text-right" : ""}`}>
                    <div className={`flex items-center gap-2 mb-2 ${message.role === "Member" ? "justify-end" : ""}`}>
                      <span className="text-muted-foreground text-xs">· {message.role}</span>
                      <span className="text-foreground font-medium">{message.sender}</span>
                    </div>
                    <p className="text-foreground mb-2">{message.content}</p>
                    <p className="text-muted-foreground text-sm">{message.time}</p>
                  </div>
                  {message.role === "Member" && (
                    <div className="w-12 h-12 rounded bg-muted flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Send Message */}
          <div className="bg-background/50 border border-border rounded-lg p-4">
            <div className="flex gap-4">
              <Input
                placeholder="Send Message"
                className="flex-1 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              >
                SEND
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReviewTicket;
