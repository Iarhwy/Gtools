// HEADER-BURGER

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav__mobile");
let menuLinks = document.querySelectorAll(".nav__link");
let burgerClose = document.querySelector(".header__burger__svg");
let heroAnim = document.querySelector(".hero__right-wrapper");
let heroRight = document.querySelector(".hero__right");
let heroPopular = document.querySelector(".hero2__wrapper");


burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");
    menu.classList.toggle("header__nav--active");
    document.body.classList.toggle("stop-scroll");
    burgerClose.classList.toggle("burger--close");
  }
);

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");
    heroAnim.classList.toggle("hero__anim--disabled");
    heroRight.classList.toggle("hero__right--opacity");
    heroPopular.classList.toggle("hero2__wrapper--opacity");
  }
);

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");
    heroPopular.classList.toggle("hero2__wrapper--opacity");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");
    menu.classList.remove("header__nav--active");
    document.body.classList.remove("stop-scroll");
    burgerClose.classList.remove("burger--close");
  });
});

(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".burger-close");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }
 
})();