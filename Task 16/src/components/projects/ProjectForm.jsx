import { useEffect, useRef, useState } from 'react';

const blankProject = {
  name: '',
  category: 'Frontend',
  status: 'Planned',
  impact: '',
  stack: '',
  progress: 10,
};

function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ProjectForm({ initialProject, onSubmit, onCancel }) {
  const [project, setProject] = useState(initialProject || blankProject);
  const [errors, setErrors] = useState({});
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  function updateField(event) {
    const { name, value } = event.target;
    setProject((current) => ({ ...current, [name]: name === 'progress' ? Number(value) : value }));
  }

  function validate() {
    const nextErrors = {};
    if (project.name.trim().length < 3) nextErrors.name = 'Use at least 3 characters.';
    if (project.impact.trim().length < 12) nextErrors.impact = 'Describe the outcome in more detail.';
    if (project.stack.trim().length < 4) nextErrors.stack = 'Add the main tools or technologies.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;
    onSubmit({
      ...project,
      id: project.id || `${slugify(project.name)}-${Date.now()}`,
      name: project.name.trim(),
      impact: project.impact.trim(),
      stack: project.stack.trim(),
    });
  }

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <label>
        Project name
        <input ref={nameRef} name="name" value={project.name} onChange={updateField} />
        {errors.name ? <small className="field-error">{errors.name}</small> : null}
      </label>
      <label>
        Category
        <select name="category" value={project.category} onChange={updateField}>
          <option>Frontend</option>
          <option>Data</option>
          <option>Analytics</option>
          <option>Automation</option>
        </select>
      </label>
      <label>
        Status
        <select name="status" value={project.status} onChange={updateField}>
          <option>Planned</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
      </label>
      <label>
        Progress
        <input name="progress" type="range" min="0" max="100" value={project.progress} onChange={updateField} />
        <span className="range-value">{project.progress}%</span>
      </label>
      <label className="full-span">
        Impact
        <textarea name="impact" rows="3" value={project.impact} onChange={updateField} />
        {errors.impact ? <small className="field-error">{errors.impact}</small> : null}
      </label>
      <label className="full-span">
        Stack
        <input name="stack" value={project.stack} onChange={updateField} />
        {errors.stack ? <small className="field-error">{errors.stack}</small> : null}
      </label>
      <div className="form-actions full-span">
        <button type="button" className="button secondary" onClick={onCancel}>
          Cancel
        </button>
        <button className="button" type="submit">
          Save project
        </button>
      </div>
    </form>
  );
}
