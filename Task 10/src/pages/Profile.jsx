const skills = [
  'Python',
  'Data Analytics',
  'Object-Oriented Programming',
  'Git',
  'GitHub Actions',
  'Power BI',
  'Excel',
  'HTML',
  'CSS',
  'Data Structures and Algorithms',
  'SQL',
  'MySQL',
  'AWS Cloud',
  'Visual Studio Code',
  'Windows',
  'Linux',
];

const certifications = [
  'AWS Cloud Practitioner Essentials - Oct 2025',
  'Python for Data Science, AI & Development - IBM - Oct 2025',
  'Advanced Data Structures & Algorithms - Sep 2025',
  'Data Analytics Essentials - Cisco Networking Academy - Aug 2025',
  'Backend Web Development using MySQL & PHP - Nov 2023',
];

const projects = [
  {
    title: 'EmotionSense AI',
    detail: 'CNN-based real-time emotion analytics system using TensorFlow, Keras, Flask, OpenCV, and GitHub Actions with 87% accuracy.',
  },
  {
    title: 'Bank Loan Report Dashboard',
    detail: 'Power BI dashboard with SQL, DAX, Excel, relational models, KPI monitoring, and automated refresh pipelines.',
  },
  {
    title: 'Fault-Tolerant Matrix Computation',
    detail: 'Verilog HDL systolic array research with Python and Vivado, reaching 97% fault coverage and IEEE ICCCNT 2025 presentation.',
  },
];

function Profile() {
  return (
    <section className="page profile-page">
      <div className="section-heading">
        <p className="eyebrow">Profile</p>
        <h1>Resume Details</h1>
        <p>Skills, certifications, education, internship, projects, and career interests from the software engineer resume.</p>
      </div>

      <div className="profile-layout">
        <article className="profile-section wide">
          <h2>Skills</h2>
          <div className="tag-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>

        <article className="profile-section">
          <h2>Certifications</h2>
          <ul className="clean-list">
            {certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </article>

        <article className="profile-section">
          <h2>Education</h2>
          <p className="highlight-text">B.E - Electronics and Communication Engineering</p>
          <p>Sri Ramakrishna Engineering College, Coimbatore</p>
          <span className="date-pill">Jul 2021 - May 2025</span>
        </article>

        <article className="profile-section">
          <h2>Internship</h2>
          <p className="highlight-text">Data Science Intern - VCodez, Chennai</p>
          <p>
            Developed Python scripts for data validation, SQL automation workflows,
            reusable code, and testing methods that improved data pipeline
            reliability by 25%.
          </p>
          <span className="date-pill">Jul 2025 - Oct 2025</span>
        </article>

        <article className="profile-section wide">
          <h2>Projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.detail}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="profile-section career-card">
          <h2>Career Interests</h2>
          <p>
            Software engineering, full-stack development, data analytics,
            backend automation, applied AI systems, dashboard engineering, and
            cloud-ready product development.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Profile;
