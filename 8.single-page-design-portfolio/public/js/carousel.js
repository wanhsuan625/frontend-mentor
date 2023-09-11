const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 15,
    loop: true,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        576: {
            spaceBetween: 30,
        }
    }
});