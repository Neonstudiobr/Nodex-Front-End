import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";

const applications = [
  { 
    title: "What is Lorem Ipsum?", 
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    reviewedBy: "Blake",
    status: "Closed",
    lastUpdate: "5 Months Ago"
  },
  { 
    title: "What is Lorem Ipsum?", 
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    reviewedBy: "Blake",
    status: "Closed",
    lastUpdate: "5 Months Ago"
  },
  { 
    title: "What is Lorem Ipsum?", 
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    reviewedBy: "Blake",
    status: "Closed",
    lastUpdate: "5 Months Ago"
  },
  { 
    title: "What is Lorem Ipsum?", 
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    reviewedBy: "Blake",
    status: "Closed",
    lastUpdate: "5 Months Ago"
  },
];

const activeTickets = [
  {
    id: "0001",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    status: "Closed",
    lastUpdate: "5 Months Ago"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    status: "Closed",
    lastUpdate: "5 Months Ago"
  },
];

const AdminProfile = () => {
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

        {/* Reviewed Applications */}
        <div className="bg-card border border-border/40 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/50 rounded">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Reviewed Applications</h3>
              <p className="text-sm text-muted-foreground">1,500 Applications</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-12 gap-4 text-sm text-muted-foreground pb-3 border-b border-border/40">
              <div className="col-span-2">Title</div>
              <div className="col-span-4">Description</div>
              <div className="col-span-2">Reviewed by</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2">Last update</div>
              <div className="col-span-1">Review</div>
            </div>
            {applications.map((app, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-center text-sm py-3 border-b border-border/40">
                <div className="col-span-2 text-foreground">{app.title}</div>
                <div className="col-span-4 text-muted-foreground">{app.description}</div>
                <div className="col-span-2 text-muted-foreground">{app.reviewedBy}</div>
                <div className="col-span-1">
                  <span className="px-3 py-1 bg-secondary/50 border border-border/40 rounded text-xs">
                    {app.status}
                  </span>
                </div>
                <div className="col-span-2 text-muted-foreground">{app.lastUpdate}</div>
                <div className="col-span-1">
                  <Button variant="outline" size="sm" className="bg-secondary/50 border-border/40 text-xs px-3">
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* List of Active Tickets */}
        <div className="bg-card border border-border/40 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/50 rounded">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">List of Active Tickets</h3>
              <p className="text-sm text-muted-foreground">1,500 Applications</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-12 gap-4 text-sm text-muted-foreground pb-3 border-b border-border/40">
              <div className="col-span-1">Ticket ID</div>
              <div className="col-span-2">Title</div>
              <div className="col-span-5">Description</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2">Last update</div>
              <div className="col-span-1">Review</div>
            </div>
            {activeTickets.map((ticket, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-center text-sm py-3 border-b border-border/40">
                <div className="col-span-1 text-foreground">{ticket.id}</div>
                <div className="col-span-2 text-foreground">{ticket.title}</div>
                <div className="col-span-5 text-muted-foreground">{ticket.description}</div>
                <div className="col-span-1">
                  <span className="px-3 py-1 bg-secondary/50 border border-border/40 rounded text-xs">
                    {ticket.status}
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

export default AdminProfile;
