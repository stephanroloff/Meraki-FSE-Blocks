// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


setTimeout(() => {

  function startSwiper() {

    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      direction: 'horizontal',
      // loop: true,
      loop: false,
      modules: [Navigation, Pagination],

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },

      // autoplay: {
      //   delay: 5000,
      // },
      autoplay: false,

      // slidesPerView: numberOfSliders
      slidesPerView: '1',
    });

  }
  startSwiper();

  //RESPONSIVE---------------------------------------------

  let swiperClass = document.querySelector('.swiper_');
  let swiperWrapperClass = document.querySelector('.swiper-wrapper_');
  let allSwiperSliderClass = document.querySelectorAll('.slide_');
  let swiperPaginationClass = document.querySelector('.swiper-pagination_');
  let swiperBtnPrevClass = document.querySelector('.swiper-button-prev_');
  let swiperBtnNextClass = document.querySelector('.swiper-button-next_');

  let x = window.matchMedia("(max-width: 700px)")

  if (x.matches) { // If media query matches

    if (!swiperClass) return;

    swiperClass.classList.add('swiper');
    swiperWrapperClass.classList.add('swiper-wrapper');
    swiperPaginationClass.classList.add('swiper-pagination');
    swiperBtnPrevClass.classList.add('swiper-button-prev');
    swiperBtnNextClass.classList.add('swiper-button-next');

    allSwiperSliderClass.forEach(element => {
      element.classList.add('swiper-slide');
    })

    startSwiper();

  } else {
  }

  //-------------------------------------------------------


}, 1000)