const arrow_prev = document.querySelector("#arrowPrev");
const arrow_next = document.querySelector("#arrowNext");
const img_1 = document.querySelector("#img-1");
const img_5 = document.querySelector("#img-5");

const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 15,
    initialSlide: 2,
    
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev',
    },

    // Arrow hide when image gallery goes to left/ right
    on: {
        slideChangeTransitionStart: function() {
            const isImg1Active = img_1.classList.contains("swiper-slide-active");
            const isImg5Active = img_5.classList.contains("swiper-slide-active");

            arrow_prev.classList.toggle("disable", isImg1Active);
            arrow_next.classList.toggle("disable", isImg5Active);
        }
    },

    breakpoints: {
        576: {
            spaceBetween: 30,
        }
    }
});