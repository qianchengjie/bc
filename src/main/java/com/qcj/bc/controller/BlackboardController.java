package com.qcj.bc.controller;

import java.util.ArrayList;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.qcj.bc.model.User;
import com.qcj.bc.model.blackboard.Floor;
import com.qcj.bc.model.blackboard.Reply;
import com.qcj.bc.services.BlackboardService;

@Controller
@RequestMapping("/blackboard")
public class BlackboardController {

	@Resource
	private BlackboardService blackboardService;
	
	
	/**
	 * 获取页数
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "getpagesum", method = RequestMethod.GET)
	public long pageSum(){
		return blackboardService.getPageSum();
	}
	/**
	 * 查询当前选择页,获取页数并返回数据
	 * @param map
	 * @param pageNum
	 * @param pageSum
	 * @return
	 */
	@RequestMapping("")
	public String blackboard(Map<String,Object> map, int pageNum){
		Iterable<Floor> bms = blackboardService.findAll(pageNum-1);
		map.put("floors", bms);
		long pageSum = blackboardService.getPageSum();
		map.put("pageSum", pageSum+1);
		map.put("currentPage", pageNum);
		return "Black-board"; 
	}
	/**
	 * 查选当前楼层回复的内容
	 * @param floorId
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "viewreply", method = RequestMethod.GET)
	public Iterable viewreply(int floorId){
		return blackboardService.findAllReply(floorId);
	}
	/**
	 * 用户回复
	 * @param reply
	 * @return
	 */
	@RequestMapping(value = "reply", method = RequestMethod.POST)
	@ResponseBody
	public String reply(
			@ModelAttribute(value = "reply") Reply reply
			){
		return blackboardService.reply(reply);
	}
	@RequestMapping(value = "zan", method = RequestMethod.POST)
	@ResponseBody
	public int zan(int floorId){
		return blackboardService.zan(floorId);
	}
	
}
