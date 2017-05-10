$(document).ready(function(){
	
	$('form input').bind('input', 'propertychange', function() {
		checkInput($(this), this.id, $(this).val());
	})
	
})

function checkInput(obj, id, val){
	var flag = true;
	
		switch (id) {
		//验证用户名
		case 'username':
			if (val == '') {
				obj.parent('.input-group').next().text('用户名不能为空');
				addWarning(obj);
				flag = false;
			}else{
				addSuccess(obj);
				obj.parent('.input-group').next().text('');
			}
			break;
		case 'password':
			if (val == '') {
				obj.parent('.input-group').next().text('密码不能为空');
				addWarning(obj);
				flag = false;
			}else{
				addSuccess(obj);
				obj.parent('.input-group').next().text('');
			}
			break;
		}
		
	return flag;
}

function check(){
	var step = 0;
	if(checkInput($(username),'username',username.value))
		step ++;
	if(checkInput($(password),'password',password.value))
		step ++;
	return step == 2;
}

function addWarning(obj) {
	obj.parents('.form-group')
		.removeClass('has-success')
		.addClass('has-warning');
}

function addSuccess(obj) {
	obj.parents('.form-group')
		.removeClass('has-warning')
		.addClass('has-success');
}