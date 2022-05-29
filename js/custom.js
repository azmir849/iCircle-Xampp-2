$(function(){
// window scroll
$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.header').addClass('newclass');
  } else {
     $('.header').removeClass('newclass');
  }
});
    // Back to Top 
    var btn = $('.backtotop');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
// venubox 
$(document).ready(function(){
  $('.venobox').venobox(); 
});
// mixit up

// slider
$('.testimonial_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll:1,
  arrows:true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1700,
  speed: 1200,
  prevArrow:'<i class="fa-solid fa-arrow-left prev"></i>',
  nextArrow:'<i class="fa-solid fa-arrow-right next"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '5px',
        slidesToShow:1
      }
    }
  ]
});
// wow

new WOW().init();

});