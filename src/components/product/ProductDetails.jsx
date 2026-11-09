// src/components/product/ProductDetails.jsx
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import { useCart } from '../../context/CartContext';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

function formatPrice(num) {
  if (!num || num === 0) return '۰';
  return num.toLocaleString('fa-IR');
}

export default function ProductDetails({ product }) {
  const { addToCart } = useCart();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const images = [product.image, product.image, product.image];
  const hasPrice = product.price > 0;
  const inStock = product.stock !== false;
  const discount = product.oldPrice > product.price
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;


  const handleAddToCart = () => {
    if (!inStock) return;
    addToCart({ ...product, quantity });
  };

  const specs = [
    { label: 'توان', value: product.power },
    { label: 'ولتاژ', value: product.voltage },
    { label: 'جریان', value: product.current },
    { label: 'رنگ', value: product.color },
    { label: 'گارانتی', value: product.warranty },
    { label: 'روشنایی', value: product.brightness !== '—' ? product.brightness : null },
  ].filter((s) => s.value && s.value !== '—');

  return (
    <div className="row g-4 bg-white rounded-20 pb-4 shadow10 mt-5">
      {/* ستون چپ: گالری + خرید */}
      <div className="col-lg-4">
        {/* گالری */}
        <div className="position-relative shadow10 pt-58 pb-3 bg-white rounded-20 mt-3">
          <div className="position-absolute h-15 -top-25 start-0 end-0 mx-5 bg-second rounded-t-20"></div>
          <div className="position-absolute h-15 -top-15 start-0 end-0 mx-4 bg-second2 rounded-t-20"></div>

          {/* گالری اصلی */}
          <Swiper
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Thumbs]}
            className="gallery"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <img
                  src={img}
                  alt={product.title}
                  className="img-fluid mx-auto d-block"
                  style={{ width: 200, height: 200, objectFit: 'contain' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* تصاویر کوچک */}
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="smallImgs mt-2 py-4"
          >
            {images.map((img, i) => (
              <SwiperSlide key={i} className="d-flex align-items-center justify-content-center cursor-pointer">
                <img src={img} alt={`thumb-${i}`} className="img-fluid" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* کارت خرید */}
        <div className="position-relative shadow10 p-4 bg-white rounded-20 mt-4">
          {/* فروشنده */}
          <a className="rounded-19 bg-gray6 d-flex align-items-center justify-content-between p-3">
            <div className="d-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M9.98446 0C12.2824 0 14.1449 1.9 14.1727 4.2465H14.3672C16.9246 4.2465 19.0002 6.384 19.0002 9.006V14.25C19.0002 16.872 16.9246 19 14.3672 19H5.58315C3.02576 19 0.950195 16.872 0.950195 14.25V9.006C0.950195 6.384 3.02576 4.2465 5.58315 4.2465H5.77774C5.79627 3.1065 6.23176 2.0425 7.01937 1.2445C7.81624 0.437 8.83549 0.0285 9.98446 0ZM13.4962 5.377C13.1163 5.377 12.8013 5.7 12.8013 6.0895V7.1915C12.8013 7.581 13.1163 7.904 13.4962 7.904C13.8854 7.904 14.1912 7.581 14.1912 7.1915V6.0895C14.1912 5.7 13.8854 5.377 13.4962 5.377ZM6.37075 5.377C5.99085 5.377 5.67581 5.7 5.67581 6.0895V7.1915C5.67581 7.581 5.99085 7.904 6.37075 7.904C6.75992 7.904 7.0657 7.581 7.0657 7.1915V6.0895C7.0657 5.7 6.75992 5.377 6.37075 5.377Z" fill="url(#store-ic)" />
                <defs>
                  <linearGradient id="store-ic" x1="0.950195" y1="16.7677" x2="21.989" y2="11.1058" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5B6CCC" /><stop offset="1" stopColor="#4834AC" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="fs-14 mb-0 text-dark">
                <span className="font-bold">فروشنده: </span>
                <span className="text-gray">نمایندگی رسمی</span>
              </p>
            </div>
          </a>

          <div className="mt-4">
            <div className="d-flex align-items-center gap-2">
              <span className={`rounded-circle ${inStock ? 'bg-success' : 'bg-danger'}`} style={{ width: 8, height: 8 }}></span>
              <p className="mb-0 text-gray fs-14">{inStock ? 'موجود در انبار فروشگاه' : 'ناموجود'}</p>
            </div>

            <hr className="my-3" />

            <div className="d-flex align-items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path opacity="0.5" d="M2.815 4.23508C2.5 4.68341 2.5 6.01675 2.5 8.68091V9.99258C2.5 14.6909 6.0325 16.9717 8.24917 17.9392C8.85 18.2017 9.15083 18.3334 10 18.3334C10.85 18.3334 11.15 18.2017 11.7508 17.9392C13.9675 16.9709 17.5 14.6917 17.5 9.99258V8.68091C17.5 6.01591 17.5 4.68341 17.185 4.23508C16.8708 3.78758 15.6183 3.35841 13.1125 2.50091L12.635 2.33758C11.3292 1.89008 10.6767 1.66675 10 1.66675C9.32417 1.66675 8.67083 1.89008 7.365 2.33758L6.8875 2.50008C4.38167 3.35841 3.12917 3.78758 2.815 4.23508Z" fill="#27817A" />
              </svg>
              <p className="mb-0 text-gray fs-14">ضمانت اصالت کالا</p>
            </div>

            {hasPrice ? (
              <>
                {/* تعداد */}
                <div className="d-flex align-items-center gap-2 mt-4 mb-3">
                  <span className="fs-14 text-gray">تعداد:</span>
                  <div className="d-flex align-items-center bg-gray5 rounded-pill">
                    <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="border-0 bg-transparent px-3 py-2 fs-16">−</button>
                    <span className="px-2 fs-14 fw-bold">{quantity}</span>
                    <button type="button" onClick={() => setQuantity((q) => q + 1)} className="border-0 bg-transparent px-3 py-2 fs-16">+</button>
                  </div>
                </div>

                {/* دکمه + قیمت */}
                <div className="d-flex flex-wrap align-items-center gap-3 mt-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    disabled={!inStock}
                    className="rounded-15 px-4 flex-grow-1 py-3 bg-gradient-main shadow8 d-flex align-items-center justify-content-center gap-2 border-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white" />
                      <path opacity="0.5" d="M2.08407 2.75109C2.15 2.56347 2.28775 2.40972 2.46703 2.32365C2.6463 2.23757 2.85243 2.22622 3.04007 2.29209L3.34107 2.39809C3.95807 2.61509 4.48107 2.79909 4.89407 3.00109C5.33407 3.21809 5.71207 3.48409 5.99607 3.90009C6.27807 4.31209 6.39507 4.76509 6.44807 5.26209C6.47207 5.48409 6.48507 5.73009 6.49207 6.00009H17.1301C18.8151 6.00009 20.3321 6.00009 20.7761 6.57709C21.2201 7.15409 21.0461 8.02409 20.6991 9.76309L20.1991 12.1881C19.8841 13.7161 19.7271 14.4811 19.1751 14.9301C18.6231 15.3801 17.8431 15.3801 16.2821 15.3801H10.9791C8.18907 15.3801 6.79507 15.3801 5.92907 14.4661C5.06307 13.5521 4.99907 12.5821 4.99907 9.64009V7.03809C4.99907 6.29809 4.99907 5.80309 4.95707 5.42309C4.91707 5.06009 4.84807 4.87809 4.75707 4.74609C4.67007 4.61709 4.53707 4.49609 4.23307 4.34809C3.91007 4.19009 3.47107 4.03409 2.80307 3.79909L2.54307 3.70809C2.44996 3.67555 2.36419 3.62496 2.29066 3.55923C2.21713 3.49349 2.15729 3.4139 2.11456 3.32501C2.07183 3.23612 2.04706 3.13967 2.04165 3.04119C2.03625 2.94271 2.05032 2.84413 2.08307 2.75109H2.08407Z" fill="white" />
                    </svg>
                    <span className="fs-15 fw-bold text-white">{inStock ? 'افزودن به سبد خرید' : 'ناموجود'}</span>
                  </button>

                  <div className="flex-grow-1">
                    {discount > 0 && (
                      <div className="d-flex align-items-center justify-content-end gap-2">
                        <p className="fs-14 text-gray text-decoration-line-through mb-0">{formatPrice(product.oldPrice)}</p>
                        <p className="mb-0 fs-13 fw-bold text-white bg-danger px-2 rounded-pill">{discount}٪</p>
                      </div>
                    )}
                    <div className="d-flex align-items-end justify-content-end gap-1 mt-1">
                      <p className="fs-20 font-bold mb-0">{formatPrice(product.price)}</p>
                      <p className="mb-1 fs-14 fw-bold">تومان</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <a className="d-flex align-items-center justify-content-center p-3 bg-white rounded-15 gap-2 fs-15 fw-bold text-second-gradient shadow8 mt-4">
                <p className="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ستون راست: اطلاعات */}
      <div className="col-lg-8">
        <div>
          {/* هدر */}
          <div className="rounded-19 bg-gray6 d-flex flex-column flex-lg-row gap-3 justify-content-between p-3">
            <div>
              <p className="font-bold mb-1">{product.title}</p>
              <p className="fs-12 text-gray mb-0">{product.category}</p>
            </div>
            <div className="d-flex gap-2 justify-content-end">
              <div className="d-flex align-items-center gap-1 fs-11">
                <p className="text-gray mb-0">({product.rating})</p>
                <p className="font-bold mb-0">{product.rating}</p>
              </div>
              <div className="d-flex align-items-center gap-1 justify-content-end">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill={s <= Math.round(product.rating) ? '#FFDB7E' : 'none'} stroke={s <= Math.round(product.rating) ? '#FFDB7E' : '#ccc'} strokeWidth="1">
                    <path d="M15.4896 7.38098L12.6011 9.7838L13.515 13.4967C13.557 13.6523 13.5628 13.8155 13.5319 13.9737C13.5009 14.1319 13.4342 14.2809 13.3367 14.4093C13.2391 14.5377 13.1135 14.642 12.9694 14.7142C12.8253 14.7864 12.6665 14.8246 12.5053 14.8259C12.3079 14.825 12.1149 14.7673 11.9493 14.6597L8.72213 12.6212H8.70935L5.71222 14.5191C5.5186 14.6413 5.29295 14.7029 5.06412 14.6961C4.8353 14.6892 4.61372 14.6143 4.42773 14.4808C4.23613 14.341 4.09101 14.1468 4.01123 13.9234C3.93145 13.7 3.92071 13.4578 3.9804 13.2283L4.84311 9.83492L1.94184 7.38098C1.77724 7.24344 1.65761 7.05974 1.59838 6.85358C1.53915 6.64742 1.54304 6.42824 1.60953 6.2243C1.67429 6.02345 1.79783 5.84665 1.96416 5.71677C2.1305 5.58689 2.33198 5.50991 2.54254 5.49579L6.31292 5.25295L7.74439 1.68707C7.82116 1.49178 7.95478 1.32403 8.12796 1.20554C8.30114 1.08705 8.5059 1.02327 8.71574 1.02246C8.92558 1.02327 9.13034 1.08705 9.30352 1.20554C9.4767 1.32403 9.61032 1.49178 9.68709 1.68707L11.093 5.23378L14.8889 5.49579C15.0998 5.50905 15.3017 5.58571 15.4681 5.71571C15.6346 5.84571 15.758 6.02299 15.8219 6.2243C15.8884 6.42824 15.8923 6.64742 15.8331 6.85358C15.7739 7.05974 15.6542 7.24344 15.4896 7.38098Z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <p className="fs-14 text-justify text-muted mt-4 lh-27">
            {product.shortDesc} لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>

          <div>
            <ul className="list-unstyled pe-0 mb-0 fs-14">
              {specs.length > 0 ? (
                specs.map((spec, idx) => (
                  <li key={idx} className="d-flex align-items-center gap-3 mb-2">
                    <span className="rounded-circle bg-gray4 d-inline-block" style={{ width: 7, height: 7 }}></span>
                    <p className="mb-0">
                      {spec.label}: {spec.value}
                    </p>
                  </li>
                ))
              ) : (
                <li className="text-gray fs-14">مشخصاتی برای این محصول ثبت نشده است.</li>
              )}
            </ul>
            <a className="fs-14 text-main me-4">+ نمایش بیشتر</a>
          </div>
        </div>
      </div>
    </div>
  );
}