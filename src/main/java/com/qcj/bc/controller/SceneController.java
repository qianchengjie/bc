package com.qcj.bc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("scene")
@Controller
public class SceneController {

	@RequestMapping("")
	public String scene(){
		return "scene";
	}
	
}
