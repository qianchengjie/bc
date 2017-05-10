package com.qcj.bc.repository;

import org.hibernate.annotations.Subselect;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.qcj.bc.model.User;

@Repository
public interface UserRepository extends PagingAndSortingRepository<User, Integer>{

	@Query("select username from User where username=:username")
	public String getUsername(@Param("username")String username);
	
	@Query("select password from User where username=:username")
	public String getPassword(@Param("username")String username);
	
	@Query("select email from User where email=:email")
	public String getEmail(@Param("email")String email);
	
}
