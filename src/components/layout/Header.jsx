// src/components/layout/Header.jsx
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useCompare } from '../../context/CompareContext';
import { useSearch } from '../../context/SearchContext';
import { useWishlist } from '../../context/WishlistContext';
import { useToast } from '../../context/ToastContext';
import ProductMegaMenu from './ProductMegaMenu';
import SearchSuggestions from './SearchSuggestions';
import MobileMenu from './MobileMenu';

// ===== مودال جستجو موبایل =====
function MobileSearchModal({ isOpen, onClose, searchQuery, setSearchQuery, onSelect }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 9998,
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          zIndex: 9999,
          padding: 16,
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-2 flex-grow-1 py-2 px-3 rounded-pill bg-gray5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.58329 2.2915C8.62574 2.2915 7.67756 2.48011 6.79289 2.84655C5.90823 3.21299 5.1044 3.75009 4.42731 4.42718C3.75021 5.10428 3.21311 5.90811 2.84667 6.79277C2.48023 7.67744 2.29163 8.62562 2.29163 9.58317C2.29163 10.5407 2.48023 11.4889 2.84667 12.3736C3.21311 13.2582 3.75021 14.0621 4.42731 14.7392C5.1044 15.4163 5.90823 15.9534 6.79289 16.3198C7.67756 16.6862 8.62574 16.8748 9.58329 16.8748C11.5172 16.8748 13.3718 16.1066 14.7393 14.7392C16.1067 13.3717 16.875 11.517 16.875 9.58317C16.875 7.6493 16.1067 5.79464 14.7393 4.42718C13.3718 3.05973 11.5172 2.2915 9.58329 2.2915Z"
                fill="black"
              />
            </svg>
            <input
              ref={inputRef}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="جستجو ..."
              className="bg-transparent border-0 outline-none fs-14 flex-grow-1"
            />
          </div>
          <button
            onClick={onClose}
            className="border-0 bg-transparent fs-14 text-gray"
          >
            بستن
          </button>
        </div>
        {searchQuery && (
          <div className="mt-3">
            <SearchSuggestions query={searchQuery} onSelect={onSelect} />
          </div>
        )}
      </div>
    </>
  );
}

// ===== Badge =====
function Badge({ count }) {
  if (count <= 0) return null;
  return (
    <span
      className="position-absolute bg-danger text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
      style={{ top: -4, left: -4, minWidth: 18, height: 18, fontSize: 10 }}
    >
      {count}
    </span>
  );
}

