import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import GitHubRepos from '../components/api/GitHubRepos.jsx';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import MetricCard from '../components/ui/MetricCard.jsx';
import PageTransition from '../components/ui/PageTransition.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { profile, quickFacts, skillGroups, socials } from '../data/profile.js';
import { projects } from '../data/projects.js';
import { useWindowSize } from '../hooks/useWindowSize.js';

export default function Home() {
  const { width } = useWindowSize();
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <PageTransition>
      <section className="container-pad grid min-h-[calc(100vh-5rem)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="eyebrow"
          >
            {profile.role} at {profile.company}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-5 max-w-4xl font-display text-5xl font-bold leading-tight text-slate-950 sm:text-6xl lg:text-7xl dark:text-white"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            {profile.summary}
          </motion.p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
            <FiMapPin className="text-ocean" />
            {profile.location}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects/featured"
              className="focus-ring inline-flex items-center gap-2 rounded bg-ocean px-5 py-3 font-bold text-white shadow-glow transition hover:bg-sky-700"
            >
              Explore work <FiArrowRight />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded border border-slate-200 bg-white/70 px-5 py-3 font-bold text-slate-800 transition hover:border-ocean hover:text-ocean dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
            >
              <FiDownload /> Start a conversation
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.18 }}
          className="glass-strong relative rounded p-6"
        >
          <div className="absolute right-6 top-6 rounded bg-mint px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-white">
            Open
          </div>
          <div className="mt-8 grid gap-4">
            {quickFacts.map((fact) => (
              <MetricCard key={fact.label} {...fact} />
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="focus-ring grid h-11 w-11 place-items-center rounded bg-slate-950 text-white transition hover:bg-ocean dark:bg-white dark:text-slate-950"
                  aria-label={item.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
          <p className="mt-5 text-xs font-semibold text-slate-500 dark:text-slate-400">
            Viewport: {width}px
          </p>
        </motion.div>
      </section>

      <section className="container-pad py-14">
        <SectionHeading
          eyebrow="Selected work"
          title="Data-rich software with practical engineering depth"
          description="A concise look at dashboards, AI systems, frontend interfaces, and embedded reliability work."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="container-pad py-14">
        <div className="grid gap-5 md:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="glass rounded p-5">
                <Icon className="text-2xl text-coral" />
                <h3 className="mt-4 font-display text-lg font-bold">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {group.skills.slice(0, 4).join(', ')}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container-pad py-14">
        <GitHubRepos />
      </section>
    </PageTransition>
  );
}
