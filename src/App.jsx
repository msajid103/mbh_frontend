import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignUpPage from "./pages/Auth/SignUpPage";
import SignInPage from "./pages/Auth/SignInPage";
import './App.css';
import MyProjects from "./pages/MyProjects";
import FinancePage from "./pages/FinancePage";
import DocumentsPage from "./pages/DocumentsPage";
import MessagesPage from "./pages/MessagesPage";
import ReportsPage from "./pages/ReportsPage";
import ProjectsPage from "./pages/ProjectsPage";
import SettingsPage from "./pages/SettingsPage";
import CommingSoon from "./pages/CommingSoon";
import FrogotPasswordPage from "./pages/Auth/ForgotPasswordPage";
import TaskManagementPage from "./pages/TaskManagementPage";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<FrogotPasswordPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mybuild" element={<MyProjects />} />
        <Route path="/tasks" element={<TaskManagementPage />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<CommingSoon />} />
        <Route path="/team" element={<CommingSoon />} />
        <Route path="/consultant" element={<CommingSoon />} />
        <Route path="/community" element={<CommingSoon />} />
      </Routes>

    </Router>

  )
}

export default App
