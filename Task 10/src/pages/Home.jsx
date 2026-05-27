import { Link } from 'react-router-dom';
import profilePhoto from '../assets/balaji-profile.jpg';

const highlights = [
  'Python development',
  'Data analytics',
  'SQL automation',
  'React routing',
];

function Home() {
  return (
    <section className="page hero-page">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer Portfolio</p>
          <h1>Building reliable software with clean logic and data-driven insight.</h1>
          <p className="hero-text">
            I design, develop, and optimize practical applications with a strong
            foundation in Python, SQL, analytics, debugging, and maintainable
            software engineering practices.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/services">
              Explore Services
            </Link>
            <Link className="secondary-button" to="/profile">
              View Profile
            </Link>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Profile snapshot">
          <div className="profile-orbit">
            <img src={profilePhoto} alt="Balaji Sivakumar" />
          </div>
          <h2>Software Engineer</h2>
          <p>
            Detail-oriented developer with experience in Python, SQL, automation,
            analytics dashboards, and reliable software delivery.
          </p>
          <div className="skill-cloud">
            {highlights.map((highlight) => (
              <span key={highlight}>{highlight}</span>
            ))}
          </div>
        </aside>
      </div>

      <div className="metrics-row" aria-label="Portfolio highlights">
        <div>
          <strong>87%</strong>
          <span>Emotion AI model accuracy</span>
        </div>
        <div>
          <strong>25%</strong>
          <span>Data pipeline reliability improvement</span>
        </div>
        <div>
          <strong>97%</strong>
          <span>Fault coverage in computation testing</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
