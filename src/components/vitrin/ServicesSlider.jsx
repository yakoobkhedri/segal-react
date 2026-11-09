// src/components/vitrin/ServicesSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const services = [
  {
    id: 1,
    text: 'توزیع کلیه ملزومات برق صنعتی، روشنایی و انواع کابل و سینی کابل',
    image: '/assets/img/service4.png',
    imagePos: 'start-0',
    isGradient: true,
  },
  {
    id: 2,
    text: 'طراحی و ساخت انواع تابلوهای برق (MV-LV-HV) و بانک خازن',
    image: '/assets/img/service1.png',
    imagePos: 'end-0',
    isGradient: false,
  },
  {
    id: 3,
    text: 'مجری کلیه پروژه های برق و اتوماسیون (PLC) با سابقه درخشان',
    image: '/assets/img/service4.png',
    imagePos: 'start-0',
    isGradient: true,
  },
  {
    id: 4,
    text: 'عاملیت فروش اینورتر AAGER با بهترین کیفیت',
    image: '/assets/img/service3.png',
    imagePos: 'start-0',
    isGradient: false,
  },
];

function ServiceBullet({ isGradient }) {
  if (!isGradient) {
    return (
      <svg className="flex-shrink-0 mt-2" xmlns="http://www.w3.org/2000/svg" width="21" height="10" viewBox="0 0 21 10" fill="none">
        <rect y="0.5" width="21" height="9" rx="4.5" fill="#27817A" />
      </svg>
    );
  }
  return (
    <svg className="flex-shrink-0 mt-2" xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="none">
      <rect width="21" height="9" rx="4.5" fill="url(#svc-grad)" />
      <defs>
        <linearGradient id="svc-grad" x1="0" y1="7.94" x2="18.27" y2="-4.13" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5B6CCC" />
          <stop offset="1" stopColor="#4834AC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ServicesSlider() {
  return (
    <section className="mt-5 pt-4" id="services">
      <div className="container">
        <Swiper
          className="px-3 py-5"
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="overflow-hidden rounded-25 bg-white position-relative shadow10">
                <img
                  alt="shape"
                  src={service.image}
                  className={`img-fluid position-absolute w-232 top-0 ${service.imagePos} z-0`}
                />
                <div className="p-4">
                  <div className="d-flex gap-2 position-relative z-10 mt-235" style={{ height: 90 }}>
                    <ServiceBullet isGradient={service.isGradient} />
                    <p className="font-bold mb-0 fs-20">{service.text}</p>
                  </div>
                  <Link
                    to="/products"
                    className="d-inline-flex align-items-center justify-content-center w-126 h-45 mt-5 rounded-14 gap-3 shadow8 bg-white py-2 px-3 text-decoration-none"
                  >
                    <p className="mb-0 fs-14 text-dark">بیشتر بدانید</p>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}