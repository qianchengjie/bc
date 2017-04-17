//鐐瑰嚮瀵艰埅鏍忓閮紝瀵艰埅鏍忚嚜鍔ㄦ姌鍙�
$(document).click(function () {
	if($('#navbar-collapse').hasClass('in')&&!$('.navbar').is(":hover")){
		$('.navbar-toggle').click();
	}
})