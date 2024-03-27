/**
 * Burger menu
 * @type {Element}
 */
let burger = document.querySelector('.burger');
let links = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function (){
  this.classList.toggle('burger__active');
  document.querySelector('.' + this.dataset.menu).classList.toggle('header__nav-active');
  document.body.classList.toggle('stop-scroll')
});

links.forEach(function(el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger__active');
    document.querySelector('.header__nav').classList.remove('header__nav-active');
    document.body.classList.remove('stop-scroll');
  });
});

/**
 * Search open/close
 * @type {Element}
 */
let btnSearch = document.querySelector('.btn-search');
let closeSearch = document.querySelectorAll('.close');

btnSearch.addEventListener('click', function (){
  if (!this.classList.contains('active')) {
    document.querySelector('.header__search-mob').classList.add('active');
    this.classList.add('active');
    document.querySelector('.header__nav').classList.remove('header__nav-active');
    if (burger.classList.contains('burger__active')) {
      burger.classList.remove('burger__active');
      document.body.classList.toggle('stop-scroll')
    }
  }
});

closeSearch.forEach((close) => {
  close.addEventListener('click', function (){
    btnSearch.classList.remove('active');
    document.querySelector('.header__search-mob').classList.remove('active');
  });
});

/**
 * Validation form
 * @type {JustValidate}
 */
const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Поле должно содержать минимум 3 символа',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Поле должно содержать максимум 30 символов',
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Email не действителен',
    },
  ])
  .addField(
    '#privacy',
    [
      {
        rule: 'required',
        errorMessage: 'Обязателен согласие на обработку',
      },
    ],
  )


/**
 * Scroll by link
 * @type {NodeListOf<Element>}
 */
let navLink = document.querySelectorAll('.nav__link-item');

navLink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let href = link.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    if (scrollTarget && document.querySelector('.burger__active')) {
      document.querySelector('.burger').click();
    }
    const topOffset = 0;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});

