import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-page">
      <div className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Profile Explorer</p>
          <h1>User Directory</h1>
          <p className="hero-description">
            Browse user profiles, open any person from the list, and view their contact, company,
            and address information on a dedicated details page.
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
          <h2>Dynamic Routing</h2>
          <p>
            The details page reads the dynamic <code>id</code> segment from <code>/users/:id</code>,
            then uses that value to request and display the selected user.
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
