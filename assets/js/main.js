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

<<<<<<< HEAD
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
=======
>>>>>>> 248019bb3f7139836659a67589c2982aaaf825c9

    $('.form-group input').focus(function(e){
        $(e.target).parent().children('.animate-border').animate({
            height:'35px',
            width: '300px'
        },500)
        
    })

<<<<<<< HEAD
    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('#nav').click(function () {
        owl.trigger('next.owl.carousel');
=======
    $('.form-group input').focusout(function(){
        $('.animate-border').animate({
            height:'0px',
            width: '0px'
        },500)
>>>>>>> 248019bb3f7139836659a67589c2982aaaf825c9
    })

})