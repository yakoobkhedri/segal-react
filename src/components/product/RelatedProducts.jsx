// src/components/product/RelatedProducts.jsx
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { products } from '../../data/products';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';

export default function RelatedProducts({ currentProduct }) {
  const related = products
    .filter((p) => p.id !== currentProduct.id && p.category === currentProduct.category)
    .slice(0, 6);

  // اگه کمتر از ۳ تا بود، از همه محصولات اضافه کن
  const finalRelated = related.length >= 3
    ? related
    : products.filter((p) => p.id !== currentProduct.id).slice(0, 6);

  return (
    <div className="mt-5">
      <div className="rounded-19 bg-gray6 d-flex justify-content-between p-3 mb-4">
        <div className="mx-3">
          <p className="mb-1">
            <span className="font-bold">محصولات</span> مرتبط
          </p>
          <p className="fs-12 text-gray mb-0">محصولات مشابه این محصول</p>
        </div>
        <Link
          to="/products"
          className="bg-white shadow8 text-dark px-3 rounded-14 d-flex align-items-center justify-content-center gap-2 fs-13 text-decoration-none"
        >
          <p className="mb-0">مشاهده همه</p>
        </Link>
      </div>

      <div className="bg-white rounded-20 bg-white overflow-hidden">
        <Swiper className='p-3'
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
          navigation
        >
          {finalRelated.map((p) => (
            <SwiperSlide key={p.id}>
              <ProductCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}