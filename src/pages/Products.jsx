// src/pages/Products.jsx
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { categoryNames } from '../data/categories';
import ProductCard from '../components/product/ProductCard';
import ProductNumbers from '../components/product/ProductNumbers';
import { useSearch } from '../context/SearchContext';

// آیکون فلش
function ChevronIcon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="6"
      viewBox="0 0 10 6"
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
        d="M0.230169 0.209376C0.528748 -0.0777189 1.00353 -0.0684095 1.29063 0.230169L5 4.16792L8.70938 0.230169C8.99647 -0.0684094 9.47125 -0.0777189 9.76983 0.209376C10.0684 0.496471 10.0777 0.971254 9.79063 1.26983L5.54063 5.76983C5.39922 5.91689 5.20401 6 5 6C4.79599 6 4.60078 5.91689 4.45938 5.76983L0.209376 1.26983C-0.0777189 0.971254 -0.0684095 0.496471 0.230169 0.209376Z"
        fill="#0F172A"
      />
    </svg>
  );
}

// کامپوننت آکاردئون
function FilterAccordion({ title, isOpen, onToggle, children }) {
  return (
    <div className="fs-15 border-bottom border-2">
      <button
        type="button"
        onClick={onToggle}
        className="d-flex align-items-center justify-content-between w-100 border-0 bg-transparent py-3 px-0"
      >
        <p className="mb-0 fw-bold">{title}</p>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        style={{
          maxHeight: isOpen ? 500 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <div className="pb-3">{children}</div>
      </div>
    </div>
  );
}

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchQuery, setSearchQuery } = useSearch();

  const [localSearch, setLocalSearch] = useState(searchParams.get('search') || '');
  const [localCategory, setLocalCategory] = useState(searchParams.get('category') || '');

  // فیلترهای اضافی
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [maxPrice, setMaxPrice] = useState('');
  const [minRating, setMinRating] = useState(0);

  // state آکاردئون‌ها (کدام باز است)
  const [openFilters, setOpenFilters] = useState({
    category: true,
    price: false,
    color: false,
    brand: false,
    rating: false,
  });

  // همگام‌سازی با URL
  useEffect(() => {
    const searchFromUrl = searchParams.get('search') || '';
    const categoryFromUrl = searchParams.get('category') || '';

    setLocalSearch(searchFromUrl || searchQuery);
    setLocalCategory(categoryFromUrl);

    if (searchFromUrl && searchFromUrl !== searchQuery) {
      setSearchQuery(searchFromUrl);
    }
  }, [searchParams]);

  // toggle آکاردئون
  const toggleFilter = (key) => {
    setOpenFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // تغییر search
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value);
    setSearchQuery(value);

    const newParams = new URLSearchParams(searchParams);
    if (value.trim()) {
      newParams.set('search', value.trim());
    } else {
      newParams.delete('search');
    }
    setSearchParams(newParams, { replace: true });
  };

  // تغییر دسته
  const handleCategoryChange = (cat) => {
    setLocalCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat) {
      newParams.set('category', cat);
    } else {
      newParams.delete('category');
    }
    setSearchParams(newParams, { replace: true });
  };

  // toggle برند
  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  // toggle رنگ
  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  // پاک کردن همه
  const clearFilters = () => {
    setLocalSearch('');
    setLocalCategory('');
    setSelectedBrands([]);
    setSelectedColors([]);
    setMaxPrice('');
    setMinRating(0);
    setSearchQuery('');
    setSearchParams({}, { replace: true });
  };

  // لیست برندها و رنگ‌های موجود
  const availableBrands = useMemo(
    () => [...new Set(products.map((p) => p.brand).filter(Boolean))],
    []
  );
  const availableColors = useMemo(
    () => [...new Set(products.map((p) => p.color).filter((c) => c && c !== '—'))],
    []
  );

  // فیلتر ترکیبی
  const filtered = useMemo(() => {
    return products.filter((p) => {
      // دسته
      const matchesCategory =
        !localCategory || p.category === localCategory || p.subCategory === localCategory;

      // جستجو
      const search = localSearch.trim().toLowerCase();
      const matchesSearch =
        !search ||
        p.title.toLowerCase().includes(search) ||
        p.brand?.toLowerCase().includes(search) ||
        p.category?.toLowerCase().includes(search);

      // برند
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand);

      // رنگ
      const matchesColor = selectedColors.length === 0 || selectedColors.includes(p.color);

      // قیمت
      const matchesPrice = !maxPrice || p.price <= Number(maxPrice);

      // امتیاز
      const matchesRating = !minRating || p.rating >= minRating;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesBrand &&
        matchesColor &&
        matchesPrice &&
        matchesRating
      );
    });
  }, [localSearch, localCategory, selectedBrands, selectedColors, maxPrice, minRating]);

  // آیا فیلتری فعال است؟
  const hasActiveFilter =
    localSearch.trim() ||
    localCategory ||
    selectedBrands.length > 0 ||
    selectedColors.length > 0 ||
    maxPrice ||
    minRating > 0;

  return (
    <main className="mt-4 position-relative">

      <section className="container mt-4">
        <div className="row g-4">
          {/* سایدبار فیلتر */}
          <div className="col-lg-3">
            <form
              className="rounded-21 shadow10 p-3 bg-white"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="rounded-21 bg-gradient-main h-76 d-flex align-items-center justify-content-center gap-3 fs-15 fw-bold text-white mb-3">
                <p className="mb-0">فیلتر نتایج جستجو</p>
              </div>

              {/* جستجو */}
              <div className="rounded-14 h-57 d-flex align-items-center fs-14 p-3 bg-gray5 mb-3">
                <input
                  value={localSearch}
                  onChange={handleSearchChange}
                  placeholder="جستجو در عناوین ..."
                  className="w-100 flex-grow-1 bg-transparent border-0 outline-none"
                />
              </div>

              {/* ✅ آکاردئون دسته‌بندی */}
              <FilterAccordion
                title="دسته‌بندی"
                isOpen={openFilters.category}
                onToggle={() => toggleFilter('category')}
              >
                <ul className="list-unstyled mb-0">
                  <li className="mb-1">
                    <button
                      type="button"
                      onClick={() => handleCategoryChange('')}
                      className={`w-100 text-start border-0 bg-transparent rounded-8 py-2 px-2 fs-13 ${
                        !localCategory ? 'bg-main3 fw-bold text-main' : 'text-gray'
                      }`}
                    >
                      همه دسته‌ها
                    </button>
                  </li>
                  {categoryNames.map((cat) => (
                    <li key={cat} className="mb-1">
                      <button
                        type="button"
                        onClick={() => handleCategoryChange(cat)}
                        className={`w-100 text-start border-0 bg-transparent rounded-8 py-2 px-2 fs-13 ${
                          localCategory === cat ? 'bg-main3 fw-bold text-main' : 'text-gray'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </FilterAccordion>

              {/* ✅ آکاردئون قیمت */}
              <FilterAccordion
                title="قیمت"
                isOpen={openFilters.price}
                onToggle={() => toggleFilter('price')}
              >
                <label className="fs-13 text-gray mb-2 d-block">
                  حداکثر قیمت (تومان)
                </label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="مثلاً ۵۰۰۰۰۰۰"
                  className="w-100 rounded-12 bg-gray5 border-0 outline-none p-2 fs-13"
                />
                <div className="d-flex justify-content-between fs-12 text-gray mt-2">
                  <span>۰</span>
                  <span>۱۵٬۰۰۰٬۰۰۰</span>
                </div>
              </FilterAccordion>

              {/* ✅ آکاردئون رنگ */}
              <FilterAccordion
                title="رنگ"
                isOpen={openFilters.color}
                onToggle={() => toggleFilter('color')}
              >
                <div className="d-flex flex-wrap gap-2">
                  {availableColors.map((color) => (
                    <label
                      key={color}
                      className={`d-flex align-items-center gap-2 px-2 py-1 rounded-8 cursor-pointer fs-13 border ${
                        selectedColors.includes(color) ? 'bg-main3 border-main text-main' : 'bg-white'
                      }`}
                      style={{ cursor: 'pointer' }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => toggleColor(color)}
                        className="m-0"
                      />
                      {color}
                    </label>
                  ))}
                </div>
              </FilterAccordion>

              {/* ✅ آکاردئون برند */}
              <FilterAccordion
                title="برند"
                isOpen={openFilters.brand}
                onToggle={() => toggleFilter('brand')}
              >
                <ul className="list-unstyled mb-0">
                  {availableBrands.map((brand) => (
                    <li key={brand} className="mb-1">
                      <label
                        className="d-flex align-items-center gap-2 cursor-pointer fs-13"
                        style={{ cursor: 'pointer' }}
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                        />
                        {brand}
                      </label>
                    </li>
                  ))}
                </ul>
              </FilterAccordion>

              {/* ✅ آکاردئون امتیاز */}
              <FilterAccordion
                title="امتیاز"
                isOpen={openFilters.rating}
                onToggle={() => toggleFilter('rating')}
              >
                <ul className="list-unstyled mb-0">
                  {[4, 3, 2, 1].map((r) => (
                    <li key={r} className="mb-1">
                      <label
                        className="d-flex align-items-center gap-2 cursor-pointer fs-13"
                        style={{ cursor: 'pointer' }}
                      >
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === r}
                          onChange={() => setMinRating(r)}
                        />
                        <span className="text-warning">★</span>
                        <span>{r} به بالا</span>
                      </label>
                    </li>
                  ))}
                  {minRating > 0 && (
                    <li className="mt-2">
                      <button
                        type="button"
                        onClick={() => setMinRating(0)}
                        className="fs-12 text-danger border-0 bg-transparent p-0"
                      >
                        حذف فیلتر امتیاز
                      </button>
                    </li>
                  )}
                </ul>
              </FilterAccordion>

              {/* دکمه پاک کردن */}
              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="w-100 mt-3 bg-white border text-danger rounded-14 py-2 fs-13 fw-bold"
                >
                  پاک کردن همه فیلترها
                </button>
              )}
            </form>
          </div>

          {/* گرید محصولات */}
          <div className="col-lg-9">
            {/* فیلترهای فعال */}
            {hasActiveFilter && (
              <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3 px-2">
                <div className="d-flex flex-wrap align-items-center gap-2 fs-13">
                  <span className="text-gray">فیلتر فعال:</span>
                  {localCategory && (
                    <span className="bg-main3 text-main rounded-pill py-1 px-2">
                      {localCategory}
                    </span>
                  )}
                  {localSearch.trim() && (
                    <span className="bg-main3 text-main rounded-pill py-1 px-2">
                      "{localSearch}"
                    </span>
                  )}
                  {selectedBrands.map((b) => (
                    <span key={b} className="bg-main3 text-main rounded-pill py-1 px-2">
                      {b}
                    </span>
                  ))}
                  {selectedColors.map((c) => (
                    <span key={c} className="bg-main3 text-main rounded-pill py-1 px-2">
                      {c}
                    </span>
                  ))}
                  {maxPrice && (
                    <span className="bg-main3 text-main rounded-pill py-1 px-2">
                      تا {Number(maxPrice).toLocaleString('fa-IR')} تومان
                    </span>
                  )}
                  {minRating > 0 && (
                    <span className="bg-main3 text-main rounded-pill py-1 px-2">
                      ★ {minRating}+
                    </span>
                  )}
                  <span className="text-gray">({filtered.length} محصول)</span>
                </div>
                <button
                  onClick={clearFilters}
                  className="fs-12 text-danger border-0 bg-transparent p-0 fw-bold"
                >
                  پاک کردن همه
                </button>
              </div>
            )}

            {filtered.length > 0 ? (
              <div className="row g-4">
                {filtered.map((product) => (
                  <div key={product.id} className="col-12 col-md-6 col-xl-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white shadow8 rounded-21 text-center py-5 px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" className="mb-3">
                  <circle cx="11" cy="11" r="8" stroke="#27817A" strokeWidth="2" opacity="0.5" />
                  <path d="M21 21L16.65 16.65" stroke="#27817A" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p className="fs-18 font-bold mb-2">نتیجه‌ای یافت نشد</p>
                <p className="text-gray mb-3">
                  با این فیلترها محصولی پیدا نکردیم.
                </p>
                <button
                  onClick={clearFilters}
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