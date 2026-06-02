import { NavLink } from 'react-router-dom';
import { ListChecks } from 'lucide-react';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink className="brand" to="/" aria-label="Pagination home">
          <span className="brand-icon">
            <ListChecks size={21} aria-hidden="true" />
          </span>
          <span>Pagination</span>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
          <NavLink
            to="/users?page=1"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Users
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
