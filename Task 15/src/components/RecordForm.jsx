import { Save, X } from 'lucide-react';

function RecordForm({
  errors,
  formData,
  isEditing,
  onCancel,
  onChange,
  onSubmit
}) {
  return (
    <section className="form-panel" aria-labelledby="form-title">
      <p className="eyebrow">{isEditing ? 'Update record' : 'New record'}</p>
      <h2 id="form-title">{isEditing ? 'Edit user' : 'Add user'}</h2>

      <form className="record-form" onSubmit={onSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={Boolean(errors.name)}
            id="name"
            name="name"
            onChange={onChange}
            placeholder="Aarav"
            type="text"
            value={formData.name}
          />
          {errors.name && (
            <span className="field-error" id="name-error">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            aria-describedby={errors.email ? 'email-error' : undefined}
            aria-invalid={Boolean(errors.email)}
            id="email"
            name="email"
            onChange={onChange}
            placeholder="aarav@example.in"
            type="email"
            value={formData.email}
          />
          {errors.email && (
            <span className="field-error" id="email-error">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-actions">
          <button className="primary-button" type="submit">
            <Save size={18} aria-hidden="true" />
            <span>{isEditing ? 'Save changes' : 'Add record'}</span>
          </button>

          {isEditing && (
            <button className="secondary-button" type="button" onClick={onCancel}>
              <X size={18} aria-hidden="true" />
              <span>Cancel</span>
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default RecordForm;
