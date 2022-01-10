window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.menu-burger__header').addEventListener('click', function(){
    document.querySelector('.menu-burger__header').classList.toggle('open-menu');
    document.querySelector('.header__nav').classList.toggle('open-menu');
    document.querySelector('.menu').classList.toggle('is-active');
    document.querySelector('body').classList.add('fixed-page');
  });
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // пагинация

    // навигация
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
          },
    mousewheel: {
      sensitivity: 1,
    },
    autoplay: {
      delay: 4000,
      speed: 2000,
    },

  });
  document.querySelectorAll('.tabs-nav__btn').forEach( function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;
      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
        btn.classList.remove('tabs-nav__btn--active')});
      e.currentTarget.classList.add('tabs-nav__btn--active');
      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
        tabsBtn.classList.remove('tabs-item--active')});
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
  });
});
