package com.qcj.bc.repository.user;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import com.qcj.bc.model.user.UserRole;

public interface URoleRepository extends PagingAndSortingRepository<UserRole, Integer>{

	@Query("select rname from UserRole where id=:id")
	public String getRoleName(@Param("id")int id);
	
}
