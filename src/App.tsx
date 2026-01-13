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
import TeacherSettings from "./pages/dashboard/teacher/Settings";
import TeacherNotifications from "./pages/dashboard/teacher/Notifications";
import StudentEvaluations from "./pages/dashboard/teacher/StudentEvaluations";
import AttendanceRecord from "./pages/dashboard/teacher/AttendanceRecord";
import ParentSettings from "./pages/dashboard/parent/Settings";
import ParentAllEvaluations from "./pages/dashboard/parent/AllEvaluations";
import ContactTeacher from "./pages/dashboard/parent/ContactTeacher";
import MonthlyReport from "./pages/dashboard/parent/MonthlyReport";
import Schedule from "./pages/dashboard/parent/Schedule";
import AdminSettings from "./pages/dashboard/admin/Settings";
import AdminNotifications from "./pages/dashboard/admin/Notifications";
import AllStudents from "./pages/dashboard/admin/AllStudents";
import ImprovementPlan from "./pages/dashboard/admin/ImprovementPlan";
import AdminMonthlyReport from "./pages/dashboard/admin/MonthlyReport";
import BehaviorSettings from "./pages/dashboard/admin/BehaviorSettings";
import RewardsManagement from "./pages/dashboard/admin/RewardsManagement";
import AddUser from "./pages/dashboard/admin/AddUser";
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
          <Route path="/dashboard/teacher/settings" element={<TeacherSettings />} />
          <Route path="/dashboard/teacher/notifications" element={<TeacherNotifications />} />
          <Route path="/dashboard/teacher/student/:studentId" element={<StudentEvaluations />} />
          <Route path="/dashboard/teacher/attendance" element={<AttendanceRecord />} />
          <Route path="/dashboard/parent" element={<ParentDashboard />} />
          <Route path="/dashboard/parent/settings" element={<ParentSettings />} />
          <Route path="/dashboard/parent/evaluations" element={<ParentAllEvaluations />} />
          <Route path="/dashboard/parent/contact-teacher" element={<ContactTeacher />} />
          <Route path="/dashboard/parent/monthly-report" element={<MonthlyReport />} />
          <Route path="/dashboard/parent/schedule" element={<Schedule />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/admin/settings" element={<AdminSettings />} />
          <Route path="/dashboard/admin/notifications" element={<AdminNotifications />} />
          <Route path="/dashboard/admin/students" element={<AllStudents />} />
          <Route path="/dashboard/admin/improvement-plan" element={<ImprovementPlan />} />
          <Route path="/dashboard/admin/monthly-report" element={<AdminMonthlyReport />} />
          <Route path="/dashboard/admin/behavior-settings" element={<BehaviorSettings />} />
          <Route path="/dashboard/admin/rewards" element={<RewardsManagement />} />
          <Route path="/dashboard/admin/add-user" element={<AddUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
