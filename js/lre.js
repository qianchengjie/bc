$(document).ready(function(){

	//login-register-btn 点击时隐藏popover 并且清除值
	$(".login-register-btn").click(function(){
		$("[data-toggle='popover']").popover('hide');
		$("input").val("");
	});

	//正则表达式验证用户名、邮箱、密码格式是否正确
	var userNameReg =  /^[A-Za-z0-9_\u4e00-\u9fa5]{2,10}$/;
	var emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
    var passwordReg = /^[a-zA-Z0-9]{6,16}$/;

    $('#login-modal').on('shown.bs.modal', function () {
    	  $('#userName').focus();
    })	
    $('#register-modal').on('shown.bs.modal', function () {
    	$('#register-userName').focus();
    })
    
	//登录按钮点击时事件
	$("#login").click(function(){
		//保存用户名
		var userName = $("#userName").val();
		//用户名或密码是否为空
		if ($("#userName").val()=="") {
			$("#userNameTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>请输入用户名！</b>").popover("show");
			$("#userName").focus();
			$("#password").val("");
		}else if ($("#password").val()=="") {
			$("#passwordTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>请输入密码！</b>").popover("show");
			$("#password").focus();
		}else{
			$.post(
				'user.jsp',
				{action:"login",userName:$("#userName").val(),password:$("#password").val()},
				function(data,textStatus,jqXHR){
					if(data.indexOf("登录成功")!=-1){
						$('#login-modal').modal('hide');
						$("#login-register").html("<li class='dropdown'><a id='login-register' href='#' class='dropdown-toggle' data-toggle='dropdown'>"+userName+"<b class='caret'></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class='dropdown-arrow'></span><ul class='dropdown-menu'><li><a href='userinfo.jsp'>个人资料</a></li><li><a href='javascript:exit();''><span class='glyphicon glyphicon-log-out'></span> 退出</a></li>");
					}else{
						Avgrund.show("#login-info");
					}
				}
			);
			$("input").val("");
		}
	});

	//注册按钮点击时事件
	$("#register").click(function(){
		//保存用户名
		var userName = $("#register-userName").val();

		if ($("#register-userName").val()=="") {
			$("#register-userNameTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>请输入用户名！</b>").popover("show");
			$("#register-userName").focus();
		}else if(!userNameReg.test($("#register-userName").val())){
			$("#register-userNameTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>2-10位、中英文、数字或下划线</b>").popover("show");
			$("#register-userName").focus();
		}else if(!passwordReg.test($("#register-password").val())){
			$("#register-passwordTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>6-16位、由字母或数字组成</b>").popover("show");
			$("#register-password").val("");
			$("#register-confirm").val("");
			$("#register-confirmTip").popover('hide');
			$("#register-password").focus();
		}else if ($("#register-password").val()=="") {
			$("#register-passwordTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>请输入密码！</b>").popover("show");
			$("#register-password").focus();
		}else if ($("#register-confirm").val()=="") {
			$("#register-confirmTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>请确认密码！</b>").popover("show");
			$("#register-confirm").focus();
		}else if($("#register-password").val()!=$("#register-confirm").val()){
			$("#register-password").val("");
			$("#register-confirm").val("");
			$("#register-password").focus();
			$("#register-confirmTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>两次密码不一致！</b>").popover("show");
		}else if($("#register-email").val()==""){
			$("#register-emailTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>请输入邮箱地址！</b>").popover("show");
			$("#register-email").focus();
		}else if(!emailReg.test($("#register-email").val())){
			$("#register-emailTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>请输入正确格式的邮箱地址</b>").popover("show");
			$("#register-email").focus();
		}else{
			$.post(
				'user.jsp',
				{action:"register",userName:$("#register-userName").val(),password:$("#register-password").val(),email:$("#register-email").val()},
				function(data,textStatus,jqXHR){
					if(data.indexOf("注册成功")!=-1){
						$("#register-modal").modal('hide');
						$("input").val("");
						$("#login-register").html("<li class='dropdown'><a href='#'  id='login-register' class='dropdown-toggle' data-toggle='dropdown'>"+userName+"<b class='caret'></b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a><span class='dropdown-arrow'></span><ul class='dropdown-menu'><li><a href='userinfo.jsp'>个人资料</a></li><li><a href='javascript:exit();''><span class='glyphicon glyphicon-log-out'></span> 退出</a></li>");
					}else{
						$("#register-userName").focus();
						$("#register-userNameTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>用户名已存在！</b>").popover("show");
					}
				}
			);
		}
	});

	//登陆时提示信息
	$("#userName").bind("input propertychange",function(){
		if ($("#userName").val()!="") {
			$("#userNameTip").popover('hide');
		}
	})
	$("#password").bind("input propertychange",function(){
		if ($("#password").val()!="") {
			$("#passwordTip").popover('hide');
		}
	})


	//注册时提示信息
	$("#register-userName").bind("input propertychange",function(){
		if(!userNameReg.test($("#register-userName").val())){
			$("#register-userNameTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>2-10位、中英文、数字或下划线</b>").popover("show");
		}else{
			$.post(
				'user.jsp',
				{action:"checkUserName",userName:$("#register-userName").val()},
				function(data,textStatus,jqXHR){
					if(data.indexOf("存在")!=-1){
						$("#register-userNameTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>用户名已存在！</b>").popover("show");
					}else{
						$("#register-userNameTip").popover('hide');
					}
				}
			);
		}
	})
	$("#register-password").bind("input propertychange",function(){
		if(!passwordReg.test($("#register-password").val())){
			$("#register-passwordTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>6-16位、由字母或数字组成</b>").popover("show");
		}else{
			$("#register-passwordTip").popover("hide");
			if($("#register-confirm").val()!=$("#register-password").val()&&$("#register-confirm").val()!=""&&$("#register-password").val().length>=6){
				$("#register-confirmTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>两次密码不一致！</b>").popover("show");
			}else{
				$("#register-confirmTip").popover("hide");
			}
		}
	})
	$("#register-confirm").bind("input propertychange",function(){
		if(!passwordReg.test($("#register-password").val())){
			$("#register-passwordTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>6-16位、由字母或数字组成</b>").popover("show");
		}else{
			$("#register-passwordTip").popover("hide");
			if($("#register-confirm").val()!=$("#register-password").val()){
				$("#register-confirmTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>两次密码不一致！</b>").popover("show");
			}else{
				$("#register-confirmTip").popover("hide");
			}
		}
	})
	$("#register-email").bind("input propertychange",function(){
		if(!emailReg.test($("#register-email").val())){
			$("#register-emailTip").attr("data-content","<b style='white-space:nowrap;color:red;font-size:13px'>请输入正确格式的邮箱地址</b>").popover("show");
			$("#register-email").focus();
		}else{
			$("#register-emailTip").popover("hide");
		}
	})

	//阻止popover响应
	 $("[data-toggle='popover']").popover({
            trigger : 'manual'
        });
	
	$("#contact").click(function(){
		 Avgrund.show("#contact-info");
	})
	
});
function exit(){
	$.post(
		'user.jsp',
		{action:"exit"},
		function(data,textStatus,jqXHR){
			location.reload();
		}
	);
}
function avgrund(){
	Avgrund.show("#login-info");
}
function closeAvgrund(){
	Avgrund.hide();
}
function tologin(){
	if(event.keyCode==13) 
		$("#login").click();
}
function toregister(){
	if(event.keyCode==13) 
		$("#register").click();
}