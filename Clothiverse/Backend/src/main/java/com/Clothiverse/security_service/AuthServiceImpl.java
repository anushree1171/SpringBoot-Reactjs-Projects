package com.Clothiverse.security_service;



import com.Clothiverse.security_entity.AppUser;
import com.Clothiverse.security_repository.AppUserRepo;
import com.Clothiverse.security_utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{
    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;

    private final AppUserRepo appUserDao;
    @Override
    public String login(String username, String password) {
        var authToken = new UsernamePasswordAuthenticationToken(username, password);
        var authenticate = authenticationManager.authenticate(authToken);
        return JwtUtil.generateToken(((UserDetails)(authenticate.getPrincipal())).getUsername());
    }

    @Override
    public String signUp(String firstName, String lastName, String username, String password, String email) {
        if(appUserDao.existByUsername(username) != null){
            System.out.println(appUserDao.existByUsername(username));
            throw new RuntimeException("User Already Exist");
        }

        var encodedPassword = passwordEncoder.encode(password);

        var authorities = new ArrayList<GrantedAuthority>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

        var appUser = AppUser.builder()
                .firstName(firstName)
                .lastName(lastName)
                .username(username)
                .password(encodedPassword)
                .emailId(email)
                .authorityList(authorities)
                .build();

        appUserDao.save(appUser);

        return JwtUtil.generateToken(username);
    }
}
