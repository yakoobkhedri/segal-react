// src/pages/Compare.jsx
import { Link } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import Shoar from '../components/home/Shoar';

// ویژگی‌های مقایسه
const features = [
  { label: 'روشنایی', key: 'brightness' },
  { label: 'توان', key: 'power' },
  { label: 'رنگ', key: 'color' },
  { label: 'ولتاژ', key: 'voltage' },
  { label: 'جریان', key: 'current' },
  { label: 'گارانتی', key: 'warranty' },
];

function RemoveIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
      <g opacity="0.3">
        <path
          d="M13.9099 11.9999L18.2099 7.70994C18.3982 7.52164 18.504 7.26624 18.504 6.99994C18.504 6.73364 18.3982 6.47825 18.2099 6.28994C18.0216 6.10164 17.7662 5.99585 17.4999 5.99585C17.2336 5.99585 16.9782 6.10164 16.7899 6.28994L12.4999 10.5899L8.20994 6.28994C8.02164 6.10164 7.76624 5.99585 7.49994 5.99585C7.23364 5.99585 6.97824 6.10164 6.78994 6.28994C6.60164 6.47825 6.49585 6.73364 6.49585 6.99994C6.49585 7.26624 6.60164 7.52164 6.78994 7.70994L11.0899 11.9999L6.78994 16.2899C6.69621 16.3829 6.62182 16.4935 6.57105 16.6154C6.52028 16.7372 6.49414 16.8679 6.49414 16.9999C6.49414 17.132 6.52028 17.2627 6.57105 17.3845C6.62182 17.5064 6.69621 17.617 6.78994 17.7099C6.8829 17.8037 6.9935 17.8781 7.11536 17.9288C7.23722 17.9796 7.36793 18.0057 7.49994 18.0057C7.63195 18.0057 7.76266 17.9796 7.88452 17.9288C8.00638 17.8781 8.11698 17.8037 8.20994 17.7099L12.4999 13.4099L16.7899 17.7099C16.8829 17.8037 16.9935 17.8781 17.1154 17.9288C17.2372 17.9796 17.3679 18.0057 17.4999 18.0057C17.632 18.0057 17.7627 17.9796 17.8845 17.9288C18.0064 17.8781 18.117 17.8037 18.2099 17.7099C18.3037 17.617 18.3781 17.5064 18.4288 17.3845C18.4796 17.2627 18.5057 17.132 18.5057 16.9999C18.5057 16.8679 18.4796 16.7372 18.4288 16.6154C18.3781 16.4935 18.3037 16.3829 18.2099 16.2899L13.9099 11.9999Z"
          fill="black"
        />
      </g>
    </svg>
  );
}

