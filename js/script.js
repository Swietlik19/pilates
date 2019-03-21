//= ../node_modules/jquery/dist/jquery.min.js
//= jquery.onscreen.min.js
//= owl.carousel.min.js
//= animate-header.js


$(document).ready(function() {

  /* Плавный переход к якорю */
  $(function(){
    $('a[href^="#"]').click(function(){
      var _href = $(this).attr('href');
      $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
      return false;
    });
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 5) {
      $('.nav').addClass('nav--scrolled');
    }
    else {
      $('.nav').removeClass('nav--scrolled');
    }
  });

  $("#scheduleList").owlCarousel({
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1400:{
            items:3
        }
    }
  });

  /* burger */
  $('#s-menu-burger').click(function(){
    $('.s-menu__list').removeClass('s-menu__list--invisible');
  });
  $('#s-menu-close').click(function(){
    smenuClose();
  });
  $('.s-menu__link').click(function(){
    smenuClose();
  });

  /* Плавная загрузка контента header после прогрузки самого хедера */
  headerAnimate();

  /* Плавная анимация контента при скролле */
  /* Переделать на реальные секции */
  $('section, footer').onScreen({
      doIn: function() {
        $(this).animate({
          top: 0,
          opacity: 1
        },800);
      },
      tolerance: 50
    });

  /* Вспомогательные функции */
  function smenuClose() {
    $('.s-menu__list').addClass('s-menu__list--invisible');
  }

});
