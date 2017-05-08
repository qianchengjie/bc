package com.qcj.bc.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PolicyController {
	
	@RequestMapping("policy*")
	public String policy(){
		return "policy";
	}
	
	@RequestMapping("policyitem")
	public String policyitem(String id,Map<String,Object> map){
		map.put("id",id);
		return "policy-item";
	}
	
}
