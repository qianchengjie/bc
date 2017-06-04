package com.qcj.bc.repository.food;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.qcj.bc.model.FoodImage;

public interface FoodImageRepository extends PagingAndSortingRepository<FoodImage, Integer>{

	@Query("select url from FoodImage where foodId=:foodId")
	public List<String> getOneImageUrl(@Param("foodId") int foodId);
	
}
