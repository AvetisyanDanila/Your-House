// Плавная прокрутка
$("body").on('click', '[href*="#"]', function (e) {
    var fixed_offset = 140;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});
// Появление хедера при скролле
if (document.documentElement.clientWidth > 768) {
    window.onscroll = function showHeader() {

        var header = document.querySelector('.header-top');

        if (window.pageYOffset > 200) {
            header.classList.add('header-fixed')
        }
        else {
            header.classList.remove('header-fixed')
        }

    }
}
// Слайдер
var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 150,
    loop: true,
    navigation: {
        nextEl: '.build__block-next',
        prevEl: '.build__block-prev',
    },
    simulateTouch: false
});
var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
    },
    simulateTouch: false
});
var swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 70,
    navigation: {
        prevEl: '.examples__block-arrow-prev',
        nextEl: '.examples__block-arrow-next',
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        }
    },
    loop: true,
    simulateTouch: false,
});
// Блок с вопросами
var acc = document.getElementsByClassName("questions__block__btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
// Модальное окно "Заказать звонок"
var button = document.querySelector('#callback');
var mobilebutton = document.querySelector('#callback-mobile');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function () {
    modal.classList.add('d-flex');
});
mobilebutton.addEventListener('click', function () {
    modal.classList.add('d-flex');
});
close.addEventListener('click', function () {
    modal.classList.remove('d-flex');
});
// Меню для телефонов
var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header-top__nav');
menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-top__nav-active');
})