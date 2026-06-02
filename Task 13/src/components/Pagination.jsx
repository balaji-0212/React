import { ChevronLeft, ChevronRight } from 'lucide-react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <nav className="pagination" aria-label="Users pagination">
      <button
        className="pagination-control"
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        <ChevronLeft size={18} aria-hidden="true" />
        Previous
      </button>

      <div className="page-numbers" aria-label="Page numbers">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? 'page-button active-page' : 'page-button'}
            type="button"
            onClick={() => onPageChange(pageNumber)}
            aria-current={pageNumber === currentPage ? 'page' : undefined}
          >
            {pageNumber}
          </button>
        ))}
      </div>

      <button
        className="pagination-control"
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        Next
        <ChevronRight size={18} aria-hidden="true" />
      </button>
    </nav>
  );
}

export default Pagination;
