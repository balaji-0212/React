import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext.jsx';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects/featured' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    `focus-ring rounded px-3 py-2 text-sm font-semibold transition ${
      isActive
        ? 'bg-ocean text-white shadow-glow'
        : 'text-slate-200 hover:bg-white/10 hover:text-white'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-slate-950/88 shadow-[0_20px_60px_rgba(2,6,23,0.24)] backdrop-blur-2xl">
      <nav className="container-pad flex h-20 items-center justify-between" aria-label="Primary">
        <NavLink to="/" className="focus-ring flex items-center gap-3 rounded">
          <span className="grid h-11 w-11 place-items-center rounded bg-gradient-to-br from-ocean via-mint to-violet text-base font-black text-white shadow-glow">
            BS
          </span>
          <span>
            <span className="block font-display text-lg font-bold text-white">Balaji Sivakumar</span>
            <span className="block text-xs font-semibold text-sky-200">
              Software Engineer
            </span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="focus-ring grid h-11 w-11 place-items-center rounded border border-white/10 bg-white/10 text-slate-100 transition hover:bg-white/15 hover:text-sky-200"
            aria-label="Toggle color theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid h-11 w-11 place-items-center rounded border border-white/10 bg-white/10 text-slate-100 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-pad pb-4 md:hidden">
          <div className="grid gap-2 rounded border border-white/10 bg-slate-950/92 p-3 shadow-soft backdrop-blur-2xl">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
