package com.qcj.bc.services;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.qcj.bc.model.blackboard.Floor;
import com.qcj.bc.model.blackboard.Reply;
import com.qcj.bc.repository.FloorRepository;
import com.qcj.bc.repository.ReplyRepository;

@Service
public class BlackboardService {
	
	@Resource
	private FloorRepository blackboardRepositroy;
	
	@Resource
	private ReplyRepository replyRepository;
	
	
	/**
	 * 找出所有楼层
	 * @return
	 */
	public Iterable<Floor> findAllFloor(){
		return blackboardRepositroy.findAll();
	}
	/**
	 * 找出该id楼层的所有评论
	 * @param id
	 * @return
	 */
	public Iterable<Reply> findAllReply(int id){
		return replyRepository.findAllReplyById(id);
	}

}
