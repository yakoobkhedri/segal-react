// dropdown menu

let productMenu = document.getElementById('productMenu');
let dropdowns = document.querySelector('.dropdowns');
let dropdown1 = Array.from(document.querySelectorAll('.dropdown1 > li'));
let dropdown2 = Array.from(document.querySelectorAll('.dropdown2 > li'));
let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));
let hamIcon = document.getElementById('hamIcon');
let mobileMenu = document.getElementById('mobileMenu');
let languageLi = document.querySelector('.nav-item.dropdown');

hamIcon.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
})

accordionBtn.forEach((item) => {
  item.addEventListener('click', function () {
    item.nextElementSibling.classList.toggle('active');
    item.querySelector('.bi-chevron-up').classList.toggle('active');
  })
})
productMenu.addEventListener('mouseover', function () {
  this.parentElement.nextElementSibling.classList.add('active');
})

dropdown1.forEach((item) => {
  item.addEventListener('mouseover', function () {
    dropdown1.forEach((li) => li.classList.remove('active'));
    item.classList.add('active');
    let tabId = item.dataset.id;
    dropdown2.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    })
  })
});
dropdowns.addEventListener('mouseleave', function () {
  dropdowns.classList.remove('active');
})
languageLi.addEventListener('mouseover', function () {
  document.querySelector('.dropdowns').classList.remove('active');
})

// close toast
let closeIcon=Array.from(document.getElementsByClassName('bi-x'));

closeIcon.forEach((item)=>{
  item.addEventListener('click',function () {
    item.parentElement.classList.add('d-none');
  })
})

// swiper
var banner = new Swiper(".banner", {
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
  },
});
var category = new Swiper(".category", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  autoplay: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 69,
    },
    1280: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination2",
  },
});
var services = new Swiper(".services", {
  slidesPerView: 1,
  spaceBetween: 27,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
  },
  pagination: {
    el: ".swiper-pagination3",
  },
});
var customer = new Swiper(".customer", {
  loop: true,
  autoplay: true,
  slidesPerView: 1.2,
  spaceBetween: 19,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 27,
    },
    992: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  pagination: {
    el: ".swiper-pagination4",
  },
});
var about = new Swiper(".about", {
  loop: true,
  autoplay: true,
  spaceBetween: 24,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
});

var about2 = new Swiper(".about2", {
  loop: true,
  autoplay: true,
  spaceBetween: 24,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination2",
  },
});

var about3 = new Swiper(".about3", {
  loop: true,
  autoplay: true,
  spaceBetween: 24,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination3",
  },
});

