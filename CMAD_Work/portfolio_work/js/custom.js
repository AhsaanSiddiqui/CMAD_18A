// Script for sticky header OR add class on 1st scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});


// Active Header Status & Smooth Scroll on click
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  // $('a[href^="#"]').on('click', function (e) {
  //   e.preventDefault();
  //   $(document).off("scroll");

  //   $('a').each(function () {
  //     $(this).removeClass('active');
  //   })
  //   $(this).addClass('active');

  //   var target = this.hash;
  //   $target = $(target);
  //   $('html, body').stop().animate({
  //     'scrollTop': $target.offset().top+2
  //   }, 500, 'swing', function () {
  //     window.location.hash = target;
  //     $(document).on("scroll", onScroll);
  //   });
  // });
  });

  function onScroll(event){
  var scrollPosition = $(document).scrollTop();
  $('ul.section-nav li a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
      $('ul.section-nav li a').removeClass("active");
      currentLink.addClass("active");
    }
    else{
      currentLink.removeClass("active");
    }
  });
}


// Page RoleBack to Top
// $(document).ready(function(){
//   $("a").on('click', function(event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function(){
//         window.location.hash = hash;
//       });
//     }
//   });
// });
//Use This
$(document).ready(function(){
    $('.roleback').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});


// Text Animation Script
$(function () {
  $('.flash').textillate({ in: { effect: 'flash' } });
  $('.bounce').textillate({ in: { effect: 'bounce' } });
  $('.shake').textillate({ in: { effect: 'shake' } });
  $('.tada').textillate({ in: { effect: 'tada' } });
  $('.swing').textillate({ in: { effect: 'swing' } });
  $('.wobble').textillate({ in: { effect: 'wobble' } });
  $('.pulse').textillate({ in: { effect: 'pulse' } });
  $('.flip').textillate({ in: { effect: 'flip' } });
  $('.flipInX').textillate({ in: { effect: 'flipInX' } });
  $('.flipInY').textillate({ in: { effect: 'flipInY' } });
  $('.fadeIn').textillate({ in: { effect: 'fadeIn' } });
  $('.fadeInUp').textillate({ in: { effect: 'fadeInUp' } });
  $('.fadeInDown').textillate({ in: { effect: 'fadeInDown' } });
  $('.fadeInLeft').textillate({ in: { effect: 'fadeInLeft' } });
  $('.fadeInRight').textillate({ in: { effect: 'fadeInRight' } });
  $('.fadeInUpBig').textillate({ in: { effect: 'fadeInUpBig' } });
  $('.fadeInDownBig').textillate({ in: { effect: 'fadeInDownBig' } });
  $('.fadeInLeftBig').textillate({ in: { effect: 'fadeInLeftBig' } });
  $('.fadeInRightBig').textillate({ in: { effect: 'fadeInRightBig' } });
  $('.bounceIn').textillate({ in: { effect: 'bounceIn' } });
  $('.bounceInDown').textillate({ in: { effect: 'bounceInDown' } });
  $('.bounceInUp').textillate({ in: { effect: 'bounceInUp' } });
  $('.bounceInLeft').textillate({ in: { effect: 'bounceInLeft' } });
  $('.bounceInRight').textillate({ in: { effect: 'bounceInRight' } });
  $('.rotateIn').textillate({ in: { effect: 'rotateIn' } });
  $('.rotateInDownLeft').textillate({ in: { effect: 'rotateInDownLeft' } });
  $('.rotateInDownRight').textillate({ in: { effect: 'rotateInDownRight' } });
  $('.rotateInUpLeft').textillate({ in: { effect: 'rotateInUpLeft' } });
  $('.rotateInUpRight').textillate({ in: { effect: 'rotateInUpRight' } });
  $('.rollIn').textillate({ in: { effect: 'rollIn' } });
});