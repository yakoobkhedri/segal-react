// src/components/vitrin/SuggestedProducts.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';

export default function SuggestedProducts() {
  return (
    <section className="mt-5 pt-5 mb-5 overflow-hidden">
      <div className="container position-relative">
        <img
          alt="bg"
          src="/assets/img/suggestBg.png"
          className="position-absolute end-0 start-0 img-fluid w-100 h-100 d-none d-lg-block -z-1"
          style={{ objectFit: 'cover' }}
        />
        <div className="row">
          <div className="col-xl-9 col-lg-8 pt-3 pb-4">
            <div className="bg-white w-100 rounded-20 shadow10 p-3">
              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  576: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                }}
                navigation
              >
                {products.slice(0, 6).map((p) => (
                  <SwiperSlide key={p.id}>
                    <ProductCard product={p} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="col-xl-3 col-lg-2 d-flex align-items-center justify-content-center">
            <div className="text-center mt-lg-4">
              <h6 className="fs-24 font-bold text-lg-black text-white">پــیــشــنـهـاد</h6>
              <p className="fs-24 text-lg-black text-white">شـگـفت انگیز</p>
              <p className="fs-14 text-lg-black text-white-50 border-top border-bottom py-2">
                محصولات تخفیف دار
              </p>
              <Link
                to="/products"
                className="d-inline-flex align-items-center justify-content-center mx-auto w-126 h-45 mt-3 rounded-14 gap-3 shadow8 bg-white text-decoration-none"
              >
                <p className="mb-0 fs-14 text-dark">مشاهده همه</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}