$(function(){
    $(window).resize(function(){
      if (window.matchMedia("(min-width: 991px)").matches) {
        $('.menu-top-wrap').insertAfter($('.fidex-panel'));
        $('.site-content-wrap').append($('.site-content-left'));
      }
  
  
    if (window.matchMedia("(max-width: 990px)").matches) {
      $('.burger-wrap .burger-body').append($('.menu-top-wrap'));
      $('.burger-wrap .burger-body').append($('.site-content-left'));
    } else {
      $('#menu').append($('.menu-top-wrapper'));
      $('.menu-left-wrapper-wr').append($('.menu-left-wrapper'));
    }
    if (window.matchMedia("(max-width: 520px)").matches) {
    var FullWidth = $(window).width();
    $('.burger-body').css('width', FullWidth);
    } else {
    }
});
$(window).trigger('resize');
  
  
  function burg(){
    var burgerWr = $('.burger-wrap'),
      burgerBtn = $('.burger-btn'),
      burgerBody = $('.burger-body'),
      burgerCloseBtn = $('.burger-close-btn');
    
    burgerBtn.on('click', function(){
      $(burgerWr).addClass('opened');
    });
    
    burgerCloseBtn.on('click', function(){
      $(burgerWr).removeClass('opened');
    })
  }
  
  burg();
  
  
  $(document).on('click', function(e){
    if( $(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
    return
    
    $('.burger-wrap').removeClass('opened');
  });
  $('.tabss__block--title').on('click', function() {
    $(this).parent().toggleClass('opened');
  });
  $('.variable-width').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true
  }); 
  $('.sl').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
  asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 1,
      arrows: false,
      asNavFor: '.sl'
    });
  $('.s2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    loop: true,
    vertical: true,
    slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1101,
          settings: {
            vertical: false,
            slidesToShow: 2
          }
        }
      ]
  });
  $('.sl222').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false
    });
});
$(function() {
  // window.addEventListener("scroll", function(event){

  //   var top = this.pageYOffset;

  //   var layers = $(".parallax__layer");
  //   var speed, yPos;
  //   layers.each(function() {
  //     speed = $(this).attr('data-speed');
  //     var yPos = -(top * speed / 100);
  //     $(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
  //   });
  // });
  // window.addEventListener("scroll", function(event){

  //   var top2 = this.pageYOffset;

  //   var layers2 = $(".parallax__layer2");
  //   var speed2, yPos2;
  //   layers2.each(function() {
  //     speed2 = $(this).attr('data-speed2');
  //     var yPos2 = +(top2 * speed2 / 50);
  //     $(this).attr('style','transform: translate3d(' + yPos2 + 'px, 0px, 0px)');
  //   });
  // });
});
$(function(){
    $('.header__button').on('click', function(e){
      $('html,body').stop().animate({ scrollTop: $('.frm__in').offset().top }, 1000);
    });
});


// $(function(){

//         var tmenu = $('.header'),
//           tmenuOffset = tmenu.offset();
//         $(window).scroll(function(){
//           if (($(window).scrollTop() > tmenuOffset.top)) {
//             if (($(window).scrollTop() > tmenuOffset.top)) {
//               tmenu.addClass('fixed'); 
//             };
//           } else {
//             tmenu.removeClass('fixed');
//           };
//         }); 
//     });