$(function () {
    new WOW().init();
});

$(document).ready(function () {
    $('.works-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            // options for gallery
            enabled: true
        }
    });
});

$(document).ready(function () {
    $('.teams').owlCarousel({
         items :3,
        loop: true,
        margin: 20,
        autoplay: true
    });
});

$(document).ready(function () {
    $('.testimonail-items').owlCarousel({
          items :1,
        loop: true,
        autoplay: true
    });
});