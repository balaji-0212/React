import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import { Link, useParams } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition.jsx';
import { projects } from '../data/projects.js';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <PageTransition>
        <section className="container-pad py-20 text-center">
          <h1 className="font-display text-4xl font-bold">Project not found</h1>
          <Link className="focus-ring mt-6 inline-flex rounded bg-ocean px-4 py-2 font-bold text-white" to="/projects/featured">
            Back to projects
          </Link>
        </section>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="container-pad py-14">
        <Link
          to="/projects/featured"
          className="focus-ring inline-flex items-center gap-2 rounded px-3 py-2 text-sm font-bold text-ocean hover:bg-white/60 dark:hover:bg-white/10"
        >
          <FiArrowLeft /> Projects
        </Link>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="glass-strong rounded p-7">
            <p className="eyebrow">{project.type}</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-slate-950 sm:text-5xl dark:text-white">
              {project.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{project.summary}</p>
            <div className="mt-8 rounded border border-slate-200 bg-white/60 p-5 dark:border-slate-700 dark:bg-slate-900/60">
              <h2 className="font-display text-xl font-bold">Impact</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{project.impact}</p>
            </div>
          </article>
          <aside className="glass rounded p-6">
            <h2 className="font-display text-xl font-bold">Technical Snapshot</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded bg-slate-950 px-3 py-2 text-sm font-bold text-white dark:bg-white dark:text-slate-950">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-7 space-y-3">
              {project.metrics.map((metric) => (
                <p key={metric} className="flex items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  <FiCheckCircle className="text-mint" /> {metric}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </PageTransition>
  );
}
