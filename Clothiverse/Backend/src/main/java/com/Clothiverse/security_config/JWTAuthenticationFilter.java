package com.Clothiverse.security_config;

import com.Clothiverse.security_utils.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Optional;


@Component
@RequiredArgsConstructor
public class JWTAuthenticationFilter extends OncePerRequestFilter {

    private final UserDetailsService userDetailsService;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        var jwtTokenOptional = getTokenFromRequest(request);

        jwtTokenOptional.ifPresent((jwtToken)->{
            if(JwtUtil.validateToken(jwtToken)){
                var userNameOptional = JwtUtil.getUsernameFromToken(jwtToken);

                userNameOptional.ifPresent(username -> {
                    var userDetails= userDetailsService.loadUserByUsername(username);

                    var authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);

                });
            }
        });

        filterChain.doFilter(request,response);
    }

    private Optional<String> getTokenFromRequest(HttpServletRequest request){
        var authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if(StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")){
            return Optional.of(authHeader.substring(7));
        }

        return Optional.empty();
    }


}
