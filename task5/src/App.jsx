import { useState } from 'react';

const initialFormData = {
  fullName: '',
  jobTitle: '',
  email: '',
  phone: '',
  city: '',
  state: '',
  zipCode: '',
  address: '',
  linkedIn: '',
  github: '',
  skills: '',
  password: '',
  confirmPassword: ''
};

const emptyFormData = Object.keys(initialFormData).reduce((fields, fieldName) => {
  fields[fieldName] = '';
  return fields;
}, {});

const fieldLabels = {
  fullName: 'Full name',
  jobTitle: 'Job title',
  email: 'Email',
  phone: 'Phone number',
  city: 'City',
  state: 'State',
  zipCode: 'Zip code',
  address: 'Address',
  linkedIn: 'LinkedIn URL',
  github: 'GitHub URL',
  skills: 'Skills',
  password: 'Password',
  confirmPassword: 'Confirm password'
};

const textFieldGroups = [
  {
    legend: 'Profile Details',
    fields: [
      { name: 'fullName', type: 'text', placeholder: 'Balaji Sivakumar' },
      { name: 'jobTitle', type: 'text', placeholder: 'Software Engineer' },
      { name: 'email', type: 'email', placeholder: 'balaji022212@gmail.com' },
      { name: 'phone', type: 'tel', placeholder: '9345355312', maxLength: 10 }
    ]
  },
  {
    legend: 'Location',
    fields: [
      { name: 'city', type: 'text', placeholder: 'Coimbatore' },
      { name: 'state', type: 'text', placeholder: 'Tamil Nadu' },
      { name: 'zipCode', type: 'text', placeholder: '641004', maxLength: 6 }
    ]
  },
  {
    legend: 'Professional Links',
    fields: [
      { name: 'linkedIn', type: 'url', placeholder: 'https://linkedin.com/in/balaji0212' },
      { name: 'github', type: 'url', placeholder: 'https://github.com/balaji-0212' }
    ]
  }
];

