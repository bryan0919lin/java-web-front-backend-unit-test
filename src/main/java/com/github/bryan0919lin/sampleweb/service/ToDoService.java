package com.github.bryan0919lin.sampleweb.service;

import java.util.List;

import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.github.bryan0919lin.sampleweb.dto.TaskDto;

public interface ToDoService {

	String myToDo(String todo);
	
	@Transactional(propagation = Propagation.REQUIRED)
	Long createTask(TaskDto dto);
	
	@Transactional(propagation = Propagation.REQUIRED)
	boolean updateTask(TaskDto dto);
	
	@Transactional(propagation = Propagation.REQUIRED)
	boolean deleteTask(TaskDto dto);
	
	List<TaskDto> findAllTasks();
}
