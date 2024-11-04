package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signin")
    public String signIn(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null) {
            System.out.println("DB Password: " + existingUser.getPassword());
            System.out.println("Input Password: " + user.getPassword());
            if (existingUser.getPassword().equals(user.getPassword())) {
                return "로그인 성공";
            } else {
                return "이메일 또는 비밀번호가 잘못되었습니다.";
            }
        } else {
            return "이메일 또는 비밀번호가 잘못되었습니다.";
        }
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        User existingUser = userService.findByEmail(user.getEmail());
        if (existingUser != null) {
            return "이미 존재하는 이메일입니다.";
        }
        userService.saveUser(user.getEmail(), user.getPassword());
        return "회원가입 성공";
    }
}