import { Link } from 'react-router-dom';

export default function ProjectTable({ projects }) {
  return (
    <div className="glass overflow-hidden rounded">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-700">
          <thead className="bg-white/50 text-xs uppercase tracking-[0.14em] text-slate-500 dark:bg-slate-900/50 dark:text-slate-400">
            <tr>
              <th className="px-4 py-4">Project</th>
              <th className="px-4 py-4">Type</th>
              <th className="px-4 py-4">Stack</th>
              <th className="px-4 py-4">Year</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            {projects.map((project) => (
              <tr key={project.id} className="transition hover:bg-white/50 dark:hover:bg-white/5">
                <td className="px-4 py-4 font-bold">
                  <Link className="focus-ring rounded text-ocean hover:underline" to={`/projects/detail/${project.id}`}>
                    {project.title}
                  </Link>
                </td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-300">{project.type}</td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-300">
                  {project.technologies.slice(0, 3).join(', ')}
                </td>
                <td className="px-4 py-4 text-slate-600 dark:text-slate-300">{project.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
