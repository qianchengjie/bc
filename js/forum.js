$(document).ready(function(){

	$('.btn-comment').click(function(){
		var reply_frame_obj = $(this).parents('.word-container').find('.reply-frame');
		reply("楼主",reply_frame_obj);
	});

	$('.btn-reply').click(function(){
		var reply_frame_obj = $(this).parents('.word-container').find('.reply-frame');
		var str = $(this).parents('.reply-body').find(".reply-head h5").html();
		var name = str.substring(0,str.indexOf("<small>"));
		reply(name,reply_frame_obj);
	});

})

function reply(name,reply_frame_obj){
		$('.warp').find('.reply-frame').each(function(){
			if ($(this)!==reply_frame_obj) {
				if ($(this).css("display").indexOf('none')!=-1) {
					reply_frame_obj.slideDown(300);
				}
			}else{
				$(this).css('display','none');
			}
		});
		var t_obj = reply_frame_obj.find('textarea');
		t_obj.attr('placeholder',"回复"+name);
		var wh = $(window).height();
		var t = $(window).scrollTop();
		var tt = t_obj.offset().top;
		if (tt-t+200<wh) {
			t_obj.focus();
		}else{
	   		$('body,html').animate({'scrollTop':tt-wh/2},300,function(){
	   			t_obj.focus();
	   		})
   		}
}