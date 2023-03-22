type TransactionsPaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  rowperpage: number;
};

export default function TransactionsPagination({ page, setPage, totalPages, rowperpage }: TransactionsPaginationProps) {
  return (
    <div className="pagination">
      <div className="left">
        <p>
          Showing {1} to {rowperpage} Propertys
        </p>
      </div>
      <div className="right">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 1.5L1 6.5L6 11.5"
              stroke="#6F767E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="pages">
          {Array.from({ length: totalPages }, (_, i) => (
            <button key={i} onClick={() => setPage(i + 1)} className={page === i + 1 ? 'active' : ''}>
              {i + 1}
            </button>
          ))}
        </div>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 11.5L6 6.5L1 1.5"
              stroke="#6F767E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
