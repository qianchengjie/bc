$(document).ready(function() {
	var count=0.1;
	// $("#body #content").find('#items').each(function(index, el) {
	// 	$(el).css('animation', 'up-in '+count+'s');
	// 	count+=0.1;
	// });
	$("#body #content").find('#items').each(function(index, el) {
		$(el).css('transform', 'translate(0px,0px)');
		$(el).css('transition-delay', count+"s");
		 count+=0.1;
	});
});
$("#body #content #items #img").mouseover(function(event) {
	/* Act on the event */
	$(this).find('#mask').css({
		'opacity': '1.0'
	});
});
$("#body #content #items #img").mouseout(function(event) {
	/* Act on the event */
	$(this).find('#mask').css({
		'opacity': '0'
	});
});