package com.github.bryan0919lin.sampleweb.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class HomeServiceImpl implements HomeService {

	@Autowired
	private ToDoService toDoService;
	
	/**
	 * This method is only used for unit test purpose.
	 */
	void setToDoService(ToDoService toDoService) {
		this.toDoService = toDoService;
	}
	
	@Override
	public String action1(String msg) {
		return "Hello, " + msg;
	}
	
	@Override
	public String getToDoAction(String todo) {
		return "OK! " + toDoService.myToDo(todo);
	}
}
