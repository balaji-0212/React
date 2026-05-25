import InputFields from './InputFields.jsx';

function Form() {
  return (
    <section className="form-card" aria-labelledby="profile-form-title">
      <div className="form-card__header">
        <div>
          <span className="form-card__label">Editable profile</span>
          <h2 id="profile-form-title">Professional Details</h2>
        </div>
        <span className="form-card__badge">Context API</span>
      </div>

      <form className="profile-form">
        <InputFields />
      </form>
    </section>
  );
}

export default Form;
