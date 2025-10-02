import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Ticket } from "lucide-react";

const cases = [
  {
    id: "0001",
    description: "What is Lorem Ipsum? Testing List Cases Description",
    claimed: "Blake",
    dateCreated: "09/09/2025 - 19:31",
    dateClosed: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    description: "What is Lorem Ipsum? Testing List Cases Description",
    claimed: "Blake",
    dateCreated: "09/09/2025 - 19:31",
    dateClosed: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    description: "What is Lorem Ipsum? Testing List Cases Description",
    claimed: "Blake",
    dateCreated: "09/09/2025 - 19:31",
    dateClosed: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    description: "What is Lorem Ipsum? Testing List Cases Description",
    claimed: "Blake",
    dateCreated: "09/09/2025 - 19:31",
    dateClosed: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    description: "What is Lorem Ipsum? Testing List Cases Description",
    claimed: "Blake",
    dateCreated: "09/09/2025 - 19:31",
    dateClosed: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    description: "What is Lorem Ipsum? Testing List Cases Description",
    claimed: "Blake",
    dateCreated: "09/09/2025 - 19:31",
    dateClosed: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    description: "What is Lorem Ipsum? Testing List Cases Description",
    claimed: "Blake",
    dateCreated: "09/09/2025 - 19:31",
    dateClosed: "09/09/2025 - 19:31"
  },
];

const AdminCases = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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

        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search Cases"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border/40"
            />
          </div>
        </div>

        {/* List cases */}
        <div className="bg-card border border-border/40 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/50 rounded">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">List cases</h3>
              <p className="text-sm text-muted-foreground">1,500 Cases</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-12 gap-4 text-sm text-muted-foreground pb-3 border-b border-border/40">
              <div className="col-span-1">Case ID</div>
              <div className="col-span-4">Case Description</div>
              <div className="col-span-2">Claimed</div>
              <div className="col-span-2">In Review</div>
              <div className="col-span-2">Date Created</div>
              <div className="col-span-1">Date Closed</div>
            </div>
            {cases.map((caseItem, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-center text-sm py-3 border-b border-border/40">
                <div className="col-span-1 text-foreground">{caseItem.id}</div>
                <div className="col-span-4 text-foreground">{caseItem.description}</div>
                <div className="col-span-2 flex items-center gap-2">
                  <div className="w-6 h-6 bg-nodex-red rounded" />
                  <span className="text-foreground">{caseItem.claimed}</span>
                </div>
                <div className="col-span-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-secondary/50 border-border/40 text-xs px-3"
                    onClick={() => navigate("/admin/cases/1023")}
                  >
                    View
                  </Button>
                </div>
                <div className="col-span-2 text-muted-foreground">{caseItem.dateCreated}</div>
                <div className="col-span-1 text-muted-foreground">{caseItem.dateClosed}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminCases;
