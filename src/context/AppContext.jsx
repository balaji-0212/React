import { createContext, useContext, useMemo, useReducer } from 'react';

const initialState = {
  preference: 'balanced',
  projectView: 'grid',
  selectedTech: 'all',
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_PREFERENCE':
      return { ...state, preference: action.payload };
    case 'SET_PROJECT_VIEW':
      return { ...state, projectView: action.payload };
    case 'SET_SELECTED_TECH':
      return { ...state, selectedTech: action.payload };
    default:
      return state;
  }
}

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used inside AppProvider');
  }
  return context;
}
