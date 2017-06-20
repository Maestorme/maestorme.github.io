if($(window).width() <= 768){
// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);



}

else{


if($('.nav').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
}



//Make navbar black on scrolling (big screens)
function checkScroll(){
    var startY = $('.nav').height() * 10; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.nav').addClass("scrolled");
    }else{
        $('.nav').removeClass("scrolled");
    }
}

function hasScrolled() {
    
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        //$('.nav').removeClass('nav-down').addClass('nav-up');
        $('.nav').css({'top':'-4rem'});
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            //$('.nav').removeClass('nav-up').addClass('nav-down');
            $('.nav').css({'top':'0'});
        }
    }
    
    lastScrollTop = st;

}