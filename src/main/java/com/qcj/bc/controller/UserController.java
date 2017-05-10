package com.qcj.bc.controller;


import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.qcj.bc.model.User;
import com.qcj.bc.services.UserService;

@Controller
@RequestMapping("user")
public class UserController {
	
	@Resource
	private UserService userService;
	
	/**
	 * 返回用户注册页面
	 * @return
	 */
	@RequestMapping(value = "register", method = RequestMethod.GET)
	public String registerGet(){
		return "register";
	}
	/**
	 * 用户注册
	 * @param model 用于向网页输出参数
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "register", method = RequestMethod.POST)
	public String registerPost(Model model,
			@ModelAttribute(value = "user") User user,
			HttpSession session,
			HttpServletResponse response){
		String msg = userService.register(user);
		if(msg.equals("注册成功"))
			session.setAttribute("username", user.getUsername());
		model.addAttribute("msg",msg);
		model.addAttribute("username", user.getUsername());
		model.addAttribute("email", user.getEmail());
		return "register";
	}
	/**
	 * 返回用户登录界面
	 * @return
	 */
	@RequestMapping(value = "login", method = RequestMethod.GET)
	public String loginGet(){
		return "login";
	}
	/**
	 * 用户登录
	 * @param model
	 * @param user
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "login", method = RequestMethod.POST)
	public String loginPost(Model model,
			@ModelAttribute(value = "user")User user,
			HttpSession session){
		String msg = userService.login(user);
		String go = "";
		if(msg.equals("登录成功"))
			session.setAttribute("username", user.getUsername());
		model.addAttribute("gotoindex",go);
		model.addAttribute("msg",msg);
		model.addAttribute("username",user.getUsername());
		return "login";
	}
	/**
	 * ajax检查用户名是否可用
	 * @param username
	 * @return
	 */
	@RequestMapping(value = "checkusername", method = RequestMethod.POST)
	public @ResponseBody String checkUsername(String username){
		return userService.checkUsername(username);
	}
	/**
	 * ajax检查邮箱是否可用
	 * @param email
	 * @return
	 */
	@RequestMapping(value = "checkemail", method = RequestMethod.POST)
	public @ResponseBody String checkEmail(String email){
		return userService.checkEmail(email);
	}
	
}
