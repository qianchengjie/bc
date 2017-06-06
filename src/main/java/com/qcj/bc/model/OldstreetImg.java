package com.qcj.bc.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class OldstreetImg {
	
	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int oldstreetId;
	private String oldstreetImg;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getOldstreetId() {
		return oldstreetId;
	}
	public void setOldstreetId(int oldstreetId) {
		this.oldstreetId = oldstreetId;
	}
	public String getOldstreetImg() {
		return oldstreetImg;
	}
	public void setOldstreetImg(String oldstreetImg) {
		this.oldstreetImg = oldstreetImg;
	}
	
	

}
