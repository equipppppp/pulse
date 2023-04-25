const swiper = new Swiper(".swiper", {
  speed: 1000,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function () {
  $("ul.tabs").on("click", "li:not(.tab_active)", function () {
    $(this)
      .addClass("tab_active")
      .siblings()
      .removeClass("tab_active")
      .closest("div.container")
      .find("div.catalog")
      .removeClass("catalog_active")
      .eq($(this).index())
      .addClass("catalog_active");
  });

  function toggle(dataType) {
    $(dataType).each(function (i) {
      $(this).on("click", function () {
        $(".catalog__wrapper").eq(i).toggleClass("transformed");
      });
    });
  }

  toggle("[data-link=about]");
  toggle("[data-link=back]");

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

  $("[data-modal=order]").on("click", function (e) {
    e.preventDefault();
    $("#consultation").fadeOut();
    $("#thanks").fadeIn();
  });

  $(".button_catalog").each(function (i) {
    $(this).on("click", function () {
      $(".overlay").fadeIn();
      $("#order .modal__subheader").text($(".catalog__name").eq(i).text());
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
