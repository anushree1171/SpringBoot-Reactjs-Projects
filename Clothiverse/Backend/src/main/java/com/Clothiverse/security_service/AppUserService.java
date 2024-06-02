package com.Clothiverse.security_service;

import com.Clothiverse.security_repository.AppUserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AppUserService implements UserDetailsService {

    private final AppUserRepo appUserDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        var appUser = appUserDao.findByUsername(username)
                .orElseThrow(()->new UsernameNotFoundException("User not found!"));

        return new User(appUser.getUsername(), appUser.getPassword(), appUser.getAuthorityList());

    }
}
