import { Button } from "@/components/ui/button";
import { User, MessageSquare, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur border-b border-gray-800">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold">
            <span className="text-primary">N</span>
            <span className="text-white"> NodeX</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">Home</a>
          <a href="/store" className="text-white hover:text-primary transition-colors text-sm font-medium">Store</a>
          <a href="/rules" className="text-white hover:text-primary transition-colors text-sm font-medium">Rules</a>
        </nav>
        
        <div className="flex items-center space-x-2">
          <a href="/login">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
              <User className="h-4 w-4" />
            </Button>
          </a>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2">
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-2 flex items-center gap-1">
            <Globe className="h-4 w-4" />
            <span className="text-xs">ENG</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;