// src/pages/Contact.jsx
import { useState } from 'react';
import { useToast } from '../context/ToastContext';

export default function Contact() {
  const { showToast } = useToast();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // چک نام
    if (!form.name.trim()) {
      showToast('لطفا نام و نام خانوادگی را وارد کنید', 'error');
      return;
    }

    // چک پیام
    if (!form.message.trim()) {
      showToast('لطفا متن پیام را وارد کنید', 'error');
      return;
    }

    // چک ایمیل (اختیاری)
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      showToast('ایمیل وارد شده معتبر نیست', 'error');
      return;
    }

    // چک موبایل (اختیاری)
    if (form.phone && form.phone.length < 10) {
      showToast('شماره تماس باید حداقل ۱۰ رقم باشد', 'error');
      return;
    }

    showToast('پیام شما با موفقیت ارسال شد', 'success');
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      id: 1,
      title: 'آدرس',
      value: 'سعادت آباد، بلوار سرو غربی، خیابان ریاضی بخشایش، خیابان زند وکیلی غربی، پلاک ۹۱، طبقه ۴',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            opacity="0.5"
            d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
            fill="#27817A"
          />
          <circle cx="12" cy="9" r="3" fill="white" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'شماره تماس',
      value: '۰۲۱-۱۲۳۴۵۶۷۸ | ۰۹۱۲۳۴۵۶۷۸۹',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 15.5C18.8 15.5 17.6 15.3 16.4 14.9C16.1 14.8 15.8 14.9 15.5 15.1L13.2 17.4C10.1 15.7 7.3 13 5.6 9.8L7.9 7.5C8.1 7.3 8.2 6.9 8.1 6.6C7.7 5.4 7.5 4.2 7.5 3C7.5 2.4 7.1 2 6.5 2H3C2.4 2 2 2.4 2 3C2 13.4 10.6 22 21 22C21.6 22 22 21.6 22 21V17.5C22 16.9 21.6 16.5 21 16.5H20Z"
            fill="#27817A"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'ایمیل',
      value: 'info@segal.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path
            opacity="0.5"
            d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
            fill="#27817A"
          />
          <path d="M12 13L2 6H22L12 13Z" fill="white" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'ساعات کاری',
      value: 'شنبه تا پنجشنبه: ۹ صبح - ۶ عصر',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#27817A" opacity="0.5" />
          <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <main className="mt-4 position-relative">
      {/* بنر بالا */}
      <section className="py-4">
        <div className="container">
          <div className="shadow8 rounded-33 bg-white position-relative overflow-hidden">
            <div className="position-relative">
              <img alt="banner" src="/assets/img/pageTitleBg.png" className="img-fluid w-100" />
              <div className="d-flex align-items-center gap-3 position-absolute bottom-53 right-95">
                <div className="d-flex align-items-center justify-content-center w-51 h-51 special-rounded bg-gradient-main">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 15.5C18.8 15.5 17.6 15.3 16.4 14.9C16.1 14.8 15.8 14.9 15.5 15.1L13.2 17.4C10.1 15.7 7.3 13 5.6 9.8L7.9 7.5C8.1 7.3 8.2 6.9 8.1 6.6C7.7 5.4 7.5 4.2 7.5 3C7.5 2.4 7.1 2 6.5 2H3C2.4 2 2 2.4 2 3C2 13.4 10.6 22 21 22C21.6 22 22 21.6 22 21V17.5C22 16.9 21.6 16.5 21 16.5H20Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold fs-24 text-white mb-0">تماس با ما</p>
                  <p className="mb-0 text-white-50 d-none d-sm-block">ما همیشه در دسترس شما هستیم</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* محتوا */}
      <section className="pb-5">
        <div className="container">
          <div className="row g-4">
            {/* فرم */}
            <div className="col-lg-7">
              <div className="bg-white rounded-21 shadow10 p-4 h-100">
                <h3 className="font-bold fs-20 mb-2">پیام خود را برای ما ارسال کنید</h3>
                <p className="fs-14 text-gray mb-4">
                  هر سوال یا پیشنهادی دارید، از طریق فرم زیر با ما در میان بگذارید.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="fs-13 font-bold mb-2 d-block">نام و نام خانوادگی *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                        placeholder="نام کامل شما"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="fs-13 font-bold mb-2 d-block">شماره تماس</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="fs-13 font-bold mb-2 d-block">ایمیل</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                        placeholder="you@example.com"
                        dir="ltr"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="fs-13 font-bold mb-2 d-block">موضوع</label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="rounded-13 bg-gray2 border-0 outline-none h-55 d-block w-100 px-4"
                        placeholder="موضوع پیام"
                      />
                    </div>
                    <div className="col-12">
                      <label className="fs-13 font-bold mb-2 d-block">پیام شما *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        className="rounded-13 bg-gray2 border-0 outline-none d-block w-100 p-3 resize-none"
                        placeholder="متن پیام..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="d-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 mt-4 border-0"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mb-0 fw-bold text-white">ارسال پیام</p>
                  </button>
                </form>
              </div>
            </div>

            {/* اطلاعات تماس */}
            <div className="col-lg-5">
              <div className="d-flex flex-column gap-3 h-100">
                {contactInfo.map((info) => (
                  <div
                    key={info.id}
                    className="bg-white rounded-21 shadow10 p-3 d-flex align-items-start gap-3"
                  >
                    <div
                      className="d-flex align-items-center justify-content-center rounded-14 flex-shrink-0"
                      style={{ width: 56, height: 56, backgroundColor: '#e9f2f2' }}
                    >
                      {info.icon}
                    </div>
                    <div className="flex-grow-1">
                      <p className="fs-13 text-gray mb-1">{info.title}</p>
                      <p className="fs-14 fw-bold mb-0" style={{ lineHeight: 1.8 }}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* نقشه */}
          <div className="bg-white rounded-21 shadow10 mt-4 overflow-hidden">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.964044737352!2d51.371!3d35.7767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQ2JzM2LjEiTiA1McKwMjInMTUuNiJF!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}