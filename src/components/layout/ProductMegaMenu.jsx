// src/components/layout/ProductMegaMenu.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

export default function ProductMegaMenu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div
      className="position-absolute bg-white rounded-18 shadow10 p-3 mt-2 start-0 end-0 top-0 z-50"
      style={{ minWidth: 'min(700px, calc(100vw - 40px))' }}
      onMouseEnter={(e) => e.stopPropagation()}
    >
      <div className="row g-0">
        {/* ستون دسته‌بندی‌ها */}
        <div className="col-4 border-end">
          <ul className="list-unstyled mb-0 p-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveCategory(cat)}
                  onClick={() => setActiveCategory(cat)}
                  onFocus={() => setActiveCategory(cat)}
                  className={`d-flex align-items-center justify-content-between w-100 border-0 bg-transparent rounded-8 py-2 px-3 fs-13 ${
                    activeCategory.id === cat.id
                      ? 'bg-main3 fw-bold text-main'
                      : 'text-gray'
                  }`}
                >
                  <span>{cat.name}</span>
                  {activeCategory.id === cat.id && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="#27817A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* ستون زیردسته‌ها */}
        <div className="col-8 p-3">
          <h5 className="font-bold fs-14 mb-3">{activeCategory.name}</h5>
          <div className="row g-2">
            {activeCategory.subCategories.map((sub, idx) => (
              <div key={`${activeCategory.id}-${idx}`} className="col-6">
                <Link
                  to={`/products?category=${encodeURIComponent(sub.category)}`}
                  className="d-block rounded-8 p-2 fs-13 text-dark text-decoration-none hover-bg-gray"
                >
                  {sub.label}
                </Link>
              </div>
            ))}
          </div>

          {/* لینک مشاهده همه */}
          <div className="mt-3 pt-2 border-top">
            <Link
              to="/products"
              className="fs-13 text-main text-decoration-none fw-bold"
            >
              مشاهده همه محصولات →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}