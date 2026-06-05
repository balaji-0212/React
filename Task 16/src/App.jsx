import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import DashboardOverview from './pages/DashboardOverview.jsx';
import DashboardAnalytics from './pages/DashboardAnalytics.jsx';
import Resources from './pages/Resources.jsx';
import ResourceDetail from './pages/ResourceDetail.jsx';
import Jobs from './pages/Jobs.jsx';
import JobDetail from './pages/JobDetail.jsx';
import Projects from './pages/Projects.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardOverview />} />
          <Route path="analytics" element={<DashboardAnalytics />} />
        </Route>
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:resourceId" element={<ResourceDetail />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobId" element={<JobDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
