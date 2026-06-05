import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAppState } from '../../state/AppContext.jsx';

const navItems = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/resources', label: 'Resources' },
  { to: '/jobs', label: 'Jobs' },
  { to: '/projects', label: 'Projects' },
  { to: '/profile', label: 'Profile' },
  { to: '/settings', label: 'Settings' },
];

export default function AppLayout() {
  const [open, setOpen] = useState(false);
  const { state } = useAppState();

  return (
    <div className={`app-shell ${state.settings.theme === 'dark' ? 'theme-dark' : ''}`}>
      <aside className={`sidebar ${open ? 'sidebar-open' : ''}`}>
        <div className="brand">
          <span className="brand-mark">CG</span>
          <div>
            <strong>Career Growth Hub</strong>
            <small>Professional progress center</small>
          </div>
        </div>
        <nav className="nav-list" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="main-shell">
        <header className="topbar">
          <button className="icon-button mobile-only" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="topbar-search">
            <Search size={18} />
            <span>Track skills, projects, roles, and outcomes</span>
          </div>
          <div className="profile-chip">
            <span>{state.profile.name.charAt(0)}</span>
            <div>
              <strong>{state.profile.name}</strong>
              <small>{state.settings.targetRole}</small>
            </div>
          </div>
        </header>
        <main className="page-frame">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
