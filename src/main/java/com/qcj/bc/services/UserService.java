package com.qcj.bc.services;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.qcj.bc.model.User;
import com.qcj.bc.repository.UserRepository;

@Service
public class UserService {
	
	@Resource
	private UserRepository userRepository;

	public boolean register1(Map<String,Object> map){
		String username = (String) map.get("username");
		String pwd1 = (String) map.get("pwd1");
		String pwd2 = (String) map.get("pwd2");
		String email = (String) map.get("email");
		MultipartFile file = (MultipartFile)map.get("file");
		if(username == null || "".equals(username)
				|| pwd1 == null || "".equals(pwd1)
				|| pwd2 == null ||  "".equals(pwd2)
				|| !pwd1.equals(pwd2)
				|| email == null || "".equals(email)
				|| file.isEmpty()){
			return false;
		}
        // 获取文件名
        String fileName = file.getOriginalFilename();
        // 获取文件的后缀名
        String suffixName = fileName.substring(fileName.lastIndexOf("."));
        fileName = username + "." + suffixName;
        // 文件上传后的路径
        String filePath = "e:/imgs";
        // 解决中文问题，liunx下中文路径，图片显示问题
        // fileName = UUID.randomUUID() + suffixName;
        File dest = new File(filePath + fileName);
        // 检测是否存在目录
        if (!dest.getParentFile().exists()) {
            dest.getParentFile().mkdirs();
        }
        try {
			file.transferTo(dest);
			} catch (IllegalStateException e) {
			e.printStackTrace();
			return false;
			} catch (IOException e) {
			e.printStackTrace();
			return false;
		}
		
		
		return true;
	}
	/**
	 * 用户注册
	 * @param user
	 * @return
	 */
	public String register(User user){
		String msg = "注册成功";
		if("".equals( user.getUsername() ) || user.getUsername() == null)
			msg = "用户名不能为空";
		else if("".equals( user.getPassword() ) || user.getPassword() == null)
			msg = "密码不能为空";
		else if("".equals( user.getEmail() ) || user.getEmail() == null)
			msg = "邮箱不能为空";
		else if(userRepository.getUsername( user.getUsername() ) != null)
			msg = "用户名已存在";
		else if(userRepository.getEmail( user.getEmail() ) != null)
			msg = "邮箱已被注册";
		else{
			user.setImgSrc("img/person.png");
			user.setRegDate(new Date().toLocaleString());
			userRepository.save(user);
		}
		return msg;
	}
	/**
	 * 用户登录
	 * @param user
	 * @return
	 */
	public String login(User user){
		String msg = "登录成功";
		if(userRepository.getUsername( user.getUsername() ) == null)
			msg = "用户名不存在";
		else if(!userRepository.getPassword( user.getUsername() ).equals( user.getPassword() ))
			msg = "密码错误";
		return msg;
	}
	
	public void debug(String str){
		System.out.println(str);
	}
	
	public String checkUsername(String username){
		String msg = "用户名可用";
		if(userRepository.getUsername(username) != null)
			msg = "用户名已存在";
		return msg;
	}
	
	public String checkEmail(String email){
		String msg = "邮箱可用";
		if(userRepository.getEmail(email) != null)
			msg = "邮箱已被注册";
		return msg;
		
	}
	
}
