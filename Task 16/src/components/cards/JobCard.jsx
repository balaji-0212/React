import { Bookmark, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JobCard({ job, saved, onToggle }) {
  return (
    <article className="job-card">
      <div className="job-card-head">
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
        </div>
        <button className={`icon-button ${saved ? 'active' : ''}`} onClick={() => onToggle(job.id)} aria-label="Save role">
          <Bookmark size={18} />
        </button>
      </div>
      <p className="job-meta">
        <MapPin size={16} /> {job.location} · {job.level}
      </p>
      <div className="tag-list">
        {job.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="card-footer">
        <strong>{job.match}% match</strong>
        <Link to={`/jobs/${job.id}`} className="button secondary">
          View details
        </Link>
      </div>
    </article>
  );
}
