document.addEventListener("DOMContentLoaded", () => {
    
    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".mobile-menu__close");
    const body = document.body;
    if (!burger || !mobileMenu || !closeBtn) return;
    
    const openMenu = () => {
        mobileMenu.classList.add("mobile-menu--open");
        body.classList.add("body--locked");
    };
    
    const closeMenu = () => {
        mobileMenu.classList.remove("mobile-menu--open");
        body.classList.remove("body--locked");
    };

    burger.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);

  // закрывать по клику на ссылку в меню
    mobileMenu.addEventListener("click", (e) => {
        if (e.target.closest("a")) {
            closeMenu();
        }
    });
    
});
