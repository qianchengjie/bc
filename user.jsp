<%@ page language="java" pageEncoding="UTF-8"%>

<%@ page import="com.bc.user.*,com.bc.database.*,java.sql.*"%>

<jsp:useBean id="userInfo" class="com.bc.user.UserInfo" scope="session"></jsp:useBean>
<jsp:useBean id="login" class="com.bc.user.Login"></jsp:useBean>
<jsp:useBean id="register" class="com.bc.user.Register"></jsp:useBean>
<jsp:useBean id="check" class="com.bc.user.CheckUserName"></jsp:useBean>

<%
	String action = request.getParameter("action");
	if (action.equals("login")) {
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		boolean flag = login.login(userName, password);
		if (flag) {
			session.setAttribute("userName", userName);
			out.print("登录成功");
		} else {
			out.print("用户名或密码错误");
		}
	}else if (action.equals("register")) {
		String userName = request.getParameter("userName");
		String password = request.getParameter("password");
		String email = request.getParameter("email");
		Boolean flag = register.register(userName, password, email);
		if (flag) {
			out.clear();
			out.print("注册成功！");
			session.setAttribute("userName", userName);
		} else {
			out.clear();
			out.print("已被注册的用户名！");
		}
	}else if (action.equals("modifyPassword")) {

	}else if (action.equals("modifyUserName")) {

	}else if (action.equals("checkUserName")) {
		if(check.checkUserName(request.getParameter("userName"))){
			out.print("可以注册的用户名！");
		}else{
			out.print("用户名已存在！");
		}
	}else if(action.equals("exit")){
		session.removeAttribute("userName");
	}
	
	
	if(session.getAttribute("userName")!=null){
		//连接数据库             更新userinfo
		ConnectDB DB = new ConnectDB();
		DB.connectDB();
		Connection conn = DB.getConn();
	
		String userName = (String) session.getAttribute("userName");
		boolean flag = true;
	
		String sql = "SELECT * FROM user WHERE userName=?";
		PreparedStatement ps = conn.prepareStatement(sql);
		ps.setString(1, userName);
	
		ResultSet rs = ps.executeQuery();
		if(rs.next()){
			userInfo.setUserName(userName);
			userInfo.setPermission(rs.getInt("permission"));
			userInfo.setPassword(rs.getString("password"));
			userInfo.setRegistered_date(rs.getString("registered_date"));
			userInfo.setEmail(rs.getString("email"));
		}
	
		rs.close();
		ps.close();
		conn.close();
	}
%>