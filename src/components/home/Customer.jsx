// src/components/home/Customer.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const customers = [
  {
    id: 1,
    title: 'شرکت واردات و صادرات خاویار عطا',
    tag: 'سیم کشی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    id: 2,
    title: 'شرکت واردات و صادرات خاویار عطا',
    tag: 'سیم کشی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    id: 3,
    title: 'شرکت واردات و صادرات خاویار عطا',
    tag: 'سیم کشی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    id: 4,
    title: 'شرکت واردات و صادرات خاویار عطا',
    tag: 'سیم کشی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    id: 5,
    title: 'شرکت واردات و صادرات خاویار عطا',
    tag: 'سیم کشی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
  {
    id: 6,
    title: 'شرکت واردات و صادرات خاویار عطا',
    tag: 'سیم کشی',
    text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.',
  },
];

export default function Customer() {
  return (
    <section id="customer" className="mt-245 mb-5 h-400 overflow-hidden">
      <div className="container position-relative h-100">
        {/* شکل‌های پس‌زمینه */}
        <img
          alt="shape"
          src="/assets/img/customerShape.png"
          className="position-absolute end-0 bottom-0 img-fluid z-10"
        />
        <img
          alt="bg"
          src="/assets/img/customerbg.png"
          className="position-absolute end-0 start-0 img-fluid w-100 h-100 d-none d-md-block -z-1"
        />
        <img
          alt="bg"
          src="/assets/img/custumerBg2.png"
          className="position-absolute end-0 start-0 img-fluid w-100 h-100 d-block d-md-none -z-1"
        />

        <div className="d-flex align-items-center h-100 position-relative z-10">
          {/* تیتر عمودی */}
          <h3 className="font-bold text-white rotate-90-translate-y-39 flex-shrink-0">
            مشتریان ما
          </h3>

          {/* اسلایدر */}
          <div className="w-100 position-relative -right-40">
            <Swiper
              className="customer"
              modules={[Pagination]}
              spaceBetween={16}
              slidesPerView={1}
              pagination={{
                el: '.swiper-pagination4',
                clickable: true,
              }}
              breakpoints={{
                576: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
            >
              {customers.map((customer) => (
                <SwiperSlide key={customer.id}>
                  <div className="rounded-33 bg-white position-relative p-4">
                    <img
                      alt="label"
                      src="/assets/img/customerLabel.png"
                      className="img-fluid position-absolute top-0 end-0 me-4"
                    />
                    <p className="font-bold fs-17 mt-5 pt-3">{customer.title}</p>
                    <div className="d-flex align-items-center gap-2 flex-wrap my-3">
                      <span className="py-1 px-3 rounded-pill text-main fs-12 bg-second">
                        {customer.tag}
                      </span>
                    </div>
                    <p className="text-secondary lh-lg">{customer.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-pagination4"></div>
          </div>
        </div>
      </div>
    </section>
  );
}