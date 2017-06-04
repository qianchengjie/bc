package com.qcj.bc.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.qcj.bc.model.Food;
import com.qcj.bc.model.FoodImage;
import com.qcj.bc.services.FoodService;

@Controller
@RequestMapping("food")
public class FoodController {

	@Resource
	public FoodService foodService;
	
	@RequestMapping("")
	public ModelAndView food(){
		ModelAndView mav = new ModelAndView();
		mav.addObject("foods",foodService.getFoodsList(1));
		mav.setViewName("food");
		return mav;
	}
	/**
	 * 返回保存页面
	 * @return
	 */
	@RequestMapping("save")
	public String save(){
		return "save";
	}
	/**
	 * 保存食物
	 * @param food
	 * @return
	 */
	@RequestMapping(value = "saveFood", method = RequestMethod.POST)
	public @ResponseBody String saveFood(
			@ModelAttribute(value = "food")Food food){
		return foodService.saveFood(food);
	}
	/**
	 * 保存图片地址
	 * @param foodImage
	 * @param foodName
	 * @return
	 */
	@RequestMapping(value = "saveFoodImage", method = RequestMethod.POST)
	public @ResponseBody String saveFoodImage(
			@ModelAttribute(value = "foodImage")FoodImage foodImage,
			String foodName){
		return foodService.saveFoodImage(foodImage,foodName);
	}
	
}
