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
        loop: true,
        margin: 20,
        autoplay: true,
        responsiveClass:true
        ,responsive:{
        0:{
            items:1,
            nav:true
        },
        576:{
            items:3,
            nav:false
        },
        767:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
});

$(document).ready(function () {
    $('.testimonail-items').owlCarousel({
          items :1,
        loop: true,
        
    });
});

$(function () {
   
$('.counter').counterUp({delay: 10,
    time: 2000});
    
});


$(document).ready(function () {
    $('.clients').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true
        ,responsiveClass:true
        ,responsive:{
        0:{
            items:1,
            nav:true
        },
        576:{
            items:3,
            nav:false
        },
        767:{
            items:4,
            nav:true,
            loop:false
        }
    }
    });
});



$(function(){
    
    $(window).scroll(function(){
        if($(this).scrollTop()<50){
        $('nav').removeClass('navbar-content-back');
            $('#back-to-top').fadeOut();
    }else{
        $('nav').addClass('navbar-content-back');
        $('#back-to-top').fadeIn();
    }
    });
    
});

$(function(){
   $('a.smooth-scroll').click(function(event){
       event.preventDefault();
       var section=$(this).attr('href');
       
       $('html , body').animate({
           scrollTop:$(section).offset().top-56
       },1250,"easeInOutExpo");
   });
});




$(function(){
    $('.nav-link').on("click touch",function(){
        $('.navbar-toggler').click();
    });
});