/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { defaultProfile, defaultProjects, defaultSettings } from '../data/seed.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext(null);

const initialState = {
  profile: defaultProfile,
  projects: defaultProjects,
  settings: defaultSettings,
  savedJobs: ['data-platform-engineer'],
};

function appReducer(state, action) {
  switch (action.type) {
    case 'HYDRATE':
      return { ...state, ...action.payload };
    case 'SAVE_PROFILE':
      return { ...state, profile: action.payload };
    case 'ADD_PROJECT':
      return { ...state, projects: [action.payload, ...state.projects] };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project,
        ),
      };
    case 'DELETE_PROJECT':
      return {
        ...state,
        projects: state.projects.filter((project) => project.id !== action.payload),
      };
    case 'TOGGLE_SAVED_JOB':
      return {
        ...state,
        savedJobs: state.savedJobs.includes(action.payload)
          ? state.savedJobs.filter((jobId) => jobId !== action.payload)
          : [...state.savedJobs, action.payload],
      };
    case 'SAVE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.payload } };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [storedState, setStoredState] = useLocalStorage('career-growth-hub-state', initialState);
  const [state, dispatch] = useReducer(appReducer, storedState);

  useEffect(() => {
    setStoredState(state);
  }, [setStoredState, state]);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppState must be used inside AppProvider');
  }
  return context;
}
