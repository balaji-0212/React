import { ExternalLink } from 'lucide-react';

function UserTable({ users }) {
  if (users.length === 0) {
    return <p className="empty-state">No users available.</p>;
  }

  function getAddress(user) {
    return `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.state} ${user.address.zipcode}`;
  }

  return (
    <div className="table-scroll">
      <table className="user-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Company</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Role</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <span className="name-cell">{user.name}</span>
              </td>
              <td>
                <span className="company-cell">{user.company.name}</span>
                <span className="company-note">{user.company.catchPhrase}</span>
              </td>
              <td>{user.address.city}</td>
              <td>{getAddress(user)}</td>
              <td>{user.role}</td>
              <td>{user.username}</td>
              <td>
                <a href={`mailto:${user.email}`}>{user.email}</a>
              </td>
              <td>{user.phone}</td>
              <td>
                <a
                  className="website-link"
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.website}
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
