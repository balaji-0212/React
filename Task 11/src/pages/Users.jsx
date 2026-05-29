import { useEffect, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage.jsx';
import Loading from '../components/Loading.jsx';
import UserCard from '../components/UserCard.jsx';
import { getUsers } from '../services/api.js';

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadUsers() {
      try {
        setIsLoading(true);
        setError('');
        const userData = await getUsers();

        if (isMounted) {
          setUsers(userData);
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError.message || 'Unable to load users. Please try again later.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return <Loading message="Loading users..." />;
  }

  if (error) {
    return <ErrorMessage title="Unable to load users" message={error} />;
  }

  if (users.length === 0) {
    return <ErrorMessage title="No users found" message="The API returned an empty user list." />;
  }

  return (
    <section className="users-page">
      <div className="page-heading">
        <p className="eyebrow">User Directory</p>
        <h1>Choose a User</h1>
        <p>Each card opens a dynamic route and passes the selected user ID through the URL.</p>
      </div>

      <div className="users-grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}

export default Users;
