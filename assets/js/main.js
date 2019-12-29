$(document).ready(function () {
    $('.service').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',
        function (e) {
            $('.single-service').addClass('service-popup');
        });

    $('.single-service').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',
        function (e) {
            $(this).addClass('visible');
        });

    //  $('.about-animation').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',
    //  function(e) {
    //      $(this).addClass('visible');
    //  });

    // Owl Carousel Active
    $('.owl-carousel').owlCarousel({
        loop: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // Owl Carousel End   


    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('#nav').click(function () {
        owl.trigger('next.owl.carousel');
    })
})