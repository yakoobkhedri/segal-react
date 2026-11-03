// src/pages/ProfileHistory.jsx
import ProfileSidebar from '../components/profile/ProfileSidebar';

const history = [
  {
    id: 1,
    orderNumber: '۱۲۳۴۵۶',
    date: '۹ خرداد ۱۴۰۲',
    status: 'تکمیل شده',
    statusColor: 'bg-second2',
    total: '۲۱،۳۵۰،۰۰۰',
    items: 2,
  },
  {
    id: 2,
    orderNumber: '۱۲۳۴۵۷',
    date: '۵ خرداد ۱۴۰۲',
    status: 'در حال پردازش',
    statusColor: 'bg-warning text-dark',
    total: '۸،۵۰۰،۰۰۰',
    items: 1,
  },
];

export default function ProfileHistory() {
  return (
    <main className="mt-4 pb-5 mb-5">
      <section className="mb-5 pb-5" id="profile">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-4">
            <ProfileSidebar />

            <div className="flex-grow-1">
              <div className="rounded-22 p-4 bg-white shadow6">
                <div className="d-flex align-items-center gap-2 border-bottom pb-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path opacity="0.5" d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3Z" fill="#27817A" />
                  </svg>
                  <h3 className="font-bold fs-18 mb-0">تاریخچه خرید</h3>
                </div>

                <div className="d-flex flex-column gap-3">
                  {history.map((item) => (
                    <div key={item.id} className="border rounded-14 p-3">
                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2">
                        <div>
                          <p className="fs-14 mb-1">
                            <span className="font-bold">سفارش</span> {item.orderNumber}
                          </p>
                          <p className="fs-12 text-gray mb-0">{item.date} • {item.items} محصول</p>
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <span className={`fs-11 ${item.statusColor} rounded-pill py-1 px-3`}>
                            {item.status}
                          </span>
                          <p className="fs-14 font-bold mb-0">{item.total} تومان</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}