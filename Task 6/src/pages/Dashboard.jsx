import { useEffect, useState } from 'react';
import AboutSection from '../components/AboutSection.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import StatusMessage from '../components/StatusMessage.jsx';
import UserCard from '../components/UserCard.jsx';
import indianUserProfiles from '../data/indianUserProfiles.js';

const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

function makeIndianUserDirectory(apiUsers) {
  return apiUsers.map((apiUser, index) => {
    const profile = indianUserProfiles[index % indianUserProfiles.length];

    return {
      ...apiUser,
      ...profile,
      id: apiUser.id,
      company: {
        ...apiUser.company,
        ...profile.company
      },
      address: {
        ...apiUser.address,
        ...profile.address
      }
    };
  });
}

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
        setUsers(makeIndianUserDirectory(userData));
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
            <p className="eyebrow">Indian API users</p>
            <h2 id="users-title">India Professional Directory</h2>
            <p>
              Live API records presented with realistic Indian contact, company, and
              location details for a polished professional dashboard.
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
