import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-page">
      <div className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Task 11</p>
          <h1>useParams Hook with API Integration</h1>
          <p className="hero-description">
            A focused React project that combines dynamic routing with live JSONPlaceholder API
            data. Select a user, pass the ID through the URL, and load the matching profile with
            React Router.
          </p>
          <Link className="primary-button" to="/users">
            View Users
          </Link>
        </div>

        <div className="hero-panel" aria-label="Project highlights">
          <div>
            <span className="metric">3</span>
            <span>Routes</span>
          </div>
          <div>
            <span className="metric">10</span>
            <span>API Users</span>
          </div>
          <div>
            <span className="metric">1</span>
            <span>URL Param</span>
          </div>
        </div>
      </div>

      <div className="info-band">
        <section>
          <h2>useParams Hook</h2>
          <p>
            The details page reads the dynamic <code>id</code> segment from <code>/users/:id</code>
            with <code>useParams()</code>, then uses that value to request the selected user.
          </p>
        </section>

        <section>
          <h2>API Integration</h2>
          <p>
            Fetch requests are isolated in a reusable service file, keeping components clean while
            loading, empty, invalid, and failure states stay visible to the user.
          </p>
        </section>
      </div>
    </section>
  );
}

export default Home;
