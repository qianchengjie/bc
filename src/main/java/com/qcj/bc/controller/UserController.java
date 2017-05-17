package com.qcj.bc.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.qcj.bc.model.user.User;
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
	 * @param user
	 * @param session
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "register", method = RequestMethod.POST)
	public ModelAndView registerPost(
			@ModelAttribute(value = "user") User user,
			HttpSession session,
			HttpServletResponse response){
		ModelAndView mav = new ModelAndView();
		String msg = userService.register(user);
		if(msg.equals("注册成功")){
			session.setAttribute("username", user.getUsername());
			session.setAttribute("userHeadImg", userService.getImgSrc(user.getUsername()));
			mav.setViewName("redirect:/");
		}else{
			mav.addObject("msg",msg);
		}
		return mav;
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
	 * @param user
	 * @param session
	 * @return
	 */
	@RequestMapping(value = "login", method = RequestMethod.POST)
	public ModelAndView loginPost(
			@ModelAttribute(value = "user")User user,
			HttpSession session){
		ModelAndView mav = new ModelAndView();
		String msg = userService.login(user);
		if(msg.equals("登录成功")){
			session.setAttribute("username", user.getUsername());
			session.setAttribute("userHeadImg", userService.getImgSrc(user.getUsername()));
			mav.setViewName("redirect:/");
		}else{
			mav.addObject("msg",msg);
			mav.addObject("username",user.getUsername());
			mav.setViewName("login");
		}
		return mav;
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
	@RequestMapping(value = "userRoleRight", method = RequestMethod.GET)
	public ModelAndView userRoleRight(){
		ModelAndView mav = new ModelAndView();
		mav.addObject("uRRList",userService.getAllURR());
		mav.setViewName("userroleright");
		return mav;
	}
}
