$(document).ready(function () {
  $("#header__menu-toggle").click(function () {
    $(".nav-menu").fadeToggle("fast");
  });

  $(".link-placeholder").click(function () {
    $(this).effect("shake", {distance: 10});
  });
});
