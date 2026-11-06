// src/components/profile/ProfileCartPreview.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useAddresses } from '../../context/AddressContext';
function formatPrice(num) {
  if (!num || num === 0) return '۰';
  return num.toLocaleString('fa-IR');
}

function CartIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M6.25 15C6.58152 15 6.89946 15.1317 7.13388 15.3661C7.3683 15.6005 7.5 15.9185 7.5 16.25C7.5 16.5815 7.3683 16.8995 7.13388 17.1339C6.89946 17.3683 6.58152 17.5 6.25 17.5C5.91848 17.5 5.60054 17.3683 5.36612 17.1339C5.1317 16.8995 5 16.5815 5 16.25C5 15.9185 5.1317 15.6005 5.36612 15.3661C5.60054 15.1317 5.91848 15 6.25 15ZM13.75 15C14.0815 15 14.3995 15.1317 14.6339 15.3661C14.8683 15.6005 15 15.9185 15 16.25C15 16.5815 14.8683 16.8995 14.6339 17.1339C14.3995 17.3683 14.0815 17.5 13.75 17.5C13.4185 17.5 13.1005 17.3683 12.8661 17.1339C12.6317 16.8995 12.5 16.5815 12.5 16.25C12.5 15.9185 12.6317 15.6005 12.8661 15.3661C13.1005 15.1317 13.4185 15 13.75 15Z"
        fill="white"
      />
      <path
        opacity="0.5"
        d="M1.73648 2.29254C1.79142 2.13619 1.90622 2.00806 2.05561 1.93633C2.20501 1.8646 2.37678 1.85514 2.53315 1.91004L2.78398 1.99837C3.29815 2.1792 3.73398 2.33254 4.07815 2.50087C4.44481 2.6817 4.75981 2.90337 4.99648 3.25004C5.23148 3.59337 5.32898 3.97087 5.37315 4.38504C5.39315 4.57004 5.40398 4.77504 5.40981 5.00004H14.2748C15.679 5.00004 16.9431 5.00004 17.3131 5.48087C17.6831 5.9617 17.5381 6.6867 17.249 8.13587L16.8323 10.1567C16.5698 11.43 16.439 12.0675 15.979 12.4417C15.519 12.8167 14.869 12.8167 13.5681 12.8167H9.14898C6.82398 12.8167 5.66231 12.8167 4.94065 12.055C4.21898 11.2934 4.16565 10.485 4.16565 8.03337V5.86504C4.16565 5.24837 4.16565 4.83587 4.13065 4.5192C4.09731 4.2167 4.03981 4.06504 3.96398 3.95504C3.89148 3.84754 3.78065 3.7467 3.52731 3.62337C3.25815 3.4917 2.89231 3.3617 2.33565 3.16587L2.11898 3.09004C2.04139 3.06292 1.96991 3.02076 1.90864 2.96598C1.84737 2.9112 1.7975 2.84488 1.76189 2.7708C1.72628 2.69672 1.70564 2.61635 1.70113 2.53428C1.69663 2.45222 1.70836 2.37007 1.73565 2.29254H1.73648Z"
        fill="white"
      />
      <path
        d="M11.4577 7.5C11.4577 7.33424 11.3918 7.17527 11.2746 7.05806C11.1574 6.94085 10.9984 6.875 10.8327 6.875C10.6669 6.875 10.508 6.94085 10.3907 7.05806C10.2735 7.17527 10.2077 7.33424 10.2077 7.5V8.54167H9.16602C9.00026 8.54167 8.84128 8.60751 8.72407 8.72473C8.60686 8.84194 8.54102 9.00091 8.54102 9.16667C8.54102 9.33243 8.60686 9.4914 8.72407 9.60861C8.84128 9.72582 9.00026 9.79167 9.16602 9.79167H10.2077V10.8333C10.2077 10.9991 10.2735 11.1581 10.3907 11.2753C10.508 11.3925 10.6669 11.4583 10.8327 11.4583C10.9984 11.4583 11.1574 11.3925 11.2746 11.2753C11.3918 11.1581 11.4577 10.9991 11.4577 10.8333V9.79167H12.4993C12.6651 9.79167 12.8241 9.72582 12.9413 9.60861C13.0585 9.4914 13.1243 9.33243 13.1243 9.16667C13.1243 9.00091 13.0585 8.84194 12.9413 8.72473C12.8241 8.60751 12.6651 8.54167 12.4993 8.54167H11.4577V7.5Z"
        fill="white"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99967 1.66675C6.31801 1.66675 3.33301 4.70508 3.33301 8.45258C3.33301 12.1709 5.46051 16.5109 8.78051 18.0617C9.16211 18.2404 9.57831 18.333 9.99967 18.333C10.421 18.333 10.8372 18.2404 11.2188 18.0617C14.5388 16.5101 16.6663 12.1709 16.6663 8.45341C16.6663 4.70425 13.6813 1.66675 9.99967 1.66675ZM9.99967 5.62508C10.1654 5.62508 10.3244 5.69093 10.4416 5.80814C10.5588 5.92535 10.6247 6.08432 10.6247 6.25008V7.70842H12.083C12.2488 7.70842 12.4077 7.77426 12.5249 7.89147C12.6422 8.00868 12.708 8.16765 12.708 8.33342C12.708 8.49918 12.6422 8.65815 12.5249 8.77536C12.4077 8.89257 12.2488 8.95842 12.083 8.95842H10.6247V10.4167C10.6247 10.5825 10.5588 10.7415 10.4416 10.8587C10.3244 10.9759 10.1654 11.0417 9.99967 11.0417C9.83391 11.0417 9.67494 10.9759 9.55773 10.8587C9.44052 10.7415 9.37467 10.5825 9.37467 10.4167V8.95842H7.91634C7.75058 8.95842 7.59161 8.89257 7.4744 8.77536C7.35719 8.65815 7.29134 8.49918 7.29134 8.33342C7.29134 8.16765 7.35719 8.00868 7.4744 7.89147C7.59161 7.77426 7.75058 7.70842 7.91634 7.70842H9.37467V6.25008C9.37467 6.08432 9.44052 5.92535 9.55773 5.80814C9.67494 5.69093 9.83391 5.62508 9.99967 5.62508Z"
        fill="#27817A"
      />
    </svg>
  );
}

