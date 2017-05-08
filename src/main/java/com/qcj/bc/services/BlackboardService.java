package com.qcj.bc.services;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
	 * 返回页数
	 * @return
	 */
	public long getPageSum(){
		return blackboardRepositroy.count()/6;
	}
	/**
	 * 找出该pageNum页所有楼层
	 * @param pageNum
	 * @return
	 */
	public Page<Floor> findAll(int pageNum){
		Sort sort = new Sort(Sort.Direction.DESC, "id"); 
		Pageable pageable = new PageRequest(pageNum, 6, sort);
		return blackboardRepositroy.findAll(pageable);
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
