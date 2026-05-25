import { useContext } from 'react';
import { FormContext } from '../context/FormContext.jsx';

const fieldGroups = [
  {
    title: 'Personal Information',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text' },
      { name: 'role', label: 'Role', type: 'text' },
      { name: 'phone', label: 'Phone', type: 'tel' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'location', label: 'Location', type: 'text' },
    ],
  },
  {
    title: 'Online Profiles',
    fields: [
      { name: 'linkedin', label: 'LinkedIn', type: 'text' },
      { name: 'github', label: 'GitHub', type: 'text' },
    ],
  },
  {
    title: 'Education & Career',
    fields: [
      { name: 'education', label: 'Education', type: 'text' },
      { name: 'college', label: 'College', type: 'text' },
      { name: 'internship', label: 'Internship', type: 'text' },
      {
        name: 'skills',
        label: 'Skills',
        type: 'textarea',
      },
      {
        name: 'careerInterests',
        label: 'Career Interests',
        type: 'textarea',
      },
    ],
  },
];

function InputFields() {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  return (
    <div className="input-fields">
      {fieldGroups.map((group) => (
        <fieldset className="input-group" key={group.title}>
          <legend>{group.title}</legend>

          <div className="input-group__grid">
            {group.fields.map((field) => (
              <label className="field" key={field.name}>
                <span>{field.label}</span>
                {field.type === 'textarea' ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    rows="4"
                  />
                ) : (
                  <input
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                  />
                )}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}

export default InputFields;
