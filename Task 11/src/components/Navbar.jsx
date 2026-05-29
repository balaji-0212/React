import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand" aria-label="useParams API home">
        <span className="brand-mark">ID</span>
        <span>User Directory</span>
      </NavLink>

      <nav className="nav-links" aria-label="Primary navigation">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          Home
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
        >
          Users
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
