$(document).ready(function () {
  $("#header__menu-toggle").click(function () {
    $(".nav-menu").fadeToggle("fast");
  });

  $("#header__logo").click(function() {
    $("#header__logo").effect("shake");
  });
});
