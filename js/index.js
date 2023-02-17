const swiper = new Swiper(".swiper", {
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__wrapper")
        .removeClass("catalog__wrapper_active")
        .eq($(this).index())
        .addClass("catalog__wrapper_active");
    }
  );

  function toggle(classname) {
    $(classname).each(function (i) {
      $(this).on("click", function () {
        $(".catalog-item__wrapper")
          .eq(i)
          .toggleClass("catalog-item__wrapper_about");
      });
    });
  }

  toggle(".catalog-item__link");
  toggle(".catalog-item__linkback");

  $("[data-modal=consultation]").each(function () {
    $(this).on("click", function () {
      $(".overlay").fadeIn();
      $("#consultation").fadeIn();
    });
  });
  $("[data-modal=buy]").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      $("#order").fadeOut();
      $("#thanks").fadeIn();
    });
  });

  $("[data-modal=thanks]").on("click", function (e) {
    e.preventDefault();
    $(".overlay").fadeIn();
    $("#thanks").fadeIn();
  });

  $("[data-modal=thanks2]").on("click", function (e) {
    e.preventDefault();
    $("#consultation").fadeOut();
    $("#thanks").fadeIn();
  });

  $(".button_catalog").each(function (i) {
    $(this).on("click", function () {
      $(".overlay").fadeIn();
      $("#order .modal__subheader").text(
        $(".catalog-item__subtitle").eq(i).text()
      );
      $("#order").fadeIn();
    });
  });

  $(".modal__close").on("click", function () {
    $(".overlay").fadeOut();
    $("#consultation").fadeOut();
    $("#order").fadeOut();
    $("#thanks").fadeOut();
  });
});
