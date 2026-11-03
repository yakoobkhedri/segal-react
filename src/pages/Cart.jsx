// src/pages/Cart.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import ConfirmModal from '../components/cart/ConfirmModal';

function formatPrice(num) {
  if (!num || num === 0) return '۰';
  return num.toLocaleString('fa-IR');
}

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const { showToast } = useToast();

  const [confirmItem, setConfirmItem] = useState(null);   // برای حذف تکی
  const [confirmClear, setConfirmClear] = useState(false); // برای خالی کردن کل

  // حذف تک محصول
  const handleRemoveClick = (item) => {
    setConfirmItem(item);
  };

  const handleConfirmRemove = () => {
    if (confirmItem) {
      removeFromCart(confirmItem.id);
      showToast('محصول از سبد حذف شد', 'info');
      setConfirmItem(null);
    }
  };

  // خالی کردن کل سبد
  const handleClearClick = () => {
    setConfirmClear(true);
  };

  const handleConfirmClear = () => {
    clearCart();
    showToast('سبد خرید خالی شد', 'info');
    setConfirmClear(false);
  };

  return (
    <main className="mt-4 position-relative">
      <section>
        <div className="container">
          {cart.length === 0 ? (
            /* سبد خالی */
            <div className="rounded-21 mt-4 py-4 px-3 shadow10 d-flex align-items-center justify-content-center text-center">
              <div className="my-sm-4 py-sm-4">
                <div className="mb-4" style={{ fontSize: 80 }}>🛒</div>
                <p className="fs-18 font-bold mb-1">سبد خرید شما خالی میباشد</p>
                <p className="text-gray mb-4">لطفا حداقل یک محصول برای خرید انتخاب کنید</p>
                <Link
                  to="/products"
                  className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 text-decoration-none"
                >
                  <p className="mb-0 fw-bold text-white">مشاهده محصولات</p>
                </Link>
              </div>
            </div>
          ) : (
            /* سبد پر */
            <div className="d-flex flex-column flex-lg-row gap-4">
              {/* ستون لیست محصولات */}
              <div className="flex-grow-1">
                <div className="rounded-20 bg-white px-4 py-2 shadow5">
                  {/* هدر با دکمه خالی کردن */}
                  <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
                    <p className="mb-0 font-bold fs-14">
                      {formatPrice(totalItems)} محصول در سبد
                    </p>
                    <button
                      onClick={handleClearClick}
                      className="fs-12 text-danger border-0 bg-transparent p-0"
                    >
                      خالی کردن سبد
                    </button>
                  </div>

                  {cart.map((item, index) => {
                    const discount = item.oldPrice > item.price
                      ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
                      : 0;

                    return (
                      <div
                        key={item.id}
                        className={`d-flex flex-column flex-md-row gap-3 justify-content-between py-4 ${index !== cart.length - 1 ? 'border-bottom' : ''
                          }`}
                      >
                        {/* عکس + عنوان */}
                        <div className="d-flex gap-5">
                          <Link to={`/product/${item.id}`}>
                            <img
                              alt={item.title}
                              src={item.image}
                              className="img-fluid"
                              style={{ width: 100, height: 100, objectFit: 'contain' }}
                            />
                          </Link>
                          <div>
                            <Link
                              to={`/product/${item.id}`}
                              className="font-bold text-dark text-decoration-none d-block mb-2"
                            >
                              {item.title}
                            </Link>
                            <div className="d-flex align-items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path opacity="0.5" d="M2.815 4.23508C2.5 4.68341 2.5 6.01675 2.5 8.68091V9.99258C2.5 14.6909 6.0325 16.9717 8.24917 17.9392C8.85 18.2017 9.15083 18.3334 10 18.3334C10.85 18.3334 11.15 18.2017 11.7508 17.9392C13.9675 16.9709 17.5 14.6917 17.5 9.99258V8.68091C17.5 6.01591 17.5 4.68341 17.185 4.23508C16.8708 3.78758 15.6183 3.35841 13.1125 2.50091L12.635 2.33758C11.3292 1.89008 10.6767 1.66675 10 1.66675C9.32417 1.66675 8.67083 1.89008 7.365 2.33758L6.8875 2.50008C4.38167 3.35841 3.12917 3.78758 2.815 4.23508Z" fill="#27817A" />
                              </svg>
                              <p className="mb-0 text-gray fs-14">موجود در انبار فروشگاه</p>
                            </div>
                          </div>
                        </div>

                        {/* کنترل تعداد + قیمت */}
                        <div className="d-flex justify-content-between flex-column">
                          <div className="d-flex align-items-center justify-content-end gap-3">
                            {/* تغییر تعداد */}
                            <div className="d-flex align-items-center gap-2">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-22 h-22 d-flex align-items-center bg-white justify-content-center border rounded-3 cursor-pointer"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                  <path d="M0 4.266V3.276H3.366V0H4.338V3.276H7.704V4.266H4.338V7.542H3.366V4.266H0Z" fill="url(#plus-grad)" />
                                  <defs>
                                    <linearGradient id="plus-grad" x1="0" y1="6.65589" x2="8.88595" y2="4.08458" gradientUnits="userSpaceOnUse">
                                      <stop stopColor="#5B6CCC" />
                                      <stop offset="1" stopColor="#4834AC" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                                className="w-22 h-22 font-bold d-block bg-transparent outline-none border-0 text-center"
                                style={{ width: 40 }}
                              />
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-22 h-22 d-flex align-items-center bg-white justify-content-center border rounded-3 cursor-pointer"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2" fill="none">
                                  <path d="M0 0.275879V1.26588H4.338H7.704V0.275879H3.366H0Z" fill="#D9D9D9" />
                                </svg>
                              </button>
                            </div>

                            {/* حذف */}
                            <button
                              type="button"
                              onClick={() => handleRemoveClick(item)}
                              className="bg-white border-0 cursor-pointer"
                              title="حذف"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M3 6.52401C3 6.12901 3.327 5.81001 3.73 5.81001H8.518C8.524 4.96801 8.616 3.81501 9.45 3.01701C10.137 2.36178 11.0506 1.9974 12 2.00001C12.9494 1.9974 13.863 2.36178 14.55 3.01701C15.384 3.81501 15.476 4.96801 15.482 5.81001H20.27C20.673 5.81001 21 6.13001 21 6.52401C20.999 6.61883 20.9792 6.71251 20.942 6.79971C20.9047 6.88691 20.8507 6.96591 20.7829 7.03222C20.7151 7.09852 20.6349 7.15082 20.5469 7.18613C20.4589 7.22144 20.3648 7.23907 20.27 7.23801H3.73C3.63518 7.23907 3.54109 7.22144 3.45309 7.18613C3.36509 7.15082 3.2849 7.09852 3.21711 7.03222C3.14933 6.96591 3.09526 6.88691 3.05801 6.79971C3.02076 6.71251 3.00104 6.61883 3 6.52401Z" fill="black" />
                                <path opacity="0.5" d="M11.5962 21.9999H12.4042C15.1872 21.9999 16.5782 21.9999 17.4842 21.1139C18.3882 20.2279 18.4802 18.7749 18.6652 15.8689L18.9322 11.6809C19.0322 10.1039 19.0822 9.31492 18.6292 8.81592C18.1752 8.31592 17.4092 8.31592 15.8762 8.31592H8.12422C6.59122 8.31592 5.82422 8.31592 5.37122 8.81592C4.91722 9.31592 4.96722 10.1039 5.06822 11.6809L5.33522 15.8689C5.52022 18.7749 5.61222 20.2289 6.51722 21.1139C7.42222 21.9999 8.81322 21.9999 11.5962 21.9999Z" fill="black" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.42523 11.482C9.83823 11.438 10.2052 11.755 10.2462 12.189L10.7462 17.452C10.7872 17.885 10.4862 18.272 10.0752 18.316C9.66323 18.359 9.29523 18.043 9.25423 17.609L8.75423 12.346C8.71323 11.912 9.01423 11.525 9.42523 11.482ZM14.5752 11.482C14.9872 11.525 15.2882 11.912 15.2462 12.346L14.7462 17.609C14.7062 18.043 14.3382 18.359 13.9262 18.316C13.5132 18.272 13.2132 17.886 13.2542 17.452L13.7542 12.188C13.7952 11.755 14.1632 11.438 14.5742 11.481L14.5752 11.482Z" fill="black" />
                              </svg>
                            </button>
                          </div>

                          {/* قیمت */}
                          <div className="d-flex align-items-center justify-content-end justify-content-md-start mt-3 mt-md-0 gap-1">
                            {discount > 0 && (
                              <div className="d-flex align-items-center gap-2">
                                <p className="fs-14 text-gray text-decoration-line-through mb-0">
                                  {formatPrice(item.oldPrice)}
                                </p>
                                <p className="mb-0 fs-13 fw-bold text-white bg-danger px-2 rounded-pill">{discount}٪</p>
                              </div>
                            )}
                            <div className="d-flex align-items-end gap-1">
                              <p className="fs-20 font-bold mb-0">{formatPrice(item.price * item.quantity)}</p>
                              <p className="mb-0 fs-14 fw-bold">تومان</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* دکمه ادامه خرید */}
                  <div className="py-3 border-top">
                    <Link
                      to="/products"
                      className="d-inline-flex align-items-center gap-2 text-main fs-14 text-decoration-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M12 19L5 12L12 5" stroke="#27817A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="mb-0">ادامه خرید</p>
                    </Link>
                  </div>
                </div>
              </div>

              {/* ستون سبد خرید (خلاصه) */}
              <div className="w-362 checkout">
                <div className="bg-white p-3 rounded-20 shadow5 mt-5 pt-0">
                  {/* هدر */}
                  <div className="rounded-20 px-4 py-3 bg-second2 -top-27 d-flex align-items-center gap-4 position-relative">
                    <div className="position-absolute bg-second rounded-t-20 end-0 start-0 -top-16 mx-4 h-16"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
                      <path opacity="0.4" d="M9.5133 27.9121C10.8844 27.9121 12.0076 29.0354 12.0076 30.423C12.0076 31.794 10.8844 32.9173 9.5133 32.9173C8.12572 32.9173 7.00244 31.794 7.00244 30.423C7.00244 29.0354 8.12572 27.9121 9.5133 27.9121ZM28.097 27.9121C29.4681 27.9121 30.5913 29.0354 30.5913 30.423C30.5913 31.794 29.4681 32.9173 28.097 32.9173C26.7094 32.9173 25.5861 31.794 25.5861 30.423C25.5861 29.0354 26.7094 27.9121 28.097 27.9121Z" fill="white" />
                      <path d="M1.99639 0.555265L5.93613 1.14994C6.49777 1.25071 6.91074 1.71158 6.9603 2.27322L7.27416 5.97344C7.32371 6.5037 7.7532 6.90015 8.28181 6.90015H30.5905C31.5981 6.90015 32.2589 7.24705 32.9196 8.00691C33.5804 8.76678 33.696 9.85702 33.5474 10.8465L31.9781 21.6829C31.6807 23.7659 29.8967 25.3005 27.7988 25.3005H9.77676C7.57975 25.3005 5.76268 23.6156 5.58098 21.4367L4.06124 3.42954L1.5669 3.00005C0.906144 2.88442 0.443617 2.24019 0.559249 1.57943C0.674881 0.902161 1.31912 0.456152 1.99639 0.555265ZM25.1558 13.0105H20.5801C19.8863 13.0105 19.3412 13.5556 19.3412 14.2494C19.3412 14.9267 19.8863 15.4883 20.5801 15.4883H25.1558C25.8496 15.4883 26.3947 14.9267 26.3947 14.2494C26.3947 13.5556 25.8496 13.0105 25.1558 13.0105Z" fill="white" />
                    </svg>
                    <div>
                      <p className="font-bold text-white mb-0">سبد خرید</p>
                      <p className="fs-12 text-white-50 mb-0">{formatPrice(totalItems)} محصول</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <p className="fs-14 text-gray mb-0">جمع مبلغ کالا ها:</p>
                    <p className="mb-0 font-bold">{formatPrice(totalPrice)} تومان</p>
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-3 mt-4">
                    <p className="fs-14 text-gray mb-0">تخفیف:</p>
                    <p className="mb-0 fw-normal">۰ تومان</p>
                  </div>

                  <svg xmlns="http://www.w3.org/2000/svg" className="w-100" height="1" viewBox="0 0 330 1" fill="none">
                    <line x1="330" y1="0.5" x2="0" y2="0.5" stroke="black" strokeOpacity="0.1" strokeDasharray="5 5" />
                  </svg>

                  <div className="d-flex align-items-center justify-content-between mb-3 mt-4">
                    <p className="fs-14 text-gray mb-0 font-bold">مبلغ قابل پرداخت:</p>
                    <div className="mb-0 d-flex align-items-center">
                      <p className="mb-0 font-bold fs-24 text-second">{formatPrice(totalPrice)}</p>
                    </div>
                  </div>

                  <Link
                    to="/checkout" className="d-flex w-100 align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 mt-4 shadow2 border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z" fill="white" />
                      <path opacity="0.5" d="M2.08358 2.75109C2.14951 2.56347 2.28727 2.40972 2.46654 2.32365C2.64582 2.23757 2.85194 2.22622 3.03958 2.29209L3.34058 2.39809C3.95758 2.61509 4.48058 2.79909 4.89358 3.00109C5.33358 3.21809 5.71158 3.48409 5.99558 3.90009C6.27758 4.31209 6.39458 4.76509 6.44758 5.26209C6.47158 5.48409 6.48458 5.73009 6.49158 6.00009H17.1296C18.8146 6.00009 20.3316 6.00009 20.7756 6.57709C21.2196 7.15409 21.0456 8.02409 20.6986 9.76309L20.1986 12.1881C19.8836 13.7161 19.7266 14.4811 19.1746 14.9301C18.6226 15.3801 17.8426 15.3801 16.2816 15.3801H10.9786C8.18858 15.3801 6.79458 15.3801 5.92858 14.4661C5.06258 13.5521 4.99858 12.5821 4.99858 9.64009V7.03809C4.99858 6.29809 4.99858 5.80309 4.95658 5.42309C4.91658 5.06009 4.84758 4.87809 4.75658 4.74609C4.66958 4.61709 4.53658 4.49609 4.23258 4.34809C3.90958 4.19009 3.47058 4.03409 2.80258 3.79909L2.54258 3.70809C2.44947 3.67555 2.3637 3.62496 2.29017 3.55923C2.21664 3.49349 2.1568 3.4139 2.11407 3.32501C2.07135 3.23612 2.04657 3.13967 2.04117 3.04119C2.03576 2.94271 2.04983 2.84413 2.08258 2.75109H2.08358Z" fill="white" />
                      <path d="M13.75 9C13.75 8.80109 13.671 8.61032 13.5303 8.46967C13.3897 8.32902 13.1989 8.25 13 8.25C12.8011 8.25 12.6103 8.32902 12.4697 8.46967C12.329 8.61032 12.25 8.80109 12.25 9V10.25H11C10.8011 10.25 10.6103 10.329 10.4697 10.4697C10.329 10.6103 10.25 10.8011 10.25 11C10.25 11.1989 10.329 11.3897 10.4697 11.5303C10.6103 11.671 10.8011 11.75 11 11.75H12.25V13C12.25 13.1989 12.329 13.3897 12.4697 13.5303C12.6103 13.671 12.8011 13.75 13 13.75C13.1989 13.75 13.3897 13.671 13.5303 13.5303C13.671 13.3897 13.75 13.1989 13.75 13V11.75H15C15.1989 11.75 15.3897 11.671 15.5303 11.5303C15.671 11.3897 15.75 11.1989 15.75 11C15.75 10.8011 15.671 10.6103 15.5303 10.4697C15.3897 10.329 15.1989 10.25 15 10.25H13.75V9Z" fill="white" />
                    </svg>
                    <p className="mb-0 fw-bold text-white">تسویه حساب</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* مودال تایید حذف تک محصول */}
      <ConfirmModal
        isOpen={!!confirmItem}
        title="حذف محصول"
        message={`آیا از حذف "${confirmItem?.title}" از سبد مطمئنی؟`}
        onConfirm={handleConfirmRemove}
        onCancel={() => setConfirmItem(null)}
      />

      {/* مودال خالی کردن کل سبد */}
      <ConfirmModal
        isOpen={confirmClear}
        title="خالی کردن سبد"
        message="آیا مطمئنی می‌خوای همه محصولات سبد رو حذف کنی؟"
        onConfirm={handleConfirmClear}
        onCancel={() => setConfirmClear(false)}
      />
    </main>
  );
}