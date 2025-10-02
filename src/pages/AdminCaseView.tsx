import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "lucide-react";

const linkedTickets = [
  {
    id: "0001",
    title: "What is Lorem Ipsum? Testing List Cases Description",
    claimedBy: "Blake"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum? Testing List Cases Description",
    claimedBy: "Blake"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum? Testing List Cases Description",
    claimedBy: "Blake"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum? Testing List Cases Description",
    claimedBy: "Blake"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum? Testing List Cases Description",
    claimedBy: "Blake"
  },
  {
    id: "0001",
    title: "What is Lorem Ipsum? Testing List Cases Description",
    claimedBy: "Blake"
  },
];

const internalNotes = [
  "- AdminX: 'Investigation started'",
  "- AdminY: 'Waiting for evidence'"
];

const AdminCaseView = () => {
  const navigate = useNavigate();
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    // TODO: Add note logic
    console.log("Adding note:", newNote);
    setNewNote("");
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4 text-sm text-foreground">
            <span className="font-medium">CASE 1023</span>
            <span>•</span>
            <span>CHEATER IN MIRROR PARK</span>
            <span>•</span>
            <span>BLAKE</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-card border border-border/40 rounded text-sm">
              STATUS: OPEN
            </div>
            <div className="px-4 py-2 bg-card border border-border/40 rounded text-sm">
              CLAIMED BY: JOTAPEN
            </div>
            <div className="px-4 py-2 bg-card border border-border/40 rounded text-sm">
              DATE CREATED: 22/09/25
            </div>
          </div>
        </div>

        {/* Linked Tickets */}
        <div className="bg-card border border-border/40 rounded-lg p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/50 rounded">
              <Ticket className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Linked Tickets</h3>
              <p className="text-sm text-muted-foreground">1,500 Applications</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-12 gap-4 text-sm text-muted-foreground pb-3 border-b border-border/40">
              <div className="col-span-2">Ticket ID</div>
              <div className="col-span-6">Ticket Titile</div>
              <div className="col-span-3">Claimed By</div>
              <div className="col-span-1">View</div>
            </div>
            {linkedTickets.map((ticket, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-center text-sm py-3 border-b border-border/40">
                <div className="col-span-2 text-foreground">{ticket.id}</div>
                <div className="col-span-6 text-foreground">{ticket.title}</div>
                <div className="col-span-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-nodex-red rounded" />
                  <span className="text-foreground">{ticket.claimedBy}</span>
                </div>
                <div className="col-span-1">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-secondary/50 border-border/40 text-xs px-3"
                    onClick={() => navigate("/admin/cases/1023/ticket/0001")}
                  >
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Internal Notes and New Note */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Internal Notes */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/50 rounded">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Internal Notes</h3>
                <p className="text-sm text-muted-foreground">1,500 Notes</p>
              </div>
            </div>
            <div className="space-y-2">
              {internalNotes.map((note, index) => (
                <p key={index} className="text-sm text-foreground">{note}</p>
              ))}
            </div>
          </div>

          {/* New Note */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/50 rounded">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">New Note</h3>
              </div>
            </div>
            <Textarea
              placeholder="Type here (Bold, Italic...)"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="mb-4 min-h-[100px] bg-secondary/50 border-border/40"
            />
            <Button 
              className="w-full bg-nodex-red hover:bg-nodex-red/90 text-white"
              onClick={handleAddNote}
            >
              ADD NOTE
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminCaseView;
