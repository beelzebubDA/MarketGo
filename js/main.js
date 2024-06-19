document.addEventListener("DOMContentLoaded", function() {
  let popup1Dom = document.getElementById("popup1");
  let popup2Dom = document.getElementById("popup2");
  let popupWrapperDom = document.querySelector(".popup__wrapper");
  var query = window.location.search.substring(1);
  if (query === "send1") {
    popupWrapperDom.style.display = "flex";
    popup1Dom.style.display = "block";
    let closePopup1 = document.querySelector('#popup1>.close');
    closePopup1.addEventListener("click", function() {
      popupWrapperDom.style.display = "none";
      popup1Dom.style.display = "none";
      history.pushState('', '', 'https://marketgo.agency/'); // !Если появятся дополнительные параметры поиска, то нужно изменить эту строку!
    });
  } else if (query === "send2") {
    popupWrapperDom.style.display = "flex";
    popup2Dom.style.display = "block";
    let closePopup2 = document.querySelector('#popup2>.close');
    closePopup2.addEventListener("click", function() {
      popupWrapperDom.style.display = "none";
      popup2Dom.style.display = "none";
      history.pushState('', '', 'https://marketgo.agency/'); // !Если появятся дополнительные параметры поиска, то нужно изменить эту строку!
    });
  }

})

$(function() {
  $(window).resize(function() {
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
    } else {}
  });

  $(window).trigger('resize');


  function burg() {
    var burgerWr = $('.burger-wrap'),
      burgerBtn = $('.burger-btn'),
      burgerBody = $('.burger-body'),
      burgerCloseBtn = $('.burger-close-btn');

    burgerBtn.on('click', function() {
      $(burgerWr).addClass('opened');
    });

    burgerCloseBtn.on('click', function() {
      $(burgerWr).removeClass('opened');
    })
  }

  //burg();

  //menu
  $(function() {
    $('.burger').click(function(evt) {
      evt.stopPropagation(); //stops the document click action
      $('body').toggleClass('menu--open');
    });
    $(document).click(function() {
      $('body').removeClass('menu--open'); //make all inactive
    });
  });



  $(document).on('click', function(e) {
    if ($(e.target).closest('.burger-btn').length || $(e.target).closest('.burger-body').length)
      return

    $('.burger-wrap').removeClass('opened');
  });


  $('.tabss__block--title').on('click', function() {
    $(this).parent().toggleClass('opened');
  });



  $('.variable-width').slick({
    dots: false,
    //infinite: false,
    waitForAnimate: false,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    prevArrow: $('#arrows.prev'),
    nextArrow: $('#arrows.next'),
  });





  /**
   * FIX JUMPING ANIMATION
   * Set special animation class on first or last clone.
   */
  // $('.variable-width').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  //   var
  //       direction,
  //       slideCountZeroBased = slick.slideCount - 1;

  //   if (nextSlide == currentSlide) {
  //       direction = "same";

  //   } else if (Math.abs(nextSlide - currentSlide) == 1) {
  //       direction = (nextSlide - currentSlide > 0) ? "right" : "left";

  //   } else {
  //       direction = (nextSlide - currentSlide > 0) ? "left" : "right";
  //   }

  //   // Add a temp CSS class for the slide animation (.slick-current-clone-animate)
  //   if (direction == 'right') {
  //       $('.slick-cloned[data-slick-index="' + (nextSlide + slideCountZeroBased + 1) + '"]',   $('.variable-width')).addClass('slick-current-clone-animate');
  //   }

  //   if (direction == 'left') {
  //       $('.slick-cloned[data-slick-index="' + (nextSlide - slideCountZeroBased - 1) + '"]',   $('.variable-width')).addClass('slick-current-clone-animate');
  //   }
  // });

  // $('.variable-width').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   $('.slick-current-clone-animate', $carousel).removeClass('slick-current-clone-animate');
  //   $('.slick-current-clone-animate', $carousel).removeClass('slick-current-clone-animate');
  // });



  $('.sl').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    waitForAnimate: false,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.sl',
    waitForAnimate: false,
  });
  $('.s2').slick({
    dots: false,
    infinite: true,
    speed: 300,
    loop: true,
    vertical: true,
    waitForAnimate: false,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 1101,
      settings: {
        vertical: false,
        slidesToShow: 2
      }
    }]
  });
  $('.sl222').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: false,
    waitForAnimate: false,
  });







});

// $(function() {
//   // window.addEventListener("scroll", function(event){

//   //   var top = this.pageYOffset;

//   //   var layers = $(".parallax__layer");
//   //   var speed, yPos;
//   //   layers.each(function() {
//   //     speed = $(this).attr('data-speed');
//   //     var yPos = -(top * speed / 100);
//   //     $(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
//   //   });
//   // });
//   // window.addEventListener("scroll", function(event){

//   //   var top2 = this.pageYOffset;

//   //   var layers2 = $(".parallax__layer2");
//   //   var speed2, yPos2;
//   //   layers2.each(function() {
//   //     speed2 = $(this).attr('data-speed2');
//   //     var yPos2 = +(top2 * speed2 / 50);
//   //     $(this).attr('style','transform: translate3d(' + yPos2 + 'px, 0px, 0px)');
//   //   });
//   // });



// });


$(function() {
  $('.header__button').on('click', function(e) {
    $('html,body').stop().animate({
      scrollTop: $('.frm__in').offset().top
    }, 1000);
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


// coockies javascript

let coockiesExitbtn = document.querySelector(".cockiesExitImg");

function checkCookies(){
    let cookieDate = localStorage.getItem('cookieDate');
    let cookieNotification = document.getElementById('coockies_notice');
    let cookieBtn = document.querySelector('.cookies_acceptBtn');
    let coockiesExitbtn = document.querySelector(".cockiesExitImg");

    // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
    if( !cookieDate || (+cookieDate + 31536000000) < Date.now() ){
        cookieNotification.classList.add('showcoockies');
    }

    // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
    cookieBtn.addEventListener('click', function(){
        localStorage.setItem( 'cookieDate', Date.now() );
        cookieNotification.classList.remove('showcoockies');
    })

    coockiesExitbtn.onclick = function(){
        cookieNotification.classList.remove('showcoockies');
    }
}
checkCookies();

// pop up javascript

let popupMenu = document.querySelector('.popup_notification');
let popupAcceptBtn = document.querySelector(".popup_Acceptbtn");
let exitBtn = document.querySelector(".closepopup");

// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
let marketgo = getCookie("marketgo");
console.log(marketgo)
if (marketgo != "yes") {
    let flag = true;
    $(document).mouseleave(function(e){
        if (e.clientY < 10 && flag) {
            $(".popup_notification").addClass("visible");
            flag = false;
            // записываем cookie на 1 день, с которой мы не показываем окно
            let date = new Date;
            date.setDate(date.getHours() + 1);  // чтобы менять сколько дней не будет видно всплывающее окно
            document.cookie = "marketgo=yes; path=/; expires=" + date.toUTCString();
        }
    }); 
}

// Сброс куки
// let date = new Date;
// date.setDate(date.getDate() - 1);  // чтобы менять сколько дней не будет видно всплывающее окно
// document.cookie = "marketgo=yes; path=/; expires=" + date.toUTCString();


exitBtn.onclick = function () {
    popupMenu.classList.remove('visible');
};
popupAcceptBtn.onclick = function () {
    popupMenu.classList.remove('visible');
};