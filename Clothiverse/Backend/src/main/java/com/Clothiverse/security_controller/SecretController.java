package com.Clothiverse.security_controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class SecretController {

    @GetMapping("/secret")
    public String sayHello(){
        return "Hello, authenticated user";
    }
}
