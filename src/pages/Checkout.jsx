// src/pages/Checkout.jsx
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

function formatPrice(num) {
  if (!num || num === 0) return '۰';
  return num.toLocaleString('fa-IR');
}

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1: آدرس، 2: پرداخت، 3: موفق
  const [form, setForm] = useState({
    fullName: user?.name || '',
    phone: user?.phone || '',
    province: 'تهران',
    city: 'تهران',
    address: '',
    postalCode: '',
    paymentMethod: 'zarinpal',
  });

  const [orderNumber] = useState(() => Math.floor(100000 + Math.random() * 900000));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (!form.address.trim() || !form.postalCode.trim()) {
      showToast('لطفا آدرس و کد پستی را کامل وارد کنید', 'error');
      return;
    }
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      showToast('سبد خرید خالی است', 'error');
      return;
    }
    setStep(3);
    clearCart();
    showToast('سفارش با موفقیت ثبت شد', 'success');
  };

  // سبد خالی
  if (cart.length === 0 && step !== 3) {
    return (
      <main className="mt-4 position-relative">
        <div className="container py-5 text-center">
          <div className="bg-white rounded-21 shadow10 p-5">
            <div className="mb-4" style={{ fontSize: 80 }}>🛒</div>
            <h2 className="font-bold fs-20 mb-3">سبد خرید خالی است</h2>
            <p className="text-gray mb-4">برای تسویه حساب ابتدا محصولی به سبد اضافه کن</p>
            <Link
              to="/products"
              className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 text-decoration-none"
            >
              <p className="mb-0 fw-bold text-white">مشاهده محصولات</p>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // صفحه موفقیت
  if (step === 3) {
    return (
      <main className="mt-4 position-relative">
        <div className="container py-5 text-center">
          <div className="bg-white rounded-21 shadow10 p-5" style={{ maxWidth: 600, margin: '0 auto' }}>
            <div className="d-flex justify-content-center mb-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 90, height: 90, backgroundColor: '#d1fae5' }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#10b981" />
                </svg>
              </div>
            </div>
            <h2 className="font-bold fs-24 mb-3">سفارش شما با موفقیت ثبت شد!</h2>
            <p className="fs-14 text-gray mb-2">
              شماره سفارش: <span className="font-bold text-main">#{orderNumber}</span>
            </p>
            <p className="fs-14 text-gray mb-4">
              همکاران ما به زودی برای هماهنگی با شما تماس می‌گیرند.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link
                to="/orders"
                className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 text-decoration-none"
              >
                <p className="mb-0 fw-bold text-white">مشاهده سفارشات</p>
              </Link>
              <Link
                to="/"
                className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-white border py-3 px-4 text-decoration-none"
              >
                <p className="mb-0 fw-bold text-dark">بازگشت به خانه</p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="mt-4 position-relative">
      <section className="py-4">
        <div className="container">
          {/* مراحل */}
          <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
            <div className={`d-flex align-items-center gap-2 ${step >= 1 ? 'text-main' : 'text-gray'}`}>
              <span
                className={`rounded-circle d-flex align-items-center justify-content-center ${
                  step >= 1 ? 'bg-gradient-main text-white' : 'bg-gray5 text-gray'
                }`}
                style={{ width: 32, height: 32 }}
              >
                ۱
              </span>
              <span className="fs-14 fw-bold">آدرس</span>
            </div>
            <div className="bg-gray4" style={{ width: 60, height: 2 }}></div>
            <div className={`d-flex align-items-center gap-2 ${step >= 2 ? 'text-main' : 'text-gray'}`}>
              <span
                className={`rounded-circle d-flex align-items-center justify-content-center ${
                  step >= 2 ? 'bg-gradient-main text-white' : 'bg-gray5 text-gray'
                }`}
                style={{ width: 32, height: 32 }}
              >
                ۲
              </span>
              <span className="fs-14 fw-bold">پرداخت</span>
            </div>
          </div>

          <div className="row g-4">
            {/* فرم */}
            <div className="col-lg-8">
              {step === 1 && (
                <div className="bg-white rounded-21 shadow10 p-4">
                  <h3 className="font-bold fs-18 mb-4">آدرس دریافت</h3>
                  <form onSubmit={handleAddressSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="fs-13 font-bold mb-2 d-block">نام و نام خانوادگی گیرنده</label>
                        <input
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                          placeholder="نام و نام خانوادگی"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="fs-13 font-bold mb-2 d-block">شماره موبایل</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="fs-13 font-bold mb-2 d-block">استان</label>
                        <select
                          name="province"
                          value={form.province}
                          onChange={handleChange}
                          className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                        >
                          <option>تهران</option>
                          <option>اصفهان</option>
                          <option>کرمان</option>
                          <option>مشهد</option>
                          <option>شیراز</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="fs-13 font-bold mb-2 d-block">شهر</label>
                        <select
                          name="city"
                          value={form.city}
                          onChange={handleChange}
                          className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                        >
                          <option>تهران</option>
                          <option>اصفهان</option>
                          <option>کرمان</option>
                          <option>مشهد</option>
                          <option>شیراز</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label className="fs-13 font-bold mb-2 d-block">آدرس کامل</label>
                        <textarea
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          rows={3}
                          className="rounded-13 bg-gray2 border-0 outline-none d-block w-100 p-3 resize-none"
                          placeholder="خیابان، کوچه، پلاک، واحد"
                          required
                        ></textarea>
                      </div>
                      <div className="col-md-6">
                        <label className="fs-13 font-bold mb-2 d-block">کد پستی</label>
                        <input
                          name="postalCode"
                          value={form.postalCode}
                          onChange={handleChange}
                          className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                          placeholder="۱۰ رقم"
                          maxLength={10}
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="d-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 mt-4 border-0"
                    >
                      <p className="mb-0 fw-bold text-white">ادامه به پرداخت</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </form>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white rounded-21 shadow10 p-4">
                  <h3 className="font-bold fs-18 mb-4">روش پرداخت</h3>
                  <form onSubmit={handlePaymentSubmit}>
                    <div className="d-flex flex-column gap-3">
                      {[
                        { id: 'zarinpal', label: 'زرین‌پال', desc: 'پرداخت امن از درگاه زرین‌پال' },
                        { id: 'mellat', label: 'بانک ملت', desc: 'پرداخت از طریق درگاه بانک ملت' },
                        { id: 'saman', label: 'بانک سامان', desc: 'پرداخت از طریق درگاه بانک سامان' },
                        { id: 'cod', label: 'پرداخت در محل', desc: 'پرداخت هنگام تحویل کالا' },
                      ].map((method) => (
                        <label
                          key={method.id}
                          className={`d-flex align-items-center gap-3 border rounded-14 p-3 cursor-pointer ${
                            form.paymentMethod === method.id ? 'border-main bg-second3' : ''
                          }`}
                          style={{ cursor: 'pointer' }}
                        >
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={method.id}
                            checked={form.paymentMethod === method.id}
                            onChange={handleChange}
                          />
                          <div>
                            <p className="fs-14 font-bold mb-1">{method.label}</p>
                            <p className="fs-12 text-gray mb-0">{method.desc}</p>
                          </div>
                        </label>
                      ))}
                    </div>

                    <div className="d-flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="d-flex align-items-center justify-content-center gap-2 rounded-14 bg-white border py-3 px-4"
                      >
                        <p className="mb-0 fw-bold text-dark">بازگشت</p>
                      </button>
                      <button
                        type="submit"
                        className="flex-grow-1 d-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 border-0"
                      >
                        <p className="mb-0 fw-bold text-white">ثبت سفارش و پرداخت</p>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* خلاصه سفارش */}
            <div className="col-lg-4">
              <div className="bg-white rounded-21 shadow10 p-4 position-sticky" style={{ top: 20 }}>
                <h3 className="font-bold fs-16 mb-4">خلاصه سفارش</h3>
                <div className="mb-3" style={{ maxHeight: 300, overflowY: 'auto' }}>
                  {cart.map((item) => (
                    <div key={item.id} className="d-flex align-items-center gap-3 py-2 border-bottom">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: 50, height: 50, objectFit: 'contain' }}
                      />
                      <div className="flex-grow-1">
                        <p className="fs-13 mb-1">{item.title}</p>
                        <p className="fs-12 text-gray mb-0">
                          {item.quantity} × {formatPrice(item.price)} تومان
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="fs-13 text-gray mb-0">جمع کل:</p>
                  <p className="fs-13 mb-0">{formatPrice(totalPrice)} تومان</p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <p className="fs-13 text-gray mb-0">هزینه ارسال:</p>
                  <p className="fs-13 mb-0">رایگان</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p className="fs-14 font-bold mb-0">مبلغ قابل پرداخت:</p>
                  <p className="fs-16 font-bold text-main mb-0">{formatPrice(totalPrice)} تومان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}