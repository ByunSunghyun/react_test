package com.example.demo.service;

import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User saveUser(String email, String password) {
        String hashedPassword = passwordEncoder.encode(password); // 비밀번호 해시
        User user = new User(email, hashedPassword);
        user.setIsMember(1);
        return userRepository.save(user);
    }

    public boolean authenticate(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            return passwordEncoder.matches(password, user.getPassword()); // 비밀번호 비교
        }
        return false;
    }
}