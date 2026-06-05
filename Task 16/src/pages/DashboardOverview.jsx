import { Link } from 'react-router-dom';
import StatCard from '../components/ui/StatCard.jsx';
import { jobs } from '../data/jobs.js';
import { useAppState } from '../state/AppContext.jsx';

export default function DashboardOverview() {
  const { state } = useAppState();
  const completed = state.projects.filter((project) => project.status === 'Completed').length;
  const averageProgress = Math.round(
    state.projects.reduce((total, project) => total + project.progress, 0) / Math.max(state.projects.length, 1),
  );
  const topJob = jobs[0];

  return (
    <div className="stack">
      <section className="stats-grid">
        <StatCard label="Active projects" value={state.projects.length} trend={`${completed} completed`} tone="green" />
        <StatCard label="Weekly learning goal" value={`${state.profile.weeklyGoal}h`} trend="Protected focus time" tone="blue" />
        <StatCard label="Portfolio progress" value={`${averageProgress}%`} trend="Across tracked projects" tone="orange" />
        <StatCard label="Saved roles" value={state.savedJobs.length} trend="High-fit opportunities" tone="purple" />
      </section>

      <section className="content-grid two-col">
        <article className="panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">Priority role</span>
              <h2>{topJob.title}</h2>
            </div>
            <span className="score-ring">{topJob.match}%</span>
          </div>
          <p>{topJob.description}</p>
          <div className="tag-list">
            {topJob.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <Link className="button" to={`/jobs/${topJob.id}`}>
            Review role
          </Link>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <span className="eyebrow">Execution plan</span>
              <h2>This week</h2>
            </div>
          </div>
          <ul className="timeline-list">
            <li>
              <strong>Refine project case study</strong>
              <span>Convert outcomes into recruiter-ready evidence.</span>
            </li>
            <li>
              <strong>Practice API integration patterns</strong>
              <span>Focus on loading, fallback, and error states.</span>
            </li>
            <li>
              <strong>Shortlist matching roles</strong>
              <span>Save openings that align with data product engineering.</span>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
