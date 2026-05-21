const skills = [
  'Python',
  'React',
  'Embedded Systems',
  'ESP32',
  'MySQL',
  'OpenCV',
  'CNN',
  'Verilog HDL',
  'Backend Development'
];

function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading compact">
        <p className="eyebrow">Developer details</p>
        <h2 id="about-title">Electronics and Communication Engineer</h2>
      </div>

      <div className="about-layout">
        <div className="profile-summary">
          <span className="profile-initials" aria-hidden="true">
            BS
          </span>
          <div>
            <h3>Balaji S</h3>
            <p>
              React learner and engineering graduate building practical interfaces with
              frontend, backend, embedded, and computer vision foundations.
            </p>
          </div>
        </div>

        <div className="skills-list" aria-label="Balaji S skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
