'use strict';
(function () {
  var link = document.querySelector(".popup-link");
  var popup = document.querySelector(".popup");
  var close = popup.querySelector(".popup__close-button");
  var overlay = popup.querySelector(".popup__overlay");

  // var form = popup.querySelector("popup-form");
  // var name = popup.querySelector("[name=name]");
  // var email = popup.querySelector("[name=email]");
  // var comment = popup.querySelector("[name=comment]");

  // var isStorageSupport = true;
  //   var storage = "";

  // try {
  //   storage = localStorage.getItem("name");
  // } catch (err) {
  //   isStorageSupport = false;
  // 	}
  var name = popup.getElementById('name');
  var tel = popup.getElementById('tel');
  var comment = popup.getElementById('user-text');


  localStorage.setItem('name', name.value);
  localStorage.setItem('tel', tel.value);
  localStorage.setItem('comment', comment.value);

  if (popup) {

  var openPopupClickHandler = function (evt) {
    if (!popup.classList.contains("popup--show")) {
      evt.preventDefault();
      popup.classList.add("popup--show");
      name.focus();
    }
    link.removeEventListener("click", openPopupClickHandler);
    // close.addEventListener('click', openPopupClickHandler);
  }
  link.addEventListener("click", openPopupClickHandler);

  var closePopupClickHandler = function (evt) {
    if (popup.classList.contains("popup--show")) {
      evt.preventDefault();
      popup.classList.remove("popup--show");
    }
    // close.removeEventListener("click", closePopupClickHandler);
    // link.addEventListener('click', closePopupClickHandler);
  }
  close.addEventListener("click", closePopupClickHandler);

  overlay.addEventListener("click", closePopupClickHandler);
  overlay.removeEventListener("click", closePopupClickHandler);

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      closePopupClickHandler();
    }
  });
}
})();
