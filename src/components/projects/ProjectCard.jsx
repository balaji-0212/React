import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="glass-strong flex h-full flex-col rounded p-5 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral">{project.type}</p>
          <h3 className="mt-3 font-display text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
        </div>
        <span className="rounded bg-slate-950 px-2.5 py-1 text-xs font-bold text-white dark:bg-white dark:text-slate-950">
          {project.year}
        </span>
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded border border-slate-200 bg-white/70 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        to={`/projects/detail/${project.id}`}
        className="focus-ring mt-6 inline-flex items-center gap-2 self-start rounded bg-ocean px-4 py-2 text-sm font-bold text-white transition hover:bg-sky-700"
      >
        View details <FiArrowUpRight />
      </Link>
    </motion.article>
  );
}
