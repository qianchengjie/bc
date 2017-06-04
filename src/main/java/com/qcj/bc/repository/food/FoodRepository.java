package com.qcj.bc.repository.food;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.qcj.bc.model.Food;

public interface FoodRepository extends PagingAndSortingRepository<Food, Integer>{
	
	@Query("select id from Food where name=:name")
	public int getFoodId(@Param("name")String name);
	
}
