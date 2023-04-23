const mobile_nav= document.querySelector('.mobile_nav_btn');

const nav_header = document.querySelector('.header');
const  toggleNav = () => {
    nav_header.classList.toggle("active");
}

mobile_nav.addEventListener('click', () => toggleNav() );

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


