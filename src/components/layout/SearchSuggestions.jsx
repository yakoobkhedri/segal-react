// src/components/layout/SearchSuggestions.jsx
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

export default function SearchSuggestions({ query, onSelect }) {
  if (!query.trim()) return null;

  const suggestions = products
    .filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.brand?.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);

  if (suggestions.length === 0) {
    return (
      <div className="position-absolute bg-white rounded-14 shadow10 p-3 mt-2 start-0 end-0" style={{ zIndex: 100 }}>
        <p className="fs-13 text-gray mb-0 text-center py-2">نتیجه‌ای پیدا نشد</p>
      </div>
    );
  }

  return (
    <div className="position-absolute bg-white rounded-14 shadow10 mt-2 start-0 end-0" style={{ zIndex: 100, overflow: 'hidden' }}>
      {suggestions.map((product) => (
        <Link
          key={product.id}
          to={`/product/${product.id}`}
          onClick={onSelect}
          className="d-flex align-items-center gap-3 p-2 text-decoration-none border-bottom"
        >
          <img
            src={product.image}
            alt={product.title}
            style={{ width: 40, height: 40, objectFit: 'contain' }}
          />
          <div className="flex-grow-1">
            <p className="fs-13 mb-0 text-dark">{product.title}</p>
            <p className="fs-11 text-gray mb-0">{product.brand} • {product.category}</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#ccc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      ))}
    </div>
  );
}