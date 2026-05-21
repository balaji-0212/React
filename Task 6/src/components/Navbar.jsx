const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Users', href: '#users' },
  { label: 'Contact', href: '#footer' }
];

function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="Balaji S portfolio dashboard">
        <img src="/profile-mark.svg" alt="" />
        <span>
          <strong>Balaji S</strong>
          <small>Task 6 API Dashboard</small>
        </span>
      </a>

      <nav aria-label="Main navigation">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
