function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join('')
    .toUpperCase();
}

function UserCard({ user }) {
  const websiteUrl = `https://${user.website}`;

  return (
    <article className="user-card">
      <div className="user-card-header">
        <span className="user-avatar" aria-hidden="true">
          {getInitials(user.name)}
        </span>
        <div>
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
        </div>
      </div>

      <dl className="user-details">
        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </dd>
        </div>
        <div>
          <dt>Phone</dt>
          <dd>
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </dd>
        </div>
        <div>
          <dt>Website</dt>
          <dd>
            <a href={websiteUrl} target="_blank" rel="noreferrer">
              {user.website}
            </a>
          </dd>
        </div>
        <div>
          <dt>Company</dt>
          <dd>{user.company.name}</dd>
        </div>
        <div>
          <dt>City</dt>
          <dd>{user.address.city}</dd>
        </div>
      </dl>
    </article>
  );
}

export default UserCard;
