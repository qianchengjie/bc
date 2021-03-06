package com.qcj.bc.repository.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.qcj.bc.model.user.UserRole;

public interface URightRepository extends PagingAndSortingRepository<UserRole, Integer>{

	@Query("select rname from UserRight where id=:id")
	public String getRightName(@Param("id")int id);
	
}
