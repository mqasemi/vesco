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
    $('.owl-carousel').owlCarousel({
         items :3,
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplay: true,
       dotsEach:true,
        center:true
    });
});