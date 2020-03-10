$(function(){
     new WOW().init();
});

$(document).ready(function() {
  $('.works-container').magnificPopup({delegate: 'a',type:'image', gallery: {
    // options for gallery
    enabled: true
  }});
});