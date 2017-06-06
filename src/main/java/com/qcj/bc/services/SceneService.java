package com.qcj.bc.services;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.qcj.bc.model.OldstreetImg;
import com.qcj.bc.model.OldstreetText;
import com.qcj.bc.repository.OldstreetImgRespository;
import com.qcj.bc.repository.OldstreetTextRespository;

@Service
public class SceneService {
	
	@Resource
	private OldstreetImgRespository oldstreetImgRespository;
	@Resource
	private OldstreetTextRespository oldstreetTextRespository;
	
	public List<OldstreetImg> getOldstreetImg(int oldstreetId){
		System.out.println(oldstreetId);
		Iterator<OldstreetImg> iterator = oldstreetImgRespository.findAllByOldstreetId(oldstreetId).iterator();
		List<OldstreetImg> list = new ArrayList<OldstreetImg>();
		while(iterator.hasNext())
			list.add(iterator.next());
		System.out.println(list.size());
		return list;
	}
	
	public OldstreetText getOldstreetText(int id){
		return oldstreetTextRespository.findOne(id);
	}
	
}
