$('.hamburger').click(function(){
	if ($(this).hasClass('is-active')){
		$(this).removeClass('is-active');
		$('.nav-overlay').css({"height":"0%"});

		for(var i = 1; i <= 5; i++){
			$('#n' + i).removeClass('fadeInUp').addClass('fadeOutUp');
		}
	} else {
		$(this).addClass('is-active');
		$('.nav-overlay').css({"height":"100%"});
		$('#n1').show().removeClass('fadeOutUp').addClass('fadeInUp');
		setTimeout(function(){
			$('#n2').show().removeClass('fadeOutUp').addClass('fadeInUp')}, 200
		);
		setTimeout(function(){
			$('#n3').show().removeClass('fadeOutUp').addClass('fadeInUp')}, 300
		);
		setTimeout(function(){
			$('#n4').show().removeClass('fadeOutUp').addClass('fadeInUp')}, 400
		);
		setTimeout(function(){
			$('#n5').show().removeClass('fadeOutUp').addClass('fadeInUp')}, 500
		);
		
	}	
});

$('.nav-overlay').click(function(event){
	if($(event.target).hasClass('nav-overlay')){
		$('.hamburger').removeClass('is-active');
		$('.nav-overlay').css({"height":"0%"});

		for(var i = 1; i <= 5; i++){
			$('#n' + i).removeClass('fadeInUp').addClass('fadeOutUp');
		}
	}
});

$('li a').click(function(){
	$('.hamburger').removeClass('is-active');
		$('.nav-overlay').css({"height":"0%"});

		for(var i = 1; i <= 5; i++){
			$('#n' + i).removeClass('fadeInUp').addClass('fadeOutUp');
		}
});