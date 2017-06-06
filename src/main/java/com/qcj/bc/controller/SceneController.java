package com.qcj.bc.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.qcj.bc.services.SceneService;

@Controller
@RequestMapping("scene")
public class SceneController {

	@Resource
	private SceneService sceneService;
	
	@RequestMapping("")
	public String scene(){
		return "scene";
	}
	
	@RequestMapping("/oldstreet")
	public String oldstreet(){
		return "oldStreet";
	}
	
	@RequestMapping("/oldstreets")
	public ModelAndView oldstreets(int id){
		ModelAndView mav = new ModelAndView();
		mav.addObject("imgs",sceneService.getOldstreetImg(id));
		System.out.println(sceneService.getOldstreetImg(id));
		mav.addObject("text",sceneService.getOldstreetText(id));
		mav.setViewName("OldStreetText");
		return mav;
	}
}
