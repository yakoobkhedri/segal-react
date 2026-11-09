// src/components/home/Services.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    text: 'طراحی و ساخت انواع تابلوهای برق (MV-LV-HV) و بانک خازن',
    shape: '/assets/img/service1.png',
    shapePos: 'end-0',
    shapeWidth: 'w-232',
    mobileShapeWidth: 'w-133',
    isGradient: false,
  },
  {
    id: 2,
    text: 'توزیع کلیه ملزومات برق صنعتی، روشنایی و انواع کابل و سینی کابل',
    shape: '/assets/img/service2.png',
    shapePos: 'start-0',
    shapeWidth: 'w-260',
    mobileShapeWidth: 'w-133',
    isGradient: true,
  },
  {
    id: 3,
    text: 'عاملیت فروش اینورتر AAGER با بهترین کیفیت',
    shape: '/assets/img/service3.png',
    shapePos: 'end-0',
    shapeWidth: 'w-232',
    mobileShapeWidth: 'w-133',
    isGradient: false,
  },
];

let gradientCounter = 0;

function ServiceBullet({ isGradient }) {
  if (!isGradient) {
    return (
      <svg
        className="flex-shrink-0 mt-2"
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="10"
        viewBox="0 0 21 10"
        fill="none"
      >
        <rect y="0.5" width="21" height="9" rx="4.5" fill="#27817A" />
      </svg>
    );
  }

  const gradientId = `gradient-bullet-${gradientCounter++}`;

  return (
    <svg
      className="flex-shrink-0 mt-2"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="10"
      viewBox="0 0 21 10"
      fill="none"
    >
      <rect y="0.5" width="21" height="9" rx="4.5" fill={`url(#${gradientId})`} />
      <defs>
        <linearGradient
          id={gradientId}
          x1="0"
          y1="8.44259"
          x2="18.2683"
          y2="-3.63266"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B6CCC" />
          <stop offset="1" stopColor="#4834AC" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Services() {
  return (
    <section className="mt-5 pt-3" id="services">
      <div className="container">
        <div className="rounded-25 overflow-hidden bg-white h-486 p-3 px-1 px-lg-3 shadow2 row position-relative">
          {/* شکل‌های پس‌زمینه */}
          <img
            alt="shape"
            src="/assets/img/shapeService.png"
            className="img-fluid px-0 w-285 top-0 start-0 position-absolute -z-0 servicesShape"
          />
          <img
            alt="shape"
            src="/assets/img/shapeService2.png"
            className="img-fluid px-0 w-316 top-0 start-0 position-absolute -z-0 servicesShape"
          />
          <img
            alt="shape"
            src="/assets/img/shape3.png"
            className="img-fluid px-0 w-417 h-413 top-0 start-0 position-absolute -z-0 servicesShape"
          />

          {/* ستون راست */}
          <div className="col-lg-3 position-relative -z-0">
            <div className="d-flex align-items-center gap-4 mt-lg-4 mt-2">
              <img
                alt="icon"
                src="/assets/img/solar_info-square-bold-duotone.png"
                className="img-fluid"
              />
              <div>
                <p className="d-flex align-items-center gap-1 mb-0 fs-22 text-white">
                  <span className="font-bold">خدمات</span>
                  <span className="fw-300">ما</span>
                </p>
                <p className="mb-0 text-white-50">آنچه انجام میدهیم</p>
              </div>
            </div>

            {/* نسخه موبایل */}
            <div className="d-lg-none mt-5 pt-4 serviceMobileSize">
              {services.map((service) => (
                <div key={service.id} className="mb-3">
                  <div
                    className={`border overflow-hidden d-flex align-items-center rounded-25 h-97 py-3 ${
                      service.shapePos === 'start-0' ? 'pe-4' : 'ps-4'
                    } bg-white position-relative`}
                  >
                    <img
                      alt="shape"
                      src={service.shape}
                      className={`img-fluid position-absolute ${service.mobileShapeWidth} top-0 ${
                        service.shapePos === 'start-0' ? 'start-0' : 'end-0'
                      } z-0`}
                    />
                    <div
                      className={`d-flex gap-2 position-relative z-10 col-7 ${
                        service.shapePos === 'end-0' ? 'me-auto' : ''
                      }`}
                    >
                      <ServiceBullet isGradient={service.isGradient} />
                      <p className="fw-bold mb-0 fs-14">{service.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* دکمه مشاهده همه */}
            <Link to="/services" className="d-lg-flex seeAll d-none align-items-center text-dark shadow2 rounded-14 bg-white p-3 position-absolute bottom-0 w-100 end-0 start-0 mb-1 justify-content-center gap-3">
              <p className="mb-0 fs-14 fw-300">مشاهده همه</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
              >
                <path
                  d="M0.684608 2.9345C0.712859 2.9055 0.819532 2.7815 0.918899 2.6795C1.50146 2.038 3.02119 0.988 3.81661 0.6675C3.93741 0.616 4.24282 0.507 4.40599 0.5C4.56235 0.5 4.7114 0.536 4.85363 0.609C5.03093 0.711 5.17316 0.8715 5.2511 1.061C5.30127 1.1925 5.3792 1.586 5.3792 1.593C5.45714 2.0235 5.5 2.723 5.5 3.496C5.5 4.2325 5.45714 4.9035 5.39333 5.3405C5.38602 5.3475 5.30809 5.8365 5.22284 6.004C5.06649 6.31 4.76108 6.5 4.43424 6.5L4.40599 6.5C4.19313 6.4925 3.74549 6.3025 3.74549 6.2955C2.99294 5.9745 1.50828 4.976 0.911593 4.3125C0.911593 4.3125 0.743546 4.142 0.670482 4.0355C0.556503 3.8825 0.5 3.693 0.5 3.5035C0.5 3.292 0.563809 3.095 0.684608 2.9345Z"
                  fill="#27817A"
                />
              </svg>
            </Link>
          </div>

          {/* ستون چپ (Swiper دسکتاپ) */}
          <div className="col-lg-9 d-none d-lg-block">
            <div className="position-relative h-100">
              <Swiper
                className="services p-1 h-100"
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={3}
                navigation={{
                  nextEl: '.swiper-button-next3',
                  prevEl: '.swiper-button-prev3',
                }}
                pagination={{
                  el: '.swiper-pagination3',
                  clickable: true,
                }}
              >
                {services.map((service) => (
                  <SwiperSlide key={service.id}>
                    <div className="border overflow-hidden d-flex align-items-end rounded-25 h-100 bg-white position-relative">
                      <img
                        alt="shape"
                        src={service.shape}
                        className={`img-fluid position-absolute ${service.shapeWidth} top-0 ${service.shapePos} z-0`}
                      />
                      <div className="d-flex gap-2 position-relative z-10 p-4 mb-5">
                        <ServiceBullet isGradient={service.isGradient} />
                        <p className="fw-bold mb-0 fs-20">{service.text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="swiper-button-next3"></div>
              <div className="swiper-button-prev3"></div>
              <div className="swiper-pagination3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}