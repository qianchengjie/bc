$(document).ready(function() {
	
	var pe = false;
	//判断是否是移动端
	$(function(){
			var userAgentInfo = navigator.userAgent;
		    var Agents = ["Android", "iPhone",
		                "SymbianOS", "Windows Phone",
		                "iPad", "iPod"];
		    for (var v = 0; v < Agents.length; v++) {
		        if (userAgentInfo.indexOf(Agents[v]) > 0) {
		        	pe = true;
		        	break;
	        }
	    }
    })
    //Toast
    var toastHideTimer = null;
    function toast(msg){
    	clearTimeout(toastHideTimer);
    	$('#toast p').text(msg);
    	$('#toast').fadeIn(400);
    	toastHideTimer = setTimeout(function(){
    		$('#toast').fadeOut(700);
    	},2000)
	}
	
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

	// 封装 console.log 函数
	function printLog(title, info) {
		window.console && console.log(title, info);
	}

	// 初始化七牛上传
	function uploadInit() {
		var editor = this;
		var btnId = editor.customUploadBtnId;
		var containerId = editor.customUploadContainerId;

		var uploader = Qiniu.uploader({
			runtimes: 'html5,flash,html4', // 上传模式，依次退化
			browse_button: btnId, // 上传选择的点选按钮，必需
			// 在初始化时，uptoken，uptoken_url，uptoken_func三个参数中必须有一个被设置
			// 切如果提供了多个，其优先级为uptoken > uptoken_url > uptoken_func
			// 其中uptoken是直接提供上传凭证，uptoken_url是提供了获取上传凭证的地址，如果需要定制获取uptoken的过程则可以设置uptoken_func
			// uptoken : '<Your upload token>', // uptoken是上传凭证，由其他程序生成
			uptoken_url: 'blackboard/getUpToken', // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
			// uptoken_func: function(file){    // 在需要获取uptoken时，该方法会被调用
			//    // do something
			//    return uptoken;
			// },
			get_new_uptoken: false, // 设置上传文件的时候是否每次都重新获取新的uptoken
			// downtoken_url: '/downtoken',
			// Ajax请求downToken的Url，私有空间时使用，JS-SDK将向该地址POST文件的key和domain，服务端返回的JSON必须包含url字段，url值为该文件的下载地址
			unique_names: true, // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
			// save_key: true,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
			domain: 'http://opxdhic5i.bkt.clouddn.com', // bucket域名，下载资源时用到，必需
			container: containerId, // 上传区域DOM ID，默认是browser_button的父元素
			max_file_size: '100mb', // 最大文件体积限制
			flash_swf_url: 'plupload/Moxie.swf', //引入flash，相对路径
			max_retries: 3, // 上传失败最大重试次数
			dragdrop: true, // 开启可拖曳上传
			drop_element: 'leave-message', // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
			chunk_size: '4mb', // 分块上传时，每块的体积
			auto_start: true, // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
			//x_vars : {
			//    查看自定义变量
			//    'time' : function(up,file) {
			//        var time = (new Date()).getTime();
			// do something with 'time'
			//        return time;
			//    },
			//    'size' : function(up,file) {
			//        var size = file.size;
			// do something with 'size'
			//        return size;
			//    }
			//},
			init: {
				'FilesAdded': function(up, files) {
					plupload.each(files, function(file) {
						// 文件添加进队列后，处理相关的事情
					});
				},
				'BeforeUpload': function(up, file) {
					// 每个文件上传前，处理相关的事情
				},
				'UploadProgress': function(up, file) {
					// 每个文件上传时，处理相关的事情
                    // 显示进度条
                    editor.showUploadProgress(file.percent);
				},
				'FileUploaded': function(up, file, info) {
					// 每个文件上传成功后，处理相关的事情
					// 其中info是文件上传成功后，服务端返回的json，形式如：
					// {
					//    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
					//    "key": "gogopher.jpg"
					//  }
					// 查看简单反馈
					printLog(info);
					printLog(info.response)
					var domain = up.getOption('domain');
					var res = JSON.parse(info.response);
					var sourceLink = domain + "/" + res.key; //获取上传成功后的文件的Url
                    editor.command(null, 'insertHtml', '<img src="' + sourceLink + '" style="max-width:100%;"/>')
				},
				'Error': function(up, err, errTip) {
					//上传出错时，处理相关的事情
				},
				'UploadComplete': function() {
					//队列文件处理完毕后，处理相关的事情
                    editor.hideUploadProgress();
				},
				'Key': function(up, file) {
					// 若想在前端对每个文件的key进行个性化处理，可以配置该函数
					// 该配置必须要在unique_names: false，save_key: false时才生效
					var key = "";
					// do something with key here
					return key
				}
			}
		});
	}

	//初始化富文本框
	$(function() {



		var editor1 = new wangEditor('reply-textarea');

		// 自定义菜单
		editor1.config.menus = [
			'emotion'
		];
		editor1.config.menuFixed = false;
		editor1.create();
		
		var editor = new wangEditor('leave-message');
		if(pe)
			// 自定义菜单
			editor.config.menus = [
				'emotion',
				'img',
				'uploadImg',
				'|',
				'quote',
				'head',
				'undo',
				'|',
				'alignleft',
				'aligncenter',
				'alignright',
				'|',
				'fullscreen',
			];
		else
			// 自定义菜单
			editor.config.menus = [
					'bold',
					'underline',
					'italic',
					'strikethrough',
					'emotion',
					'img',
					'uploadImg',
					'|',
					'forecolor',
					'bgcolor',
					'eraser',
					'|',
					'quote',
					'fontfamily',
					'fontsize',
					'head',
					'undo',
					'|',
					'alignleft',
					'aligncenter',
					'alignright',
					'|',
					'fullscreen',
				];
		editor.config.customUpload = true;
		editor.config.customUploadInit = uploadInit;

		editor.config.menuFixed = false;
		editor.create();
	});
	//留言
	$('#leave-message-btn').click(function() {
		var content = $('#leave-message').html();
		var username = $('#username').val();
		if (content == '<p><br></p>')
			toast('请输入留言内容');
		else
			$.ajax({
				url: 'blackboard/leaveMessage',
				method: 'post',
				data: {
					username: username,
					content: content
				},
				success: function(data) {
					var json = JSON.parse(data);
					if (json.msg == '留言成功') {
						$('#leave-message').html('<p><br></p>');
						var html = "<div class='floor animated bounceInRight'><div class='row'><div class='col-xs-12'><div class='floor-container'><div class='floor-head'><img class='head-sculpture' src='" + json.floor.imgSrc + "'><span class='name'>" + json.floor.username + "</span></div><div class='floor-body'><p>" + json.floor.content + "</p></div><div class='floor-foot'><input type='hidden' value='" + json.floor.id + "' ><p >" + json.floor.time + "</p><a class='btn-zan' value='" + json.floor.id + "'><img src='http://optpqehds.bkt.clouddn.com/bc/images/blackboard/zan.png' ><span class='zan-count'>0</span></a><a class='btn-comment'><img src='http://optpqehds.bkt.clouddn.com/bc/images/blackboard/comment.png'><span class='reply-count' >0</span></a></div><div class='reply-container'><div class='replys'></div><div class='reply-frame' ><div class='reply-frame-head'>回复</div><div class='reply-textarea'></div><div class='reply-frame-foot'><a class='btn btn-default btn-reply'>回复</a><input type='hidden' value='" + json.floor.id + "'></div></div></div></div></div></div></div>";
						$(".floor-content").prepend(html)
						setTimeout(function() {
							$('.main').find('.floor').removeClass('animated')
						}, 1000)
						$('.floor-content .floor:last-child').hide();
					} else
						toast('服务器错误');
				}
			})
	})
	//回复展开
	$('.main').on('click', '.btn-comment', function() {
			var btn_obj = $(this);
			var rp_obj = $(this).parents('.floor-container').find('.reply-container');
			var loader_obj = rp_obj.find('.loader-anim');
			//回复框上拉
			if (rp_obj.css('display') == 'block') {
				rp_obj.css('display', 'none')
				btn_obj.attr('style', '')
			} else {
				if (btn_obj.siblings("input[type='hidden']").val() == -1) {
					replyDropdown(btn_obj, rp_obj);
				} else {
					replyDropdown(btn_obj, rp_obj);
					setTimeout(function(){
						if(btn_obj.siblings("input[type='hidden']").val() != -1)
							loader_obj.show();
					},500)
					$.ajax({
						url: "blackboard/viewReply",
						method: 'GET',
						data: {
							floorId: btn_obj.siblings("input[type='hidden']").val()
						},
						dataType: "json",
						success: function(data) {
							toast
							var replys_obj = eval(data);
							for (var i = 0; i < replys_obj.length; i++) {
								var html = "<div class='reply'><div class='reply-head'><img class='head-sculpture' src='";
								var imgSrc = replys_obj[i].imgSrc;
								html += imgSrc + "'><span class='name'>"
								var username = replys_obj[i].username;
								html += username + "</span></div><div class='reply-body'><p>"
								var content = replys_obj[i].content;
								html += content + "</p></div><div class='reply-foot'><p>"
								var time = replys_obj[i].time;
								html += time + "</p></div></div>";
								rp_obj.find(".replys").append(html);
							}
							btn_obj.siblings("input[type='hidden']").val(-1);
							loader_obj = rp_obj.find('.loader-anim').hide();
						}
					})
				}
			}
		})
	//回复框下拉
	function replyDropdown(btn_obj, rp_obj) {
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
		rp_obj.css('display', 'block')
	}

	//表情
	/*var timer;
	$('img.expression,.expression-panel').bind({
		'mouseenter': function() {
			clearTimeout(timer)
			$(this).parent('.reply-frame-foot').find('.expression-panel').show();
		},
		'mouseleave': function() {
			clearTimeout(timer)
			var exprP_obj = $(this).parent('.reply-frame-foot').find('.expression-panel');
			timer = setTimeout(function() {
				exprP_obj.hide();
			}, 100)
		},
	})
	$('.main').click(function() {})
	$('.expression-panel img').click(function() {
		var ta_obj = $(this).parents('.reply-frame').find('.reply-textarea');
		var expr_src = $(this).attr('src');
		ta_obj.html(ta_obj.html() + "<img src='" + expr_src + "'>")
	})*/

	//回复
	$('.main').on('click', '.btn-reply', function() {
		var flag = true;
		var obj = $(this).parents('.reply-container');
		var floorId = $(this).next().val();
		var username = $('#username').val();
		var content = $('#reply-textarea').html();
		if (content == "<p><br></p>") {
			toast('请输入回复内容')
		} else {
			$.ajax({
				url: 'blackboard/reply',
				method: 'post',
				data: {
					username: username,
					content: content,
					floorId: floorId
				},
				success: function(msg) {
					if (msg != '回复成功') {
						toast('服务器错误！')
					} else {
						var loader_obj = obj.find('.loader-anim')
						$('.reply-frame-head').show();
						$('.reply-frame-foot').hide();
						$('#reply-textarea').html('');
						$('#reply-textarea-content').hide();
						setTimeout(function(){
							if(flag)
								loader_obj.show();
						},1000)
						$.ajax({
							url: "blackboard/viewReply",
							method: 'GET',
							data: {
								floorId: floorId
							},
							dataType: "json",
							success: function(data) {
								var replys_obj = eval(data);
								for (var i = replys_obj.length - 1; i < replys_obj.length; i++) {
									var html = "<div class='reply animated fadeInRight'><div class='reply-head'><img class='head-sculpture' src='";
									var imgSrc = replys_obj[i].imgSrc;
									html += imgSrc + "'><span class='name'>"
									var username = replys_obj[i].username;
									html += username + "</span></div><div class='reply-body'><p>"
									var content = replys_obj[i].content;
									html += content + "</p></div><div class='reply-foot'><p>"
									var time = replys_obj[i].time;
									html += time + "</p></div></div>";
									loader_obj = obj.find('.loader-anim').hide();
									obj.find(".replys").append(html);
									flag = false;
								}
								setTimeout(function() {
									obj.find('.reply').removeClass('animated fadeInRight')
								}, 1000)
							}
						})
					}
				}
			})
			var rc_obj = $(this).parents('.floor-container').find('.reply-count');
			var rpCount = Number(rc_obj.text());
			rc_obj.text(rpCount + 1);
		}

	})
	//赞
	$('.main').on('click', '.btn-zan', function() {
		if (!$(this).hasClass('already-zan')) {
			$(this).addClass('already-zan').css('background-color', '#8CF2ED');
			var floorId = $(this).attr('value');
			var obj = $(this).find('.zan-count');
			$(this).find('.zan').addClass('animated bounce');
			obj.text(Number(obj.text())+1);
			$.ajax({
				url: 'blackboard/zan',
				method: 'post',
				data: {
					floorId: floorId
				},
				success: function(num) {
					zan_flag = false;
				}
			})
		} else {
			toast("您已赞过");
		}
	})

	//展开回复框
	$('.main').on('click', '.reply-frame-head', function() {
		$('.reply-frame-head').show();
		$('.reply-frame-foot').hide();
		$('#reply-textarea').html('<p><br></p>')
		var $v = $(this).next();
		var v = $v[0];
		$('#reply-textarea-content').hide().appendTo(v).fadeIn();
		$(this).hide()
		$(this).siblings('.reply-frame-foot').fadeIn(function() {
			$('#reply-textarea').focus();
		});
	})

})