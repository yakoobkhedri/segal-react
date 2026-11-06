// src/components/profile/ProfileRecentOrders.jsx
import { Link } from 'react-router-dom';
import { useOrders } from '../../context/OrderContext';
import { StatusIcon, PriceIcon } from './ProfileIcons';

function formatPrice(num) {
  if (!num || num === 0) return '۰';
  return Number(num).toLocaleString('fa-IR');
}

// نگاشت وضعیت سفارش به آیکون و رنگ
const STATUS_MAP = {
  'تکمیل شده': { icon: 'completed', color: 'bg-second2', label: 'تکمیل شده' },
  'تحویل داده شده': { icon: 'completed', color: 'bg-second2', label: 'تحویل داده شده' },
  'در حال پردازش': { icon: 'processing', color: 'bg-gray4', label: 'در حال پردازش' },
  'در حال ارسال': { icon: 'processing', color: 'bg-warning text-dark', label: 'در حال ارسال' },
  'لغو شده': { icon: 'canceled', color: 'bg-danger', label: 'لغو شده' },
};

function MultiImages({ images }) {
  const shown = images.slice(0, 3);
  const rest = images.length - 3;

  return (
    <div className="flex-shrink-0" style={{ minWidth: 80 }}>
      <div className="d-flex align-items-center gap-2 mb-2">
        {shown.slice(0, 2).map((img, i) => (
          <img
            key={i}
            alt="product"
            src={img}
            className="img-fluid"
            style={{ width: 35, height: 35, objectFit: 'contain' }}
          />
        ))}
      </div>
      <div className="d-flex align-items-center gap-2">
        {shown[2] && (
          <img
            alt="product"
            src={shown[2]}
            className="img-fluid"
            style={{ width: 35, height: 35, objectFit: 'contain' }}
          />
        )}
        {rest > 0 && (
          <Link
            to="/orders"
            className="d-flex align-items-center justify-content-center border rounded-5 text-dark text-decoration-none"
            style={{ width: 35, height: 24 }}
          >
            <p className="mb-0 text-center fs-11">+{rest}</p>
          </Link>
        )}
      </div>
    </div>
  );
}

function OrderItem({ order, isLast }) {
  const statusInfo = STATUS_MAP[order.status] || STATUS_MAP['در حال پردازش'];
  const images = order.products?.map((p) => p.image) || ['/assets/img/order.png'];
  const isMulti = images.length > 1;

  // محاسبه مبلغ کل (اگر در سفارش نبود)
  const total =
    order.totalCost ||
    order.products?.reduce((sum, p) => sum + (p.price || 0) * (p.quantity || 1), 0) ||
    0;

  // عنوان محصول اول (برای تک محصول)
  const firstProductTitle = order.products?.[0]?.title || 'سفارش';

  return (
    <div
      className={`d-flex flex-column flex-md-row justify-content-between align-items-end align-items-md-start gap-3 py-3 ${
        !isLast ? 'border-bottom border-2' : ''
      }`}
    >
      <div className="d-flex gap-4 w-100">
        {isMulti ? (
          <div className="ms-3 ms-md-0">
            <MultiImages images={images} />
          </div>
        ) : (
          <img
            alt="order"
            src={images[0]}
            className="img-fluid flex-shrink-0"
            style={{ width: 60, height: 60, objectFit: 'contain' }}
          />
        )}
        <div className="mt-2">
          <div
            className={`fs-11 d-inline-flex align-items-center justify-content-center gap-2 ${statusInfo.color} rounded-9 py-1 px-2 text-white fw-300`}
          >
            <StatusIcon status={statusInfo.icon} />
            <p className="mb-0">{statusInfo.label}</p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2 mt-2">
            <p className="mb-0 fs-14">{order.orderNumber}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
              <rect opacity="0.6" x="0.615234" y="0.5" width="3" height="3" fill="black" />
            </svg>
            <p className="mb-0 fs-12 text-gray">{order.date}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
              <rect opacity="0.6" x="0.615234" y="0.5" width="3" height="3" fill="black" />
            </svg>
            <p className="mb-0 fs-12 text-gray text-truncate" style={{ maxWidth: 250 }}>
              {isMulti ? `${order.products?.length} محصول` : firstProductTitle}
            </p>
          </div>
        </div>
      </div>
      <div className="text-end">
        <div className="d-flex align-items-end gap-1 mt-2">
          <p className="mb-0 fs-18 font-bold">{formatPrice(total)}</p>
          <PriceIcon />
        </div>
        <Link
          to="/orders"
          className="d-flex align-items-center gap-2 text-gray fs-14 mt-2 text-decoration-none"
        >
          <p className="mb-0 flex-shrink-0">جزئیات سفارش</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g opacity="0.3">
              <path d="M5 4L1 8L5 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function ProfileRecentOrders() {
  const { orders } = useOrders();
  const recent = orders.slice(0, 3); // فقط ۳ سفارش آخر

  return (
    <div className="rounded-22 px-4 py-3 bg-white shadow2 mt-4">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5.00488" cy="5" r="5" fill="#27817A" />
          </svg>
          <p className="mb-0 fs-14">
            <span className="font-bold">آخرین</span> سفارشات
          </p>
        </div>
        {orders.length > 3 && (
          <Link to="/orders" className="fs-12 text-main text-decoration-none fw-bold">
            مشاهده همه ({orders.length.toLocaleString('fa-IR')})
          </Link>
        )}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" className="w-100 title-line" height="2" viewBox="0 0 864 2" fill="none">
        <line opacity="0.3" x1="0.75" y1="1.25" x2="863.25" y2="1.24992" stroke="black" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="863.255" y1="0.75" x2="712.755" y2="0.749987" stroke="url(#recent-grad)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="recent-grad" x1="864.005" y1="-0.88251" x2="863.902" y2="3.52766" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B6CCC" />
            <stop offset="1" stopColor="#4834AC" />
          </linearGradient>
        </defs>
      </svg>

      {recent.length === 0 ? (
        <div className="text-center py-5">
          <p className="fs-14 text-gray mb-3">هنوز سفارشی ثبت نکرده‌اید</p>
          <Link
            to="/products"
            className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-2 px-4 text-decoration-none"
          >
            <p className="mb-0 fw-bold text-white fs-14">مشاهده محصولات</p>
          </Link>
        </div>
      ) : (
        <div>
          {recent.map((order, idx) => (
            <OrderItem
              key={order.orderNumber}
              order={order}
              isLast={idx === recent.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}