export default function Header() {
  const { totalItems } = useCart();
  const { user, isLoggedIn, logout } = useAuth();
  const { compareList } = useCompare();
  const { wishlistCount } = useWishlist();
  const { searchQuery, setSearchQuery } = useSearch();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const searchRef = useRef(null);
  const megaMenuTimerRef = useRef(null);

  // بستن پیشنهادها با کلیک بیرون
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // پاک‌سازی timer مگا منو
  useEffect(() => {
    return () => {
      if (megaMenuTimerRef.current) clearTimeout(megaMenuTimerRef.current);
    };
  }, []);

  const handleMegaEnter = () => {
    if (megaMenuTimerRef.current) clearTimeout(megaMenuTimerRef.current);
    setShowMegaMenu(true);
  };

  const handleMegaLeave = () => {
    megaMenuTimerRef.current = setTimeout(() => setShowMegaMenu(false), 150);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
      setShowMobileSearch(false);
    }
  };

  const handleLogout = () => {
    logout();
    showToast('با موفقیت خارج شدید', 'success');
    navigate('/');
  };

  return (
    <>
      <header className="position-relative z-10">
        <div className="container">
          <div className="d-flex justify-content-between gap-2 gap-lg-3">
            <div className="flex-grow-1 w-100 position-relative">
              {/* ===== نوار بالا ===== */}
              <div className="py-3 px-3 py-lg-33 px-lg-28 rounded-b-26 d-flex align-items-center justify-content-between bg-header1">
                {/* همبرگر (موبایل) */}
                <button
                  onClick={() => setShowMobileMenu(true)}
                  className="d-xl-none border-0 bg-transparent p-0 flex-shrink-0"
                  aria-label="منو"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 18.005C22 18.555 21.554 19 21.005 19H12.995C12.7311 19 12.478 18.8952 12.2914 18.7086C12.1048 18.522 12 18.2689 12 18.005C12 17.7411 12.1048 17.488 12.2914 17.3014C12.478 17.1148 12.7311 17.01 12.995 17.01H21.005C21.555 17.01 22 17.455 22 18.005ZM22 12C22 12.55 21.554 12.995 21.005 12.995H2.995C2.73111 12.995 2.47803 12.8902 2.29143 12.7036C2.10483 12.517 2 12.2639 2 12C2 11.7361 2.10483 11.483 2.29143 11.2964C2.47803 11.1098 2.73111 11.005 2.995 11.005H21.005C21.555 11.005 22 11.451 22 12ZM21.005 6.99C21.2689 6.99 21.522 6.88517 21.7086 6.69857C21.8952 6.51197 22 6.25889 22 5.995C22 5.73111 21.8952 5.47803 21.7086 5.29143C21.522 5.10483 21.2689 5 21.005 5H8.995C8.86433 5 8.73495 5.02574 8.61423 5.07574C8.49351 5.12574 8.38382 5.19903 8.29143 5.29143C8.19903 5.38382 8.12574 5.49351 8.07574 5.61423C8.02574 5.73495 8 5.86433 8 5.995C8 6.12567 8.02574 6.25505 8.07574 6.37577C8.12574 6.49649 8.19903 6.60618 8.29143 6.69857C8.38382 6.79097 8.49351 6.86426 8.61423 6.91426C8.73495 6.96426 8.86433 6.99 8.995 6.99H21.005Z"
                      fill="#1E2D48"
                    />
                  </svg>
                </button>

                <Link to="/" className="flex-shrink-0">
                  <img alt="logo" src="/assets/img/logo.png" className="img-fluid" style={{ maxHeight: 40 }} />
                </Link>

                <div className="d-flex align-items-center gap-2 gap-lg-3">
                  {/* جستجو دسکتاپ */}
                  <div ref={searchRef} className="position-relative d-none d-xl-block">
                    <form
                      onSubmit={handleSearchSubmit}
                      className="d-flex align-items-center gap-2 py-13 px-19 rounded-pill bg-white w-452"
                    >
                      <button type="submit" className="border-0 bg-transparent p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <circle cx="11" cy="11" r="7" stroke="#1E2D48" strokeWidth="2" />
                          <path d="M20 20L16 16" stroke="#1E2D48" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <input
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                        className="outline-none border-0 fs-14 w-100"
                        placeholder="جستجو در بین محصولات ..."
                      />
                    </form>
                    {showSuggestions && (
                      <SearchSuggestions
                        query={searchQuery}
                        onSelect={() => setShowSuggestions(false)}
                      />
                    )}
                  </div>

                  {/* ✅ مقایسه + علاقه‌مندی (دسکتاپ) */}
                  <div className="d-none d-xl-flex align-items-center gap-2">
                    <Link
                      to="/compare"
                      className="bg-white rounded-circle d-flex align-items-center justify-content-center position-relative"
                      style={{ width: 44, height: 44 }}
                      title="مقایسه"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.5" d="M13 15.4C13 13.326 13 12.289 13.659 11.644C14.318 11 15.379 11 17.5 11C19.621 11 20.682 11 21.341 11.644C22 12.29 22 13.326 22 15.4V17.6C22 19.674 22 20.711 21.341 21.356C20.682 22 19.621 22 17.5 22C15.379 22 14.318 22 13.659 21.356C13 20.71 13 19.674 13 17.6V15.4Z" fill="#27817A" />
                        <path d="M2 8.6C2 10.674 2 11.711 2.659 12.356C3.318 13 4.379 13 6.5 13C8.621 13 9.682 13 10.341 12.356C11 11.71 11 10.674 11 8.6V6.4C11 4.326 11 3.289 10.341 2.644C9.682 2 8.621 2 6.5 2C4.379 2 3.318 2 2.659 2.644C2 3.29 2 4.326 2 6.4V8.6Z" fill="#27817A" />
                        <path opacity="0.5" d="M2 18.5C2 19.587 2 20.13 2.171 20.56C2.39372 21.1255 2.8318 21.5794 3.389 21.822C3.802 22 4.327 22 5.375 22H7.625C8.673 22 9.198 22 9.611 21.822C10.162 21.586 10.601 21.132 10.829 20.56C11 20.13 11 19.587 11 18.5C11 17.413 11 16.87 10.829 16.44C10.6063 15.8745 10.1682 15.4206 9.611 15.178C9.198 15 8.673 15 7.625 15H5.375C4.327 15 3.802 15 3.389 15.178C2.838 15.414 2.399 15.868 2.171 16.44C2 16.87 2 17.413 2 18.5Z" fill="#27817A" />
                      </svg>
                      <Badge count={compareList.length} />
                    </Link>

                    <Link
                      to="/profile/saved"
                      className="bg-white rounded-circle d-flex align-items-center justify-content-center position-relative"
                      style={{ width: 44, height: 44 }}
                      title="علاقه‌مندی"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ef4444">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <Badge count={wishlistCount} />
                    </Link>
                  </div>

                  {/* جستجو موبایل */}
                  <button
                    onClick={() => setShowMobileSearch(true)}
                    className="d-xl-none border-0 bg-transparent p-0 flex-shrink-0"
                    aria-label="جستجو"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="7" stroke="#1E2D48" strokeWidth="2" />
                      <path d="M20 20L16 16" stroke="#1E2D48" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>

                  {/* ✅ مقایسه + علاقه‌مندی + سبد (موبایل) */}
                  <div className="d-xl-none d-flex align-items-center gap-2">
                    <Link
                      to="/compare"
                      className="bg-white rounded-circle d-flex align-items-center justify-content-center position-relative"
                      style={{ width: 30, height: 30 }}
                      title="مقایسه"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.5" d="M13 15.4C13 13.326 13 12.289 13.659 11.644C14.318 11 15.379 11 17.5 11C19.621 11 20.682 11 21.341 11.644C22 12.29 22 13.326 22 15.4V17.6C22 19.674 22 20.711 21.341 21.356C20.682 22 19.621 22 17.5 22C15.379 22 14.318 22 13.659 21.356C13 20.71 13 19.674 13 17.6V15.4Z" fill="#27817A" />
                        <path d="M2 8.6C2 10.674 2 11.711 2.659 12.356C3.318 13 4.379 13 6.5 13C8.621 13 9.682 13 10.341 12.356C11 11.71 11 10.674 11 8.6V6.4C11 4.326 11 3.289 10.341 2.644C9.682 2 8.621 2 6.5 2C4.379 2 3.318 2 2.659 2.644C2 3.29 2 4.326 2 6.4V8.6Z" fill="#27817A" />
                      </svg>
                      <Badge count={compareList.length} />
                    </Link>

                    <Link
                      to="/profile/saved"
                      className="bg-white rounded-circle d-flex align-items-center justify-content-center position-relative"
                      style={{ width: 30, height: 30 }}
                      title="علاقه‌مندی"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#ef4444">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <Badge count={wishlistCount} />
                    </Link>

                    <Link
                      to="/cart"
                      className="bg-white rounded-circle d-flex align-items-center justify-content-center position-relative"
                      style={{ width: 30, height: 30 }}
                      title="سبد خرید"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 20 20" fill="none">
                        <path opacity="0.4" d="M5.61041 16.4941C6.40659 16.4941 7.05888 17.1464 7.05888 17.9522C7.05888 18.7484 6.40659 19.4007 5.61041 19.4007C4.80464 19.4007 4.15234 18.7484 4.15234 17.9522C4.15234 17.1464 4.80464 16.4941 5.61041 16.4941ZM16.402 16.4941C17.1982 16.4941 17.8505 17.1464 17.8505 17.9522C17.8505 18.7484 17.1982 19.4007 16.402 19.4007C15.5962 19.4007 14.9439 18.7484 14.9439 17.9522C14.9439 17.1464 15.5962 16.4941 16.402 16.4941Z" fill="#27817A" />
                        <path d="M1.24524 0.608089L3.53306 0.95342C3.85921 1.01193 4.09902 1.27957 4.1278 1.60571L4.31006 3.75444C4.33883 4.06236 4.58824 4.29258 4.8952 4.29258H17.8499C18.435 4.29258 18.8188 4.49402 19.2025 4.93528C19.5862 5.37653 19.6533 6.00964 19.567 6.58423L18.6557 12.8769C18.483 14.0865 17.447 14.9777 16.2288 14.9777H5.76332C4.48752 14.9777 3.43234 13.9993 3.32682 12.734L2.44431 2.27719L0.995839 2.02778C0.612138 1.96064 0.343547 1.58653 0.410695 1.20283C0.477843 0.809532 0.951951 0.550534 1.24524 0.608089ZM14.694 7.84086H12.0368C11.6339 7.84086 11.3174 8.15741 11.3174 8.56029C11.3174 8.95359 11.6339 9.27973 12.0368 9.27973H14.694C15.0969 9.27973 15.4134 8.95359 15.4134 8.56029C15.4134 8.15741 15.0969 7.84086 14.694 7.84086Z" fill="#27817A" />
                      </svg>
                      <Badge count={totalItems} />
                    </Link>
                  </div>

                  {/* ورود دسکتاپ */}
                  {isLoggedIn ? (
                    <div className="d-none d-xl-flex align-items-center bg-white py-13 px-19 rounded-pill gap-2">
                      <Link to="/profile" className="text-dark text-decoration-none fs-14 fw-medium">
                        {user?.name || 'کاربر'}
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="border-0 bg-transparent fs-12 text-danger p-0"
                      >
                        خروج
                      </button>
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="d-none d-xl-flex align-items-center bg-white py-13 px-19 rounded-pill gap-2 text-decoration-none"
                    >
                      <p className="mb-0 fs-14 fw-medium text-dark">ورود</p>
                    </Link>
                  )}

                  {/* ورود موبایل */}
                  <Link
                    to={isLoggedIn ? '/profile' : '/login'}
                    className="d-xl-none w-30 h-30 rounded-9 bg-white d-flex align-items-center justify-content-center text-decoration-none flex-shrink-0"
                  >
                    {isLoggedIn ? (
                      <span className="fs-16 fw-bold text-dark">{user?.name?.charAt(0) || '؟'}</span>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12.4 14.5391C15.8709 14.5391 18.8 15.1032 18.8 17.2792C18.8 19.456 15.8517 20 12.4 20C8.9299 20 6 19.436 6 17.26C6 15.0832 8.94831 14.5391 12.4 14.5391ZM12.4 4C14.7513 4 16.6352 5.88322 16.6352 8.23284C16.6352 10.5825 14.7513 12.4665 12.4 12.4665C10.0495 12.4665 8.16481 10.5825 8.16481 8.23284C8.16481 5.88322 10.0495 4 12.4 4Z" fill="#1E2D48" />
                      </svg>
                    )}
                  </Link>
                </div>
              </div>

              {/* ===== نوار پایین (منوی دسکتاپ) ===== */}
              <div className="rounded-b-26 d-none d-xl-block bg-gradient-main position-relative w-92 mx-auto">
                <img
                  alt="shape"
                  src="/assets/img/bg-header2.png"
                  className="position-absolute end-0 start-0 object-cover mx-auto z-0 px-5 top-0 bottom-0 h-100 w-100"
                />
                <ul className="d-flex align-items-center h-65 justify-content-center gap-5 list-unstyled p-0 mb-0 fs-13 z-10 position-relative">
                  <li className="h-100 d-flex align-items-center">
                    <Link to="/" className="text-white h-100 d-flex align-items-center">صفحه اصلی</Link>
                  </li>
                  <li
                    className="h-100 d-flex align-items-center position-relative"
                    onMouseEnter={handleMegaEnter}
                    onMouseLeave={handleMegaLeave}
                  >
                    <Link to="/products" className="text-white d-flex h-100 align-items-center gap-2">
                      <p className="mb-0">محصولات</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                        <path d="M8.22119 1.51422L4.44977 5.28564L0.678343 1.51422" stroke="white" strokeWidth="1.25714" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    {showMegaMenu && <ProductMegaMenu />}
                  </li>
                  <li className="h-100 d-flex align-items-center">
                    <Link to="/services" className="text-white h-100 d-flex align-items-center">خدمات ما</Link>
                  </li>
                  <li className="h-100 d-flex align-items-center">
                    <Link to="/about" className="text-white h-100 d-flex align-items-center">درباره ما</Link>
                  </li>
                  <li className="h-100 d-flex align-items-center">
                    <Link to="/contact" className="text-white h-100 d-flex align-items-center">تماس با ما</Link>
                  </li>
                  <li className="h-100 d-flex align-items-center">
                    <Link to="/blog" className="text-white h-100 d-flex align-items-center">بلاگ</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* ===== ستون کناری دسکتاپ (سبد + شماره) ===== */}
            <div className="flex-shrink-0 d-none d-xl-block">
              <div className="mt-3">
                <Link
                  to="/cart"
                  className="rounded-22 me-auto bg-second w-64 h-68 d-flex align-items-center justify-content-center position-relative"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path opacity="0.4" d="M5.61041 16.4941C6.40659 16.4941 7.05888 17.1464 7.05888 17.9522C7.05888 18.7484 6.40659 19.4007 5.61041 19.4007C4.80464 19.4007 4.15234 18.7484 4.15234 17.9522C4.15234 17.1464 4.80464 16.4941 5.61041 16.4941ZM16.402 16.4941C17.1982 16.4941 17.8505 17.1464 17.8505 17.9522C17.8505 18.7484 17.1982 19.4007 16.402 19.4007C15.5962 19.4007 14.9439 18.7484 14.9439 17.9522C14.9439 17.1464 15.5962 16.4941 16.402 16.4941Z" fill="#27817A" />
                    <path d="M1.24524 0.608089L3.53306 0.95342C3.85921 1.01193 4.09902 1.27957 4.1278 1.60571L4.31006 3.75444C4.33883 4.06236 4.58824 4.29258 4.8952 4.29258H17.8499C18.435 4.29258 18.8188 4.49402 19.2025 4.93528C19.5862 5.37653 19.6533 6.00964 19.567 6.58423L18.6557 12.8769C18.483 14.0865 17.447 14.9777 16.2288 14.9777H5.76332C4.48752 14.9777 3.43234 13.9993 3.32682 12.734L2.44431 2.27719L0.995839 2.02778C0.612138 1.96064 0.343547 1.58653 0.410695 1.20283C0.477843 0.809532 0.951951 0.550534 1.24524 0.608089ZM14.694 7.84086H12.0368C11.6339 7.84086 11.3174 8.15741 11.3174 8.56029C11.3174 8.95359 11.6339 9.27973 12.0368 9.27973H14.694C15.0969 9.27973 15.4134 8.95359 15.4134 8.56029C15.4134 8.15741 15.0969 7.84086 14.694 7.84086Z" fill="#27817A" />
                  </svg>
                  <Badge count={totalItems} />
                </Link>
                <p className="mb-0 fs-13 text-gray mt-3 text-start ms-1">سبد خرید</p>
              </div>

              <div className="mt-4">
                <a className="text-start text-decoration-none" href="tel:+989121234567">
                  <p className="text-dark fs-14 fw-bold mb-0">0912</p>
                  <p className="fs-14 fw-bold mb-0 text-main">۱۲۳۴۵۶۷۸۹</p>
                </a>
                <p className="fs-13 text-gray mb-0">پشتیبانی سریع</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
      <MobileSearchModal
        isOpen={showMobileSearch}
        onClose={() => setShowMobileSearch(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSelect={() => {
          setShowMobileSearch(false);
          setShowSuggestions(false);
        }}
      />
    </>
  );
}