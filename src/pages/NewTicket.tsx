import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, MessageSquare, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewTicket = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate("/support");
  };

  const handleCancel = () => {
    navigate("/support");
  };

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
          <h1 className="text-2xl font-bold text-foreground mb-8">NEW SUPPORT TICKETS</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Title"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Select>
                <SelectTrigger className="w-[200px] bg-background/50 border-border text-foreground">
                  <SelectValue placeholder="Fivem Public" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="fivem-public">Fivem Public</SelectItem>
                  <SelectItem value="fivem-private">Fivem Private</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[200px] bg-background/50 border-border text-foreground">
                  <SelectValue placeholder="RP Support" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="rp-support">RP Support</SelectItem>
                  <SelectItem value="technical-support">Technical Support</SelectItem>
                  <SelectItem value="application-support">Application Support</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Textarea
                placeholder="Description"
                className="min-h-[200px] bg-background/50 border-border text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="submit"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              >
                Submit
              </Button>
              <Button
                type="button"
                variant="outline"
                className="border-border text-foreground hover:bg-muted px-8"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewTicket;
