import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
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
import { Search, Ticket, Users, Shield, FileText, TrendingUp, DollarSign, MousePointer } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const chartData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 6000 },
  { month: "Mar", value: 3000 },
  { month: "Apr", value: 5000 },
  { month: "May", value: 2000 },
  { month: "Jun", value: 3500 },
  { month: "Jul", value: 1500 },
  { month: "Aug", value: 4500 },
  { month: "Sep", value: 6500 },
  { month: "Oct", value: 5500 },
  { month: "Nov", value: 4000 },
  { month: "Dec", value: 7000 },
];

const staffMembers = [
  { name: "Blake", role: "Administrator", created: "09/09/2025 - 00:00 PM" },
  { name: "Blake", role: "Administrator", created: "09/09/2025 - 00:00 PM" },
  { name: "Blake", role: "Administrator", created: "09/09/2025 - 00:00 PM" },
];

const activeStaffs = [
  { name: "Blake", status: "3 hours online", activity: "Looking at case #2 | Looking at <User> Profile" },
  { name: "Blake", status: "3 hours online", activity: "Looking at case #2 | Looking at <User> Profile" },
  { name: "Blake", status: "3 hours online", activity: "Looking at case #2 | Looking at <User> Profile" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Top Buttons */}
        <div className="flex gap-4 mb-8">
          <Button variant="outline" className="bg-secondary/50 border-border/40 hover:bg-secondary">
            Store Settings
          </Button>
          <Button 
            variant="outline" 
            className="bg-secondary/50 border-border/40 hover:bg-secondary"
            onClick={() => navigate("/admin/permissions")}
          >
            Permissions
          </Button>
          <Button variant="outline" className="bg-secondary/50 border-border/40 hover:bg-secondary">
            Logs
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard icon={Ticket} title="Total tickets" value="1,500 Tickets" />
          <StatCard icon={Users} title="Total Members" value="1,500 Tickets" />
          <StatCard icon={Shield} title="Whitelisted Members" value="1,500 Tickets" />
          <StatCard icon={FileText} title="Total Appeals" value="1,500 Tickets" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Active Members Chart */}
          <div className="lg:col-span-2 bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/50 rounded">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Active Members</h3>
                  <p className="text-sm text-muted-foreground">1,500 Current</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Select defaultValue="months">
                  <SelectTrigger className="w-32 bg-secondary/50 border-border/40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="months">Months</SelectItem>
                    <SelectItem value="weeks">Weeks</SelectItem>
                    <SelectItem value="days">Days</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="bg-secondary/50 border-border/40">
                  Download
                </Button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Bar dataKey="value" fill="#555" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Store Stats */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/50 rounded">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Store Stats</h3>
                <p className="text-sm text-muted-foreground">1,500 Current</p>
              </div>
            </div>
            <div className="space-y-4">
              <StatCard icon={Users} title="Total Subscribers" value="1,500 Subs" change="-10.2%" changeType="negative" />
              <StatCard icon={DollarSign} title="Monthly Revenue" value="$ 5,000" change="+19.2%" changeType="positive" />
              <StatCard icon={MousePointer} title="Most Package Clicks" value="5,000 Clicks" change="+19.2%" changeType="positive" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* List of Staff Members */}
          <div className="lg:col-span-2 bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-secondary/50 rounded">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">List of Staff Members</h3>
                  <p className="text-sm text-muted-foreground">1,500 Current</p>
                </div>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary/50 border-border/40"
                />
              </div>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-12 gap-4 text-sm text-muted-foreground pb-3 border-b border-border/40">
                <div className="col-span-3">User</div>
                <div className="col-span-3">Role</div>
                <div className="col-span-3">Account Created</div>
                <div className="col-span-3">Actions</div>
              </div>
              {staffMembers.map((staff, index) => (
                <div key={index} className="grid grid-cols-12 gap-4 items-center text-sm py-3 border-b border-border/40">
                  <div className="col-span-3 flex items-center gap-2">
                    <div className="w-8 h-8 bg-nodex-red rounded" />
                    <span className="text-foreground">{staff.name}</span>
                  </div>
                  <div className="col-span-3 text-muted-foreground">{staff.role}</div>
                  <div className="col-span-3 text-muted-foreground">{staff.created}</div>
                  <div className="col-span-3 flex gap-2">
                    <Button variant="outline" size="sm" className="bg-secondary/50 border-border/40">
                      Demote
                    </Button>
                    <Select defaultValue="dropdown">
                      <SelectTrigger className="w-28 bg-secondary/50 border-border/40">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dropdown">Dropdown</SelectItem>
                        <SelectItem value="edit">Edit</SelectItem>
                        <SelectItem value="delete">Delete</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Staffs */}
          <div className="bg-card border border-border/40 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/50 rounded">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Active Staffs</h3>
                <p className="text-sm text-muted-foreground">05 Active</p>
              </div>
            </div>
            <div className="space-y-4">
              {activeStaffs.map((staff, index) => (
                <div key={index} className="pb-4 border-b border-border/40 last:border-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-nodex-red rounded" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{staff.name}</p>
                      <p className="text-xs text-green-500">{staff.status}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground ml-13">{staff.activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
