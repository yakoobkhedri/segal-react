// src/pages/SingleProduct.jsx
import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ProductDetails from '../components/product/ProductDetails';
import ProductTabs from '../components/product/ProductTabs';
import RelatedProducts from '../components/product/RelatedProducts';
import Shoar from '../components/home/Shoar';
import SEO from '../components/SEO';

export default function SingleProduct() {
  const { id } = useParams();
  const { products, loading } = useProducts();

  // ✅ همه‌ی returnها داخل تابع کامپوننت هستند
  if (loading) {
    return (
      <main className="mt-4">
        <div className="container text-center py-5">
          <div className="spinner-border text-main" style={{ width: 50, height: 50 }}></div>
          <p className="mt-3 text-gray">در حال بارگذاری...</p>
        </div>
      </main>
    );
  }

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <SEO title="محصول یافت نشد | سگال" />
        <main className="mt-4 position-relative">
          <div className="container py-5 text-center">
            <h2 className="fs-24 font-bold mb-3">محصول یافت نشد</h2>
            <Link
              to="/products"
              className="bg-gradient-main text-white rounded-14 py-3 px-4 text-decoration-none d-inline-block"
            >
              بازگشت به محصولات
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${product.title} | سگال`}
        description={product.shortDesc}
        image={product.image}
      />
      <main className="mt-5 position-relative">
        <section id="productDetails">
          <div className="container">
            {/* Breadcrumb */}
            <div className="d-flex align-items-center gap-2 fs-13 text-gray mb-3 flex-wrap">
              <Link to="/" className="text-gray text-decoration-none">خانه</Link>
              <span>/</span>
              <Link to="/products" className="text-gray text-decoration-none">محصولات</Link>
              <span>/</span>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="text-gray text-decoration-none"
              >
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-dark">{product.title}</span>
            </div>

            {/* جزئیات */}
            <ProductDetails product={product} />

            {/* تب‌ها */}
            <ProductTabs product={product} />

            {/* محصولات مرتبط */}
            <RelatedProducts currentProduct={product} />
          </div>
        </section>

        <Shoar />

        {/* موج */}
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