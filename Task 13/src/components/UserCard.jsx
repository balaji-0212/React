import { BriefcaseBusiness, MapPin, Mail, UserRound } from 'lucide-react';

function UserCard({ user }) {
  return (
    <article className="user-card">
      <div className="card-topline">
        <span className="user-id">ID #{user.id}</span>
        <span className="role-chip">{user.role}</span>
      </div>

      <div className="user-heading">
        <span className="avatar" aria-hidden="true">
          <UserRound size={24} />
        </span>
        <div>
          <h2>{user.name}</h2>
          <a href={`mailto:${user.email}`}>
            <Mail size={16} aria-hidden="true" />
            {user.email}
          </a>
        </div>
      </div>

      <dl className="user-details">
        <div>
          <dt>
            <BriefcaseBusiness size={16} aria-hidden="true" />
            Role
          </dt>
          <dd>{user.role}</dd>
        </div>
        <div>
          <dt>
            <MapPin size={16} aria-hidden="true" />
            Location
          </dt>
          <dd>{user.location}</dd>
        </div>
      </dl>
    </article>
  );
}

export default UserCard;
