import { Search } from 'lucide-react';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import JobCard from '../components/cards/JobCard.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import { jobs } from '../data/jobs.js';
import { useAppState } from '../state/AppContext.jsx';

export default function Jobs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { state, dispatch } = useAppState();
  const query = searchParams.get('q') || '';
  const level = searchParams.get('level') || '';

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) => {
        const matchesQuery = `${job.title} ${job.company} ${job.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase());
        const matchesLevel = level ? job.level === level : true;
        return matchesQuery && matchesLevel;
      }),
    [query, level],
  );

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams);
    value ? next.set(key, value) : next.delete(key);
    setSearchParams(next);
  }

  return (
    <div className="stack">
      <PageHeader
        eyebrow="Job explorer"
        title="Compare roles against your proof"
        description="Filter opportunities by skill signal, seniority, and fit so applications stay focused."
      />
      <section className="filter-panel">
        <label className="search-field">
          <Search size={18} />
          <input value={query} onChange={(event) => updateParam('q', event.target.value)} placeholder="Search roles, companies, skills" />
        </label>
        <select value={level} onChange={(event) => updateParam('level', event.target.value)}>
          <option value="">All levels</option>
          <option>Associate</option>
          <option>Mid Level</option>
          <option>Mid Senior</option>
          <option>Senior</option>
        </select>
      </section>
      {filteredJobs.length === 0 ? <EmptyState title="No roles match" description="Try a wider search or clear the level filter." /> : null}
      <section className="card-grid">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            saved={state.savedJobs.includes(job.id)}
            onToggle={(jobId) => dispatch({ type: 'TOGGLE_SAVED_JOB', payload: jobId })}
          />
        ))}
      </section>
    </div>
  );
}
