import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../components/Pagination.jsx';
import UserCard from '../components/UserCard.jsx';
import users from '../data/users.js';

const recordsPerPage = 5;

function getValidPage(rawPage, totalPages) {
  const page = Number(rawPage) || 1;

  if (!Number.isInteger(page) || page < 1) {
    return 1;
  }

  if (page > totalPages) {
    return totalPages;
  }

  return page;
}

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(users.length / recordsPerPage));
  const page = getValidPage(searchParams.get('page'), totalPages);

  useEffect(() => {
    if (searchParams.get('page') !== String(page)) {
      setSearchParams({ page }, { replace: true });
    }
  }, [page, searchParams, setSearchParams]);

  const paginatedUsers = useMemo(() => {
    const startIndex = (page - 1) * recordsPerPage;

    return users.slice(startIndex, startIndex + recordsPerPage);
  }, [page]);

  function handlePageChange(nextPage) {
    setSearchParams({ page: nextPage });
  }

  return (
    <main className="page-main users-page">
      <section className="section-heading">
        <span className="eyebrow">Paginated Users</span>
        <h1>User Directory</h1>
        <p>
          Showing {paginatedUsers.length} of {users.length} records on page {page} of{' '}
          {totalPages}.
        </p>
      </section>

      {paginatedUsers.length > 0 ? (
        <section className="users-grid" aria-label="User cards">
          {paginatedUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h2>No users found</h2>
          <p>There are no records available to display.</p>
        </section>
      )}

      {users.length > 0 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </main>
  );
}

export default Users;
