type TransactionsPaginationProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
};

export default function TransactionsPagination({ page, setPage, totalPages }: TransactionsPaginationProps) {
  return (
    <div className="pagination">
      <div className="left">
        <p>
          Showing {1} to {totalPages} Propertys
        </p>
      </div>
      <div className="right">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
