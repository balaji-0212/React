import { Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ResourceCard from '../components/cards/ResourceCard.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import LoadingState from '../components/ui/LoadingState.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import { useGithubResources } from '../hooks/useGithubResources.js';

export default function Resources() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || 'react data engineering';
  const language = searchParams.get('language') || '';
  const { resources, status, error } = useGithubResources(query, language);

  function updateParam(key, value) {
    const next = new URLSearchParams(searchParams);
    value ? next.set(key, value) : next.delete(key);
    setSearchParams(next);
  }

  return (
    <div className="stack">
      <PageHeader
        eyebrow="Learning resources"
        title="Find credible material fast"
        description="Search open-source repositories and curated references that support practical career growth."
      />
      <section className="filter-panel">
        <label className="search-field">
          <Search size={18} />
          <input value={query} onChange={(event) => updateParam('q', event.target.value)} placeholder="Search resources" />
        </label>
        <select value={language} onChange={(event) => updateParam('language', event.target.value)}>
          <option value="">All languages</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Python">Python</option>
        </select>
      </section>
      {error ? <p className="notice">{error}</p> : null}
      {status === 'loading' ? <LoadingState label="Loading resources" /> : null}
      {status !== 'loading' && resources.length === 0 ? (
        <EmptyState title="No resources found" description="Try a broader search or remove the language filter." />
      ) : null}
      <section className="card-grid">
        {resources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </section>
    </div>
  );
}
