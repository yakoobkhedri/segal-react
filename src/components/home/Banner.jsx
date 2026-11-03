// src/components/home/Banner.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Banner() {
  return (
    <section id="banner">
      <div className="container">
        <Swiper
          className="banner py-3"
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
        >
          {[1, 2, 3].map((i) => (
            <SwiperSlide key={i} className="position-relative">
              {/* shape */}
              <img
                alt="shape"
                src="/assets/img/shape2.png"
                className="img-fluid position-absolute end-0 top-0 z-0"
              />
              <a className="d-block h-100">
                <img
                  alt="slide"
                  src="/assets/img/slide1.png"
                  className="img-fluid w-100 h-100"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}