// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// The last 3 modules have to be loaded in style.css

setTimeout(() => {

  function startSwiper() {

    const swiper = new Swiper('.wp-block-create-block-airport-conveyor-belt-block', {
      // Optional parameters
      // direction: 'vertical',
      direction: 'horizontal',
      // loop: false,
      loop: true,
      modules: [Navigation, Pagination, Autoplay],

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

      speed: 10000,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },

      slidesPerView: '1',
    });

  }

  //NON-RESPONSIVE (Carousel always active)----------------

  startSwiper();

  //RESPONSIVE---------------------------------------------
  // let swiperBtnPrevClass = document.querySelector('.swiper-button-prev');
  // let swiperBtnNextClass = document.querySelector('.swiper-button-next');
  // let x = window.matchMedia("(max-width: 700px)");

  // if (x.matches) { // If media query matches
  //   startSwiper();
  // } else {
  //   swiperBtnPrevClass.style.display = 'none';
  //   swiperBtnNextClass.style.display = 'none';
  // }
  //-------------------------------------------------------

}, 10)