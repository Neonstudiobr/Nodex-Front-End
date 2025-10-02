import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Ticket } from "lucide-react";

const tickets = [
  {
    id: "0001",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    author: "Jota",
    server: "Server",
    lastUpdate: "5 Months Ago"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    author: "Jota",
    server: "Server",
    lastUpdate: "5 Months Ago"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    author: "Jota",
    server: "Server",
    lastUpdate: "5 Months Ago"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    author: "Jota",
    server: "Server",
    lastUpdate: "5 Months Ago"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    author: "Jota",
    server: "Server",
    lastUpdate: "5 Months Ago"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    author: "Jota",
    server: "Server",
    lastUpdate: "5 Months Ago"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    author: "Jota",
    server: "Server",
    lastUpdate: "5 Months Ago"
  },
];

const AdminTickets = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(4);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total tickets */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/50 rounded">
                <Ticket className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total tickets</p>
                <p className="text-lg font-semibold text-foreground">1,500 Tickets</p>
              </div>
            </div>
          </div>

          {/* Total tickets opened */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/20 rounded">
                <Ticket className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total tickets opened</p>
                <p className="text-lg font-semibold text-foreground">1,500 Tickets</p>
              </div>
            </div>
          </div>

          {/* Total tickets closed */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-nodex-red/20 rounded">
                <Ticket className="w-6 h-6 text-nodex-red" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total tickets closed</p>
                <p className="text-lg font-semibold text-foreground">1,500 Tickets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border/40"
            />
          </div>
          <div className="col-span-2">
            <Select defaultValue="category">
              <SelectTrigger className="bg-card border-border/40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category">Category</SelectItem>
                <SelectItem value="support">Support</SelectItem>
                <SelectItem value="bug">Bug</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2">
            <Select defaultValue="servers">
              <SelectTrigger className="bg-card border-border/40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="servers">Servers</SelectItem>
                <SelectItem value="server1">Server 1</SelectItem>
                <SelectItem value="server2">Server 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-2">
            <Select defaultValue="date">
              <SelectTrigger className="bg-card border-border/40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* List of Active Tickets */}
        <div className="bg-card border border-border/40 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/50 rounded">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">List of Active Tickets</h3>
                <p className="text-sm text-muted-foreground">1,500 Applications</p>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(1)}
                className={`w-8 h-8 p-0 ${currentPage === 1 ? 'bg-secondary/50' : 'bg-card'} border-border/40`}
              >
                1
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(2)}
                className={`w-8 h-8 p-0 ${currentPage === 2 ? 'bg-secondary/50' : 'bg-card'} border-border/40`}
              >
                2
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(3)}
                className={`w-8 h-8 p-0 ${currentPage === 3 ? 'bg-secondary/50' : 'bg-card'} border-border/40`}
              >
                3
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(4)}
                className={`w-8 h-8 p-0 ${currentPage === 4 ? 'bg-nodex-red text-white' : 'bg-card'} border-border/40`}
              >
                4
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(5)}
                className={`w-8 h-8 p-0 ${currentPage === 5 ? 'bg-secondary/50' : 'bg-card'} border-border/40`}
              >
                5
              </Button>
              <span className="text-muted-foreground px-2">...</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(20)}
                className={`w-8 h-8 p-0 ${currentPage === 20 ? 'bg-secondary/50' : 'bg-card'} border-border/40`}
              >
                20
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-12 gap-4 text-sm text-muted-foreground pb-3 border-b border-border/40">
              <div className="col-span-1">Ticket ID</div>
              <div className="col-span-2">Title</div>
              <div className="col-span-4">Description</div>
              <div className="col-span-1">Author</div>
              <div className="col-span-1">Server</div>
              <div className="col-span-2">Last update</div>
              <div className="col-span-1">Review</div>
            </div>
            {tickets.map((ticket, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-center text-sm py-3 border-b border-border/40">
                <div className="col-span-1 text-foreground">{ticket.id}</div>
                <div className="col-span-2 text-foreground">{ticket.title}</div>
                <div className="col-span-4 text-muted-foreground">{ticket.description}</div>
                <div className="col-span-1">
                  <span className="px-3 py-1 bg-secondary/50 border border-border/40 rounded text-xs">
                    {ticket.author}
                  </span>
                </div>
                <div className="col-span-1">
                  <span className="px-3 py-1 bg-secondary/50 border border-border/40 rounded text-xs">
                    {ticket.server}
                  </span>
                </div>
                <div className="col-span-2 text-muted-foreground">{ticket.lastUpdate}</div>
                <div className="col-span-1">
                  <Button variant="outline" size="sm" className="bg-secondary/50 border-border/40 text-xs px-3">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminTickets;
