$(function () {
  var setElm = $('.loopSlider'),
    setElmR = $('.loopSliderR'),
    slideSpeed = 2000;

  setElm.each(function () {
    var self = $(this),
      selfWidth = self.innerWidth(),
      findUl = self.find('.ulLeft'),
      findLi = findUl.find('.liLeft'),
      listWidth = findLi.outerWidth(),
      listCount = findLi.length,
      loopWidth = listWidth * listCount;

    findUl.wrapAll('<div class="loopSliderWrap" />');
    var selfWrap = self.find('.loopSliderWrap');

    if (loopWidth > selfWidth) {
      //左方向
      findUl.css({
        width: loopWidth
      }).clone().appendTo(selfWrap);
      selfWrap.css({
        width: loopWidth * 2
      });

      function loopLeft() {
        //マイナスで左方向、プラスで右方向
        selfWrap.animate({
          left: '-' + (loopWidth) + 'px'
        }, slideSpeed * listCount, 'linear', function () {
          selfWrap.css({
            left: '0'
          });
          loopLeft();
        });
      }
      loopLeft();

      setElm.hover(function () {
        selfWrap.pause();
      }, function () {
        selfWrap.resume();
      });
    }
  });

  //右方向へ流れる
  setElmR.each(function () {
    var self = $(this),
      selfWidth = self.innerWidth(),
      findUlR = self.find('.ulRight'),
      findLiR = findUlR.find('.liRight'),
      listWidth = findLiR.outerWidth(),
      listCount = findLiR.length,
      loopWidth = listWidth * listCount;

    findUlR.wrapAll('<div class="loopSliderWrap_r" />');
    var selfWrapR = self.find('.loopSliderWrap_r');

    if (loopWidth > selfWidth) {
      //右方向
      findUlR.css({
        width: loopWidth
      }).clone().appendTo(selfWrapR);
      selfWrapR.css({
        width: loopWidth * 2
      });

      function loopRight() {
        //マイナスで左方向、プラスで右方向
        selfWrapR.animate({
          left: '+' + (loopWidth) + 'px'
        }, slideSpeed * listCount, 'linear', function () {
          selfWrapR.css({
            left: '0'
          });
          loopRight();
        });
      }
      loopRight();

      setElmR.hover(function () {
        selfWrapR.pause();
      }, function () {
        selfWrapR.resume();
      });
    }
  });

});

// スライダーライブラリ Swiper.js
var init = function () {
  new Swiper('.swiper-container-l', {
    direction: 'horizontal',
    autoplay: {
      reverseDirection: false,
      delay: 0,
    },
    loop: true,
    speed: 3000,
  }),
  new Swiper('.swiper-container-r', {
    direction: 'horizontal',
    autoplay: {
      reverseDirection: true,
      delay: 0,
    },
    loop: true,
    speed: 3000,
  });
}

document.addEventListener('DOMContentLoaded', init);