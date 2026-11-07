// src/components/layout/MobileMenu.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

// آیتم‌های ساده منو (غیر از محصولات)
const simpleLinks = [
  { id: 1, label: 'صفحه اصلی', to: '/' },
  { id: 3, label: 'خدمات ما', to: '/services' },
  { id: 4, label: 'پرسش و پاسخ', to: '/faq' },
  { id: 5, label: 'تماس با ما', to: '/contact' },
  { id: 6, label: 'درباره ما', to: '/about' },
  { id: 7, label: 'بلاگ', to: '/blog' },
];

function ChevronIcon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
        transition: 'transform 0.3s',
        flexShrink: 0,
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function MobileMenu({ isOpen, onClose }) {
  const [openProducts, setOpenProducts] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState(null);

  // قفل اسکرول بدن
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // بستن با Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // ریست stateها هنگام بسته شدن
  useEffect(() => {
    if (!isOpen) {
      setOpenProducts(false);
      setOpenCategoryId(null);
    }
  }, [isOpen]);

  const toggleCategory = (id) => {
    setOpenCategoryId((prev) => (prev === id ? null : id));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 9998,
          animation: 'fadeIn 0.2s ease-out',
        }}
      />

      {/* Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '85%',
          maxWidth: 360,
          backgroundColor: '#f9f9f9',
          zIndex: 9999,
          overflowY: 'auto',
          animation: 'slideInRight 0.3s ease-out',
        }}
      >
        {/* هدر */}
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom bg-white">
          <p className="font-bold fs-16 mb-0">منو</p>
          <button
            onClick={onClose}
            className="border-0 bg-transparent p-0"
            aria-label="بستن منو"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="#1E2D48" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <ul className="list-unstyled mb-0 p-0">
          {/* صفحه اصلی */}
          <li className="border-bottom bg-white">
            <Link
              to="/"
              onClick={onClose}
              className="d-block font-bold text-dark py-3 px-3 text-decoration-none"
            >
              صفحه اصلی
            </Link>
          </li>

          {/* محصولات (آکاردئون) */}
          <li className="border-bottom bg-white">
            <button
              type="button"
              onClick={() => setOpenProducts((p) => !p)}
              className="d-flex align-items-center justify-content-between w-100 border-0 bg-transparent py-3 px-3"
            >
              <span className="font-bold text-dark">محصولات</span>
              <ChevronIcon isOpen={openProducts} />
            </button>

            <div
              style={{
                maxHeight: openProducts ? 3000 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}
            >
              <ul className="list-unstyled mb-0 pe-0">
                {categories.map((cat) => {
                  const isCatOpen = openCategoryId === cat.id;
                  return (
                    <li key={cat.id} className="border-top">
                      <button
                        type="button"
                        onClick={() => toggleCategory(cat.id)}
                        className="d-flex align-items-center justify-content-between w-100 border-0 bg-transparent py-3 px-3"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                            <circle cx="7.5" cy="8" r="5.5" fill="transparent" stroke="#27817A" strokeWidth="4" />
                          </svg>
                          <p className="mb-0 fs-14">{cat.name}</p>
                        </div>
                        <ChevronIcon isOpen={isCatOpen} />
                      </button>

                      <div
                        style={{
                          maxHeight: isCatOpen ? 1000 : 0,
                          overflow: 'hidden',
                          transition: 'max-height 0.4s ease',
                        }}
                      >
                        <ul className="list-unstyled position-relative ps-4 pe-3 pb-2 border-dash-r-2 me-3">
                          {cat.subCategories.map((sub, idx) => (
                            <li key={`${cat.id}-${idx}`} className="border-dash-r-2">
                              <div className="d-flex align-items-center position-relative -right-8 justify-content-between py-2">
                                <Link
                                  to={`/products?category=${encodeURIComponent(sub.category)}`}
                                  onClick={onClose}
                                  className="d-flex align-items-center gap-2 text-dark w-100 text-decoration-none"
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                    <circle cx="7.5" cy="8.35718" r="5.5" fill="transparent" stroke="#D5D5D5" strokeWidth="4" />
                                  </svg>
                                  <p className="mb-0 fs-12">{sub.label}</p>
                                </Link>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}

                {/* لینک مشاهده همه محصولات */}
                <li className="border-top">
                  <Link
                    to="/products"
                    onClick={onClose}
                    className="d-block text-center py-3 px-3 fs-13 text-main fw-bold text-decoration-none"
                  >
                    مشاهده همه محصولات
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* بقیه لینک‌ها */}
          {simpleLinks.slice(1).map((link) => (
            <li key={link.id} className="border-bottom bg-white">
              <Link
                to={link.to}
                onClick={onClose}
                className="d-block font-bold text-dark py-3 px-3 text-decoration-none"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* فوتر: حساب کاربری */}
        <div className="p-3 mt-2">
          <Link
            to="/profile"
            onClick={onClose}
            className="d-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 text-decoration-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="white" />
              <path d="M12 14C6.99 14 3 15.79 3 19.5V22H21V19.5C21 15.79 17.01 14 12 14Z" fill="white" />
            </svg>
            <p className="mb-0 fw-bold text-white fs-14">حساب کاربری</p>
          </Link>
        </div>

        <style>{`
          @keyframes slideInRight {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    </>
  );
}