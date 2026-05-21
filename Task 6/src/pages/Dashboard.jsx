import { useEffect, useState } from 'react';
import AboutSection from '../components/AboutSection.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import StatusMessage from '../components/StatusMessage.jsx';
import UserCard from '../components/UserCard.jsx';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        setIsLoading(true);
        setErrorMessage('');

        const response = await fetch(USERS_API_URL, {
          signal: controller.signal
        });

        if (!response.ok) {
          throw new Error('Unable to load user data. Please try again later.');
        }

        const userData = await response.json();
        setUsers(userData);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setErrorMessage(error.message || 'Something went wrong while fetching users.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    fetchUsers();

    return () => controller.abort();
  }, []);

  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Hero userCount={users.length} />
        <AboutSection />

        <section className="users-section" id="users" aria-labelledby="users-title">
          <div className="section-heading">
            <p className="eyebrow">API users</p>
            <h2 id="users-title">JSONPlaceholder Directory</h2>
            <p>
              Live user profiles with contact, company, and location details displayed as
              responsive dashboard cards.
            </p>
          </div>

          {isLoading && <StatusMessage type="loading" message="Loading user cards..." />}

          {errorMessage && !isLoading && (
            <StatusMessage type="error" message={errorMessage} />
          )}

          {!isLoading && !errorMessage && (
            <div className="user-grid">
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Dashboard;
