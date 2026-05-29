import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {
  const navigate = useNavigate();

  const openUserDetails = () => {
    navigate(`/users/${user.id}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openUserDetails();
    }
  };

  return (
    <article
      className="user-card"
      role="button"
      tabIndex="0"
      onClick={openUserDetails}
      onKeyDown={handleKeyDown}
      aria-label={`View details for ${user.name}`}
    >
      <div className="user-avatar" aria-hidden="true">
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

      <div className="user-card-content">
        <h2>{user.name}</h2>
        <p className="username">@{user.username}</p>
        <p className="email">{user.email}</p>
      </div>
    </article>
  );
}

export default UserCard;
