// src/pages/SavedProducts.jsx
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import ProfileSidebar from '../components/profile/ProfileSidebar';   // 👈 import کن
import ProductCard from '../components/product/ProductCard';

export default function SavedProducts() {
  const { wishlist, clearWishlist } = useWishlist();

  return (
    <main className="mt-4 pb-5 mb-5">
      <section className="mb-5 pb-5" id="profile">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-4">
            {/* 👈 سایدبار اصلی */}
            <ProfileSidebar />

            <div className="flex-grow-1">
              <div className="rounded-22 p-4 bg-white shadow6">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ef4444">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <h3 className="font-bold fs-18 mb-0">
                      محصولات نشان شده ({wishlist.length})
                    </h3>
                  </div>
                  {wishlist.length > 0 && (
                    <button
                      onClick={clearWishlist}
                      className="fs-12 text-danger border-0 bg-transparent"
                    >
                      پاک کردن همه
                    </button>
                  )}
                </div>

                {wishlist.length === 0 ? (
                  <div className="text-center py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" className="mb-4">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    <p className="fs-16 font-bold mb-2">هنوز محصولی نشان نکردی</p>
                    <p className="fs-14 text-gray mb-4">
                      محصولاتی که دوست داری رو با کلیک روی قلب ذخیره کن
                    </p>
                    <Link
                      to="/products"
                      className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 text-decoration-none"
                    >
                      <p className="mb-0 fw-bold text-white">مشاهده محصولات</p>
                    </Link>
                  </div>
                ) : (
                  <div className="row g-4">
                    {wishlist.map((product) => (
                      <div key={product.id} className="col-12 col-sm-6 col-lg-4">
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}