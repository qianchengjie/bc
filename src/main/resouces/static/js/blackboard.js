$(document).ready(function() {
	
	//获得页数
	/*$.ajax({
		url : "/blackboard/getpagesum",
		method : "GET",
		dateType : 'json',
		success : function(pageSum){
			pageSum++;
			var html = "";
			for( var i = 1; i <= pageSum; i++){
				if( i == 1)
					html += "<li class='active'><a href='blackboard?pageNum=";
				else
					html += "<li><a href='blackboard?pageNum=";
				html += i+"'>"+i+"</a></li>"
			}
			$('.pagination').find("li:first-child").after(html);
		}
	});*/
	
	$(function () {
        var editor = new wangEditor('leave-message');

        // 自定义菜单
        editor.config.menus = [
            'bold',
            'underline',
            'italic',
            'strikethrough',
            'emotion',
            '|',
            'forecolor',
            'bgcolor',
            'eraser',
            '|',
            'quote',
            'fontfamily',
            'fontsize',
            'head',
            'orderlist',
            'unorderlist',
            '|',
            'alignleft',
            'aligncenter',
            'alignright',
            '|',
            'fullscreen',
        ];
        editor.config.menuFixed = false;
        editor.create();
        $('#leave-message').html('');

		var editor1 = new wangEditor('reply-textarea');

        // 自定义菜单
        editor1.config.menus = [
            'emotion'
        ];
        editor1.config.menuFixed = false;
        editor1.create();
    });

	$('#leave-message-btn').click(function() {
		var content = $('#leave-message').html();
		var username = $('#username').val();
		if(content == '')
			alert('请输入回复内容');
		else
			$.ajax({
				url : 'blackboard/leaveMessage',
				method : 'post',
				data : {username: username, content: content},
				success : function(msg){
					if(msg == '留言成功')
						location.reload();
					else
						alert('服务器错误');
				}
			})
	})
	
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
					url : "blackboard/viewReply",
					method : 'GET',
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
						}
						replyDropdown(btn_obj,rp_obj);
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

	$('.btn-reply').click(function(){
		var obj = $(this).parents('.reply-container');
		var floorId = $(this).next().val();
		var username = $('#username').val();
		var content = $('#reply-textarea').html();
		if(content == ""){
			alert('请输入内容')
		}else{
			$.ajax({
				url : 'blackboard/reply',
				method : 'post',
				data : {username : username, content : content,floorId : floorId},
				success : function(msg){
					if(msg != '回复成功'){
						alert('服务器错误！')
					}else{
						$('.reply-frame-head').show();
						$('.reply-frame-foot').hide();
						$('#reply-textarea').html('');
						$('#reply-textarea-content').hide();
						$.ajax({
							url : "blackboard/viewReply",
							method : 'GET',
							data : {floorId : floorId},
							dataType : "json",
							success : function(data){
								var replys_obj = eval(data);
								for( var i = replys_obj.length-1; i < replys_obj.length; i++){
									var html = "<div class='reply'><div class='reply-head'><img class='head-sculpture' src='";
									var imgSrc = replys_obj[i].imgSrc;
									html += imgSrc+"'><span class='name'>"
									var username = replys_obj[i].username;
									html += username+"</span></div><div class='reply-body'><p>"
									var content = replys_obj[i].content;
									html += content+"</p></div><div class='reply-foot'><p>"
									var time = replys_obj[i].time;
									html += time+"</p></div></div>";
									obj.find(".replys").append(html);
								}
							}
						})
					}
				}
			})
			var rc_obj = $(this).parents('.floor-container').find('.reply-count');
			var rpCount = Number(rc_obj.text());
			rc_obj.text(rpCount+1);
		}

	})

	$('.btn-zan').click(function(){
		if(!$(this).hasClass('already-zan')){
			$(this).addClass('already-zan').css('background-color','#8CF2ED');
			var floorId = $(this).attr('value');
			var obj = $(this).find('.zan-count');
			$.ajax({
				url : 'blackboard/zan',
				method : 'post',
				data : {floorId : floorId},
				success : function(num){
					obj.text(num);
					zan_flag = false;
				}
			})
		}else{
			alert("您已赞过");
		}
	})

	$('.reply-frame-head').click(function(){
		$('.reply-frame-head').show();
		$('.reply-frame-foot').hide();
		$('#reply-textarea').html('')
		var $v =$(this).next();
		var v=$v[0];
		$('#reply-textarea-content').hide().appendTo(v).fadeIn();
		$(this).hide()
		$(this).siblings('.reply-frame-foot').fadeIn(function(){
			$('#reply-textarea').focus();
		});
	})

})