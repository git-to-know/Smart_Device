'use strict';
(function () {
  let element = document.querySelectorAll('input[type="tel"]');
  let maskOptions = {
    mask: '+{7}(000)000-00-00'
  };
  for (let i = 0; i < element.length; i++) {
    let mask = IMask(element[i], maskOptions);
  }
})();
