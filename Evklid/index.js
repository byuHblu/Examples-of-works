const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  a11y: {
    prevSlideMessage: 'Следующий слайд',
    nextSlideMessage: 'Предыдущий слайд',
    paginationBulletMessage:'Перейти к слайду {{index}}'
  },
})


//----------------------------------------------------------

let tabsBtn = document.querySelectorAll('.list__btn');
let tabsItem = document.querySelectorAll('.ourwork__card');

tabsBtn.forEach (function (element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach (function(bnt) {
      bnt.classList.remove('list__btn--active')
    });
    e.currentTarget.classList.add('list__btn--active');

    tabsItem.forEach (function (element) {
      element.classList.remove('ourwork__card--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('ourwork__card--active');
  });
})

//----------------------------------------------------------

new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

//----------------------------------------------------------

let burger = document.querySelector ('.burger');
let menu = document.querySelector ('.header__nav');
let menuLinks = document.querySelectorAll ('.nav__link');

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
  })

//----------------------------------------------------------

document.querySelector(".form-btn__open").addEventListener("click", function() {
  document.querySelector(".form").classList.add("form__active");
  this.classList.add("active");
})
document.querySelector(".form-close").addEventListener("click", function() {
   let form = document.querySelector(".form");
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
});

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".form-container")) {
  form.classList.remove("form__active");
    form.querySelector("input").value = "";
    document.querySelector(".form-btn__open").classList.remove("active")
  }
})