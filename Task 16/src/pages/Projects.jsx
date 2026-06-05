import { Plus } from 'lucide-react';
import { useMemo, useState } from 'react';
import ProjectForm from '../components/projects/ProjectForm.jsx';
import ProjectTable from '../components/projects/ProjectTable.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import Modal from '../components/ui/Modal.jsx';
import PageHeader from '../components/ui/PageHeader.jsx';
import { useAppState } from '../state/AppContext.jsx';

export default function Projects() {
  const { state, dispatch } = useAppState();
  const [editingProject, setEditingProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');

  const visibleProjects = useMemo(
    () => state.projects.filter((project) => (statusFilter === 'All' ? true : project.status === statusFilter)),
    [state.projects, statusFilter],
  );

  function closeModal() {
    setModalOpen(false);
    setEditingProject(null);
  }

  function saveProject(project) {
    dispatch({ type: editingProject ? 'UPDATE_PROJECT' : 'ADD_PROJECT', payload: project });
    closeModal();
  }

  return (
    <div className="stack">
      <PageHeader
        eyebrow="Project proof"
        title="Manage portfolio evidence"
        description="Create, update, and organize projects that demonstrate measurable engineering judgment."
        actions={
          <button className="button" onClick={() => setModalOpen(true)}>
            <Plus size={16} /> New project
          </button>
        }
      />
      <section className="filter-panel">
        <div className="segmented-tabs compact">
          {['All', 'Planned', 'In Progress', 'Completed'].map((status) => (
            <button key={status} className={statusFilter === status ? 'active' : ''} onClick={() => setStatusFilter(status)}>
              {status}
            </button>
          ))}
        </div>
      </section>
      {visibleProjects.length ? (
        <ProjectTable
          projects={visibleProjects}
          onEdit={(project) => {
            setEditingProject(project);
            setModalOpen(true);
          }}
          onDelete={(projectId) => dispatch({ type: 'DELETE_PROJECT', payload: projectId })}
        />
      ) : (
        <EmptyState title="No projects in this view" description="Create a project or switch to another status filter." />
      )}
      {modalOpen ? (
        <Modal title={editingProject ? 'Edit project' : 'Create project'} onClose={closeModal}>
          <ProjectForm initialProject={editingProject} onSubmit={saveProject} onCancel={closeModal} />
        </Modal>
      ) : null}
    </div>
  );
}
