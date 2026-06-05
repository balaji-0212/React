import { BarChart3, LayoutDashboard } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function Dashboard() {
  return (
    <>
      <PageHeader
        eyebrow="Command center"
        title="Plan the next visible career move"
        description="Connect learning, proof projects, market signals, and weekly execution in one place."
        actions={
          <div className="segmented-tabs">
            <NavLink to="/dashboard" end>
              <LayoutDashboard size={16} /> Overview
            </NavLink>
            <NavLink to="/dashboard/analytics">
              <BarChart3 size={16} /> Analytics
            </NavLink>
          </div>
        }
      />
      <Outlet />
    </>
  );
}
