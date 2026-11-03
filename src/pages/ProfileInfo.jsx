// src/pages/ProfileInfo.jsx
import { useAuth } from '../context/AuthContext';
import ProfileSidebar from '../components/profile/ProfileSidebar';

export default function ProfileInfo() {
  const { user } = useAuth();

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
                    <path opacity="0.5" d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#27817A" />
                    <path d="M12 14C6.99 14 3 15.79 3 19.5V22H21V19.5C21 15.79 17.01 14 12 14Z" fill="#27817A" />
                  </svg>
                  <h3 className="font-bold fs-18 mb-0">اطلاعات حساب کاربری</h3>
                </div>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="bg-gray2 rounded-14 p-3">
                      <p className="fs-12 text-gray mb-1">نام و نام خانوادگی</p>
                      <p className="fs-14 fw-bold mb-0">{user?.name || '—'}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-gray2 rounded-14 p-3">
                      <p className="fs-12 text-gray mb-1">شماره موبایل</p>
                      <p className="fs-14 fw-bold mb-0">{user?.phone || '—'}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-gray2 rounded-14 p-3">
                      <p className="fs-12 text-gray mb-1">ایمیل</p>
                      <p className="fs-14 fw-bold mb-0" dir="ltr">{user?.email || '—'}</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-gray2 rounded-14 p-3">
                      <p className="fs-12 text-gray mb-1">کد ملی</p>
                      <p className="fs-14 fw-bold mb-0">—</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="bg-gray2 rounded-14 p-3">
                      <p className="fs-12 text-gray mb-1">آدرس</p>
                      <p className="fs-14 fw-bold mb-0">—</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <button className="bg-gradient-main text-white rounded-14 border-0 py-3 px-4 fs-14 fw-bold">
                    ویرایش اطلاعات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}