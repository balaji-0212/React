import { ExternalLink } from 'lucide-react';
import { Link, useLocation, useParams } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader.jsx';

export default function ResourceDetail() {
  const { resourceId } = useParams();
  const { state } = useLocation();
  const resource = state?.resource;

  return (
    <div className="stack">
      <PageHeader
        eyebrow="Resource details"
        title={resource?.name || `Resource ${resourceId}`}
        description={resource?.description || 'Open the source resource to inspect details, examples, and learning value.'}
        actions={
          resource?.html_url ? (
            <a className="button" href={resource.html_url} target="_blank" rel="noreferrer">
              <ExternalLink size={16} /> Open source
            </a>
          ) : null
        }
      />
      <section className="panel detail-panel">
        <dl>
          <div>
            <dt>Repository</dt>
            <dd>{resource?.full_name || 'Open-source reference'}</dd>
          </div>
          <div>
            <dt>Primary language</dt>
            <dd>{resource?.language || 'General'}</dd>
          </div>
          <div>
            <dt>Community signal</dt>
            <dd>{Number(resource?.stargazers_count || 0).toLocaleString()} stars</dd>
          </div>
        </dl>
        <p>
          Use this resource to extract concepts, implementation patterns, and project ideas. Add the strongest ideas to your
          project tracker once they become actionable.
        </p>
        <Link to="/resources" className="text-link">
          Back to resources
        </Link>
      </section>
    </div>
  );
}
