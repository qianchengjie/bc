package com.qcj.bc.controller;

import java.util.ArrayList;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.qcj.bc.services.BlackboardService;

@Controller
@RequestMapping("/blackboard")
public class BlackboardController {

	@Resource
	private BlackboardService blackboardService;

	@RequestMapping("")
	public String blackboard(Map<String,Object> map){
		Iterable bms = blackboardService.findAllFloor();
		map.put("floors", bms);
		return "Black-board";
	}
	
	@ResponseBody
	@RequestMapping(value = "viewreply", method = RequestMethod.GET)
	public Iterable viewreply(int floorId){
		return blackboardService.findAllReply(floorId);
	}
	
}
