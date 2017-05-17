<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:useBean id="userInfo" class="com.bc.user.UserInfo" scope="session"></jsp:useBean> 
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    <title>userinfo</title>

  </head>
  
  <body>
  	用户名：<%=userInfo.getUserName() %><br>
  	密码：<%=userInfo.getPassword() %><br>
  	邮箱：<%=userInfo.getEmail() %><br>
  	注册日期：<%=userInfo.getRegistered_date() %><br>
  	权限级别：<%=userInfo.getPermission() %><br>
  </body>
</html>
