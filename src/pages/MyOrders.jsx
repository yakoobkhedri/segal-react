// src/pages/MyOrders.jsx
import { Link } from 'react-router-dom';
import ProfileSidebar from '../components/profile/ProfileSidebar';

// داده‌های نمونه سفارش
const orderData = {
  orderNumber: '۱۲۳۴۵۶',
  date: '۹ خرداد ۱۴۰۲',
  status: 'تکمیل شده',
  statusColor: 'bg-second2',
  products: [
    {
      id: 1,
      title: 'Macbook Air 2021 لپ تاپ 13 اینچی اپل مدل',
      category: 'لپ تاپ',
      brand: 'اپل',
      color: 'رزگلد',
      quantity: 2,
      price: '21،350،000',
      image: '/assets/img/order.png',
    },
    {
      id: 2,
      title: 'Macbook Air 2021 لپ تاپ 13 اینچی اپل مدل',
      category: 'لپ تاپ',
      brand: 'اپل',
      color: 'رزگلد',
      quantity: 2,
      price: '21،350،000',
      image: '/assets/img/order.png',
    },
  ],
  address: 'تهران، شریعتی، نبش کودکان غزه، پلاک ۵۰ - کدپستی: ۱۲۳۴۵۶۷۸۸۹۰',
  trackingCode: '۶۰۲۸۴۷۵۷۱۹۸۳۸۹۴۹۸۳۵۴۹۱',
  deliveryTime: '۱۳ خرداد ۱۴۰۲ - بازه ۱۰ تا ۱۶',
  shippingStatus: 'تحویل داده شده به انبار',
  shippingProgress: 75,
  productCost: '۲۱،۳۵۰،۰۰۰',
  shippingCost: '۵۵،۶۰۰',
  totalCost: '۲۱،۳۹۵،۶۰۰',
};