export default function Compare() {
  const { compareList, removeFromCompare, clearCompare, maxCompare } = useCompare();

  // حالت خالی
  if (compareList.length === 0) {
    return (
      <main className="mt-4 position-relative">
        <section>
          <div className="container">
            <div className="rounded-21 p-4 bg-white shadow8">
              <div className="text-center py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mb-4"
                >
                  <path
                    opacity="0.5"
                    d="M13 15.4C13 13.326 13 12.289 13.659 11.644C14.318 11 15.379 11 17.5 11C19.621 11 20.682 11 21.341 11.644C22 12.29 22 13.326 22 15.4V17.6C22 19.674 22 20.711 21.341 21.356C20.682 22 19.621 22 17.5 22C15.379 22 14.318 22 13.659 21.356C13 20.71 13 19.674 13 17.6V15.4Z"
                    fill="#27817A"
                  />
                  <path
                    d="M2 8.6C2 10.674 2 11.711 2.659 12.356C3.318 13 4.379 13 6.5 13C8.621 13 9.682 13 10.341 12.356C11 11.71 11 10.674 11 8.6V6.4C11 4.326 11 3.289 10.341 2.644C9.682 2 8.621 2 6.5 2C4.379 2 3.318 2 2.659 2.644C2 3.29 2 4.326 2 6.4V8.6ZM13 5.5C13 4.413 13 3.87 13.171 3.44C13.3937 2.87455 13.8318 2.42064 14.389 2.178C14.802 2 15.327 2 16.375 2H18.625C19.673 2 20.198 2 20.611 2.178C21.162 2.414 21.601 2.868 21.829 3.44C22 3.87 22 4.413 22 5.5C22 6.587 22 7.13 21.829 7.56C21.6063 8.12545 21.1682 8.57936 20.611 8.822C20.198 9 19.673 9 18.625 9H16.375C15.327 9 14.802 9 14.389 8.822C13.8318 8.57936 13.3937 8.12545 13.171 7.56C13 7.13 13 6.587 13 5.5Z"
                    fill="#27817A"
                  />
                  <path
                    opacity="0.5"
                    d="M2 18.5C2 19.587 2 20.13 2.171 20.56C2.39372 21.1255 2.8318 21.5794 3.389 21.822C3.802 22 4.327 22 5.375 22H7.625C8.673 22 9.198 22 9.611 21.822C10.162 21.586 10.601 21.132 10.829 20.56C11 20.13 11 19.587 11 18.5C11 17.413 11 16.87 10.829 16.44C10.6063 15.8745 10.1682 15.4206 9.611 15.178C9.198 15 8.673 15 7.625 15H5.375C4.327 15 3.802 15 3.389 15.178C2.838 15.414 2.399 15.868 2.171 16.44C2 16.87 2 17.413 2 18.5Z"
                    fill="#27817A"
                  />
                </svg>
                <h3 className="fs-20 font-bold mb-2">لیست مقایسه خالیه!</h3>
                <p className="fs-14 text-gray mb-4">
                  محصولاتی که می‌خوای مقایسه کنی رو از صفحه محصولات اضافه کن.
                </p>
                <Link
                  to="/products"
                  className="d-inline-flex align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 px-4 text-decoration-none"
                >
                  <p className="mb-0 fw-bold text-white">مشاهده محصولات</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Shoar />
      </main>
    );
  }

  return (
    <main className="mt-4 position-relative">
      <section>
        <div className="container">
          <div className="rounded-21 p-4 pb-0 bg-white shadow8">
            {/* هدر */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path
                    opacity="0.5"
                    d="M13.457 15.4C13.457 13.326 13.457 12.289 14.116 11.644C14.775 11 15.836 11 17.957 11C20.078 11 21.139 11 21.798 11.644C22.457 12.29 22.457 13.326 22.457 15.4V17.6C22.457 19.674 22.457 20.711 21.798 21.356C21.139 22 20.078 22 17.957 22C15.836 22 14.775 22 14.116 21.356C13.457 20.71 13.457 19.674 13.457 17.6V15.4Z"
                    fill="#27817A"
                  />
                  <path
                    d="M2.45703 8.6C2.45703 10.674 2.45703 11.711 3.11603 12.356C3.77503 13 4.83603 13 6.95703 13C9.07803 13 10.139 13 10.798 12.356C11.457 11.71 11.457 10.674 11.457 8.6V6.4C11.457 4.326 11.457 3.289 10.798 2.644C10.139 2 9.07803 2 6.95703 2C4.83603 2 3.77503 2 3.11603 2.644C2.45703 3.29 2.45703 4.326 2.45703 6.4V8.6Z"
                    fill="#27817A"
                  />
                </svg>
                <p className="mb-0 fs-14 font-bold">مقایسه محصولات</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <p className="fs-14 text-gray mb-0">
                  {compareList.length} از {maxCompare} محصول
                </p>
                <button
                  onClick={clearCompare}
                  className="fs-11 bg-danger rounded-pill py-1 px-3 text-white fw-300 border-0"
                >
                  پاک کردن همه
                </button>
              </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" className="w-100 title-line" height="2" viewBox="0 0 1289 2" fill="none">
              <line opacity="0.3" x1="0.75" y1="1.25" x2="1288.25" y2="1.25" stroke="black" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="1288.25" y1="0.75" x2="1067.18" y2="0.75" stroke="url(#compare-grad)" strokeWidth="1.5" strokeLinecap="round" />
              <defs>
                <linearGradient id="compare-grad" x1="1289" y1="-0.88251" x2="1288.93" y2="3.52893" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5B6CCC" />
                  <stop offset="1" stopColor="#4834AC" />
                </linearGradient>
              </defs>
            </svg>

            {/* جدول */}
            <div className="row fs-14 mt-3">
              <div className="col-xl-2 col-lg-3 d-none d-lg-block px-0 fw-bold">
                <div className="p-3 position-relative invisible">
                  <img alt="product" src="/assets/img/compare.png" className="img-fluid mx-auto d-block mt-4" />
                  <a className="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">نام محصول</a>
                </div>
                {features.map((feat) => (
                  <div key={feat.key} className="border-top py-3">{feat.label}</div>
                ))}
              </div>

              <div className="col-xl-10 col-lg-9 text-center text-gray">
                <div className="row gy-4">
                  {compareList.map((product, pIdx) => (
                    <div
                      key={product.id}
                      className={`col-lg-3 col-6 flex-grow-1 px-0 ${pIdx !== compareList.length - 1 ? 'border-end' : ''
                        }`}
                    >
                      <div className="product-compare-item">
                        <div className="p-3 position-relative">
                          <button
                            onClick={() => removeFromCompare(product.id)}
                            className="position-absolute left-20 cursor-pointer border-0 bg-transparent"
                            title="حذف از مقایسه"
                          >
                            <RemoveIcon />
                          </button>
                          <img
                            alt="product"
                            src={product.image}
                            className="img-fluid mx-auto d-block mt-4"
                            style={{ height: 100, objectFit: 'contain' }}
                          />
                          <Link
                            to={`/product/${product.id}`}
                            className="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65 text-decoration-none"
                          >
                            {product.title}
                          </Link>
                        </div>
                        {features.map((feat) => (
                          <div key={feat.key} className="border-top py-3">
                            <p className="fw-bold text-dark d-lg-none">{feat.label}</p>
                            <p className="mb-0">{product[feat.key] || '—'}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Shoar />

      <img alt="wave" src="/assets/img/footerWave.png" className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-md-block d-none" />
      <img alt="wave" src="/assets/img/footerBg2.png" className="img-fluid w-100 position-absolute -bottom-210 end-0 start-0 d-block d-md-none" />
    </main>
  );
}