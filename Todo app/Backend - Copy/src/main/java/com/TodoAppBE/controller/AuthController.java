package com.TodoAppBE.controller;

import com.TodoAppBE.dto.AppUser;
import com.TodoAppBE.entity.User;
import com.TodoAppBE.exceptions.UsernameOrEmailIdExistsException;
import com.TodoAppBE.service.CustomUserDetailsService;
import com.TodoAppBE.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.security.web.context.SecurityContextRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    @Autowired
    UserService userService;

    @Autowired
    CustomUserDetailsService userDetailsService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody AppUser appUser) {
        System.out.println("From registration: " +appUser);
        try {
            if (userService.usernameOrEmailIdExists(appUser.getUsername(), "") ||
                    userService.usernameOrEmailIdExists(appUser.getEmailId(), "")) {
                throw new UsernameOrEmailIdExistsException("User with username: " + appUser.getUsername() + " or email Id: " + appUser.getEmailId() + " already exists.");
            }

            String encodedPassword = passwordEncoder.encode(appUser.getPassword());

            User user = User.builder()
                    .name(appUser.getName())
                    .username(appUser.getUsername())
                    .password(encodedPassword)
                    .emailId(appUser.getEmailId())
                    .build();

            userService.saveUser(user);

            return ResponseEntity.ok("Registration successful");
        } catch (UsernameOrEmailIdExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred during registration");
        }
    }


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody AppUser user, HttpServletRequest request) {
        System.out.println("From login: " + user);

        try {
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                    user.getUsername(), user.getPassword());

            Authentication authentication = authenticationManager.authenticate(authenticationToken);
            SecurityContextHolder.getContext().setAuthentication(authentication);

            HttpSession session = request.getSession(true);
            session.setAttribute("SPRING_SECURITY_CONTEXT", SecurityContextHolder.getContext());

            return ResponseEntity.ok("Login successful");
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid username or password");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred");
        }
    }



    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();
        }
        SecurityContextHolder.clearContext();
        return ResponseEntity.ok("Logout successful");
    }

    @GetMapping("/login")
    public ResponseEntity<String> loginPage(@RequestParam(value = "logout", required = false) String logout) {
        if (logout != null) {
            return ResponseEntity.ok("You have been logged out successfully.");
        }
        return ResponseEntity.ok("Login Page");
    }


}

//try {
//UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword());
////auth token has all details, password is not encoded or not - it still throws an exception
//Authentication authentication = authenticationManager.authenticate(authToken); //authentication obj is not getting printed
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//
//HttpSession session = request.getSession(true);
//            session.setAttribute("SPRING_SECURITY_CONTEXT", SecurityContextHolder.getContext());
//
//        return ResponseEntity.ok("Login successful");
////      } catch (BadCredentialsException e) {
////            e.getMessage();
////            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Invalid username or password");
//        } catch (Exception e) {
//        e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred");
//        }