function ProductIcon() {
  return (
    <svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
      <path
        d="M9.11527 14.2062C9.49543 14.2062 9.82807 14.1461 10.1132 14.026C10.4069 13.906 10.6532 13.743 10.8519 13.5372C11.0506 13.3313 11.2018 13.0912 11.3055 12.8167C11.4092 12.5509 11.4697 12.2678 11.4869 11.9677H10.1909C9.75031 11.9677 9.38743 11.9205 9.10231 11.8261C8.81719 11.7318 8.59255 11.5946 8.42839 11.4145C8.26423 11.2344 8.14759 11.0199 8.07847 10.7712C8.01799 10.5139 7.98776 10.2266 7.98776 9.90926C7.98776 9.58335 8.03527 9.2746 8.13031 8.98299C8.22535 8.69139 8.36359 8.43409 8.54503 8.21109C8.72647 7.9881 8.95111 7.81228 9.21895 7.68363C9.49543 7.54641 9.81079 7.4778 10.165 7.4778C10.4501 7.4778 10.7223 7.52497 10.9815 7.61931C11.2407 7.71365 11.4697 7.86374 11.6684 8.06958C11.8671 8.26684 12.0226 8.52843 12.1349 8.85434C12.2559 9.17168 12.3164 9.55763 12.3164 10.0122V11.08H13.5605C13.6642 11.08 13.7333 11.1186 13.7679 11.1958C13.8111 11.2644 13.8327 11.3716 13.8327 11.5174C13.8327 11.6718 13.8111 11.7875 13.7679 11.8647C13.7333 11.9333 13.6642 11.9677 13.5605 11.9677H12.2905C12.2732 12.3879 12.1868 12.7867 12.0313 13.1641C11.8844 13.5415 11.677 13.8717 11.4092 14.1547C11.1413 14.4377 10.8217 14.6607 10.4501 14.8237C10.0786 14.9952 9.65959 15.081 9.19303 15.081H7.81928L7.74152 14.2062H9.11527ZM8.79127 9.85781C8.79127 10.0722 8.81287 10.2566 8.85607 10.411C8.90791 10.5654 8.98999 10.694 9.10231 10.7969C9.22327 10.8913 9.38311 10.9642 9.58183 11.0157C9.78055 11.0585 10.0311 11.08 10.3335 11.08H11.4999V10.1151C11.4999 9.48044 11.3746 9.02587 11.1241 8.75142C10.8735 8.47697 10.5279 8.33974 10.0873 8.33974C9.67255 8.33974 9.35287 8.47697 9.12823 8.75142C8.90359 9.02587 8.79127 9.39467 8.79127 9.85781Z"
        fill="#27817A"
      />
      <path
        d="M14.7303 11.08C15.0672 11.08 15.3351 10.9899 15.5338 10.8098C15.7411 10.6297 15.8448 10.381 15.8448 10.0636V8.28829H16.6872V10.0636C16.6872 10.6726 16.5144 11.1443 16.1688 11.4788C15.8319 11.8047 15.3696 11.9677 14.7821 11.9677H13.5639C13.4516 11.9677 13.3781 11.9333 13.3436 11.8647C13.3004 11.7961 13.2788 11.6889 13.2788 11.5431C13.2788 11.3887 13.3004 11.273 13.3436 11.1958C13.3781 11.1186 13.4516 11.08 13.5639 11.08H14.7303ZM16.8168 6.64157H15.78V5.72817H16.8168V6.64157ZM15.1709 6.64157H14.1341V5.72817H15.1709V6.64157Z"
        fill="#27817A"
      />
      <path
        d="M1.72367 14.832C1.49903 14.832 1.28303 14.802 1.07568 14.7419C0.868316 14.6733 0.682557 14.5618 0.518398 14.4074C0.362879 14.253 0.237599 14.0515 0.142559 13.8028C0.0475198 13.5455 0 13.2281 0 12.8508V6.85572H0.842396V12.6964C0.842396 13.0566 0.920156 13.3568 1.07568 13.5969C1.23983 13.8285 1.50335 13.9443 1.86623 13.9443H2.08655C2.27663 13.9443 2.37167 14.0901 2.37167 14.3817C2.37167 14.6819 2.27663 14.832 2.08655 14.832H1.72367Z"
        fill="#27817A"
      />
      <path
        d="M2.29999 13.9443C2.63694 13.9443 2.89182 13.8628 3.06462 13.6999C3.23742 13.5369 3.32382 13.3182 3.32382 13.0437V12.5549C3.32382 11.8087 3.5139 11.2255 3.89406 10.8052C4.28286 10.385 4.81854 10.1749 5.50109 10.1749C5.85533 10.1749 6.16637 10.2306 6.43421 10.3421C6.70205 10.4536 6.92237 10.6123 7.09517 10.8181C7.2766 11.024 7.41052 11.2684 7.49692 11.5514C7.58332 11.8344 7.62652 12.1475 7.62652 12.4906C7.62652 13.2281 7.43212 13.8028 7.04333 14.2145C6.65453 14.6261 6.12317 14.832 5.44925 14.832C5.10365 14.832 4.77102 14.7676 4.45134 14.639C4.13166 14.5018 3.8811 14.2616 3.69966 13.9186C3.6219 14.1158 3.52686 14.2745 3.41454 14.3946C3.30222 14.5146 3.18558 14.609 3.06462 14.6776C2.94366 14.7376 2.81406 14.7805 2.67582 14.8062C2.54622 14.8234 2.42094 14.832 2.29999 14.832H2.09263C1.98031 14.832 1.90687 14.7977 1.87231 14.729C1.82911 14.6604 1.80751 14.5532 1.80751 14.4074C1.80751 14.253 1.82911 14.1373 1.87231 14.0601C1.90687 13.9829 1.98031 13.9443 2.09263 13.9443H2.29999ZM6.79709 12.5677C6.79709 12.1218 6.69773 11.7615 6.49901 11.4871C6.30029 11.2041 5.95901 11.0625 5.47517 11.0625C4.57662 11.0625 4.12734 11.5814 4.12734 12.6192C4.12734 13.0566 4.2483 13.3868 4.49022 13.6098C4.74078 13.8328 5.06045 13.9443 5.44925 13.9443C5.88989 13.9443 6.22253 13.8242 6.44717 13.5841C6.68045 13.3439 6.79709 13.0052 6.79709 12.5677Z"
        fill="#27817A"
      />
      <path
        d="M8.80924 5.56367C8.80924 6.02681 8.7358 6.45993 8.58892 6.86303C8.44204 7.2747 8.23036 7.63064 7.95388 7.93082C7.6774 8.23958 7.34044 8.48401 6.943 8.66412C6.55421 8.84423 6.11357 8.93428 5.62109 8.93428H4.85645C3.88878 8.93428 3.1371 8.63839 2.60142 8.0466C2.06574 7.45481 1.79791 6.64433 1.79791 5.61513V3.36377H2.62734V5.5894C2.62734 5.9582 2.67054 6.29268 2.75694 6.59287C2.85198 6.89305 2.99454 7.15034 3.18462 7.36476C3.38334 7.58775 3.62958 7.75928 3.92334 7.87936C4.21709 7.99943 4.57133 8.05947 4.98605 8.05947H5.55629C5.96237 8.05947 6.31661 7.99085 6.61901 7.85363C6.9214 7.72498 7.17196 7.54916 7.37068 7.32617C7.57804 7.10317 7.72924 6.84159 7.82428 6.5414C7.92796 6.24122 7.9798 5.92818 7.9798 5.60227V2.1416H8.80924V5.56367ZM5.68589 1.85857H4.59725V0.919434H5.68589V1.85857Z"
        fill="#27817A"
      />
    </svg>
  );
}

