$(document).ready(function(){
    if($(document).width() >= 768){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        //if (window.location.hash != target){
          if ($(document).scrollTop() > $target.offset().top){
            $('html, body').stop().animate({
              'scrollTop': $target.offset().top - 35
            }, 900, 'swing', function () {
              //window.location.hash = target;
            });
          }
          else{
            $('html, body').stop().animate({
              'scrollTop': $target.offset().top - 35
            }, 900, 'swing', function () {
              //window.location.hash = target;
            });
          }
        //}

    });
}
});
