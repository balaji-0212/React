import { Edit3, Trash2 } from 'lucide-react';

function RecordsTable({ loading, records, onDelete, onEdit }) {
  if (loading) {
    return (
      <div className="status-message" role="status">
        <span className="loader" aria-hidden="true" />
        <span>Loading records...</span>
      </div>
    );
  }

  if (!records.length) {
    return (
      <div className="empty-state">
        <h3>No records found</h3>
        <p>Add a user to start building the directory.</p>
      </div>
    );
  }

  return (
    <div className="table-wrap">
      <table>
        <caption>User records</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td data-label="Name">{record.name}</td>
              <td data-label="Email">
                <a href={`mailto:${record.email}`}>{record.email}</a>
              </td>
              <td data-label="Actions">
                <div className="row-actions">
                  <button
                    className="icon-button"
                    type="button"
                    onClick={() => onEdit(record)}
                    aria-label={`Edit ${record.name}`}
                    title="Edit"
                  >
                    <Edit3 size={17} aria-hidden="true" />
                  </button>
                  <button
                    className="icon-button danger"
                    type="button"
                    onClick={() => onDelete(record.id)}
                    aria-label={`Remove ${record.name}`}
                    title="Remove"
                  >
                    <Trash2 size={17} aria-hidden="true" />
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

export default RecordsTable;
