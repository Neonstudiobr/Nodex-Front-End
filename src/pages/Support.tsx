import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, MessageSquare, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-bg.jpg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Support = () => {
  const navigate = useNavigate();

  const tickets = [
    {
      id: 1,
      category: "Application Support",
      title: "Application lorem ipsum in dolor the server fivem",
      status: "Closed",
      lastUpdated: "5 Months Ago",
    },
    {
      id: 2,
      category: "Application Support",
      title: "Application lorem ipsum in dolor the server fivem",
      status: "Closed",
      lastUpdated: "5 Months Ago",
    },
    {
      id: 3,
      category: "Application Support",
      title: "Application lorem ipsum in dolor the server fivem",
      status: "Closed",
      lastUpdated: "5 Months Ago",
    },
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-foreground">SUPPORT TICKETS</h1>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => navigate("/support/new")}
            >
              New Ticket
            </Button>
          </div>

          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">Category</TableHead>
                <TableHead className="text-muted-foreground">Title</TableHead>
                <TableHead className="text-muted-foreground text-right">Status</TableHead>
                <TableHead className="text-muted-foreground text-right">Last Updated</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id} className="border-border hover:bg-muted/5">
                  <TableCell>
                    <Badge variant="outline" className="border-border text-foreground">
                      {ticket.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-foreground">{ticket.title}</TableCell>
                  <TableCell className="text-right">
                    <Badge variant="outline" className="border-border text-foreground">
                      {ticket.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-right">
                    {ticket.lastUpdated}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-muted"
                      onClick={() => navigate(`/support/ticket/${ticket.id}`)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
