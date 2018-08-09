$(document).ready(function () {
  uncoverHero();
});

function uncoverHero() {
  setTimeout(() => $('.header').addClass('header--active'),
    500);
}
