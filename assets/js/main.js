$(document).ready(function(){
    $('.service').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',
     function(e) {
         $('.single-service').addClass('service-popup');
     });

    $('.single-service').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',
     function(e) {
         $(this).addClass('visible');
     });

    // Owl Carousel Active
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })
    // Owl Carousel End   

})