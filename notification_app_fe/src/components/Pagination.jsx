function Pagination({
  page,
  setPage,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        marginTop: "24px",
        alignItems: "center",
      }}
    >
      <button
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
        style={{
          padding: "8px 14px",
          cursor: "pointer",
        }}
      >
        Previous
      </button>

      <span>
        Page {page}
      </span>

      <button
        onClick={() => {
          setPage(page + 1);
        }}
        style={{
          padding: "8px 14px",
          cursor: "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;