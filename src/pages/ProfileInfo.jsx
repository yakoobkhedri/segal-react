// src/pages/ProfileInfo.jsx
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import ProfileSidebar from '../components/profile/ProfileSidebar';

export default function ProfileInfo() {
  const { user, updateUser } = useAuth();
  const { showToast } = useToast();

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    email: user?.email || '',
    nationalCode: user?.nationalCode || '',
    address: user?.address || '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEditClick = () => {
    // فرم را با مقادیر فعلی کاربر پر کن
    setForm({
      name: user?.name || '',
      phone: user?.phone || '',
      email: user?.email || '',
      nationalCode: user?.nationalCode || '',
      address: user?.address || '',
    });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // اعتبارسنجی
    if (!form.name.trim()) {
      showToast('لطفا نام و نام خانوادگی را وارد کنید', 'error');
      return;
    }

    if (!/^09\d{9}$/.test(form.phone)) {
      showToast('شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد', 'error');
      return;
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showToast('ایمیل وارد شده معتبر نیست', 'error');
      return;
    }

    if (form.nationalCode && !/^\d{10}$/.test(form.nationalCode)) {
      showToast('کد ملی باید ۱۰ رقم باشد', 'error');
      return;
    }

    // به‌روزرسانی کاربر
    if (typeof updateUser !== 'function') {
      showToast('خطا: تابع به‌روزرسانی کاربر یافت نشد', 'error');
      return;
    }

    updateUser({
      name: form.name.trim(),
      phone: form.phone,
      email: form.email.trim(),
      nationalCode: form.nationalCode,
      address: form.address.trim(),
    });

    showToast('اطلاعات با موفقیت به‌روزرسانی شد', 'success');
    setIsEditing(false);
  };

  // فیلدهای نمایشی
  const infoItems = [
    { label: 'نام و نام خانوادگی', key: 'name', value: user?.name, dir: 'rtl' },
    { label: 'شماره موبایل', key: 'phone', value: user?.phone, dir: 'ltr' },
    { label: 'ایمیل', key: 'email', value: user?.email, dir: 'ltr' },
    { label: 'کد ملی', key: 'nationalCode', value: user?.nationalCode, dir: 'ltr' },
    { label: 'آدرس', key: 'address', value: user?.address, dir: 'rtl', full: true },
  ];

  return (
    <main className="mt-4 pb-5 mb-5">
      <section className="mb-5 pb-5" id="profile">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-4">
            <ProfileSidebar />

            <div className="flex-grow-1">
              <div className="rounded-22 p-4 bg-white shadow6">
                {/* هدر */}
                <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4">
                  <div className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path opacity="0.5" d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#27817A" />
                      <path d="M12 14C6.99 14 3 15.79 3 19.5V22H21V19.5C21 15.79 17.01 14 12 14Z" fill="#27817A" />
                    </svg>
                    <h3 className="font-bold fs-18 mb-0">اطلاعات حساب کاربری</h3>
                  </div>
                  {!isEditing && (
                    <button
                      onClick={handleEditClick}
                      className="d-flex align-items-center gap-2 bg-gradient-main text-white rounded-14 border-0 py-2 px-3 fs-13 fw-bold"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M16.474 5.40828L18.592 7.52628C18.7776 7.71271 18.8822 7.96481 18.8818 8.2277C18.8814 8.4906 18.776 8.74235 18.5897 8.9282L10.457 17.0603C9.79823 17.7187 8.94247 18.1395 8.02236 18.2542L4.54512 18.6895C4.45862 18.7001 4.37086 18.6902 4.28888 18.6607C4.2069 18.6311 4.13295 18.5827 4.07268 18.5192C4.01242 18.4556 3.96742 18.3787 3.94112 18.2944C3.91482 18.2101 3.90789 18.1207 3.92085 18.0332L4.40842 14.6341C4.52314 13.7483 4.92462 12.9236 5.54975 12.2862L13.591 4.24495C13.7066 4.12773 13.8447 4.03437 13.9973 3.9703C14.1499 3.90623 14.314 3.87274 14.4799 3.87176C14.6457 3.87078 14.8101 3.90234 14.9634 3.9646C15.1167 4.02686 15.2558 4.11857 15.3727 4.23437L16.474 5.40828ZM20.0005 8.30685L21.0005 9.40685C21.5528 10.0192 21.5528 10.9548 21.0005 11.5671L20.0005 10.5671V8.30685Z" fill="white" />
                      </svg>
                      <span>ویرایش اطلاعات</span>
                    </button>
                  )}
                </div>

                {/* حالت نمایش */}
                {!isEditing && (
                  <>
                    <div className="row g-4">
                      {infoItems.map((item) => (
                        <div key={item.key} className={item.full ? 'col-12' : 'col-md-6'}>
                          <div className="bg-gray2 rounded-14 p-3 h-100">
                            <p className="fs-12 text-gray mb-1">{item.label}</p>
                            <p className="fs-14 fw-bold mb-0" dir={item.dir}>
                              {item.value || '—'}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {!user && (
                      <div className="mt-4 bg-warning bg-opacity-10 rounded-14 p-3">
                        <p className="fs-13 mb-0">
                          ⚠️ شما هنوز وارد نشده‌اید. لطفا ابتدا وارد شوید.
                        </p>
                      </div>
                    )}
                  </>
                )}

                {/* حالت ویرایش */}
                {isEditing && (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <label className="fs-13 font-bold mb-2 d-block">
                          نام و نام خانوادگی *
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                          placeholder="نام و نام خانوادگی"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="fs-13 font-bold mb-2 d-block">
                          شماره موبایل *
                        </label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          dir="ltr"
                          maxLength={11}
                          className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                          placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="fs-13 font-bold mb-2 d-block">
                          ایمیل
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          dir="ltr"
                          className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="fs-13 font-bold mb-2 d-block">
                          کد ملی
                        </label>
                        <input
                          name="nationalCode"
                          value={form.nationalCode}
                          onChange={handleChange}
                          dir="ltr"
                          maxLength={10}
                          className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                          placeholder="۱۰ رقم"
                        />
                      </div>
                      <div className="col-12">
                        <label className="fs-13 font-bold mb-2 d-block">
                          آدرس
                        </label>
                        <textarea
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          rows={2}
                          className="rounded-13 bg-gray2 border-0 outline-none d-block w-100 p-3 resize-none"
                          placeholder="آدرس شما"
                        ></textarea>
                      </div>
                    </div>

                    <div className="d-flex gap-3 mt-4">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="border rounded-14 py-2 px-4 fs-14 bg-white"
                      >
                        انصراف
                      </button>
                      <button
                        type="submit"
                        className="bg-gradient-main text-white rounded-14 border-0 py-2 px-4 fs-14 fw-bold"
                      >
                        ذخیره تغییرات
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}