// src/components/product/ProductNumbers.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const categories = [
  { id: 1, title: '۳۰۰ + محصول', image: '/assets/img/productnum.png' },
  { id: 2, title: '۳۰۰ + محصول', image: '/assets/img/productnum.png' },
  { id: 3, title: '۳۰۰ + محصول', image: '/assets/img/productnum.png' },
  { id: 4, title: '۳۰۰ + محصول', image: '/assets/img/productnum.png' },
  { id: 5, title: '۳۰۰ + محصول', image: '/assets/img/productnum.png' },
  { id: 6, title: '۳۰۰ + محصول', image: '/assets/img/productnum.png' },
  { id: 7, title: '۳۰۰ + محصول', image: '/assets/img/productnum.png' },
  { id: 8, title: '۳۰۰ + محصول', image: '/assets/img/productnum.png' },
];

export default function ProductNumbers() {
  return (
    <div className="position-relative h-114 mt-lg-3 mt-5 productNum">
      {/* bg */}
      <img
        alt="bg"
        src="/assets/img/productsNumBg.png"
        className="img-fluid -z-1 d-none d-md-block rotate-y-180-ltr"
      />

      <div className="d-flex align-items-center flex-column flex-md-row gap-4 position-absolute top-0 mt-3 mt-xl-4 pt-xxl-3 w-100">
        <img
          alt="svg"
          src="/assets/img/productsNumsvg.png"
          className="img-fluid position-absolute -top-23"
        />

        {/* Title */}
        <div className="d-flex align-items-center flex-shrink-0 gap-3 mx-xl-3 mx-lg-1 mx-3 position-relative -top-36">
          <svg
            className="d-none d-lg-block"
            xmlns="http://www.w3.org/2000/svg"
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
          >
            <path
              opacity="0.5"
              d="M9.16709 22.1693C9.16709 12.4572 16.8625 4.58301 26.3546 4.58301C35.8467 4.58301 43.5421 12.4572 43.5421 22.1693C43.5504 24.6321 43.0455 27.0698 42.0594 29.3267C41.0734 31.5836 39.628 33.6103 37.8152 35.2776C36.6465 36.3478 35.7779 37.143 35.1638 37.7205C34.8526 38.0127 34.547 38.3106 34.2471 38.6143L34.1898 38.6761L34.1715 38.699C33.6283 39.382 33.5115 39.5584 33.4427 39.7188C33.374 39.8793 33.3213 40.0855 33.1838 40.9563C33.131 41.3001 33.1242 41.8868 33.1242 43.4886V43.5574C33.1242 44.4947 33.1242 45.3036 33.0669 45.9659C33.005 46.6672 32.8675 47.3638 32.4985 48.017C32.09 48.7437 31.4972 49.35 30.7798 49.7747C30.1427 50.1528 29.4621 50.2926 28.7769 50.3568C28.1283 50.4163 27.3377 50.4163 26.421 50.4163H26.2881C25.3715 50.4163 24.5808 50.4163 23.9323 50.3568C23.2448 50.2926 22.5665 50.1505 21.9271 49.7747C21.2105 49.3497 20.6185 48.7434 20.2106 48.017C19.844 47.3638 19.7065 46.6695 19.6423 45.9659C19.5827 45.3013 19.5827 44.4947 19.5827 43.5574V43.4886C19.5827 41.8868 19.5781 41.3001 19.5231 40.9563C19.3856 40.0855 19.3375 39.8793 19.2665 39.7188C19.1977 39.5584 19.0808 39.382 18.5377 38.6968L18.5194 38.6738C18.2011 38.3488 17.8764 38.0302 17.5454 37.7182C16.9313 37.1453 16.0627 36.3478 14.894 35.2753C13.0815 33.6083 11.6362 31.5819 10.6502 29.3254C9.66418 27.0689 9.15908 24.6318 9.16709 22.1693Z"
              fill="white"
            />
            <path
              d="M29.987 45.0884H22.7225C22.7293 45.3107 22.7385 45.5032 22.7545 45.6797C22.7958 46.1609 22.8691 46.3328 22.9173 46.4199C23.0533 46.6624 23.2509 46.8647 23.4902 47.0065C23.575 47.0546 23.7445 47.1303 24.2143 47.1715C24.7048 47.2174 25.351 47.2197 26.3548 47.2197C27.3562 47.2197 28.0048 47.2197 28.4952 47.1738C28.9627 47.128 29.1345 47.0546 29.2193 47.0065C29.4586 46.8647 29.6562 46.6624 29.7923 46.4199C29.8381 46.3328 29.9114 46.1586 29.9527 45.6797C29.9687 45.5055 29.9802 45.3107 29.987 45.0884ZM28.8985 18.7388C29.602 19.2522 29.7648 20.2513 29.2629 20.9686L26.5633 24.8369H29.7762C30.0653 24.8383 30.3482 24.9201 30.5935 25.0731C30.8387 25.226 31.0366 25.4442 31.165 25.7032C31.2967 25.965 31.3554 26.2576 31.3349 26.55C31.3143 26.8424 31.2152 27.1238 31.0481 27.3647L26.5839 33.7561C26.4674 33.9263 26.318 34.0713 26.1443 34.1826C25.9707 34.294 25.7765 34.3693 25.5733 34.4041C25.37 34.4389 25.1618 34.4326 24.9611 34.3855C24.7603 34.3383 24.5711 34.2513 24.4045 34.1297C24.0659 33.8782 23.8385 33.5048 23.7705 33.0886C23.7024 32.6724 23.7992 32.246 24.0402 31.8999L26.7398 28.0315H23.5268C23.2376 28.0299 22.9544 27.9478 22.7091 27.7944C22.4639 27.641 22.2661 27.4224 22.1381 27.163C22.0068 26.9014 21.9483 26.6093 21.9689 26.3174C21.9894 26.0254 22.0883 25.7444 22.255 25.5038L26.7191 19.1101C26.8356 18.9399 26.9851 18.7948 27.1587 18.6835C27.3323 18.5722 27.5265 18.4969 27.7298 18.4621C27.933 18.4272 28.1412 18.4336 28.342 18.4807C28.5427 18.5279 28.732 18.6149 28.8985 18.7365V18.7388Z"
              fill="white"
            />
          </svg>
          <div className="text-white black-md">
            <p className="font-bold fs-18 mb-0">لوازم الکترونیک</p>
            <p className="fs-14 text-center text-md-end mb-0">۳۵۶۰ محصول</p>
          </div>
        </div>

        {/* Swiper */}
        <div className="rounded-21 overflow-hidden shadow10 bg-white flex-grow-1 gap-5 h-141 position-relative -top-41 w-100 d-flex align-items-center px-3 me-xxl-3">
          <Swiper
            className="products w-100"
            modules={[Navigation]}
            spaceBetween={8}
            slidesPerView={3}
            breakpoints={{
              576: { slidesPerView: 4 },
              768: { slidesPerView: 6 },
              992: { slidesPerView: 8 },
              1200: { slidesPerView: 10 },
            }}
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id} className="shadow13">
                <a className="d-flex flex-column text-center fw-bold fs-12 text-dark">
                  <img
                    alt="product"
                    src={cat.image}
                    className="img-fluid w-42 d-block mx-auto"
                  />
                  <p className="mb-0 mt-2">{cat.title}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}