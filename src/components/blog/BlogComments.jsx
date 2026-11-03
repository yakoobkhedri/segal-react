// src/components/blog/BlogComments.jsx
export default function BlogComments() {
  return (
    <div id="comment" className="bg-white rounded-20 p-4 shadow10 mt-5">
      {/* هدر */}
      <div className="d-flex align-items-center justify-content-between px-3">
        <div className="d-flex align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M7.456 3.09009C5.81356 3.9279 4.43473 5.2035 3.47187 6.7759C2.50901 8.34831 1.99963 10.1563 2 12.0001C2 13.6001 2.376 15.1121 3.043 16.4531C3.221 16.8091 3.28 17.2171 3.177 17.6011L2.582 19.8271C2.52307 20.0474 2.52312 20.2793 2.58216 20.4996C2.64119 20.7198 2.75712 20.9207 2.91831 21.082C3.07951 21.2433 3.2803 21.3593 3.50053 21.4185C3.72075 21.4777 3.95267 21.4779 4.173 21.4191L6.399 20.8231C6.78552 20.7261 7.19418 20.7737 7.548 20.9571C8.93103 21.6453 10.4552 22.0024 12 22.0001C16.885 22.0001 20.952 18.4971 21.826 13.8661C20.3385 15.601 18.2468 16.705 15.9752 16.9543C13.7036 17.2036 11.4223 16.5794 9.59399 15.2084C7.76571 13.8374 6.52743 11.8222 6.13039 9.5717C5.73334 7.32122 6.20726 5.00398 7.456 3.09009Z"
              fill="url(#comm-grad1)"
            />
            <path
              opacity="0.5"
              d="M21.8267 13.866C21.9425 13.2508 22.0007 12.6261 22.0007 12C22.0007 6.47701 17.5237 2.00001 12.0007 2.00001C10.421 1.99786 8.86346 2.37147 7.45666 3.09001C6.20793 5.0039 5.73401 7.32114 6.13105 9.57162C6.5281 11.8221 7.76637 13.8373 9.59465 15.2083C11.4229 16.5793 13.7043 17.2035 15.9759 16.9542C18.2475 16.705 20.3392 15.6009 21.8267 13.866Z"
              fill="url(#comm-grad2)"
            />
            <defs>
              <linearGradient id="comm-grad1" x1="2" y1="19.7784" x2="24.7736" y2="13.0145" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5B6CCC" />
                <stop offset="1" stopColor="#4834AC" />
              </linearGradient>
              <linearGradient id="comm-grad2" x1="5.99414" y1="15.2447" x2="24.3287" y2="9.70524" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5B6CCC" />
                <stop offset="1" stopColor="#4834AC" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mb-0 fs-18 font-bold">دیدگاه کاربران</p>
        </div>
        <a className="fs-14 text-second text-decoration-underline">افزودن دیدگاه</a>
      </div>

      {/* کامنت اول */}
      <div className="mt-4 border-bottom pb-4">
        <div className="d-flex flex-column flex-lg-row align-items-end align-items-lg-start bg-gray6 gap-3 p-4 special-rounded2">
          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <img alt="avatar" src="/assets/img/comment.png" className="img-fluid d-block w-61 h-61 rounded-circle" />
            <div>
              <p className="font-bold fs-14 mb-3">عطا حیدری</p>
              <p className="fs-12 text-gray mb-0">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="d-flex gap-3 flex-shrink-0">
            <p className="fs-12 text-gray mb-0">۱۴۰۱/۱۲/۱۲ / ۲۳:۱۶</p>
            <a className="fs-13 font-bold gap-2 text-dark d-flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                <path
                  d="M16.4666 9.46642H7.5159L8.72924 8.26242C8.90499 8.08667 9.00372 7.8483 9.00372 7.59975C9.00372 7.3512 8.90499 7.11283 8.72924 6.93708C8.55349 6.76133 8.31512 6.6626 8.06657 6.6626C7.81802 6.6626 7.57965 6.76133 7.4039 6.93708L4.6039 9.73708C4.51893 9.82585 4.45232 9.93052 4.4079 10.0451C4.31455 10.2723 4.31455 10.5272 4.4079 10.7544C4.45232 10.869 4.51893 10.9737 4.6039 11.0624L7.4039 13.8624C7.49067 13.9499 7.5939 14.0193 7.70763 14.0667C7.82137 14.1141 7.94336 14.1385 8.06657 14.1385C8.18978 14.1385 8.31177 14.1141 8.42551 14.0667C8.53924 14.0193 8.64247 13.9499 8.72924 13.8624C8.81672 13.7757 8.88615 13.6724 8.93353 13.5587C8.98092 13.445 9.00531 13.323 9.00531 13.1997C9.00531 13.0765 8.98092 12.9545 8.93353 12.8408C8.88615 12.7271 8.81672 12.6238 8.72924 12.5371L7.5159 11.3331H16.4666C16.7141 11.3331 16.9515 11.4314 17.1265 11.6065C17.3016 11.7815 17.3999 12.0189 17.3999 12.2664V15.9997C17.3999 16.2473 17.4982 16.4847 17.6733 16.6597C17.8483 16.8348 18.0857 16.9331 18.3332 16.9331C18.5808 16.9331 18.8182 16.8348 18.9932 16.6597C19.1682 16.4847 19.2666 16.2473 19.2666 15.9997V12.2664C19.2666 11.5238 18.9716 10.8116 18.4465 10.2865C17.9214 9.76142 17.2092 9.46642 16.4666 9.46642Z"
                  fill="#27817A"
                />
              </svg>
              <p className="mb-0">پاسخ</p>
            </a>
          </div>
        </div>

        {/* پاسخ */}
        <div className="d-flex flex-column flex-lg-row gap-3 p-3 special-rounded2 border-dash mt-4 position-relative">
          <div className="bg-white position-absolute -top-12 right-122 w-48 h-12"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-lightgray position-absolute -top-9 right-122 w-48"
            viewBox="0 0 43 8"
            fill="none"
          >
            <path fill="white" d="M42.2 7.5H38.607C34.184 7.5 29.9422 5.74297 26.8146 2.61543C23.7133 -0.485887 18.6851 -0.485887 15.5838 2.61543C12.4563 5.74297 8.2144 7.5 3.79139 7.5H0" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
          </svg>

          <div className="d-flex align-items-center gap-3 flex-grow-1">
            <img alt="avatar" src="/assets/img/comment.png" className="img-fluid d-block w-61 h-61 rounded-circle shadow11" />
            <div>
              <p className="font-bold fs-14 mb-3">مدیریت</p>
              <p className="fs-12 text-gray mb-0">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <a className="fs-13 font-bold gap-2 text-dark d-flex justify-content-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16.6677 9.56627H7.71707L8.93041 8.36227C9.10616 8.18652 9.20489 7.94815 9.20489 7.6996C9.20489 7.45106 9.10616 7.21269 8.93041 7.03694C8.75466 6.86119 8.51629 6.76245 8.26774 6.76245C8.01919 6.76245 7.78082 6.86119 7.60507 7.03694L4.80508 9.83694C4.7201 9.9257 4.6535 10.0304 4.60908 10.1449C4.51572 10.3722 4.51572 10.627 4.60908 10.8543C4.6535 10.9688 4.7201 11.0735 4.80508 11.1623L7.60507 13.9623C7.69184 14.0497 7.79507 14.1192 7.9088 14.1666C8.02254 14.214 8.14453 14.2383 8.26774 14.2383C8.39095 14.2383 8.51294 14.214 8.62668 14.1666C8.74042 14.1192 8.84364 14.0497 8.93041 13.9623C9.01789 13.8755 9.08732 13.7723 9.13471 13.6585C9.18209 13.5448 9.20649 13.4228 9.20649 13.2996C9.20649 13.1764 9.18209 13.0544 9.13471 12.9407C9.08732 12.8269 9.01789 12.7237 8.93041 12.6369L7.71707 11.4329H16.6677Z"
                  fill="url(#reply-grad)"
                />
                <defs>
                  <linearGradient id="reply-grad" x1="4.53906" y1="15.8263" x2="20.4946" y2="9.2563" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5B6CCC" />
                    <stop offset="1" stopColor="#4834AC" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="mb-0">پاسخ</p>
            </a>
            <p className="fs-12 text-gray mb-0 mt-1 text-start">۱۴۰۱/۱۲/۱۲ / ۲۳:۱۶</p>
          </div>
        </div>
      </div>

      {/* فرم ارسال کامنت */}
      <form className="mt-3">
        <h6 className="font-bold fs-18 mb-0 me-lg-5">ارسال دیدگاه</h6>
        <div className="d-flex flex-column flex-lg-row align-items-center gap-4 mt-3">
          <div className="bg-gray2 flex-grow-1 rounded-12 p-3">
            <input placeholder="نام و نام خانوادگی" className="w-100 bg-transparent border-0 outline-none fs-13" />
          </div>
          <div className="bg-gray2 flex-grow-1 rounded-12 p-3">
            <input placeholder="موضوع پیام" className="w-100 bg-transparent border-0 outline-none fs-13" />
          </div>
          <div className="bg-gray2 flex-grow-1 rounded-12 p-3">
            <input placeholder="شماره تماس" className="w-100 bg-transparent border-0 outline-none fs-13" />
          </div>
        </div>
        <div className="bg-gray2 rounded-12 p-3 mt-4" style={{ height: 127 }}>
          <textarea placeholder="پیام شما" className="w-100 h-100 resize-none bg-transparent border-0 outline-none fs-13"></textarea>
        </div>
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4 mt-4">
          <div className="d-flex align-items-center gap-4">
            <p className="rounded-12 bg-gray2 fs-22 font-bold text-dark w-179 h-58 d-flex align-items-center justify-content-center mb-0">
              ۸۵۸۵۶۹
            </p>
            <div className="bg-gray2 rounded-12 p-3 d-flex align-items-center gap-2 w-332 h-58">
              <input placeholder="کد امنیتی" className="flex-grow-1 bg-transparent border-0 outline-none fs-13" />
            </div>
          </div>
          <button className="bg-second2 rounded-14 fw-bold border-0 h-58 w-288 text-white">
            ارسال دیدگاه
          </button>
        </div>
      </form>
    </div>
  );
}