function CartItem({ item }) {
  const discount =
    item.oldPrice > item.price
      ? Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)
      : 0;

  return (
    <div className="d-flex flex-column flex-md-row gap-3 justify-content-between py-4 border-bottom">
      <div className="d-flex gap-5">
        <img
          alt={item.title}
          src={item.image}
          className="img-fluid"
          style={{ width: 80, height: 80, objectFit: 'contain' }}
        />
        <div>
          <Link
            to={`/product/${item.id}`}
            className="font-bold text-dark text-decoration-none"
          >
            {item.title}
          </Link>
          <div className="d-flex align-items-center gap-2 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                opacity="0.5"
                d="M2.815 4.23508C2.5 4.68341 2.5 6.01675 2.5 8.68091V9.99258C2.5 14.6909 6.0325 16.9717 8.24917 17.9392C8.85 18.2017 9.15083 18.3334 10 18.3334C10.85 18.3334 11.15 18.2017 11.7508 17.9392C13.9675 16.9709 17.5 14.6917 17.5 9.99258V8.68091C17.5 6.01591 17.5 4.68341 17.185 4.23508C16.8708 3.78758 15.6183 3.35841 13.1125 2.50091L12.635 2.33758C11.3292 1.89008 10.6767 1.66675 10 1.66675C9.32417 1.66675 8.67083 1.89008 7.365 2.33758L6.8875 2.50008C4.38167 3.35841 3.12917 3.78758 2.815 4.23508Z"
                fill="#27817A"
              />
            </svg>
            <p className="mb-0 text-gray fs-14">موجود در انبار فروشگاه</p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between flex-column">
        <div className="d-flex align-items-center justify-content-end gap-2">
          <span className="w-22 h-22 d-flex align-items-center justify-content-center bg-white border rounded-3 fs-14">
            {item.quantity}
          </span>
          <span className="fs-13 text-gray">عدد</span>
        </div>

        <div className="d-flex align-items-center justify-content-end justify-content-md-start mt-3 mt-md-0 gap-1">
          {discount > 0 && (
            <div className="d-flex align-items-center gap-2">
              <p className="fs-14 text-gray text-decoration-line-through mb-0">
                {formatPrice(item.oldPrice)}
              </p>
              <p className="mb-0 fs-13 fw-bold text-white bg-danger px-2 rounded-pill">
                {discount}٪
              </p>
            </div>
          )}
          <div className="d-flex align-items-end gap-1">
            <p className="fs-20 font-bold mb-0">
              {formatPrice(item.price * item.quantity)}
            </p>
            <p className="mb-0 fs-14 fw-bold">تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfileCartPreview() {
  const { cart, totalPrice } = useCart();
  const { user } = useAuth();

  const { defaultAddress } = useAddresses();

  return (
    <div className="rounded-22 px-4 py-3 bg-white shadow2 mt-4">
      {/* هدر */}
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5.00488" cy="5" r="5" fill="#27817A" />
          </svg>
          <p className="mb-0 fs-14">
            <span className="font-bold">سبد</span> خرید
          </p>
        </div>
        <Link
          to="/cart"
          className="d-flex align-items-center justify-content-center fs-13 gap-2 rounded-7 bg-gradient-main py-2 px-4 shadow2 text-decoration-none"
          style={{ minWidth: 180 }}
        >
          <CartIcon />
          <p className="mb-0 fw-bold text-white">تسویه حساب</p>
        </Link>
      </div>

      {/* خط تیتر */}
      <svg xmlns="http://www.w3.org/2000/svg" className="w-100 title-line" height="2" viewBox="0 0 864 2" fill="none">
        <line
          opacity="0.3"
          x1="0.75"
          y1="1.25"
          x2="863.25"
          y2="1.24992"
          stroke="black"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="863.255"
          y1="0.75"
          x2="712.755"
          y2="0.749987"
          stroke="url(#cart-preview-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="cart-preview-grad" x1="864.005" y1="-0.88251" x2="863.902" y2="3.52766" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B6CCC" />
            <stop offset="1" stopColor="#4834AC" />
          </linearGradient>
        </defs>
      </svg>

      <div>
        {/* آدرس ارسال */}
        <div className="d-flex flex-wrap gap-3 gap-lg-0 align-items-center justify-content-between mt-2">
          <div className="d-flex flex-wrap gap-3 gap-lg-1 align-items-center fs-14">
            <p className="mb-0 fw-bold">آدرس ارسال:</p>
            {defaultAddress ? (
              <p className="mb-0">{defaultAddress.fullAddress}</p>
            ) : (
              <p className="mb-0 text-gray">
                {user?.name ? `${user.name}، آدرسی ثبت نشده` : 'آدرسی ثبت نشده'}
              </p>
            )}
          </div>
          <Link
            to="/profile/addresses"
            className="d-flex align-items-center gap-1 text-decoration-none"
          >
            <LocationIcon />
            <p className="mb-0 text-gray fs-14">
              {defaultAddress ? 'تغییر آدرس' : 'افزودن آدرس'}
            </p>
          </Link>
        </div>

        {/* خط‌چین */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-100" height="1" viewBox="0 0 883 1" fill="none">
          <line
            opacity="0.1"
            x1="4.37114e-08"
            y1="0.5"
            x2="883"
            y2="0.500077"
            stroke="black"
            strokeDasharray="5 5"
          />
        </svg>

        {/* لیست محصولات */}
        <div>
          {cart.length === 0 ? (
            <div className="py-5 text-center">
              <p className="fs-16 text-gray mb-3">سبد خرید شما خالی است</p>
              <Link
                to="/products"
                className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-2 px-4 text-decoration-none"
              >
                <p className="mb-0 fw-bold text-white fs-14">مشاهده محصولات</p>
              </Link>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              {/* جمع کل */}
              <div className="d-flex align-items-center justify-content-between mt-4 pt-3 border-top">
                <p className="mb-0 fs-14 fw-bold">جمع کل:</p>
                <div className="d-flex align-items-end gap-1">
                  <p className="mb-0 fs-18 font-bold text-second">
                    {formatPrice(totalPrice)}
                  </p>
                  <p className="mb-0 fs-13 fw-bold">تومان</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}