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

// about page carousel start

$('.partners-logo').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// about page carousel end

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('#nav').click(function() {
   owl.trigger('next.owl.carousel');
})