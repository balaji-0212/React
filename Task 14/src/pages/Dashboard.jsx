import ErrorMessage from '../components/ErrorMessage.jsx';
import Footer from '../components/Footer.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import Navbar from '../components/Navbar.jsx';
import UserTable from '../components/UserTable.jsx';
import useFetchData from '../hooks/useFetchData.js';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

function Dashboard() {
  const { data: users, loading, error } = useFetchData(USERS_API_URL);

  return (
    <div className="app-shell">
      <Navbar totalUsers={users.length} />

      <main className="dashboard">
        <section className="dashboard-hero" aria-labelledby="dashboard-title">
          <div>
            <p className="eyebrow">Live Directory</p>
            <h1 id="dashboard-title">User Insights</h1>
            <p className="hero-copy">
              Browse profile, contact, and web details from a clean responsive
              data view.
            </p>
          </div>

          <div className="summary-grid" aria-label="Directory summary">
            <div className="summary-card">
              <span className="summary-value">{users.length}</span>
              <span className="summary-label">Records</span>
            </div>
            <div className="summary-card">
              <span className="summary-value">
                {loading ? 'Syncing' : 'Ready'}
              </span>
              <span className="summary-label">Status</span>
            </div>
          </div>
        </section>

        <section className="table-panel" aria-label="User records">
          {loading && <LoadingSpinner />}
          {!loading && error && <ErrorMessage message={error} />}
          {!loading && !error && <UserTable users={users} />}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;
