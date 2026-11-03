// src/components/about/AboutSection.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// آیکون دسته (مربع‌های روی هم)
function StackIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
      <path
        d="M11.2646 26.2433C13.4892 27.4113 14.6015 27.9941 15.7974 27.9941V15.3255L3.93716 9.08374C3.91992 9.11183 3.90303 9.14012 3.88649 9.16862C3.12891 10.4532 3.12891 12.0532 3.12891 15.2521V15.4003C3.12891 18.5978 3.12891 20.1979 3.88522 21.4824C4.6428 22.7683 6.00593 23.4841 8.73093 24.9143L11.2646 26.2433Z"
        fill="white"
      />
      <path
        opacity="0.7"
        d="M22.8621 5.73822L20.3283 4.40802C18.105 3.24125 16.9927 2.65723 15.7968 2.65723C14.5996 2.65723 13.4886 3.23998 11.264 4.40802L8.7303 5.73822C6.06484 7.13682 4.7017 7.85133 3.93652 9.08271L15.7968 15.3258L27.6571 9.08398C26.8894 7.85133 25.5288 7.13682 22.8621 5.73822Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M27.7091 9.16862C27.6921 9.14011 27.6748 9.11182 27.6572 9.08374L15.7969 15.3255V27.9941C16.9928 27.9941 18.1051 27.4113 20.3297 26.2433L22.8634 24.9131C25.5884 23.4828 26.9515 22.7683 27.7091 21.4824C28.4654 20.1979 28.4654 18.5978 28.4654 15.4015V15.2533C28.4654 12.0545 28.4654 10.4532 27.7091 9.16862Z"
        fill="white"
      />
    </svg>
  );
}

// عنوان بخش (بالای کارت)
function SectionTitle({ title, position }) {
  const isRight = position === 'right';
  return (
    <div
      className={`position-absolute -top-83 font-bold fs-20 text-white h-131 w-407 mx-2 ${
        !isRight ? 'left-27' : ''
      } aboutTitle`}
    >
      <img
        alt="shape"
        src="/assets/img/aboutShape2.png"
        className={`img-fluid position-absolute top-0 start-0 bottom-0 end-0 ${!isRight ? 'rotate-y-180' : ''}`}
      />
      <img
        alt="shape"
        src="/assets/img/aboutSvg.png"
        className={`img-fluid position-absolute top-0 ${isRight ? 'start-0' : 'end-0 rotate-y-180'}`}
      />
      <div
        className={`d-flex align-items-center ${
          isRight ? 'gap-2' : 'justify-content-end gap-2'
        } position-relative mt-sm-5 mt-4 pt-1 pt-sm-0`}
      >
        {isRight ? (
          <>
            <StackIcon />
            <p className="mb-0">{title}</p>
          </>
        ) : (
          <>
            <p className="mb-0">{title}</p>
            <StackIcon />
          </>
        )}
      </div>
    </div>
  );
}

// اسلایدر تصویر
function ImageSlider({ image, id }) {
  return (
    <div className="col-lg-4 position-relative aboutSwiper py-4">
      <Swiper
        modules={[Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ el: `.swiper-pagination-${id}`, clickable: true }}
        className="about"
      >
        {[1, 2, 3].map((i) => (
          <SwiperSlide key={i} className="position-relative">
            <a className="d-block">
              <img alt="slide" src={image} className="img-fluid w-100" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`swiper-pagination-${id} position-absolute text-center`}></div>
    </div>
  );
}

export default function AboutSection({ id, title, image, text, imageRight, titlePosition }) {
  return (
    <div className="container mt-5 pt-5">
      <div className="row mt-5 align-items-center position-relative end-0 rounded-33 bg-white shadow8 p-4">
        <SectionTitle title={title} position={titlePosition} />

        {/* تصویر */}
        {imageRight ? (
          <div className="col-lg-8 order-1 order-lg-0">
            <p className="text-gray lh-34 mb-0 fs-14 text-justify pe-sm-4 pt-3 pt-xl-0">
              {text}
            </p>
          </div>
        ) : (
          <ImageSlider image={image} id={id} />
        )}

        {/* متن */}
        {imageRight ? (
          <ImageSlider image={image} id={id} />
        ) : (
          <div className="col-lg-8">
            <p className="text-gray lh-34 mb-0 fs-14 text-justify pe-sm-4 pt-3 pt-xl-0">
              {text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}