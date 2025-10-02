import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const messages = [
  {
    role: "support",
    name: "BlakeX",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: "07:00 PM - FRIDAY"
  },
  {
    role: "member",
    name: "JotapeN",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: "07:00 PM - FRIDAY"
  },
  {
    role: "support",
    name: "BlakeX",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: ""
  }
];

const AdminCaseTicketView = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSend = () => {
    // TODO: Send message logic
    console.log("Sending message:", message);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background/95 backdrop-blur-sm p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Messages */}
          <div className="lg:col-span-2 bg-card border border-border/40 rounded-lg">
            <div className="p-6 border-b border-border/40 flex items-center justify-between">
              <h2 className="text-lg font-medium text-foreground">Chat Messages</h2>
              <button 
                onClick={() => navigate("/admin/cases/1023")}
                className="p-2 hover:bg-secondary/50 rounded"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="p-6 space-y-6 min-h-[500px] max-h-[500px] overflow-y-auto">
              {messages.map((msg, index) => (
                <div key={index} className={`flex gap-3 ${msg.role === "member" ? "justify-end" : ""}`}>
                  {msg.role === "support" && (
                    <div className="w-10 h-10 bg-nodex-red rounded flex-shrink-0" />
                  )}
                  <div className={`flex-1 ${msg.role === "member" ? "max-w-[70%]" : ""}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-muted-foreground">• {msg.role === "support" ? "Support" : "Member"}</span>
                      <span className="text-sm font-medium text-foreground">{msg.name}</span>
                    </div>
                    <p className="text-sm text-foreground mb-1">{msg.content}</p>
                    {msg.time && <p className="text-xs text-muted-foreground">{msg.time}</p>}
                  </div>
                  {msg.role === "member" && (
                    <div className="w-10 h-10 bg-nodex-red rounded flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-border/40">
              <div className="flex gap-3">
                <Input
                  placeholder="Send Message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 bg-secondary/50 border-border/40"
                />
                <Button 
                  className="bg-nodex-red hover:bg-nodex-red/90 text-white px-8"
                  onClick={handleSend}
                >
                  Send
                </Button>
              </div>
            </div>
          </div>

          {/* Member Info */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-nodex-red rounded" />
              <div>
                <p className="text-xs text-muted-foreground">• Member</p>
                <p className="text-lg font-medium text-foreground">JotapeN</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Discord ID</p>
                <div className="flex items-center gap-2 p-3 bg-secondary/50 border border-border/40 rounded">
                  <p className="text-sm font-mono text-foreground flex-1">123781927418827941728319...</p>
                  <button className="p-1 hover:bg-secondary rounded">
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Steam UID</p>
                <div className="flex items-center gap-2 p-3 bg-secondary/50 border border-border/40 rounded">
                  <p className="text-sm font-mono text-foreground flex-1">123781927418827941728319...</p>
                  <button className="p-1 hover:bg-secondary rounded">
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full bg-secondary/50 border-border/40 hover:bg-secondary"
              >
                Close Ticket
              </Button>

              <Button 
                variant="outline" 
                className="w-full bg-secondary/50 border-border/40 hover:bg-secondary"
              >
                Reply Anonymously
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCaseTicketView;
