// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="position-relative mb-lg-5 pb-5 pb-lg-3">
      <div className="container mt-5">
        <div className="d-flex align-items-center justify-content-between gap-4">
          <Link to="/" className="flex-shrink-0">
            <img alt="logo" src="/assets/img/Logo2.png" className="img-fluid" />
          </Link>

          <svg className="d-none d-lg-block" xmlns="http://www.w3.org/2000/svg" width="2" height="48" viewBox="0 0 2 48" fill="none">
            <line opacity="0.1" x1="0.620605" y1="2.18557e-08" x2="0.620603" y2="48" stroke="black" />
          </svg>

          <p className="fs-15 text-gray mb-0 d-none d-lg-block">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
            نیاز و کاربردها است.
          </p>

          <svg className="d-none d-lg-block" xmlns="http://www.w3.org/2000/svg" width="2" height="48" viewBox="0 0 2 48" fill="none">
            <line opacity="0.1" x1="0.620605" y1="2.18557e-08" x2="0.620603" y2="48" stroke="black" />
          </svg>

          <div className="d-flex align-items-center gap-lg-5 gap-3">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M13.7983 8.29064C12.3131 8.29212 10.8891 8.88271 9.83878 9.93282C8.78846 10.9829 8.19759 12.4068 8.1958 13.892C8.19468 14.9495 8.49168 15.98 9.05193 16.8721L9.18468 17.0836L8.6188 19.1503L10.7394 18.5945L10.9431 18.716C11.8065 19.2271 12.7916 19.4964 13.7949 19.4956H13.7961C15.2808 19.4936 16.7041 18.9029 17.7541 17.8531C18.8041 16.8034 19.395 15.3801 19.3974 13.8954C19.4 13.1594 19.2565 12.4303 18.9754 11.7502C18.6942 11.07 18.2809 10.4524 17.7594 9.93314C17.2406 9.41096 16.6234 8.99692 15.9434 8.71497C15.2635 8.43303 14.5344 8.2888 13.7983 8.29064ZM17.0923 16.2984C16.9517 16.6921 16.2789 17.0499 15.9561 17.0983C15.6021 17.1593 15.2388 17.1366 14.8952 17.0319C14.5692 16.9309 14.2489 16.8127 13.9356 16.6775C12.2458 15.9485 11.1433 14.2486 11.0578 14.135C10.9746 14.0225 10.3716 13.2215 10.3716 12.3935C10.3716 11.5644 10.8058 11.1571 10.9599 10.9884C11.0165 10.9244 11.0857 10.8729 11.1631 10.8369C11.2405 10.8009 11.3246 10.7812 11.4099 10.7791C11.5224 10.7791 11.6338 10.7803 11.7328 10.7848C11.8363 10.7893 11.9747 10.7454 12.1108 11.0739C12.2514 11.4114 12.5889 12.2394 12.6306 12.3238C12.6722 12.407 12.7003 12.506 12.6452 12.6185C12.5889 12.7321 12.5619 12.8008 12.4764 12.8998C12.3932 12.9988 12.2998 13.1191 12.2244 13.1956C12.1401 13.2789 12.0523 13.37 12.1502 13.5388C12.2492 13.7064 12.5867 14.2588 13.0862 14.7054C13.7297 15.2791 14.2731 15.4558 14.4407 15.5413C14.6094 15.6245 14.7073 15.6121 14.8063 15.4985C14.9042 15.3849 15.2271 15.0069 15.3396 14.8393C15.4521 14.6705 15.5634 14.6986 15.7187 14.7538C15.8728 14.8111 16.7008 15.2173 16.8684 15.3016C17.0349 15.3849 17.1486 15.4276 17.1913 15.4985C17.2318 15.5683 17.2318 15.9046 17.0923 16.2984Z" fill="black" />
                <path d="M22.75 3.875H4.75C4.45163 3.875 4.16548 3.99353 3.9545 4.2045C3.74353 4.41548 3.625 4.70163 3.625 5V23C3.625 23.2984 3.74353 23.5845 3.9545 23.7955C4.16548 24.0065 4.45163 24.125 4.75 24.125H22.75C23.0484 24.125 23.3345 24.0065 23.5455 23.7955C23.7565 23.5845 23.875 23.2984 23.875 23V5C23.875 4.70163 23.7565 4.41548 23.5455 4.2045C23.3345 3.99353 23.0484 3.875 22.75 3.875ZM13.795 20.633H13.7928C12.6678 20.6331 11.5608 20.3511 10.573 19.8129L7 20.75L7.95625 17.258C7.3656 16.2334 7.05497 15.0714 7.05555 13.8887C7.05613 12.706 7.3679 11.5443 7.95955 10.5203C8.5512 9.49623 9.4019 8.6459 10.4262 8.05469C11.4505 7.46348 12.6123 7.1522 13.795 7.15213C14.681 7.14967 15.5586 7.32313 16.377 7.66244C17.1955 8.00174 17.9384 8.50015 18.5627 9.12875C19.19 9.75352 19.6871 10.4965 20.0252 11.3147C20.3633 12.1329 20.5358 13.0101 20.5326 13.8954C20.5299 15.6815 19.8192 17.3937 18.5563 18.6566C17.2933 19.9196 15.5811 20.6303 13.795 20.633Z" fill="black" />
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M24.128 9.84311C24.1166 8.99106 23.9571 8.14748 23.6566 7.35011C23.396 6.67753 22.9979 6.06671 22.4879 5.55667C21.9779 5.04663 21.367 4.64859 20.6945 4.38798C19.9073 4.09251 19.0758 3.93274 18.2352 3.91548C17.153 3.86711 16.8098 3.85361 14.0626 3.85361C11.3153 3.85361 10.9632 3.85361 9.88883 3.91548C9.04863 3.93287 8.21747 4.09263 7.4307 4.38798C6.75802 4.64841 6.1471 5.04638 5.63704 5.55644C5.12698 6.06651 4.729 6.67742 4.46858 7.35011C4.17251 8.13663 4.01309 8.96798 3.9972 9.80823C3.94883 10.8916 3.9342 11.2347 3.9342 13.982C3.9342 16.7292 3.9342 17.0802 3.9972 18.1557C4.01408 18.9972 4.1727 19.8275 4.46858 20.6161C4.72944 21.2886 5.12771 21.8993 5.63794 22.4091C6.14818 22.9189 6.75915 23.3168 7.43183 23.5771C8.21644 23.8845 9.04775 24.0557 9.88995 24.0834C10.9733 24.1317 11.3165 24.1464 14.0637 24.1464C16.811 24.1464 17.1631 24.1464 18.2375 24.0834C19.078 24.0668 19.9096 23.9074 20.6967 23.612C21.3691 23.3511 21.9798 22.9529 22.4898 22.4429C22.9998 21.9329 23.3979 21.3223 23.6588 20.6499C23.9547 19.8624 24.1133 19.0321 24.1302 18.1895C24.1786 17.1072 24.1932 16.7641 24.1932 14.0157C24.191 11.2685 24.191 10.9197 24.128 9.84311ZM14.0558 19.1772C11.1826 19.1772 8.85495 16.8496 8.85495 13.9764C8.85495 11.1031 11.1826 8.77548 14.0558 8.77548C15.4352 8.77548 16.758 9.32343 17.7334 10.2988C18.7088 11.2741 19.2567 12.597 19.2567 13.9764C19.2567 15.3557 18.7088 16.6786 17.7334 17.6539C16.758 18.6293 15.4352 19.1772 14.0558 19.1772ZM19.4637 9.79586C19.3044 9.796 19.1466 9.76474 18.9994 9.70384C18.8522 9.64295 18.7185 9.55362 18.6058 9.44098C18.4932 9.32834 18.4039 9.19459 18.343 9.04738C18.2821 8.90018 18.2508 8.74241 18.251 8.58311C18.251 8.42392 18.2823 8.26629 18.3432 8.11922C18.4041 7.97215 18.4934 7.83852 18.606 7.72596C18.7186 7.6134 18.8522 7.52411 18.9993 7.46319C19.1463 7.40227 19.304 7.37092 19.4631 7.37092C19.6223 7.37092 19.78 7.40227 19.927 7.46319C20.0741 7.52411 20.2077 7.6134 20.3203 7.72596C20.4329 7.83852 20.5221 7.97215 20.5831 8.11922C20.644 8.26629 20.6753 8.42392 20.6753 8.58311C20.6753 9.25361 20.1331 9.79586 19.4637 9.79586Z" fill="black" />
                <path d="M14.056 17.3548C15.9218 17.3548 17.4344 15.8422 17.4344 13.9764C17.4344 12.1106 15.9218 10.598 14.056 10.598C12.1902 10.598 10.6776 12.1106 10.6776 13.9764C10.6776 15.8422 12.1902 17.3548 14.056 17.3548Z" fill="black" />
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M23.375 3.875H5.375C5.07663 3.875 4.79048 3.99353 4.5795 4.2045C4.36853 4.41548 4.25 4.70163 4.25 5V23C4.25 23.2984 4.36853 23.5845 4.5795 23.7955C4.79048 24.0065 5.07663 24.125 5.375 24.125H23.375C23.6734 24.125 23.9595 24.0065 24.1705 23.7955C24.3815 23.5845 24.5 23.2984 24.5 23V5C24.5 4.70163 24.3815 4.41548 24.1705 4.2045C23.9595 3.99353 23.6734 3.875 23.375 3.875ZM10.2564 21.1291H7.25037V11.4654H10.2564V21.1291ZM8.75337 10.1458C8.2915 10.1458 7.84854 9.96227 7.52195 9.63568C7.19535 9.30908 7.01187 8.86612 7.01187 8.40425C7.01187 7.94238 7.19535 7.49942 7.52195 7.17282C7.84854 6.84623 8.2915 6.66275 8.75337 6.66275C9.21525 6.66275 9.65821 6.84623 9.9848 7.17282C10.3114 7.49942 10.4949 7.94238 10.4949 8.40425C10.4949 8.86612 10.3114 9.30908 9.9848 9.63568C9.65821 9.96227 9.21525 10.1458 8.75337 10.1458ZM21.5052 21.1291H18.5026V16.43C18.5026 15.3095 18.4824 13.8684 16.9411 13.8684C15.3774 13.8684 15.14 15.0901 15.14 16.3512V21.1302H12.1396V11.4665H15.0196V12.7872H15.0612C15.4606 12.0279 16.4416 11.2269 17.9008 11.2269C20.9427 11.2269 21.5041 13.2271 21.5041 15.8304L21.5052 21.1291Z" fill="black" />
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M23.4357 4.68164L3.48942 12.3733C2.12817 12.92 2.13605 13.6794 3.23967 14.018L8.36067 15.6155L20.2092 8.13989C20.7694 7.79901 21.2813 7.98239 20.8605 8.35589L11.2609 17.0195H11.2587L11.2609 17.0206L10.9077 22.2991C11.4252 22.2991 11.6535 22.0618 11.9438 21.7816L14.4312 19.3629L19.605 23.1845C20.559 23.7099 21.2442 23.4399 21.4815 22.3014L24.8779 6.29489C25.2255 4.90101 24.3458 4.26989 23.4357 4.68164Z" fill="black" />
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                <g clipPath="url(#clip0_100_1270)">
                  <path d="M17.7197 1.83095H21.1697L13.6322 10.4466L22.5 22.1681H15.5569L10.1194 15.0581L3.89625 22.1681H0.444375L8.50688 12.9525L0 1.83189H7.11937L12.0347 8.33064L17.7197 1.83095ZM16.5094 20.1038H18.4209L6.08063 3.78751H4.02938L16.5094 20.1038Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_100_1270">
                    <rect width="22.5" height="22.5" fill="white" transform="translate(0 0.75)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        <p className="fs-14 text-gray text-justify mt-5 mb-0 d-block d-lg-none">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردها است.
        </p>

        <svg className="mt-5 w-100" xmlns="http://www.w3.org/2000/svg" height="1" viewBox="0 0 1336 1" fill="none">
          <line opacity="0.2" x1="4.37114e-08" y1="0.5" x2="1336" y2="0.500117" stroke="url(#paint0_linear_100_1291)" />
          <defs>
            <linearGradient id="paint0_linear_100_1291" x1="1336" y1="1.00012" x2="0" y2="1" gradientUnits="userSpaceOnUse">
              <stop stopOpacity="0" />
              <stop offset="0.526042" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="row align-items-center mt-4 pt-1 mx-0">
          <div className="col-lg-7">
            <div className="d-flex align-items-lg-center gap-3 mb-4">
              <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                <rect opacity="0.1" x="0.599609" y="0.799805" width="45.6" height="45.6" rx="15.96" fill="url(#paint0_linear_100_1230)" />
                <path d="M20.3305 14.5366C22.5153 13.2671 25.2009 13.2893 27.3652 14.5947C29.5083 15.9268 30.8108 18.304 30.7987 20.8613C30.7488 23.4018 29.3521 25.7899 27.6063 27.6359C26.5987 28.7063 25.4714 29.6527 24.2477 30.4559C24.1216 30.5288 23.9836 30.5776 23.8403 30.5999C23.7024 30.594 23.5681 30.5532 23.4496 30.4813C21.5813 29.2744 19.9422 27.7339 18.6112 25.9338C17.4974 24.4312 16.8647 22.6159 16.7988 20.7343L16.8038 20.4605C16.8948 18.0045 18.2236 15.7608 20.3305 14.5366ZM24.7061 18.6346C23.8179 18.2571 22.7939 18.4622 22.1121 19.1542C21.4304 19.8462 21.2255 20.8886 21.593 21.7946C21.9605 22.7007 22.828 23.2917 23.7904 23.2917C24.4209 23.2962 25.027 23.0437 25.4736 22.5903C25.9203 22.137 26.1703 21.5205 26.1681 20.8782C26.1714 19.8979 25.5943 19.0122 24.7061 18.6346Z" fill="url(#paint1_linear_100_1230)" />
                <path opacity="0.4" d="M23.7988 33.5999C26.5603 33.5999 28.7988 33.1521 28.7988 32.5999C28.7988 32.0476 26.5603 31.5999 23.7988 31.5999C21.0374 31.5999 18.7988 32.0476 18.7988 32.5999C18.7988 33.1521 21.0374 33.5999 23.7988 33.5999Z" fill="url(#paint2_linear_100_1230)" />
                <defs>
                  <linearGradient id="paint0_linear_100_1230" x1="0.599609" y1="41.0423" x2="53.3652" y2="26.0947" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5B6CCC" />
                    <stop offset="1" stopColor="#4834AC" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_100_1230" x1="16.7988" y1="28.6025" x2="33.3956" y2="24.7306" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5B6CCC" />
                    <stop offset="1" stopColor="#4834AC" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_100_1230" x1="18.7988" y1="33.3649" x2="22.9569" y2="27.4754" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#5B6CCC" />
                    <stop offset="1" stopColor="#4834AC" />
                  </linearGradient>
                </defs>
              </svg>
              <div>
                <p className="font-bold fs-18 mb-1 text-justify">
                  سعادت آباد، بلوار سرو غربی، خیابان ریاضی بخشایش، خیابان زند وکیلی غربی، پلاک ۹۱، طبقه ۴
                </p>
                <p className="text-gray mb-0">آدرس</p>
              </div>
            </div>

            <div className="d-flex flex-column flex-md-row align-items-md-center gap-5">
              <div className="d-flex align-items-lg-center gap-3">
                <svg className="flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 47 46" fill="none">
                  <rect opacity="0.1" x="0.599609" y="0.399994" width="45.6" height="45.6" rx="15.96" fill="url(#paint0_linear_100_1253)" />
                  <g opacity="0.4">
                    <path d="M26.2171 16.69C25.7411 16.602 25.3038 16.9058 25.2132 17.3705C25.1226 17.8352 25.4273 18.2889 25.8904 18.3798C27.2847 18.6516 28.3613 19.7309 28.6341 21.1299C28.7118 21.5327 29.0664 21.8265 29.4747 21.8265C29.5295 21.8265 29.5842 21.8215 29.64 21.8115C30.1031 21.7185 30.4078 21.2658 30.3172 20.8002C29.9099 18.7106 28.3015 17.0967 26.2171 16.69Z" fill="url(#paint1_linear_100_1253)" />
                    <path d="M26.1547 13.208C25.9316 13.176 25.7075 13.2419 25.5293 13.3839C25.346 13.5278 25.2315 13.7356 25.2066 13.9685C25.1538 14.4391 25.4934 14.8648 25.9635 14.9178C29.2051 15.2796 31.7248 17.8048 32.0893 21.0566C32.1381 21.4923 32.5035 21.8211 32.9398 21.8211C32.9726 21.8211 33.0045 21.8191 33.0374 21.8151C33.2654 21.7901 33.4686 21.6772 33.612 21.4973C33.7544 21.3174 33.8191 21.0936 33.7932 20.8647C33.3391 16.8075 30.199 13.6587 26.1547 13.208Z" fill="url(#paint2_linear_100_1253)" />
                  </g>
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.8306 24.1724C26.8197 28.1604 27.7246 23.5468 30.2645 26.0849C32.7131 28.5328 34.1204 29.0232 31.0181 32.1248C30.6295 32.4371 28.1604 36.1943 19.4834 27.5197C10.8054 18.844 14.5604 16.3725 14.8728 15.984C17.9827 12.8739 18.4647 14.2894 20.9133 16.7374C23.4532 19.2765 18.8415 20.1845 22.8306 24.1724Z" fill="url(#paint3_linear_100_1253)" />
                  <defs>
                    <linearGradient id="paint0_linear_100_1253" x1="0.599609" y1="40.6424" x2="53.3652" y2="25.6949" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5B6CCC" />
                      <stop offset="1" stopColor="#4834AC" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_100_1253" x1="25.1973" y1="21.2212" x2="31.1429" y2="19.542" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5B6CCC" />
                      <stop offset="1" stopColor="#4834AC" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_100_1253" x1="25.2012" y1="20.8082" x2="35.1539" y2="17.9964" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5B6CCC" />
                      <stop offset="1" stopColor="#4834AC" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_100_1253" x1="13.7988" y1="30.9677" x2="35.7845" y2="24.7396" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5B6CCC" />
                      <stop offset="1" stopColor="#4834AC" />
                    </linearGradient>
                  </defs>
                </svg>
                <div>
                  <p className="font-bold fs-17 mb-1">
                    <span className="fw-300 text-gray">021</span>۱۲۳۴۵۶۷۸
                  </p>
                  <p className="text-gray mb-0">شماره تماس</p>
                </div>
              </div>

              <div className="d-flex align-items-lg-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="47" height="46" viewBox="0 0 47 46" fill="none">
                  <rect opacity="0.1" x="0.799194" y="0.399994" width="45.6" height="45.6" rx="15.96" fill="url(#paint0_linear_100_1242)" />
                  <path opacity="0.4" d="M33.9984 23.2C33.9984 28.724 29.5214 33.2 23.9984 33.2C18.4754 33.2 13.9984 28.724 13.9984 23.2C13.9984 17.678 18.4754 13.2 23.9984 13.2C29.5214 13.2 33.9984 17.678 33.9984 23.2Z" fill="url(#paint1_linear_100_1242)" />
                  <path d="M27.5719 27.0146C27.4409 27.0146 27.3089 26.9806 27.1879 26.9096L23.2619 24.5676C23.0359 24.4316 22.8969 24.1866 22.8969 23.9226V18.8756C22.8969 18.4616 23.2329 18.1256 23.6469 18.1256C24.0609 18.1256 24.3969 18.4616 24.3969 18.8756V23.4966L27.9569 25.6196C28.3119 25.8326 28.4289 26.2926 28.2169 26.6486C28.0759 26.8836 27.8269 27.0146 27.5719 27.0146Z" fill="url(#paint2_linear_100_1242)" />
                  <defs>
                    <linearGradient id="paint0_linear_100_1242" x1="0.799194" y1="40.6424" x2="53.5648" y2="25.6949" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5B6CCC" />
                      <stop offset="1" stopColor="#4834AC" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_100_1242" x1="13.9984" y1="30.8502" x2="37.1412" y2="24.2943" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5B6CCC" />
                      <stop offset="1" stopColor="#4834AC" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_100_1242" x1="22.8969" y1="25.9702" x2="29.4821" y2="24.8315" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#5B6CCC" />
                      <stop offset="1" stopColor="#4834AC" />
                    </linearGradient>
                  </defs>
                </svg>
                <div>
                  <p className="font-bold fs-17 mb-1">info@karzaan.com</p>
                  <p className="text-gray mb-0">ایمیل</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-1">
            <svg className="d-lg-block d-none mx-auto" xmlns="http://www.w3.org/2000/svg" width="1" height="121" viewBox="0 0 1 121" fill="none">
              <line opacity="0.2" x1="0.5" y1="-2.18557e-08" x2="0.500005" y2="121" stroke="url(#paint0_linear_100_1292)" />
              <defs>
                <linearGradient id="paint0_linear_100_1292" x1="5.28908e-06" y1="121" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="0" />
                  <stop offset="0.526042" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="col-lg-4">
            <ul className="list-unstyled mb-5 pe-0 d-flex align-items-center justify-content-between">
              <li><Link to="/" className="text-dark">صفحه اصلی</Link></li>
              <li><Link to="/services" className="text-dark">خدمات ما</Link></li>
              <li><Link to="/blog" className="text-dark">بلاگ</Link></li>
            </ul>
            <ul className="list-unstyled mb-0 pe-0 d-flex align-items-center justify-content-between">
              <li><Link to="/contact" className="text-dark">تماس با ما</Link></li>
              <li><Link to="/about" className="text-dark">درباره ما</Link></li>
              <li><Link to="/faq" className="text-dark">سوالات متداول</Link></li>
            </ul>
          </div>
        </div>

        <div className="rounded-18 bg-second2 position-relative prefooter -bottom-39 py-4 px-lg-4 d-flex align-items-center justify-content-lg-between justify-content-center">
          <img alt="shape" src="/assets/img/copyRight1.png" className="position-absolute end-0 top-0 d-none d-lg-block" />
          <img alt="shape" src="/assets/img/copyRight2.png" className="position-absolute start-0 top-0 copyRight2" />

          <ul className="list-unstyled d-lg-flex d-none align-items-center gap-lg-5 mb-0 pe-0 fs-14 position-relative z-10">
            <li><Link to="/" className="text-white fw-bold">صفحه اصلی</Link></li>
            <li><Link to="/services" className="text-white fw-bold">خدمات ما</Link></li>
            <li><Link to="/blog" className="text-white fw-bold">بلاگ</Link></li>
            <li><Link to="/about" className="text-white fw-bold">درباره ما</Link></li>
            <li><Link to="/contact" className="text-white fw-bold">تماس با ما</Link></li>
          </ul>
          <p className="text-white fs-14 mb-0">
            تمام حقوق برای <a className="font-bold text-white position-relative z-10">سگال نیرو</a> محفوظ است.
          </p>
        </div>
      </div>

      {/* footer mobile menu */}
      <div className="position-fixed footerMobileMenu shadow4 text-center bg-blur fs-12 fw-bold py-2 -bottom-23 end-0 start-0 rounded-t-42 w-100 z-20 d-lg-none">
        <svg className="position-absolute -top-32 start-0 left-14 mx-auto" xmlns="http://www.w3.org/2000/svg" width="150" height="33" viewBox="0 0 150 33" fill="none">
          <g filter="url(#filter0_b_501_83)">
            <path fillRule="evenodd" clipRule="evenodd" d="M149.808 32.3286C143.578 32.3286 137.492 30.4514 132.344 26.9416L107.867 10.2526C87.626 -3.54804 60.9629 -3.40473 40.8716 10.6125L17.7373 26.7525C12.5347 30.3823 6.34375 32.3286 0 32.3286H149.808Z" fill="white" fillOpacity="0.6" />
          </g>
          <defs>
            <filter id="filter0_b_501_83" x="-11" y="-11" width="171.808" height="54.3285" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="5.5" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_501_83" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_501_83" result="shape" />
            </filter>
          </defs>
        </svg>

        <div className="d-flex align-items-center justify-content-between container h-100">
          <Link to="/services" className="text-gray">
            <img alt="icon" src="/assets/img/serviceicon.png" className="img-fluid mx-auto d-block" />
            <p className="mb-0 mt-2">خدمات</p>
          </Link>
          <Link to="/products" className="text-gray">
            <img alt="icon" src="/assets/img/shopicon.png" className="img-fluid mx-auto d-block" />
            <p className="mb-0 mt-2">فروشگاه</p>
          </Link>
          <Link to="/" className="text-dark position-relative -top-30">
            <div className="mx-auto w-76 h-76 rounded-circle bg-gradient-main2 d-flex align-items-center justify-content-center">
              <img alt="icon" src="/assets/img/Home.png" className="img-fluid" />
            </div>
            <p className="mb-0 mt-4 fs-15">خانه</p>
          </Link>
          <Link to="/contact" className="text-gray">
            <img alt="icon" src="/assets/img/phoneicon.png" className="img-fluid mx-auto d-block" />
            <p className="mb-0 mt-2">تماس با ما</p>
          </Link>
          <Link to="/about" className="text-gray">
            <img alt="icon" src="/assets/img/abouticon.png" className="img-fluid mx-auto d-block" />
            <p className="mb-0 mt-2">درباره ما</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}