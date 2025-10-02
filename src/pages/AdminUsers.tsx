import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Users, UserCheck, UserX, Copy } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const AdminUsers = () => {
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  // Mock data
  const users = Array(7).fill(null).map((_, i) => ({
    id: "0001",
    name: "Blake",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Blake",
    steamUid: "12317281723917283912",
    discordId: "12317281723917283912",
    member: true,
    accountCreated: "09/09/2024",
    warnings: [
      {
        type: "Warning",
        count: 1,
        reason: "Cheater",
        date: "09/09/09 - 09:09 PM",
        staff: "Blake",
        startEnd: "Start 09/09/09 - 09:09 PM | End 09/09/09 - 09:09 PM",
        revoked: "Yes (on 09/08)"
      }
    ],
    logs: ["AdminY changed status (10/09)"]
  }));

  const handleViewUser = (user: any) => {
    setSelectedUser(user);
    setViewDialogOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={Users}
            title="Total Users"
            value="1,500 Users"
          />
          <StatCard
            icon={UserCheck}
            title="Total Users Whitelisted"
            value="1,500 Application"
          />
          <StatCard
            icon={UserX}
            title="Total Users Banned"
            value="1,500 Application"
          />
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Input
              placeholder="Search Player/ID"
              className="bg-card border-border/40"
            />
          </div>
          <Select>
            <SelectTrigger className="w-[150px] bg-card border-border/40">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="member">Member</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[150px] bg-card border-border/40">
              <SelectValue placeholder="Servers" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="all">All Servers</SelectItem>
              <SelectItem value="server1">Server 1</SelectItem>
              <SelectItem value="server2">Server 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[150px] bg-card border-border/40">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent className="bg-popover">
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* User List Table */}
        <div className="bg-card border border-border/40 rounded-lg">
          <div className="p-6 border-b border-border/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/50 rounded">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">User List</h2>
                  <p className="text-sm text-muted-foreground">1,500 Users</p>
                </div>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, "...", 20].map((page, i) => (
                  <Button
                    key={i}
                    variant={page === 4 ? "default" : "outline"}
                    size="sm"
                    className={page === 4 ? "bg-nodex-red hover:bg-nodex-red/90" : ""}
                  >
                    {page}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-border/40">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">ID</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Steam UID</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Discord ID</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-b border-border/40 last:border-0">
                    <td className="p-4 text-sm text-foreground">{user.id}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm text-foreground">{user.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm font-mono text-foreground">{user.steamUid}</td>
                    <td className="p-4 text-sm font-mono text-foreground">{user.discordId}</td>
                    <td className="p-4 text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleViewUser(user)}
                        className="border-border/40"
                      >
                        View Users
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* View User Dialog */}
        <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
          <DialogContent className="max-w-md bg-card border-border/40 max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-foreground">View User</DialogTitle>
            </DialogHeader>

            {selectedUser && (
              <div className="space-y-6">
                {/* User Info */}
                <div className="flex items-center gap-3">
                  <img
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    className="w-16 h-16 rounded"
                  />
                  <div>
                    <div className="text-sm text-muted-foreground">• Member</div>
                    <div className="text-lg font-semibold text-foreground">JotapeN</div>
                  </div>
                </div>

                {/* Discord ID */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Discord ID</label>
                  <div className="flex items-center gap-2">
                    <Input
                      value="12378192741882794172831..."
                      readOnly
                      className="bg-secondary/20 border-border/40 font-mono text-sm"
                    />
                    <Button size="icon" variant="ghost" className="shrink-0">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Steam UID */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Steam UID</label>
                  <div className="flex items-center gap-2">
                    <Input
                      value="12378192741882794172831..."
                      readOnly
                      className="bg-secondary/20 border-border/40 font-mono text-sm"
                    />
                    <Button size="icon" variant="ghost" className="shrink-0">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Account Created */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Account created</label>
                  <Input
                    value="DD/MM/YYYY"
                    readOnly
                    className="bg-secondary/20 border-border/40"
                  />
                </div>

                {/* Warnings / Bans */}
                <div>
                  <label className="text-sm text-muted-foreground mb-3 block">List of Warnings / Bans</label>
                  <div className="bg-secondary/20 border border-border/40 rounded p-4 space-y-2">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-foreground">Warning:</span>
                      <span className="text-sm font-semibold text-foreground">1</span>
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Reason:</span>
                        <span className="text-foreground">Cheater</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">data:</span>
                        <span className="text-foreground">09/09/09 - 09:09 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">staff:</span>
                        <span className="text-foreground">Blake</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Start/End</span>
                        <span className="text-foreground text-right">Start 09/09/09 - 09:09 PM | End 09/09/09 - 09:09 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Revoked:</span>
                        <span className="text-foreground">Yes (on 09/08)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes/Comments */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Notes/Comments</label>
                  <div className="text-xs text-muted-foreground mb-2">Staff comments...</div>
                  <Button variant="outline" size="sm" className="w-full border-border/40">
                    Comments
                  </Button>
                </div>

                {/* Logs */}
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Logs</label>
                  <div className="text-sm text-foreground">
                    AdminY changed status (10/09)
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default AdminUsers;
