import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
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
import { Search, Ticket, Copy, X } from "lucide-react";

const applications = [
  {
    id: "0001",
    category: "Whitelist",
    user: "Blake",
    dateCreated: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    category: "Whitelist",
    user: "Blake",
    dateCreated: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    category: "Whitelist",
    user: "Blake",
    dateCreated: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    category: "Whitelist",
    user: "Blake",
    dateCreated: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    category: "Whitelist",
    user: "Blake",
    dateCreated: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    category: "Whitelist",
    user: "Blake",
    dateCreated: "09/09/2025 - 19:31"
  },
  {
    id: "0001",
    category: "Whitelist",
    user: "Blake",
    dateCreated: "09/09/2025 - 19:31"
  },
];

const AdminApplications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(4);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [actionsDialogOpen, setActionsDialogOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total applications */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-secondary/50 rounded">
                <Ticket className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total applications</p>
                <p className="text-lg font-semibold text-foreground">1,500 Applications</p>
              </div>
            </div>
          </div>

          {/* Total Applications Accepted */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-500/20 rounded">
                <Ticket className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Applications Accepted</p>
                <p className="text-lg font-semibold text-foreground">1,500 Application</p>
              </div>
            </div>
          </div>

          {/* Total Applications Rejectt */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-nodex-red/20 rounded">
                <Ticket className="w-6 h-6 text-nodex-red" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Applications Rejectt</p>
                <p className="text-lg font-semibold text-foreground">1,500 Application</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="col-span-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search ID"
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
                <SelectItem value="whitelist">Whitelist</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
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

        {/* Applications List */}
        <div className="bg-card border border-border/40 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-secondary/50 rounded">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Applications List</h3>
                <p className="text-sm text-muted-foreground">1,500 Cases</p>
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
              <div className="col-span-1">ID</div>
              <div className="col-span-2">Category</div>
              <div className="col-span-3">User</div>
              <div className="col-span-2">Date Created</div>
              <div className="col-span-2">Actions</div>
              <div className="col-span-2">In Review</div>
            </div>
            {applications.map((app, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-center text-sm py-3 border-b border-border/40">
                <div className="col-span-1 text-foreground">{app.id}</div>
                <div className="col-span-2 text-foreground">{app.category}</div>
                <div className="col-span-3 flex items-center gap-2">
                  <div className="w-6 h-6 bg-nodex-red rounded" />
                  <span className="text-foreground">{app.user}</span>
                </div>
                <div className="col-span-2 text-muted-foreground">{app.dateCreated}</div>
                <div className="col-span-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-secondary/50 border-border/40 text-xs px-3"
                    onClick={() => setActionsDialogOpen(true)}
                  >
                    Actions
                  </Button>
                </div>
                <div className="col-span-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-secondary/50 border-border/40 text-xs px-3"
                    onClick={() => setViewDialogOpen(true)}
                  >
                    View
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* View Dialog */}
      <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
        <DialogContent className="bg-card border-border/40 max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-foreground">Application View - ID 0001 - User JotapeN</DialogTitle>
              <button onClick={() => setViewDialogOpen(false)} className="p-1 hover:bg-secondary/50 rounded">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-nodex-red rounded" />
              <div>
                <p className="text-xs text-muted-foreground">• Member</p>
                <p className="text-lg font-medium text-foreground">JotapeN</p>
              </div>
            </div>

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

            <div>
              <p className="text-sm text-muted-foreground mb-2">Category Selected</p>
              <div className="p-3 bg-secondary/50 border border-border/40 rounded">
                <p className="text-sm text-foreground">Whitelist...</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Reason</p>
              <div className="p-3 bg-secondary/50 border border-border/40 rounded">
                <p className="text-sm text-foreground">Whitelist...</p>
              </div>
            </div>

            <Button variant="outline" className="w-full bg-secondary/50 border-border/40">
              Change Category
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <Button className="bg-nodex-red hover:bg-nodex-red/90 text-white">
                To deny
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                To Accept
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Actions Dialog */}
      <Dialog open={actionsDialogOpen} onOpenChange={setActionsDialogOpen}>
        <DialogContent className="bg-card border-border/40 max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="text-foreground">Application - ID 0001 - User JotapeN</DialogTitle>
              <button onClick={() => setActionsDialogOpen(false)} className="p-1 hover:bg-secondary/50 rounded">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Testing <span className="text-red-500">*</span></label>
              <Select defaultValue="testing">
                <SelectTrigger className="bg-secondary/50 border-border/40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="testing">Testing</SelectItem>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Testing <span className="text-red-500">*</span></label>
              <Select defaultValue="testing">
                <SelectTrigger className="bg-secondary/50 border-border/40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="testing">Testing</SelectItem>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Testing <span className="text-red-500">*</span></label>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Checkbox id="check1" defaultChecked className="border-border/40" />
                  <label htmlFor="check1" className="text-sm text-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check2" className="border-border/40" />
                  <label htmlFor="check2" className="text-sm text-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check3" className="border-border/40" />
                  <label htmlFor="check3" className="text-sm text-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check4" className="border-border/40" />
                  <label htmlFor="check4" className="text-sm text-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="check5" className="border-border/40" />
                  <label htmlFor="check5" className="text-sm text-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Testing <span className="text-red-500">*</span></label>
              <p className="text-sm text-foreground mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <Textarea
                defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                className="min-h-[150px] bg-secondary/50 border-border/40"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminApplications;
