$(document).ready(function () {
  const $toggleButton = $("#header__menu-toggle");
  const $navMenu = $("#mobile-menu");

  $toggleButton.on("click", function () {
    const expanded = $toggleButton.attr("aria-expanded") === "true";

    $toggleButton.attr("aria-expanded", (!expanded).toString());
    $toggleButton.attr(
      "aria-label",
      expanded ? "Open main menu" : "Close main menu"
    );

    $navMenu.fadeToggle("fast");
  });

  $(".link-placeholder").click(function () {
    $(this).effect("shake", { distance: 10 });
  });
});

// TODO allow mobile menu to be closed by clicking outside of the menu element or on the hamburger menu
// $(document).mouseup((e) => {
//   var container = $(".nav-menu");
//   var hamburger = $("#header__menu-toggle");

// if ((!container.is(e.target) || !hamburger.is(e.target)) && container.has(e.target).length === 0) {
//   container.hide();
// }
// });
