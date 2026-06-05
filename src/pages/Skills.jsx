import PageTransition from '../components/ui/PageTransition.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { certifications, skillGroups } from '../data/profile.js';

export default function Skills() {
  return (
    <PageTransition>
      <section className="container-pad py-14">
        <SectionHeading
          eyebrow="Skills"
          title="A stack tuned for dependable delivery"
          description="Frontend engineering, data engineering, BI reporting, AI, and hardware-aware problem solving."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="glass-strong rounded p-6">
                <Icon className="text-3xl text-ocean dark:text-sky-300" />
                <h3 className="mt-4 font-display text-2xl font-bold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-slate-200 bg-white/70 px-3 py-2 text-sm font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-8 glass rounded p-6">
          <h3 className="font-display text-xl font-bold">Certifications</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {certifications.map((certification) => (
              <p key={certification} className="rounded border border-slate-200 bg-white/60 p-4 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                {certification}
              </p>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
