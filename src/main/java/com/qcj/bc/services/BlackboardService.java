package com.qcj.bc.services;

import java.util.Date;

import javax.annotation.Resource;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.qcj.bc.model.User;
import com.qcj.bc.model.blackboard.Floor;
import com.qcj.bc.model.blackboard.Reply;
import com.qcj.bc.repository.FloorRepository;
import com.qcj.bc.repository.ReplyRepository;
import com.qcj.bc.repository.UserRepository;

@Service
public class BlackboardService {
	
	@Resource
	private FloorRepository floorRepository;
	
	@Resource
	private ReplyRepository replyRepository;
	
	@Resource
	private UserRepository userRepository;
	
	/**
	 * 返回页数
	 * @return
	 */
	public long getPageSum(){
		return floorRepository.count()/6;
	}
	/**
	 * 找出该pageNum页所有楼层
	 * @param pageNum
	 * @return
	 */
	public Page<Floor> findAll(int pageNum){
		Sort sort = new Sort(Sort.Direction.DESC, "id"); 
		Pageable pageable = new PageRequest(pageNum, 6, sort);
		return floorRepository.findAll(pageable);
	}
	/**
	 * 找出该id楼层的所有评论
	 * @param id
	 * @return
	 */
	public Iterable<Reply> findAllReply(int id){
		return replyRepository.findAllReplyById(id);
	}
	/**
	 * 新增回复
	 * @param reply
	 * @return
	 */
	public String reply(Reply reply){
		reply.setImgSrc(userRepository.getImgSrc(reply.getUsername()));
		reply.setTime(new Date().toLocaleString());
		replyRepository.save(reply);
		Floor floor = floorRepository.findOne(reply.getFloorId());
		floor.setRpCount(floor.getRpCount()+1);
		floorRepository.save(floor);
		return "回复成功";
	}
	/**
	 * 新增赞
	 * @param floorId
	 * @return
	 */
	public int zan(int floorId){
		Floor floor = floorRepository.findOne(floorId);
		floor.setZanCount(floor.getZanCount()+1);
		floorRepository.save(floor);
		return floorRepository.getZanCount(floorId);
	}

}
