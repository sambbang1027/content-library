document.addEventListener("DOMContentLoaded", () => {
    publishingSwiper();
});

// 출판사 페이지네이션
function publishingSwiper() {
    // 출판사 로고 데이터
    const clientLogos = [
        { src: "/assets/images/logo/client/client_01.png", alt: "가나" },
        { src: "/assets/images/logo/client/client_02.png", alt: "어린이" },
        { src: "/assets/images/logo/client/client_03.png", alt: "가지" },
        { src: "/assets/images/logo/client/client_04.png", alt: "걷는사람" },
        { src: "/assets/images/logo/client/client_05.png", alt: "하늘걸음" },
        { src: "/assets/images/logo/client/client_06.png", alt: "고래뱃속" },
        { src: "/assets/images/logo/client/client_07.png", alt: "국민사관" },
        { src: "/assets/images/logo/client/client_08.png", alt: "궁리" },
        { src: "/assets/images/logo/client/client_09.png", alt: "출판사" },
        { src: "/assets/images/logo/client/client_10.png", alt: "글항아리" },
        { src: "/assets/images/logo/client/client_11.png", alt: "노란돼지" },
        { src: "/assets/images/logo/client/client_12.png", alt: "논장" },
        { src: "/assets/images/logo/client/client_13.png", alt: "다락원" },
        { src: "/assets/images/logo/client/client_14.png", alt: "다른" },
        { src: "/assets/images/logo/client/client_15.png", alt: "다봄" },
        { src: "/assets/images/logo/client/client_16.png", alt: "다섯수레" },
        { src: "/assets/images/logo/client/client_17.png", alt: "Denstory" },
        { src: "/assets/images/logo/client/client_18.png", alt: "동녘" },
        { src: "/assets/images/logo/client/client_19.png", alt: "동아시아" },
        { src: "/assets/images/logo/client/client_20.png", alt: "두레" },

        { src: "/assets/images/logo/client/client_01.png", alt: "가나" },
        { src: "/assets/images/logo/client/client_02.png", alt: "어린이" },
        { src: "/assets/images/logo/client/client_03.png", alt: "가지" },
        { src: "/assets/images/logo/client/client_04.png", alt: "걷는사람" },
        { src: "/assets/images/logo/client/client_05.png", alt: "하늘걸음" },
        { src: "/assets/images/logo/client/client_06.png", alt: "고래뱃속" },
        { src: "/assets/images/logo/client/client_07.png", alt: "국민사관" },
        { src: "/assets/images/logo/client/client_08.png", alt: "궁리" },
    ];

    const wrapper = document.querySelector(".publishing-co .swiper-wrapper");

    if (!wrapper) return;

    let swiper = null;
    let currentSize = "";

    function setSwiper() {
        const width = window.innerWidth;

        // 현재 해상도
        const size = width >= 1024 ? "lg" : width >= 768 ? "md" : "sm";

        if (size === currentSize) return;

        currentSize = size;

        // 사이즈 별 개수
        const perPage = size === "lg" ? 20 : size === "md" ? 14 : 10;

        let slides = "";

        for (let i = 0; i < clientLogos.length; i += perPage) {
            const group = clientLogos.slice(i, i + perPage);

            slides += `
                <div class="swiper-slide">
                     <div class="grid grid-cols-5 gap-x-4 gap-y-6 md:grid-cols-7 lg:grid-cols-10">
                        ${group
                            .map(
                                (item) => `
                                    <div class="flex min-w-0 items-center justify-center">
                                        <div class="aspect-4/3 w-[80%]">
                                            <img
                                                src="${item.src}"
                                                alt="${item.alt}"
                                                class="h-full w-full object-contain"
                                            />
                                        </div>
                                    </div>
                                `,
                            )
                            .join("")}
                    </div>
                </div>
            `;
        }

        // 기존 swiper 제거
        swiper?.destroy(true, true);

        // 새로운 묶음 적용
        wrapper.innerHTML = slides;

        // swiper 다시 생성
        swiper = new Swiper(".publishing-co", {
            slidesPerView: 1,
            spaceBetween: 0,

            pagination: {
                el: ".publishing-pc-pagination",
                type: "fraction",
            },

            navigation: {
                nextEl: ".publishing-btn-next",
                prevEl: ".publishing-btn-prev",
            },
        });
    }

    setSwiper();

    window.addEventListener("resize", setSwiper);
}
