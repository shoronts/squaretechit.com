 // Owl Carousel Active
 $('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// Owl Carousel End   


var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('#nav').click(function() {
   owl.trigger('next.owl.carousel');
})