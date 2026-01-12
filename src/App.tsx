import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard";
import ParentDashboard from "./pages/dashboard/ParentDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import StudentSettings from "./pages/dashboard/student/Settings";
import StudentNotifications from "./pages/dashboard/student/Notifications";
import StudentBadges from "./pages/dashboard/student/Badges";
import StudentSelfEvaluation from "./pages/dashboard/student/SelfEvaluation";
import StudentAllEvaluations from "./pages/dashboard/student/AllEvaluations";
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
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/student/settings" element={<StudentSettings />} />
          <Route path="/dashboard/student/notifications" element={<StudentNotifications />} />
          <Route path="/dashboard/student/badges" element={<StudentBadges />} />
          <Route path="/dashboard/student/self-evaluation" element={<StudentSelfEvaluation />} />
          <Route path="/dashboard/student/evaluations" element={<StudentAllEvaluations />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/parent" element={<ParentDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
