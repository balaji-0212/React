import { useContext } from 'react';
import { FormContext } from '../context/FormContext.jsx';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(FormContext);
  const isDark = theme === 'dark';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb" />
      </span>
      <span>{isDark ? 'Dark' : 'Light'} Theme</span>
    </button>
  );
}

export default ThemeToggle;
