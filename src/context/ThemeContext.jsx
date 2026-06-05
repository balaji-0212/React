import { createContext, useContext, useMemo } from 'react';
import { useThemeManager } from '../hooks/useThemeManager.js';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const theme = useThemeManager();
  const value = useMemo(() => theme, [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
}
