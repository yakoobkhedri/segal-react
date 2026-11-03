// src/components/vitrin/SensorProducts.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { products } from '../../data/products';
import ProductCard from '../product/ProductCard';

import 'swiper/css';
import 'swiper/css/navigation';

export default function SensorProducts() {
  return (
    <section className="mt-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 d-flex justify-content-end flex-column">
            <div
              className="rounded-29 bg-second2 p-4 position-relative mb-5"
              style={{ height: 237 }}
            >
              <img
                alt="shape"
                src="/assets/img/sensorSvg.png"
                className="img-fluid position-absolute end-0 top-0 h-100 w-100"
              />
              <div className="d-flex align-items-center justify-content-center rounded-29 bg-white position-relative -top-114 shadow10">
                <img alt="product" src="/assets/img/sensor.png" className="img-fluid" />
              </div>
              <p className="font-bold fs-20 text-white text-center mb-0 position-absolute bottom-0 end-0 start-0 mb-4">
                سنسور
              </p>
            </div>
          </div>
          <div className="col-xl-9">
            <Swiper
              className="p-3"
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
      </div>
    </section>
  );
}