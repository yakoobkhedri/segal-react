// src/components/blog/BlogPagination.jsx
export default function BlogPagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <div className="bg-white rounded-22 shadow8 h-68 mx-2 mt-4 overflow-hidden">
      <ul className="d-flex align-items-center justify-content-between mb-0 gap-sm-4 w-100 h-100 gap-3 fs-15 pagination pe-0 list-unstyled px-3">
        {/* قبلی */}
        <li className="h-100">
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="d-flex align-items-center gap-2 px-4 h-100 border-0 bg-transparent"
            style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path
                d="M8.408 7.80005L5.29614 4.06672C5.07776 3.80005 4.7502 3.80005 4.53182 4.06672C4.31344 4.33338 4.31344 4.73338 4.53182 5.00005L7.20693 8.33338L4.53182 11.6667C4.31344 11.9334 4.31344 12.3334 4.53182 12.6C4.64101 12.7334 4.7502 12.8 4.91398 12.8C5.07776 12.8 5.18695 12.7334 5.29614 12.6L8.408 8.86672C8.62637 8.53338 8.62637 8.13338 8.408 7.80005Z"
                fill="#1E2D48"
              />
            </svg>
            <p className="mb-0 text-gray fs-15">قبل</p>
          </button>
        </li>

        {/* شماره‌ها */}
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`border-0 bg-transparent fs-15 ${
                currentPage === page ? 'text-main fw-bold' : 'text-gray'
              }`}
            >
              {page}
            </button>
          </li>
        ))}

        {/* بعدی */}
        <li className="h-100">
          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="d-flex align-items-center gap-2 px-4 h-100 border-0 bg-transparent"
            style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
          >
            <p className="mb-0 text-second fs-15">بعد</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path
                d="M4.77316 8.19995L7.88502 11.9333C8.10339 12.2 8.43096 12.2 8.64933 11.9333C8.86771 11.6666 8.86771 11.2666 8.64933 11L5.97423 7.66662L8.64933 4.33328C8.86771 4.06662 8.86771 3.66662 8.64933 3.39995C8.54015 3.26662 8.43096 3.19995 8.26717 3.19995C8.10339 3.19995 7.9942 3.26662 7.88502 3.39995L4.77316 7.13328C4.55478 7.46662 4.55478 7.86662 4.77316 8.19995Z"
                fill="url(#page-grad)"
              />
              <defs>
                <linearGradient id="page-grad" x1="4.60937" y1="11.0837" x2="9.77231" y2="10.3955" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5B6CCC" />
                  <stop offset="1" stopColor="#4834AC" />
                </linearGradient>
              </defs>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}