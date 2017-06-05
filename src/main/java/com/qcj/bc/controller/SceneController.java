package com.qcj.bc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("scene")
public class SceneController {

	@RequestMapping("")
	public String scene(){
		return "scene";
	}
	
	@RequestMapping("/oldstreet")
	public String oldstreet(){
		return "oldStreet";
	}
	
}
