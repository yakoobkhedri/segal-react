// src/pages/FAQ.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Shoar from '../components/home/Shoar';
import SEO from '../components/SEO';

const faqData = [
  {
    id: 1,
    category: 'سفارش و خرید',
    items: [
      {
        q: 'چگونه می‌توانم سفارش خود را ثبت کنم؟',
        a: 'برای ثبت سفارش، ابتدا محصول مورد نظر را به سبد خرید اضافه کنید، سپس به صفحه سبد خرید بروید و روی دکمه «تسویه حساب» کلیک کنید. در مرحله بعد آدرس و روش پرداخت را انتخاب کرده و سفارش را نهایی کنید.',
      },
      {
        q: 'آیا برای خرید باید ثبت‌نام کنم؟',
        a: 'بله، برای نهایی کردن سفارش و مشاهده سفارشات، باید وارد حساب کاربری خود شوید. ثبت‌نام با شماره موبایل و کد تایید انجام می‌شود و بسیار سریع است.',
      },
      {
        q: 'حداقل مبلغ سفارش چقدر است؟',
        a: 'حداقل مبلغ سفارش وجود ندارد و می‌توانید هر محصولی را با هر مبلغی سفارش دهید.',
      },
      {
        q: 'آیا امکان تغییر یا لغو سفارش وجود دارد؟',
        a: 'تا زمانی که سفارش به مرحله ارسال نرسیده باشد، می‌توانید با تماس با پشتیبانی، سفارش خود را تغییر دهید یا لغو کنید.',
      },
    ],
  },
  {
    id: 2,
    category: 'پرداخت',
    items: [
      {
        q: 'چه روش‌های پرداختی پشتیبانی می‌شود؟',
        a: 'پرداخت از طریق درگاه‌های زرین‌پال، بانک ملت، بانک سامان و همچنین پرداخت در محل (برای برخی شهرها) امکان‌پذیر است.',
      },
      {
        q: 'آیا پرداخت آنلاین امن است؟',
        a: 'بله، تمام پرداخت‌ها از طریق درگاه‌های معتبر و امن بانکی انجام می‌شود و اطلاعات کارت شما در سایت ما ذخیره نمی‌شود.',
      },
      {
        q: 'در صورت کسر وجه و ناموفق بودن سفارش چه کنم؟',
        a: 'در صورت کسر وجه و ناموفق بودن سفارش، مبلغ طی ۷۲ ساعت کاری به حساب شما بازگردانده می‌شود. در صورت نیاز با پشتیبانی تماس بگیرید.',
      },
    ],
  },
  {
    id: 3,
    category: 'ارسال و تحویل',
    items: [
      {
        q: 'هزینه ارسال چقدر است؟',
        a: 'هزینه ارسال بسته به شهر و وزن سفارش متفاوت است. برای سفارشات بالای مبلغ مشخص، ارسال رایگان است.',
      },
      {
        q: 'زمان تحویل سفارش چقدر است؟',
        a: 'زمان تحویل برای تهران ۱ تا ۲ روز کاری و برای سایر شهرها ۲ تا ۵ روز کاری است. در صفحه محصول، زمان تقریبی تحویل نمایش داده می‌شود.',
      },
      {
        q: 'آیا امکان تحویل حضوری وجود دارد؟',
        a: 'بله، برای مشتریان تهران امکان تحویل حضوری در محل فروشگاه وجود دارد. برای هماهنگی با پشتیبانی تماس بگیرید.',
      },
      {
        q: 'چگونه می‌توانم سفارش خود را پیگیری کنم؟',
        a: 'پس از ثبت سفارش، کد پیگیری برای شما ارسال می‌شود. با وارد کردن این کد در صفحه «پیگیری سفارش» می‌توانید وضعیت مرسوله را مشاهده کنید.',
      },
    ],
  },
  {
    id: 4,
    category: 'گارانتی و بازگشت',
    items: [
      {
        q: 'آیا محصولات گارانتی دارند؟',
        a: 'بله، تمام محصولات دارای گارانتی اصالت و سلامت فیزیکی هستند. مدت گارانتی بسته به نوع محصول متفاوت است و در صفحه محصول ذکر شده است.',
      },
      {
        q: 'شرایط بازگشت کالا چیست؟',
        a: 'تا ۷ روز پس از دریافت کالا، در صورت عدم رضایت و سالم بودن بسته‌بندی، می‌توانید کالا را بازگردانید. هزینه بازگشت به عهده مشتری است مگر در صورت ایراد فنی.',
      },
      {
        q: 'در صورت خرابی کالا چه کنم؟',
        a: 'در صورت خرابی کالا در هنگام تحویل، از تحویل گرفتن آن خودداری کنید و با پشتیبانی تماس بگیرید. اگر بعد از تحویل متوجه خرابی شدید، تا ۴۸ ساعت فرصت دارید اطلاع دهید.',
      },
    ],
  },
  {
    id: 5,
    category: 'حساب کاربری',
    items: [
      {
        q: 'چگونه می‌توانم رمز عبورم را تغییر دهم؟',
        a: 'در حال حاضر ورود با کد یکبار مصرف انجام می‌شود و نیازی به رمز عبور نیست. برای تغییر شماره موبایل، با پشتیبانی تماس بگیرید.',
      },
      {
        q: 'اطلاعات من امن است؟',
        a: 'بله، اطلاعات شما به صورت رمزنگاری‌شده ذخیره می‌شود و در اختیار هیچ شخص ثالثی قرار نمی‌گیرد.',
      },
      {
        q: 'چگونه می‌توانم حساب کاربری خود را حذف کنم؟',
        a: 'برای حذف حساب کاربری، با پشتیبانی تماس بگیرید. پس از تایید هویت، حساب شما حذف خواهد شد.',
      },
    ],
  },
];

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-bottom">
      <button
        type="button"
        onClick={onClick}
        className="d-flex align-items-center justify-content-between w-100 border-0 bg-transparent py-3 px-0 text-start"
        aria-expanded={isOpen}
      >
        <span className={`fs-14 fw-bold ${isOpen ? 'text-main' : 'text-dark'}`}>
          {item.q}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s',
            flexShrink: 0,
          }}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke={isOpen ? '#27817A' : '#1E2D48'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        style={{
          maxHeight: isOpen ? 600 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p className="fs-13 text-gray lh-27 mb-3 pe-4">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openItem, setOpenItem] = useState(null);

  const activeCategoryData = faqData.find((c) => c.category === activeCategory);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setOpenItem(null);
  };

  const toggleItem = (key) => {
    setOpenItem((prev) => (prev === key ? null : key));
  };

  return (
    <>
      <SEO
        title="سوالات متداول | سگال"
        description="پاسخ به سوالات پرتکرار درباره خرید، پرداخت، ارسال، گارانتی و حساب کاربری"
      />
      <main className="mt-4 position-relative">
        {/* بنر بالا */}
        <section id="pageTitle">
          <div className="container">
            <div className="shadow8 rounded-33 bg-white">
              <div className="position-relative">
                <img
                  alt="banner"
                  src="/assets/img/pageTitleBg.png"
                  className="img-fluid w-100"
                />
                <div className="d-flex align-items-center gap-3 position-absolute bottom-53 right-95">
                  <div className="d-flex align-items-center justify-content-center w-51 h-51 special-rounded bg-gradient-main">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        opacity="0.5"
                        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
                        fill="white"
                      />
                      <path
                        d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                        fill="#27817A"
                      />
                      <path
                        d="M12 13C12.5523 13 13 12.5523 13 12V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V12C11 12.5523 11.4477 13 12 13Z"
                        fill="#27817A"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold fs-24 text-white mb-0">سوالات متداول</p>
                    <p className="mb-0 text-white-50 d-none d-sm-block">پاسخ به پرتکرارترین سوالات شما</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* محتوا */}
        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              {/* سایدبار دسته‌بندی */}
              <div className="col-lg-3">
                <div className="bg-white rounded-21 shadow10 p-3 position-sticky" style={{ top: 20 }}>
                  <p className="font-bold fs-16 mb-3 px-2">دسته‌بندی‌ها</p>
                  <ul className="list-unstyled mb-0">
                    {faqData.map((cat) => (
                      <li key={cat.id} className="mb-1">
                        <button
                          type="button"
                          onClick={() => handleCategoryChange(cat.category)}
                          className={`d-flex align-items-center justify-content-between w-100 border-0 bg-transparent rounded-8 py-2 px-2 fs-13 ${
                            activeCategory === cat.category
                              ? 'bg-main3 fw-bold text-main'
                              : 'text-gray'
                          }`}
                          style={{ textAlign: 'right' }}
                        >
                          <span>{cat.category}</span>
                          <span className="fs-11">({cat.items.length})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* لیست سوالات */}
              <div className="col-lg-9">
                <div className="bg-white rounded-21 shadow10 p-4">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <circle cx="5.00488" cy="5" r="5" fill="#27817A" />
                    </svg>
                    <h3 className="font-bold fs-18 mb-0">{activeCategory}</h3>
                  </div>

                  {/* ✅ رفع خطای key با uniqueKey */}
                  {activeCategoryData.items.map((item, index) => {
                    const uniqueKey = `${activeCategoryData.id}-${index}`;
                    return (
                      <FAQItem
                        key={uniqueKey}
                        item={item}
                        isOpen={openItem === uniqueKey}
                        onClick={() => toggleItem(uniqueKey)}
                      />
                    );
                  })}
                </div>

                {/* بخش تماس با ما */}
                <div className="bg-gradient-main rounded-21 shadow10 p-4 mt-4 text-white">
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3">
                    <div className="text-center text-sm-start">
                      <h4 className="font-bold fs-18 mb-1">جواب سوالتان را پیدا نکردید؟</h4>
                      <p className="fs-13 mb-0 text-white-50">
                        تیم پشتیبانی ما آماده پاسخگویی به شماست.
                      </p>
                    </div>
                    <Link
                      to="/contact"
                      className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-white py-2 px-4 text-decoration-none flex-shrink-0"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M20 15.5C18.8 15.5 17.6 15.3 16.4 14.9C16.1 14.8 15.8 14.9 15.5 15.1L13.2 17.4C10.1 15.7 7.3 13 5.6 9.8L7.9 7.5C8.1 7.3 8.2 6.9 8.1 6.6C7.7 5.4 7.5 4.2 7.5 3C7.5 2.4 7.1 2 6.5 2H3C2.4 2 2 2.4 2 3C2 13.4 10.6 22 21 22C21.6 22 22 21.6 22 21V17.5C22 16.9 21.6 16.5 21 16.5H20Z"
                          fill="#27817A"
                        />
                      </svg>
                      <span className="fs-14 fw-bold text-main">تماس با ما</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Shoar />

        {/* موج */}
        <img
          alt="wave"
          src="/assets/img/footerWave.png"
          className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-md-block d-none"
        />
        <img
          alt="wave"
          src="/assets/img/footerBg2.png"
          className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-block d-md-none"
        />
      </main>
    </>
  );
}