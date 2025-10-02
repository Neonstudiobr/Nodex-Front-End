import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Store from "./pages/Store";
import Rules from "./pages/Rules";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import NewTicket from "./pages/NewTicket";
import ReviewTicket from "./pages/ReviewTicket";
import Applications from "./pages/Applications";
import ApplicationForm from "./pages/ApplicationForm";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProfile from "./pages/AdminProfile";
import AdminPermissions from "./pages/AdminPermissions";
import AdminLogs from "./pages/AdminLogs";
import AdminTickets from "./pages/AdminTickets";
import AdminCases from "./pages/AdminCases";
import AdminCaseView from "./pages/AdminCaseView";
import AdminCaseTicketView from "./pages/AdminCaseTicketView";
import AdminApplications from "./pages/AdminApplications";
import AdminAppeals from "./pages/AdminAppeals";
import AdminUsers from "./pages/AdminUsers";
import AdminStoreSettings from "./pages/AdminStoreSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/store" element={<Store />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/new" element={<NewTicket />} />
          <Route path="/support/ticket/:id" element={<ReviewTicket />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/:id" element={<ApplicationForm />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/store-settings" element={<AdminStoreSettings />} />
          <Route path="/admin/permissions" element={<AdminPermissions />} />
          <Route path="/admin/logs" element={<AdminLogs />} />
          <Route path="/admin/tickets" element={<AdminTickets />} />
          <Route path="/admin/cases" element={<AdminCases />} />
          <Route path="/admin/cases/:id" element={<AdminCaseView />} />
          <Route path="/admin/cases/:id/ticket/:ticketId" element={<AdminCaseTicketView />} />
          <Route path="/admin/applications" element={<AdminApplications />} />
          <Route path="/admin/appeals" element={<AdminAppeals />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
