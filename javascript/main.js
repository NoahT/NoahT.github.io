$(document).on("load", preloadCheckHero());

function uncoverHero() {
  setTimeout(() => $('.header').removeClass('header--disabled'),
    500);
}

function preloadCheckHero() {
  /*preload quickfix at https://stackoverflow.com/questions/5057990/how-can-i-check-if-a-background-image-is-loaded*/
  $('<img/>').attr('src', 'images/hero.jpg')
  .on('load', uncoverHero)
  .on('load', () => ($(this).remove()));
}


