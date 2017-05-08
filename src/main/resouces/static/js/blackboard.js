$(document).ready(function() {

	$('.btn-comment').click(function() {
		var btn_obj = $(this);
		var rp_obj = $(this).parents('.floor-container').find('.reply-container');
		//回复框上拉
		if (rp_obj.css('display') == 'block') {
			rp_obj.css('display','none')
			btn_obj.attr('style', '')
		} else {
			
			if(btn_obj.siblings("input[type='hidden']").val()==-1){
				replyDropdown(btn_obj,rp_obj);
			}else{
				$.ajax({
					url : "/blackboard/viewreply",
					data : {floorId : btn_obj.siblings("input[type='hidden']").val()},
					dataType : "json",
					success : function(data){
						var replys_obj = eval(data);
						for( var i = 0; i < replys_obj.length; i++){
							var html = "<div class='reply'><div class='reply-head'><img class='head-sculpture' src='";
							var imgSrc = replys_obj[i].imgSrc;
							html += imgSrc+"'><span class='name'>"
							var username = replys_obj[i].username;
							html += username+"</span></div><div class='reply-body'><p>"
							var content = replys_obj[i].content;
							html += content+"</p></div><div class='reply-foot'><p>"
							var time = replys_obj[i].time;
							html += time+"</p></div></div>";
							rp_obj.find(".replys").append(html);
							
							replyDropdown(btn_obj,rp_obj);
						}
					}
				})
			}
		}
	})
	/**
	 * 回复框下拉
	 * @param btn_obj
	 * @param rp_obj
	 */
	function replyDropdown(btn_obj,rp_obj){
		btn_obj.css({
			borderTop: '1px solid #D8D8D8',
			borderLeft: '1px solid #D8D8D8',
			borderRight: '1px solid #D8D8D8',
			borderBottom: '0',
			backgroundColor: '#FFF',
			borderBottomLeftRadius: '0',
			borderBottomRightRadius: '0',
			paddingBottom: '7.5px'
		});
		rp_obj.css('display','block')
		$('body').animate({
			scrollTop: rp_obj.find('.reply-textarea').offset().top - $(window).height() / 2
		},300, function() {
			rp_obj.find('.reply-textarea').focus().focus();
		});
		btn_obj.siblings("input[type='hidden']").val(-1);
	}

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