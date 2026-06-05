import { ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResourceCard({ resource }) {
  return (
    <article className="resource-card">
      <div>
        <span className="chip">{resource.language || 'General'}</span>
        <h2>{resource.name}</h2>
        <p>{resource.description || 'A practical resource for building stronger engineering habits.'}</p>
      </div>
      <div className="card-footer">
        <span>
          <Star size={16} /> {Number(resource.stargazers_count || 0).toLocaleString()}
        </span>
        <Link to={`/resources/${resource.id}`} state={{ resource }} className="text-link">
          Details
        </Link>
        <a href={resource.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${resource.name}`}>
          <ExternalLink size={17} />
        </a>
      </div>
    </article>
  );
}
