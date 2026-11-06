// src/pages/MyOrders.jsx
import { Link } from 'react-router-dom';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import { useOrders } from '../context/OrderContext';

function formatPrice(num) {
  if (!num || num === 0) return '۰';
  return num.toLocaleString('fa-IR');
}

function OrderCard({ order }) {
  return (
    <div className="rounded-22 p-4 bg-white shadow6 mb-4">
      {/* هدر سفارش */}
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5.00488" cy="5" r="5" fill="#27817A" />
          </svg>
          <p className="mb-0 fs-14">
            <span className="font-bold">سفارش</span> {order.orderNumber}
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <p className="fs-14 text-gray mb-0">{order.date}</p>
          <div className={`fs-11 rounded-pill py-1 px-3 text-white fw-300 ${
            order.status === 'تکمیل شده' ? 'bg-second2'
              : order.status === 'لغو شده' ? 'bg-danger'
              : 'bg-gray4'
          }`}>
            {order.status}
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" className="w-100 title-line" height="2" viewBox="0 0 864 2" fill="none">
        <line opacity="0.3" x1="0.75" y1="1.25" x2="863.25" y2="1.25" stroke="black" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="863.255" y1="0.75" x2="712.755" y2="0.75" stroke="url(#orders-grad)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="orders-grad" x1="864.005" y1="-0.88251" x2="863.902" y2="3.52766" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B6CCC" />
            <stop offset="1" stopColor="#4834AC" />
          </linearGradient>
        </defs>
      </svg>

      {/* لیست محصولات */}
      <div>
        {order.products.map((product, idx) => (
          <div key={`${product.id}-${idx}`} className={`d-flex flex-column flex-sm-row justify-content-between align-items-sm-start align-items-end py-3 ${idx !== order.products.length - 1 ? 'border-bottom border-2' : ''}`}>
            <div className="d-flex gap-4 w-100">
              <img alt={product.title} src={product.image} className="img-fluid" style={{ width: 80, height: 80, objectFit: 'contain' }} />
              <div className="mt-2">
                <p className="font-bold fs-14 mb-2">{product.title}</p>
                <div className="d-flex flex-wrap align-items-center gap-2">
                  {product.category && <p className="mb-0 fs-14 text-gray">{product.category}</p>}
                  {product.brand && <p className="mb-0 fs-12 text-gray">{product.brand}</p>}
                  {product.color && <p className="mb-0 fs-12 text-gray">رنگ: {product.color}</p>}
                  <p className="mb-0 fs-12 text-gray">تعداد: {product.quantity}</p>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-end gap-1 mt-2">
              <p className="mb-0 fs-18 font-bold">{formatPrice(product.price * product.quantity)} تومان</p>
            </div>
          </div>
        ))}
      </div>

      {/* اطلاعات ارسال */}
      <div className="py-4 border-bottom border-2">
        <div className="d-flex flex-column flex-sm-row text-center align-items-center justify-content-between mb-3">
          <p className="fw-bold fs-14 mb-0">آدرس دریافت:</p>
          <p className="fs-14 mb-0 text-secondary">{order.address}</p>
        </div>
        <div className="d-flex flex-column flex-sm-row text-center align-items-center justify-content-between">
          <p className="fw-bold fs-14 mb-0">وضعیت مرسوله:</p>
          <p className="mb-0 text-secondary fs-14">{order.shippingStatus || 'در حال پردازش'}</p>
        </div>
      </div>

      {/* هزینه‌ها */}
      <div className="pt-4">
        <div className="d-flex justify-content-between mb-2">
          <p className="fw-bold fs-14 mb-0">هزینه محصولات:</p>
          <p className="fs-14 mb-0 text-secondary">{formatPrice(order.productCost)} تومان</p>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <p className="fw-bold fs-14 mb-0">هزینه ارسال:</p>
          <p className="fs-14 mb-0 text-secondary">{order.shippingCost === 0 ? 'رایگان' : `${formatPrice(order.shippingCost)} تومان`}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fw-bold fs-14 mb-0">هزینه کل:</p>
          <p className="fs-14 font-bold mb-0">{formatPrice(order.totalCost)} تومان</p>
        </div>
      </div>
    </div>
  );
}

export default function MyOrders() {
  const { orders } = useOrders();

  return (
    <main className="mt-4 pb-5 mb-5">
      <section className="mb-5 pb-5" id="profile">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-4">
            <ProfileSidebar />
            <div className="flex-grow-1">
              {orders.length === 0 ? (
                <div className="rounded-22 p-5 bg-white shadow6 text-center">
                  <div className="mb-4" style={{ fontSize: 80 }}>📦</div>
                  <h3 className="font-bold fs-20 mb-3">هنوز سفارشی ثبت نکرده‌اید</h3>
                  <p className="text-gray mb-4">سفارشات شما اینجا نمایش داده می‌شوند</p>
                  <Link to="/products" className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 text-decoration-none">
                    <p className="mb-0 fw-bold text-white">مشاهده محصولات</p>
                  </Link>
                </div>
              ) : (
                orders.map((order) => <OrderCard key={order.orderNumber} order={order} />)
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}