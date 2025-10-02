
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import WorkflowAutomation from "./pages/solutions/WorkflowAutomation";
import CommunicationAutomation from "./pages/solutions/CommunicationAutomation";
import LeadGeneration from "./pages/solutions/LeadGeneration";
import CRMIntegration from "./pages/solutions/CRMIntegration";
import SchedulingBooking from "./pages/solutions/SchedulingBooking";
import CustomIntegrations from "./pages/solutions/CustomIntegrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/solutions/workflow-automation" element={<WorkflowAutomation />} />
          <Route path="/solutions/communication-automation" element={<CommunicationAutomation />} />
          <Route path="/solutions/lead-generation" element={<LeadGeneration />} />
          <Route path="/solutions/crm-integration" element={<CRMIntegration />} />
          <Route path="/solutions/scheduling-booking" element={<SchedulingBooking />} />
          <Route path="/solutions/custom-integrations" element={<CustomIntegrations />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
