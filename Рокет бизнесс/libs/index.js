/* Swiper */

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	slidesPerGroup: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction"
  }
});

/* Burger */

/*let burger = document.querySelector ('.burger');
let menu = document.querySelector ('.header__nav-up');
let menuLinks = document.querySelectorAll ('.nav__link-up');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    
    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

  menuLinks.forEach(function (el) {
    el.addEventListener ('click', function() {

      burger.classList.remove('burger--active');

      menu.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');
    })
  })*/

let burger = document.querySelector ('.burger');
let menuUp = document.querySelector ('.header__nav-up');
let menuLinksUp = document.querySelectorAll ('.nav__link-up');
let menuDown = document.querySelector ('.header__nav-down');
let menuLinksDown = document.querySelectorAll ('.nav__link-down');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    
    menuUp.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

  menuLinksUp.forEach(function (el) {
    el.addEventListener ('click', function() {

      burger.classList.remove('burger--active');

      menuUp.classList.remove('header__nav--active');

      document.body.classList.remove('stop-scroll');
    })
  }),

  burger.addEventListener('click',
  function () {
    menuDown.classList.toggle('header__nav--active');
  })

  menuLinksUp.forEach(function (el) {
    el.addEventListener ('click', function() {
      menuDown.classList.remove('header__nav--active');
    })
  })
