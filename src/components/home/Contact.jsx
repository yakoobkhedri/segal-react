// src/components/home/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="mt-245">
      <div className="container d-flex flex-column flex-xl-row align-items-center">
        <div className="bg-white shadow2 rounded-30 position-relative p-4">
          {/* shape */}
          <img
            alt="shape"
            src="/assets/img/contactShape.png"
            className="img-fluid z-0 position-absolute end-0 top-0 -z-1"
          />

          <div className="row align-items-center mx-0">
            {/* ستون محتوا */}
            <div className="col-xl-8 order-1 order-xl-0">
              <div className="position-relative">
                {/* هدر تماس (بنفش) */}
                <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2 rounded-t-33 mx-lg-3 contactHeading -top-103 -z-1 bg-gradient-main p-3 position-absolute right-0 left-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
                    <path
                      opacity="0.5"
                      d="M26.7508 24.9472L25.9829 25.7572C25.9829 25.7572 24.1554 27.6792 19.1688 22.4294C14.1823 17.1796 16.0098 15.2575 16.0098 15.2575L16.4941 14.7462C17.6855 13.4907 17.7986 11.4759 16.7574 10.0044L14.6311 6.99555C13.3419 5.17305 10.8528 4.93342 9.37625 6.48761L6.72856 9.27367C5.99788 10.0449 5.5085 11.0422 5.56756 12.1509C5.71944 14.9859 6.93106 21.0828 13.6878 28.199C20.8546 35.7421 27.5793 36.0425 30.3283 35.7708C31.199 35.6864 31.955 35.2156 32.5642 34.5744L34.9604 32.0499C36.5804 30.3455 36.1248 27.4261 34.0526 26.2347L30.8294 24.3785C29.4693 23.5972 27.8139 23.8267 26.7508 24.9455V24.9472Z"
                      fill="white"
                    />
                    <path
                      d="M22.8761 3.56995C22.9304 3.23869 23.1138 2.94249 23.3862 2.74634C23.6586 2.55019 23.9977 2.47012 24.329 2.5237C24.3712 2.53214 24.5096 2.55745 24.5822 2.57432C24.7256 2.6047 24.9264 2.65532 25.1762 2.7262C25.6774 2.87301 26.3777 3.11433 27.218 3.49908C28.8988 4.27026 31.1347 5.61857 33.4567 7.93889C35.7787 10.2609 37.127 12.4985 37.8982 14.1793C38.283 15.0196 38.5226 15.7183 38.6694 16.2211C38.7434 16.4738 38.807 16.7294 38.8601 16.9873L38.8685 17.0396C38.9241 17.3738 38.8461 17.7164 38.6513 17.9936C38.4565 18.2707 38.1606 18.4602 37.8274 18.5212C37.4969 18.5749 37.1587 18.4954 36.8867 18.3003C36.6147 18.1051 36.4311 17.8102 36.3761 17.48C36.3416 17.2935 36.2959 17.1092 36.2394 16.9282C36.067 16.3487 35.8527 15.7824 35.5982 15.234C34.94 13.7996 33.7554 11.8185 31.6663 9.72933C29.5789 7.6402 27.596 6.45726 26.1617 5.79914C25.6137 5.5447 25.0481 5.33038 24.4691 5.15789C24.2915 5.10779 24.1126 5.06278 23.9325 5.02289C23.6007 4.96809 23.3038 4.78501 23.1058 4.51317C22.9078 4.24133 22.8247 3.90254 22.8744 3.56995H22.8761Z"
                      fill="white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.2575 9.39178C23.303 9.23187 23.3796 9.08249 23.4829 8.95218C23.5861 8.82187 23.714 8.71317 23.8593 8.63231C24.0046 8.55145 24.1643 8.5 24.3295 8.48091C24.4947 8.46181 24.662 8.47545 24.8219 8.52103L24.8269 8.52272L24.832 8.52441L24.8455 8.52778L24.8792 8.53791L24.9737 8.57166C25.4222 8.74443 25.8552 8.95501 26.268 9.2011C27.0932 9.69047 28.2205 10.5005 29.5452 11.8268C30.8699 13.1515 31.6815 14.2788 32.1709 15.104C32.4156 15.5174 32.5776 15.8532 32.6822 16.0996C32.7383 16.2285 32.789 16.3596 32.8341 16.4928L32.8425 16.5265L32.8476 16.54V16.5451L32.8493 16.5468C32.8493 16.5468 32.8493 16.5502 31.6343 16.8978L32.8493 16.5502C32.935 16.8695 32.8923 17.2096 32.7305 17.4979C32.5686 17.7862 32.3003 17.9997 31.9831 18.0927C31.6658 18.1857 31.3248 18.151 31.0328 17.9958C30.7409 17.8406 30.5213 17.5773 30.421 17.2623L30.4159 17.2454C30.2973 16.9515 30.1562 16.6672 29.994 16.3949C29.616 15.7587 28.936 14.7968 27.7547 13.6156C26.5735 12.4343 25.6133 11.756 24.9771 11.3797C24.7048 11.2174 24.4205 11.0764 24.1266 10.9578L24.1097 10.951C23.791 10.8552 23.5228 10.6376 23.3633 10.3455C23.2038 10.0533 23.1658 9.71175 23.2575 9.39178Z"
                      fill="white"
                    />
                  </svg>
                  <div>
                    <p className="fs-18 fw-bold text-white mb-1">با ما در ارتباط باشید</p>
                    <p className="fs-13 text-white-50 fw-300 mb-0">هر لحظه با ما در تماس باشید</p>
                  </div>
                </div>

                <div className="d-flex flex-column flex-lg-row align-items-center gap-4">
                  {/* اطلاعات تماس */}
                  <div className="flex-shrink-0 w-sm-100 mt-4 mt-xl-0">
                    <div className="d-flex gap-2 bg-gray2 align-items-center justify-content-center rounded-23 p-3 mb-4">
                      <p className="mb-0">info@mail.com</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <path
                          opacity="0.4"
                          d="M29.3354 21.2761C29.3354 24.9961 26.3487 28.0095 22.6287 28.0228H22.6154H9.40203C5.69537 28.0228 2.6687 25.0228 2.6687 21.3028V21.2895C2.6687 21.2895 2.6767 15.3881 2.68737 12.4201C2.6887 11.8628 3.3287 11.5508 3.7647 11.8975C6.9327 14.4108 12.598 18.9935 12.6687 19.0535C13.6154 19.8121 14.8154 20.2401 16.042 20.2401C17.2687 20.2401 18.4687 19.8121 19.4154 19.0388C19.486 18.9921 25.0247 14.5468 28.2407 11.9921C28.678 11.6441 29.3207 11.9561 29.322 12.5121C29.3354 15.4575 29.3354 21.2761 29.3354 21.2761Z"
                          fill="url(#paint0_linear_111_1929)"
                        />
                        <path
                          d="M28.6371 7.58731C27.4825 5.41131 25.2104 4.02197 22.7091 4.02197H9.40245C6.90112 4.02197 4.62912 5.41131 3.47445 7.58731C3.21578 8.07397 3.33845 8.68064 3.76912 9.02464L13.6691 16.9433C14.3624 17.5033 15.2024 17.782 16.0424 17.782C16.0478 17.782 16.0518 17.782 16.0558 17.782C16.0598 17.782 16.0651 17.782 16.0691 17.782C16.9091 17.782 17.7491 17.5033 18.4424 16.9433L28.3425 9.02464C28.7731 8.68064 28.8958 8.07397 28.6371 7.58731Z"
                          fill="url(#paint1_linear_111_1929)"
                        />
                        <defs>
                          <linearGradient id="paint0_linear_111_1929" x1="2.6687" y1="26.1111" x2="30.091" y2="13.3795" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B6CCC" />
                            <stop offset="1" stopColor="#4834AC" />
                          </linearGradient>
                          <linearGradient id="paint1_linear_111_1929" x1="3.33984" y1="16.1653" x2="28.29" y2="3.10197" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B6CCC" />
                            <stop offset="1" stopColor="#4834AC" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>

                    <div className="d-flex gap-2 bg-gray2 align-items-center justify-content-center rounded-23 p-3">
                      <p className="mb-0">0912 - 345 - 6789</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <g opacity="0.4">
                          <path
                            d="M19.2238 7.34247C18.5891 7.22521 18.0061 7.63027 17.8853 8.24984C17.7645 8.86942 18.1708 9.47433 18.7882 9.59559C20.6473 9.958 22.0827 11.397 22.4465 13.2624C22.5501 13.7994 23.0228 14.1911 23.5672 14.1911C23.6403 14.1911 23.7133 14.1844 23.7877 14.1711C24.4051 14.0472 24.8115 13.4436 24.6906 12.8227C24.1475 10.0366 22.003 7.88476 19.2238 7.34247Z"
                            fill="url(#paint0_linear_111_1937)"
                          />
                          <path
                            d="M19.1412 2.69978C18.8438 2.65714 18.545 2.74508 18.3073 2.93429C18.063 3.12616 17.9103 3.4033 17.8771 3.71375C17.8067 4.34132 18.2595 4.90893 18.8863 4.97955C23.2085 5.46189 26.568 8.82891 27.054 13.1646C27.1191 13.7455 27.6064 14.1839 28.188 14.1839C28.2318 14.1839 28.2743 14.1812 28.3181 14.1759C28.6222 14.1426 28.8931 13.992 29.0843 13.7522C29.2742 13.5124 29.3605 13.2139 29.326 12.9088C28.7205 7.49915 24.5337 3.3007 19.1412 2.69978Z"
                            fill="url(#paint1_linear_111_1937)"
                          />
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.7083 17.319C20.0271 22.6363 21.2337 16.4848 24.6202 19.8689C27.885 23.1328 29.7615 23.7867 25.625 27.9221C25.1069 28.3385 21.8148 33.3481 10.2455 21.782C-1.32529 10.2145 3.68146 6.91905 4.09798 6.40106C8.2445 2.25426 8.88717 4.14164 12.152 7.40557C15.5385 10.7911 9.38956 12.0017 14.7083 17.319Z"
                          fill="url(#paint2_linear_111_1937)"
                        />
                        <defs>
                          <linearGradient id="paint0_linear_111_1937" x1="17.864" y1="13.3841" x2="25.7916" y2="11.1452" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B6CCC" />
                            <stop offset="1" stopColor="#4834AC" />
                          </linearGradient>
                          <linearGradient id="paint1_linear_111_1937" x1="17.8699" y1="12.8334" x2="31.1401" y2="9.08433" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B6CCC" />
                            <stop offset="1" stopColor="#4834AC" />
                          </linearGradient>
                          <linearGradient id="paint2_linear_111_1937" x1="2.66602" y1="26.3794" x2="31.9802" y2="18.0752" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#5B6CCC" />
                            <stop offset="1" stopColor="#4834AC" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <p className="text-gray lh-42 contactDescription">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                  </p>
                </div>
              </div>
            </div>

            {/* ستون تصویر */}
            <div className="col-xl-4 order-0 order-xl-1 position-relative">
              <div className="position-absolute w-md-100 -top-165 start-0 ms-xl-4">
                <div className="bg-gray rounded-30 w-326 w-md-100 h-326 rotate-6">
                  <div className="bg-second2 d-flex align-items-end rounded-30 w-326 w-md-100 h-326 p-3 shadow3 -rotate-6 position-relative">
                    <img
                      alt="shape"
                      src="/assets/img/whiteshape.png"
                      className="img-fluid d-block w-100 h-md-143 rounded-md-42"
                    />
                    <img
                      alt="about"
                      src="/assets/img/contact.png"
                      className="img-fluid mx-auto d-block end-0 start-0 rounded-27 position-absolute"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* شکل تزئینی سمت چپ */}
        <div className="d-flex flex-column flex-xl-row align-items-center gap-4 w-md-100">
          <div className="rounded-l-26 h-158 w-22 bg-gradient-main flex-shrink-0 contactShape"></div>
          <img
            alt="svg"
            src="/assets/img/contactDot.png"
            className="img-fluid d-block h-158 translate-x-md-90"
          />
        </div>
      </div>
    </section>
  );
}