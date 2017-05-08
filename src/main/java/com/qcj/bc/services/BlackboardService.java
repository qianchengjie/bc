package com.qcj.bc.services;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.qcj.bc.model.Blackboard;
import com.qcj.bc.repository.BlackboardRepository;

@Service
public class BlackboardService {
	
	@Resource
	private BlackboardRepository blackboardRepositroy;
	/**
	 * 找出所有楼层
	 * @return
	 */
	public Iterable<Blackboard> getAll(){
		return blackboardRepositroy.findAll();
	}

}
