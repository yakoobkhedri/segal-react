// src/components/product/ProductCard.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useCompare } from '../../context/CompareContext';
import { useToast } from '../../context/ToastContext';
import { useWishlist } from '../../context/WishlistContext';

// تبدیل عدد به قیمت فارسی با جداکننده هزارگان
export function formatPrice(num) {
  if (!num || num === 0) return '۰';
  return num.toLocaleString('fa-IR');
}

// درصد تخفیف
function calcDiscount(price, oldPrice) {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
}

// آیکون Compare (دو مربع و یک لیست)
function CompareIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M13 15.4C13 13.326 13 12.289 13.659 11.644C14.318 11 15.379 11 17.5 11C19.621 11 20.682 11 21.341 11.644C22 12.29 22 13.326 22 15.4V17.6C22 19.674 22 20.711 21.341 21.356C20.682 22 19.621 22 17.5 22C15.379 22 14.318 22 13.659 21.356C13 20.71 13 19.674 13 17.6V15.4Z"
        fill="black"
      />
      <path
        d="M2 8.6C2 10.674 2 11.711 2.659 12.356C3.318 13 4.379 13 6.5 13C8.621 13 9.682 13 10.341 12.356C11 11.71 11 10.674 11 8.6V6.4C11 4.326 11 3.289 10.341 2.644C9.682 2 8.621 2 6.5 2C4.379 2 3.318 2 2.659 2.644C2 3.29 2 4.326 2 6.4V8.6ZM13 5.5C13 4.413 13 3.87 13.171 3.44C13.3937 2.87455 13.8318 2.42064 14.389 2.178C14.802 2 15.327 2 16.375 2H18.625C19.673 2 20.198 2 20.611 2.178C21.162 2.414 21.601 2.868 21.829 3.44C22 3.87 22 4.413 22 5.5C22 6.587 22 7.13 21.829 7.56C21.6063 8.12545 21.1682 8.57936 20.611 8.822C20.198 9 19.673 9 18.625 9H16.375C15.327 9 14.802 9 14.389 8.822C13.8318 8.57936 13.3937 8.12545 13.171 7.56C13 7.13 13 6.587 13 5.5Z"
        fill="black"
      />
      <path
        opacity="0.5"
        d="M2 18.5C2 19.587 2 20.13 2.171 20.56C2.39372 21.1255 2.8318 21.5794 3.389 21.822C3.802 22 4.327 22 5.375 22H7.625C8.673 22 9.198 22 9.611 21.822C10.162 21.586 10.601 21.132 10.829 20.56C11 20.13 11 19.587 11 18.5C11 17.413 11 16.87 10.829 16.44C10.6063 15.8745 10.1682 15.4206 9.611 15.178C9.198 15 8.673 15 7.625 15H5.375C4.327 15 3.802 15 3.389 15.178C2.838 15.414 2.399 15.868 2.171 16.44C2 16.87 2 17.413 2 18.5Z"
        fill="black"
      />
    </svg>
  );
}

// آیکون Share
function ShareIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.803 5.33301C13.803 3.49301 15.303 2.00001 17.151 2.00001C17.5897 1.99896 18.0244 2.08433 18.4302 2.25126C18.8359 2.41819 19.2048 2.66341 19.5158 2.97291C19.8268 3.2824 20.0738 3.65012 20.2426 4.05507C20.4115 4.46002 20.499 4.89426 20.5 5.33301C20.5 7.17401 19 8.66701 17.151 8.66701C16.7076 8.66756 16.2685 8.57996 15.8592 8.40932C15.45 8.23868 15.0787 7.98839 14.767 7.67301L10.132 10.829C10.2611 11.472 10.1978 12.1388 9.95 12.746L15.032 16.086C15.6306 15.5978 16.3796 15.3318 17.152 15.333C17.5907 15.3321 18.0254 15.4176 18.4311 15.5846C18.8368 15.7517 19.2056 15.997 19.5165 16.3066C19.8274 16.6162 20.0743 16.984 20.243 17.389C20.4118 17.794 20.4991 18.2283 20.5 18.667C20.5 20.507 19 22 17.151 22C16.2651 22.0019 15.4147 21.6518 14.7869 21.0268C14.159 20.4017 13.8051 19.5529 13.803 18.667C13.8022 18.1996 13.9007 17.7374 14.092 17.311L9.05 14C8.43941 14.5309 7.65712 14.8226 6.848 14.821C6.40922 14.8221 5.97453 14.7366 5.56877 14.5696C5.16301 14.4026 4.79413 14.1573 4.48321 13.8477C4.17229 13.5381 3.92543 13.1702 3.75673 12.7652C3.58802 12.3601 3.50079 11.9258 3.5 11.487C3.50092 11.0483 3.58825 10.6141 3.75701 10.2091C3.92578 9.80421 4.17266 9.43648 4.48356 9.12697C4.79447 8.81746 5.1633 8.57223 5.569 8.40528C5.97469 8.23834 6.4093 8.15296 6.848 8.15401C7.912 8.15401 8.858 8.64701 9.471 9.41501L13.964 6.35601C13.8571 6.02554 13.8028 5.68034 13.803 5.33301Z"
        fill="black"
      />
    </svg>
  );
}

