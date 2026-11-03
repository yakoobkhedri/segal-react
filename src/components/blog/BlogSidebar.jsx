// src/components/blog/BlogSidebar.jsx
import { Link } from 'react-router-dom';
import { blogPosts, blogCategories } from '../../data/blogPosts';

export default function BlogSidebar({ activeCategory, onCategoryChange }) {
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <div className="d-flex flex-column gap-4">
      {/* دسته‌بندی‌ها */}
      <div className="bg-white rounded-21 shadow10 p-4">
        <h4 className="font-bold fs-16 mb-3">دسته‌بندی‌ها</h4>
        <ul className="list-unstyled mb-0">
          {blogCategories.map((cat) => {
            const count = cat === 'همه' ? blogPosts.length : blogPosts.filter((p) => p.category === cat).length;
            return (
              <li key={cat} className="mb-2">
                <button
                  onClick={() => onCategoryChange(cat)}
                  className={`d-flex align-items-center justify-content-between w-100 border-0 bg-transparent rounded-8 py-2 px-2 fs-13 ${
                    activeCategory === cat ? 'bg-main3 fw-bold text-main' : 'text-gray'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="fs-11">({count})</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* آخرین مقالات */}
      <div className="bg-white rounded-21 shadow10 p-4">
        <h4 className="font-bold fs-16 mb-3">آخرین مقالات</h4>
        <ul className="list-unstyled mb-0">
          {recentPosts.map((post) => (
            <li key={post.id} className="mb-3 pb-3 border-bottom">
              <Link to={`/blog/${post.id}`} className="d-flex gap-3 text-decoration-none">
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-8"
                  style={{ width: 60, height: 60, objectFit: 'cover' }}
                />
                <div className="flex-grow-1">
                  <p className="fs-13 text-dark mb-1" style={{ lineHeight: 1.6 }}>
                    {post.title}
                  </p>
                  <p className="fs-11 text-gray mb-0">{post.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* خبرنامه */}
      <div className="bg-gradient-main rounded-21 shadow10 p-4 text-white">
        <h4 className="font-bold fs-16 mb-2">عضویت در خبرنامه</h4>
        <p className="fs-12 mb-3" style={{ opacity: 0.8 }}>
          برای دریافت جدیدترین مقالات ایمیل خود را وارد کنید.
        </p>
        <input
          type="email"
          placeholder="ایمیل شما"
          className="w-100 rounded-12 border-0 p-2 fs-13 mb-2"
          dir="ltr"
        />
        <button className="w-100 bg-white text-main rounded-12 border-0 py-2 fs-13 fw-bold">
          عضویت
        </button>
      </div>
    </div>
  );
}