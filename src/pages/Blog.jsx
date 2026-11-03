// src/pages/Blog.jsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogBanner from '../components/blog/BlogBanner';
import BlogCard from '../components/blog/BlogCard';
import BlogPagination from '../components/blog/BlogPagination';
import BlogSidebar from '../components/blog/BlogSidebar';
import BlogSearchBox from '../components/blog/BlogSearchBox';
import Shoar from '../components/home/Shoar';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';

const POSTS_PER_PAGE = 6;

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || 'همه');
  const [sort, setSort] = useState(searchParams.get('sort') || 'newest');
  const [currentPage, setCurrentPage] = useState(1);

  // همگام‌سازی با URL
  useEffect(() => {
    const params = {};
    if (search) params.search = search;
    if (category !== 'همه') params.category = category;
    if (sort !== 'newest') params.sort = sort;
    setSearchParams(params, { replace: true });
    setCurrentPage(1); // برگشت به صفحه ۱ با تغییر فیلتر
  }, [search, category, sort]);

  // فیلتر و مرتب‌سازی
  let filtered = blogPosts.filter((post) => {
    const matchesSearch = !search.trim() || post.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'همه' || post.category === category;
    return matchesSearch && matchesCategory;
  });

  // مرتب‌سازی
  if (sort === 'oldest') filtered = [...filtered].reverse();
  if (sort === 'popular') {
    filtered = [...filtered].sort((a, b) => {
      const aViews = parseInt(a.views.replace(/[^\d]/g, '')) || 0;
      const bViews = parseInt(b.views.replace(/[^\d]/g, '')) || 0;
      return bViews - aViews;
    });
  }

  // Pagination
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filtered.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      <SEO
        title="وبلاگ | سگال"
        description="آخرین مقالات و اخبار دنیای برق و اتوماسیون"
      />
      <main className="mt-4 position-relative">
        <BlogBanner />

        <section id="blog" className="-mt-126 position-relative">
          <div className="container">
            <div className="row g-4">
              {/* ستون محتوا */}
              <div className="col-lg-8">
                {/* سرچ‌باکس */}
                <BlogSearchBox
                  search={search}
                  onSearchChange={setSearch}
                  sort={sort}
                  onSortChange={setSort}
                />

                {/* نمایش تعداد */}
                {filtered.length === 0 ? (
                  <div className="bg-white rounded-21 shadow10 p-5 text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" className="mb-3">
                      <circle cx="11" cy="11" r="8" stroke="#ccc" strokeWidth="2" />
                      <path d="M21 21L16.65 16.65" stroke="#ccc" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <p className="fs-16 font-bold mb-2">مقاله‌ای یافت نشد</p>
                    <p className="fs-14 text-gray mb-4">
                      {search ? `برای "${search}" نتیجه‌ای پیدا نکردیم` : 'در این دسته‌بندی مقاله‌ای نیست'}
                    </p>
                    <button
                      onClick={() => {
                        setSearch('');
                        setCategory('همه');
                      }}
                      className="bg-gradient-main text-white rounded-14 border-0 py-2 px-4 fs-14 fw-bold"
                    >
                      نمایش همه مقالات
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="d-flex align-items-center justify-content-between mb-3 px-2">
                      <p className="fs-14 mb-0">
                        <span className="font-bold">{filtered.length}</span> مقاله یافت شد
                      </p>
                      {search && (
                        <button
                          onClick={() => setSearch('')}
                          className="fs-12 text-danger border-0 bg-transparent"
                        >
                          پاک کردن جستجو
                        </button>
                      )}
                    </div>

                    <div className="row mx-0 gx-4 gy-5 pb-4">
                      {paginatedPosts.map((post) => (
                        <div key={post.id} className="col-xl-6 col-lg-12">
                          <BlogCard post={post} />
                        </div>
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <BlogPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                      />
                    )}
                  </>
                )}
              </div>

              {/* سایدبار */}
              <div className="col-lg-4">
                <div className="position-sticky" style={{ top: 20 }}>
                  <BlogSidebar
                    activeCategory={category}
                    onCategoryChange={setCategory}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Shoar />

        <img
          alt="wave"
          src="/assets/img/footerWave.png"
          className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-md-block d-none"
        />
        <img
          alt="wave"
          src="/assets/img/footerBg2.png"
          className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-block d-md-none"
        />
      </main>
    </>
  );
}