export default function MyOrders() {
  return (
    <main className="mt-4 pb-5 mb-5">
      <section className="mb-5 pb-5" id="profile">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-4">
            <ProfileSidebar />

            <div className="flex-grow-1">
              <div className="rounded-22 p-4 bg-white shadow6">
                {/* هدر سفارش */}
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <circle cx="5.00488" cy="5" r="5" fill="#27817A" />
                    </svg>
                    <p className="mb-0 fs-14">
                      <span className="font-bold">سفارش</span> {orderData.orderNumber}
                    </p>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <p className="fs-14 text-gray mb-0">{orderData.date}</p>
                    <div className="fs-11 bg-second2 rounded-pill py-1 px-3 text-white fw-300">
                      {orderData.status}
                    </div>
                  </div>
                </div>

                {/* خط تیتر */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-100 title-line" height="2" viewBox="0 0 864 2" fill="none">
                  <line opacity="0.3" x1="0.75" y1="1.25" x2="863.25" y2="1.25" stroke="black" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="863.255" y1="0.75" x2="712.755" y2="0.75" stroke="url(#orders-grad)" strokeWidth="1.5" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="orders-grad" x1="864.005" y1="-0.88251" x2="863.902" y2="3.52766" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5B6CCC" />
                      <stop offset="1" stopColor="#4834AC" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* لیست محصولات */}
                <div>
                  {orderData.products.map((product) => (
                    <div
                      key={product.id}
                      className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-start align-items-end py-3 border-bottom border-2"
                    >
                      <div className="d-flex gap-4 w-100">
                        <img
                          alt="order"
                          src={product.image}
                          className="img-fluid"
                          style={{ width: 80, height: 80, objectFit: 'contain' }}
                        />
                        <div className="mt-2">
                          <p className="font-bold fs-14 mb-2">{product.title}</p>
                          <div className="d-flex flex-wrap align-items-center gap-2">
                            <p className="mb-0 fs-14 text-gray">{product.category}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                              <rect opacity="0.6" x="0.615234" y="0.5" width="3" height="3" fill="black" />
                            </svg>
                            <p className="mb-0 fs-12 text-gray">{product.brand}</p>
                            <div className="d-flex align-items-center gap-2">
                              <p className="fs-12 fw-bold text-dark mb-0">رنگ:</p>
                              <p className="mb-0 fs-12 text-gray">{product.color}</p>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                              <p className="fs-12 fw-bold text-dark mb-0">تعداد:</p>
                              <p className="mb-0 fs-12 text-gray">{product.quantity}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-end gap-1 mt-2">
                        <p className="mb-0 fs-18 font-bold">{product.price}</p>
                        <ProductIcon />
                      </div>
                    </div>
                  ))}
                </div>

                {/* اطلاعات ارسال */}
                <div className="py-4 border-bottom border-2">
                  <div className="d-flex flex-column flex-sm-row text-center align-items-center justify-content-between mb-4">
                    <p className="fw-bold fs-14 mb-0">آدرس دریافت:</p>
                    <p className="fs-14 mb-0 text-secondary">{orderData.address}</p>
                  </div>
                  <div className="d-flex flex-column flex-sm-row text-center align-items-center justify-content-between mb-4">
                    <p className="fw-bold fs-14 mb-0">کدپیگیری مرسوله:</p>
                    <p className="fs-14 mb-0 text-secondary">{orderData.trackingCode}</p>
                  </div>
                  <div className="d-flex flex-column flex-sm-row text-center align-items-center justify-content-between mb-4">
                    <p className="fw-bold fs-14 mb-0">زمان تحویل:</p>
                    <p className="fs-14 mb-0 text-secondary">{orderData.deliveryTime}</p>
                  </div>
                  <div className="d-flex flex-column flex-md-row gap-3 align-items-center justify-content-between">
                    <p className="fw-bold fs-14 mb-0">وضعیت مرسوله:</p>
                    <div className="d-flex flex-column flex-sm-row align-items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.5" d="M12.0001 2C16.7131 2 19.0701 2 20.5351 3.464C21.2921 4.222 21.6581 5.218 21.8351 6.656V10H2.16406V6.656C2.34006 5.218 2.70506 4.222 3.46306 3.464C4.92806 2 7.28506 2 11.9991 2H12.0001Z" fill="#27817A" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 14C2 11.2 2 9.8 2.545 8.73C3.02436 7.78923 3.78923 7.02436 4.73 6.545C5.8 6 7.2 6 10 6H14C16.8 6 18.2 6 19.27 6.545C20.2108 7.02436 20.9756 7.78923 21.455 8.73C22 9.8 22 11.2 22 14C22 16.8 22 18.2 21.455 19.27C20.9756 20.2108 20.2108 20.9756 19.27 21.455C18.2 22 16.8 22 14 22H10C7.2 22 5.8 22 4.73 21.455C3.78923 20.9756 3.02436 20.2108 2.545 19.27C2 18.2 2 16.8 2 14ZM12.53 10.47C12.3894 10.3295 12.1988 10.2507 12 10.2507C11.8012 10.2507 11.6106 10.3295 11.47 10.47L8.97 12.97C8.89631 13.0387 8.83721 13.1215 8.79622 13.2135C8.75523 13.3055 8.73318 13.4048 8.73141 13.5055C8.72963 13.6062 8.74816 13.7062 8.78588 13.7996C8.8236 13.893 8.87974 13.9778 8.95096 14.049C9.02218 14.1203 9.10701 14.1764 9.2004 14.2141C9.29379 14.2518 9.39382 14.2704 9.49452 14.2686C9.59522 14.2668 9.69454 14.2448 9.78654 14.2038C9.87854 14.1628 9.96134 14.1037 10.03 14.03L11.25 12.81V17C11.25 17.1989 11.329 17.3897 11.4697 17.5303C11.6103 17.671 11.8011 17.75 12 17.75C12.1989 17.75 12.3897 17.671 12.5303 17.5303C12.671 17.3897 12.75 17.1989 12.75 17V12.81L13.97 14.03C14.0387 14.1037 14.1215 14.1628 14.2135 14.2038C14.3055 14.2448 14.4048 14.2668 14.5055 14.2686C14.6062 14.2704 14.7062 14.2518 14.7996 14.2141C14.893 14.1764 14.9778 14.1203 15.049 14.049C15.1203 13.9778 15.1764 13.893 15.2141 13.7996C15.2518 13.7062 15.2704 13.6062 15.2686 13.5055C15.2668 13.4048 15.2448 13.3055 15.2038 13.2135C15.1628 13.1215 15.1037 13.0387 15.03 12.97L12.53 10.47Z" fill="#27817A" />
                      </svg>
                      <p className="mb-0 text-secondary fs-14 flex-shrink-0">{orderData.shippingStatus}</p>
                      <div className="w-269 h-8 rounded-33 overflow-hidden bg-gray3">
                        <div className="h-100 rounded-33 bg-gradient-main" style={{ width: `${orderData.shippingProgress}%` }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* هزینه‌ها */}
                <div className="pt-4">
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-4">
                    <p className="fw-bold fs-14 mb-0">هزینه محصولات:</p>
                    <p className="fs-14 mb-0 text-secondary">{orderData.productCost} تومان</p>
                  </div>
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-4">
                    <p className="fw-bold fs-14 mb-0">هزینه ارسال و بسته بندی:</p>
                    <p className="fs-14 mb-0 text-secondary">{orderData.shippingCost} تومان</p>
                  </div>
                  <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
                    <p className="fw-bold fs-14 mb-0">هزینه کل:</p>
                    <p className="fs-14 font-bold mb-0">{orderData.totalCost} تومان</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}