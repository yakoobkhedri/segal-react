# 🛒 Segal React — فروشگاه تخصصی تجهیزات برق

یک فروشگاه اینترنتی مدرن و کامل برای تجهیزات برق صنعتی، اتوماسیون، سنسور و ابزار دقیق. ساخته شده با **React 19**، **Vite**، و **Supabase**.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Supabase](https://img.shields.io/badge/Supabase-2-3ECF8E?logo=supabase)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ ویژگی‌ها

### 🛍️ فروشگاه
- نمایش محصولات از **Supabase** (دیتابیس واقعی)
- فیلتر پیشرفته: دسته‌بندی، برند، رنگ، قیمت، امتیاز
- جستجوی زنده با پیشنهادات
- مگا منوی آکاردئونی (دسکتاپ + موبایل)
- صفحه محصول با گالری تصاویر، مشخصات فنی، نظرات
- محصولات مرتبط و ویژه

### 🛒 سبد خرید و سفارش
- افزودن/حذف/تغییر تعداد (با اعتبارسنجی کامل)
- همگام‌سازی بین تب‌ها (`storage` event)
- تسویه حساب چندمرحله‌ای
- ذخیره سفارشات در **Supabase**
- مشاهده سفارشات و آمار در پروفایل

### 👤 حساب کاربری
- ورود با OTP (دمو: کد `12345` + کد امنیتی `858569`)
- ویرایش اطلاعات کاربری
- مدیریت آدرس‌ها (چند آدرس، پیش‌فرض)
- علاقه‌مندی‌ها و مقایسه محصولات (ذخیره در Supabase)

### 🎨 رابط کاربری
- طراحی **RTL** فارسی‌پسند
- کاملاً **Responsive** (موبایل، تبلت، دسکتاپ)
- آکاردئون‌های نرم و انیمیشن‌دار
- Toast notification
- Error Boundary (جلوگیری از صفحه سفید)
- ScrollToTop (اسکرول به بالا هنگام تغییر مسیر)

### 📝 بلاگ و محتوا
- لیست پست‌ها با فیلتر و جستجو
- صفحه پست با نظرات و مطالب مرتبط
- درباره ما، تماس با ما، سوالات متداول
- SEO با `react-helmet-async`

---

## 🛠️ تکنولوژی‌ها

| دسته | تکنولوژی |
|------|----------|
| **فرانت‌اند** | React 19, Vite 8, React Router 7 |
| **استایل** | Bootstrap 5, CSS سفارشی |
| **بک‌اند** | Supabase (PostgreSQL, Auth, API) |
| **State** | React Context + Hooks |
| **اسلایدر** | Swiper 14 |
| **SEO** | React Helmet Async |
| **آیکون** | SVG سفارشی |

---

## 📦 نصب و راه‌اندازی

### پیش‌نیازها
- Node.js 18+
- npm 9+
- حساب [Supabase](https://supabase.com)

### ۱. کلون پروژه
```bash
git clone https://github.com/yakoobkhedri/segal-react.git
cd segal-react