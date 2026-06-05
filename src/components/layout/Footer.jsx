import { FiArrowUpRight } from 'react-icons/fi';
import { profile, socials } from '../../data/profile.js';

export default function Footer() {
  return (
    <footer className="container-pad py-10">
      <div className="glass flex flex-col gap-6 rounded p-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl font-bold">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Building reliable software, analytics, and intelligent systems.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded border border-slate-200 bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-ocean hover:text-ocean dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
              >
                <Icon /> {item.label} <FiArrowUpRight className="text-xs" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
