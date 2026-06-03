import { ExternalLink } from 'lucide-react';

function UserTable({ users }) {
  if (users.length === 0) {
    return <p className="empty-state">No users available.</p>;
  }

  return (
    <div className="table-scroll">
      <table className="user-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
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
