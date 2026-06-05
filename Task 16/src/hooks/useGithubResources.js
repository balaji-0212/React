import { useEffect, useState } from 'react';

const fallbackResources = [
  {
    id: 1,
    name: 'developer-roadmap',
    full_name: 'kamranahmedse/developer-roadmap',
    html_url: 'https://github.com/kamranahmedse/developer-roadmap',
    description: 'Community-maintained roadmaps, guides, and learning paths for software roles.',
    stargazers_count: 310000,
    language: 'TypeScript',
  },
  {
    id: 2,
    name: 'awesome-react',
    full_name: 'enaqx/awesome-react',
    html_url: 'https://github.com/enaqx/awesome-react',
    description: 'Curated React resources, articles, libraries, and ecosystem references.',
    stargazers_count: 70000,
    language: 'JavaScript',
  },
  {
    id: 3,
    name: 'public-apis',
    full_name: 'public-apis/public-apis',
    html_url: 'https://github.com/public-apis/public-apis',
    description: 'A collection of free APIs for practice projects and product prototypes.',
    stargazers_count: 330000,
    language: 'Python',
  },
];

export function useGithubResources(query = 'react career development', language = '') {
  const [resources, setResources] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const search = `${query || 'react career development'} ${language ? `language:${language}` : ''}`;
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(search)}&sort=stars&order=desc&per_page=8`;

    async function loadResources() {
      setStatus('loading');
      setError('');
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error('Unable to load live resources right now.');
        }
        const data = await response.json();
        setResources(data.items?.length ? data.items : fallbackResources);
        setStatus('success');
      } catch (err) {
        if (err.name === 'AbortError') return;
        setResources(fallbackResources);
        setError('Live results are unavailable, so curated resources are shown.');
        setStatus('error');
      }
    }

    loadResources();
    return () => controller.abort();
  }, [query, language]);

  return { resources, status, error };
}
