package com.qcj.bc.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.qcj.bc.model.Food;
import com.qcj.bc.model.FoodImage;
import com.qcj.bc.repository.food.FoodImageRepository;
import com.qcj.bc.repository.food.FoodRepository;

@Service
public class FoodService {

	@Resource
	private FoodRepository foodRepository;
	
	@Resource
	private FoodImageRepository foodImageRepository;
	/**
	 * 获得food页
	 * @param num
	 * @return
	 */
	public ArrayList<Map> getFoodsList(int num){
		ArrayList<Map> list = new ArrayList<>();
		Iterable<Food> foods= foodRepository.findAll();
		for(Food food : foods){
			Map<String, String> map = new HashMap<>();
			map.put("name", food.getName());
			String content = food.getContent();
			for(int i = 20; i <= 76; i+=28){
				content = content.substring(0, i)+"<br />"+content.substring(i);
			}
			map.put("content", content);
			map.put("url",foodImageRepository.getOneImageUrl(food.getId()).get(0));
			list.add(map);
		}
		return list;
	}
	
	
	
	/**
	 * 保存食物信息
	 * @param food
	 * @return
	 */
	public String saveFood(Food food){
		
		foodRepository.save(food);
		
		return "保存成功";
	}
	/**
	 * 保存食物图片
	 * @param food
	 * @return
	 */
	public String saveFoodImage(FoodImage foodImage, String foodName){
		
		foodImage.setFoodId(foodRepository.getFoodId(foodName));
		foodImageRepository.save(foodImage);
		return "保存成功";
	}
	
}
