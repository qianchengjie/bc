$(document).ready(function() {

	$('form input').bind('input', 'propertychange', function() {
		checkInput($(this), this.id, $(this).val());
	})

})

//正则表达式验证用户名、邮箱、密码格式是否正确
var userNameReg = /^[A-Za-z0-9_\u4e00-\u9fa5]{2,10}$/;
var emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
var passwordReg = /^[a-zA-Z0-9]{6,16}$/;

function checkInput(obj, id, val) {
	var flag = true;
	switch (id) {
		//验证用户名
		case 'username':
			if (val == '') {
				obj.next().text('用户名不能为空');
				flag = false;
			} else if (!userNameReg.test(val)) {
				obj.next().text('2-10位、中英文、数字或下划线');
				flag = false;
			} else {
				$.ajax({
					url: 'checkusername',
					method: 'post',
					data: {
						username: val
					},
					dataTpye: 'text',
					async: false,
					success: function(msg) {
						obj.next().text(msg);
						if (msg == '用户名已存在')
							flag = false;
						else
							obj.next().text('');
					}
				})
			}
			if (flag)
				addSuccess(obj);
			else
				addWarning(obj);
			return flag;
			break;

			//验证密码
		case 'password':
			if (val == '') {
				obj.next().text('密码不能为空');
				flag = false;
			} else if (!passwordReg.test(val)) {
				obj.next().text('6-16位、由字母或数字组成');
				flag = false;
			} else if ($('#confirm').val() != '' && obj.val() != $('#confirm').val()) {
				$('#confirm').next().text('两次密码不一致');
				obj.next().text('');
				flag = false;
			} else {
				$('#confirm').next().text('');
				obj.next().text('');
			}
			//如果密码一致
			if (obj.val() == $('#confirm').val())
				addSuccess($('#confirm'));
			//如果密码不一致
			if (obj.val() != $('#confirm').val())
				addWarning($('#confirm'));
			if (flag)
				addSuccess(obj);
			else
				addWarning(obj);
			return flag;
			break;

		//确认密码
		case 'confirm':
			if (val == '') {
				obj.next().text('请确认密码');
				flag = false;
			} else if (obj.val() != $('#password').val()) {
				obj.next().text('两次密码不一致');
				flag = false;
			} else
				obj.next().text('');
			//如果密码一致且密码符合规范
			if (passwordReg.test($('#password').val()) && obj.val() == $('#password').val())
				addSuccess($('#password'));
			if (flag)
				addSuccess(obj);
			else
				addWarning(obj);
			return flag;
			break;

		//验证邮箱
		case 'email':
			if (val == '') {
				obj.next().text('邮箱不能为空');
				flag = false;
			} else if (!emailReg.test(val)) {
				obj.next().text('请输入正确格式的邮箱地址');
				flag = false;
			} else {
				$.ajax({
					url: 'checkemail',
					method: 'post',
					data: {
						email: val
					},
					dataTpye: 'text',
					async: false,
					success: function(msg) {
						obj.next().text(msg);
						if (msg != '邮箱可用')
							flag = false;
						else
							obj.next().text('');
					}
				})
			}
			if (flag)
				addSuccess(obj);
			else
				addWarning(obj);
			return flag;
			break;

	}
	return true;
}

function check() {
	var step = 0;
	if (checkInput($(username), username.id, username.value))
		step++;
	if (checkInput($(password), password.id, password.value))
		step++;
	if (checkInput($('#confirm'), 'confirm', $('#confirm').val()))
		step++;
	if (checkInput($(email), email.id, email.value))
		step++;
	return step == 4;
}

function addWarning(obj) {
	obj.parent('.form-group')
		.removeClass('has-success')
		.addClass('has-warning');
}

function addSuccess(obj) {
	obj.parent('.form-group')
		.removeClass('has-warning')
		.addClass('has-success');
}
function go(){
	window.location.href="../";
}