document.addEventListener("DOMContentLoaded", () => {
    mainBanner();
});

// 메인 배너
function mainBanner() {
    const bannerSwiper = new Swiper(".swiper-main-banner", {
        slidesPerView: 1, // 화면에 딱 1개 슬라이드만 보이도록 고정
        spaceBetween: 0,
        direction: "horizontal",
        loop: true,

        autoplay: {
            delay: 4000, // 4sec
            disableOnInteraction: false,
        },

        pagination: {
            el: ".main-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });
}
