package com.Clothiverse.security_service;

public interface AuthService {
    String login(String username, String password);

    String signUp(String firstName, String lastName, String username, String password, String email);
}
