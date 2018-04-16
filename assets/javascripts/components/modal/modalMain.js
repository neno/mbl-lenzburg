import CSSModal from 'css-modal';

export function modalMain() {
  CSSModal.init();

  let menucontainer = document.querySelector(".c-menu");
  let menuBtn = document.querySelector("#menuToggler");

  let delegate = function (criteria, listener) {
    return function (e) {
      let el = e.target;
      do {
        if (!criteria(el)) continue;
        e.delegateTarget = el;
        listener.apply(this, arguments);
        return;
      } while ((el = el.parentNode));
    };
  };

  // let buttonHandler = function(e) {
  //   let button = e.delegateTarget;
  //   if (location.hash === '#!' || location.hash === '') {
  //     window.location.hash = 'navMain';
  //   } else {
  //     window.location.hash = '#!';
  //   }
  // };

  let menuBtnHandler = function (e) {
    if (window.location.hash === '#!' || window.location.hash === '') {
      window.location.hash = 'navigation';
    } else {
      window.location.hash = '#!';
    }
  }

  let toggleBtn = function (e) {
    (menuBtn.classList.contains('is-active') === true) ? menuBtn.classList.remove('is-active') : menuBtn.classList.add('is-active');
  }

  // menucontainer.addEventListener(
  //   'click', delegate(buttonsFilter, buttonHandler)
  // );
  if (menuBtn) {
    menuBtn.addEventListener('click', menuBtnHandler);
  }

  document.addEventListener('cssmodal:show', function (e) {
    menuBtn.classList.add('is-active');
  })

  document.addEventListener('cssmodal:hide', function (e) {
    menuBtn.classList.remove('is-active');
  })
}
