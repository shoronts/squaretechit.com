$(document).ready(function(){
    $('.service').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',
     function(e) {
         $('.single-service').addClass('service-popup');
     });

    $('.single-service').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',
     function(e) {
         $(this).addClass('visible');
     });

    //  $('.about-animation').one('webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend',
    //  function(e) {
    //      $(this).addClass('visible');
    //  });


    $('.form-group input').focus(function(e){
        $(e.target).parent().children('.animate-border').animate({
            height:'35px',
            width: '300px'
        },500)
        
    })

    $('.form-group input').focusout(function(){
        $('.animate-border').animate({
            height:'0px',
            width: '0px'
        },500)
    })

})