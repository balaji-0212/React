import PageTransition from '../components/ui/PageTransition.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import { achievements, education, experiences, profile } from '../data/profile.js';

export default function About() {
  return (
    <PageTransition>
      <section className="container-pad py-14">
        <SectionHeading
          eyebrow="About"
          title="Engineer with a data-first delivery mindset"
          description={profile.summary}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="glass rounded p-6">
            <h3 className="font-display text-xl font-bold">Professional Focus</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded bg-slate-950 px-3 py-2 text-sm font-bold text-white dark:bg-white dark:text-slate-950"
                >
                  {interest}
                </span>
              ))}
            </div>
            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-700">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">Education</p>
              <h4 className="mt-2 font-bold">{education.school}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {education.degree}
                <br />
                {education.period}
                <br />
                {education.result}
              </p>
            </div>
          </aside>

          <div className="space-y-6">
            {experiences.map((experience) => (
              <article key={experience.company} className="glass-strong rounded p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="eyebrow">{experience.company}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold">{experience.role}</h3>
                  </div>
                  <span className="rounded border border-slate-200 bg-white/70 px-3 py-2 text-sm font-bold dark:border-slate-700 dark:bg-slate-900/70">
                    {experience.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {experience.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded bg-mint" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 glass rounded p-6">
          <h3 className="font-display text-xl font-bold">Highlights</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {achievements.map((item) => (
              <p key={item} className="rounded border border-slate-200 bg-white/60 p-4 text-sm leading-6 text-slate-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