function App() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateField = (name, value, currentFormData = formData) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      return `${fieldLabels[name]} is required.`;
    }

    switch (name) {
      case 'fullName':
        return trimmedValue.length < 3 ? 'Full name must be at least 3 characters.' : '';
      case 'jobTitle':
        return trimmedValue.length < 3 ? 'Job title must be at least 3 characters.' : '';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)
          ? ''
          : 'Enter a valid email address.';
      case 'phone':
        return /^\d{10}$/.test(trimmedValue) ? '' : 'Phone number must be exactly 10 digits.';
      case 'city':
        return trimmedValue.length < 3 ? 'City must be at least 3 characters.' : '';
      case 'state':
        return trimmedValue.length < 3 ? 'State must be at least 3 characters.' : '';
      case 'zipCode':
        return /^\d{6}$/.test(trimmedValue) ? '' : 'Zip code must be exactly 6 digits.';
      case 'address':
        return trimmedValue.length < 20 ? 'Address must be at least 20 characters.' : '';
      case 'linkedIn':
        return /^https:\/\/(www\.)?linkedin\.com\/.+/i.test(trimmedValue)
          ? ''
          : 'Enter a valid LinkedIn profile URL.';
      case 'github':
        return /^https:\/\/(www\.)?github\.com\/.+/i.test(trimmedValue)
          ? ''
          : 'Enter a valid GitHub profile URL.';
      case 'skills': {
        const skills = trimmedValue.split(',').map((skill) => skill.trim()).filter(Boolean);
        if (!trimmedValue.includes(',')) {
          return 'Enter skills separated by commas.';
        }
        if (skills.length < 3) {
          return 'Enter at least 3 comma separated skills.';
        }
        return skills.every((skill) => skill.length >= 2)
          ? ''
          : 'Each skill should contain at least 2 characters.';
      }
      case 'password':
        if (trimmedValue.length < 8) {
          return 'Password must be at least 8 characters.';
        }
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/.test(trimmedValue)
          ? ''
          : 'Use uppercase, lowercase, number, and special character.';
      case 'confirmPassword':
        return trimmedValue === currentFormData.password ? '' : 'Confirm password must match password.';
      default:
        return '';
    }
  };

  const validateForm = (currentFormData) => {
    return Object.keys(currentFormData).reduce((formErrors, fieldName) => {
      const errorMessage = validateField(fieldName, currentFormData[fieldName], currentFormData);

      if (errorMessage) {
        formErrors[fieldName] = errorMessage;
      }

      return formErrors;
    }, {});
  };

  const currentValidationErrors = validateForm(formData);
  const isFormValid = Object.keys(currentValidationErrors).length === 0;
  const addressCharacterCount = formData.address.length;

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextFormData = {
      ...formData,
      [name]: value
    };
    const nextErrors = {
      ...errors,
      [name]: validateField(name, value, nextFormData)
    };

    if (name === 'password' && touchedFields.confirmPassword) {
      nextErrors.confirmPassword = validateField(
        'confirmPassword',
        nextFormData.confirmPassword,
        nextFormData
      );
    }

    setFormData(nextFormData);
    setErrors(nextErrors);
    setSuccessMessage('');
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouchedFields({
      ...touchedFields,
      [name]: true
    });
    setErrors({
      ...errors,
      [name]: validateField(name, value)
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formErrors = validateForm(formData);
    const allTouchedFields = Object.keys(formData).reduce((fields, fieldName) => {
      fields[fieldName] = true;
      return fields;
    }, {});

    setTouchedFields(allTouchedFields);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSuccessMessage('Profile form submitted successfully.');
    }
  };

  const handleReset = () => {
    setFormData(emptyFormData);
    setErrors({});
    setTouchedFields({});
    setSuccessMessage('');
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const getFieldError = (fieldName) => {
    return touchedFields[fieldName] ? errors[fieldName] : '';
  };

  const renderInputField = ({ name, type, placeholder, maxLength }) => {
    const fieldError = getFieldError(name);

    return (
      <label className="form-field" key={name}>
        <span>{fieldLabels[name]}</span>
        <input
          className={fieldError ? 'input-error' : ''}
          type={type}
          name={name}
          value={formData[name]}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(fieldError)}
          aria-describedby={fieldError ? `${name}-error` : undefined}
        />
        {fieldError && (
          <small className="error-message" id={`${name}-error`}>
            {fieldError}
          </small>
        )}
      </label>
    );
  };

  return (
    <main className="app-shell">
      <section className="form-card" aria-labelledby="form-title">
        <div className="form-header">
          <p className="eyebrow">Task 5 - Form with Validation</p>
          <h1 id="form-title">Software Engineer Profile</h1>
          <p>
            Resume-based registration form with inline validation, password checks,
            and responsive layout.
          </p>
        </div>

        {successMessage && <div className="success-message">{successMessage}</div>}

        <form className="profile-form" onSubmit={handleSubmit} noValidate>
          {textFieldGroups.map((group) => (
            <fieldset key={group.legend}>
              <legend>{group.legend}</legend>
              <div className="form-grid">{group.fields.map(renderInputField)}</div>
            </fieldset>
          ))}

          <fieldset>
            <legend>Address and Skills</legend>
            <label className="form-field full-width">
              <span>{fieldLabels.address}</span>
              <textarea
                className={getFieldError('address') ? 'input-error' : ''}
                name="address"
                value={formData.address}
                placeholder="Sri Ramakrishna Engineering College area, Coimbatore, Tamil Nadu"
                rows="4"
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(getFieldError('address'))}
                aria-describedby="address-counter address-error"
              />
              <span className="counter" id="address-counter">
                {addressCharacterCount}/20 minimum characters
              </span>
              {getFieldError('address') && (
                <small className="error-message" id="address-error">
                  {getFieldError('address')}
                </small>
              )}
            </label>

            <label className="form-field full-width">
              <span>{fieldLabels.skills}</span>
              <input
                className={getFieldError('skills') ? 'input-error' : ''}
                type="text"
                name="skills"
                value={formData.skills}
                placeholder="Python, SQL, React, Git"
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(getFieldError('skills'))}
                aria-describedby={getFieldError('skills') ? 'skills-error' : undefined}
              />
              {getFieldError('skills') && (
                <small className="error-message" id="skills-error">
                  {getFieldError('skills')}
                </small>
              )}
            </label>
          </fieldset>

          <fieldset>
            <legend>Security</legend>
            <div className="form-grid">
              <label className="form-field">
                <span>{fieldLabels.password}</span>
                <div className="password-row">
                  <input
                    className={getFieldError('password') ? 'input-error' : ''}
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    placeholder="Strong@123"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(getFieldError('password'))}
                    aria-describedby={getFieldError('password') ? 'password-error' : undefined}
                  />
                  <button
                    type="button"
                    className="visibility-button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {getFieldError('password') && (
                  <small className="error-message" id="password-error">
                    {getFieldError('password')}
                  </small>
                )}
              </label>

              <label className="form-field">
                <span>{fieldLabels.confirmPassword}</span>
                <div className="password-row">
                  <input
                    className={getFieldError('confirmPassword') ? 'input-error' : ''}
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Strong@123"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(getFieldError('confirmPassword'))}
                    aria-describedby={
                      getFieldError('confirmPassword') ? 'confirmPassword-error' : undefined
                    }
                  />
                  <button
                    type="button"
                    className="visibility-button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                  >
                    {showConfirmPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {getFieldError('confirmPassword') && (
                  <small className="error-message" id="confirmPassword-error">
                    {getFieldError('confirmPassword')}
                  </small>
                )}
              </label>
            </div>
          </fieldset>

          <div className="form-actions">
            <button type="reset" className="reset-button" onClick={handleReset}>
              Reset
            </button>
            <button type="submit" className="submit-button" disabled={!isFormValid}>
              Submit Profile
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
