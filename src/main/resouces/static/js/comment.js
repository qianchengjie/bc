$(".comment-bar").click(function(event) {
	/* Act on the event */
	$(".comment-box").slideToggle();
	$("#tip-box").children('#tip').first().attr('id', 'tip-out');
});