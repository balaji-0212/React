const profile = {
  name: 'Balaji Sivakumar',
  photo: '/img/balaji-profile.jpg',
  education:
    'B.E. Electronics and Communication Engineering, Sri Ramakrishna Engineering College',
  location: 'Coimbatore, Tamil Nadu',
  currentRole: 'ASE at Stackly',
  careerGoal:
    'To grow as an Associate Software Engineer at Stackly by building scalable software and data-driven solutions.',
  skills: [
    'Python',
    'SQL',
    'MySQL',
    'Data Structures',
    'OOP',
    'SDLC',
    'Agile',
    'Power BI',
    'Excel',
    'DAX',
    'Git',
    'GitHub',
  ],
  highlights: [
    'Data Science Intern at VCodez',
    'Built real-time emotion analytics using Python, TensorFlow, OpenCV, and Flask',
    'Created dashboards and ETL workflows for business reporting',
  ],
};

function SelfIntroduction() {
  return (
    <section className="intro-card" aria-labelledby="intro-heading">
      <div className="intro-header">
        <img className="avatar" src={profile.photo} alt={profile.name} />
        <div>
          <p className="eyebrow">Self Introduction</p>
          <h1 id="intro-heading">Hello, I am {profile.name}</h1>
          <p className="summary">{profile.careerGoal}</p>
        </div>
      </div>

      <div className="details-grid">
        <article className="detail-block">
          <span>Name</span>
          <strong>{profile.name}</strong>
        </article>
        <article className="detail-block">
          <span>Education</span>
          <strong>{profile.education}</strong>
        </article>
        <article className="detail-block">
          <span>Location</span>
          <strong>{profile.location}</strong>
        </article>
        <article className="detail-block">
          <span>Current Role</span>
          <strong>{profile.currentRole}</strong>
        </article>
        <article className="detail-block detail-block-wide">
          <span>Career Goal</span>
          <strong>{profile.careerGoal}</strong>
        </article>
      </div>

      <div className="list-section">
        <h2>Skills</h2>
        <div className="tag-list">
          {profile.skills.map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="list-section">
        <h2>Highlights</h2>
        <ul className="interest-list">
          {profile.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SelfIntroduction;
