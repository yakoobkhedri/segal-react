// src/components/blog/BlogDescription.jsx
export default function BlogDescription({ post }) {
  return (
    <div id="description" className="bg-white rounded-20 p-4 shadow10 d-flex flex-column flex-xl-row align-items-center gap-4 mt-4">
      <div className="order-1 order-xl-0 flex-grow-1">
        <p className="fs-14 text-gray lh-32 mb-2 text-justify">{post.content}</p>

        <div className="d-flex align-items-center gap-2 font-bold mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
            <rect width="7" height="7" rx="2" fill="url(#desc-grad)" />
            <defs>
              <linearGradient id="desc-grad" x1="6.68141" y1="2.30827" x2="0.468913" y2="2.30827" gradientUnits="userSpaceOnUse">
                <stop stopColor="#64C2DB" />
                <stop offset="0.510417" stopColor="#7476ED" />
                <stop offset="1" stopColor="#E56F8C" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mb-0">لورم ایپسوم متن ساختگی طراحان</p>
        </div>

        <p className="fs-14 text-gray lh-32 mb-0 text-justify">{post.content}</p>
      </div>

      <div className="flex-shrink-0 order-0 order-xl-0">
        <div className="bg-white rounded-20 shadow10 position-relative -top-60 p-4">
          <img alt="blog" src={post.image} className="img-fluid rounded-20 w-100" />
          <div className="mt-3">
            <div className="d-flex align-items-center justify-content-between fs-14">
              <div className="d-flex align-items-center font-bold gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <path d="M10.9743 8.47325C11.6279 7.95903 12.105 7.25387 12.3391 6.45588C12.5733 5.6579 12.5529 4.80676 12.2808 4.0209C12.0087 3.23503 11.4985 2.55352 10.821 2.07116C10.1436 1.5888 9.33261 1.32959 8.50097 1.32959C7.66934 1.32959 6.85838 1.5888 6.18093 2.07116C5.50347 2.55352 4.9932 3.23503 4.72112 4.0209C4.44903 4.80676 4.42865 5.6579 4.66282 6.45588C4.89698 7.25387 5.37405 7.95903 6.02764 8.47325C4.90769 8.92195 3.9305 9.66615 3.20024 10.6265C2.46997 11.5869 2.01402 12.7275 1.88097 13.9266C1.87134 14.0141 1.87905 14.1027 1.90366 14.1873C1.92826 14.2719 1.96929 14.3508 2.02438 14.4195C2.13565 14.5582 2.2975 14.6471 2.47431 14.6666C2.65112 14.686 2.82841 14.6345 2.96719 14.5232C3.10597 14.4119 3.19486 14.2501 3.21431 14.0733C3.3607 12.77 3.9821 11.5665 4.95979 10.6924C5.93748 9.81844 7.20291 9.33527 8.51431 9.33527C9.82571 9.33527 11.0911 9.81844 12.0688 10.6924C13.0465 11.5665 13.6679 12.77 13.8143 14.0733Z" fill="url(#author-grad)" />
                  <defs>
                    <linearGradient id="author-grad" x1="14.5409" y1="5.72883" x2="2.76573" y2="5.72883" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#64C2DB" />
                      <stop offset="0.510417" stopColor="#7476ED" />
                      <stop offset="1" stopColor="#E56F8C" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="mb-0">نویسنده مطلب</p>
              </div>
              <p className="mb-0 text-gray">تیم مدیریتی</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}