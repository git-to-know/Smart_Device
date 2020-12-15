'use strict';
(function () {
  var link = document.querySelector(".popup-link");
  var popup = document.querySelector(".popup");
  var close = popup.querySelector(".popup__close-button");
  var overlay = popup.querySelector(".popup__overlay");

  var name = popup.querySelector("[name=name]");
  var tel = popup.querySelector("[name=phone-number]");
  var comment = popup.querySelector("[name=comment]");

  localStorage.setItem('name', name.value);
  localStorage.setItem('phone-number', tel.value);
  localStorage.setItem('comment', comment.value);

  if (popup) {

    var openPopupClickHandler = function (evt) {
      if (!popup.classList.contains("popup--show")) {
        evt.preventDefault();
        popup.classList.add("popup--show");
        name.focus();
      }
      link.removeEventListener("click", openPopupClickHandler);
      close.addEventListener('click', closePopupClickHandler);
    }
    link.addEventListener("click", openPopupClickHandler);

    var closePopupClickHandler = function (evt) {
      if (popup.classList.contains("popup--show")) {
        // evt.preventDefault();
        popup.classList.remove("popup--show");
      }
      close.removeEventListener("click", closePopupClickHandler);
      link.addEventListener('click', openPopupClickHandler);
    }
    close.addEventListener("click", closePopupClickHandler);

    overlay.addEventListener("click", closePopupClickHandler);
    overlay.removeEventListener("click", closePopupClickHandler());


    var escClickHandler = function (evt) {
      if (evt.key === 27) {
        evt.preventDefault();
        closePopupClickHandler();
        document.removeEventListener('keydown', escClickHandler);
      }
    };

    document.addEventListener('keydown', escClickHandler);
  }
})();
