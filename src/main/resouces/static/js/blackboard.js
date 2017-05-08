$(document).ready(function() {

	$('.btn-comment').click(function() {
		var btn_obj = $(this);
		var rp_obj = $(this).parents('.floor-container').find('.reply-container');
		//回复框上拉
		if (rp_obj.css('display') == 'block') {
			rp_obj.css('display','none')
			btn_obj.attr('style', '')
			//回复框下拉
		} else {
			btn_obj.css({
				borderTop: '1px solid #D8D8D8',
				borderLeft: '1px solid #D8D8D8',
				borderRight: '1px solid #D8D8D8',
				borderBottom: '0',
				backgroundColor: '#FFF',
				borderBottomLeftRadius: '0',
				borderBottomRightRadius: '0',
				paddingBottom: '7.5px'
			})
			rp_obj.css('display','block')
			$('body').animate({
				scrollTop: rp_obj.find('.reply-textarea').offset().top - $(window).height() / 2
			},300, function() {
				rp_obj.find('.reply-textarea').focus().focus();
			})

		}
	})

	var timer;
	$('img.expression,.expression-panel').bind({
		'mouseenter':function(){
			clearTimeout(timer)
			$(this).parent('.reply-frame-foot').find('.expression-panel').show();
		},
		'mouseleave':function(){
			clearTimeout(timer)
			var exprP_obj = $(this).parent('.reply-frame-foot').find('.expression-panel');
			timer = setTimeout(function(){
				exprP_obj.hide();
			},100)
		},
	})
	$('.main').click(function(){
	})
	$('.expression-panel img').click(function(){
		var ta_obj = $(this).parents('.reply-frame').find('.reply-textarea');
		var expr_src = $(this).attr('src');
		ta_obj.html(ta_obj.html()+"<img src='"+expr_src+"'>")
	})

})