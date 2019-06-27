package com.github.bryan0919lin.sampleweb.dto;

import java.io.Serializable;
import java.util.Date;

import com.github.bryan0919lin.sampleweb.model.TaskStatus;

public class TaskDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;
	
	private String currentOwner;
	
	private TaskStatus status;
	
	private Date createTime;
	
	private String createUser;
	
	private Date updateTime;
	
	private String updateUser;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCurrentOwner() {
		return currentOwner;
	}

	public void setCurrentOwner(String currentOwner) {
		this.currentOwner = currentOwner;
	}

	public TaskStatus getStatus() {
		return status;
	}

	public void setStatus(TaskStatus status) {
		this.status = status;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public String getCreateUser() {
		return createUser;
	}

	public void setCreateUser(String createUser) {
		this.createUser = createUser;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public String getUpdateUser() {
		return updateUser;
	}

	public void setUpdateUser(String updateUser) {
		this.updateUser = updateUser;
	}
}
