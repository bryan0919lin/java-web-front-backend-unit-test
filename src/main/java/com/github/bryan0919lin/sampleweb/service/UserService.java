package com.github.bryan0919lin.sampleweb.service;

import com.auth0.jwt.exceptions.JWTCreationException;
import com.github.bryan0919lin.sampleweb.dto.LoginDto;

import java.io.UnsupportedEncodingException;

public interface UserService {

    String login(LoginDto dto)
            throws IllegalArgumentException, JWTCreationException, UnsupportedEncodingException;

    boolean checkLogin(String token)
            throws IllegalArgumentException, UnsupportedEncodingException;
}
