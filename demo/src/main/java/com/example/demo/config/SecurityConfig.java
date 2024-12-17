package com.example.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors().and() // CORS 설정 추가
                .csrf().disable() // CSRF 보호 비활성화
                .authorizeRequests()
                .antMatchers("/api/signIn", "/api/**", "/h2-console/**").permitAll() // H2 콘솔 접근 허용
                .anyRequest().authenticated() // 나머지 요청은 인증 필요
                .and()
                .headers().frameOptions().sameOrigin(); // H2 콘솔을 위한 설정
        return http.build();
    }
}