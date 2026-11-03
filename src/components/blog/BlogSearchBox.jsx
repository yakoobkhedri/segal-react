// src/components/blog/BlogSearchBox.jsx
export default function BlogSearchBox({ search, onSearchChange, sort, onSortChange }) {
  return (
    <div className="bg-white rounded-21 shadow10 p-3 mb-4">
      <div className="row g-2">
        {/* جستجو */}
        <div className="col-md-8">
          <div className="rounded-14 h-52 d-flex align-items-center fs-14 p-3 bg-gray5">
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="جستجو در بین مطالب وبلاگ ..."
              className="w-100 flex-grow-1 bg-transparent border-0 outline-none"
            />
            <div className="rounded-9 d-flex align-items-center justify-content-center bg-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.57987 0C10.2079 0 13.1591 2.95111 13.1591 6.57919C13.1591 8.2909 12.5022 9.85208 11.4272 11.0238L13.5424 13.1345C13.7404 13.3325 13.741 13.6527 13.5431 13.8507C13.4444 13.9507 13.314 14 13.1843 14C13.0553 14 12.9256 13.9507 12.8262 13.852L10.6855 11.7173C9.5594 12.6191 8.13155 13.1591 6.57987 13.1591C2.95179 13.1591 0 10.2073 0 6.57919C0 2.95111 2.95179 0 6.57987 0Z"
                  fill="#0E1935"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* مرتب‌سازی */}
        <div className="col-md-4">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="fs-14 text-black2 bg-gray5 h-52 border-0 rounded-14 w-100 px-3"
          >
            <option value="newest">جدیدترین</option>
            <option value="oldest">قدیمی‌ترین</option>
            <option value="popular">محبوب‌ترین</option>
          </select>
        </div>
      </div>
    </div>
  );
}