package com.github.bryan0919lin.sampleweb.service;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Component;

import com.github.bryan0919lin.sampleweb.dto.TaskDto;
import com.github.bryan0919lin.sampleweb.model.Task;

@Component
public class ToDoServiceImpl implements ToDoService {

	@PersistenceContext 
	protected EntityManager em;
	
	@Override
	public String myToDo(String todo) {
		return "Hi, " + todo;
	}

	private Task transferToTask(TaskDto dto) {
		if (dto == null) {
			return null;
		}
		
		Task task = new Task();
		task.setId(dto.getId());
		task.setCurrentOwner(dto.getCurrentOwner());
		task.setStatus(dto.getStatus());
		task.setCreateUser(dto.getCreateUser());
		task.setCreateTime(dto.getCreateTime());
		task.setUpdateUser(dto.getUpdateUser());
		task.setUpdateTime(dto.getUpdateTime());
		return task;
	}
	
	@Override
	public Long createTask(TaskDto dto) {
		if (dto == null) {
			return null;
		}
		
		Task task = transferToTask(dto);
		task.setCreateTime(new Date());
		em.persist(task);
		return task.getId();
	}

	@Override
	public boolean updateTask(TaskDto dto) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteTask(TaskDto dto) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public List<TaskDto> findAllTasks() {
		// TODO Auto-generated method stub
		return null;
	}

}
