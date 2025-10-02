import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LogEntry {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  steamUid: string;
  discordId: string;
  accountCreated: string;
  subscription: string;
  action: string;
}

const mockLogs: LogEntry[] = [
  {
    id: "1",
    user: { name: "Blake", avatar: "" },
    steamUid: "348102371982373921831",
    discordId: "348102371982373921831",
    accountCreated: "09/09/2025 - 00:00 PM",
    subscription: "Active",
    action: "Staff (BLAKE) Closed case #382",
  },
  {
    id: "2",
    user: { name: "Blake", avatar: "" },
    steamUid: "348102371982373921831",
    discordId: "348102371982373921831",
    accountCreated: "09/09/2025 - 00:00 PM",
    subscription: "Active",
    action: "Staff (BLAKE) Closed case #382",
  },
  {
    id: "3",
    user: { name: "Blake", avatar: "" },
    steamUid: "348102371982373921831",
    discordId: "348102371982373921831",
    accountCreated: "09/09/2025 - 00:00 PM",
    subscription: "Active",
    action: "Staff (BLAKE) Closed case #382",
  },
  {
    id: "4",
    user: { name: "Blake", avatar: "" },
    steamUid: "348102371982373921831",
    discordId: "348102371982373921831",
    accountCreated: "09/09/2025 - 00:00 PM",
    subscription: "Active",
    action: "Staff (BLAKE) Closed case #382",
  },
];

const AdminLogs = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex-1 p-8">
        {/* Top Navigation */}
        <div className="flex gap-4 mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/store-settings")}
            className="border-border/40"
          >
            Store Settings
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/admin/permissions")}
            className="border-border/40"
          >
            Permissions
          </Button>
          <Button
            variant="outline"
            className="border-primary bg-primary/10 text-primary"
          >
            Logs
          </Button>
        </div>

        {/* Logs Section */}
        <div className="bg-card border border-border/40 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-secondary/50 rounded">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-semibold">Logs</h2>
            </div>

            {/* Search */}
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-border/40"
              />
            </div>
          </div>

          {/* Logs Table */}
          <div className="space-y-0 border border-border/40 rounded-lg overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-[200px_180px_180px_200px_150px_120px] gap-4 p-4 bg-secondary/30 border-b border-border/40">
              <div className="text-sm font-medium">User</div>
              <div className="text-sm font-medium">Steam UID</div>
              <div className="text-sm font-medium">Discord ID</div>
              <div className="text-sm font-medium">Account Created</div>
              <div className="text-sm font-medium">Subscription</div>
              <div className="text-sm font-medium">Actions</div>
            </div>

            {/* Table Body */}
            {mockLogs.map((log) => (
              <div key={log.id} className="border-b border-border/40 last:border-b-0">
                {/* Main Row */}
                <div className="grid grid-cols-[200px_180px_180px_200px_150px_120px] gap-4 p-4 items-center bg-card hover:bg-secondary/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={log.user.avatar} />
                      <AvatarFallback>{log.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{log.user.name}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{log.steamUid}</div>
                  <div className="text-sm text-muted-foreground">{log.discordId}</div>
                  <div className="text-sm text-muted-foreground">{log.accountCreated}</div>
                  <div className="text-sm text-muted-foreground">{log.subscription}</div>
                  <div>
                    <Button variant="outline" size="sm" className="border-border/40">
                      View
                    </Button>
                  </div>
                </div>

                {/* Action Row */}
                <div className="px-4 py-3 bg-secondary/10">
                  <p className="text-sm text-muted-foreground">{log.action}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogs;
