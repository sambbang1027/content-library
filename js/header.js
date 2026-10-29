document.addEventListener("click", (e) => {
    // 햄버거 버튼 클릭
    const menuBtn = e.target.closest("#menu-btn");
    if (menuBtn) {
        const mobileMenu = document.getElementById("mobile-menu");

        if (mobileMenu) {
            mobileMenu.classList.toggle("hidden");
        }
        if (mobileMenu.classList.contains("hiddens")) {
            mobileMenu.querySelectorAll(".mobile-toggle").forEach((toggle) => {
                const subMenu = toggle.nextElementSibling;
                const arrowIcon = toggle.querySelector('[data-lucide="chevron-down"]');

                if (subMenu) {
                    subMenu.classList.add("hidden");
                    subMenu.classList.remove("flex");
                }

                if (arrowIcon) {
                    subMenu.classList.remove("rotate-180");
                }
            });
        }

        return;
    }

    //  모바일 서브메뉴 클릭
    const toggle = e.target.closest(".mobile-toggle");

    if (toggle) {
        const subMenu = toggle.nextElementSibling;
        const arrowIcon = toggle.querySelector('[data-lucide="chevron-down"]');

        if (subMenu) {
            subMenu.classList.toggle("hidden");
            subMenu.classList.toggle("flex");
        }

        if (arrowIcon) {
            arrowIcon.classList.toggle("rotate-180");
        }
    }
});
