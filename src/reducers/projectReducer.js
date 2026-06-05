export const initialProjectState = {
  search: '',
  category: 'featured',
  sortBy: 'featured',
};

export function projectReducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_CATEGORY':
      return { ...state, category: action.payload };
    case 'SET_SORT':
      return { ...state, sortBy: action.payload };
    case 'RESET':
      return initialProjectState;
    default:
      return state;
  }
}

export function filterProjects(projects, state) {
  const search = state.search.trim().toLowerCase();
  const filtered = projects.filter((project) => {
    const matchesCategory =
      state.category === 'featured' ? project.featured : project.category === state.category;
    const matchesSearch =
      !search ||
      [project.title, project.type, project.summary, ...project.technologies]
        .join(' ')
        .toLowerCase()
        .includes(search);

    return matchesCategory && matchesSearch;
  });

  return filtered.sort((a, b) => {
    if (state.sortBy === 'year') return Number(b.year) - Number(a.year);
    return Number(b.featured) - Number(a.featured) || Number(b.year) - Number(a.year);
  });
}
