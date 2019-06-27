package com.github.bryan0919lin.sampleweb.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;

import com.github.bryan0919lin.sampleweb.service.HomeService;

@RestController
@RequestMapping(value = "/home", produces = {
		MediaType.APPLICATION_JSON_UTF8_VALUE, MediaType.APPLICATION_XML_VALUE})
public class HomeController {

	@Autowired
	private HomeService homeService;
	
	@RequestMapping(value = "/action1", method = RequestMethod.POST)
    public String action1(HttpServletRequest request, @RequestBody String msg) {
		System.out.println(msg);
        return homeService.action1(msg);
    }
}
