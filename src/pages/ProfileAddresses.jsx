// src/pages/ProfileAddresses.jsx
import ProfileSidebar from '../components/profile/ProfileSidebar';

const addresses = [
  {
    id: 1,
    title: 'خانه',
    fullAddress: 'تهران، شریعتی، نبش کودکان غزه، پلاک ۵۰ - کدپستی: ۱۲۳۴۵۶۷۸۸۹۰',
    receiver: 'عطا حیدری',
    phone: '۰۹۱۲۳۴۵۶۷۸۹',
    isDefault: true,
  },
];

export default function ProfileAddresses() {
  return (
    <main className="mt-4 pb-5 mb-5">
      <section className="mb-5 pb-5" id="profile">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-4">
            <ProfileSidebar />

            <div className="flex-grow-1">
              <div className="rounded-22 p-4 bg-white shadow6">
                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path opacity="0.5" d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#27817A" />
                      <circle cx="12" cy="9" r="3" fill="white" />
                    </svg>
                    <h3 className="font-bold fs-18 mb-0">آدرس‌های من</h3>
                  </div>
                  <button className="bg-gradient-main text-white rounded-14 border-0 py-2 px-3 fs-13 fw-bold">
                    + آدرس جدید
                  </button>
                </div>

                <div className="row g-3">
                  {addresses.map((addr) => (
                    <div key={addr.id} className="col-md-6">
                      <div className="border rounded-14 p-3 position-relative">
                        {addr.isDefault && (
                          <span className="position-absolute top-0 end-0 bg-second2 text-white fs-10 px-2 py-1 rounded-bl-14">
                            پیش‌فرض
                          </span>
                        )}
                        <p className="font-bold fs-14 mb-2">{addr.title}</p>
                        <p className="fs-13 text-gray mb-2">{addr.fullAddress}</p>
                        <p className="fs-12 mb-1">
                          <span className="text-gray">گیرنده:</span> {addr.receiver}
                        </p>
                        <p className="fs-12 mb-3">
                          <span className="text-gray">موبایل:</span> {addr.phone}
                        </p>
                        <div className="d-flex gap-2">
                          <button className="border rounded-8 py-1 px-3 fs-12 bg-white">ویرایش</button>
                          <button className="border rounded-8 py-1 px-3 fs-12 bg-white text-danger">حذف</button>
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