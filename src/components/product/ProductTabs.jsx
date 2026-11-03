// src/components/product/ProductTabs.jsx
import { useState } from 'react';

const tabList = [
  { id: 'review', label: 'نقد و بررسی' },
  { id: 'specs', label: 'مشخصات فنی' },
  { id: 'comments', label: 'دیدگاه کاربران' },
];

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('review');

  const specs = [
    { label: 'توان', value: product.power },
    { label: 'ولتاژ', value: product.voltage },
    { label: 'جریان', value: product.current },
    { label: 'رنگ', value: product.color },
    { label: 'گارانتی', value: product.warranty },
    { label: 'روشنایی', value: product.brightness !== '—' ? product.brightness : null },
  ].filter((s) => s.value && s.value !== '—');

  return (
    <div className="bg-white rounded-21 shadow8 mt-4">
      {/* تب‌ها */}
      <ul
        className="nav nav-pills mb-0 position-relative p-3 fs-14 d-flex gap-2 list-unstyled"
        style={{ background: '#4834AC', borderRadius: '21px 21px 21px 0px' }}
      >
        {tabList.map((tab) => (
          <li key={tab.id} className="nav-item">
            <button
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`nav-link rounded-14 px-3 py-2 border-0 ${
                activeTab === tab.id ? 'active' : ''
              }`}
              style={{
                background: activeTab === tab.id ? 'white' : '#FFFFFF1A',
                color: activeTab === tab.id ? 'black' : 'white',
                fontWeight: activeTab === tab.id ? 700 : 400,
              }}
            >
              <p className="mb-0">{tab.label}</p>
            </button>
          </li>
        ))}
      </ul>

      {/* محتوا */}
      <div className="p-4">
        {activeTab === 'review' && (
          <div>
            <p className="fs-14 lh-34 text-muted text-justify mb-3">
              {product.shortDesc}
            </p>
            <p className="fs-14 lh-34 text-muted text-justify mb-0">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
            </p>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="fs-14">
            {specs.length > 0 ? (
              specs.map((spec, i) => (
                <div key={i} className="d-flex align-items-center py-3 border-bottom">
                  <div className="fw-bold" style={{ minWidth: 150 }}>
                    {spec.label}
                  </div>
                  <div className="flex-grow-1">
                    <p className="mb-0">{spec.value}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="fs-14 text-gray mb-0 text-center py-3">
                مشخصاتی برای این محصول ثبت نشده است.
              </p>
            )}
          </div>
        )}

        {activeTab === 'comments' && (
          <div>
            {/* کامنت نمونه */}
            <div className="border-bottom pb-4 mb-4">
              <div className="d-flex align-items-center gap-3 bg-gray6 p-3 rounded-14">
                <img
                  src="/assets/img/comment.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: 50, height: 50 }}
                />
                <div className="flex-grow-1">
                  <p className="font-bold fs-14 mb-1">کاربر سگال</p>
                  <p className="fs-12 text-gray mb-0">
                    محصول خوب و با کیفیتی بود. پیشنهاد می‌کنم.
                  </p>
                </div>
                <p className="fs-11 text-gray mb-0">۲ روز پیش</p>
              </div>
            </div>

            {/* فرم ارسال */}
            <h6 className="font-bold fs-16 mb-3">ارسال دیدگاه</h6>
            <form>
              <div className="d-flex flex-column flex-md-row gap-3 mb-3">
                <input
                  placeholder="نام و نام خانوادگی"
                  className="flex-grow-1 bg-gray2 rounded-12 p-3 border-0 outline-none fs-13"
                />
                <input
                  placeholder="موبایل"
                  className="flex-grow-1 bg-gray2 rounded-12 p-3 border-0 outline-none fs-13"
                />
              </div>
              <textarea
                placeholder="دیدگاه شما"
                rows={3}
                className="bg-gray2 rounded-12 p-3 border-0 outline-none fs-13 w-100 mb-3 resize-none"
              ></textarea>
              <button
                type="button"
                className="bg-gradient-main text-white rounded-14 border-0 py-3 px-4 fs-14 fw-bold"
              >
                ارسال دیدگاه
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}