import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const roles = ["CEO", "DEVELOPER", "ADMIN", "MODERATOR", "USER"];

const pagePermissions = {
  "Page Settings": [
    { label: "View Dashboard", key: "view_dashboard" },
    { label: "View Cases", key: "view_cases" },
    { label: "View Application", key: "view_application" },
    { label: "View Appeals", key: "view_appeals" },
    { label: "View Tickets", key: "view_tickets" },
  ],
  Cases: [
    { label: "Settings 02", key: "cases_settings_1" },
    { label: "Settings 02", key: "cases_settings_2" },
    { label: "Settings 02", key: "cases_settings_3" },
    { label: "Settings 02", key: "cases_settings_4" },
    { label: "Settings 02", key: "cases_settings_5" },
    { label: "Settings 02", key: "cases_settings_6" },
    { label: "Settings 02", key: "cases_settings_7" },
    { label: "Settings 02", key: "cases_settings_8" },
  ],
  Applications: [
    { label: "Settings 02", key: "app_settings_1" },
    { label: "Settings 02", key: "app_settings_2" },
    { label: "Settings 02", key: "app_settings_3" },
    { label: "Settings 02", key: "app_settings_4" },
    { label: "Settings 02", key: "app_settings_5" },
    { label: "Settings 02", key: "app_settings_6" },
    { label: "Settings 02", key: "app_settings_7" },
    { label: "Settings 02", key: "app_settings_8" },
  ],
  Appeals: [
    { label: "Settings 02", key: "appeals_settings_1" },
    { label: "Settings 02", key: "appeals_settings_2" },
    { label: "Settings 02", key: "appeals_settings_3" },
    { label: "Settings 02", key: "appeals_settings_4" },
    { label: "Settings 02", key: "appeals_settings_5" },
    { label: "Settings 02", key: "appeals_settings_6" },
    { label: "Settings 02", key: "appeals_settings_7" },
    { label: "Settings 02", key: "appeals_settings_8" },
  ],
  Tickets: [
    { label: "Settings 02", key: "tickets_settings_1" },
    { label: "Settings 02", key: "tickets_settings_2" },
    { label: "Settings 02", key: "tickets_settings_3" },
    { label: "Settings 02", key: "tickets_settings_4" },
    { label: "Settings 02", key: "tickets_settings_5" },
    { label: "Settings 02", key: "tickets_settings_6" },
    { label: "Settings 02", key: "tickets_settings_7" },
    { label: "Settings 02", key: "tickets_settings_8" },
  ],
};

const AdminPermissions = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("CEO");
  const [permissions, setPermissions] = useState<Record<string, boolean>>({});

  const togglePermission = (key: string) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
            className="border-primary bg-primary/10 text-primary"
          >
            Permissions
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate("/admin/logs")}
            className="border-border/40"
          >
            Logs
          </Button>
        </div>

        {/* User Roles Section */}
        <div className="bg-card border border-border/40 rounded-lg p-6">
          <Tabs defaultValue="Page Settings" className="w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-2 bg-secondary/50 rounded">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold">User Roles</h2>
            </div>

            <TabsList className="mb-6">
              <TabsTrigger value="Page Settings">Page Settings</TabsTrigger>
              <TabsTrigger value="Cases">Cases</TabsTrigger>
              <TabsTrigger value="Applications">Applications</TabsTrigger>
              <TabsTrigger value="Appeals">Appeals</TabsTrigger>
              <TabsTrigger value="Tickets">Tickets</TabsTrigger>
            </TabsList>

            {Object.entries(pagePermissions).map(([tabName, permissionsList]) => (
              <TabsContent key={tabName} value={tabName}>
                <div className="border border-border/40 rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-secondary/30">
                        <TableHead className="w-64">Permission</TableHead>
                        {roles.map((role) => (
                          <TableHead key={role} className="text-center">
                            {role}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {permissionsList.map((permission) => (
                        <TableRow key={permission.key}>
                          <TableCell className="font-medium">
                            {permission.label}
                          </TableCell>
                          {roles.map((role) => (
                            <TableCell key={role} className="text-center">
                              <div className="flex justify-center">
                                <Checkbox
                                  checked={permissions[`${role}_${permission.key}`] || false}
                                  onCheckedChange={() =>
                                    togglePermission(`${role}_${permission.key}`)
                                  }
                                  className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                                />
                              </div>
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            <Button variant="outline" className="border-border/40">
              ADD Role
            </Button>
            <Button variant="outline" className="border-border/40">
              Remove Role
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPermissions;
