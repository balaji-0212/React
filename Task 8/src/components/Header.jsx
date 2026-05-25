import { useContext } from 'react';
import ThemeToggle from './ThemeToggle.jsx';
import { FormContext } from '../context/FormContext.jsx';

function Header() {
  const { formData } = useContext(FormContext);

  return (
    <header className="header">
      <div>
        <span className="header__eyebrow">useContext resume form</span>
        <h1>{formData.fullName}</h1>
        <p>
          {formData.role} based in {formData.location}
        </p>
      </div>
      <ThemeToggle />
    </header>
  );
}

export default Header;
