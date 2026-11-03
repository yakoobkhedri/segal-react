// src/components/blog/RelatedPosts.jsx
import { Link } from 'react-router-dom';

export default function RelatedPosts({ posts }) {
  return (
    <div className="bg-white rounded-20 px-4 pt-4 shadow10 mt-5">
      <div className="d-flex align-items-center justify-content-between mb-4 px-3">
        <div className="d-flex align-items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 13.5V12H7.5V13.5H6ZM1.5 6C1.5 5.20435 1.81607 4.44129 2.37868 3.87868C2.94129 3.31607 3.70435 3 4.5 3H15C15.7956 3 16.5587 3.31607 17.1213 3.87868C17.6839 4.44129 18 5.20435 18 6V15.75C18 15.9489 18.079 16.1397 18.2197 16.2803C18.3603 16.421 18.5511 16.5 18.75 16.5C18.9489 16.5 19.1397 16.421 19.2803 16.2803C19.421 16.1397 19.5 15.9489 19.5 15.75V6C20.2956 6 21.0587 6.31607 21.6213 6.87868C22.1839 7.44129 22.5 8.20435 22.5 9V15.75C22.5 16.7446 22.1049 17.6984 21.4016 18.4017C20.6984 19.1049 19.7446 19.5 18.75 19.5H5.25C4.25544 19.5 3.30161 19.1049 2.59835 18.4017C1.89509 17.6984 1.5 16.7446 1.5 15.75V6Z"
              fill="url(#related-grad)"
            />
            <defs>
              <linearGradient id="related-grad" x1="1.5" y1="17.5614" x2="24.7303" y2="9.18592" gradientUnits="userSpaceOnUse">
                <stop stopColor="#5B6CCC" />
                <stop offset="1" stopColor="#4834AC" />
              </linearGradient>
            </defs>
          </svg>
          <p className="mb-0 fs-18 font-bold">مطالب مرتبط</p>
        </div>
        <Link to="/blog" className="fs-14 text-second text-decoration-underline">
          همه مطالب
        </Link>
      </div>

      <div className="row mx-0 gx-4 gy-5 pb-5">
        {posts.map((post) => (
          <div key={post.id} className="col-xl-4 col-lg-6">
            <div className="bg-white shadow7 rounded-25 p-4 blogCard position-relative">
              <img alt="blog" src={post.image} className="img-fluid w-100 d-block" />
              <Link to={`/blog/${post.id}`} className="font-bold text-black mt-3 d-block text-decoration-none">
                {post.title}
              </Link>
              <div className="d-flex align-items-center gap-3 mt-3">
                <div className="d-flex align-items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4.62634 1.33325C4.90367 1.33325 5.12834 1.54925 5.12834 1.81592V2.78925C5.57367 2.78125 6.07301 2.78125 6.63501 2.78125H9.31167C9.87301 2.78125 10.3723 2.78125 10.8177 2.78992V1.81659C10.8177 1.54992 11.0423 1.33325 11.3197 1.33325C11.597 1.33325 11.8217 1.54925 11.8217 1.81592V2.83325C12.785 2.90725 13.4177 3.08925 13.8817 3.53659C14.347 3.98325 14.5363 4.59125 14.613 5.51792L14.6663 5.99992H1.33301V5.51725C1.41034 4.59059 1.59967 3.98259 2.06434 3.53592C2.52901 3.08925 3.16101 2.90659 4.12434 2.83259V1.81592C4.12434 1.54925 4.34901 1.33325 4.62634 1.33325Z" fill="#27817A" />
                    <path opacity="0.5" d="M14.6665 9.33333V8C14.6665 7.44067 14.6639 6.44333 14.6552 6H1.33987C1.33121 6.44333 1.33321 7.44067 1.33321 8V9.33333C1.33321 11.8473 1.33321 13.1047 2.11454 13.8853C2.89521 14.6667 4.15187 14.6667 6.66654 14.6667H9.33321C11.8465 14.6667 13.1039 14.6667 13.8852 13.8853C14.6665 13.1047 14.6665 11.8473 14.6665 9.33333Z" fill="#27817A" />
                  </svg>
                  <p className="mb-0 fs-13 text-gray">{post.date}</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path opacity="0.5" d="M3.15159 10.7581C2.12159 9.72741 1.60625 9.21275 1.41492 8.54408C1.22292 7.87541 1.38692 7.16542 1.71492 5.74608L1.90359 4.92742C2.17892 3.73275 2.31692 3.13542 2.72559 2.72608C3.13492 2.31742 3.73225 2.17942 4.92692 1.90408L5.74559 1.71475C7.16559 1.38742 7.87492 1.22342 8.54359 1.41475C9.21225 1.60675 9.72692 2.12208 10.7569 3.15208L11.9769 4.37208C13.7709 6.16542 14.6663 7.06142 14.6663 8.17475C14.6663 9.28875 13.7696 10.1847 11.9769 11.9774C10.1843 13.7714 9.28825 14.6667 8.17425 14.6667C7.06092 14.6667 6.16425 13.7701 4.37159 11.9774L3.15159 10.7581Z" fill="#27817A" />
                    <path d="M6.74814 4.84738C6.87672 4.97139 6.97931 5.11977 7.04991 5.28386C7.12051 5.44796 7.1577 5.62447 7.15932 5.8031C7.16094 5.98173 7.12695 6.15889 7.05934 6.32423C6.99173 6.48958 6.89185 6.6398 6.76553 6.76611C6.63922 6.89242 6.489 6.99231 6.32366 7.05992C6.15831 7.12753 5.98115 7.16152 5.80252 7.1599C5.62389 7.15828 5.44738 7.12108 5.28328 7.05049C5.11919 6.97989 4.97081 6.8773 4.84681 6.74872C4.59467 6.4965 4.45306 6.15445 4.45313 5.79782C4.45319 5.44118 4.59492 5.09918 4.84714 4.84705C5.09936 4.59492 5.44141 4.45331 5.79804 4.45337C6.15467 4.45343 6.49601 4.59516 6.74814 4.84738Z" fill="#27817A" />
                  </svg>
                  <p className="mb-0 fs-13 text-gray">{post.category}</p>
                </div>
              </div>
              <svg className="w-100 mt-4" xmlns="http://www.w3.org/2000/svg" height="1" viewBox="0 0 367 1" fill="none">
                <line x1="0" y1="0.5" x2="367" y2="0.5" stroke="black" strokeOpacity="0.1" strokeDasharray="5 5" />
              </svg>
              <p className="fs-13 text-gray mt-3 lh-24 mb-4">{post.content.slice(0, 150)} ...</p>
              <Link
                to={`/blog/${post.id}`}
                className="d-flex align-items-center justify-content-center bg-main3 left-87 z-0 -bottom-19 position-absolute w-61 h-61 rounded-circle"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path d="M0.369217 4.869C0.42572 4.811 0.639066 4.563 0.837799 4.359C2.00292 3.076 5.04238 0.976 6.63322 0.335C6.87482 0.232 7.48563 0.0139999 7.81198 -9.56413e-08C8.1247 -8.19722e-08 8.4228 0.0719999 8.70726 0.218C9.06186 0.422 9.34632 0.743 9.50219 1.122C9.60253 1.385 9.7584 2.172 9.7584 2.186C9.91427 3.047 10 4.446 10 5.992C10 7.465 9.91427 8.807 9.78665 9.681C9.77204 9.695 9.61617 10.673 9.44569 11.008C9.13298 11.62 8.52216 12 7.86848 12L7.81198 12C7.38626 11.985 6.49099 11.605 6.49099 11.591C4.98587 10.949 2.01656 8.952 0.823187 7.625C0.823187 7.625 0.487093 7.284 0.340965 7.071C0.113006 6.765 6.74533e-07 6.386 6.911e-07 6.007C7.0959e-07 5.584 0.12762 5.19 0.369217 4.869Z" fill="url(#related-arrow)" />
                  <defs>
                    <linearGradient id="related-arrow" x1="1.1749" y1="0" x2="5.74579" y2="13.4462" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5B6CCC" />
                      <stop offset="1" stopColor="#4834AC" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}