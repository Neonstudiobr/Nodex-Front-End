import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Copy } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const menuItems = [
    { label: "PROFILE", path: "/admin/profile" },
    { label: "TICKETS", path: "/admin/tickets" },
    { label: "CASES", path: "/admin/cases" },
    { label: "APPLICATIONS", path: "/admin/applications" },
    { label: "APPEALS", path: "/admin/appeals" },
    { label: "USERS", path: "/admin/users" },
    { label: "DASHBOARD", path: "/admin/dashboard" }
  ];

  return (
    <aside className="w-64 bg-card border-r border-border/40 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border/40">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 bg-nodex-red">
            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-white" />
          </div>
          <span className="text-nodex-red text-xl font-bold">NodeX</span>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-6">
        {menuItems.map((item, index) => (
          <button
            key={`${item.label}-${index}`}
            onClick={() => navigate(item.path)}
            className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors ${
              location.pathname === item.path
                ? "text-nodex-red bg-nodex-red/10 border-l-2 border-nodex-red"
                : "text-muted-foreground hover:text-foreground border-l-2 border-transparent"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-border/40 space-y-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">Owner</p>
          <p className="text-sm font-medium text-foreground">Blake</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Discord ID</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-mono text-foreground">12378192....</p>
            <button className="p-1 hover:bg-secondary rounded">
              <Copy className="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
        </div>
        <div>
          <p className="text-xs text-muted-foreground mb-1">Steam UID</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-mono text-foreground">12378192....</p>
            <button className="p-1 hover:bg-secondary rounded">
              <Copy className="w-3 h-3 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
