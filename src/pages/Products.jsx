// src/pages/Products.jsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';
import ProductNumbers from '../components/product/ProductNumbers';
import { useSearch } from '../context/SearchContext';

export default function Products() {
  const [searchParams] = useSearchParams();
  const { searchQuery, setSearchQuery } = useSearch();
  const [localSearch, setLocalSearch] = useState('');

  // همگام‌سازی با query string
  useEffect(() => {
    const queryFromUrl = searchParams.get('search') || '';
    if (queryFromUrl) {
      setLocalSearch(queryFromUrl);
      setSearchQuery(queryFromUrl);
    } else {
      setLocalSearch(searchQuery);
    }
  }, [searchParams]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    setSearchQuery(value);
  };

  // فیلتر محصولات
  const filtered = products.filter((p) => {
    if (!localSearch.trim()) return true;
    const search = localSearch.toLowerCase();
    return (
      p.title.toLowerCase().includes(search) ||
      p.brand?.toLowerCase().includes(search) ||
      p.category?.toLowerCase().includes(search)
    );
  });

  return (
    <main className="mt-4 position-relative">
      <section className="container pt-md-3">
        <ProductNumbers />
      </section>

      <section className="container mt-4">
        <div className="row g-4">
          {/* فیلتر */}
          <div className="col-lg-3">
            <form className="rounded-21 shadow10 p-3 bg-white">
              <div className="rounded-21 bg-gradient-main h-76 d-flex align-items-center justify-content-center gap-3 fs-15 fw-bold text-white mb-3">
                <p className="mb-0">فیلتر نتایج جستجو</p>
              </div>

              <div className="rounded-14 h-57 d-flex align-items-center fs-14 p-3 bg-gray5 mb-3">
                <input
                  value={localSearch}
                  onChange={handleSearchChange}
                  placeholder="جستجو در عناوین ..."
                  className="w-100 flex-grow-1 bg-transparent border-0 outline-none"
                />
              </div>

              {['قیمت', 'رنگ', 'برند', 'امتیاز', 'نوع'].map((filterName) => (
                <div key={filterName} className="fs-15">
                  <div className="d-flex align-items-center justify-content-between cursor-pointer py-3 border-bottom border-2">
                    <p className="mb-0">{filterName}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684095 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684094 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z"
                        fill="#0F172A"
                      />
                    </svg>
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="bg-gradient-main text-white rounded-21 border-0 w-100 p-3 font-bold mt-4"
              >
                جستجو
              </button>
            </form>
          </div>

          {/* گرید محصولات */}
          <div className="col-lg-9">
            {/* نمایش عنوان جستجو */}
            {localSearch.trim() && (
              <div className="d-flex align-items-center justify-content-between mb-3 px-2 position-relative">
                <p className="mb-0 fs-14">
                  نتایج برای: <span className="font-bold text-main">"{localSearch}"</span>
                  <span className="text-gray"> ({filtered.length} محصول)</span>
                </p>
                <button
                  onClick={() => {
                    setLocalSearch('');
                    setSearchQuery('');
                  }}
                  className="fs-12 text-danger border-0 bg-transparent p-0 fw-bold"
                >
                  پاک کردن
                </button>
              </div>
            )}

            {filtered.length > 0 ? (
              <div className="row g-4">
                {filtered.map((product) => (
                  <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white shadow8 rounded-21 text-center py-5 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mb-3"
                >
                  <circle cx="11" cy="11" r="8" stroke="#27817A" strokeWidth="2" opacity="0.5" />
                  <path d="M21 21L16.65 16.65" stroke="#27817A" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className="fs-18 font-bold mb-2">نتیجه‌ای یافت نشد</p>
                <p className="text-gray mb-3">
                  برای "{localSearch}" محصولی پیدا نکردیم
                </p>
                <button
                  onClick={() => {
                    setLocalSearch('');
                    setSearchQuery('');
                  }}
                  className="bg-gradient-main text-white rounded-pill border-0 px-4 py-2 fs-14"
                >
                  نمایش همه محصولات
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}