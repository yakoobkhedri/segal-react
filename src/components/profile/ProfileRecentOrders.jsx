// src/components/profile/ProfileRecentOrders.jsx
import { Link } from 'react-router-dom';
import { StatusIcon, PriceIcon } from './ProfileIcons';

const orders = [
  {
    id: 1,
    orderNumber: '۱۲۳۴۵۶',
    status: 'completed',
    statusLabel: 'تکمیل شده',
    statusColor: 'bg-second2',
    date: '۱۲ اسفند ۱۴۰۲',
    address: 'تهران، تهران، شریعتی، نبش کودکان غزه، پلاک ۵۰',
    price: '21،350،000',
    type: 'single',
    images: ['/assets/img/order.png'],
  },
  {
    id: 2,
    orderNumber: '۱۲۳۴۵۶',
    status: 'processing',
    statusLabel: 'در حال پردازش',
    statusColor: 'bg-gray4',
    date: '۱۲ اسفند ۱۴۰۲',
    address: 'تهران، تهران، شریعتی، نبش کودکان غزه، پلاک ۵۰',
    price: '21،350،000',
    type: 'multi',
    images: ['/assets/img/sm-pr.png', '/assets/img/sm-pr.png', '/assets/img/sm-pr.png'],
  },
  {
    id: 3,
    orderNumber: '۱۲۳۴۵۶',
    status: 'canceled',
    statusLabel: 'لغو شده',
    statusColor: 'bg-danger',
    date: '۱۲ اسفند ۱۴۰۲',
    address: 'تهران، تهران، شریعتی، نبش کودکان غزه، پلاک ۵۰',
    price: '21،350،000',
    type: 'single',
    images: ['/assets/img/order.png'],
  },
];

function MultiImages({ images }) {
  return (
    <div className="flex-shrink-0" style={{ minWidth: 80 }}>
      <div className="d-flex align-items-center gap-2 mb-2">
        <img alt="product" src={images[0]} className="img-fluid" style={{ width: 35, height: 35, objectFit: 'contain' }} />
        <img alt="product" src={images[1]} className="img-fluid" style={{ width: 35, height: 35, objectFit: 'contain' }} />
      </div>
      <div className="d-flex align-items-center gap-2">
        <img alt="product" src={images[2]} className="img-fluid" style={{ width: 35, height: 35, objectFit: 'contain' }} />
        <Link to="/orders" className="d-flex align-items-center justify-content-center border rounded-5 text-dark text-decoration-none" style={{ width: 35, height: 24 }}>
          <p className="mb-0 text-center">...</p>
        </Link>
      </div>
    </div>
  );
}

function OrderItem({ order, isLast }) {
  return (
    <div className={`d-flex flex-column flex-md-row justify-content-between align-items-end align-items-md-start gap-3 py-3 ${!isLast ? 'border-bottom border-2' : ''}`}>
      <div className="d-flex gap-4 w-100">
        {order.type === 'multi' ? (
          <div className="ms-3 ms-md-0"><MultiImages images={order.images} /></div>
        ) : (
          <img alt="order" src={order.images[0]} className="img-fluid flex-shrink-0" style={{ width: 60, height: 60, objectFit: 'contain' }} />
        )}
        <div className="mt-2">
          <div className={`fs-11 d-inline-flex align-items-center justify-content-center gap-2 ${order.statusColor} rounded-9 py-1 px-2 text-white fw-300`}>
            <StatusIcon status={order.status} />
            <p className="mb-0">{order.statusLabel}</p>
          </div>
          <div className="d-flex flex-wrap align-items-center gap-2 mt-2">
            <p className="mb-0 fs-14">{order.orderNumber}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none"><rect opacity="0.6" x="0.615234" y="0.5" width="3" height="3" fill="black" /></svg>
            <p className="mb-0 fs-12 text-gray">{order.date}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none"><rect opacity="0.6" x="0.615234" y="0.5" width="3" height="3" fill="black" /></svg>
            <p className="mb-0 fs-12 text-gray">{order.address}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex align-items-end gap-1 mt-2">
          <p className="mb-0 fs-18 font-bold">{order.price}</p>
          <PriceIcon />
        </div>
        <Link to="/orders" className="d-flex align-items-center gap-2 text-gray fs-14 mt-2 text-decoration-none">
          <p className="mb-0 flex-shrink-0">جزئیات سفارش</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g opacity="0.3"><path d="M5 4L1 8L5 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></g></svg>
        </Link>
      </div>
    </div>
  );
}

export default function ProfileRecentOrders() {
  return (
    <div className="rounded-22 px-4 py-3 bg-white shadow2 mt-4">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5.00488" cy="5" r="5" fill="#27817A" /></svg>
          <p className="mb-0 fs-14"><span className="font-bold">آخرین</span> سفارشات</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-100 title-line" height="2" viewBox="0 0 864 2" fill="none">
        <line opacity="0.3" x1="0.75" y1="1.25" x2="863.25" y2="1.24992" stroke="black" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="863.255" y1="0.75" x2="712.755" y2="0.749987" stroke="url(#recent-grad)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="recent-grad" x1="864.005" y1="-0.88251" x2="863.902" y2="3.52766" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B6CCC" /><stop offset="1" stopColor="#4834AC" />
          </linearGradient>
        </defs>
      </svg>
      <div>
        {orders.map((order, idx) => (
          <OrderItem key={order.id} order={order} isLast={idx === orders.length - 1} />
        ))}
      </div>
    </div>
  );
}