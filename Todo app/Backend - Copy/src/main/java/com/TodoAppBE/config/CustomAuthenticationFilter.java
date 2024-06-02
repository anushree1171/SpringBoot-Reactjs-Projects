package com.TodoAppBE.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

//@Component
public class CustomAuthenticationFilter { //extends OncePerRequestFilter
//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//    public CustomAuthenticationFilter(AuthenticationManager authenticationManager) {
//        this.authenticationManager = authenticationManager;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        if (request.getServletPath().equals("/login") && request.getMethod().equals("POST")) {
//            // For login requests, extract username and password from the request
//            String username = request.getParameter("username");
//            String password = request.getParameter("password");
//
//            try {
//                // Attempt authentication
//                Authentication authentication = authenticationManager.authenticate(
//                        new UsernamePasswordAuthenticationToken(username, password)
//                );
//
//                // If authentication is successful, set the security context
//                SecurityContextHolder.getContext().setAuthentication(authentication);
//            } catch (AuthenticationException e) {
//                // If authentication fails, handle the exception (e.g., return an error response)
//                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                return;
//            }
//        }
//
//        // Continue the filter chain
//        filterChain.doFilter(request, response);
//    }
}
