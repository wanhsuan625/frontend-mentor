const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 15,
    loop: true,
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

    breakpoints: {
        576: {
            spaceBetween: 30,
        }
    }
});