// آیکون سبد خرید (برای دکمه)
function CartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M6.25 15C6.58152 15 6.89946 15.1317 7.13388 15.3661C7.3683 15.6005 7.5 15.9185 7.5 16.25C7.5 16.5815 7.3683 16.8995 7.13388 17.1339C6.89946 17.3683 6.58152 17.5 6.25 17.5C5.91848 17.5 5.60054 17.3683 5.36612 17.1339C5.1317 16.8995 5 16.5815 5 16.25C5 15.9185 5.1317 15.6005 5.36612 15.3661C5.60054 15.1317 5.91848 15 6.25 15ZM13.75 15C14.0815 15 14.3995 15.1317 14.6339 15.3661C14.8683 15.6005 15 15.9185 15 16.25C15 16.5815 14.8683 16.8995 14.6339 17.1339C14.3995 17.3683 14.0815 17.5 13.75 17.5C13.4185 17.5 13.1005 17.3683 12.8661 17.1339C12.6317 16.8995 12.5 16.5815 12.5 16.25C12.5 15.9185 12.6317 15.6005 12.8661 15.3661C13.1005 15.1317 13.4185 15 13.75 15Z"
        fill="#27817A"
      />
      <path
        opacity="0.5"
        d="M1.73648 2.29254C1.79142 2.13619 1.90622 2.00806 2.05561 1.93633C2.20501 1.8646 2.37678 1.85514 2.53315 1.91004L2.78398 1.99837C3.29815 2.1792 3.73398 2.33254 4.07815 2.50087C4.44481 2.6817 4.75981 2.90337 4.99648 3.25004C5.23148 3.59337 5.32898 3.97087 5.37315 4.38504C5.39315 4.57004 5.40398 4.77504 5.40981 5.00004H14.2748C15.679 5.00004 16.9431 5.00004 17.3131 5.48087C17.6831 5.9617 17.5381 6.6867 17.249 8.13587L16.8323 10.1567C16.5698 11.43 16.439 12.0675 15.979 12.4417C15.519 12.8167 14.869 12.8167 13.5681 12.8167H9.14898C6.82398 12.8167 5.66231 12.8167 4.94065 12.055C4.21898 11.2934 4.16565 10.485 4.16565 8.03337V5.86504C4.16565 5.24837 4.16565 4.83587 4.13065 4.5192C4.09731 4.2167 4.03981 4.06504 3.96398 3.95504C3.89148 3.84754 3.78065 3.7467 3.52731 3.62337C3.25815 3.4917 2.89231 3.3617 2.33565 3.16587L2.11898 3.09004C2.04139 3.06292 1.96991 3.02076 1.90864 2.96598C1.84737 2.9112 1.7975 2.84488 1.76189 2.7708C1.72628 2.69672 1.70564 2.61635 1.70113 2.53428C1.69663 2.45222 1.70836 2.37007 1.73565 2.29254H1.73648Z"
        fill="#27817A"
      />
      <path
        d="M11.4582 7.5C11.4582 7.33424 11.3923 7.17527 11.2751 7.05806C11.1579 6.94085 10.9989 6.875 10.8332 6.875C10.6674 6.875 10.5084 6.94085 10.3912 7.05806C10.274 7.17527 10.2082 7.33424 10.2082 7.5V8.54167H9.1665C9.00074 8.54167 8.84177 8.60752 8.72456 8.72473C8.60735 8.84194 8.5415 9.00091 8.5415 9.16667C8.5415 9.33243 8.60735 9.4914 8.72456 9.60861C8.84177 9.72582 9.00074 9.79167 9.1665 9.79167H10.2082V10.8333C10.2082 10.9991 10.274 11.1581 10.3912 11.2753C10.5084 11.3925 10.6674 11.4583 10.8332 11.4583C10.9989 11.4583 11.1579 11.3925 11.2751 11.2753C11.3923 11.1581 11.4582 10.9991 11.4582 10.8333V9.79167H12.4998C12.6656 9.79167 12.8246 9.72582 12.9418 9.60861C13.059 9.4914 13.1248 9.33243 13.1248 9.16667C13.1248 9.00091 13.059 8.84194 12.9418 8.72473C12.8246 8.60752 12.6656 8.54167 12.4998 8.54167H11.4582V7.5Z"
        fill="#27817A"
      />
    </svg>
  );
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToCompare, removeFromCompare, isInCompare } = useCompare();
  const { showToast } = useToast();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const isComparing = isInCompare(product.id);
  const isWished = isInWishlist(product.id);

  const discount = calcDiscount(product.price, product.oldPrice);
  const hasPrice = product.price > 0;
  const inStock = product.stock !== false;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!inStock) return;
    addToCart(product);
    showToast('به سبد خرید اضافه شد', 'success');
  };

  return (
    <div className="rounded-21 bg-white p-3 shadow10 position-relative h-100">
      {/* دکمه‌های Compare و Share */}
      <ul className="list-unstyled pe-0 mb-0 min-w-50 position-absolute end-0 left-ltr-auto">
        <li>
          <button
            type="button"
            className="px-0 border-0 bg-transparent mb-2"
            title={isWished ? 'حذف از علاقه‌مندی' : 'افزودن به علاقه‌مندی'}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const added = toggleWishlist(product);
              showToast(
                added ? 'به علاقه‌مندی‌ها اضافه شد' : 'از علاقه‌مندی‌ها حذف شد',
                added ? 'success' : 'info'
              );
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={isWished ? '#ef4444' : 'none'}
              stroke={isWished ? '#ef4444' : '#000'}
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </li>
        <li className="mb-2">
          <button
            type="button"
            className="px-0 border-0 bg-transparent"
            title={isComparing ? 'حذف از مقایسه' : 'افزودن به مقایسه'}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (isComparing) {
                removeFromCompare(product.id);
                showToast('از لیست مقایسه حذف شد', 'info');
              } else {
                addToCompare(product);
                showToast('به لیست مقایسه اضافه شد', 'success');
              }
            }}
          >
            <div style={{ opacity: isComparing ? 0.5 : 1 }}>
              <CompareIcon />
            </div>
          </button>
        </li>
        <li>
          <button
            type="button"
            className="px-0 border-0 bg-transparent"
            title="اشتراک‌گذاری"
          >
            <ShareIcon />
          </button>
        </li>
      </ul>

      {/* برچسب تخفیف */}
      {discount > 0 && hasPrice && (
        <span className="position-absolute z-0 ms-2 top-0 start-0 bg-danger text-white fs-11 fw-bold px-2 py-1 rounded-bl-12 z-10 mt-2 me-2 rounded-pill">
          {discount}٪
        </span>
      )}

      <Link to={`/product/${product.id}`} className="text-decoration-none d-block">
        {/* تصویر */}
        <div className="d-flex align-items-center justify-content-center mt-4" style={{ height: 170 }}>
          <img
            alt={product.title}
            src={product.image}
            className="img-fluid mx-auto d-block"
            style={{ maxHeight: '100%', objectFit: 'contain' }}
            onError={(e) => {
              e.target.src = '/assets/img/related-product.png';
            }}
          />
        </div>

        {/* عنوان */}
        <div className="fs-14 fw-bold text-black2 mt-4 h-65">
          {product.title}
        </div>
      </Link>

      {/* قیمت / دکمه */}
      {hasPrice ? (
        inStock ? (
          <div className="d-flex align-items-center gap-3 h-65">
            {/* دکمه افزودن به سبد */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38 border-0"
              title="افزودن به سبد"
            >
              <CartIcon />
            </button>

            {/* قیمت */}
            <div className="flex-grow-1">
              {product.oldPrice > product.price && (
                <div className="d-flex align-items-center justify-content-end gap-2">
                  <p className="fs-12 text-gray text-decoration-line-through mb-0">
                    {formatPrice(product.oldPrice)}
                  </p>
                  <p className="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill">
                    {discount}٪
                  </p>
                </div>
              )}
              <div className="d-flex align-items-end justify-content-end gap-1 mt-1">
                <p className="fs-17 font-bold mb-0">{formatPrice(product.price)}</p>
                <p className="mb-1 fs-12 fw-bold">تومان</p>
              </div>
            </div>
          </div>
        ) : (
          // ناموجود
          <div className="d-flex align-items-center justify-content-center p-3 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65">
            <p className="mb-0">ناموجود</p>
          </div>
        )
      ) : (
        // بدون قیمت
        <a className="d-flex align-items-center px-2 justify-content-center p-3 bg-white rounded-15 gap-2 fs-11 fw-bold text-second-gradient shadow8 h-65 cursor-pointer">
          <svg
            className="flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <g opacity="0.4">
              <path
                d="M12.5149 4.57512C12.1182 4.50184 11.7539 4.755 11.6783 5.14224C11.6028 5.52947 11.8568 5.90754 12.2427 5.98333C13.4046 6.20984 14.3017 7.10922 14.5291 8.27508C14.5938 8.61069 14.8893 8.85552 15.2296 8.85552C15.2752 8.85552 15.3208 8.85136 15.3673 8.84303C15.7532 8.76558 16.0072 8.38834 15.9317 8.00027C15.5922 6.25897 14.2519 4.91406 12.5149 4.57512Z"
                fill="url(#paint0_linear_card)"
              />
              <path
                d="M12.463 1.67336C12.2771 1.64671 12.0904 1.70167 11.9419 1.81992C11.7892 1.93984 11.6937 2.11305 11.673 2.30709C11.629 2.69932 11.912 3.05407 12.3037 3.09821C15.0051 3.39967 17.1048 5.50406 17.4085 8.21387C17.4492 8.57695 17.7538 8.85093 18.1173 8.85093C18.1447 8.85093 18.1712 8.84926 18.1986 8.84593C18.3887 8.82511 18.558 8.73101 18.6775 8.58111C18.7961 8.43122 18.8501 8.24468 18.8285 8.05398C18.4501 4.67296 15.8333 2.04893 12.463 1.67336Z"
                fill="url(#paint1_linear_card)"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.69295 10.8103C13.0172 14.1336 13.7713 10.2889 15.8879 12.404C17.9284 14.444 19.1012 14.8527 16.5159 17.4373C16.192 17.6975 14.1345 20.8285 6.90367 13.5997C-0.328061 6.37 2.80116 4.31037 3.06148 3.98662C5.65306 1.39487 6.05472 2.57449 8.09524 4.61444C10.2118 6.73041 6.36872 7.48701 9.69295 10.8103Z"
              fill="url(#paint2_linear_card)"
            />
            <defs>
              <linearGradient id="paint0_linear_card" x1="11.665" y1="8.35113" x2="16.6198" y2="6.95183" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5B6CCC" />
                <stop offset="1" stopColor="#4834AC" />
              </linearGradient>
              <linearGradient id="paint1_linear_card" x1="11.6685" y1="8.00686" x2="19.9624" y2="5.6637" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5B6CCC" />
                <stop offset="1" stopColor="#4834AC" />
              </linearGradient>
              <linearGradient id="paint2_linear_card" x1="2.1665" y1="16.4731" x2="20.4879" y2="11.2829" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5B6CCC" />
                <stop offset="1" stopColor="#4834AC" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mb-0">لطفا برای اطلاع از قیمت با ما تماس بگیرید</p>
        </a>
      )}
    </div>
  );
}