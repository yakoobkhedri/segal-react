// src/components/product/SpecialProducts.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';

export default function SpecialProducts() {
  return (
    <div className="mt-5 pt-2">
      <div className="rounded-19 bg-gray6 d-flex justify-content-between p-3 position-relative mt-5">
        <div className="mx-5 pe-3 -mt-4">
          <p className="mb-2"><span className="font-bold">محصولات</span> ویژه</p>
          <p className="fs-12 text-gray mb-0">آخرین محصولات منتشر</p>
        </div>
        <Link
          to="/products"
          className="bg-white shadow8 text-dark px-sm-3 px-2 rounded-14 d-flex align-items-center justify-content-center gap-3 fs-14 text-decoration-none"
        >
          <p className="mb-0">مشاهده همه</p>
        </Link>
      </div>

      <div className="bg-white rounded-20 shadow10 mt-4">
        <div className="py-4 px-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            navigation
          >
            {products.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard product={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}