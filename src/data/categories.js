// src/data/categories.js
// منبع واحد دسته‌بندی‌ها برای مگا منو، منوی موبایل و محصولات

export const categories = [
  {
    id: 1,
    name: 'اتوماسیون صنعتی',
    subCategories: [
      { label: 'منبع تغذیه', category: 'منبع تغذیه' },
      { label: 'PLC', category: 'اتوماسیون صنعتی' },
      { label: 'HMI', category: 'اتوماسیون صنعتی' },
      { label: 'اینورتر', category: 'اتوماسیون صنعتی' },
    ],
  },
  {
    id: 2,
    name: 'سنسور',
    subCategories: [
      { label: 'سنسور القایی', category: 'سنسور' },
      { label: 'سنسور نوری', category: 'سنسور' },
      { label: 'سنسور خازنی', category: 'سنسور' },
      { label: 'سنسور فشار', category: 'سنسور' },
    ],
  },
  {
    id: 3,
    name: 'تابلوبرق و تجهیزات',
    subCategories: [
      { label: 'کلید اتوماتیک', category: 'تابلوبرق' },
      { label: 'کنتاکتور', category: 'تابلوبرق' },
      { label: 'رله', category: 'تابلوبرق' },
      { label: 'شاسی', category: 'تابلوبرق' },
    ],
  },
  {
    id: 4,
    name: 'کنترل و نمایشگر',
    subCategories: [
      { label: 'کنترلر دما', category: 'کنترل و نمایشگر' },
      { label: 'تایمر', category: 'کنترل و نمایشگر' },
      { label: 'شمارنده', category: 'کنترل و نمایشگر' },
    ],
  },
  {
    id: 5,
    name: 'سیم و کابل',
    subCategories: [
      { label: 'کابل افشان', category: 'سیم و کابل' },
      { label: 'کابل مفتول', category: 'سیم و کابل' },
      { label: 'سیم تک', category: 'سیم و کابل' },
      { label: 'کابل شبکه', category: 'سیم و کابل' },
    ],
  },
  {
    id: 6,
    name: 'نور و روشنایی',
    subCategories: [
      { label: 'لامپ LED', category: 'نور و روشنایی' },
      { label: 'پروژکتور', category: 'نور و روشنایی' },
      { label: 'نوار LED', category: 'نور و روشنایی' },
      { label: 'چراغ صنعتی', category: 'نور و روشنایی' },
    ],
  },
  {
    id: 7,
    name: 'ابزار و اندازه‌گیری',
    subCategories: [
      { label: 'مولتی‌متر', category: 'ابزار و اندازه‌گیری' },
      { label: 'اسیلوسکوپ', category: 'ابزار و اندازه‌گیری' },
      { label: 'کلمپ‌متر', category: 'ابزار و اندازه‌گیری' },
      { label: 'تستر', category: 'ابزار و اندازه‌گیری' },
    ],
  },
];

// لیست ساده نام دسته‌ها (برای استفاده در فیلترها)
export const categoryNames = categories.map((c) => c.name);

// لیست ساده زیردسته‌ها (برای فیلترهای آینده)
export const subCategoryNames = categories.flatMap((c) =>
  c.subCategories.map((s) => s.label)
);