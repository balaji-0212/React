import { Database, Users } from 'lucide-react';

function Navbar({ totalUsers }) {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-icon" aria-hidden="true">
          <Database size={22} />
        </span>
        <div>
          <span className="brand-name">Data Desk</span>
          <span className="brand-subtitle">Contacts overview</span>
        </div>
      </div>

      <div className="nav-stat" aria-label={`${totalUsers} users loaded`}>
        <Users size={18} aria-hidden="true" />
        <span>{totalUsers} users</span>
      </div>
    </header>
  );
}

export default Navbar;
