// Import Swiper library
import Swiper from 'swiper/bundle';

// import styles bundle


// Initialize Swiper slider
// const swiper = new Swiper('.swiper-container', {
//   loop: true,
//   autoplay: {
//     delay: 5000,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });


document.addEventListener('DOMContentLoaded',  function() {  
  var gallery_thumbs_swiper = new Swiper(".gallery-thumbs-swiper", {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      direction: "vertical",
  });

    var gallery_swiper = new Swiper(".gallery-swiper", {
      spaceBetween: 2,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: gallery_thumbs_swiper,
      },
      on: {
          init: function () {
              // on page resize load gallery height
              window.addEventListener('load', (event) => {
                  let gallery_slide_height = document.getElementsByClassName('product-img')[0].offsetHeight;
                  let gallery = document.getElementById('product-images');
                  gallery.style.height = gallery_slide_height + 'px';
                  gallery.style.opacity = "1";
              });
          
              window.addEventListener('resize', function () {
                  let gallery_slide_height = document.getElementsByClassName('product-img')[0].offsetHeight;
                  let gallery = document.getElementById('product-images');
                  gallery.style.height = gallery_slide_height + 'px';
              });
          }
      }
    });

    var related_Swiper = new Swiper(".related-swiper", {
      spaceBetween: 10,
      slidesPerView: 2.5,
  });
});