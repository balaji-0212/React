import { Edit3, Trash2 } from 'lucide-react';

export default function ProjectTable({ projects, onEdit, onDelete }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Category</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Impact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>
                <strong>{project.name}</strong>
                <small>{project.stack}</small>
              </td>
              <td>{project.category}</td>
              <td>
                <span className={`status-pill status-${project.status.toLowerCase().replaceAll(' ', '-')}`}>
                  {project.status}
                </span>
              </td>
              <td>
                <div className="progress-bar" aria-label={`${project.progress}% complete`}>
                  <span style={{ width: `${project.progress}%` }} />
                </div>
              </td>
              <td>{project.impact}</td>
              <td>
                <div className="row-actions">
                  <button className="icon-button" onClick={() => onEdit(project)} aria-label={`Edit ${project.name}`}>
                    <Edit3 size={16} />
                  </button>
                  <button className="icon-button danger" onClick={() => onDelete(project.id)} aria-label={`Delete ${project.name}`}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
