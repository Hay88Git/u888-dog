var swiper = new Swiper(".slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    interval: 1000,
    grabCursor: true,
    pauseOnMouseEnter: true,
    pagination: {
        el: ".swiper-pagination",
    },
});

let OpenNav = function (icon) {
    let Nav = document.querySelector("nav");
    if (Nav.style.left == "0%") {
        Nav.style.left = "-100%"
        icon.classList.add("fa-bars")
        icon.classList.remove("fa-times")
    } else {
        Nav.style.left = "0%"
        icon.classList.add("fa-times")
        icon.classList.remove("fa-bars")
    }
}