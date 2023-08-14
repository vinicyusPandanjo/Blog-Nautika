const Methods = {
  init() {
    Methods.openMenu();
    Methods.closeMenu();
  },
  openMenu() {
    $(".menu-hamburger").click(function () {
      $(".menu-mobile").toggleClass("active");
      $("body").toggleClass("active-mobile");
    });
  },

  closeMenu() {
    $(".close-menu").click(function () {
      $(".menu-mobile").toggleClass("active");
      $("body").toggleClass("active-mobile");
    });
  },
};

export default {
  init: Methods.init,
};
