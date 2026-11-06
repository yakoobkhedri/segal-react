// src/pages/Login.jsx
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

// کدهای ثابت برای دمو (در پروژه واقعی از بک‌اند می‌آید)
const DEMO_OTP = '12345';
const DEMO_SECURE_CODE = '858569';

// تبدیل ارقام فارسی/عربی به لاتین
const toEnglishDigits = (str) =>
  String(str)
    .replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/profile';
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [secureCode, setSecureCode] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const inputRefs = useRef([]);
  const { showToast } = useToast();
  const toastShownRef = useRef(false);

  // Toast «برای دسترسی باید وارد شوی» فقط یک بار در StrictMode
  useEffect(() => {
    if (location.state?.from && !toastShownRef.current) {
      toastShownRef.current = true;
      showToast('برای دسترسی به این صفحه باید وارد شوی', 'info');
    }
  }, [location.state?.from, showToast]);

  // تایمر ارسال مجدد
  useEffect(() => {
    if (resendTimer <= 0) return;
    const timer = setTimeout(() => setResendTimer((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendTimer]);

  // مرحله ۱: ارسال موبایل
  const handleSendPhone = (e) => {
    e.preventDefault();
    const cleanPhone = toEnglishDigits(phone).replace(/\D/g, '');

    if (!/^09\d{9}$/.test(cleanPhone)) {
      showToast('شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد', 'error');
      return;
    }

    setPhone(cleanPhone);
    setStep('otp');
    setResendTimer(30);
    showToast('کد تایید برای شما ارسال شد (کد دمو: 12345)', 'info');
  };

  // تغییر OTP
  const handleOtpChange = (index, value) => {
    const cleanValue = toEnglishDigits(value).replace(/\D/g, '');
    if (!cleanValue) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = cleanValue.slice(-1);
    setOtp(newOtp);

    if (index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Backspace → برو به قبلی
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Paste کد ۵ رقمی
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = toEnglishDigits(e.clipboardData.getData('text'))
      .replace(/\D/g, '')
      .slice(0, 5);
    if (!pasted) return;

    const newOtp = pasted.split('').concat(['', '', '', '', '']).slice(0, 5);
    setOtp(newOtp);
    const nextIndex = Math.min(pasted.length, 4);
    inputRefs.current[nextIndex]?.focus();
  };

  // ارسال مجدد
  const handleResend = () => {
    if (resendTimer > 0) return;
    setResendTimer(30);
    showToast('کد تایید مجدداً ارسال شد (کد دمو: 12345)', 'info');
  };

  // ویرایش شماره
  const handleEditPhone = () => {
    setStep('phone');
    setOtp(['', '', '', '', '']);
    setSecureCode('');
    setResendTimer(0);
  };

  // مرحله ۲: تایید OTP و کد امنیتی
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const code = toEnglishDigits(otp.join(''));

    if (code.length < 5) {
      showToast('لطفا کد ۵ رقمی را کامل وارد کنید', 'error');
      return;
    }

    if (code !== DEMO_OTP) {
      showToast('کد تایید اشتباه است (کد دمو: 12345)', 'error');
      return;
    }

    const cleanSecure = toEnglishDigits(secureCode).trim();

    if (cleanSecure.length === 0) {
      showToast('لطفا کد امنیتی را وارد کنید', 'error');
      return;
    }

    if (cleanSecure !== DEMO_SECURE_CODE) {
      showToast('کد امنیتی اشتباه است', 'error');
      return;
    }

    login({ name: 'کاربر سگال', phone, email: 'user@segal.com' });
    showToast('ورود موفق! خوش آمدید', 'success');
    navigate(from, { replace: true });
  };

  return (
    <main className="loginContent row mx-0 mt-5 mt-lg-0">
      {/* ستون چپ: عکس پس‌زمینه */}
      <div className="col-lg-7 loginBg position-relative d-none d-lg-block">
        <img
          src="/assets/img/loginBg.png"
          alt="login bg"
          className="position-absolute end-0 bottom-0 top-0 start-0 w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* ستون راست: فرم */}
      <div className="col-lg-5 bg-gray3 d-flex align-items-center justify-content-center">
        <div className="mx-auto max-w-507 flex-shrink-0 p-3">
          {/* هدر: لوگو + تیتر */}
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/" className="d-block">
              <img alt="logo" src="/assets/img/Logo2.png" className="img-fluid" />
            </Link>
            <div className="d-flex flex-column align-items-end gap-2">
              <p className="mb-0 text-dark">ثبت نام یا ورود</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="71" height="3" viewBox="0 0 71 3" fill="none">
                <rect x="35" width="36" height="3" rx="1.5" fill="url(#login-grad)" />
                <rect x="16" width="14" height="3" rx="1.5" fill="#27817A" />
                <rect x="8" width="3" height="3" rx="1.5" fill="#232323" fillOpacity="0.5" />
                <rect width="3" height="3" rx="1.5" fill="#232323" fillOpacity="0.25" />
                <defs>
                  <linearGradient id="login-grad" x1="35" y1="2.64753" x2="38.584" y2="-9.53582" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5B6CCC" />
                    <stop offset="1" stopColor="#4834AC" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* فرم */}
          <form
            onSubmit={step === 'phone' ? handleSendPhone : handleVerifyOtp}
            className="bg-white rounded-33 p-4 px-3 px-lg-4 mt-5 position-relative z-10"
          >
            <img
              alt="shape"
              src="/assets/img/loginshape.png"
              className="position-absolute start-0 top-0 img-fluid z-0"
            />

            <div className="mt-4 pt-2">
              <label className="d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.5711 11.4329C14.2277 15.0885 15.0573 10.8593 17.3855 13.1859C19.6301 15.4299 20.9201 15.8794 18.0763 18.7225C17.7201 19.0088 15.4568 22.4529 7.50288 14.5012C-0.452029 6.5485 2.99011 4.28291 3.27646 3.92679C6.1272 1.07586 6.56903 2.37344 8.81361 4.61739C11.1418 6.94496 6.91443 7.77722 10.5711 11.4329Z"
                    fill="#27817A"
                  />
                </svg>
                <p className="mb-0 font-bold">شماره موبایل</p>
              </label>

              <div className="bg-gray2 rounded-12 p-3 d-flex align-items-center gap-2 z-10 position-relative mt-3">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(toEnglishDigits(e.target.value).replace(/\D/g, '').slice(0, 11))}
                  disabled={step === 'otp'}
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                  className="flex-grow-1 bg-transparent w-100 border-0 outline-none fs-13"
                  dir="ltr"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <g opacity="0.1">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0252 10.8778C13.2165 14.0682 13.9404 10.3773 15.9723 12.4078C17.9312 14.3661 19.0571 14.7585 16.5752 17.2397C16.2643 17.4895 14.2891 20.4953 7.34749 13.5556C0.405022 6.6151 3.40907 4.63786 3.65898 4.32706C6.1469 1.83898 6.53249 2.97141 8.4914 4.92977C10.5233 6.9611 6.83393 7.68743 10.0252 10.8778Z"
                      fill="black"
                    />
                  </g>
                </svg>
              </div>

              {step === 'otp' && (
                <button
                  type="button"
                  onClick={handleEditPhone}
                  className="fs-12 text-main border-0 bg-transparent p-0 mt-2 position-relative z-10"
                >
                  ✏️ ویرایش شماره
                </button>
              )}
            </div>

            {step === 'phone' ? (
              /* مرحله ۱: فقط دکمه ادامه */
              <button
                type="submit"
                className="d-flex w-100 position-relative border-0 align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 mt-5 mb-4 shadow2"
              >
                <p className="mb-0 fw-bold text-white">دریافت کد تایید</p>
              </button>
            ) : (
              <>
                {/* مرحله ۲: کد ۵ رقمی */}
                <p className="font-bold text-center mt-lg-5 pt-5">لطفا کد ۵ رقمی ارسال شده را وارد کنید</p>
                <p className="fs-12 text-gray text-center mb-0">کد دمو: 12345</p>

                <div className="otpContainer d-flex align-items-center gap-sm-4 gap-2 justify-content-between mt-4 pt-1 position-relative z-10" dir="ltr">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="tel"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={index === 0 ? handlePaste : undefined}
                      className="otpInput bg-gray2 text-center rounded-12 outline-none border-0 w-100 h-49"
                      style={{ fontSize: 20, fontWeight: 700 }}
                    />
                  ))}
                </div>

                {/* ارسال مجدد */}
                <div className="d-flex align-items-center justify-content-center gap-2 mt-3 position-relative z-10">
                  {resendTimer > 0 ? (
                    <p className="fs-12 text-gray mb-0">
                      ارسال مجدد تا {resendTimer} ثانیه دیگر
                    </p>
                  ) : (
                    <button
                      type="button"
                      onClick={handleResend}
                      className="fs-12 text-main border-0 bg-transparent p-0 fw-bold"
                    >
                      ارسال مجدد کد
                    </button>
                  )}
                </div>

                {/* کد امنیتی */}
                <div className="d-flex align-items-center gap-sm-4 gap-2 mt-4">
                  <p className="rounded-12 bg-gray2 fs-22 font-bold text-main w-150 h-49 d-flex align-items-center justify-content-center mb-0">
                    ۸۵۸۵۶۹
                  </p>
                  <div className="bg-gray2 rounded-12 p-3 d-flex align-items-center gap-2 z-10 position-relative flex-grow-1 h-49">
                    <input
                      value={secureCode}
                      onChange={(e) => setSecureCode(toEnglishDigits(e.target.value))}
                      placeholder="کد امنیتی"
                      className="flex-grow-1 bg-transparent w-100 border-0 outline-none fs-13"
                      dir="ltr"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                      <g opacity="0.1">
                        <path
                          d="M13.8714 2.5C16.5834 2.5 18.3994 4.404 18.3994 7.236V13.772C18.3994 16.596 16.5834 18.5 13.8714 18.5H6.93541C4.22341 18.5 2.39941 16.596 2.39941 13.772V7.236C2.39941 4.404 4.22341 2.5 6.93541 2.5H13.8714ZM13.9834 9.5408C13.4554 9.5408 13.0234 9.972 13.0234 10.5C13.0234 11.028 13.4554 11.46 13.9834 11.46C14.5114 11.46 14.9354 11.028 14.9354 10.5C14.9354 9.972 14.5114 9.5408 13.9834 9.5408ZM10.3994 9.5408C9.87141 9.5408 9.43941 9.972 9.43941 10.5C9.43941 11.028 9.87141 11.46 10.3994 11.46C10.9274 11.46 11.3594 11.028 11.3594 10.5C11.3594 9.972 10.9274 9.5408 10.3994 9.5408ZM6.81541 9.5408C6.28741 9.5408 5.85541 9.972 5.85541 10.5C5.85541 11.028 6.28741 11.46 6.81541 11.46C7.34341 11.46 7.77541 11.028 7.77541 10.5C7.77541 9.972 7.34341 9.5408 6.81541 9.5408Z"
                          fill="black"
                        />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* دکمه تایید */}
                <button
                  type="submit"
                  className="d-flex w-100 border-0 align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 mt-5 mb-4 shadow2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7.5 18C7.89782 18 8.27936 18.158 8.56066 18.4393C8.84196 18.7206 9 19.1022 9 19.5C9 19.8978 8.84196 20.2794 8.56066 20.5607C8.27936 20.842 7.89782 21 7.5 21C7.10218 21 6.72064 20.842 6.43934 20.5607C6.15804 20.2794 6 19.8978 6 19.5C6 19.1022 6.15804 18.7206 6.43934 18.4393C6.72064 18.158 7.10218 18 7.5 18ZM16.5 18C16.8978 18 17.2794 18.158 17.5607 18.4393C17.842 18.7206 18 19.1022 18 19.5C18 19.8978 17.842 20.2794 17.5607 20.5607C17.2794 20.842 16.8978 21 16.5 21C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18Z"
                      fill="white"
                    />
                    <path
                      opacity="0.5"
                      d="M2.08358 2.75109C2.14951 2.56347 2.28727 2.40972 2.46654 2.32365C2.64582 2.23757 2.85194 2.22622 3.03958 2.29209L3.34058 2.39809C3.95758 2.61509 4.48058 2.79909 4.89358 3.00109C5.33358 3.21809 5.71158 3.48409 5.99558 3.90009C6.27758 4.31209 6.39458 4.76509 6.44758 5.26209C6.47158 5.48409 6.48458 5.73009 6.49158 6.00009H17.1296C18.8146 6.00009 20.3316 6.00009 20.7756 6.57709C21.2196 7.15409 21.0456 8.02409 20.6986 9.76309L20.1986 12.1881C19.8836 13.7161 19.7266 14.4811 19.1746 14.9301C18.6226 15.3801 17.8426 15.3801 16.2816 15.3801H10.9786C8.18858 15.3801 6.79458 15.3801 5.92858 14.4661C5.06258 13.5521 4.99858 12.5821 4.99858 9.64009V7.03809C4.99858 6.29809 4.99858 5.80309 4.95658 5.42309C4.91658 5.06009 4.84758 4.87809 4.75658 4.74609C4.66958 4.61709 4.53658 4.49609 4.23258 4.34809C3.90958 4.19009 3.47058 4.03409 2.80258 3.79909L2.54258 3.70809C2.44947 3.67555 2.3637 3.62496 2.29017 3.55923C2.21664 3.49349 2.1568 3.4139 2.11407 3.32501C2.07135 3.23612 2.04657 3.13967 2.04117 3.04119C2.03576 2.94271 2.04983 2.84413 2.08258 2.75109H2.08358Z"
                      fill="white"
                    />
                    <path
                      d="M13.75 9C13.75 8.80109 13.671 8.61032 13.5303 8.46967C13.3897 8.32902 13.1989 8.25 13 8.25C12.8011 8.25 12.6103 8.32902 12.4697 8.46967C12.329 8.61032 12.25 8.80109 12.25 9V10.25H11C10.8011 10.25 10.6103 10.329 10.4697 10.4697C10.329 10.6103 10.25 10.8011 10.25 11C10.25 11.1989 10.329 11.3897 10.4697 11.5303C10.6103 11.671 10.8011 11.75 11 11.75H12.25V13C12.25 13.1989 12.329 13.3897 12.4697 13.5303C12.6103 13.671 12.8011 13.75 13 13.75C13.1989 13.75 13.3897 13.671 13.5303 13.5303C13.671 13.3897 13.75 13.1989 13.75 13V11.75H15C15.1989 11.75 15.3897 11.671 15.5303 11.5303C15.671 11.3897 15.75 11.1989 15.75 11C15.75 10.8011 15.671 10.6103 15.5303 10.4697C15.3897 10.329 15.1989 10.25 15 10.25H13.75V9Z"
                      fill="white"
                    />
                  </svg>
                  <p className="mb-0 fw-bold text-white">تایید و ورود</p>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}