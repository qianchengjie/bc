package com.qcj.bc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("food")
@Controller
public class FoodController {

	@RequestMapping("")
	public String food(){
		return "food";
	}
	
}
