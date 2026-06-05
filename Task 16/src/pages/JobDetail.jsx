import { Bookmark, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader.jsx';
import { jobs } from '../data/jobs.js';
import { useAppState } from '../state/AppContext.jsx';

export default function JobDetail() {
  const { jobId } = useParams();
  const { state, dispatch } = useAppState();
  const job = jobs.find((item) => item.id === jobId);

  if (!job) {
    return (
      <div className="stack">
        <PageHeader eyebrow="Role details" title="Role not found" description="The selected role is no longer available in this view." />
        <Link className="button" to="/jobs">
          Back to jobs
        </Link>
      </div>
    );
  }

  const saved = state.savedJobs.includes(job.id);

  return (
    <div className="stack">
      <PageHeader
        eyebrow={job.company}
        title={job.title}
        description={job.description}
        actions={
          <button className={`button ${saved ? 'secondary' : ''}`} onClick={() => dispatch({ type: 'TOGGLE_SAVED_JOB', payload: job.id })}>
            <Bookmark size={16} /> {saved ? 'Saved' : 'Save role'}
          </button>
        }
      />
      <section className="content-grid two-col">
        <article className="panel">
          <h2>Role snapshot</h2>
          <p className="job-meta">
            <MapPin size={16} /> {job.location}
          </p>
          <dl>
            <div>
              <dt>Level</dt>
              <dd>{job.level}</dd>
            </div>
            <div>
              <dt>Compensation</dt>
              <dd>{job.salary}</dd>
            </div>
            <div>
              <dt>Posted</dt>
              <dd>{job.posted}</dd>
            </div>
            <div>
              <dt>Fit score</dt>
              <dd>{job.match}%</dd>
            </div>
          </dl>
          <div className="tag-list">
            {job.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </article>
        <article className="panel">
          <h2>Responsibilities</h2>
          <ul className="timeline-list">
            {job.responsibilities.map((item) => (
              <li key={item}>
                <strong>{item}</strong>
                <span>Map this expectation to a specific project, metric, or story before applying.</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  );
}
