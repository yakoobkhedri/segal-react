// src/components/profile/ProfileUserInfo.jsx
import { Link } from 'react-router-dom';

// داده‌های نمونه کاربر
const userInfo = {
  fullName: 'عطا حیدری',
  nationalCode: '۱۲۳۴۵۶۷۸۹۰',
  email: 'hwdrzd@gmail.com',
  phone: '۰۹۱۲۳۴۵۶۷۸',
};

export default function ProfileUserInfo() {
  return (
    <div className="rounded-22 px-4 py-3 bg-white shadow2 mt-4">
      {/* هدر */}
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5.00488" cy="5" r="5" fill="#27817A" />
          </svg>
          <p className="mb-0 fs-14">
            <span className="font-bold">اطلاعات</span> کاربری
          </p>
        </div>
        <div className="d-flex align-items-center gap-2">
          <Link to="/profile/info" className="d-block">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M16.6581 15.7944C17.1224 15.7944 17.5 16.1769 17.5 16.6472C17.5 17.1184 17.1224 17.5 16.6581 17.5H11.8997C11.4355 17.5 11.0579 17.1184 11.0579 16.6472C11.0579 16.1769 11.4355 15.7944 11.8997 15.7944H16.6581ZM13.3582 3.08255L14.5874 4.05899C15.0914 4.45314 15.4275 4.97271 15.5424 5.51916C15.6751 6.12025 15.5336 6.71059 15.1357 7.2212L7.81366 16.6899C7.47763 17.1199 6.98242 17.3618 6.45185 17.3707L3.53366 17.4066C3.37449 17.4066 3.24184 17.2991 3.20647 17.1468L2.54325 14.2712C2.42829 13.7427 2.54325 13.1963 2.87928 12.7752L8.07011 6.05664C8.15854 5.94915 8.31771 5.93213 8.42383 6.01185L10.608 7.74973C10.7495 7.86618 10.9441 7.92889 11.1475 7.90201C11.5808 7.84827 11.8726 7.45411 11.8284 7.03308C11.8018 6.81808 11.6957 6.63892 11.5542 6.50455C11.51 6.46872 9.43193 4.80251 9.43193 4.80251C9.29929 4.69501 9.27276 4.49793 9.37887 4.36446L10.2013 3.29755C10.9618 2.32111 12.2882 2.23153 13.3582 3.08255Z"
                fill="#27817A"
              />
            </svg>
          </Link>
          <p className="mb-0 text-gray fs-14">ویرایش اطلاعات کاربری</p>
        </div>
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
          stroke="url(#user-info-grad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="user-info-grad" x1="864.005" y1="-0.88251" x2="863.902" y2="3.52766" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5B6CCC" />
            <stop offset="1" stopColor="#4834AC" />
          </linearGradient>
        </defs>
      </svg>

      {/* اطلاعات */}
      <div className="px-lg-5 px-2 pt-2">
        <div className="d-flex flex-wrap gap-4 gap-lg-0 align-items-center justify-content-between text-black text-center">
          <div>
            <p className="fw-bold mb-2">نام و نام خانوادگی:</p>
            <p className="mb-0">{userInfo.fullName}</p>
          </div>
          <div>
            <p className="fw-bold mb-2">کدملی:</p>
            <p className="mb-0">{userInfo.nationalCode}</p>
          </div>
          <div>
            <p className="fw-bold mb-2">ایمیل:</p>
            <p className="mb-0" dir="ltr">{userInfo.email}</p>
          </div>
          <div>
            <p className="fw-bold mb-2">شماره موبایل:</p>
            <p className="mb-0">{userInfo.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}