import { useState } from 'react'
import './App.css'

const profileHighlights = [
  {
    id: 1,
    title: 'EmotionSense AI',
    category: 'Project',
    status: 'Featured',
    owner: 'Python, TensorFlow, Keras, Flask, OpenCV',
    metric: '87% accuracy',
    summary:
      'Real-time emotion analytics system with a Flask API, CNN model, and reduced inference latency.',
  },
  {
    id: 2,
    title: 'Bank Loan Report Dashboard',
    category: 'Project',
    status: 'Featured',
    owner: 'Power BI, SQL Server, DAX, Excel',
    metric: '15% faster insights',
    summary:
      'Financial analytics dashboard with automated ETL pipelines and KPI monitoring for loan data.',
  },
  {
    id: 3,
    title: 'Fault-Tolerant Matrix Computation',
    category: 'Project',
    status: 'Published',
    owner: 'Verilog HDL, Python, Vivado',
    metric: '97% fault coverage',
    summary:
      'Systolic array design verified through simulation and presented at IEEE ICCCNT 2025.',
  },
  {
    id: 4,
    title: 'VCodez Data Science Internship',
    category: 'Experience',
    status: 'Internship',
    owner: 'Python, SQL, Git, Data Pipelines',
    metric: '25% reliability gain',
    summary:
      'Built validation scripts, improved data pipeline reliability, and supported SDLC workflows.',
  },
  {
    id: 5,
    title: 'Core Engineering Skills',
    category: 'Skill',
    status: 'Strong',
    owner: 'Python, OOP, DSA, SDLC',
    metric: 'Problem solving',
    summary:
      'Programming foundation focused on maintainable code, debugging, and structured development.',
  },
  {
    id: 6,
    title: 'Data and Cloud Tools',
    category: 'Skill',
    status: 'Strong',
    owner: 'MySQL, Power BI, Excel, AWS',
    metric: 'Analytics stack',
    summary:
      'Hands-on exposure to data analysis, reporting, SQL workflows, and cloud fundamentals.',
  },
  {
    id: 7,
    title: 'Professional Certifications',
    category: 'Certification',
    status: 'Certified',
    owner: 'AWS, IBM, Cisco, DSA',
    metric: '5 certificates',
    summary:
      'Certifications in cloud, Python for data science, analytics, backend development, and DSA.',
  },
]

const profileStats = [
  { label: 'Projects', value: 3 },
  { label: 'Internship', value: 1 },
  { label: 'Certificates', value: 5 },
]

const categories = ['All', ...new Set(profileHighlights.map((item) => item.category))]
const viewOptions = ['cards', 'table']

