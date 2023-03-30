/* Choises */

const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
  placeholder: false,
  itemSelectText: '',
  shouldSort: false,
  placeholderValue: '',
  duplicateItemsAllowed: false,
  RenderSelectedChoices: 'always',
});

/* Btn-choice-playlists*/

$('input[name="radio"]').click(function(){
	var target = $('#block-' + $(this).val());

	$('.block-text').not(target).hide(0);
	target.fadeIn(500);
});

/* Swiper - more */

const btnMore = document.querySelector('.podcast__btn-more');
const articlesItems = document.querySelectorAll('.podcast__item');

btnMore.addEventListener ('click', function () {
  articlesItems.forEach(function(el) { 
    el.classList.add('podcast__item--visible') 
  });
  
  btnMore.closest('.podcast__center').classList.add('podcast__center--hidden');
});

/* Btn-choice */

let tabsBtn = document.querySelectorAll('.accordion__bottom-btn');
let tabsItem = document.querySelectorAll('.guests__right-card');

tabsBtn.forEach (function (element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach (function(bnt) {
      bnt.classList.remove('accordion__bottom-btn--active')
    });
    e.currentTarget.classList.add('accordion__bottom-btn--active');

    tabsItem.forEach (function (element) {
      element.classList.remove('guests__right-card--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__right-card--active');
  });
})

/* Play - pause header*/

document.querySelectorAll('.btn-low__play').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.target.closest('.btn-low__play').classList.toggle('btn-low__play--toggle');
  })
});

document.querySelectorAll('.podcast__btn-play').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.target.closest('.podcast__btn-play').classList.toggle('podcast__btn-play--toggle');
  })
});

/* Accordion */

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false,
  openOnInit: [0],
    collapse: true
});
})

/* Accordion-header */

document.addEventListener("DOMContentLoaded", function() {
  let accordion = new Accordion('.accordion__header', {
  duration: 300,
  elementClass: 'accordion__header-title',
  triggerClass: 'accordion__header-top',
  panelClass: 'accordion__header-bottom',
  showMultiple: false,
  openOnInit: [1],
    collapse: true
});
})

/* Search-form */

document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

  const button = document.querySelector('.header__search-btn') // находим кнопку для открытия/закрытия окна навигации
  const nav = document.querySelector('.header__search-label') // находим окно навигации

  button.addEventListener('click', () => { // при клике на кнопку
    nav.classList.toggle('header__search-label--active') // открываем/закрываем окно навигации, добаляя/удаляя активный класс
  })

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.header__search-label') && !target.closest('.header__search-btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      nav.classList.remove('header__search-label--active') // то закрываем окно навигации, удаляя активный класс
    }
  })
})

/* Validate */

document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate(
    '.forms__container',
    {
      errorFieldCssClass: 'is-invalid',
      errorLabelStyle: {
        colorWrong: 'red',
      },
    })

    .addField('.forms__input-text', [{
      rule: 'required',
      errorMessage: "Ошибка",
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Нужно ввести больше одного символа"
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: "Должно быть меньше 500 символов"
    }
    ])

    .addField('.forms__input-name', [{
      rule: 'required',
      errorMessage: "Ошибка",
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Нужно ввести больше одного символа"
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: "Должно быть меньше 30 символов"
    }
    ])

    .addField('.forms__input-mail', [{
      rule: 'required',
      errorMessage: 'Ошибка',
    },
    {
      rule: 'email',
      errorMessage: 'Вы не корректно ввели email',
    }
    ])

    .addField('.aboutus__bottom-input', [{
      rule: 'required',
      errorMessage: 'Ошибка',
    }
    ])
})

/* Swiper */

const swiper = new Swiper('.swiper', {
	slidesPerView: 4,
	slidesPerGroup: 2,
	spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1850: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 2,
     },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

const swiperPrev = document.querySelector('.swiper-button-prev')
const swiperNext = document.querySelector('.swiper-button-next')

/* Swiper-playlists */

const swiperPlaylists = new Swiper('.swiper-playlists', {
	slidesPerView: 2,
	slidesPerGroup: 2,
	spaceBetween: 30,
  loop: true,
});

/* Login form */

function openForm() {
  document.getElementById("loginForm").style.display = "block";
}

function closeForm() {
  document.getElementById("loginForm").style.display = "none";
}

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