var about4 = new Swiper(".about4", {
  loop: true,
  autoplay: true,
  spaceBetween: 24,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination4",
  },
});
var smallImgs = new Swiper(".smallImgs", {
  spaceBetween: 16,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var gallery = new Swiper(".gallery", {
  spaceBetween: 10,
  thumbs: {
    Swiper: Swiper,
  },
});
var specialProduct = new Swiper(".specialProduct", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination2",
  },
});
var products = new Swiper(".products", {
  slidesPerView: 2,
  spaceBetween: 0,
  // autoplay:true,
  breakpoints: {
    768: {
      slidesPerView: 3.5,
    },
    992: {
      slidesPerView: 4.5,
    },
    1200: {
      slidesPerView: 5.5,
    },
    1400: {
      slidesPerView: 7.5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination2",
  },
});

// filter

let filterBtn = Array.from(document.getElementsByClassName('filterBtn'));
let filterContent = Array.from(document.getElementsByClassName('filterContent'));

filterBtn.forEach((item) => {
  item.addEventListener('click', function () {
    filterBtn.forEach((items) => {
      items.nextElementSibling.classList.remove('active');
      items.querySelector('svg').classList.remove('active');
    })
    item.nextElementSibling.classList.add('active');
    item.querySelector('svg').classList.add('active');
  })
})

// compare


let compareItems = [];
$(".compare-product").click(function (e) {
  e.preventDefault();
  $(".compare-modal").removeClass("d-none");
  const compareId = $(this).attr("compare-id");
  const compareTitle = $(this).attr("compare-title");
  const compareImg = $(this).attr("compare-img");
  const off = $(this).attr("compare-off");
  const price = $(this).attr("compare-price");
  const oldPrice = $(this).attr("compare-oldPrice");
  if (compareItems.filter((item) => item == compareId).length) return;
  compareItems.push(compareId);

  const compareItem = `
    <div  class="col-xxl-3 col-xl-4 col-md-6 compare-item">
    <div class="rounded-21 bg-white p-3 shadow10 position-relative">
      <div class="position-absolute left-20 cursor-pointer remove-compare-item" ompare-id="${compareId}">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
          <g opacity="0.3">
            <path
              d="M13.9099 11.9999L18.2099 7.70994C18.3982 7.52164 18.504 7.26624 18.504 6.99994C18.504 6.73364 18.3982 6.47825 18.2099 6.28994C18.0216 6.10164 17.7662 5.99585 17.4999 5.99585C17.2336 5.99585 16.9782 6.10164 16.7899 6.28994L12.4999 10.5899L8.20994 6.28994C8.02164 6.10164 7.76624 5.99585 7.49994 5.99585C7.23364 5.99585 6.97824 6.10164 6.78994 6.28994C6.60164 6.47825 6.49585 6.73364 6.49585 6.99994C6.49585 7.26624 6.60164 7.52164 6.78994 7.70994L11.0899 11.9999L6.78994 16.2899C6.69621 16.3829 6.62182 16.4935 6.57105 16.6154C6.52028 16.7372 6.49414 16.8679 6.49414 16.9999C6.49414 17.132 6.52028 17.2627 6.57105 17.3845C6.62182 17.5064 6.69621 17.617 6.78994 17.7099C6.8829 17.8037 6.9935 17.8781 7.11536 17.9288C7.23722 17.9796 7.36793 18.0057 7.49994 18.0057C7.63195 18.0057 7.76266 17.9796 7.88452 17.9288C8.00638 17.8781 8.11698 17.8037 8.20994 17.7099L12.4999 13.4099L16.7899 17.7099C16.8829 17.8037 16.9935 17.8781 17.1154 17.9288C17.2372 17.9796 17.3679 18.0057 17.4999 18.0057C17.632 18.0057 17.7627 17.9796 17.8845 17.9288C18.0064 17.8781 18.117 17.8037 18.2099 17.7099C18.3037 17.617 18.3781 17.5064 18.4288 17.3845C18.4796 17.2627 18.5057 17.132 18.5057 16.9999C18.5057 16.8679 18.4796 16.7372 18.4288 16.6154C18.3781 16.4935 18.3037 16.3829 18.2099 16.2899L13.9099 11.9999Z"
              fill="black" />
          </g>
        </svg>
      </div>
      <img alt="product"src="${compareImg}" class=" img-fluid mx-auto d-block mt-4">
      <a class="fs-14 fw-bold text-black2 mt-4 d-inline-block h-65">
      ${compareTitle}
      </a>
      <div class="d-flex align-items-center gap-3 h-65">
        <a class="d-flex flex-shrink-0 align-items-center justify-content-center bg-white rounded-14 shadow8 w-38 h-38">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6.25 15C6.58152 15 6.89946 15.1317 7.13388 15.3661C7.3683 15.6005 7.5 15.9185 7.5 16.25C7.5 16.5815 7.3683 16.8995 7.13388 17.1339C6.89946 17.3683 6.58152 17.5 6.25 17.5C5.91848 17.5 5.60054 17.3683 5.36612 17.1339C5.1317 16.8995 5 16.5815 5 16.25C5 15.9185 5.1317 15.6005 5.36612 15.3661C5.60054 15.1317 5.91848 15 6.25 15ZM13.75 15C14.0815 15 14.3995 15.1317 14.6339 15.3661C14.8683 15.6005 15 15.9185 15 16.25C15 16.5815 14.8683 16.8995 14.6339 17.1339C14.3995 17.3683 14.0815 17.5 13.75 17.5C13.4185 17.5 13.1005 17.3683 12.8661 17.1339C12.6317 16.8995 12.5 16.5815 12.5 16.25C12.5 15.9185 12.6317 15.6005 12.8661 15.3661C13.1005 15.1317 13.4185 15 13.75 15Z" fill="#27817A"></path>
            <path opacity="0.5" d="M1.73648 2.29254C1.79142 2.13619 1.90622 2.00806 2.05561 1.93633C2.20501 1.8646 2.37678 1.85514 2.53315 1.91004L2.78398 1.99837C3.29815 2.1792 3.73398 2.33254 4.07815 2.50087C4.44481 2.6817 4.75981 2.90337 4.99648 3.25004C5.23148 3.59337 5.32898 3.97087 5.37315 4.38504C5.39315 4.57004 5.40398 4.77504 5.40981 5.00004H14.2748C15.679 5.00004 16.9431 5.00004 17.3131 5.48087C17.6831 5.9617 17.5381 6.6867 17.249 8.13587L16.8323 10.1567C16.5698 11.43 16.439 12.0675 15.979 12.4417C15.519 12.8167 14.869 12.8167 13.5681 12.8167H9.14898C6.82398 12.8167 5.66231 12.8167 4.94065 12.055C4.21898 11.2934 4.16565 10.485 4.16565 8.03337V5.86504C4.16565 5.24837 4.16565 4.83587 4.13065 4.5192C4.09731 4.2167 4.03981 4.06504 3.96398 3.95504C3.89148 3.84754 3.78065 3.7467 3.52731 3.62337C3.25815 3.4917 2.89231 3.3617 2.33565 3.16587L2.11898 3.09004C2.04139 3.06292 1.96991 3.02076 1.90864 2.96598C1.84737 2.9112 1.7975 2.84488 1.76189 2.7708C1.72628 2.69672 1.70564 2.61635 1.70113 2.53428C1.69663 2.45222 1.70836 2.37007 1.73565 2.29254H1.73648Z" fill="#27817A"></path>
            <path d="M11.4582 7.5C11.4582 7.33424 11.3923 7.17527 11.2751 7.05806C11.1579 6.94085 10.9989 6.875 10.8332 6.875C10.6674 6.875 10.5084 6.94085 10.3912 7.05806C10.274 7.17527 10.2082 7.33424 10.2082 7.5V8.54167H9.1665C9.00074 8.54167 8.84177 8.60752 8.72456 8.72473C8.60735 8.84194 8.5415 9.00091 8.5415 9.16667C8.5415 9.33243 8.60735 9.4914 8.72456 9.60861C8.84177 9.72582 9.00074 9.79167 9.1665 9.79167H10.2082V10.8333C10.2082 10.9991 10.274 11.1581 10.3912 11.2753C10.5084 11.3925 10.6674 11.4583 10.8332 11.4583C10.9989 11.4583 11.1579 11.3925 11.2751 11.2753C11.3923 11.1581 11.4582 10.9991 11.4582 10.8333V9.79167H12.4998C12.6656 9.79167 12.8246 9.72582 12.9418 9.60861C13.059 9.4914 13.1248 9.33243 13.1248 9.16667C13.1248 9.00091 13.059 8.84194 12.9418 8.72473C12.8246 8.60752 12.6656 8.54167 12.4998 8.54167H11.4582V7.5Z" fill="#27817A"></path>
          </svg>
        </a>
        <div class="flex-grow-1">
          <div class="d-flex align-items-center justify-content-end gap-2">
            <p class="fs-12 text-gray text-decoration-line-through mb-0"> ${oldPrice}</p>
            <p class="mb-0 fs-11 fw-bold text-white bg-danger px-2 rounded-pill"> ${off}</p>
          </div>
          <div class="d-flex align-items-end justify-content-end gap-1 mt-1">
            <p class="fs-17 font-bold mb-0"> ${price}</p>
            <p class="mb-1 fs-12 fw-bold">تومان</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;

  $(".compare-list").append(compareItem);
  $('html, body').animate({
    scrollTop: $("#compare-product-modal").offset().top
  }, 2000);
});

$(".clear-compare").click(function () {
  compareItems = [];
  $(".compare-modal").addClass("d-none");
  $(".compare-list").html("");
});

$(".compare-list").on("click", ".remove-compare-item", function () {
  console.log("here");
  const compareId = $(this).attr("compare-id");
  compareItems = compareItems.filter((item) => item != compareId);
  $(this).parent().remove();
  console.log($(this).parent(), $(this));
  if (!compareItems.length) $(".compare-modal").addClass("d-none");
});

$(".compare-all").click(function () {
  window.location.href = `./compare.html?ids=${compareItems.join(",")}`;
});