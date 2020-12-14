'use strict';
(function () {
//   var element = document.querySelectorAll('input[name="phone-number"]');
//   var maskOptions = {
//     mask: '+{7}(000)000-00-00'
//   };
//   var mask = IMask(element, maskOptions);
//

document.querySelectorAll('.form__tel').forEach((e) => {
  const phoneMask = IMask( e, { mask: '+{7}(000)000-00-00' })
})
})();
