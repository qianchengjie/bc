package com.qcj.bc.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.qcj.bc.model.blackboard.Floor;

public interface FloorRepository extends PagingAndSortingRepository<Floor, Integer>{
	
	@Query("select zanCount from Floor where id=:id")
	public int getZanCount(@Param("id")int id);
	
}
