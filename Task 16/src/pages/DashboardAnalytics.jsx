import StatCard from '../components/ui/StatCard.jsx';
import { useAppState } from '../state/AppContext.jsx';

export default function DashboardAnalytics() {
  const { state } = useAppState();
  const categories = state.projects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {});
  const maxCount = Math.max(...Object.values(categories), 1);

  return (
    <div className="stack">
      <section className="stats-grid">
        <StatCard label="Primary focus" value={state.settings.targetRole} trend={state.settings.preferredLocation} tone="blue" />
        <StatCard label="Digest" value={state.settings.emailDigest ? 'On' : 'Off'} trend="Opportunity reminders" tone="green" />
        <StatCard label="Focus mode" value={state.settings.focusMode ? 'On' : 'Off'} trend="Deep work preference" tone="purple" />
      </section>
      <section className="content-grid two-col">
        <article className="panel">
          <span className="eyebrow">Project mix</span>
          <h2>Portfolio coverage</h2>
          <div className="bar-list">
            {Object.entries(categories).map(([category, count]) => (
              <div key={category}>
                <div>
                  <strong>{category}</strong>
                  <span>{count}</span>
                </div>
                <meter min="0" max={maxCount} value={count} />
              </div>
            ))}
          </div>
        </article>
        <article className="panel">
          <span className="eyebrow">Readiness signals</span>
          <h2>Next decisions</h2>
          <div className="insight-list">
            <p>Completed work is strongest when each project has a measurable outcome, a concise stack summary, and a clear business context.</p>
            <p>Saved roles help reveal repeated skill demand. Use those patterns to choose the next project enhancement.</p>
            <p>Settings and profile data personalize the experience without leaving the browser.</p>
          </div>
        </article>
      </section>
    </div>
  );
}
