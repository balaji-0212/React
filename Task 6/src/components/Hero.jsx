function Hero({ userCount }) {
  const dashboardMetrics = [
    { value: userCount || '10', label: 'API Profiles' },
    { value: '9', label: 'Core Skills' },
    { value: 'ECE', label: 'Engineering Focus' }
  ];

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Task 6 - Fetch Data from API</p>
        <h1 id="hero-title">Balaji S User Dashboard</h1>
        <p>
          A modern React interface for API-driven user cards with realistic professional
          details, designed around Balaji S, Electronics and Communication Engineer.
        </p>

        <div className="hero-actions" aria-label="Page shortcuts">
          <a className="primary-link" href="#users">
            View Users
          </a>
          <a className="secondary-link" href="#about">
            Developer Profile
          </a>
        </div>
      </div>

      <div className="hero-panel" aria-label="Dashboard highlights">
        {dashboardMetrics.map((metric) => (
          <div className="metric-card" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
