package com.qcj.bc.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.qcj.bc.model.blackboard.Floor;

public interface FloorRepository extends PagingAndSortingRepository<Floor, Integer>{
	
}
