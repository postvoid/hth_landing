// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });

const swiper = new Swiper('.swiper', {
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
      // when window width is >= 640px
      640: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          // spaceBetween: 20,
      },
      // when window width is >= 768px
      768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
      },
      // when window width is >= 1024px
      1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
      },
  }
});