const statusTone = {
  Certified: 'success',
  Featured: 'success',
  Internship: 'warning',
  Published: 'info',
  Strong: 'neutral',
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showProfileSummary, setShowProfileSummary] = useState(true)
  const [showContactDetails, setShowContactDetails] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState('cards')

  const visibleHighlights =
    selectedCategory === 'All'
      ? profileHighlights
      : profileHighlights.filter((item) => item.category === selectedCategory)

  const welcomeMessage = isLoggedIn
    ? 'Welcome back, Balaji. Your software engineer portfolio is ready to review.'
    : 'Welcome to Balaji Sivakumar\'s React practice portfolio. Login to unlock the profile summary.'

  return (
    <main className="app-shell">
      <section className="hero-section">
        <div className="hero-copy-block">
          <p className="eyebrow">React Task 3</p>
          <h1>Balaji Sivakumar</h1>
          <p className="role-line">Software Engineer | Coimbatore, Tamil Nadu</p>
          <p className="hero-copy">
            Conditional rendering and list rendering are shown through a
            personalized resume dashboard built with useState and map().
          </p>
        </div>

        <div className="status-card">
          <div>
            <span className={isLoggedIn ? 'status-dot active' : 'status-dot'} />
            <p className="status-label">
              {isLoggedIn ? 'Logged In' : 'Logged Out'}
            </p>
            <h2>{welcomeMessage}</h2>
          </div>
          <button
            className={isLoggedIn ? 'button secondary-button' : 'button primary-button'}
            onClick={() => setIsLoggedIn((currentStatus) => !currentStatus)}
            type="button"
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </section>

      {isLoggedIn ? (
        <section className="summary-strip" aria-label="Resume summary">
          {profileStats.map((stat) => (
            <div key={stat.label}>
              <span>{stat.value}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </section>
      ) : (
        <section className="locked-message">
          Login state is false, so the resume summary is hidden with conditional rendering.
        </section>
      )}

      <section className="controls-section">
        <article className="info-panel">
          <div className="section-heading">
            <p className="eyebrow">Conditional Rendering</p>
            <h2>Show / Hide Profile Details</h2>
          </div>

          <div className="control-buttons">
            <button
              className="button primary-button"
              onClick={() => setShowProfileSummary((currentValue) => !currentValue)}
              type="button"
            >
              {showProfileSummary ? 'Hide Summary' : 'Show Summary'}
            </button>
            <button
              className="button secondary-button"
              onClick={() => setShowContactDetails((currentValue) => !currentValue)}
              type="button"
            >
              {showContactDetails ? 'Hide Contact' : 'Show Contact'}
            </button>
          </div>

          {showProfileSummary && (
            <div className="notes-box">
              <h3>Professional Summary</h3>
              <p>
                Detail-oriented Software Engineer skilled in Python, data
                analytics, SQL, Power BI, Git, and software development
                lifecycle practices.
              </p>
            </div>
          )}

          {showContactDetails ? (
            <div className="contact-box">
              <p>balaji022212@gmail.com</p>
              <p>linkedin.com/in/balaji0212</p>
              <p>github.com/balaji-0212</p>
            </div>
          ) : (
            <p className="muted-note">Contact details are hidden until the toggle is active.</p>
          )}
        </article>

        <article className="info-panel">
          <div className="section-heading">
            <p className="eyebrow">List Rendering</p>
            <h2>Filter Mapped Resume Data</h2>
          </div>

          <div className="control-buttons" aria-label="Filter resume highlights">
            {categories.map((category) => (
              <button
                className={
                  selectedCategory === category
                    ? 'filter-button selected'
                    : 'filter-button'
                }
                key={category}
                onClick={() => setSelectedCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="control-buttons" aria-label="Change display mode">
            {viewOptions.map((mode) => (
              <button
                className={viewMode === mode ? 'filter-button selected' : 'filter-button'}
                key={mode}
                onClick={() => setViewMode(mode)}
                type="button"
              >
                {mode === 'cards' ? 'Cards' : 'Table'}
              </button>
            ))}
          </div>

          <p className="result-count">
            Showing {visibleHighlights.length} of {profileHighlights.length} resume items
          </p>
        </article>
      </section>

      <section className="topics-section">
        <div className="section-heading centered">
          <p className="eyebrow">Dynamic UI</p>
          <h2>Balaji's Resume Highlights Rendered With map()</h2>
        </div>

        {viewMode === 'cards' ? (
          <div className="topic-grid">
            {visibleHighlights.map((item) => (
              <article className="topic-card" key={item.id}>
                <div className="card-topline">
                  <span className="topic-number">#{item.id}</span>
                  <span className={`status-pill ${statusTone[item.status]}`}>
                    {item.status}
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="example-box">
                  <span>{item.category}</span>
                  <strong>{item.metric}</strong>
                </div>
                <p className="stack-line">{item.owner}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Highlight</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Tech / Focus</th>
                  <th>Metric</th>
                </tr>
              </thead>
              <tbody>
                {visibleHighlights.map((item) => (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>
                      <span className={`status-pill ${statusTone[item.status]}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{item.owner}</td>
                    <td>{item.metric}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
