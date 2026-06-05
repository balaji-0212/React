import {
  FiBarChart2,
  FiCpu,
  FiDatabase,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiServer,
} from 'react-icons/fi';

export const profile = {
  name: 'Balaji Sivakumar',
  role: 'Associate Software Engineer',
  company: 'Stackly',
  location: 'Coimbatore, Tamil Nadu',
  email: import.meta.env.VITE_CONTACT_EMAIL || 'balaji022212@gmail.com',
  phone: '+91 9345355312',
  github: 'https://github.com/balaji-0212',
  linkedin: 'https://linkedin.com/in/balaji0212',
  summary:
    'Associate Software Engineer focused on clean software delivery, reliable data pipelines, analytics automation, and practical AI systems. Balaji blends an electronics background with modern frontend, Python, SQL, BI, and full stack engineering.',
  interests: ['Data Engineering', 'AI', 'IoT', 'Embedded Systems', 'Full Stack Development'],
};

export const socials = [
  { label: 'GitHub', href: profile.github, icon: FiGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FiLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FiMail },
];

export const quickFacts = [
  { label: 'Based in', value: profile.location, icon: FiMapPin },
  { label: 'Current role', value: `${profile.role} at ${profile.company}`, icon: FiServer },
  { label: 'Core stack', value: 'React, Python, SQL, MySQL, Power BI', icon: FiDatabase },
  { label: 'Focus areas', value: 'Data platforms, AI, IoT, dashboards', icon: FiCpu },
];

export const experiences = [
  {
    company: 'Stackly',
    role: 'Associate Software Engineer',
    period: 'Apr 2026 - Present',
    points: [
      'Supports software delivery across requirement analysis, coding, debugging, testing, documentation, and issue tracking.',
      'Reviews application and system data for accuracy, identifies defects, and escalates issues through structured workflows.',
      'Maintains reusable code using version control, SDLC practices, and Agile collaboration.',
    ],
  },
  {
    company: 'VCodez',
    role: 'Data Science Intern',
    period: 'Jul 2025 - Oct 2025',
    points: [
      'Automated Python, SQL, and Pandas reporting workflows that reduced recurring preparation time by 40%.',
      'Developed validation scripts for duplicates, missing values, inconsistencies, and reporting anomalies.',
      'Prepared cleaned analytical datasets for dashboards, KPI reporting, and business analysis.',
    ],
  },
];

export const education = {
  school: 'Sri Ramakrishna Engineering College, Coimbatore',
  degree: 'B.E. Electronics and Communication Engineering',
  period: 'Jul 2021 - May 2025',
  result: 'CGPA 6.62/10',
};

export const achievements = [
  'Presented research at IEEE ICCCNT 2025, IIT Indore, on fault-tolerant matrix computation and error-detection architecture.',
  'Built dashboards and automated validation scripts that improved KPI visibility, reporting speed, and data quality.',
];

export const skillGroups = [
  {
    title: 'Frontend Engineering',
    icon: FiServer,
    skills: ['React', 'JavaScript', 'Responsive UI', 'Tailwind CSS', 'Git', 'GitHub'],
  },
  {
    title: 'Data Engineering',
    icon: FiDatabase,
    skills: ['Python', 'SQL', 'MySQL', 'ETL Pipelines', 'Data Validation', 'Data Modeling'],
  },
  {
    title: 'Analytics and BI',
    icon: FiBarChart2,
    skills: ['Power BI', 'Excel', 'Power Query', 'Pivot Tables', 'DAX', 'Tableau Reporting'],
  },
  {
    title: 'AI and Hardware',
    icon: FiCpu,
    skills: ['Data Science', 'TensorFlow', 'OpenCV', 'IoT', 'Embedded Systems', 'Verilog'],
  },
];

export const certifications = [
  'Data Analytics Essentials - Cisco Networking Academy',
  'Foundations of Data Science - Google/Coursera',
  'Python for Data Science, AI and Development - IBM',
  'Databricks Data Analytics Certificate',
  'AWS Cloud Practitioner Essentials',
];
