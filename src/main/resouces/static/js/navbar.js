//点击导航栏外部，导航栏自动折叠
$(document).click(function () {
	if($('#navbar-collapse').hasClass('in')&&!$('.navbar').is(":hover")){
		$('.navbar-toggle').click();
	}
})