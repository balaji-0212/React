import { useState } from "react";

const profileHighlights = [
  "Python",
  "AI Analytics",
  "SQL",
  "AWS",
  "Power BI",
  "GitHub Actions",
];

const techSignals = [
  { label: "AI", value: "EmotionSense", detail: "87% model accuracy" },
  { label: "IoT", value: "Systolic Arrays", detail: "97% fault coverage" },
  { label: "Code", value: "SDLC + OOP", detail: "Clean engineering habits" },
];

function IconButton({ type }) {
  const icons = {
    plus: (
      <path d="M12 5v14M5 12h14" />
    ),
    minus: (
      <path d="M5 12h14" />
    ),
    reset: (
      <path d="M20 11a8.1 8.1 0 0 0-15.5-3M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 3M20 19v-4h-4" />
    ),
    theme: (
      <path d="M12 3a6 6 0 0 0 9 7.2A9 9 0 1 1 12 3Z" />
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="button-icon">
      {icons[type]}
    </svg>
  );
}

function App() {
  const [counterValue, setCounterValue] = useState(0);
  const [theme, setTheme] = useState("light");

  const isDarkMode = theme === "dark";
  const themeLabel = isDarkMode ? "Dark Mode Active" : "Light Mode Active";

  const handleIncrement = () => {
    setCounterValue((currentValue) => currentValue + 1);
  };

  const handleDecrement = () => {
    setCounterValue((currentValue) => Math.max(0, currentValue - 1));
  };

  const handleReset = () => {
    setCounterValue(0);
  };

  const handleThemeToggle = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <main className={`app-shell ${theme}`}>
      <div className="circuit-layer" aria-hidden="true" />
      <section className="dashboard">
        <header className="hero-header">
          <div>
            <p className="eyebrow">React useState Assignment</p>
            <h1>Counter & Theme Toggle</h1>
            <p className="intro">
              Built by <strong>Balaji S</strong>, a fresher Software Engineer
              focused on Python, AI analytics, data workflows, and reliable
              software systems.
            </p>
          </div>

          <button
            className="theme-toggle"
            type="button"
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
          >
            <IconButton type="theme" />
            <span>{themeLabel}</span>
          </button>
        </header>

        <section className="counter-card" aria-labelledby="counter-title">
          <div className="status-row">
            <span className="status-pill">Portfolio Ready</span>
            <span className="status-pill">{themeLabel}</span>
          </div>

          <div className="counter-display">
            <p id="counter-title">Live Counter</p>
            <span key={counterValue} className="counter-value">
              {counterValue}
            </span>
          </div>

          <div className="button-group" aria-label="Counter controls">
            <button
              className="action-button increment"
              type="button"
              onClick={handleIncrement}
            >
              <IconButton type="plus" />
              Increment
            </button>
            <button
              className="action-button decrement"
              type="button"
              onClick={handleDecrement}
              disabled={counterValue === 0}
            >
              <IconButton type="minus" />
              Decrement
            </button>
            <button
              className="action-button reset"
              type="button"
              onClick={handleReset}
            >
              <IconButton type="reset" />
              Reset
            </button>
          </div>
        </section>

        <section className="profile-grid" aria-label="Developer highlights">
          <article className="developer-panel">
            <p className="panel-kicker">Developer</p>
            <h2>Balaji Sivakumar</h2>
            <p>
              Software Engineer from Coimbatore with project experience in AI,
              data analytics, SQL automation, dashboards, and hardware-aware
              computation.
            </p>
            <div className="skill-list">
              {profileHighlights.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </article>

          <div className="signal-grid">
            {techSignals.map((signal) => (
              <article className="signal-card" key={signal.label}>
                <span>{signal.label}</span>
                <h3>{signal.value}</h3>
                <p>{signal.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="footer-bar">
          <span>Balaji S</span>
          <span>React Hooks | Responsive UI | Modern CSS</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
