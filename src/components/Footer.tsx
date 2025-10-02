import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Youtube, Twitter, MessageSquare, Globe, User } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold">
                <span className="text-foreground">Node</span>
                <span className="text-primary">X</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Experience the most immersive GTA V roleplay server with custom features, active community, and endless opportunities for storytelling.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="p-2">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
          
          {/* Language and User */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Globe className="h-4 w-4" />
                <span className="ml-2 text-sm">ENG</span>
              </Button>
            </div>
            
            <div>
              <Input 
                placeholder="Join our discord" 
                className="mb-2 bg-secondary border-border"
              />
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                Join Discord
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <div>Server IP:</div>
              <div className="text-foreground font-mono">play.nodex-rp.com</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 NightCity - NodeX. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;