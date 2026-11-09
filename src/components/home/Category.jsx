// src/components/home/Category.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  { id: 1, title: 'اتوماسیون صنعتی', image: '/assets/img/cat1.png', count: '۱۲۳۴' },
  { id: 2, title: 'برق صنعتی', image: '/assets/img/cat2.png', count: '۱۲۳۴' },
  { id: 3, title: 'سنسور', image: '/assets/img/cat3.png', count: '۱۲۳۴' },
  { id: 4, title: 'کنترل و نمایشگر', image: '/assets/img/cat4.png', count: '۱۲۳۴' },
  { id: 5, title: 'تابلوبرق و تجهیزات', image: '/assets/img/cat5.png', count: '۱۲۳۴' },
  { id: 6, title: 'کنترل و نمایشگر', image: '/assets/img/cat4.png', count: '۱۲۳۴' },
];

export default function Category() {
  return (
    <section className="mt-lg-5 pt-lg-3">
      <div className="container px-0 px-md-3">
        <div className="position-relative" id='category'>
          <Swiper
            className="category py-lg-5 py-4 px-lg-3 px-2"
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
              1200: { slidesPerView: 6 },
            }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <a>
                  <div className="bg-white h-158 px-4 rounded-20 shadow2 d-flex align-items-center justify-content-center">
                    <img alt="cat" src={cat.image} className="img-fluid" />
                  </div>
                  <p className="mb-0 fw-bold text-center catTitle mt-3">{cat.title}</p>
                  <div className="position-relative mt-1">
                    <img
                      alt="catBg"
                      src="/assets/img/catNumBg.png"
                      className="position-absolute end-0 start-0 bottom-0 top-0 img-fluid w-212 h-65 -z-1"
                    />
                    <p className="mb-0 d-flex align-items-center justify-content-center gap-1 text-white pt-4 catNum">
                      <span className="fw-bold">{cat.count}</span>
                      <span className="fw-300">محصول</span>
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* فلش‌های ناوبری — فقط در دسکتاپ */}
          <div className="swiper-button-next d-none d-lg-flex"></div>
          <div className="swiper-button-prev d-none d-lg-flex"></div>
        </div>
      </div>
    </section>
  );
}