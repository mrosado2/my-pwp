$(document).ready(function(){
	var scroll_start = 0;
	var startchange = $('.nav');
	var offset = startchange.offset();
	$(document).scroll(function() {
		scroll_start = $(this).scrollTop();
		if(scroll_start > offset.top) {
			$('.nav-scroll').css('background-color', 'rgba(34,34,34,0.9)');
		} else {
			$('.nav-scroll').css('background-color', 'transparent');
		}
	});
});