$(document).ready(function(){
	$("#myNav li").click(function(){
		$('#myNav li').removeClass('active');
		$(this).addClass('active');
	})
})