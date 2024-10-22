package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        // 로그인 로직 구현
        if ("test@example.com".equals(user.getEmail()) && "password".equals(user.getPassword())) {
            System.out.println("gggg");
            return "로그인 성공";
        } else {
            return "이메일 또는 비밀번호가 잘못되었습니다.";
        }
    }
}