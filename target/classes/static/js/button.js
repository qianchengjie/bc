$("#content #item-box #box-right #text #button").mouseover(function(event) {
	/* Act on the event */
	$(this).css('width', '100px');
	$(this).find('#line-right').css({
		'border-width': '1px',
		'height': '50px'
	});
	$(this).find('#line-top').css({
		'border-width': '1px',
		'width': '100px'
	});
	$(this).find('#line-left').css({
		'border-width': '1px',
		'height': '50px'
	});
	$(this).find('#line-bottom').css({
		'border-width': '1px',
		'width': '100px'
	});
});
$("#content #item-box #box-right #text #button").mouseout(function(event) {
	/* Act on the event */
	$(this).css('width', '70px');
	$(this).find('#line-right').css({
		'border-width': '0px',
		'height': '0px'
	});
	$(this).find('#line-top').css({
		'border-width': '1px',
		'width': '50px'
	});
	$(this).find('#line-left').css({
		'border-width': '0px',
		'height': '0px'
	});
	$(this).find('#line-bottom').css({
		'border-width': '0px',
		'width': '0px'
	});
});
$(document).ready(function() {
	if(document.body.clientWidth<1100){
		$("#content #item-box #box-left").css('width', '100%');
		$("#content #item-box #box-right").css('width', '100%');
		$("#content #item-box #box-right").find('.hr1').attr('id', 'hr');
		$("#content #item-box #box-right").find('.hr2').attr('id', 'hr').css('float', 'right');
		$("#content #item-box #box-right #text").css({
			'margin-left': '190px',
			'text-align':'center'
		});
	}
	// 未完成
	// window.onresize=function(){
	// 	if(document.body.clientWidth>=1100){
	// 		$("#content #item-box #box-left").css('width', '50%');
	// 	$("#content #item-box #box-right").css('width', '50%');
	// 	$("#content #item-box #box-right #text").css({
	// 		'margin-left': '25px',
	// 		'text-align':'left'
	// 	});
	// 	}
	// 	if(document.body.clientWidth<1100){
	// 		$("#content #item-box #box-left").css('width', '100%');
	// 	$("#content #item-box #box-right").css('width', '100%');
	// 	$("#content #item-box #box-right").find('.hr1').attr('id', 'hr');
	// 	$("#content #item-box #box-right").find('.hr2').attr('id', 'hr').css('float', 'right');
	// 	$("#content #item-box #box-right #text").css({
	// 		'margin-left': '190px',
	// 		'text-align':'center'
	// 	});
	// 	}
	// }
});