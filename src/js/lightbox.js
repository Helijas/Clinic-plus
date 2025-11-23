document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.getElementById("documentLightbox");
    const lightboxImg = lightbox.querySelector(".document-lightbox__img");
    const closeBtn = lightbox.querySelector(".document-lightbox__close");

    document.addEventListener("click", (e) => {
        const wrapper = e.target.closest(".documents-item");
        const img = wrapper?.querySelector(".documents-item__image");
        if (!img) return;
    
        lightboxImg.src = img.src;
        lightbox.classList.add("document-lightbox--open");
        document.body.style.overflow = "hidden";
    });

    // 2. Функция закрытия
    function closeLightbox() {
        lightbox.classList.remove("document-lightbox--open");
        lightboxImg.src = "";
        document.body.style.overflow = "";
    }

    // 3. Закрытие по кнопке X
    closeBtn.addEventListener("click", closeLightbox);

    // 4. Закрытие по клику вне изображения
    lightbox.addEventListener("click", (e) => {
        if (!e.target.closest(".document-lightbox__inner")) {
            closeLightbox();
        }
    });

    // 5. Закрытие по клавише ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeLightbox();
        }
    });

});
