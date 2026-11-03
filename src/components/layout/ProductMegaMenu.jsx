// src/components/layout/ProductMegaMenu.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'اتوماسیون صنعتی',
    subCategories: ['منبع تغذیه', 'PLC', 'HMI', 'اینورتر', 'سنسور'],
  },
  {
    id: 2,
    name: 'برق صنعتی',
    subCategories: ['کلید اتوماتیک', 'کنتاکتور', 'بی‌متال', 'رله', 'شاسی'],
  },
  {
    id: 3,
    name: 'سنسور',
    subCategories: ['سنسور القایی', 'سنسور خازنی', 'سنسور نوری', 'سنسور فشار'],
  },
  {
    id: 4,
    name: 'کنترل و نمایشگر',
    subCategories: ['نمایشگر HMI', 'کنترلر دما', 'تایمر', 'شمارنده'],
  },
  {
    id: 5,
    name: 'تابلوبرق و تجهیزات',
    subCategories: ['تابلو برق', 'سینی کابل', 'ترمینال', 'شینه'],
  },
  {
    id: 6,
    name: 'سیم و کابل',
    subCategories: ['کابل افشان', 'کابل مفتول', 'سیم تک', 'کابل شبکه'],
  },
  {
    id: 7,
    name: 'نور و روشنایی',
    subCategories: ['لامپ LED', 'پروژکتور', 'نوار LED', 'چراغ صنعتی'],
  },
  {
    id: 8,
    name: 'برق خانگی',
    subCategories: ['کلید و پریز', 'روشنایی', 'آنتن', 'کابل'],
  },
  {
    id: 9,
    name: 'ابزار و اندازه‌گیری',
    subCategories: ['مولتی‌متر', 'اسیلوسکوپ', 'کلمپ‌متر', 'تستر'],
  },
];

export default function ProductMegaMenu() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="position-absolute bg-white rounded-18 shadow10 p-3 mt-2 start-0 end-0" style={{ minWidth: 700 }}>
      <div className="row g-0">
        {/* ستون دسته‌بندی‌ها */}
        <div className="col-4 border-end">
          <ul className="list-unstyled mb-0 p-2">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  onMouseEnter={() => setActiveCategory(cat)}
                  className={`d-flex align-items-center justify-content-between w-100 border-0 bg-transparent rounded-8 py-2 px-3 fs-13 ${
                    activeCategory.id === cat.id ? 'bg-main3 fw-bold text-main' : 'text-gray'
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
            {activeCategory.subCategories.map((sub) => (
              <div key={sub} className="col-6">
                <Link
                  to={`/products?category=${encodeURIComponent(sub)}`}
                  className="d-block rounded-8 p-2 fs-13 text-dark text-decoration-none hover-bg-gray"
                >
                  {sub}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}