import { useEffect, useMemo, useState } from 'react';
import { AlertCircle, RefreshCw, Users } from 'lucide-react';
import RecordForm from './components/RecordForm.jsx';
import RecordsTable from './components/RecordsTable.jsx';
import './App.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const emptyForm = {
  name: '',
  email: ''
};

function App() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const activeRecord = useMemo(
    () => records.find((record) => record.id === editingId),
    [editingId, records]
  );

  const loadRecords = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Unable to load records.');
      }

      const users = await response.json();
      const formattedRecords = users.map(({ id, name, email }) => ({
        id,
        name,
        email
      }));

      setRecords(formattedRecords);
    } catch {
      setError('Records could not be loaded. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecords();
  }, []);

  const validateForm = () => {
    const nextErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      nextErrors.name = 'Enter a name.';
    }

    if (!trimmedEmail) {
      nextErrors.email = 'Enter an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = 'Enter a valid email address.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const nextRecord = {
      id: editingId ?? Date.now(),
      name: formData.name.trim(),
      email: formData.email.trim()
    };

    if (editingId) {
      setRecords((currentRecords) =>
        currentRecords.map((record) =>
          record.id === editingId ? nextRecord : record
        )
      );
    } else {
      setRecords((currentRecords) => [nextRecord, ...currentRecords]);
    }

    setFormData(emptyForm);
    setEditingId(null);
    setErrors({});
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    setFormData({
      name: record.name,
      email: record.email
    });
    setErrors({});
  };

  const handleDelete = (recordId) => {
    setRecords((currentRecords) =>
      currentRecords.filter((record) => record.id !== recordId)
    );

    if (editingId === recordId) {
      setEditingId(null);
      setFormData(emptyForm);
      setErrors({});
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setErrors({});
  };

  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="page-title">
        <div>
          <p className="eyebrow">Contact records</p>
          <h1 id="page-title">Manage users</h1>
          <p className="hero-copy">
            Review live API records and keep the working list current with quick
            create, edit, and remove actions.
          </p>
        </div>

        <div className="stat-panel" aria-label="Record count">
          <Users size={24} aria-hidden="true" />
          <span>{records.length}</span>
          <p>Total records</p>
        </div>
      </section>

      <section className="content-grid" aria-label="Record management">
        <RecordForm
          errors={errors}
          formData={formData}
          isEditing={Boolean(activeRecord)}
          onCancel={handleCancelEdit}
          onChange={handleInputChange}
          onSubmit={handleSubmit}
        />

        <section className="table-panel" aria-labelledby="table-title">
          <div className="table-toolbar">
            <div>
              <p className="eyebrow">Directory</p>
              <h2 id="table-title">User list</h2>
            </div>

            <button
              className="icon-button"
              type="button"
              onClick={loadRecords}
              aria-label="Refresh records"
              title="Refresh records"
              disabled={loading}
            >
              <RefreshCw size={18} aria-hidden="true" />
            </button>
          </div>

          {error && (
            <div className="status-message error" role="alert">
              <AlertCircle size={18} aria-hidden="true" />
              <span>{error}</span>
            </div>
          )}

          <RecordsTable
            loading={loading}
            records={records}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </section>
      </section>
    </main>
  );
}

export default App;
