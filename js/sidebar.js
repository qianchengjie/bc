$(document).ready(function(){

	$('.menu-btn').click(function(){
		$('.sidebar').sidebarToggle();
	});
	$('.container').click(function(){
		$('.sidebar').sidebarClose();
	})

})