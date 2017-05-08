package com.qcj.bc.controller;

import java.util.ArrayList;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.qcj.bc.model.Blackboard;
import com.qcj.bc.services.BlackboardService;

@Controller
public class BlackboardController {

	@Resource
	private BlackboardService blackboardService;
	
	@RequestMapping("blackboard")
	public String blackboard(Map<String,Object> map){
		Iterable bms = blackboardService.getAll();
		map.put("floors", bms);
		return "Black-board";
	}
	
}
