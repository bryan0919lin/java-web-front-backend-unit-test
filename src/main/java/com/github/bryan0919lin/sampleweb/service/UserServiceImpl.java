package com.github.bryan0919lin.sampleweb.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.github.bryan0919lin.sampleweb.dto.LoginDto;

import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.Date;

import org.springframework.stereotype.Component;

@Component
public class UserServiceImpl implements UserService {

    private static final String secret = "!@#$0okm";

    @Override
    public String login(LoginDto dto) throws IllegalArgumentException, JWTCreationException, UnsupportedEncodingException {
        if ("bryan.lin".equals(dto.getUsername())
                && "1qaz@wsx".equals(dto.getPassword())) {
            ZoneOffset offset = ZoneOffset.of("+00:00");
            return JWT.create()
                    .withClaim("username", dto.getUsername())
                    .withIssuedAt(Date.from(LocalDateTime.now().toInstant(offset)))
                    .withExpiresAt(Date.from(LocalDateTime.now().plusHours(2).toInstant(offset)))
                    .sign(Algorithm.HMAC256(secret));
        } else {
            return null;
        }
    }

    @Override
    public boolean checkLogin(String token) throws IllegalArgumentException, UnsupportedEncodingException {
        JWTVerifier verifier = JWT.require(Algorithm.HMAC256(secret))
                .build();
        verifier.verify(token).getClaims();
        return true;
    }

}
