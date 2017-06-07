package com.qcj.bc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("policy")
public class PolicyController {

	@RequestMapping("")
	public String policy(){
		return "policy";
	}
	
	@RequestMapping("policyitem")
	public String policyitem(String id){
		return "policy_item"+id;
	}
	
}
