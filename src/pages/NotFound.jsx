// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="mt-4 position-relative">
      <section className="py-5">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center text-center py-5 my-5">
            {/* عدد 404 بزرگ */}
            <h1
              className="font-bold mb-3"
              style={{
                fontSize: '150px',
                lineHeight: 1,
                background: 'linear-gradient(74.18deg, #5B6CCC 2.59%, #4834AC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              ۴۰۴
            </h1>

            {/* آیکون */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              className="mb-4"
            >
              <path
                opacity="0.5"
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="#27817A"
              />
              <path
                d="M12 7C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V8C11 7.44772 11.4477 7 12 7Z"
                fill="white"
              />
              <circle cx="12" cy="17" r="1.25" fill="white" />
            </svg>

            {/* متن */}
            <h2 className="font-bold fs-24 mb-3 text-dark">
              صفحه‌ای که دنبالش هستی پیدا نشد!
            </h2>
            <p className="fs-14 text-gray mb-5" style={{ maxWidth: 500 }}>
              احتمالاً آدرس رو اشتباه وارد کردی یا این صفحه حذف شده. می‌تونی برگردی به صفحه اصلی یا محصولات رو ببینی.
            </p>

            {/* دکمه‌ها */}
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
              <Link
                to="/"
                className="d-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 text-decoration-none shadow2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 10.5L12 3L21 10.5V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H15C14.4696 22 13.9609 21.7893 13.5858 21.4142C13.2107 21.0391 13 20.5304 13 20V16C13 15.4696 12.7893 14.9609 12.4142 14.5858C12.0391 14.2107 11.5304 14 11 14C10.4696 14 9.96086 14.2107 9.58579 14.5858C9.21071 14.9609 9 15.4696 9 16V20C9 20.5304 8.78929 21.0391 8.41421 21.4142C8.03914 21.7893 7.53043 22 7 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V10.5Z"
                    fill="white"
                  />
                </svg>
                <p className="mb-0 fw-bold text-white fs-14">بازگشت به خانه</p>
              </Link>

              <Link
                to="/products"
                className="d-flex align-items-center justify-content-center gap-2 rounded-14 bg-white border py-3 px-4 text-decoration-none shadow2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19C15 19.5304 15.2107 20.0391 15.5858 20.4142C15.9609 20.7893 16.4696 21 17 21C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19C19 18.4696 18.7893 17.9609 18.4142 17.5858C18.0391 17.2107 17.5304 17 17 17ZM9 19C9 19.5304 8.78929 20.0391 8.41421 20.4142C8.03914 20.7893 7.53043 21 7 21C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19C5 18.4696 5.21071 17.9609 5.58579 17.5858C5.96086 17.2107 6.46957 17 7 17C7.53043 17 8.03914 17.2107 8.41421 17.5858C8.78929 17.9609 9 18.4696 9 19Z"
                    stroke="#27817A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="mb-0 fw-bold text-main fs-14">مشاهده محصولات</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}