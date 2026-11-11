// src/pages/Login.jsx
import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useToast } from '../context/ToastContext';

const DEMO_OTP = '12345';
const DEMO_SECURE_CODE = '858569';

const toEnglishDigits = (str) =>
  String(str)
    .replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/profile';
  const [step, setStep] = useState('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [secureCode, setSecureCode] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const inputRefs = useRef([]);
  const { showToast } = useToast();
  const toastShownRef = useRef(false);

  useEffect(() => {
    if (location.state?.from && !toastShownRef.current) {
      toastShownRef.current = true;
      showToast('برای دسترسی به این صفحه باید وارد شوی', 'info');
    }
  }, [location.state?.from, showToast]);

  useEffect(() => {
    if (resendTimer <= 0) return;
    const timer = setTimeout(() => setResendTimer((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [resendTimer]);

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

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = toEnglishDigits(e.clipboardData.getData('text'))
      .replace(/\D/g, '')
      .slice(0, 5);
    if (!pasted) return;

    const newOtp = pasted.split('').concat(['', '', '', '', '']).slice(0, 5);
    setOtp(newOtp);
    inputRefs.current[Math.min(pasted.length, 4)]?.focus();
  };

  const handleResend = () => {
    if (resendTimer > 0) return;
    setResendTimer(30);
    showToast('کد تایید مجدداً ارسال شد (کد دمو: 12345)', 'info');
  };

  const handleEditPhone = () => {
    setStep('phone');
    setOtp(['', '', '', '', '']);
    setSecureCode('');
    setResendTimer(0);
  };

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
      <div className="col-lg-7 loginBg position-relative d-none d-lg-block">
        <img
          src="/assets/img/loginBg.png"
          alt="login bg"
          className="position-absolute end-0 bottom-0 top-0 start-0 w-100 h-100"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="col-lg-5 bg-gray3 d-flex align-items-center justify-content-center">
        <div className="mx-auto max-w-507 flex-shrink-0 p-3">
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

          <form
            onSubmit={step === 'phone' ? handleSendPhone : handleVerifyOtp}
            className="bg-white rounded-33 p-4 px-3 px-lg-4 mt-5 position-relative"
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
                  className="fs-12 text-main border-0 bg-transparent p-0 mt-2"
                >
                  ✏️ ویرایش شماره
                </button>
              )}
            </div>

            {step === 'phone' ? (
              <button
                type="submit"
                className="d-flex w-100 position-relative border-0 align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 mt-5 mb-4 shadow2"
              >
                <p className="mb-0 fw-bold text-white">دریافت کد تایید</p>
              </button>
            ) : (
              <>
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

                <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
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

                <button
                  type="submit"
                  className="d-flex w-100 border-0 align-items-center justify-content-center gap-2 rounded-14 bg-gradient-main py-3 mt-5 mb-4 shadow2"
                >
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