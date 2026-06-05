import { useEffect, useMemo, useReducer, useRef } from 'react';
import { FiGrid, FiList, FiSearch } from 'react-icons/fi';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/projects/ProjectCard.jsx';
import ProjectTable from '../components/projects/ProjectTable.jsx';
import { useAppContext } from '../context/AppContext.jsx';
import { categoryRoutes, projects } from '../data/projects.js';
import { filterProjects, initialProjectState, projectReducer } from '../reducers/projectReducer.js';

const routeToCategory = {
  featured: 'featured',
  'web-development': 'web',
  'data-science': 'data',
  'embedded-systems': 'embedded',
};

export default function Projects() {
  const { category = 'featured' } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchInput = useRef(null);
  const { state: appState, dispatch: appDispatch } = useAppContext();
  const [state, dispatch] = useReducer(projectReducer, {
    ...initialProjectState,
    search: searchParams.get('q') || '',
    category: routeToCategory[category] || 'featured',
  });

  useEffect(() => {
    dispatch({ type: 'SET_CATEGORY', payload: routeToCategory[category] || 'featured' });
  }, [category]);

  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (state.search) next.set('q', state.search);
    else next.delete('q');
    if (next.toString() !== searchParams.toString()) {
      setSearchParams(next, { replace: true });
    }
  }, [searchParams, setSearchParams, state.search]);

  const visibleProjects = useMemo(() => filterProjects(projects, state), [state]);

  return (
    <div className="mt-10">
      <div className="glass rounded p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categoryRoutes.map((item) => (
              <NavLink
                key={item.slug}
                to={`/projects/${item.slug}${state.search ? `?q=${encodeURIComponent(state.search)}` : ''}`}
                className={({ isActive }) =>
                  `focus-ring rounded px-3 py-2 text-sm font-bold transition ${
                    isActive
                      ? 'bg-ocean text-white'
                      : 'bg-white/65 text-slate-700 hover:text-ocean dark:bg-slate-900/65 dark:text-slate-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative block">
              <FiSearch className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                ref={searchInput}
                value={state.search}
                onChange={(event) => dispatch({ type: 'SET_SEARCH', payload: event.target.value })}
                placeholder="Search projects"
                className="focus-ring w-full rounded border border-slate-200 bg-white/80 py-2 pl-10 pr-3 text-sm font-medium text-slate-900 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white sm:w-64"
              />
            </label>
            <select
              value={state.sortBy}
              onChange={(event) => dispatch({ type: 'SET_SORT', payload: event.target.value })}
              className="focus-ring rounded border border-slate-200 bg-white/80 px-3 py-2 text-sm font-bold text-slate-800 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white"
            >
              <option value="featured">Featured first</option>
              <option value="year">Newest first</option>
            </select>
            <div className="flex rounded border border-slate-200 bg-white/70 p-1 dark:border-slate-700 dark:bg-slate-900/70">
              <button
                type="button"
                onClick={() => appDispatch({ type: 'SET_PROJECT_VIEW', payload: 'grid' })}
                className={`focus-ring grid h-9 w-9 place-items-center rounded ${appState.projectView === 'grid' ? 'bg-ocean text-white' : ''}`}
                aria-label="Grid view"
              >
                <FiGrid />
              </button>
              <button
                type="button"
                onClick={() => appDispatch({ type: 'SET_PROJECT_VIEW', payload: 'table' })}
                className={`focus-ring grid h-9 w-9 place-items-center rounded ${appState.projectView === 'table' ? 'bg-ocean text-white' : ''}`}
                aria-label="Table view"
              >
                <FiList />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        {visibleProjects.length > 0 ? (
          appState.projectView === 'grid' ? (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <ProjectTable projects={visibleProjects} />
          )
        ) : (
          <div className="glass rounded p-8 text-center">
            <p className="font-display text-xl font-bold">No matching projects</p>
            <button
              type="button"
              onClick={() => {
                dispatch({ type: 'RESET' });
                searchInput.current?.focus();
              }}
              className="focus-ring mt-4 rounded bg-ocean px-4 py-2 text-sm font-bold text-white"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
