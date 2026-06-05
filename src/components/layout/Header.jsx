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
        : 'text-slate-700 hover:bg-white/60 hover:text-ocean dark:text-slate-200 dark:hover:bg-white/10'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/20 bg-white/60 backdrop-blur-xl dark:bg-slate-950/62">
      <nav className="container-pad flex h-20 items-center justify-between" aria-label="Primary">
        <NavLink to="/" className="focus-ring flex items-center gap-3 rounded">
          <span className="grid h-11 w-11 place-items-center rounded bg-slate-950 text-base font-black text-sky-300 dark:bg-white dark:text-slate-950">
            BS
          </span>
          <span>
            <span className="block font-display text-lg font-bold">Balaji Sivakumar</span>
            <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">
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
            className="focus-ring grid h-11 w-11 place-items-center rounded border border-slate-200 bg-white/70 text-slate-700 transition hover:text-ocean dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
            aria-label="Toggle color theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring grid h-11 w-11 place-items-center rounded border border-slate-200 bg-white/70 text-slate-700 md:hidden dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="container-pad pb-4 md:hidden">
          <div className="glass grid gap-2 rounded p-3">
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
