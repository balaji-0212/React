import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ErrorMessage from '../components/ErrorMessage.jsx';
import Loading from '../components/Loading.jsx';
import { getUserById } from '../services/api.js';

function DetailRow({ label, value }) {
  return (
    <div className="detail-row">
      <dt>{label}</dt>
      <dd>{value || 'Not available'}</dd>
    </div>
  );
}

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      try {
        setIsLoading(true);
        setError('');
        const userData = await getUserById(id);

        if (isMounted) {
          setUser(userData);
        }
      } catch (requestError) {
        if (isMounted) {
          setUser(null);
          setError(requestError.message || 'Unable to load user details. Please try again later.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadUser();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (isLoading) {
    return <Loading message="Loading user details..." />;
  }

  if (error) {
    return (
      <section className="details-page">
        <ErrorMessage title="User details unavailable" message={error} />
        <Link className="secondary-button" to="/users">
          Back to Users
        </Link>
      </section>
    );
  }

  if (!user) {
    return (
      <section className="details-page">
        <ErrorMessage title="No user data" message="The selected user could not be displayed." />
        <Link className="secondary-button" to="/users">
          Back to Users
        </Link>
      </section>
    );
  }

  return (
    <section className="details-page">
      <div className="details-header">
        <div className="user-avatar large" aria-hidden="true">
          {user.picture ? (
            <img src={user.picture} alt="" />
          ) : (
            user.name
              .split(' ')
              .map((part) => part.charAt(0))
              .join('')
              .slice(0, 2)
          )}
        </div>
        <div>
          <p className="eyebrow">User #{user.id}</p>
          <h1>{user.name}</h1>
          <p>@{user.username}</p>
        </div>
      </div>

      <div className="details-grid">
        <section className="detail-section">
          <h2>Personal Information</h2>
          <dl>
            <DetailRow label="Name" value={user.name} />
            <DetailRow label="Username" value={user.username} />
            <DetailRow label="Email" value={user.email} />
            <DetailRow label="Phone Number" value={user.phone} />
            <DetailRow label="Website" value={user.website} />
          </dl>
        </section>

        <section className="detail-section">
          <h2>Company Information</h2>
          <dl>
            <DetailRow label="Company Name" value={user.company?.name} />
            <DetailRow label="Catch Phrase" value={user.company?.catchPhrase} />
            <DetailRow label="Business" value={user.company?.bs} />
          </dl>
        </section>

        <section className="detail-section">
          <h2>Address Information</h2>
          <dl>
            <DetailRow label="Street" value={user.address?.street} />
            <DetailRow label="Suite" value={user.address?.suite} />
            <DetailRow label="City" value={user.address?.city} />
            <DetailRow label="Zipcode" value={user.address?.zipcode} />
          </dl>
        </section>
      </div>

      <Link className="secondary-button" to="/users">
        Back to Users
      </Link>
    </section>
  );
}

export default UserDetails;
