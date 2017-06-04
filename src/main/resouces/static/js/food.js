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
	
});