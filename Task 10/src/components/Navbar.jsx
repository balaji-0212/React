import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import profilePhoto from '../assets/balaji-profile.jpg';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Profile', path: '/profile' },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">
            <img src={profilePhoto} alt="Balaji Sivakumar" />
          </span>
          <span>
            <strong>Balaji Sivakumar</strong>
            <small>Software Engineer</small>
          </span>
        </NavLink>

        <button
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
