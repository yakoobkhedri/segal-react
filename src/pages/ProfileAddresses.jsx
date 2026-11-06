// src/pages/ProfileAddresses.jsx
import { useState } from 'react';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import { useAddresses } from '../context/AddressContext';
import { useToast } from '../context/ToastContext';

const PROVINCES = ['تهران', 'اصفهان', 'کرمان', 'مشهد', 'شیراز', 'تبریز', 'رشت'];

const emptyForm = {
  title: '',
  province: 'تهران',
  city: 'تهران',
  fullAddress: '',
  postalCode: '',
  receiver: '',
  phone: '',
  isDefault: false,
};

export default function ProfileAddresses() {
  const { addresses, addAddress, updateAddress, removeAddress, setDefaultAddress } = useAddresses();
  const { showToast } = useToast();

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const openAddForm = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (addr) => {
    setForm({
      title: addr.title,
      province: addr.province || 'تهران',
      city: addr.city || 'تهران',
      fullAddress: addr.fullAddress,
      postalCode: addr.postalCode || '',
      receiver: addr.receiver || '',
      phone: addr.phone || '',
      isDefault: !!addr.isDefault,
    });
    setEditingId(addr.id);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // اعتبارسنجی
    if (!form.title.trim()) {
      showToast('لطفا عنوان آدرس را وارد کنید', 'error');
      return;
    }
    if (!form.fullAddress.trim()) {
      showToast('لطفا آدرس کامل را وارد کنید', 'error');
      return;
    }
    if (!form.receiver.trim()) {
      showToast('لطفا نام گیرنده را وارد کنید', 'error');
      return;
    }
    if (!/^09\d{9}$/.test(form.phone)) {
      showToast('شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد', 'error');
      return;
    }
    if (form.postalCode && !/^\d{10}$/.test(form.postalCode)) {
      showToast('کد پستی باید ۱۰ رقم باشد', 'error');
      return;
    }

    const fullAddress = `${form.province}، ${form.city}، ${form.fullAddress}${
      form.postalCode ? ` - کدپستی: ${form.postalCode}` : ''
    }`;

    if (editingId) {
      updateAddress(editingId, { ...form, fullAddress });
      showToast('آدرس ویرایش شد', 'success');
    } else {
      addAddress({ ...form, fullAddress });
      showToast('آدرس اضافه شد', 'success');
    }
    closeForm();
  };

  const handleRemove = (id) => {
    removeAddress(id);
    showToast('آدرس حذف شد', 'info');
  };

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
                      <path opacity="0.5" d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#27817A" />
                      <circle cx="12" cy="9" r="3" fill="white" />
                    </svg>
                    <h3 className="font-bold fs-18 mb-0">
                      آدرس‌های من ({addresses.length.toLocaleString('fa-IR')})
                    </h3>
                  </div>
                  <button
                    onClick={openAddForm}
                    className="bg-gradient-main text-white rounded-14 border-0 py-2 px-3 fs-13 fw-bold"
                  >
                    + آدرس جدید
                  </button>
                </div>

                {/* فرم */}
                {showForm && (
                  <div className="border rounded-14 p-4 mb-4 bg-gray6">
                    <h4 className="font-bold fs-16 mb-3">
                      {editingId ? 'ویرایش آدرس' : 'افزودن آدرس جدید'}
                    </h4>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="fs-13 font-bold mb-2 d-block">عنوان آدرس *</label>
                          <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            placeholder="مثلاً خانه، محل کار"
                            className="rounded-13 bg-white border-0 outline-none h-55 d-block w-100 px-4"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="fs-13 font-bold mb-2 d-block">نام گیرنده *</label>
                          <input
                            name="receiver"
                            value={form.receiver}
                            onChange={handleChange}
                            placeholder="نام و نام خانوادگی"
                            className="rounded-13 bg-white border-0 outline-none h-55 d-block w-100 px-4"
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="fs-13 font-bold mb-2 d-block">شماره موبایل *</label>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                            dir="ltr"
                            className="rounded-13 bg-white border-0 outline-none h-55 d-block w-100 px-4"
                          />
                        </div>
                        <div className="col-md-3">
                          <label className="fs-13 font-bold mb-2 d-block">استان</label>
                          <select
                            name="province"
                            value={form.province}
                            onChange={handleChange}
                            className="rounded-13 bg-white border-0 outline-none h-55 d-block w-100 px-4"
                          >
                            {PROVINCES.map((p) => <option key={p}>{p}</option>)}
                          </select>
                        </div>
                        <div className="col-md-3">
                          <label className="fs-13 font-bold mb-2 d-block">شهر</label>
                          <input
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            className="rounded-13 bg-white border-0 outline-none h-55 d-block w-100 px-4"
                          />
                        </div>
                        <div className="col-12">
                          <label className="fs-13 font-bold mb-2 d-block">آدرس کامل *</label>
                          <textarea
                            name="fullAddress"
                            value={form.fullAddress}
                            onChange={handleChange}
                            rows={2}
                            placeholder="خیابان، کوچه، پلاک، واحد"
                            className="rounded-13 bg-white border-0 outline-none d-block w-100 p-3 resize-none"
                          ></textarea>
                        </div>
                        <div className="col-md-6">
                          <label className="fs-13 font-bold mb-2 d-block">کد پستی</label>
                          <input
                            name="postalCode"
                            value={form.postalCode}
                            onChange={handleChange}
                            placeholder="۱۰ رقم"
                            maxLength={10}
                            dir="ltr"
                            className="rounded-13 bg-white border-0 outline-none h-55 d-block w-100 px-4"
                          />
                        </div>
                        <div className="col-md-6 d-flex align-items-end">
                          <label className="d-flex align-items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              name="isDefault"
                              checked={form.isDefault}
                              onChange={handleChange}
                            />
                            <span className="fs-14">آدرس پیش‌فرض</span>
                          </label>
                        </div>
                      </div>
                      <div className="d-flex gap-3 mt-4">
                        <button
                          type="button"
                          onClick={closeForm}
                          className="border rounded-14 py-2 px-4 fs-14 bg-white"
                        >
                          انصراف
                        </button>
                        <button
                          type="submit"
                          className="bg-gradient-main text-white rounded-14 border-0 py-2 px-4 fs-14 fw-bold"
                        >
                          {editingId ? 'ذخیره تغییرات' : 'افزودن آدرس'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* لیست آدرس‌ها */}
                {addresses.length === 0 ? (
                  <div className="text-center py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" className="mb-3">
                      <path opacity="0.5" d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" fill="#27817A" />
                      <circle cx="12" cy="9" r="3" fill="white" />
                    </svg>
                    <p className="fs-16 font-bold mb-2">هنوز آدرسی ثبت نکرده‌اید</p>
                    <p className="fs-14 text-gray mb-4">برای ارسال سفارش، حداقل یک آدرس لازم است</p>
                    <button
                      onClick={openAddForm}
                      className="bg-gradient-main text-white rounded-14 border-0 py-2 px-4 fs-14 fw-bold"
                    >
                      + افزودن اولین آدرس
                    </button>
                  </div>
                ) : (
                  <div className="row g-3">
                    {addresses.map((addr) => (
                      <div key={addr.id} className="col-md-6">
                        <div className="border rounded-14 p-3 position-relative h-100">
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
                          <div className="d-flex flex-wrap gap-2">
                            {!addr.isDefault && (
                              <button
                                onClick={() => setDefaultAddress(addr.id)}
                                className="border rounded-8 py-1 px-3 fs-12 bg-white text-main"
                              >
                                پیش‌فرض
                              </button>
                            )}
                            <button
                              onClick={() => openEditForm(addr)}
                              className="border rounded-8 py-1 px-3 fs-12 bg-white"
                            >
                              ویرایش
                            </button>
                            <button
                              onClick={() => handleRemove(addr.id)}
                              className="border rounded-8 py-1 px-3 fs-12 bg-white text-danger"
                            >
                              حذف
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}