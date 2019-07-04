package com.github.bryan0919lin.sampleweb.controller;

import com.github.bryan0919lin.sampleweb.dto.LoginDto;
import com.github.bryan0919lin.sampleweb.service.UserService;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/login",
        produces = {
            MediaType.APPLICATION_JSON_UTF8_VALUE, MediaType.APPLICATION_XML_VALUE })
public class LoginController {

    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.POST,
            consumes = {MediaType.APPLICATION_JSON_UTF8_VALUE, MediaType.APPLICATION_XML_VALUE })
    public String login(HttpServletRequest request, @RequestBody LoginDto dto) {
        try {
            return userService.login(dto);
        } catch (RuntimeException | UnsupportedEncodingException e) {
            return null;
        }
    }

    @RequestMapping(value = "/status", method = RequestMethod.GET)
    public boolean loginStatus(HttpServletRequest request) {
        try {
            String token = request.getHeader("Authorization").split(" ")[1];
            return userService.checkLogin(token);
        } catch (RuntimeException | UnsupportedEncodingException e) {
            e.printStackTrace();
            return false;
        }
    }
}
