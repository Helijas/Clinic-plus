const swiper = new Swiper(".swiper", {
    spaceBetween: 20,
    freeMode: {
        enabled: false,
    },

    breakpoints: {
        0: {
        slidesPerView: 1.1,
        spaceBetween: 5,
        freeMode: {
            enabled: true,
        },
        },

        768: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: {
            enabled: false,
        },
        },
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const documentsSlider = new Swiper(".documents-slider", {
    spaceBetween: 20,
    loop: false,

    breakpoints: {
        0: {
        slidesPerView: 1.3,
        spaceBetween: 10,
        freeMode: {
            enabled: true,
        },
        },

        460: {
            slidesPerView: 2.3,
        },

        768: {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: {
            enabled: false,
        },
        },
    },

    navigation: {
        nextEl: ".n",
        prevEl: ".p",
    },
});
