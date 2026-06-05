export const defaultProfile = {
  name: 'Balaji Sivakumar',
  headline: 'Data Engineer building analytics products with React and modern data platforms',
  location: 'India',
  email: 'balaji@example.com',
  focus: 'Data engineering, dashboard engineering, workflow automation',
  weeklyGoal: 8,
};

export const defaultProjects = [
  {
    id: 'portfolio-command-center',
    name: 'Portfolio Command Center',
    category: 'Frontend',
    status: 'In Progress',
    impact: 'Centralizes role targets, project proof, and weekly growth metrics.',
    stack: 'React, Vite, Router, Local Storage',
    progress: 72,
  },
  {
    id: 'pipeline-observability',
    name: 'Pipeline Observability Board',
    category: 'Data',
    status: 'Planned',
    impact: 'Tracks data freshness, failed workflows, and ownership signals.',
    stack: 'React, Node, PostgreSQL',
    progress: 35,
  },
  {
    id: 'job-market-radar',
    name: 'Job Market Radar',
    category: 'Analytics',
    status: 'Completed',
    impact: 'Maps job descriptions to skills and portfolio gaps.',
    stack: 'React, APIs, Charts',
    progress: 100,
  },
];

export const defaultSettings = {
  theme: 'light',
  emailDigest: true,
  focusMode: false,
  targetRole: 'Data Platform Engineer',
  preferredLocation: 'Remote India',
};
