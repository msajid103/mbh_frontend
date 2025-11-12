import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';

// Public Pages
import LandingPage from "./pages/LandingPage"
import SignUpPage from "./pages/Auth/SignUpPage";
import SignInPage from "./pages/Auth/SignInPage";
import FrogotPasswordPage from "./pages/Auth/ForgotPasswordPage";

// Protected Route
import ProtectedRoute from "./components/layout/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import NotificationPage from "./pages/NotificationPage";
import SettingsPage from "./pages/SettingsPage";
import MyBuildPage from "./pages/MyBuildPage";
import TaskManagementPage from "./pages/TaskManagementPage";

// 🆕 Import Finance Layout and its subpages
import FinanceLayout from "./pages/FinancePages/FinanceLayout";
import FinanceDashboardPage from "./pages//FinancePages/FinanceDashboardPage";
import FinanceCostManagementPage from "./pages//FinancePages/FinanceCostManagementPage";

import TimeLinePage from "./pages/TimeLinePage";
import DocumentsPage from "./pages/DocumentsPage";
import MessagesPage from "./pages/MessagesPage";
import ReportsPage from "./pages/ReportsPage";
import CommingSoon from "./pages/CommingSoon";
import TeamContactsPage from "./pages/TeamContactsPage";
import SchedulingPage from "./pages/TimeLinePages/SchedulingPage";
import ProjectDetailView from "./components/projects/ProjectDetailView";
import MilestonesPage from "./pages/TimeLinePages/MilestonesPage";






function App() {

  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<FrogotPasswordPage />} />

        <Route
          path="/"
          element={<ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>}
        >
          <Route path="/" element={<MyBuildPage />} />
          <Route path="/project-details" element={<ProjectDetailView />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/tasks" element={<TaskManagementPage />} />
          <Route path="/finance" element={<FinanceLayout />}>
            <Route index element={<FinanceDashboardPage />} />
            <Route path="dashboard" element={<FinanceDashboardPage />} />
            <Route path="costmanagement" element={<FinanceCostManagementPage />} />
          </Route>
          <Route path="/timeline" element={<FinanceLayout />}>
            <Route index element={<CommingSoon />} />
            <Route path="milestones" element={<MilestonesPage />} />
            <Route path="scheduling" element={<SchedulingPage />} />
          </Route>
          <Route path="/timeline" element={<TimeLinePage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/team" element={<TeamContactsPage />} />
          <Route path="/help" element={<CommingSoon />} />
          <Route path="/consultant" element={<CommingSoon />} />
          <Route path="/community" element={<CommingSoon />} />




        </Route>
      </Routes>

    </Router>
  )
}

export default App
