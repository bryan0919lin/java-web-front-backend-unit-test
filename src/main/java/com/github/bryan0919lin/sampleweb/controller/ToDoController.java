package com.github.bryan0919lin.sampleweb.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.github.bryan0919lin.sampleweb.dto.TaskDto;
import com.github.bryan0919lin.sampleweb.service.ToDoService;

@RestController
@RequestMapping(value = "/todo", 
        produces = {
		    MediaType.APPLICATION_JSON_UTF8_VALUE, MediaType.APPLICATION_XML_VALUE })
public class ToDoController {

	@Autowired
	private ToDoService toDoService;
	
	@RequestMapping(value = "/createTask", method = RequestMethod.POST, 
			consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE, MediaType.APPLICATION_XML_VALUE })
    public Long createTask(HttpServletRequest request, @RequestBody TaskDto dto) {
        return toDoService.createTask(dto);
    }
}
