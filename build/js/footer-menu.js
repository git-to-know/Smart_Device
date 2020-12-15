'use strict';
(function () {
  if (footer) {

    var footerNavToggle = footer.querySelector('.footer__toggle--nav');
    var footerContactToggle = footer.querySelector('.footer__toggle--contact');
    var footerNavMenu = footer.querySelector('.footer__nav');
    var footerContactMenu = footer.querySelector('.footer__contact');
    var footer = document.querySelector('.footer');

    footer.classList.remove('footer--nojs');

    var NavToggleClickHandler = function (evt) {
      if (footerNavMenu.classList.contains('footer--menu-hide')) {
        footerNavMenu.classList.remove('footer--menu-hide');
        footerContactMenu.classList.add('footer--menu-hide');
      } else {
        footerNavMenu.classList.add('footer--menu-hide');
      }
      footerNavToggle.removeEventListener('click', NavToggleClickHandler);
      // footerNavToggle.addEventListener('click', NavToggleClickHandler);
    };
    footerNavToggle.addEventListener('click', NavToggleClickHandler);


    // footerNavToggle.addEventListener('click', function () {
    //   if (footerNavMenu.classList.contains('footer--menu-hide')) {
    //     footerNavMenu.classList.remove('footer--menu-hide');
    //     footerContactMenu.classList.add('footer--menu-hide');
    //   } else {
    //     footerNavMenu.classList.add('footer--menu-hide');
    //   }
    // });
    var ContactToggleClickHandler = function (evt) {
      if (footerContactMenu.classList.contains('footer--menu-hide')) {
        footerContactMenu.classList.remove('footer--menu-hide');
        footerNavMenu.classList.add('footer--menu-hide');
      } else {
        footerContactMenu.classList.add('footer--menu-hide');
      }
      footerContactToggle.removeEventListener('click', ContactToggleClickHandler);
      // footerContactToggle.addEventListener('click', ContactToggleClickHandler);
    };
    footerContactToggle.addEventListener('click', ContactToggleClickHandler);



    // footerContactToggle.addEventListener('click', function () {
    //   if (footerContactMenu.classList.contains('footer--menu-hide')) {
    //     footerContactMenu.classList.remove('footer--menu-hide');
    //     footerNavMenu.classList.add('footer--menu-hide');
    //   } else {
    //     footerContactMenu.classList.add('footer--menu-hide');
    //   }
    // });
  }
})();
