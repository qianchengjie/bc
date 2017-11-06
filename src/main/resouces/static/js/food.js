$(document).ready(function(){
	
	//弹出详情模态框
	$('#content').on('click', '.modal-btn',function(){
		var name = $(this).siblings('.food-name').text();
		var content = $(this).siblings('.food-content').text();
		content.replace('<br />','');
		$('#myModalLabel').text(name);
		$('#food-content').text(content);
		$('#myModal').modal('show');
	})
	
	$(window).scroll(function(){
		var wH = $(window).height();
		var wT = $(window).scrollTop();
		var dH = $(document).height();
		if(wH + wT == dH){
			$('#load').find('h3').hide();
			$('#load').find('div').show();
			var num = Number($('#num').val())+1;
			setTimeout(function(){
				$.ajax({
					url : '/food/getFoodsList',
					data : { num : num},
					async : false,
					dataType : 'json',
					success : function(list){
						if(list.length == 2){
							var html1 = '<div id="item-box"><div id="box-left"><img src="' + list[0].url + '"></div><div id="box-right"><div id="hr" class="hr1"></div><div id="text"><h3 class="food-name">'+ list[0].name +'</h3><p class="food-content">'+ list[0].content +'</p><div id="button" class="modal-btn"><div id="line-right"></div><div id="line-top"></div><div id="line-left"></div><div id="line-bottom"></div>详情</div></div><div class="hr2"></div></div></div>'
							var html2 = '<div id="item-box" class="item-box-right"><div id="box-right"><div class="hr1"></div><div id="text"><h3 th:text="${food.name}" class="food-name">' + list[1].name + '</h3><p th:utext="${food.content}" class="food-content">' + list[1].content + '</p><div id="button" class="modal-btn"><div id="line-top"></div><div id="line-left"></div><div id="line-right"></div><div id="line-bottom"></div>DISCOVER</div></div><div id="hr" class="hr2"></div></div><div id="box-left"><img src="' + list[1].url + '"></div></div>'
							$('#content').append(html1+html2)
						}
						else if(list.length == 1){
							var html1 = '<div id="item-box"><div id="box-left"><img src="' + list[0].url + '"></div><div id="box-right"><div id="hr" class="hr1"></div><div id="text"><h3 class="food-name">'+ list[0].name +'</h3><p class="food-content">'+ list[0].content +'</p><div id="button" class="modal-btn"><div id="line-right"></div><div id="line-top"></div><div id="line-left"></div><div id="line-bottom"></div>详情</div></div><div class="hr2"></div></div></div>'
						}
						else{
							$('#load').find('h3').text('没有更多内容');
						}
						$('#load').find('h3').show();
						$('#load').find('div').hide();
						$('#num').val(num);
					}
				})
			},500)
		}
	})
	console.log($(document).height())
});