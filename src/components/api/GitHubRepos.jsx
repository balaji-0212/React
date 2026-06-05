import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { useApi } from '../../hooks/useApi.js';
import Skeleton from '../ui/Skeleton.jsx';

const username = import.meta.env.VITE_GITHUB_USERNAME || 'balaji-0212';

export default function GitHubRepos() {
  const { data, error, loading } = useApi(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
  );

  if (loading) {
    return (
      <div className="glass rounded p-6">
        <Skeleton rows={4} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass rounded p-6 text-sm text-red-600 dark:text-red-300">
        GitHub activity is temporarily unavailable. {error}
      </div>
    );
  }

  return (
    <div className="glass rounded p-6">
      <div className="mb-5 flex items-center gap-3">
        <FiGithub className="text-2xl text-ocean dark:text-sky-300" />
        <h3 className="font-display text-xl font-bold">Recent GitHub Activity</h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {(data || []).map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="focus-ring rounded border border-slate-200 bg-white/65 p-4 transition hover:border-ocean hover:shadow-soft dark:border-slate-700 dark:bg-slate-900/65"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="font-bold text-slate-950 dark:text-white">{repo.name}</p>
              <FiExternalLink className="mt-1 shrink-0 text-ocean" />
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
              {repo.description || 'Repository for software development and portfolio work.'}
            </p>
            <div className="mt-4 flex gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <span>{repo.language || 'Code'}</span>
              <span>{repo.stargazers_count} stars</span>
              <span>{new Date(repo.updated_at).toLocaleDateString()}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
