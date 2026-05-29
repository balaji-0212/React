import { Link } from 'react-router-dom';

function Home() {
  const skills = ['Python', 'Data Analytics', 'SQL', 'AWS', 'Power BI', 'Git'];

  return (
    <section className="home-page">
      <div className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer</p>
          <h1>Balaji Sivakumar</h1>
          <p className="hero-description">
            Detail-oriented software engineer from Coimbatore with a strong foundation in Python,
            data analytics, SQL, and software development practices. Experienced in building
            maintainable solutions, debugging workflows, and improving application reliability.
          </p>

          <div className="contact-row" aria-label="Profile links">
            <a href="mailto:balaji022212@gmail.com">balaji022212@gmail.com</a>
            <a href="https://github.com/balaji-0212" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/balaji0212" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <div className="action-row">
            <Link className="primary-button" to="/users">
              Open User Directory
            </Link>
            <span className="location-text">Coimbatore, Tamil Nadu</span>
          </div>
        </div>

        <div className="hero-panel" aria-label="Profile highlights">
          <div>
            <span className="metric">87%</span>
            <span>Model Accuracy</span>
          </div>
          <div>
            <span className="metric">25%</span>
            <span>Pipeline Reliability</span>
          </div>
          <div>
            <span className="metric">97%</span>
            <span>Fault Coverage</span>
          </div>
        </div>
      </div>

      <div className="skills-strip" aria-label="Core skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>

      <div className="info-band">
        <section>
          <h2>Experience</h2>
          <p>
            Data Science Intern at VCodez, Chennai, where he worked on Python scripts, SQL
            automation workflows, version control, debugging, testing, and data pipeline
            improvements.
          </p>
        </section>

        <section>
          <h2>Projects</h2>
          <p>
            Built EmotionSense AI with TensorFlow, Keras, Flask, and OpenCV; created a Bank Loan
            Report Dashboard using Power BI, SQL Server, DAX, and Excel.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Home;
